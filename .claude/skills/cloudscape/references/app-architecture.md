# App architecture

The default shape of every app this skill builds. `assets/app-template/` is a working, tested copy of it. Start from the template instead of rebuilding these pieces.

## Files

```
package.json      react, react-dom, react-router-dom, @cloudscape-design/components,
                  global-styles and collection-hooks; Vite with the React plugin
vite.config.js    base './' and a small plugin that inlines all JS and CSS into dist/index.html
index.html        mounts #root and loads src/main.jsx
src/main.jsx      mounts <App />. Nothing else goes here.
src/App.jsx       the whole application
```

All application code lives in `src/App.jsx`: pages, components, data access, routes, and global CSS fixes. Organize it with section comments rather than splitting it into files. The user works in this one file, in the Claude Code browser.

## Routing

- **Router:** `<HashRouter>` from `react-router-dom` (v6+) wraps the app, and routes are `<Routes>`/`<Route>` inside it. Use nothing else (no `BrowserRouter`, `MemoryRouter`, `createHashRouter`, hand-rolled hash handling, or another library). The app is published as a static Artifact page at one URL, where only the part after `#` survives reloads, deep links and republishing.
- **Links:** Cloudscape links keep `href="#/path"` (so "open in new tab" works) and route through `onFollow`. Use the template's `useFollow()` helper, which calls `event.preventDefault()` and then `navigate()`. It works for Link, SideNavigation, BreadcrumbGroup and ButtonDropdown items.
  - **TopNavigation's identity:** its event carries no `href`, so it calls `navigate('/')` directly.
  - **Other navigation:** `navigate('/path')` in code, or react-router's `<Link to>` for non-Cloudscape elements. Never `window.location` or a plain `<a href="/path">`.
- **Route IDs:** use the document IDs from the data layer, as in `#/items/:id`.
- **Unknown routes:** always keep a `*` route that shows a not-found page.
- **Unsaved changes:** `HashRouter` can't block navigation. React Router's `useBlocker` only works with its data routers, which this architecture doesn't use. So for Cloudscape's unsaved-changes pattern (`patterns/general/unsaved-changes.md`):
  - Confirm with a modal from the app's own exits: Cancel, breadcrumb, side-navigation and top-navigation `onFollow` handlers.
  - Add a `beforeunload` listener for closing or reloading the tab.
  - The URL bar and the browser's back button can't be intercepted. That's an accepted gap; mention it to the user when it matters.

## Header: hash URL bar and TopNavigation

The page header is one sticky element holding the hash URL bar and then Cloudscape's TopNavigation:

```jsx
<div id="app-header" style={{ position: 'sticky', top: 0, zIndex: 1002 }}>
  <HashUrlBar />
  <TopNavigation identity={...} />
</div>
<AppLayout headerSelector="#app-header" ... />
```

`headerSelector` is how Cloudscape's AppLayout learns the header's height, so its content, sticky table headers and drawers start beneath it. The z-index follows the TopNavigation guidelines (1002 to 1999). The bar itself is `position: fixed` at `z-index: 10000` with its own 40px spacer, so it stays above everything.

`HashUrlBar` comes from the hash-url-bar skill and is copied verbatim into the template. Keep its behavior:

- **Layout:** full width, with a dim `#` followed by the route exactly as typed. `/things/1/list` becomes `#/things/1/list`, with no prefix and no inserted slashes.
- **Go:** always visible, and pressing Enter does the same. Going to an unchanged route re-navigates to it.
- **Buttons:** back (‹) and forward (›) disable and dim when there's nowhere to go. That state comes from `history.state.idx`, which `HashRouter` writes. Forward starts disabled after a full reload; that's accepted.
- **Focus:** the field is always a real `<input>`, so text doesn't shift when you click into it.
- **No extra chrome:** no traffic lights, no lock icon, and no controls that don't do anything.
- **Neutral styling:** plain inline styles (dark `#1c1c1e` bar and a white Go button), not Cloudscape styling, because it represents the host's address bar rather than the app. Fonts start with `system-ui` and `ui-monospace`, so it doesn't look tied to one operating system.

