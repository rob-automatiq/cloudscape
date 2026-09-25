---
name: hash-url-bar
description: Adds hash routing with react-router-dom's HashRouter plus a browser-style "meta" URL bar (back, forward, an editable `#` route field, and a Go button) pinned to the top of a React app, including a ready-made single-file version for one-file React Artifacts, so you can see and type hash routes when the app is previewed somewhere with no real address bar (a claude.ai Artifact, an iframe, an embedded preview). Use this skill whenever the user asks for a hash navigation bar, a fake/simulated URL bar, a route bar, "show the current hash route at the top", back/forward buttons for an SPA preview, or wants to navigate an Artifact-hosted app by path — even if they don't say "skill" or name the component.
---

# Hash URL bar

A fixed, 40px-tall dark bar at the very top of the page that acts as a stand-in for the browser's address bar:

`[‹] [›] [ # /current/route ............................ ] [Go]`

It's meant to look like part of the surrounding host UI (Claude Code / the browser), **not** part of the app's own design system. That's why it uses plain elements with inline styles instead of the project's component library: if it picked up Cloudscape/MUI/Tailwind styling, it would read as an app feature instead of as the tooling around the app.

The finished bar comes in two forms. Copy them as-is rather than rewriting them. Their details were tuned through several rounds of feedback, listed under "Behavior to keep" below.

- `assets/HashUrlBar.tsx`: the component on its own, for multi-file projects.
- `assets/SingleFileApp.jsx`: a complete single-file app (the bar, `HashRouter`, example routes, and a default export), for a one-file React Artifact.

## Routing: always `HashRouter` from `react-router-dom`

Routing uses `<HashRouter>` from `react-router-dom` (v6 or newer), and nothing else. Don't use `BrowserRouter`, `MemoryRouter`, `createHashRouter`/`RouterProvider`, a hand-rolled `hashchange` listener, or another routing library. This is what makes routing reliable inside an Artifact:

- **Artifacts are static pages at a fixed URL, with no server to answer other paths.** The part after `#` never goes to a server. So `#/tasks/3` survives reloads, deep links, and republishing, while a path URL like `/tasks/3` (from `BrowserRouter`) breaks or leaves the Artifact.
- **`MemoryRouter` keeps the route in memory only.** It resets on reload and can't be linked to.
- **The bar depends on HashRouter's browser history.** Its disabled back and forward buttons read React Router's `history.state.idx`, which `HashRouter` writes to the real browser history.
- **One router component keeps it predictable.** `<HashRouter>` wraps the app, routes are `<Routes>`/`<Route>`, and every link and navigation goes through React Router: `<Link to="/tasks">`, `navigate('/tasks')`, or an `href="#/tasks"` that the app intercepts. Never set `window.location` or use a plain `<a href="/tasks">`, because those bypass the router.

## Single-file React Artifact

When the whole app lives in one file, start from `assets/SingleFileApp.jsx`.

- **What's in it:**
  - It imports only from `react` and `react-router-dom`.
  - The bar is included in the same file.
  - `<HashRouter>` wraps the app, with `<Routes>` for the pages and a `*` route for unknown paths.
  - The app is the default export.
- **How to adapt it:** replace the example `Home`, `Items`, `Item` and `NotFound` pages with the app's own. Keep the `HashRouter` wrapper, keep `<HashUrlBar />` as its first child, and keep the bar's code unchanged.
- **Keeping it in sync:** the bar's code in this file is the same as `HashUrlBar.tsx` with its types removed. Change both together.

## Steps (multi-file project)

1. **Set up the router.** The bar has to render inside a `HashRouter` from `react-router-dom` v6+, as described above.
   - **No `react-router-dom`:** install it (`npm install react-router-dom`).
   - **Already uses `HashRouter`:** go on.
   - **Uses another router** (`BrowserRouter`, `createBrowserRouter`, `createHashRouter`, `MemoryRouter`): switch to `HashRouter`. Tell the user that URLs change from `/tasks` to `#/tasks`.
   - **On react-router v5:** ask before upgrading to v6+, since the upgrade changes the routing APIs across the app.

