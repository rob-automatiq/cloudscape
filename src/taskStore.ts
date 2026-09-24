export interface Task {
  id: string
  name: string
  done: boolean
  createdAt: number
  /** ISO date (YYYY-MM-DD), or null when no due date is set. */
  due: string | null
}

export type Backend = 'artifact-db' | 'browser'

export type TaskChanges = Partial<Pick<Task, 'name' | 'done' | 'due'>>

export interface TaskStore {
  backend: Backend
  subscribe(onTasks: (tasks: Task[]) => void, onError: (error: StoreError) => void): () => void
  create(name: string, due: string | null): Promise<void>
  setDone(id: string, done: boolean): Promise<void>
  setDue(id: string, due: string | null): Promise<void>
  update(id: string, changes: TaskChanges): Promise<void>
  remove(id: string): Promise<void>
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
  delete(): Promise<void>
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
  return {
    id: doc.id,
    name: data.name,
    done: data.done === true,
    createdAt: Number(data.createdAt) || 0,
    due: typeof data.due === 'string' ? data.due : null,
  }
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
    create(name, due) {
      lastIssuedId = Math.max(Number(nextId(latest)), lastIssuedId + 1)
      const id = String(lastIssuedId)
      return serial(id, () => tasks.doc(id).set({ name, done: false, createdAt: Date.now(), due }))
    },
    setDone(id, done) {
      return serial(id, () => tasks.doc(id).update({ done }))
    },
    setDue(id, due) {
      return serial(id, () => tasks.doc(id).update({ due }))
    },
    update(id, changes) {
      return serial(id, () => tasks.doc(id).update(changes))
    },
    remove(id) {
      return serial(id, () => tasks.doc(id).delete())
    },
  }
}

const STORAGE_KEY = 'cloudscape-app:tasks'
const LOCAL_SEED: Task[] = [
  { id: '1', name: 'Eat lunch', done: false, createdAt: 0, due: null },
  { id: '2', name: 'Mow lawn', done: false, createdAt: 0, due: null },
  { id: '3', name: 'Do laundry', done: false, createdAt: 0, due: null },
]

function browserStore(): TaskStore {
  const read = (): Task[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as Task[]).map(t => ({ ...t, due: t.due ?? null })) : LOCAL_SEED
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
    async create(name, due) {
      save([...current, { id: nextId(current), name, done: false, createdAt: Date.now(), due }])
    },
    async setDone(id, done) {
      save(current.map(t => (t.id === id ? { ...t, done } : t)))
    },
    async setDue(id, due) {
      save(current.map(t => (t.id === id ? { ...t, due } : t)))
    },
    async update(id, changes) {
      save(current.map(t => (t.id === id ? { ...t, ...changes } : t)))
    },
    async remove(id) {
      save(current.filter(t => t.id !== id))
    },
  }
}

export async function openTaskStore(): Promise<TaskStore> {
  const db = window.claude ? await window.claude.use('db').catch(() => null) : null
  return db ? artifactDbStore(db) : browserStore()
}
