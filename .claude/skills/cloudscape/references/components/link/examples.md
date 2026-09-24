# link playground examples

Snapshot of the named examples on https://cloudscape.design/components/link/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1


### Setup 2

- `onFollow` (function): `() => alert("You clicked the button link!")`

## Examples

### Secondary link

Playground id: `secondary-link` · uses setup 1

- `children`: `Secondary link`
- `href`: `#`

### Primary link

Playground id: `primary-link` · uses setup 1

- `variant`: `primary`
- `children`: `Primary link`
- `href`: `#`

### External link

Playground id: `external-link` · uses setup 1

- `variant`: `primary`
- `external`: `true`
- `href`: `https://example.com/`
- `children`: `Learn more`

### Button link

Playground id: `button-link` · uses setup 2

- `children`: `Perform action`

### Info link

Playground id: `info-link` · uses setup 1

- `variant`: `info`
- `children`: `Info`

### With custom style

Playground id: `with-custom-style` · uses setup 1

- `children`: `I am a custom link!`
- `href`: `#`
- `style`:

  ```jsx
  {
          root: {
            color: {
              active: 'light-dark(rgb(0, 64, 77), rgb(0, 150, 177))',
              default: 'light-dark(rgb(4, 125, 149), rgb(0, 184, 217))',
              hover: 'light-dark(rgb(0, 85, 102), rgb(0, 167, 197))',
            },
          },
        }
  ```
