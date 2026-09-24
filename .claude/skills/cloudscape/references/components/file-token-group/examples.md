# file-token-group playground examples

Snapshot of the named examples on https://cloudscape.design/components/file-token-group/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `items`:

  ```jsx
  [
    { file: new File([new Blob(['Test content'])], 'file-1.pdf', {
      type: 'application/pdf',
      lastModified: 1590962400000,
    }) },
    { file: new File([new Blob(['Test content'])], 'file-2.pdf', {
      type: 'application/pdf',
      lastModified: 1590962400000,
    }) },
    { file: new File([new Blob(['Test content'])], 'file-3.pdf', {
      type: 'application/pdf',
      lastModified: 1590962400000,
    }) }
  ]
  ```
- `showFileSize`: `true`
- `showFileLastModified`: `true`

### With horizontal alignment

Playground id: `with-horizontal-alignment`

- `items`:

  ```jsx
  [
        { file: new File([new Blob(['Test content'])], 'file-1.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }) },
        { file: new File([new Blob(['Test content'])], 'file-2.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }) },
        { file: new File([new Blob(['Test content'])], 'file-3.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }) }
      ]
  ```
- `showFileSize`: `true`
- `showFileLastModified`: `true`
- `alignment`: `horizontal`

### With errors, warnings, and loading

Playground id: `with-errors,-warnings,-and-loading`

- `items`:

  ```jsx
  [
        { file: new File([new Blob(['Test content'])], 'file-1.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }), errorText: 'This is an error message related to this file' },
        { file: new File([new Blob(['Test content'])], 'file-2.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }), warningText: 'This is a warning message related to this file' },
        { file: new File([new Blob(['Test content'])], 'file-3.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }), loading: true }
      ]
  ```
- `showFileSize`: `true`
- `showFileLastModified`: `true`

### With hidden tokens

Playground id: `with-hidden-tokens`

- `items`:

  ```jsx
  [
        { file: new File([new Blob(['Test content'])], 'file-1.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }) },
        { file: new File([new Blob(['Test content'])], 'file-2.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }) },
        { file: new File([new Blob(['Test content'])], 'file-3.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }) },
        { file: new File([new Blob(['Test content'])], 'file-4.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }) },
         { file: new File([new Blob(['Test content'])], 'file-5.pdf', {
          type: 'application/pdf',
          lastModified: 1590962400000,
        }) }
      ]
  ```
- `showFileSize`: `true`
- `showFileLastModified`: `true`
- `limit`: `3`
- `alignment`: `horizontal`
