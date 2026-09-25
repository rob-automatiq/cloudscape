// App.jsx: the whole application in one file. main.jsx only mounts it.
//
// Architecture (from the cloudscape skill; keep it when extending the app):
// - Routing: <HashRouter> from react-router-dom. Every route lives after '#', e.g. #/tasks/3.
//   Navigate with <Link>, navigate(), or href="#/..." plus onFollow + preventDefault. Never
//   window.location or a plain <a href="/...">.
// - Hash URL bar: HashUrlBar sits at the very top, in the same sticky header as TopNavigation.
//   AppLayout's headerSelector points at that header so its content starts beneath it.
// - Navigation: TopNavigation's utilities are the root sections (SECTIONS). The side navigation
//   shows only the current section: its name as the header and that section's links.
// - Data: useDocuments(path) stores documents in the claude.ai Artifact database (the `db`
//   capability) and falls back to browser storage outside claude.ai (for example `npm run dev`).
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { HashRouter, Routes, Route, matchPath, useLocation, useNavigate, useNavigationType, useParams } from 'react-router-dom'
import '@cloudscape-design/global-styles/index.css'
import I18nProvider from '@cloudscape-design/components/i18n'
import messages from '@cloudscape-design/components/i18n/messages/all.en'
import Alert from '@cloudscape-design/components/alert'
import AppLayout from '@cloudscape-design/components/app-layout'
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group'
import Box from '@cloudscape-design/components/box'
import Button from '@cloudscape-design/components/button'
import Checkbox from '@cloudscape-design/components/checkbox'
import Container from '@cloudscape-design/components/container'
import ContentLayout from '@cloudscape-design/components/content-layout'
import DatePicker from '@cloudscape-design/components/date-picker'
import Flashbar from '@cloudscape-design/components/flashbar'
import Form from '@cloudscape-design/components/form'
import FormField from '@cloudscape-design/components/form-field'
import Header from '@cloudscape-design/components/header'
import Input from '@cloudscape-design/components/input'
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs'
import Link from '@cloudscape-design/components/link'
import Modal from '@cloudscape-design/components/modal'
import SideNavigation from '@cloudscape-design/components/side-navigation'
import SpaceBetween from '@cloudscape-design/components/space-between'
import StatusIndicator from '@cloudscape-design/components/status-indicator'
import Table from '@cloudscape-design/components/table'
import TopNavigation from '@cloudscape-design/components/top-navigation'

const APP_NAME = 'Cloudscape App'

// ── Global CSS ───────────────────────────────────────────────────────────────

// Cloudscape (components 3.0.1382) draws a 1px border around an editable table cell on hover but
// only partly offsets it in the padding, so the value jitters on hover and after an inline save.
// These paddings keep it still. They target Cloudscape's internal class names: re-check on upgrade.
const GLOBAL_CSS = `
td[class*='awsui_body-cell-editable_']:not([class*='awsui_body-cell-edit-active_']):hover > [class*='awsui_body-cell-content_'] {
  padding-inline-start: 18px !important;
  padding-block: 8.5px 9.5px !important;
}
tr:first-child > td[class*='awsui_body-cell-editable_']:not([class*='awsui_body-cell-edit-active_']):hover > [class*='awsui_body-cell-content_'] {
  padding-block: 8.5px 8.5px !important;
}
tr:last-child > td[class*='awsui_body-cell-editable_']:not([class*='awsui_body-cell-edit-active_']):hover > [class*='awsui_body-cell-content_'] {
  padding-block: 7.5px 9.5px !important;
}
`

// ── Hash URL bar (from the hash-url-bar skill; keep its behavior unchanged) ──

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

// ── Data: Artifact database, with browser storage as the fallback ───────────

// window.claude only exists inside the claude.ai viewer; use('db') resolves null when the page
// wasn't published with the db capability. Resolve it once for the whole page.
let dbPromise
const getDb = () =>
  (dbPromise ??= window.claude ? window.claude.use('db').catch(() => null) : Promise.resolve(null))

