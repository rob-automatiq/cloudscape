# badge playground examples

Snapshot of the named examples on https://cloudscape.design/components/badge/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Grey

Playground id: `grey`

- `color`: `grey`
- `children`: `20`

### Blue

Playground id: `blue`

- `color`: `blue`
- `children`: `52430`

### Red

Playground id: `red`

- `color`: `red`
- `children`: `EC2 key pair`

### Green

Playground id: `green`

- `color`: `green`
- `children`: `Application`

### Critical severity

Playground id: `critical-severity`

- `color`: `severity-critical`
- `children`: `Critical`

### High severity

Playground id: `high-severity`

- `color`: `severity-high`
- `children`: `High`

### Medium severity

Playground id: `medium-severity`

- `color`: `severity-medium`
- `children`: `Medium`

### Low severity

Playground id: `low-severity`

- `color`: `severity-low`
- `children`: `Low`

### Neutral severity

Playground id: `neutral-severity`

- `color`: `severity-neutral`
- `children`: `Neutral`

### With custom style

Playground id: `with-custom-style`

- `children`: `Custom badge`
- `style`:

  ```jsx
  {root:{background:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",color:"light-dark(white, rgb(242, 243, 243))",borderRadius:"4px",borderWidth:"0px",paddingBlock:"4px",paddingInline:"8px"}}
  ```
