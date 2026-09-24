#!/usr/bin/env node
// Generates one Markdown API reference per public Cloudscape component from the installed
// package's type definitions (the same JSDoc the cloudscape.design "API" tabs are built from).
//
// Usage (from a project that has @cloudscape-design/components and typescript installed):
//   node <skill>/scripts/generate-references.mjs [outDir]
// outDir defaults to <skill>/references/components; each component gets <outDir>/<folder>/api.md.

import { createRequire } from 'node:module'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(path.join(process.cwd(), 'package.json'))
const ts = require('typescript')
const pkgDir = path.dirname(require.resolve('@cloudscape-design/components/package.json'))
const pkg = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf8'))

const skillDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.resolve(process.argv[2] ?? path.join(skillDir, 'references', 'components'))

const NOT_COMPONENTS = new Set(['internal', 'test-utils', 'i18n', 'theming', 'contexts', 'interfaces', 'plugins', 'types'])
// cloudscape.design documents the new @cloudscape-design/chart-components PieChart under
// "pie-chart"; the one in this package is the site's "pie-chart-legacy".
const SITE_FOLDER = { 'pie-chart': 'pie-chart-legacy' }

const pascal = dir => dir.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('')

const publicDirs = Object.keys(pkg.exports ?? {})
  .map(k => k.replace(/^\.\//, ''))
  .filter(k => k && !k.includes('/') && !k.includes('.') && !NOT_COMPONENTS.has(k))
  .filter(k => fs.existsSync(path.join(pkgDir, k, 'interfaces.d.ts')))
  .sort()

const files = publicDirs.map(d => path.join(pkgDir, d, 'interfaces.d.ts'))
const program = ts.createProgram(files, { skipLibCheck: true, noEmit: true, jsx: ts.JsxEmit.ReactJSX })
const checker = program.getTypeChecker()

const docOf = sym => ts.displayPartsToString(sym.getDocumentationComment(checker)).trim()
const tagsOf = sym => sym.getJsDocTags(checker)
  .filter(t => ['deprecated', 'awsuiSystem', 'i18n', 'defaultValue'].includes(t.name))
  .map(t => `@${t.name}${t.text ? ' ' + ts.displayPartsToString(t.text).trim() : ''}`)

function typeText(sym) {
  const decl = sym.valueDeclaration ?? sym.declarations?.[0]
  if (decl && decl.type) return decl.type.getText().replace(/\s+/g, ' ')
  return checker.typeToString(checker.getTypeOfSymbol(sym))
}

// JSDoc links point at cloudscape.design paths; send them to the sibling files in this skill.
const localizeLinks = text => text
  .replace(/\]\(\/components\/([a-z0-9-]+)\/?(?:\?tabId=(\w+))?(#[^)]*)?\)/g,
    (_, name, tab, hash = '') => `](../${name}/${tab === 'api' ? 'api.md' : 'guidelines.md'}${hash})`)
  .replace(/\]\(\//g, '](https://cloudscape.design/')

const indent = (text, pad) => text.split('\n').map((l, i) => (i === 0 ? l : pad + l)).join('\n')

function render(dir) {
  const source = program.getSourceFile(path.join(pkgDir, dir, 'interfaces.d.ts'))
  const moduleSym = checker.getSymbolAtLocation(source)
  const exports = moduleSym ? checker.getExportsOfModule(moduleSym) : []
  const name = pascal(dir)
  const propsSym = exports.find(s => s.name === `${name}Props`)
    ?? exports.find(s => /Props$/.test(s.name) && !/^Base|^Internal/.test(s.name))
  if (!propsSym) return null

  const propsType = checker.getDeclaredTypeOfSymbol(propsSym)
  const props = checker.getPropertiesOfType(propsType)
    .filter(p => !p.name.startsWith('__'))
    .sort((a, b) => a.name.localeCompare(b.name))

  const line = p => {
    const optional = p.flags & ts.SymbolFlags.Optional ? '?' : ''
    const tags = tagsOf(p)
    const doc = docOf(p)
    let out = `- **\`${p.name}${optional}\`**: \`${typeText(p)}\``
    if (tags.length) out += ` _(${tags.join('; ')})_`
    if (doc) out += `\n  ${indent(doc, '  ')}`
    return out
  }

  const events = props.filter(p => /^on[A-Z]/.test(p.name))
  const regular = props.filter(p => !/^on[A-Z]/.test(p.name))

  const namespaceDecls = source.statements.filter(
    s => ts.isModuleDeclaration(s) && s.name.getText() === propsSym.name,
  )

  return [
    `# ${name}`,
    '',
    '```ts',
    `import ${name} from '@cloudscape-design/components/${dir}'`,
    `import type { ${propsSym.name} } from '@cloudscape-design/components/${dir}'`,
    '```',
    '',
    `Generated from \`@cloudscape-design/components@${pkg.version}\` \`${dir}/interfaces.d.ts\`. ` +
      'Descriptions are the library\'s own JSDoc (the same text as the API tab on cloudscape.design).',
    '',
    '## Properties',
    '',
    ...regular.map(line),
    '',
    '## Events',
    '',
    'Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.',
    '',
    ...(events.length ? events.map(line) : ['_None._']),
    '',
    ...(namespaceDecls.length
      ? ['## Types', '', `Supporting types from \`${propsSym.name}\` (verbatim):`, '', '```ts', ...namespaceDecls.map(d => d.getText()), '```', '']
      : []),
  ].join('\n').replace(/\]\([^)]*\)/g, m => localizeLinks(m))
}

fs.mkdirSync(outDir, { recursive: true })
const written = []
for (const dir of publicDirs) {
  const md = render(dir)
  if (!md) { console.warn(`skip ${dir}: no Props interface found`); continue }
  const folder = SITE_FOLDER[dir] ?? dir
  fs.mkdirSync(path.join(outDir, folder), { recursive: true })
  fs.writeFileSync(path.join(outDir, folder, 'api.md'), md)
  written.push(dir)
}
console.log(`wrote ${written.length} references for @cloudscape-design/components@${pkg.version} to ${outDir}`)
