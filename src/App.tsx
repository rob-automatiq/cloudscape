import { useState } from 'react'
import { HashRouter, useLocation, useNavigate, Routes, Route, useParams } from 'react-router-dom'
import AppLayout from '@cloudscape-design/components/app-layout'
import Table from '@cloudscape-design/components/table'
import Checkbox from '@cloudscape-design/components/checkbox'
import Link from '@cloudscape-design/components/link'
import ContentLayout from '@cloudscape-design/components/content-layout'
import Header from '@cloudscape-design/components/header'
import Container from '@cloudscape-design/components/container'
import SpaceBetween from '@cloudscape-design/components/space-between'
import Box from '@cloudscape-design/components/box'
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs'
import TopNavigation from '@cloudscape-design/components/top-navigation'
import HashUrlBar, { HASH_URL_BAR_HEIGHT } from './components/HashUrlBar'

interface Task {
  id: number
  name: string
  done: boolean
}

const INITIAL_TASKS: Task[] = [
  { id: 1, name: 'Eat lunch', done: false },
  { id: 2, name: 'Mow lawn', done: false },
  { id: 3, name: 'Do laundry', done: false },
]

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

function TasksPage({ tasks, onDoneChange }: { tasks: Task[]; onDoneChange: (id: number, done: boolean) => void }) {
  const navigate = useNavigate()
  return (
    <Table
      variant="container"
      header={<Header counter={`(${tasks.length})`}>Tasks</Header>}
      items={tasks}
      trackBy="id"
      columnDefinitions={[
        {
          id: 'done',
          header: 'Done',
          cell: task => (
            <Checkbox
              checked={task.done}
              onChange={({ detail }) => onDoneChange(task.id, detail.checked)}
              ariaLabel={`${task.name} done`}
            />
          ),
        },
        { id: 'id', header: 'ID', cell: task => task.id },
        {
          id: 'name',
          header: 'Name',
          isRowHeader: true,
          cell: task => (
            <Link
              href={`#/tasks/${task.id}`}
              onFollow={e => { e.preventDefault(); navigate(`/tasks/${task.id}`) }}
            >
              {task.name}
            </Link>
          ),
        },
      ]}
    />
  )
}

function TaskDetailPage({ tasks }: { tasks: Task[] }) {
  const { id } = useParams<{ id: string }>()
  const name = tasks.find(task => String(task.id) === id)?.name

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
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const setDone = (id: number, done: boolean) =>
    setTasks(current => current.map(task => (task.id === id ? { ...task, done } : task)))

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
            <Route path="/tasks" element={<TasksPage tasks={tasks} onDoneChange={setDone} />} />
            <Route path="/tasks/:id" element={<TaskDetailPage tasks={tasks} />} />
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
