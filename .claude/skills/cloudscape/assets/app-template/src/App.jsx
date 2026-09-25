// App.jsx: the whole application in one file. main.jsx only mounts it.
//
// Architecture (from the cloudscape skill; keep it when extending the app):
// - Routing: <HashRouter> from react-router-dom. Every route lives after '#', e.g. #/items/abc.
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
import Container from '@cloudscape-design/components/container'
import ContentLayout from '@cloudscape-design/components/content-layout'
import Flashbar from '@cloudscape-design/components/flashbar'
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

const APP_NAME = 'Cloudscape app'

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
    async add(data) {
      const ref = collection.doc()
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
    async add(data) {
      const id = Math.random().toString(36).slice(2, 10)
      save([...items, { ...data, id, createdAt: Date.now() }])
      return id
    },
    async update(id, changes) { save(items.map(item => (item.id === id ? { ...item, ...changes } : item))) },
    async remove(id) { save(items.filter(item => item.id !== id)) },
  }
}

// Live list of the documents in one collection (one collection per entity type, e.g. 'customers',
// 'orders'), plus add/update/remove. Each document is a plain JSON object; `id` and `createdAt` are
// managed here. Call it once per collection, in Shell, and pass the result down to pages.
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
    add: data => run('add', data),
    update: (id, changes) => run('update', id, changes),
    remove: id => run('remove', id),
  }
}

function saveErrorMessage(error) {
  if (error?.code === 'quota_exceeded') return "There's no room to save more items."
  if (error?.code === 'invalid_argument') return "You don't have permission to make changes."
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
// "Items" is a placeholder entity showing the list, create and details pattern. Rename or replace it
// with the app's own entities, and add one useDocuments(collection) per entity type in Shell.

function HomePage() {
  const follow = useFollow()
  return (
    <ContentLayout header={<Header variant="h1" description="Built with the Cloudscape Design System.">{APP_NAME}</Header>}>
      <Container header={<Header variant="h2">Get started</Header>}>
        <Box variant="p">
          Open <Link href="#/items" onFollow={follow}>Items</Link> to create and view items.
        </Box>
      </Container>
    </ContentLayout>
  )
}

function CreateItemModal({ visible, onDismiss, onCreate }) {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [saving, setSaving] = useState(false)
  const errorText = submitted && !name.trim() ? 'Enter a name.' : undefined

  const close = () => { setName(''); setSubmitted(false); onDismiss() }
  const submit = async () => {
    setSubmitted(true)
    if (!name.trim() || saving) return
    setSaving(true)
    try {
      await onCreate(name.trim())
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
      header="Create item"
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link" onClick={close}>Cancel</Button>
            <Button variant="primary" loading={saving} onClick={submit}>Create item</Button>
          </SpaceBetween>
        </Box>
      }
    >
      <FormField label="Name" errorText={errorText}>
        <Input
          value={name}
          onChange={({ detail }) => setName(detail.value)}
          onKeyDown={event => {
            if (event.detail.key !== 'Enter') return
            // Without this, the Enter keypress lands on the button that regains focus when the modal closes.
            event.preventDefault()
            submit()
          }}
          invalid={!!errorText}
          autoFocus
        />
      </FormField>
    </Modal>
  )
}

function ItemsPage({ items }) {
  const follow = useFollow()
  const notify = useNotify()
  const [creating, setCreating] = useState(false)

  const create = async name => {
    try {
      await items.add({ name })
    } catch (error) {
      notify('error', saveErrorMessage(error))
      throw error
    }
  }

  return (
    <>
      <Table
        variant="full-page"
        stickyHeader
        header={
          <Header
            variant="awsui-h1-sticky"
            counter={items.loading ? undefined : `(${items.docs.length})`}
            description={items.backend === 'browser' ? 'Saved in this browser only.' : undefined}
            actions={<Button variant="primary" onClick={() => setCreating(true)}>Create item</Button>}
          >
            Items
          </Header>
        }
        items={items.docs}
        loading={items.loading}
        loadingText="Loading items"
        trackBy="id"
        empty={
          <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No items</b>
              <Button onClick={() => setCreating(true)}>Create item</Button>
            </SpaceBetween>
          </Box>
        }
        columnDefinitions={[
          {
            id: 'name',
            header: 'Name',
            isRowHeader: true,
            cell: item => <Link href={`#/items/${item.id}`} onFollow={follow}>{item.name}</Link>,
          },
          { id: 'created', header: 'Created', cell: item => new Date(item.createdAt).toLocaleString() },
        ]}
      />
      <CreateItemModal visible={creating} onDismiss={() => setCreating(false)} onCreate={create} />
    </>
  )
}

function ItemPage({ items }) {
  const { id } = useParams()
  const item = items.docs.find(candidate => candidate.id === id)

  if (items.loading) return <StatusIndicator type="loading">Loading item</StatusIndicator>
  if (!item) return <NotFoundPage />

  return (
    <ContentLayout header={<Header variant="h1">{item.name}</Header>}>
      <Container header={<Header variant="h2">Details</Header>}>
        <KeyValuePairs
          columns={2}
          items={[
            { label: 'Name', value: item.name },
            { label: 'Created', value: new Date(item.createdAt).toLocaleString() },
          ]}
        />
      </Container>
    </ContentLayout>
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
  { text: 'Items', href: '#/items', path: '/items/*', links: [{ type: 'link', text: 'List', href: '#/items' }] },
]

// The section a route belongs to. Routes outside every section (such as unknown routes) fall under the first.
const currentSection = pathname => SECTIONS.find(section => matchPath(section.path, pathname)) ?? SECTIONS[0]

// The side navigation link to highlight: the most specific link whose route contains the current one,
// so a details page like #/items/3 keeps its list link active.
const flattenLinks = links => links.flatMap(link => (link.items ? flattenLinks(link.items) : link.href ? [link] : []))
function activeLinkHref(section, pathname) {
  const containing = flattenLinks(section.links).filter(link => matchPath(`${link.href.slice(1).replace(/\/$/, '')}/*`, pathname))
  return containing.sort((a, b) => b.href.length - a.href.length)[0]?.href
}

// ── Shell ────────────────────────────────────────────────────────────────────

function useBreadcrumbs(items) {
  const location = useLocation()
  const trail = [{ text: APP_NAME, href: '#/' }]
  if (matchPath('/items/*', location.pathname)) trail.push({ text: 'Items', href: '#/items' })
  const itemMatch = matchPath('/items/:id', location.pathname)
  if (itemMatch) {
    const item = items.docs.find(candidate => candidate.id === itemMatch.params.id)
    trail.push({ text: item?.name ?? 'Item', href: `#/items/${itemMatch.params.id}` })
  }
  return trail
}

function Shell() {
  const location = useLocation()
  const navigate = useGuardedNavigate()
  const follow = useFollow()
  const items = useDocuments('items')
  const breadcrumbs = useBreadcrumbs(items)
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
        contentType={matchPath('/items', location.pathname) ? 'table' : 'default'}
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
            <Route path="/items" element={<ItemsPage items={items} />} />
            <Route path="/items/:id" element={<ItemPage items={items} />} />
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
