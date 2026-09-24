# avatar playground examples

Snapshot of the named examples on https://cloudscape.design/components/avatar/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `ariaLabel`: `Avatar of John Doe`
- `tooltipText`: `John Doe`

### With user initials

Playground id: `with-user-initials`

- `initials`: `JD`
- `tooltipText`: `John Doe`
- `ariaLabel`: `Avatar of John Doe`

### Generative AI avatar

Playground id: `generative-ai-avatar`

- `color`: `gen-ai`
- `iconName`: `gen-ai`
- `tooltipText`: `Generative AI assistant`
- `ariaLabel`: `Avatar of generative AI assistant`

### With custom size and image

Playground id: `with-custom-size-and-image`

- `width`: `50`
- `imgUrl`: `/a-portrait-of-a-happy-corgi-dog.jpg`
- `ariaLabel`: `A cute corgi!`

### With custom style

Playground id: `with-custom-style`

- `ariaLabel`: `Custom styled avatar`
- `width`: `40`
- `style`:

  ```jsx
  {root:{background:"light-dark(rgb(255, 255, 255), rgb(35, 47, 62))",borderColor:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",borderRadius:"40%",borderWidth:"2px",color:"light-dark(rgb(9, 74, 87), rgb(242, 243, 243))"}}
  ```
