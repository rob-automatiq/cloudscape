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
import Form from '@cloudscape-design/components/form'
import Flashbar, { type FlashbarProps } from '@cloudscape-design/components/flashbar'
import StatusIndicator from '@cloudscape-design/components/status-indicator'
import DatePicker from '@cloudscape-design/components/date-picker'
import HashUrlBar, { HASH_URL_BAR_HEIGHT } from './components/HashUrlBar'
import { openTaskStore, type Task, type TaskChanges, type TaskStore, type StoreError } from './taskStore'

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

// Dates are stored as ISO strings (YYYY-MM-DD) and parsed as local dates so weekdays don't shift by time zone.
function parseIsoDate(iso: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!match) return null
  const [year, month, day] = match.slice(1).map(Number)
  const date = new Date(year, month - 1, day)
  return date.getMonth() === month - 1 && date.getDate() === day ? date : null
}

const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6

function formatDue(iso: string | null) {
  const date = iso ? parseIsoDate(iso) : null
  return date ? `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` : '-'
}

const isCompleteDate = (value: string) => value === '' || /^\d{4}-\d{2}-\d{2}$/.test(value)

function dueError(value: string) {
  if (!value) return undefined
  const date = parseIsoDate(value)
  if (!date) return 'Enter a valid date in YYYY/MM/DD format.'
  if (isWeekend(date)) return 'You can only select a weekday.'
  return undefined
}

function DueDatePicker({ value, onChange, onBlur, invalid }: {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  invalid?: boolean
}) {
  return (
    <DatePicker
      value={value}
      onChange={({ detail }) => onChange(detail.value)}
      onBlur={onBlur}
      isDateEnabled={date => !isWeekend(date)}
      dateDisabledReason={date => (isWeekend(date) ? 'You can only select a weekday.' : '')}
      placeholder="YYYY/MM/DD"
      openCalendarAriaLabel={selectedDate => 'Choose due date' + (selectedDate ? `, selected date is ${selectedDate}` : '')}
      invalid={invalid}
      expandToViewport
    />
  )
}

