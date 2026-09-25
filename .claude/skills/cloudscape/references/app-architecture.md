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
- **Unsaved changes:** `HashRouter` can't block navigation, because React Router's `useBlocker` only works with its data routers. The template's `NavigationGuard` handles Cloudscape's unsaved-changes pattern (`patterns/general/unsaved-changes.md`) instead. In a form page:

  ```jsx
  const navigate = useGuardedNavigate()
  useUnsavedChanges(name !== original.name || due !== original.due)  // true while there are unsaved edits
  // Cancel button: navigate(`/orders/${id}`) asks first when there are unsaved edits
  // after a successful save: navigate(`/orders/${id}`, { force: true })
  ```

  - **What prompts:** every `useFollow()` link (side navigation, breadcrumbs, in-app links) and the TopNavigation title go through the guard. Leaving while edits are unsaved shows the pattern's "Leave page" modal, and closing or reloading the tab shows the browser's own warning.
  - **What doesn't:** the hash URL bar and the browser's back button bypass the guard. That's an accepted gap; mention it to the user when it matters.
- **Navigating from effects:** react-router's `useNavigate()` returns a new function on every route change. Don't list it in `useEffect` dependencies. Use `useGuardedNavigate()`, which is stable, or keep `navigate` in a ref.

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

## Navigation: root sections and a scoped side navigation

The user's house rule for every app: TopNavigation is the root navigation, and the side navigation is scoped to the section chosen there. One list in `App.jsx` drives both:

```jsx
const SECTIONS = [
  { text: 'Home', href: '#/', path: '/', links: [] },
  { text: 'Customers', href: '#/customers', path: '/customers/*', links: [
    { type: 'link', text: 'List', href: '#/customers' },
  ] },
]
```

- **TopNavigation:** each section is one utility, `{ type: 'button', variant: 'link', text, href, onFollow: follow }`, in `SECTIONS` order. Home comes first and goes to `#/`. The identity title also goes to `#/`.
- **Side navigation:** shows only the current section. Its `header` is the section itself (`{ text: 'Customers', href: '#/customers' }`), not the app name, and its `items` are the section's `links`. Home's side navigation has the header "Home" and no links unless Home gets pages of its own.
- **Current section:** the first section whose `path` matches the route (`currentSection()`). Routes outside every section, such as unknown routes, fall under the first section, Home.
- **Active link:** `activeLinkHref()` picks the most specific link whose route contains the current one, so `#/customers/abc` and `#/customers/abc/edit` keep "List" active, as Cloudscape's side navigation pattern asks.
- **Link names:** keep them short and matching the breadcrumbs. An entity's list page is "List". Add more links for other pages in the section, like "Create" or "Reports", only when they're real destinations; a details or edit page never gets its own link.

**How this differs from Cloudscape.** Cloudscape's service-navigation pattern puts structural navigation in the side navigation, keeps TopNavigation for global utilities (notifications, settings, profile), and uses the app's name as the side navigation's header. This project deliberately does it the other way, so build it this way without re-litigating. Two of Cloudscape's rules still apply and matter here:

- **At most four TopNavigation controls.** With more than four sections, group the extra ones in a `menu-dropdown` utility, or ask the user which areas really are root sections.
- **Utilities have no selected state.** TopNavigation doesn't highlight the current section, so the side navigation's header is what tells the user where they are. Always show it.

## Data: the Artifact database by default

Use the claude.ai Artifact `db` store unless the user names another database. It holds any kind of record the app needs, with one collection per entity type. The template's data layer wraps it with one generic hook:

```jsx
const customers = useDocuments('customers')   // any collection name, one per entity type
customers.docs      // live array of { id, createdAt, ...fields }, sorted by createdAt
customers.loading   // true until the first snapshot
customers.error     // set if the subscription fails
customers.backend   // 'artifact-db' in the claude.ai viewer, 'browser' elsewhere
await customers.add({ name: 'Acme Corp', tier: 'gold' })   // resolves to the new id
await customers.update(id, { tier: 'silver' })             // merges fields; pass null to clear one
await customers.remove(id)
```

