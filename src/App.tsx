import { HashRouter, useLocation, useNavigate, Routes, Route, Link, useParams } from 'react-router-dom'
import AppLayout from '@cloudscape-design/components/app-layout'
import ContentLayout from '@cloudscape-design/components/content-layout'
import Header from '@cloudscape-design/components/header'
import Container from '@cloudscape-design/components/container'
import SpaceBetween from '@cloudscape-design/components/space-between'
import Box from '@cloudscape-design/components/box'
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs'
import TopNavigation from '@cloudscape-design/components/top-navigation'
import HashUrlBar, { HASH_URL_BAR_HEIGHT } from './components/HashUrlBar'

const TASKS: Record<number, string> = {
  1: 'Eat lunch',
  2: 'Mow lawn',
  3: 'Do laundry',
}

// ── Top navigation ────────────────────────────────────────────────────────

function AppTopNavigation() {
  const navigate = useNavigate()
  return (
    <div style={{ position: 'fixed', top: HASH_URL_BAR_HEIGHT, left: 0, right: 0, zIndex: 9999 }}>
      <TopNavigation
        identity={{ title: 'Cloudscape App', href: '#/' }}
        utilities={[
          {
            type: 'button', variant: 'link', text: 'Home', href: '#/',
            onFollow: e => { e.preventDefault(); navigate('/') },
          },
          {
            type: 'button', variant: 'link', text: 'Tasks', href: '#/tasks',
            onFollow: e => { e.preventDefault(); navigate('/tasks') },
          },
        ]}
        i18nStrings={{ overflowMenuTriggerText: 'More', overflowMenuTitleText: 'More' }}
      />
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
      <HashUrlBar />
      <AppTopNavigation />
      <div style={{ paddingTop: 56 }}>
        <PageContent />
      </div>
    </HashRouter>
  )
}