function CreateTaskModal({ visible, onDismiss, onCreate }: {
  visible: boolean
  onDismiss: () => void
  onCreate: (name: string, due: string | null) => Promise<void>
}) {
  const [name, setName] = useState('')
  const [due, setDue] = useState('')
  const [dueTouched, setDueTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [saving, setSaving] = useState(false)
  const nameErrorText = submitted && !name.trim() ? 'Enter a task name.' : undefined
  const dueErrorText = submitted || dueTouched ? dueError(due) : undefined

  const close = () => { setName(''); setDue(''); setDueTouched(false); setSubmitted(false); onDismiss() }
  const submit = async () => {
    setSubmitted(true)
    if (!name.trim() || dueError(due) || saving) return
    setSaving(true)
    try {
      await onCreate(name.trim(), due || null)
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
      <SpaceBetween size="l">
        <FormField label="Task name" errorText={nameErrorText}>
          <Input
            value={name}
            onChange={({ detail }) => setName(detail.value)}
            onKeyDown={event => {
              if (event.detail.key !== 'Enter') return
              // Otherwise the Enter keypress lands on the "Create task" button that regains focus when the modal closes, reopening it.
              event.preventDefault()
              submit()
            }}
            invalid={!!nameErrorText}
            autoFocus
          />
        </FormField>
        <FormField
          label={<>Due <i>- optional</i></>}
          constraintText="Use YYYY/MM/DD format. Weekends aren't available."
          errorText={dueErrorText}
        >
          <DueDatePicker value={due} onChange={setDue} onBlur={() => setDueTouched(true)} invalid={!!dueErrorText} />
        </FormField>
      </SpaceBetween>
    </Modal>
  )
}

function DeleteTaskModal({ task, onDismiss, onDelete }: {
  task: Task | null
  onDismiss: () => void
  onDelete: (id: string) => Promise<void>
}) {
  const [deleting, setDeleting] = useState(false)
  const confirm = async () => {
    if (!task || deleting) return
    setDeleting(true)
    try {
      await onDelete(task.id)
      onDismiss()
    } finally {
      setDeleting(false)
    }
  }

  return (
    <Modal
      visible={task !== null}
      onDismiss={onDismiss}
      header="Delete task"
      closeAriaLabel="Close"
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link" onClick={onDismiss}>Cancel</Button>
            <Button variant="primary" loading={deleting} onClick={confirm}>Delete</Button>
          </SpaceBetween>
        </Box>
      }
    >
      Permanently delete <b>{task?.name}</b>? You can't undo this action.
    </Modal>
  )
}

function TasksPage({ tasks, loading, browserOnly, onCreate, onDoneChange, onDueChange, onDelete }: {
  tasks: Task[]
  loading: boolean
  browserOnly: boolean
  onCreate: (name: string, due: string | null) => Promise<void>
  onDoneChange: (id: string, done: boolean) => void
  onDueChange: (id: string, due: string | null) => Promise<void>
  onDelete: (id: string) => Promise<void>
}) {
  const navigate = useNavigate()
  const [creating, setCreating] = useState(false)
  const [deleting, setDeleting] = useState<Task | null>(null)
  // The date picker reports partial input on every keystroke. Showing an error for it would resize the
  // row while typing, so an incomplete date only gets an error once it has been submitted.
  const submittedPartialDue = useRef<string | null>(null)
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
        submitEdit={async (task, column, newValue) => {
          // undefined means the value wasn't changed; an empty value removes the due date.
          if (column.id !== 'due' || newValue === undefined) return
          const due = newValue as string
          // The table shows validation errors but doesn't block submitting; throwing keeps the editor open.
          if (dueError(due)) {
            if (!isCompleteDate(due)) submittedPartialDue.current = due
            throw new Error(dueError(due))
          }
          await onDueChange(task.id, due || null)
        }}
        ariaLabels={{
          activateEditLabel: (column, task) => `Edit ${task.name} ${column.header}`,
          cancelEditLabel: column => `Cancel editing ${column.header}`,
          submitEditLabel: column => `Submit editing ${column.header}`,
          submittingEditText: () => 'Saving',
          successfulEditLabel: () => 'Saved',
          tableLabel: 'Tasks',
        }}
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
            width: 90,
            cell: task => (
              <Checkbox
                checked={task.done}
                onChange={({ detail }) => onDoneChange(task.id, detail.checked)}
                ariaLabel={`${task.name} done`}
              />
            ),
          },
          { id: 'id', header: 'ID', width: 80, cell: task => task.id },
          {
            id: 'name',
            header: 'Name',
            isRowHeader: true,
            minWidth: 200,
            cell: task => (
              <Link
                href={`#/tasks/${task.id}`}
                onFollow={e => { e.preventDefault(); navigate(`/tasks/${task.id}`) }}
              >
                {task.name}
              </Link>
            ),
          },
          {
            id: 'due',
            header: 'Due',
            // Fixed width (room for the inline date picker) so editing doesn't resize the other columns.
            width: 340,
            cell: task => formatDue(task.due),
            editConfig: {
              ariaLabel: 'Due date',
              editIconAriaLabel: 'editable',
              errorIconAriaLabel: 'Due date error',
              validation: (_task, value) => {
                if (value === undefined) return undefined
                const due = value as string
                return isCompleteDate(due) || due === submittedPartialDue.current ? dueError(due) : undefined
              },
              editingCell: (task, { currentValue, setValue }) => (
                <DueDatePicker value={(currentValue as string | undefined) ?? task.due ?? ''} onChange={setValue} />
              ),
            },
          },
          {
            id: 'actions',
            header: 'Actions',
            width: 110,
            cell: task => (
              <Button variant="inline-link" ariaLabel={`Delete ${task.name}`} onClick={() => setDeleting(task)}>
                Delete
              </Button>
            ),
          },
        ]}
      />
      <CreateTaskModal visible={creating} onDismiss={() => setCreating(false)} onCreate={onCreate} />
      <DeleteTaskModal task={deleting} onDismiss={() => setDeleting(null)} onDelete={onDelete} />
    </>
  )
}

function TaskDetailPage({ tasks, loading }: { tasks: Task[]; loading: boolean }) {
  const navigate = useNavigate()
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
    <Container
      header={
        <Header variant="h2" actions={<Button onClick={() => navigate(`/tasks/${task.id}/edit`)}>Edit</Button>}>
          Task
        </Header>
      }
    >
      <KeyValuePairs
        columns={4}
        items={[
          { label: 'ID', value: task.id },
          { label: 'Name', value: task.name },
          { label: 'Due', value: formatDue(task.due) },
          { label: 'Done', value: task.done ? 'Yes' : 'No' },
        ]}
      />
    </Container>
  )
}

