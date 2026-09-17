import React, { useState, useRef, useEffect } from 'react'
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

  const MONO: React.CSSProperties = {
    fontFamily: '"SF Mono", "Fira Code", ui-monospace, monospace',
    fontSize: 12,
    letterSpacing: 0.2,
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
      {/* URL pill */}
      <div
        style={{
          flex: 1,
          maxWidth: 600,
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
          gap: 6,
        }}
        onClick={!editing ? startEditing : undefined}
      >
        {/* Lock icon */}
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
          <rect x="1" y="5.5" width="9" height="7" rx="1.5" stroke="#ebebf5" strokeWidth="1.2" />
          <path d="M3 5.5V3.5a2.5 2.5 0 0 1 5 0v2" stroke="#ebebf5" strokeWidth="1.2" strokeLinecap="round" />
        </svg>

        {/* Static prefix — always visible, same width in both modes */}
        <span style={{ ...MONO, color: '#ebebf54d', flexShrink: 0, whiteSpace: 'nowrap' }}>
          claude.ai/artifact&nbsp;&nbsp;#
        </span>

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
              ...MONO,
              flex: 1,
              minWidth: 0,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ebebf5',
              padding: 0,
            }}
          />
        ) : (
          <span style={{
            ...MONO,
            flex: 1,
            color: '#ebebf5',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {route}
          </span>
        )}
      </div>

      {/* Go button */}
      {editing && (
        <button
          onMouseDown={e => { e.preventDefault(); commit() }}
          style={{
            flexShrink: 0,
            height: 26,
            padding: '0 12px',
            borderRadius: 6,
            background: '#0a84ff',
            border: 'none',
            color: '#fff',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            letterSpacing: 0.2,
          }}
        >
          Go
        </button>
      )}
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
