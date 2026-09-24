# code-view playground examples

Snapshot of the named examples on https://cloudscape.design/components/code-view/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Simple

Playground id: `simple`

- `content`:

  ```jsx
  const hello: string = "world";
  console.log(hello);
  ```

### With line numbers and copy button

Playground id: `with-line-numbers-and-copy-button`

- `content`:

  ```jsx
  const hello: string = "world";
  console.log(hello);
  ```
- `lineNumbers`: `true`
- `actions`:

  ```jsx
  `<CopyToClipboard
      copyButtonAriaLabel="Copy code"
      copyErrorText="Code failed to copy"
      copySuccessText="Code copied"
      textToCopy='${k}'
    />`
  ```