const byCreatedAt = (a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0)

function artifactDbCollection(db, path) {
  const collection = db.collection(path)
  // The db allows one write at a time per document, so writes to the same document are chained.
  const pending = new Map()
  const serial = (id, write) => {
    const next = (pending.get(id) ?? Promise.resolve()).catch(() => {}).then(write)
    pending.set(id, next)
    return next
  }
  return {
    backend: 'artifact-db',
    subscribe(onDocs, onError) {
      return collection.onSnapshot(
        snap => onDocs(snap.docs.map(doc => ({ ...doc.data(), id: doc.id })).sort(byCreatedAt)),
        onError,
      )
    },
    async add(data, { id } = {}) {
      const ref = id ? collection.doc(id) : collection.doc()
      await serial(ref.id, () => ref.set({ ...data, createdAt: Date.now() }))
      return ref.id
    },
    update: (id, changes) => serial(id, () => collection.doc(id).update(changes)),
    remove: id => serial(id, () => collection.doc(id).delete()),
  }
}

function browserCollection(path) {
  const key = `cloudscape-app:${path}`
  const listeners = new Set()
  const read = () => {
    try { return JSON.parse(localStorage.getItem(key) ?? '[]') } catch { return [] }
  }
  let items = read()
  const save = next => {
    items = [...next].sort(byCreatedAt)
    try { localStorage.setItem(key, JSON.stringify(items)) } catch { /* storage unavailable: keep in memory */ }
    listeners.forEach(listener => listener(items))
  }
  return {
    backend: 'browser',
    subscribe(onItems) {
      listeners.add(onItems)
      onItems(items)
      return () => listeners.delete(onItems)
    },
    async add(data, { id = Math.random().toString(36).slice(2, 10) } = {}) {
      save([...items, { ...data, id, createdAt: Date.now() }])
      return id
    },
    async update(id, changes) { save(items.map(item => (item.id === id ? { ...item, ...changes } : item))) },
    async remove(id) { save(items.filter(item => item.id !== id)) },
  }
}

// Live list of the documents in one collection (one collection per entity type, e.g. 'customers',
// 'orders'), plus add/update/remove. Each document is a plain JSON object; `id` and `createdAt` are
// managed here; add(data, { id }) picks the id instead of generating one. Call it once per collection,
// in Shell, and pass the result down to pages.
function useDocuments(path) {
  const [state, setState] = useState({ docs: [], loading: true, error: null, backend: null })
  const store = useRef(null)

  useEffect(() => {
    let unsubscribe
    let cancelled = false
    getDb().then(db => {
      if (cancelled) return
      store.current = db ? artifactDbCollection(db, path) : browserCollection(path)
      unsubscribe = store.current.subscribe(
        docs => setState({ docs, loading: false, error: null, backend: store.current.backend }),
        error => setState(current => ({ ...current, loading: false, error })),
      )
    })
    return () => { cancelled = true; unsubscribe?.() }
  }, [path])

  const run = useCallback((method, ...args) => {
    if (!store.current) return Promise.reject({ code: 'unavailable', message: 'The data store is still loading.' })
    return store.current[method](...args)
  }, [])

  return {
    ...state,
    add: (data, options) => run('add', data, options),
    update: (id, changes) => run('update', id, changes),
    remove: id => run('remove', id),
  }
}

function saveErrorMessage(error) {
  if (error?.code === 'quota_exceeded') return "The task list is full, so new tasks can't be created."
  if (error?.code === 'invalid_argument') return "You don't have permission to change tasks."
  return "Your change wasn't saved. Try again."
}

// ── Notifications (Flashbar in the app layout) ──────────────────────────────

const NotificationsContext = createContext(() => {})
const useNotify = () => useContext(NotificationsContext)

// ── Navigation and unsaved changes ──────────────────────────────────────────

// HashRouter can't block navigation (react-router's useBlocker needs a data router), so in-app
// navigation goes through this guard instead: it asks before leaving a page with unsaved changes.
// The hash URL bar and the browser's back button bypass it; that gap is accepted.
const NavigationGuardContext = createContext(null)

