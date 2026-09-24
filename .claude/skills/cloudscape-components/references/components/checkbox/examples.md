# checkbox playground examples

Snapshot of the named examples on https://cloudscape.design/components/checkbox/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Unchecked

Playground id: `unchecked`

- `children`: `Expire`
- `checked`: `false`

### Checked

Playground id: `checked`

- `children`: `Transition to standard access storage class`
- `checked`: `true`

### Disabled

Playground id: `disabled`

- `children`: `Delete`
- `disabled`: `true`
- `checked`: `false`

### Checked and disabled

Playground id: `checked-and-disabled`

- `children`: `Archive to the Glacier Storage Class`
- `checked`: `true`
- `disabled`: `true`

### Read-only

Playground id: `read-only`

- `children`: `Archive to the Glacier Storage Class`
- `checked`: `false`
- `readOnly`: `true`

### Checked and read-only

Playground id: `checked-and-read-only`

- `children`: `Archive to the Glacier Storage Class`
- `checked`: `true`
- `readOnly`: `true`

### With custom style

Playground id: `with-custom-style`

- `children`: `I am a custom checkbox!`
- `checked`: `false`
- `style`:

  ```jsx
  {input:{fill:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",default:"light-dark(white, rgb(35, 47, 62))",disabled:"light-dark(rgb(200, 200, 200), rgb(68, 68, 68))"},stroke:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",default:"light-dark(rgb(100, 100, 100), rgb(170, 170, 170))",disabled:"light-dark(rgb(150, 150, 150), rgb(102, 102, 102))"}},label:{color:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",default:"light-dark(rgb(59, 55, 55), rgb(242, 243, 243))",disabled:"light-dark(rgb(150, 150, 150), rgb(136, 136, 136))"}}}
  ```
