# radio-button playground examples

Snapshot of the named examples on https://cloudscape.design/components/radio-button/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Unchecked

Playground id: `unchecked`

- `children`: `First choice`
- `checked`: `false`

### Checked

Playground id: `checked`

- `children`: `First choice`
- `checked`: `true`

### With description

Playground id: `with-description`

- `children`: `First choice`
- `description`: `This is the first option`
- `checked`: `true`

### Disabled

Playground id: `disabled`

- `children`: `First choice`
- `disabled`: `true`
- `checked`: `false`

### Checked and disabled

Playground id: `checked-and-disabled`

- `children`: `First choice`
- `checked`: `true`
- `disabled`: `true`

### Read-only

Playground id: `read-only`

- `children`: `First choice`
- `checked`: `false`
- `readOnly`: `true`

### Checked and read-only

Playground id: `checked-and-read-only`

- `children`: `First choice`
- `checked`: `true`
- `readOnly`: `true`

### With custom style

Playground id: `with-custom-style`

- `children`: `I am a custom radio button!`
- `checked`: `true`
- `style`:

  ```jsx
  {input:{fill:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",default:"light-dark(white, rgb(35, 47, 62))",disabled:"light-dark(rgb(200, 200, 200), rgb(68, 68, 68))",readOnly:"light-dark(rgb(240, 240, 240), rgb(45, 57, 72))"},stroke:{default:"light-dark(rgb(100, 100, 100), rgb(170, 170, 170))",disabled:"light-dark(rgb(150, 150, 150), rgb(102, 102, 102))",readOnly:"light-dark(rgb(120, 120, 120), rgb(150, 150, 150))"},circle:{fill:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",disabled:"light-dark(rgb(180, 180, 180), rgb(88, 88, 88))",readOnly:"light-dark(rgb(100, 100, 100), rgb(130, 130, 130))"}}},label:{color:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",default:"light-dark(black, rgb(242, 243, 243))",disabled:"light-dark(rgb(150, 150, 150), rgb(136, 136, 136))",readOnly:"light-dark(rgb(80, 80, 80), rgb(180, 180, 180))"}},description:{color:{checked:"light-dark(rgb(60, 60, 60), rgb(200, 200, 200))",default:"light-dark(rgb(100, 100, 100), rgb(170, 170, 170))",disabled:"light-dark(rgb(180, 180, 180), rgb(116, 116, 116))",readOnly:"light-dark(rgb(120, 120, 120), rgb(150, 150, 150))"}}}
  ```