## Data: the Artifact database by default

Use the claude.ai Artifact `db` store unless the user names another database. The template's data layer wraps it:

```jsx
const tasks = useDocuments('tasks')
tasks.items            // live array of { id, createdAt, ...fields }, sorted by createdAt
tasks.loading          // true until the first snapshot
tasks.error            // set if the subscription fails
tasks.backend          // 'artifact-db' in the claude.ai viewer, 'browser' elsewhere
await tasks.add({ name: 'Mow lawn', done: false })   // resolves to the new id
await tasks.update(id, { done: true })               // merges fields; pass null to clear one
await tasks.remove(id)
```

- **Not collection-hooks:** `useDocuments` is this app's data store. Cloudscape's `useCollection`, from `@cloudscape-design/collection-hooks`, handles filtering, sorting and pagination of what's on screen. Use them together: `useCollection(tasks.items, {...})`.
- **Where it runs:** inside the claude.ai viewer, `window.claude.use('db')` provides the store. Elsewhere, such as `npm run dev`, a local copy of the page, or a view without the capability, it falls back to `localStorage` under the same API. Show "Saved in this browser only." when `backend === 'browser'`.
- **Subscribe once:** call `useDocuments(path)` once per collection, high enough in the tree that data survives route changes. The template calls it in `Shell` and passes the result to pages. Updates are live, including other people's edits, so tables don't need a refresh button.
- **Document shape:**
  - One document per record, at `<collection>/<id>`, holding plain JSON with no functions or `Date` objects. Store dates as ISO strings, for example `2026-09-25`.
  - IDs are generated by the store, so two people can't create the same one.
  - Each document is limited to 256 KiB, and the whole database to 5,000 documents. Don't store an ever-growing log as one document per entry.
- **Writes and errors:** the data layer queues writes to the same document one at a time, as the store requires. Writes reject with `{ code, message }`. Show `saveErrorMessage(error)` in a Flashbar via `useNotify()`, and keep forms open so nothing is lost. Common codes:
  - `quota_exceeded`: the database is full.
  - `invalid_argument`: this viewer isn't allowed to write, or the call was invalid.
- **Seeding data:** never hardcode starting data into the page. After publishing, seed documents with the `ArtifactData` tool (`batch` of `set` writes). Check with `list` first that the collection is empty.
- **Changing the data format:** make the code tolerate older documents (missing fields get defaults when read), or migrate them with `ArtifactData`. Never wipe data.
- **Limits to know:** last write wins, with no transactions. Declaring `db` makes the Artifact organization-internal (no public link). Default access lets anyone who can open it read, and people with "can interact" or higher write. Access rules can be declared per path. Full reference: the `artifact-capabilities` skill's `db.d.ts`.
- **Another database:** if the user names one (Supabase, Firebase, a REST API…), implement it behind the same `useDocuments` interface, replacing `artifactDbCollection`, so pages don't change. Say what the Artifact sandbox needs, such as a network-reachable HTTPS endpoint and credentials that are safe to expose in a browser.

## Build and publish

1. **New app:** copy `assets/app-template/` into the project root (or an empty directory) and run `npm install`. Set `APP_NAME` in `src/App.jsx` and the `<title>` in `index.html` to the app's name, then replace the example pages.
2. **Build:** run `npm run build`. It produces one self-contained `dist/index.html` of about 2 MB, including fonts, with no separate files.
3. **Preview locally** with `npm run preview` or any static server. Check `console` errors, not just rendering.
4. **First publish:** publish `dist/index.html` with the `Artifact` tool, passing `capabilities: {"db": {}}`, a `favicon`, and a short `description`.
5. **Updates:** republish the same `dist/index.html` to the same URL. Leave out `capabilities` so the declaration carries forward. The stored data is untouched by republishing.
6. **After the first publish:** seed any starting data, then run one `ArtifactData` `list` of each collection the page writes, to confirm the store is reachable.