// navigate(to) asks first when a form on the page has unsaved changes; navigate(to, { force: true })
// skips the check, for example right after a successful save.
const useGuardedNavigate = () => useContext(NavigationGuardContext).navigate

// Call in any form page: useUnsavedChanges(nameChanged || dueChanged)
function useUnsavedChanges(isDirty) {
  const { setDirty } = useContext(NavigationGuardContext)
  useEffect(() => {
    setDirty(isDirty)
    return () => setDirty(false)
  }, [isDirty, setDirty])
  useEffect(() => {
    if (!isDirty) return
    const warn = event => { event.preventDefault(); event.returnValue = '' }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [isDirty])
}

function NavigationGuard({ children }) {
  const navigate = useNavigate()
  // useNavigate returns a new function on every route change; a ref keeps the guard stable.
  const navigateRef = useRef(navigate)
  navigateRef.current = navigate
  const dirty = useRef(false)
  const [leaveTo, setLeaveTo] = useState(null)

  const guard = useMemo(() => ({
    setDirty: value => { dirty.current = value },
    navigate: (to, { force = false } = {}) => {
      if (dirty.current && !force) setLeaveTo(to)
      else navigateRef.current(to)
    },
  }), [])

  const leave = () => {
    dirty.current = false
    navigateRef.current(leaveTo)
    setLeaveTo(null)
  }

  return (
    <NavigationGuardContext.Provider value={guard}>
      {children}
      <Modal
        visible={leaveTo !== null}
        onDismiss={() => setLeaveTo(null)}
        header="Leave page"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link" onClick={() => setLeaveTo(null)}>Cancel</Button>
              <Button variant="primary" onClick={leave}>Leave</Button>
            </SpaceBetween>
          </Box>
        }
      >
        <Alert type="warning">
          Are you sure that you want to leave the current page? The changes that you made won't be saved.
        </Alert>
      </Modal>
    </NavigationGuardContext.Provider>
  )
}

// Cloudscape links use href="#/..." so "open in new tab" works; onFollow routes through the guard.
function useFollow() {
  const navigate = useGuardedNavigate()
  return event => {
    event.preventDefault()
    navigate(event.detail.href.replace(/^#/, '') || '/')
  }
}

// ── Pages ────────────────────────────────────────────────────────────────────

function HomePage() {
  const location = useLocation()
  return (
    <ContentLayout header={<Header variant="h1" description="Built with Cloudscape Design System">Hello, Cloudscape</Header>}>
      <Container header={<Header variant="h2">Current route</Header>}>
        <Box variant="code" fontSize="heading-l">#{location.pathname + location.search}</Box>
      </Container>
    </ContentLayout>
  )
}

// ── Tasks ────────────────────────────────────────────────────────────────────
// Collection 'tasks'. A task is { name, done, due: 'YYYY-MM-DD' | null, createdAt }, with sequential
// ids ('1', '2', …) so links stay short, like #/tasks/3.

// Older documents may miss fields; fill in defaults when reading.
const toTask = doc => ({ ...doc, name: doc.name ?? '', done: doc.done === true, due: doc.due ?? null })
const byTaskId = (a, b) => Number(a.id) - Number(b.id) || (a.createdAt ?? 0) - (b.createdAt ?? 0)

function useTasks(collection) {
  const tasks = useMemo(() => collection.docs.map(toTask).sort(byTaskId), [collection.docs])
  const findTask = id => tasks.find(task => task.id === id)
  return { ...collection, tasks, findTask }
}

// Dates are stored as ISO strings (YYYY-MM-DD) and parsed as local dates, so weekdays don't shift with the time zone.
function parseIsoDate(iso) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!match) return null
  const [year, month, day] = match.slice(1).map(Number)
  const date = new Date(year, month - 1, day)
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null
}

const isWeekend = date => date.getDay() === 0 || date.getDay() === 6

function formatDue(iso) {
  const date = iso ? parseIsoDate(iso) : null
  return date ? `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` : '-'
}

