import { useState, useRef, useEffect } from 'react'
import { HashRouter, useLocation, useNavigate } from 'react-router-dom'
import AppLayout from '@cloudscape-design/components/app-layout'
import ContentLayout from '@cloudscape-design/components/content-layout'
import Header from '@cloudscape-design/components/header'
import Container from '@cloudscape-design/components/container'
import SpaceBetween from '@cloudscape-design/components/space-between'
import Box from '@cloudscape-design/components/box'

function MetaUrlBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const route = location.pathname + location.search + location.hash
  useEffect(() => {
    if (editing) inputRef.current?.select()
  }, [editing])

  const commit = () => {
    const trimmed = draft.trim()
    if (trimmed) {
      const path = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
      navigate(path)
    }
    setEditing(false)
  }

  const startEditing = () => {
    setDraft(route)
    setEditing(true)
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10000,
      height: 40,
      background: '#1c1c1e',
      borderBottom: '1px solid #3a3a3c',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      gap: 8,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      userSelect: 'none',
    }}>
      {/* Traffic lights placeholder */}
      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
        {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
        ))}
      </div>

      {/* URL pill */}
      <div
        style={{
          flex: 1,
          maxWidth: 560,
          margin: '0 auto',
          height: 26,
          borderRadius: 6,
          background: '#2c2c2e',
          border: editing ? '1px solid #636366' : '1px solid #3a3a3c',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          cursor: editing ? 'text' : 'pointer',
          overflow: 'hidden',
        }}
        onClick={!editing ? startEditing : undefined}
      >
        {/* Lock icon */}
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" style={{ flexShrink: 0, marginRight: 6, opacity: 0.45 }}>
          <rect x="1" y="5.5" width="9" height="7" rx="1.5" stroke="#ebebf5" strokeWidth="1.2" />
          <path d="M3 5.5V3.5a2.5 2.5 0 0 1 5 0v2" stroke="#ebebf5" strokeWidth="1.2" strokeLinecap="round" />
        </svg>

        {editing ? (
          <input
            ref={inputRef}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={e => {
              if (e.key === 'Enter') commit()
              if (e.key === 'Escape') setEditing(false)
            }}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ebebf5',
              fontSize: 12,
              fontFamily: '"SF Mono", "Fira Code", monospace',
              letterSpacing: 0.2,
            }}
          />
        ) : (
          <span style={{
            flex: 1,
            fontSize: 12,
            color: '#ebebf599',
            fontFamily: '"SF Mono", "Fira Code", monospace',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            letterSpacing: 0.2,
          }}>
            <span style={{ color: '#ebebf54d' }}>claude.ai/artifact&nbsp;&nbsp;</span>
            <span style={{ color: '#ebebf5cc' }}>#</span>
            <span style={{ color: '#ebebf5' }}>{route}</span>
          </span>
        )}
      </div>

      {/* Right spacer to balance traffic lights */}
      <div style={{ width: 42, flexShrink: 0 }} />
    </div>
  )
}

function PageContent() {
  return (
    <AppLayout
      navigationHide
      toolsHide
      content={
        <ContentLayout
          header={
            <Header variant="h1" description="Built with Cloudscape Design System">
              Hello, Cloudscape
            </Header>
          }
        >
          <SpaceBetween size="l">
            <Container header={<Header variant="h2">Getting started</Header>}>
              <Box color="text-body-secondary">
                Click the URL bar above to navigate to any route. Edit{' '}
                <code>src/App.tsx</code> to start building.
              </Box>
            </Container>
          </SpaceBetween>
        </ContentLayout>
      }
    />
  )
}

export default function App() {
  return (
    <HashRouter>
      <MetaUrlBar />
      <div style={{ paddingTop: 40 }}>
        <PageContent />
      </div>
    </HashRouter>
  )
}
