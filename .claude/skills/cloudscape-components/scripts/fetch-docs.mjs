#!/usr/bin/env node
// Downloads the cloudscape.design documentation that the site publishes for AI tools
// (every page listed in https://cloudscape.design/llms.txt, as Markdown) plus the coded
// snippets index, into this skill's references/ folder, with site links rewritten to the
// local copies.
//
// Usage: node <skill>/scripts/fetch-docs.mjs
// Behind an HTTPS proxy, Node's fetch needs NODE_USE_ENV_PROXY=1 (Node 22.21+).
// Run scripts/generate-references.mjs first so components that have a local api.md are
// not given a downloaded api.json as well.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = 'https://cloudscape.design'
const skillDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const refDir = path.join(skillDir, 'references')
const today = new Date().toISOString().slice(0, 10)

async function get(url, attempts = 3) {
  for (let i = 1; ; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return await res.text()
      if (res.status === 404) return null
      throw new Error(`HTTP ${res.status}`)
    } catch (err) {
      if (i >= attempts) throw new Error(`${url}: ${err.message}`)
      await new Promise(r => setTimeout(r, 1000 * i))
    }
  }
}

async function pool(items, size, fn) {
  const out = new Array(items.length)
  let next = 0
  await Promise.all(Array.from({ length: size }, async () => {
    while (next < items.length) { const i = next++; out[i] = await fn(items[i]) }
  }))
  return out
}

// Site page path (e.g. "components/date-picker", "patterns/general/empty-states") -> local file.
function localPathFor(sitePath) {
  const parts = sitePath.split('/').filter(Boolean)
  if (!parts.length) return null
  if (parts[0] === 'components' && parts.length === 2) return `components/${parts[1]}/guidelines.md`
  if (parts.length === 1) return `${parts[0]}/index.md`
  return `${parts.join('/')}.md`
}

const PAGE_LINK = /^(?:https:\/\/cloudscape\.design)?\/?(.*?)\/?index\.html\.md(#.*)?$/

function rewriteLinks(md, fromLocal, known) {
  md = md.replace(/\[([^\]]*)\]\(about:[^)]*\)/g, '$1')
  return md.replace(/\]\(([^)\s]+)\)/g, (all, href) => {
    const m = href.match(PAGE_LINK)
    if (m) {
      const target = localPathFor(m[1])
      if (target && known.has(target)) return `](${path.posix.relative(path.posix.dirname(fromLocal), target)}${m[2] ?? ''})`
      return `](${SITE}/${m[1]}${m[1] ? '/' : ''}${m[2] ?? ''})`
    }
    if (href.startsWith('/')) return `](${SITE}${href})`
    return all
  })
}

const stripSiteChrome = md => md.split(/\n## Search Cloudscape\b/)[0].trimEnd() + '\n'

function withSource(md, sitePath) {
  const lines = md.split('\n')
  const h1 = lines.findIndex(l => l.startsWith('# '))
  lines.splice(h1 + 1, 0, '', `> Source: ${SITE}/${sitePath}/ (fetched ${today})`)
  return lines.join('\n')
}

const llms = await get(`${SITE}/llms.txt`)
if (!llms) throw new Error('llms.txt not found')
const sitePaths = [...new Set([...llms.matchAll(/\]\((https:\/\/cloudscape\.design\/[^)\s]*index\.html\.md)\)/g)]
  .map(m => m[1].match(PAGE_LINK)[1]).filter(Boolean))]

const pages = (await pool(sitePaths, 6, async p => ({ sitePath: p, local: localPathFor(p), md: await get(`${SITE}/${p}/index.html.md`) }))).filter(p => p.md)
const known = new Set(pages.map(p => p.local))

for (const p of pages) {
  const file = path.join(refDir, p.local)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, rewriteLinks(withSource(stripSiteChrome(p.md), p.sitePath), p.local, known))
}

fs.writeFileSync(path.join(refDir, 'index.md'),
  `> Index of the Cloudscape documentation in this skill, adapted from ${SITE}/llms.txt (fetched ${today}). Links point to the local copies.\n\n` +
  rewriteLinks(llms, 'index.md', known))

// Components documented on the site but not in the installed package get the site's JSON API instead of api.md.
let apiJson = 0
for (const p of pages.filter(p => /^components\/[^/]+$/.test(p.sitePath))) {
  const dir = path.join(refDir, path.dirname(p.local))
  if (fs.existsSync(path.join(dir, 'api.md'))) continue
  const json = await get(`${SITE}/${p.sitePath}/index.html.json`)
  if (json) { fs.writeFileSync(path.join(dir, 'api.json'), json); apiJson++ }
}

const snippetsDir = path.join(refDir, 'snippets')
fs.mkdirSync(snippetsDir, { recursive: true })
const snippetIndex = await get(`${SITE}/snippets-content/index.md`)
const snippetNames = [...snippetIndex.matchAll(/^- \[[^\]]+\]\(([^)]+\.txt)\)/gm)].map(m => m[1])
const snippetBodies = await pool(snippetNames, 6, n => get(`${SITE}/snippets-content/${n}`))
snippetNames.forEach((n, i) => snippetBodies[i] && fs.writeFileSync(path.join(snippetsDir, n), snippetBodies[i]))
fs.writeFileSync(path.join(snippetsDir, 'index.md'), `> Source: ${SITE}/snippets-content/index.md (fetched ${today})\n\n${snippetIndex}`)

console.log(`wrote ${pages.length} pages, ${apiJson} api.json files, ${snippetBodies.filter(Boolean).length} snippets to ${refDir}`)
