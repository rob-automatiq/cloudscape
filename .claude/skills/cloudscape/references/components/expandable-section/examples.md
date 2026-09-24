# expandable-section playground examples

Snapshot of the named examples on https://cloudscape.design/components/expandable-section/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `headerText`: `Static website hosting`
- `children`:

  ```jsx
  After you enable your S3 bucket for static website hosting, web browsers can access your content through the Amazon S3 website endpoint for the bucket.
  ```

### Default with actions

Playground id: `default-with-actions`

- `headerText`: `Security group rule`
- `headerActions`: `<Button variant="inline-link" ariaLabel="Remove security group rule">Remove</Button>`
- `children`: `See your security group rule here.`

### Footer

Playground id: `footer`

- `headerText`: `Versioning`
- `children`:

  ```jsx
  Versioning provides an additional level of protection by providing a way to recover from accidental overwrites or expirations.
  ```
- `variant`: `footer`

### Container

Playground id: `container`

- `headerText`: `Additional configuration`
- `children`: `Verify or edit the settings below.`
- `variant`: `container`

### Container with interactive header elements

Playground id: `container-with-interactive-header-elements`

- `headerText`: `Additional configuration`
- `children`: `See your custom configuration here.`
- `variant`: `container`
- `headerInfo`: `<Link variant="info">Info</Link>`
- `headerActions`: `<Button>Edit</Button>`
