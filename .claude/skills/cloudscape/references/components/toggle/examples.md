# toggle playground examples

Snapshot of the named examples on https://cloudscape.design/components/toggle/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Unchecked with label

Playground id: `unchecked-with-label`

- `children`: `Toggle`
- `checked`: `false`

### Checked without label

Playground id: `checked-without-label`

- `checked`: `true`

### Checked disabled

Playground id: `checked-disabled`

- `checked`: `true`
- `disabled`: `true`
- `children`: `This toggle is disabled`

### Unchecked disabled

Playground id: `unchecked-disabled`

- `checked`: `false`
- `disabled`: `true`
- `children`: `This toggle is also disabled`

### Checked read-only

Playground id: `checked-read-only`

- `checked`: `true`
- `readOnly`: `true`
- `children`: `This toggle is read-only`

### Unchecked read-only

Playground id: `unchecked-read-only`

- `checked`: `false`
- `readOnly`: `true`
- `children`: `This toggle is also read-only`

### With custom style

Playground id: `with-custom-style`

- `children`: `I am a custom toggle!`
- `checked`: `false`
- `style`:

  ```jsx
  {input:{background:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",default:"light-dark(rgb(59, 55, 55), rgb(35, 47, 62))",disabled:"light-dark(rgb(200, 200, 200), rgb(68, 68, 68))",readOnly:"light-dark(rgb(240, 240, 240), rgb(45, 57, 72))"},handle:{background:{checked:"light-dark(rgb(255, 255, 255), rgb(35, 47, 62))",default:"light-dark(rgb(255, 255, 255), rgb(200, 200, 200))",disabled:"light-dark(rgb(150, 150, 150), rgb(102, 102, 102))",readOnly:"light-dark(rgb(120, 120, 120), rgb(130, 130, 130))"}}},label:{color:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",default:"light-dark(rgb(59, 55, 55), rgb(242, 243, 243))",disabled:"light-dark(rgb(150, 150, 150), rgb(136, 136, 136))",readOnly:"light-dark(rgb(80, 80, 80), rgb(180, 180, 180))"}}}
  ```
