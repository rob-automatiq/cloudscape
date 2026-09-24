import { useEffect, useRef, useState } from 'react'
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
import Button from '@cloudscape-design/components/button'
import Modal from '@cloudscape-design/components/modal'
import FormField from '@cloudscape-design/components/form-field'
import Input from '@cloudscape-design/components/input'
import Flashbar, { type FlashbarProps } from '@cloudscape-design/components/flashbar'
import StatusIndicator from '@cloudscape-design/components/status-indicator'
import HashUrlBar, { HASH_URL_BAR_HEIGHT } from './components/HashUrlBar'
import { openTaskStore, type Task, type TaskStore, type StoreError } from './taskStore'

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

function CreateTaskModal({ visible, onDismiss, onCreate }: {
  visible: boolean
  onDismiss: () => void
  onCreate: (name: string) => Promise<void>
}) {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [saving, setSaving] = useState(false)
  const error = submitted && !name.trim() ? 'Enter a task name.' : undefined

  const close = () => { setName(''); setSubmitted(false); onDismiss() }
  const submit = async () => {
    setSubmitted(true)
    if (!name.trim() || saving) return
    setSaving(true)
    try {
      await onCreate(name.trim())
      close()
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal
      visible={visible}
      onDismiss={close}
      header="Create task"
      closeAriaLabel="Close"
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link" onClick={close}>Cancel</Button>
            <Button variant="primary" loading={saving} onClick={submit}>Create task</Button>
          </SpaceBetween>
        </Box>
      }
    >
      <FormField label="Task name" errorText={error}>
        <Input
          value={name}
          onChange={({ detail }) => setName(detail.value)}
          onKeyDown={event => {
            if (event.detail.key !== 'Enter') return
            // Otherwise the Enter keypress lands on the "Create task" button that regains focus when the modal closes, reopening it.
            event.preventDefault()
            submit()
          }}
          invalid={!!error}
          autoFocus
        />
      </FormField>
    </Modal>
  )
}

function TasksPage({ tasks, loading, browserOnly, onCreate, onDoneChange }: {
  tasks: Task[]
  loading: boolean
  browserOnly: boolean
  onCreate: (name: string) => Promise<void>
  onDoneChange: (id: string, done: boolean) => void
}) {
  const navigate = useNavigate()
  const [creating, setCreating] = useState(false)
  const createButton = <Button variant="primary" onClick={() => setCreating(true)}>Create task</Button>

  return (
    <>
      <Table
        variant="container"
        header={
          <Header
            counter={loading ? undefined : `(${tasks.length})`}
            description={browserOnly ? 'Saved in this browser only.' : undefined}
            actions={createButton}
          >
            Tasks
          </Header>
        }
        items={tasks}
        loading={loading}
        loadingText="Loading tasks"
        trackBy="id"
        empty={
          <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No tasks</b>
              <Button onClick={() => setCreating(true)}>Create task</Button>
            </SpaceBetween>
          </Box>
        }
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
      <CreateTaskModal visible={creating} onDismiss={() => setCreating(false)} onCreate={onCreate} />
    </>
  )
}

function TaskDetailPage({ tasks, loading }: { tasks: Task[]; loading: boolean }) {
  const { id } = useParams<{ id: string }>()
  const task = tasks.find(t => t.id === id)

  if (loading) {
    return (
      <Container header={<Header variant="h2">Task</Header>}>
        <StatusIndicator type="loading">Loading task</StatusIndicator>
      </Container>
    )
  }

  if (!task) {
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
          { label: 'ID', value: task.id },
          { label: 'Name', value: task.name },
        ]}
      />
    </Container>
  )
}

// ── Shell ──────────────────────────────────────────────────────────────────

function saveErrorMessage(error: StoreError) {
  if (error.code === 'quota_exceeded') return "The task list is full, so new tasks can't be created."
  if (error.code === 'invalid_argument') return "You don't have permission to change tasks."
  return "Your change wasn't saved. Try again."
}

function PageContent() {
  const store = useRef<TaskStore | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [browserOnly, setBrowserOnly] = useState(false)
  const [flash, setFlash] = useState<FlashbarProps.MessageDefinition[]>([])

  const showError = (content: string) =>
    setFlash([{ id: 'save-error', type: 'error', content, dismissible: true, dismissLabel: 'Dismiss', onDismiss: () => setFlash([]) }])

  useEffect(() => {
    let unsubscribe: (() => void) | undefined
    let cancelled = false
    openTaskStore().then(opened => {
      if (cancelled) return
      store.current = opened
      setBrowserOnly(opened.backend === 'browser')
      unsubscribe = opened.subscribe(
        next => { setTasks(next); setLoading(false) },
        () => { setLoading(false); showError("Tasks couldn't be loaded. Refresh the page to try again.") },
      )
    })
    return () => { cancelled = true; unsubscribe?.() }
  }, [])

  const createTask = async (name: string) => {
    try {
      await store.current?.create(name)
    } catch (e) {
      showError(saveErrorMessage(e as StoreError))
      throw e
    }
  }
  const setDone = (id: string, done: boolean) => {
    store.current?.setDone(id, done).catch(e => showError(saveErrorMessage(e as StoreError)))
  }

  return (
    <AppLayout
      navigationHide
      toolsHide
      notifications={<Flashbar items={flash} />}
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
            <Route
              path="/tasks"
              element={<TasksPage tasks={tasks} loading={loading} browserOnly={browserOnly} onCreate={createTask} onDoneChange={setDone} />}
            />
            <Route path="/tasks/:id" element={<TaskDetailPage tasks={tasks} loading={loading} />} />
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
