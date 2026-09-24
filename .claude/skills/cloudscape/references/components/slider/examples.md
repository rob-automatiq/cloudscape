# slider playground examples

Snapshot of the named examples on https://cloudscape.design/components/slider/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`


### Stepped

Playground id: `stepped`

- `tickMarks`: `true`
- `step`: `10`

### With formatted reference values

Playground id: `with-formatted-reference-values`

- `valueFormatter`: `value => value + '%'`
- `referenceValues`: `[25,50,75]`

### Ordinal

Playground id: `ordinal`

- `min`: `0`
- `max`: `3`
- `value`: `2`
- `tickMarks`: `true`
- `step`: `1`
- `valueFormatter`:

  ```jsx
  value => [
        { value: '0', label: 'None' },
        { value: '1', label: 'Low' },
        { value: '2', label: 'Medium' },
        { value: '3', label: 'High' },
      ].find(item => item.value === value.toString())?.label || ''
  ```
- `referenceValues`: `[1,2]`
- `ariaDescription`: `From None to High`

### With input

Playground id: `with-input`


### With select

Playground id: `with-select`

- `step`: `25`
- `tickMarks`: `true`
- `controlId`: `select-slider`
- `referenceValues`: `[25,50,75]`

### With custom style

Playground id: `with-custom-style`

- `style`:

  ```jsx
  
        {
          track: {
            backgroundColor: 'light-dark(rgb(226, 232, 240), rgb(51, 65, 85))',
          },
          range: {
            backgroundColor: {
              default: 'light-dark(rgb(249, 115, 22), rgb(234, 88, 12))',
              active: 'light-dark(rgb(234, 88, 12), rgb(194, 65, 12))',
            },
          },
          handle: {
            backgroundColor: {
              default: 'light-dark(rgb(249, 115, 22), rgb(255, 255, 255))',
              hover: 'light-dark(rgb(234, 88, 12), rgb(241, 245, 249))',
              active: 'light-dark(rgb(194, 65, 12), rgb(226, 232, 240))',
            },
            borderRadius: '4px',
          },
        }
  ```
