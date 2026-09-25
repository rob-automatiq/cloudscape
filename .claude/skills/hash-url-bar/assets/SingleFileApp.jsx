// Single-file React app with hash routing and the hash URL bar. Everything lives in this one file:
// it imports only from 'react' and 'react-router-dom', and default-exports the app.
// Routing MUST use <HashRouter> from react-router-dom (see SKILL.md for why).
import { useEffect, useRef, useState } from 'react'
import { HashRouter, Routes, Route, Link, useLocation, useNavigate, useNavigationType, useParams } from 'react-router-dom'

// ── Hash URL bar (keep in sync with HashUrlBar.tsx) ──────────────────────────

const HASH_URL_BAR_HEIGHT = 40;
const MONO = {
    fontFamily: 'ui-monospace, "SF Mono", Menlo, "Cascadia Mono", Consolas, "Liberation Mono", monospace',
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 1,
};
const NAV_BUTTON = {
    flexShrink: 0,
    width: 26,
    height: 26,
    borderRadius: 6,
    background: 'transparent',
    border: '1px solid #3a3a3c',
    color: '#ebebf5aa',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
};
const NAV_BUTTON_DISABLED = {
    ...NAV_BUTTON,
    color: '#ebebf52e',
    cursor: 'default',
};
// React Router records each entry's position in history.state.idx (0 = first page of the app).
// The browser can't report forward entries, so remember the furthest position reached;
// a PUSH discards everything ahead of it. Recomputing on every render is idempotent.
function useHistoryBounds() {
    const navigationType = useNavigationType();
    const maxIdx = useRef(0);
    const idx = window.history.state?.idx ?? 0;
    if (navigationType === 'PUSH' || idx > maxIdx.current)
        maxIdx.current = idx;
    return { canGoBack: idx > 0, canGoForward: idx < maxIdx.current };
}
function HashUrlBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const { canGoBack, canGoForward } = useHistoryBounds();
    const route = location.pathname + location.search;
    const [value, setValue] = useState(route);
    useEffect(() => { setValue(route); }, [route]);
    const go = () => {
        navigate(value || '/');
        inputRef.current?.blur();
    };
    return (<>
      {/* The bar is fixed (out of the page flow), so this spacer reserves its height. */}
      <div aria-hidden style={{ height: HASH_URL_BAR_HEIGHT, flexShrink: 0 }}/>

      <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10000,
            height: HASH_URL_BAR_HEIGHT, boxSizing: 'border-box',
            background: '#1c1c1e', borderBottom: '1px solid #3a3a3c',
            display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8,
        }}>
        <button onClick={() => navigate(-1)} disabled={!canGoBack} title="Back" aria-label="Back" style={canGoBack ? NAV_BUTTON : NAV_BUTTON_DISABLED}>
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M7 1L1 6.5L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button onClick={() => navigate(1)} disabled={!canGoForward} title="Forward" aria-label="Forward" style={canGoForward ? NAV_BUTTON : NAV_BUTTON_DISABLED}>
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div style={{
            flex: 1, height: 26, boxSizing: 'border-box', borderRadius: 6,
            background: '#2c2c2e', border: '1px solid #3a3a3c',
            display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6, overflow: 'hidden',
        }}>
          <span style={{ ...MONO, color: '#ebebf54d', flexShrink: 0 }}>#</span>
          <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => { if (e.key === 'Enter')
        go(); }} spellCheck={false} aria-label="Route" style={{
            ...MONO, flex: 1, minWidth: 0, background: 'transparent',
            border: 'none', outline: 'none', color: '#ebebf5', padding: 0,
        }}/>
        </div>

        <button onClick={go} style={{
            flexShrink: 0, height: 26, padding: '0 12px', borderRadius: 6,
            background: '#ffffff', border: 'none', color: '#1c1c1e', fontSize: 12,
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            fontWeight: 600, cursor: 'pointer', letterSpacing: 0.2,
        }}>
          Go
        </button>
      </div>
    </>);
}

// ── Example pages: replace with the app's own ────────────────────────────────

function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Home</h1>
      <ul>
        <li><Link to="/items">Items</Link></li>
        <li><Link to="/items/42">Item 42</Link></li>
      </ul>
    </main>
  )
}

function Items() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Items</h1>
      <ul>
        {[1, 2, 3].map(id => <li key={id}><Link to={'/items/' + id}>Item {id}</Link></li>)}
      </ul>
    </main>
  )
}

function Item() {
  const { id } = useParams()
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Item {id}</h1>
      <Link to="/items">Back to items</Link>
    </main>
  )
}

function NotFound() {
  const location = useLocation()
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Not found</h1>
      <p>Nothing is at #{location.pathname}. <Link to="/">Go home</Link></p>
    </main>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <HashRouter>
      <HashUrlBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}
