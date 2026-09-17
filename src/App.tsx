import React, { useState, useRef, useEffect } from 'react'
import { HashRouter, useLocation, useNavigate, Routes, Route, Link, useParams } from 'react-router-dom'
import AppLayout from '@cloudscape-design/components/app-layout'
import ContentLayout from '@cloudscape-design/components/content-layout'
import Header from '@cloudscape-design/components/header'
import Container from '@cloudscape-design/components/container'
import SpaceBetween from '@cloudscape-design/components/space-between'
import Box from '@cloudscape-design/components/box'
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs'

const TASKS: Record<number, string> = {
  1: 'Eat lunch',
  2: 'Mow lawn',
  3: 'Do laundry',
}

// ── URL bar ────────────────────────────────────────────────────────────────

function MetaUrlBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const route = location.pathname + location.search
  const [value, setValue] = useState(route)

  useEffect(() => { setValue(route) }, [route])

  const go = () => { navigate(value || '/'); inputRef.current?.blur() }

  const MONO: React.CSSProperties = {
    fontFamily: '"SF Mono", "Fira Code", ui-monospace, monospace',
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 1,
  }

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10000,
      height: 40, background: '#1c1c1e', borderBottom: '1px solid #3a3a3c',
      display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8,
    }}>
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        title="Back"
        style={{
          flexShrink: 0, width: 26, height: 26, borderRadius: 6,
          background: 'transparent', border: '1px solid #3a3a3c',
          color: '#ebebf5aa', cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: 0,
        }}
      >
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
          <path d="M7 1L1 6.5L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div style={{
        flex: 1, height: 26, borderRadius: 6, background: '#2c2c2e',
        border: '1px solid #3a3a3c', display: 'flex', alignItems: 'center',
        padding: '0 10px', gap: 6, overflow: 'hidden',
      }}>
        <span style={{ ...MONO, color: '#ebebf54d', flexShrink: 0 }}>#</span>
        <input
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') go() }}
          spellCheck={false}
          style={{
            ...MONO, flex: 1, minWidth: 0, background: 'transparent',
            border: 'none', outline: 'none', color: '#ebebf5', padding: 0,
          }}
        />
      </div>
      <button onClick={go} style={{
        flexShrink: 0, height: 26, padding: '0 12px', borderRadius: 6,
        background: '#0a84ff', border: 'none', color: '#fff', fontSize: 12,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 600, cursor: 'pointer', letterSpacing: 0.2,
      }}>Go</button>
    </div>
  )
}

// ── Pages ──────────────────────────────────────────────────────────────────

function HomePage() {
  const location = useLocation()
  const route = location.pathname + location.search
  return (
    <SpaceBetween size="l">
      <Container header={<Header variant="h2">Current route</Header>}>
        <Box variant="code" fontSize="heading-l">#{route}</Box>
      </Container>
    </SpaceBetween>
  )
}

function TasksPage() {
  return (
    <Container header={<Header variant="h2">Tasks</Header>}>
      <SpaceBetween size="xs">
        {Object.entries(TASKS).map(([id, name]) => (
          <Link key={id} to={`/tasks/${id}`} style={{ display: 'block', color: '#0a84ff', textDecoration: 'none', fontSize: 14 }}>
            {id}. {name}
          </Link>
        ))}
      </SpaceBetween>
    </Container>
  )
}

function TaskDetailPage() {
  const { id } = useParams<{ id: string }>()
  const name = id ? TASKS[Number(id)] : undefined

  if (!name) {
    return (
      <Container header={<Header variant="h2">Not found</Header>}>
        <Box color="text-status-error">No task with id {id}.</Box>
      </Container>
    )
  }

  return (
    <Container header={<Header variant="h2">Task</Header>}>
      <KeyValuePairs
        columns={2}
        items={[
          { label: 'ID', value: id },
          { label: 'Name', value: name },
        ]}
      />
    </Container>
  )
}

// ── Shell ──────────────────────────────────────────────────────────────────

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/:id" element={<TaskDetailPage />} />
          </Routes>
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
