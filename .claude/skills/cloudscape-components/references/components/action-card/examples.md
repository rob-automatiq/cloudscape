# action-card playground examples

Snapshot of the named examples on https://cloudscape.design/components/action-card/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Simple

Playground id: `simple`

- `header`: `Action card header`
- `children`: `This is the main content of the action card.`
- `icon`: `<Icon name="angle-right"/>`

### With description

Playground id: `with-description`

- `header`: `Action card header`
- `description`: `A short description of this action`
- `children`: `This is the main content of the action card.`

### With centered icon

Playground id: `with-centered-icon`

- `header`: `Settings`
- `description`: `Configure your preferences`
- `icon`: `<Icon name="angle-right"/>`
- `iconVerticalAlignment`: `center`
- `children`: `Manage your account settings and preferences here.`

### Disabled

Playground id: `disabled`

- `header`: `Disabled action card`
- `description`: `This action card is disabled`
- `icon`: `<Icon name="angle-right"/>`
- `disabled`: `true`
- `children`: `This content belongs to a disabled action card.`

### Embedded variant

Playground id: `embedded-variant`

- `variant`: `embedded`
- `header`: `Embedded action card`
- `icon`: `<Icon name="angle-right"/>`
- `description`: `Uses compact border radius and padding`
- `children`: `This is the main content of the embedded action card.`

### With media

Playground id: `with-media`

- `variant`: `embedded`
- `header`: `image-title.jpg`
- `icon`: `<Icon name="angle-right"/>`
- `description`: `Metadata about file - 4GB`
- `disableContentPaddings`: `true`
- `children`:

  ```jsx
  
  <div style={{
    height: '250px',
    paddingTop: '8px',
    overflow: 'hidden',
    borderEndStartRadius: '8px',
    borderEndEndRadius: '8px',
  }}>
    <img src='/image-placeholder.png' alt="Image placeholder for action card media" style={{
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    }} />
  </div>
  ```
