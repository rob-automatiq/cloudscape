import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const HASH_URL_BAR_HEIGHT = 40

const MONO: CSSProperties = {
  fontFamily: 'ui-monospace, "SF Mono", Menlo, "Cascadia Mono", Consolas, "Liberation Mono", monospace',
  fontSize: 12,
  letterSpacing: 0.2,
  lineHeight: 1,
}

const NAV_BUTTON: CSSProperties = {
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
}

export default function HashUrlBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const route = location.pathname + location.search
  const [value, setValue] = useState(route)

  useEffect(() => { setValue(route) }, [route])

  const go = () => {
    navigate(value || '/')
    inputRef.current?.blur()
  }

  return (
    <>
      {/* The bar is fixed (out of the page flow), so this spacer reserves its height. */}
      <div aria-hidden style={{ height: HASH_URL_BAR_HEIGHT, flexShrink: 0 }} />

      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10000,
        height: HASH_URL_BAR_HEIGHT, boxSizing: 'border-box',
        background: '#1c1c1e', borderBottom: '1px solid #3a3a3c',
        display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8,
      }}>
        <button onClick={() => navigate(-1)} title="Back" aria-label="Back" style={NAV_BUTTON}>
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M7 1L1 6.5L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button onClick={() => navigate(1)} title="Forward" aria-label="Forward" style={NAV_BUTTON}>
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div style={{
          flex: 1, height: 26, boxSizing: 'border-box', borderRadius: 6,
          background: '#2c2c2e', border: '1px solid #3a3a3c',
          display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6, overflow: 'hidden',
        }}>
          <span style={{ ...MONO, color: '#ebebf54d', flexShrink: 0 }}>#</span>
          <input
            ref={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') go() }}
            spellCheck={false}
            aria-label="Route"
            style={{
              ...MONO, flex: 1, minWidth: 0, background: 'transparent',
              border: 'none', outline: 'none', color: '#ebebf5', padding: 0,
            }}
          />
        </div>

        <button onClick={go} style={{
          flexShrink: 0, height: 26, padding: '0 12px', borderRadius: 6,
          background: '#0a84ff', border: 'none', color: '#fff', fontSize: 12,
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          fontWeight: 600, cursor: 'pointer', letterSpacing: 0.2,
        }}>
          Go
        </button>
      </div>
    </>
  )
}