### Modeling entities

- **Collections:** use one collection per entity type, named with a lowercase plural: `customers`, `orders`, `invoices`. Names may use letters, digits and `_ - . ~ : @ +`. Each record is one document, and the store generates its ID.
- **Fields:**
  - Plain JSON only: strings, numbers, booleans, `null`, arrays and nested objects.
  - Store dates as ISO strings, like `2026-09-25`.
  - Store money as a number of the smallest unit (cents), or as a decimal string.
  - Choices like status or tier are strings from a fixed list, defined once in `App.jsx` and reused by the form, the table and the details page.
- **Links between records:** store the other record's ID in a field named for it, for example an order's `customerId`. Look it up in the other collection's `docs` for display, such as a customer name in the orders table. Many-to-many links are an array of IDs (`tagIds: [...]`) or a small join collection when the link has its own fields.
- **Deleting linked records:** deleting a record doesn't delete records that point to it. When removing one that others reference, say so in the delete confirmation. Either block it, remove or reassign the dependents, or show "Unknown customer" where a link no longer resolves.
- **Nested collections:** use one only when the children are meaningless outside one parent, like `projects/<projectId>/notes`. Call ``useDocuments(`projects/${projectId}/notes`)`` in that parent's pages. Deleting the parent doesn't delete them.
- **Private data per person:** per-person data (preferences, drafts) goes under `data/users/<id>/…`, which only that viewer can read. This also needs the `user` capability, declared as `capabilities: {"db": {}, "user": {}}`, and the viewer's ID from `claude.use('user')`. See the `artifact-capabilities` skill.
- **Size limit:** all collections together share one database capped at 5,000 documents. Keep ever-growing streams, such as activity logs, out of one-document-per-event designs: batch them into one document per day, or prune old ones.

### Adding an entity to the app

1. **Data:** in `Shell`, add `const orders = useDocuments('orders')` and pass it to that entity's pages. Pass related collections too, such as `customers` for showing customer names.
2. **Routes:** `#/orders` (list), `#/orders/:id` (details), and `#/orders/create` or `#/orders/:id/edit` when the create or edit patterns call for full pages. Declare them inside `<Routes>` before the `*` route.
3. **Navigation:** a new root area gets a `SECTIONS` entry with `path: '/orders/*'` and a "List" link, which adds its TopNavigation button and its scoped side navigation. An entity that belongs to an existing area gets a link in that section's `links` instead, with its routes under the section's path. Extend `useBreadcrumbs` for the new pages.
4. **Pages:** follow the resource-management patterns:
   - **List:** `patterns/resource-management/view/table-view.md`.
   - **Details:** `details/details-page.md`.
   - **Create:** `create.md`, which says when to use a modal, a page or a wizard.
   - **Edit and delete:** `edit.md` and `delete.md`.

   Reuse the template's Items pages as the starting shape, but write each entity's fields, validation and columns explicitly.

### Using the data layer

- **Not collection-hooks:** `useDocuments` is this app's data store. Cloudscape's `useCollection`, from `@cloudscape-design/collection-hooks`, handles filtering, sorting and pagination of what's on screen. Use them together: `useCollection(orders.docs, {...})`.
- **Where it runs:** inside the claude.ai viewer, `window.claude.use('db')` provides the store. Elsewhere, such as `npm run dev`, a local copy of the page, or a view without the capability, it falls back to `localStorage` under the same API. Show "Saved in this browser only." when `backend === 'browser'`.
- **Subscribe once:** call `useDocuments(collection)` once per collection, high enough in the tree that data survives route changes. The template calls it in `Shell` and passes the result to pages. Updates are live, including other people's edits, so tables don't need a refresh button.
- **Document size:** each document holds at most 256 KiB. Split large content, like long text or many rows, across documents.
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
