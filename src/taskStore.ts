export interface Task {
  id: string
  name: string
  done: boolean
  createdAt: number
}

export type Backend = 'artifact-db' | 'browser'

export interface TaskStore {
  backend: Backend
  subscribe(onTasks: (tasks: Task[]) => void, onError: (error: StoreError) => void): () => void
  create(name: string): Promise<void>
  setDone(id: string, done: boolean): Promise<void>
}

export interface StoreError {
  code: string
  message: string
}

// Minimal slice of the claude.ai Artifact `db` capability used here.
interface DbDocSnapshot { id: string; data(): Record<string, unknown> | undefined }
interface DbDocRef {
  set(data: Record<string, unknown>): Promise<void>
  update(data: Record<string, unknown>): Promise<void>
}
interface DbCollection {
  doc(id: string): DbDocRef
  onSnapshot(next: (snap: { docs: DbDocSnapshot[] }) => void, error?: (e: StoreError) => void): () => void
}
interface Db { collection(path: string): DbCollection }

declare global {
  interface Window {
    claude?: { use(name: 'db'): Promise<Db | null> }
  }
}

const byId = (a: Task, b: Task) => Number(a.id) - Number(b.id) || a.createdAt - b.createdAt
const nextId = (tasks: Task[]) => String(tasks.reduce((max, t) => Math.max(max, Number(t.id) || 0), 0) + 1)

function toTask(doc: DbDocSnapshot): Task | null {
  const data = doc.data()
  if (!data || typeof data.name !== 'string') return null
  return { id: doc.id, name: data.name, done: data.done === true, createdAt: Number(data.createdAt) || 0 }
}

function artifactDbStore(db: Db): TaskStore {
  const tasks = db.collection('tasks')
  let latest: Task[] = []
  let lastIssuedId = 0
  // The db allows one write at a time per document, so chain writes per task.
  const pending = new Map<string, Promise<void>>()
  const serial = (id: string, write: () => Promise<void>) => {
    const next = (pending.get(id) ?? Promise.resolve()).catch(() => {}).then(write)
    pending.set(id, next)
    return next
  }

  return {
    backend: 'artifact-db',
    subscribe(onTasks, onError) {
      return tasks.onSnapshot(snap => {
        latest = snap.docs.map(toTask).filter((t): t is Task => t !== null).sort(byId)
        onTasks(latest)
      }, onError)
    },
    create(name) {
      lastIssuedId = Math.max(Number(nextId(latest)), lastIssuedId + 1)
      const id = String(lastIssuedId)
      return serial(id, () => tasks.doc(id).set({ name, done: false, createdAt: Date.now() }))
    },
    setDone(id, done) {
      return serial(id, () => tasks.doc(id).update({ done }))
    },
  }
}

const STORAGE_KEY = 'cloudscape-app:tasks'
const LOCAL_SEED: Task[] = [
  { id: '1', name: 'Eat lunch', done: false, createdAt: 0 },
  { id: '2', name: 'Mow lawn', done: false, createdAt: 0 },
  { id: '3', name: 'Do laundry', done: false, createdAt: 0 },
]

function browserStore(): TaskStore {
  const read = (): Task[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as Task[]) : LOCAL_SEED
    } catch {
      return LOCAL_SEED
    }
  }
  let current = read()
  let listener: ((tasks: Task[]) => void) | null = null
  const save = (tasks: Task[]) => {
    current = [...tasks].sort(byId)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(current)) } catch { /* storage unavailable: keep in memory */ }
    listener?.(current)
  }

  return {
    backend: 'browser',
    subscribe(onTasks) {
      listener = onTasks
      onTasks(current)
      return () => { listener = null }
    },
    async create(name) {
      save([...current, { id: nextId(current), name, done: false, createdAt: Date.now() }])
    },
    async setDone(id, done) {
      save(current.map(t => (t.id === id ? { ...t, done } : t)))
    },
  }
}

export async function openTaskStore(): Promise<TaskStore> {
  const db = window.claude ? await window.claude.use('db').catch(() => null) : null
  return db ? artifactDbStore(db) : browserStore()
}
