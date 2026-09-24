# divider playground examples

Snapshot of the named examples on https://cloudscape.design/components/divider/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper:

  ```jsx
  <div style={{ minWidth: "200px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}><Divider /></div>
  ```

## Examples

### Horizontal

Playground id: `horizontal`

- `orientation`: `horizontal`

### Vertical

Playground id: `vertical`

- `orientation`: `vertical`

### With label

Playground id: `with-label`

- `orientation`: `horizontal`
- `children`: `Section title`

### Between components

Playground id: `between-components`

- `orientation`: `horizontal`

### Vertical between components

Playground id: `vertical-between-components`

- `orientation`: `vertical`
