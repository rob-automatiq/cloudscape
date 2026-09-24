# header playground examples

Snapshot of the named examples on https://cloudscape.design/components/header/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Page header

Playground id: `page-header`

- `variant`: `h1`
- `children`: `Page title`
- `actions`:

  ```jsx
  
            <SpaceBetween direction="horizontal" size="xs">
              <Button>Secondary button</Button>
              <Button variant="primary">Primary button</Button>
            </SpaceBetween>
          
  ```

### With info link and counter

Playground id: `with-info-link-and-counter`

- `variant`: `h2`
- `children`: `Container title`
- `counter`: `(3)`
- `info`: `<Link variant="info">Info</Link>`
- `actions`:

  ```jsx
  <SpaceBetween direction="horizontal" size="xs">
          <Button>Secondary button</Button>
          <Button variant="primary">Primary button</Button>
          </SpaceBetween>
  ```

### Section header with actions

Playground id: `section-header-with-actions`

- `variant`: `h3`
- `children`: `Section title`
- `actions`: `<Button>Button</Button>`