2. **Copy the component** to `src/components/HashUrlBar.tsx`, or wherever the project keeps shared components.

3. **Mount it** as the first child inside the router. Nothing else is needed, because the component reserves its own space:

   ```tsx
   import HashUrlBar from './components/HashUrlBar'

   <HashRouter>
     <HashUrlBar />
     {/* existing app */}
   </HashRouter>
   ```

   How it works: the bar is `position: fixed`, so it stays pinned while the page scrolls. A fixed element takes up no space in the page, though, so the component also renders a 40px spacer `<div>` right before the bar, and the page content starts below it. Don't switch the bar to `position: sticky` to drop the spacer. Sticky silently stops working when any parent element has `overflow: hidden` or `auto`, which is common in app layouts.

4. **Offset any other fixed headers.** Other `position: fixed` elements are placed relative to the screen, so they can't see the spacer. Any element pinned to `top: 0` (a Cloudscape `TopNavigation` wrapper, a fixed navbar) needs `top: HASH_URL_BAR_HEIGHT` (import the constant) and a z-index below 10000. The content still has to clear that header's own height, for example `paddingTop: 56` for Cloudscape's TopNavigation. The URL bar's 40px is already covered by its spacer.

5. **Make the build work on static hosting.** If the app will be published as a claude.ai Artifact or served from a sub-path, make asset URLs relative. For Vite, set `base: './'` in `vite.config.ts`. Without this, the built `index.html` points to `/assets/...` and the preview renders a blank page.

6. **Verify.** Run the project's build or typecheck. If you can, open the app and type a route (e.g. `/things/1/list`), then press Go. The URL should become `#/things/1/list`, and back/forward should move through history.

## Behavior to keep

These came from direct user feedback on earlier versions, so don't "improve" them back:

- **Full width.** The route field stretches across the bar. No `max-width`, no centering.
- **No decorative chrome.** No macOS traffic-light circles, Windows style controls, or lock icon. Do not add any unnecessary controls that do not perform a real function. Controls that do nothing were explicitly rejected.
- **Cross-platform.** It shouldn't look like it belongs to any one operating system. Keep the font lists generic (`system-ui` and `ui-monospace` first, then fallbacks for macOS, Windows, and Linux), and keep the button icons as plain inline SVG chevrons rather than OS-specific glyphs or emoji.
- **A dim `#` on the left, then exactly what the user typed.** The field's value is the raw route, and whatever is typed is exactly what goes after `#`: typing `/things/123/list` gives `#/things/123/list`. Don't add a `claude.ai/artifact` prefix, a static `#/` segment, or auto-insert slashes.
- **Go is always visible**, not only while editing. Clicking Go with an unchanged value re-navigates to the same route, and Enter does the same.
- **The text never shifts on focus.** Use the same element in both states: an always-rendered `<input>`, not a span that turns into an input. Otherwise the text jumps when clicked.
- **It stays in sync.** When the route changes from in-app links, back/forward, or a top nav, the field updates to match.
- **Back (‹) and forward (›)** sit to the left of the field and call `navigate(-1)` and `navigate(1)`.
- **They disable and dim when there's nowhere to go.** Back is off on the app's first history entry. This also stops Back from leaving the app, for example navigating the page that embeds an Artifact. Forward is off unless you've gone back and not navigated anywhere new since. This relies on the `history.state.idx` that `HashRouter` (react-router-dom v6+) writes, plus the furthest position the component has seen. After a full page reload, Forward starts out disabled, because that furthest position is kept in memory only. That's an accepted limitation. Don't add sessionStorage to work around it.

If the user asks for changes to the bar itself, make them in the project's copy, and mention that the skill's `assets/HashUrlBar.tsx` and `assets/SingleFileApp.jsx` should get the same change if they want it to stick for future projects.
