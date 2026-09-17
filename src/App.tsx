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
  const inputRef = useRef<HTMLInputElement>(null)

  const route = location.pathname + location.search
  const [value, setValue] = useState(route)

  useEffect(() => {
    setValue(route)
  }, [route])

  const go = () => {
    navigate(value || '/')
    inputRef.current?.blur()
  }

  const MONO: React.CSSProperties = {
    fontFamily: '"SF Mono", "Fira Code", ui-monospace, monospace',
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 1,
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
    }}>
      {/* URL pill — full width */}
      <div style={{
        flex: 1,
        height: 26,
        borderRadius: 6,
        background: '#2c2c2e',
        border: '1px solid #3a3a3c',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        gap: 6,
        overflow: 'hidden',
      }}>
        {/* # symbol */}
        <span style={{ ...MONO, color: '#ebebf54d', flexShrink: 0 }}>#</span>

        {/* Editable path */}
        <input
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') go() }}
          spellCheck={false}
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
      </div>

      {/* Go button — always visible */}
      <button
        onClick={go}
        style={{
          flexShrink: 0,
          height: 26,
          padding: '0 12px',
          borderRadius: 6,
          background: '#0a84ff',
          border: 'none',
          color: '#fff',
          fontSize: 12,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 600,
          cursor: 'pointer',
          letterSpacing: 0.2,
        }}
      >
        Go
      </button>
    </div>
  )
}

function PageContent() {
  const location = useLocation()
  const route = location.pathname + location.search

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
            <Container header={<Header variant="h2">Current route</Header>}>
              <Box variant="code" fontSize="heading-l">#{route}</Box>
            </Container>
            <Container header={<Header variant="h2">Getting started</Header>}>
              <Box color="text-body-secondary">
                Type a path in the bar above and click Go. Edit{' '}
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