const isCompleteDate = value => value === '' || /^\d{4}-\d{2}-\d{2}$/.test(value)

function dueError(value) {
  if (!value) return undefined
  const date = parseIsoDate(value)
  if (!date) return 'Enter a valid date in YYYY/MM/DD format.'
  if (isWeekend(date)) return 'You can only select a weekday.'
  return undefined
}

function DueDatePicker({ value, onChange, onBlur, invalid }) {
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

// Writes that report failures as a notification, then reject so callers can keep their form open.
function useTaskActions(tasks) {
  const notify = useNotify()
  // Two creates before the next snapshot arrives would otherwise pick the same id. Two people creating
  // a task at the same moment still could; that's accepted for this app.
  const lastIssuedId = useRef(0)
  const report = error => { notify('error', saveErrorMessage(error)); throw error }
  return {
    create: data => {
      const highest = tasks.tasks.reduce((max, task) => Math.max(max, Number(task.id) || 0), 0)
      lastIssuedId.current = Math.max(highest, lastIssuedId.current) + 1
      return tasks.add(data, { id: String(lastIssuedId.current) }).catch(report)
    },
    update: (id, changes) => tasks.update(id, changes).catch(report),
    remove: id => tasks.remove(id).catch(report),
  }
}

function CreateTaskModal({ visible, onDismiss, onCreate }) {
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
      await onCreate({ name: name.trim(), done: false, due: due || null })
      close()
    } catch {
      // The error is shown as a notification; keep the modal open so nothing is lost.
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal
      visible={visible}
      onDismiss={close}
      header="Create task"
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
              // Without this, the Enter keypress lands on the button that regains focus when the modal closes.
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

function DeleteTaskModal({ task, onDismiss, onDelete }) {
  const [deleting, setDeleting] = useState(false)
  const confirm = async () => {
    if (!task || deleting) return
    setDeleting(true)
    try {
      await onDelete(task.id)
      onDismiss()
    } catch {
      // Shown as a notification.
    } finally {
      setDeleting(false)
    }
  }

  return (
    <Modal
      visible={task !== null}
      onDismiss={onDismiss}
      header="Delete task"
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

function TasksPage({ tasks }) {
  const follow = useFollow()
  const actions = useTaskActions(tasks)
  const [creating, setCreating] = useState(false)
  const [deleting, setDeleting] = useState(null)
  // The date picker reports partial input on every keystroke. Showing an error for it would resize the
  // row while typing, so an incomplete date only gets an error once it has been submitted.
  const submittedPartialDue = useRef(null)

  return (
    <>
      <Table
        variant="full-page"
        stickyHeader
        header={
          <Header
            variant="awsui-h1-sticky"
            counter={tasks.loading ? undefined : `(${tasks.tasks.length})`}
            description={tasks.backend === 'browser' ? 'Saved in this browser only.' : undefined}
            actions={<Button variant="primary" onClick={() => setCreating(true)}>Create task</Button>}
          >
            Tasks
          </Header>
        }
        items={tasks.tasks}
        loading={tasks.loading}
        loadingText="Loading tasks"
        trackBy="id"
        submitEdit={async (task, column, newValue) => {
          // undefined means the value wasn't changed; an empty value removes the due date.
          if (column.id !== 'due' || newValue === undefined) return
          // The table shows validation errors but doesn't block submitting; throwing keeps the editor open.
          const error = dueError(newValue)
          if (error) {
            if (!isCompleteDate(newValue)) submittedPartialDue.current = newValue
            throw new Error(error)
          }
          await actions.update(task.id, { due: newValue || null })
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
                onChange={({ detail }) => actions.update(task.id, { done: detail.checked }).catch(() => {})}
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
            cell: task => <Link href={`#/tasks/${task.id}`} onFollow={follow}>{task.name}</Link>,
          },
          {
            id: 'due',
            header: 'Due',
            // Fixed width, with room for the inline date picker, so editing doesn't resize the other columns.
            width: 340,
            cell: task => formatDue(task.due),
            editConfig: {
              ariaLabel: 'Due date',
              editIconAriaLabel: 'editable',
              errorIconAriaLabel: 'Due date error',
              validation: (_task, value) => {
                if (value === undefined) return undefined
                return isCompleteDate(value) || value === submittedPartialDue.current ? dueError(value) : undefined
              },
              editingCell: (task, { currentValue, setValue }) => (
                <DueDatePicker value={currentValue ?? task.due ?? ''} onChange={setValue} />
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
      <CreateTaskModal visible={creating} onDismiss={() => setCreating(false)} onCreate={actions.create} />
      <DeleteTaskModal task={deleting} onDismiss={() => setDeleting(null)} onDelete={actions.remove} />
    </>
  )
}

function TaskPage({ tasks }) {
  const navigate = useGuardedNavigate()
  const { id } = useParams()
  const task = tasks.findTask(id)

  if (tasks.loading) return <StatusIndicator type="loading">Loading task</StatusIndicator>
  if (!task) return <NotFoundPage />

  return (
    <ContentLayout
      header={
        <Header variant="h1" actions={<Button onClick={() => navigate(`/tasks/${task.id}/edit`)}>Edit</Button>}>
          {task.name}
        </Header>
      }
    >
      <Container header={<Header variant="h2">Task details</Header>}>
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
    </ContentLayout>
  )
}

function TaskEditPage({ tasks }) {
  const { id } = useParams()
  const task = tasks.findTask(id)
  if (tasks.loading) return <StatusIndicator type="loading">Loading task</StatusIndicator>
  if (!task) return <NotFoundPage />
  return <TaskEditForm key={task.id} task={task} tasks={tasks} />
}

function TaskEditForm({ task, tasks }) {
  const navigate = useGuardedNavigate()
  const notify = useNotify()
  const actions = useTaskActions(tasks)
  const [name, setName] = useState(task.name)
  const [due, setDue] = useState(task.due ?? '')
  const [done, setDone] = useState(task.done)
  const [dueTouched, setDueTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [saving, setSaving] = useState(false)
  const nameErrorText = submitted && !name.trim() ? 'Enter a task name.' : undefined
  const dueErrorText = submitted || dueTouched ? dueError(due) : undefined
  const detailsPath = `/tasks/${task.id}`

  // Only the fields that changed are written.
  const changes = {}
  if (name.trim() !== task.name) changes.name = name.trim()
  if ((due || null) !== task.due) changes.due = due || null
  if (done !== task.done) changes.done = done
  const hasChanges = Object.keys(changes).length > 0
  useUnsavedChanges(hasChanges)

  const save = async () => {
    setSubmitted(true)
    if (!name.trim() || dueError(due) || saving) return
    if (!hasChanges) {
      notify('info', 'No changes were made.')
      navigate(detailsPath, { force: true })
      return
    }
    setSaving(true)
    try {
      await actions.update(task.id, changes)
      notify('success', `Task "${changes.name ?? task.name}" was updated.`)
      navigate(detailsPath, { force: true })
    } catch {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={event => { event.preventDefault(); save() }}>
      <Form
        header={<Header variant="h1">Edit {task.name}</Header>}
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button formAction="none" variant="link" onClick={() => navigate(detailsPath)}>Cancel</Button>
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

function NotFoundPage() {
  const follow = useFollow()
  const location = useLocation()
  return (
    <ContentLayout header={<Header variant="h1">Page not found</Header>}>
      <Container>
        <Box variant="p">
          Nothing is at #{location.pathname}. <Link href="#/" onFollow={follow}>Go to the home page</Link>.
        </Box>
      </Container>
    </ContentLayout>
  )
}

// ── Navigation structure ─────────────────────────────────────────────────────
// TopNavigation is the root navigation: each section is one of its utility buttons. The side navigation
// is scoped to the current section: its header names the section and its links are that section's
// pages. Cloudscape allows at most four utility controls, so keep to four sections.
const SECTIONS = [
  { text: 'Home', href: '#/', path: '/', links: [] },
  { text: 'Tasks', href: '#/tasks', path: '/tasks/*', links: [{ type: 'link', text: 'List', href: '#/tasks' }] },
]

// The section a route belongs to. Routes outside every section (such as unknown routes) fall under the first.
const currentSection = pathname => SECTIONS.find(section => matchPath(section.path, pathname)) ?? SECTIONS[0]

// The side navigation link to highlight: the most specific link whose route contains the current one,
// so a details page like #/tasks/3 keeps its list link active.
const flattenLinks = links => links.flatMap(link => (link.items ? flattenLinks(link.items) : link.href ? [link] : []))
function activeLinkHref(section, pathname) {
  const containing = flattenLinks(section.links).filter(link => matchPath(`${link.href.slice(1).replace(/\/$/, '')}/*`, pathname))
  return containing.sort((a, b) => b.href.length - a.href.length)[0]?.href
}

// ── Shell ────────────────────────────────────────────────────────────────────

function useBreadcrumbs(tasks) {
  const location = useLocation()
  const trail = [{ text: APP_NAME, href: '#/' }]
  if (matchPath('/tasks/*', location.pathname)) trail.push({ text: 'Tasks', href: '#/tasks' })
  const taskMatch = matchPath('/tasks/:id/*', location.pathname)
  if (taskMatch) {
    const { id } = taskMatch.params
    trail.push({ text: tasks.findTask(id)?.name ?? 'Task', href: `#/tasks/${id}` })
    if (matchPath('/tasks/:id/edit', location.pathname)) trail.push({ text: 'Edit', href: `#/tasks/${id}/edit` })
  }
  return trail
}

function Shell() {
  const location = useLocation()
  const navigate = useGuardedNavigate()
  const follow = useFollow()
  const tasks = useTasks(useDocuments('tasks'))
  const breadcrumbs = useBreadcrumbs(tasks)
  const [notifications, setNotifications] = useState([])
  const [navigationOpen, setNavigationOpen] = useState(true)

  const notify = useCallback((type, content) => {
    const id = String(Date.now())
    const dismiss = () => setNotifications(current => current.filter(n => n.id !== id))
    setNotifications([{ id, type, content, dismissible: true, onDismiss: dismiss }])
  }, [])

  const section = currentSection(location.pathname)

  return (
    <NotificationsContext.Provider value={notify}>
      <div id="app-header" style={{ position: 'sticky', top: 0, zIndex: 1002 }}>
        <HashUrlBar />
        {/* identity.onFollow carries no href in its event detail, so it navigates directly. */}
        <TopNavigation
          identity={{ title: APP_NAME, href: '#/', onFollow: event => { event.preventDefault(); navigate('/') } }}
          utilities={SECTIONS.map(({ text, href }) => ({ type: 'button', variant: 'link', text, href, onFollow: follow }))}
        />
      </div>
      <AppLayout
        headerSelector="#app-header"
        contentType={matchPath('/tasks', location.pathname) ? 'table' : 'default'}
        navigationOpen={navigationOpen}
        onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
        navigation={
          <SideNavigation
            header={{ text: section.text, href: section.href }}
            activeHref={activeLinkHref(section, location.pathname)}
            onFollow={follow}
            items={section.links}
          />
        }
        breadcrumbs={<BreadcrumbGroup items={breadcrumbs} onFollow={follow} />}
        notifications={<Flashbar items={notifications} />}
        toolsHide
        content={
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TasksPage tasks={tasks} />} />
            <Route path="/tasks/:id" element={<TaskPage tasks={tasks} />} />
            <Route path="/tasks/:id/edit" element={<TaskEditPage tasks={tasks} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        }
      />
    </NotificationsContext.Provider>
  )
}

export default function App() {
  return (
    <I18nProvider locale="en" messages={[messages]}>
      <style>{GLOBAL_CSS}</style>
      <HashRouter>
        <NavigationGuard>
          <Shell />
        </NavigationGuard>
      </HashRouter>
    </I18nProvider>
  )
}
