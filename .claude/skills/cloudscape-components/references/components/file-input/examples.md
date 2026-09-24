# file-input playground examples

Snapshot of the named examples on https://cloudscape.design/components/file-input/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper:

  ```jsx
  <SpaceBetween size="s">
    <FileInput />
    <Table 
      columnDefinitions={[
        { id: 'name', header: 'File name', cell: (file) => file.name },
        { id: 'size', header: 'File size', cell: (file) => (file.size / 1000) + 'KB' },
      ]}
      items={value}
      empty="No files"
    />
  </SpaceBetween>
  ```

## Examples

### Button variant (default)

Playground id: `button-variant-(default)`

- `value`: `[]`
- `multiple`: `true`
- `children`: `Choose file`

### Icon variant

Playground id: `icon-variant`

- `value`: `[]`
- `multiple`: `false`
- `variant`: `icon`
