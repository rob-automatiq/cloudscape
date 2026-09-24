# error-boundary playground examples

Snapshot of the named examples on https://cloudscape.design/components/error-boundary/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- `error`: `false`

## Examples

### Default

Playground id: `default`

- `onError`: `({error:s})=>console.log(s)`

### With feedback link

Playground id: `with-feedback-link`

- `onError`: `({error:s})=>console.log(s)`
- `i18nStrings`: `{ components: { Feedback: ({ children }) => <Link href="#">{children}</Link> } }`

### With feedback button

Playground id: `with-feedback-button`

- `onError`: `({error:s})=>console.log(s)`
- `i18nStrings`:

  ```jsx
  { components: { Feedback: ({ children }) => <Link onFollow={() => alert('Clicked')}>{children}</Link> } }
  ```