function TaskEditPage({ tasks, loading, onSave }: {
  tasks: Task[]
  loading: boolean
  onSave: (task: Task, changes: TaskChanges) => Promise<void>
}) {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const task = tasks.find(t => t.id === id)

  if (loading) {
    return (
      <Container header={<Header variant="h2">Edit task</Header>}>
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
  return <TaskEditForm key={task.id} task={task} onSave={onSave} onDone={() => navigate(`/tasks/${task.id}`)} />
}

function TaskEditForm({ task, onSave, onDone }: {
  task: Task
  onSave: (task: Task, changes: TaskChanges) => Promise<void>
  onDone: () => void
}) {
  const [name, setName] = useState(task.name)
  const [due, setDue] = useState(task.due ?? '')
  const [done, setDone] = useState(task.done)
  const [dueTouched, setDueTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [saving, setSaving] = useState(false)
  const nameErrorText = submitted && !name.trim() ? 'Enter a task name.' : undefined
  const dueErrorText = submitted || dueTouched ? dueError(due) : undefined

  const save = async () => {
    setSubmitted(true)
    if (!name.trim() || dueError(due) || saving) return
    const changes: TaskChanges = {}
    if (name.trim() !== task.name) changes.name = name.trim()
    if ((due || null) !== task.due) changes.due = due || null
    if (done !== task.done) changes.done = done
    setSaving(true)
    try {
      await onSave(task, changes)
      onDone()
    } catch {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={e => { e.preventDefault(); save() }}>
      <Form
        header={<Header variant="h2">Edit {task.name}</Header>}
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button formAction="none" variant="link" onClick={onDone}>Cancel</Button>
            <Button variant="primary" loading={saving}>Save changes</Button>
          </SpaceBetween>
        }
      >
        <Container header={<Header variant="h2">Task details</Header>}>
          <SpaceBetween size="l">
            <FormField label="Task name" errorText={nameErrorText}>
              <Input value={name} onChange={({ detail }) => setName(detail.value)} invalid={!!nameErrorText} />
            </FormField>
            <FormField
              label={<>Due <i>- optional</i></>}
              constraintText="Use YYYY/MM/DD format. Leave it empty to remove the due date."
              errorText={dueErrorText}
            >
              <DueDatePicker value={due} onChange={setDue} onBlur={() => setDueTouched(true)} invalid={!!dueErrorText} />
            </FormField>
            <Checkbox checked={done} onChange={({ detail }) => setDone(detail.checked)}>Done</Checkbox>
          </SpaceBetween>
        </Container>
      </Form>
    </form>
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

  const showFlash = (type: FlashbarProps.Type, content: string) =>
    setFlash([{ id: 'status', type, content, dismissible: true, dismissLabel: 'Dismiss', onDismiss: () => setFlash([]) }])
  const showError = (content: string) => showFlash('error', content)

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

  const createTask = async (name: string, due: string | null) => {
    try {
      await store.current?.create(name, due)
    } catch (e) {
      showError(saveErrorMessage(e as StoreError))
      throw e
    }
  }
  const deleteTask = async (id: string) => {
    try {
      await store.current?.remove(id)
    } catch (e) {
      showError(saveErrorMessage(e as StoreError))
      throw e
    }
  }
  const updateTask = async (task: Task, changes: TaskChanges) => {
    if (Object.keys(changes).length === 0) {
      showFlash('info', 'No changes were made.')
      return
    }
    try {
      await store.current?.update(task.id, changes)
      showFlash('success', `Task "${changes.name ?? task.name}" was updated.`)
    } catch (e) {
      showError(saveErrorMessage(e as StoreError))
      throw e
    }
  }
  const setDue = async (id: string, due: string | null) => {
    try {
      await store.current?.setDue(id, due)
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
              element={<TasksPage tasks={tasks} loading={loading} browserOnly={browserOnly} onCreate={createTask} onDoneChange={setDone} onDueChange={setDue} onDelete={deleteTask} />}
            />
            <Route path="/tasks/:id" element={<TaskDetailPage tasks={tasks} loading={loading} />} />
            <Route path="/tasks/:id/edit" element={<TaskEditPage tasks={tasks} loading={loading} onSave={updateTask} />} />
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
