# file-upload playground examples

Snapshot of the named examples on https://cloudscape.design/components/file-upload/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper: `<FormField label="Form field label" description="Description"><FileUpload /></FormField>`

## Examples

### Single file upload

Playground id: `single-file-upload`

- `value`: `[]`
- `multiple`: `false`
- `showFileSize`: `true`
- `showFileLastModified`: `true`
- `showFileThumbnail`: `true`
- `tokenLimit`: `3`
- `constraintText`: `Hint text for file requirements`

### Multiple files upload

Playground id: `multiple-files-upload`

- `value`: `[]`
- `multiple`: `true`
- `showFileSize`: `true`
- `showFileLastModified`: `true`
- `showFileThumbnail`: `true`
- `tokenLimit`: `3`
- `constraintText`: `Hint text for file requirements`

### With file specific error

Playground id: `with-file-specific-error`

- `value`:

  ```jsx
  [
    new File([new Blob(['Test content'])], 'file-1.pdf', {
      type: 'application/pdf',
      lastModified: 1590962400000,
    }),
  ]
  ```
- `multiple`: `true`
- `showFileSize`: `true`
- `showFileLastModified`: `true`
- `showFileThumbnail`: `true`
- `tokenLimit`: `3`
- `constraintText`: `Hint text for file requirements`
- `fileErrors`: `["This is an error message related to this file"]`

### With file specific warning

Playground id: `with-file-specific-warning`

- `value`:

  ```jsx
  [
    new File([new Blob(['Test content'])], 'file-1.pdf', {
      type: 'application/pdf',
      lastModified: 1590962400000,
    }),
  ]
  ```
- `multiple`: `true`
- `showFileSize`: `true`
- `showFileLastModified`: `true`
- `showFileThumbnail`: `true`
- `tokenLimit`: `3`
- `constraintText`: `Hint text for file requirements`
- `fileWarnings`: `["This is a warning message related to this file"]`

### With form level error

Playground id: `with-form-level-error`

- `value`: `[]`
- `multiple`: `true`
- `showFileSize`: `true`
- `showFileLastModified`: `true`
- `showFileThumbnail`: `true`
- `tokenLimit`: `3`
- `constraintText`: `Hint text for file requirements`
- `errorText`: `This is an error message related to the file upload form input`

### With form level warning

Playground id: `with-form-level-warning`

- `value`: `[]`
- `multiple`: `true`
- `showFileSize`: `true`
- `showFileLastModified`: `true`
- `showFileThumbnail`: `true`
- `tokenLimit`: `3`
- `constraintText`: `Hint text for file requirements`
- `warningText`: `This is a warning message related to the file upload form input`
