import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Inlines the built JS and CSS (fonts included) into dist/index.html, so the whole app publishes
// as one self-contained HTML file: republishing is a single-file update with no asset list to track.
function inlineIntoHtml() {
  return {
    name: 'inline-into-html',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const html = Object.values(bundle).find(file => file.fileName.endsWith('.html'))
      if (!html) return
      let source = String(html.source)
      for (const [name, file] of Object.entries(bundle)) {
        if (file.type === 'chunk' && file.isEntry) {
          const code = file.code.replace(/<\/script/gi, '<\\/script')
          source = source.replace(
            new RegExp(`<script[^>]*src="[^"]*${escapeRegExp(file.fileName)}"[^>]*></script>`),
            () => `<script type="module">${code}</script>`,
          )
          delete bundle[name]
        } else if (file.type === 'asset' && file.fileName.endsWith('.css')) {
          source = source.replace(
            new RegExp(`<link[^>]*href="[^"]*${escapeRegExp(file.fileName)}"[^>]*>`),
            () => `<style>${String(file.source)}</style>`,
          )
          delete bundle[name]
        }
      }
      html.source = source
    },
  }
}

const escapeRegExp = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export default defineConfig({
  plugins: [react(), inlineIntoHtml()],
  base: './',
  build: {
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    cssCodeSplit: false,
    modulePreload: false,
    chunkSizeWarningLimit: 4000,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
})
