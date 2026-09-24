---
name: hash-url-bar
description: Adds a browser-style "meta" URL bar (back, forward, an editable `#` route field, and a Go button) pinned to the top of a React single-page app that uses react-router's HashRouter, so you can see and type hash routes when the app is previewed somewhere with no real address bar (a claude.ai Artifact, an iframe, an embedded preview). Use this skill whenever the user asks for a hash navigation bar, a fake/simulated URL bar, a route bar, "show the current hash route at the top", back/forward buttons for an SPA preview, or wants to navigate an Artifact-hosted app by path — even if they don't say "skill" or name the component.
---

# Hash URL bar

A fixed, 40px-tall dark bar at the very top of the page that acts as a stand-in for the browser's address bar:

`[‹] [›] [ # /current/route ............................ ] [Go]`

It's meant to look like part of the surrounding host UI (Claude Code / the browser), **not** part of the app's own design system. That's why it uses plain elements with inline styles instead of the project's component library: if it picked up Cloudscape/MUI/Tailwind styling, it would read as an app feature instead of as the tooling around the app.

The finished component is at `assets/HashUrlBar.tsx`. Copy it as-is rather than rewriting it. Its details were tuned through several rounds of feedback, listed under "Behavior to keep" below.

## Steps

1. **Check the router.** The bar uses `useLocation` and `useNavigate`, so it needs `react-router-dom` v6 or newer, and it has to render *inside* the router.
   - No `react-router-dom`: install it (`npm install react-router-dom`).
   - Already has `HashRouter`: good, go on.
   - Uses `BrowserRouter` / `createBrowserRouter`: ask before switching. Hash routing is what makes deep links work on static hosting like Artifacts, but switching changes the app's URLs. `createHashRouter` + `RouterProvider` works too; render the bar inside a root layout route in that case.
   - react-router v5 (`useHistory`): adapt the component to `history.push`, `history.goBack()`, and `history.goForward()` instead of upgrading the app without asking.

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

If the user asks for changes to the bar itself, make them in the project's copy, and mention that the skill's `assets/HashUrlBar.tsx` should get the same change if they want it to stick for future projects.
