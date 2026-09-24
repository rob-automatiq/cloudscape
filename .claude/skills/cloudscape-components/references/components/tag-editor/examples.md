# tag-editor playground examples

Snapshot of the named examples on https://cloudscape.design/components/tag-editor/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `tags`: `[...n(3)]`

### With existing tags

Playground id: `with-existing-tags`

- `tags`: `[...n(2,true),...n(1)]`

### Empty state

Playground id: `empty-state`

- `tags`: `[]`

### Loading state

Playground id: `loading-state`

- `loading`: `true`
- `tags`: `[]`

### Tag limit reached

Playground id: `tag-limit-reached`

- `tags`: `[...n(1,true),...n(2)]`
- `tagLimit`: `3`

### Tag limit exceeded

Playground id: `tag-limit-exceeded`

- `tags`: `[...n(2,true),...n(2)]`
- `tagLimit`: `3`

### Removal of existing tags

Playground id: `removal-of-existing-tags`

- `tags`:

  ```jsx
  [...n(2,true),{key:"some-existing-key-3",value:"some-value-3",existing:true,markedForRemoval:true}]
  ```

### Unique tag keys and values not loaded

Playground id: `unique-tag-keys-and-values-not-loaded`

- `tags`: `[...n(2,true),{key:"",value:"",existing:false}]`
- `keysRequest`:

  ```jsx
  ()=>Promise.resolve(Array(201).fill(0).map((s,c)=>`key-${c}`))
  ```
- `valuesRequest`: `()=>Promise.reject()`
