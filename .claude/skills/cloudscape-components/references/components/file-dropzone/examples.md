# file-dropzone playground examples

Snapshot of the named examples on https://cloudscape.design/components/file-dropzone/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper: `s.i(51014)`

## Examples

### Visible on file dragged into web browser

Playground id: `visible-on-file-dragged-into-web-browser`

- `children`: `Drop files here`
- Note shown with example: `n===m&&(0,t.jsx)(h,{})`

### Always visible

Playground id: `always-visible`

- `children`:

  ```jsx
  <SpaceBetween size="xxs" alignItems="center">
  <Box color="inherit">Drop files here or select from below</Box>
    <FileInput value={value} onChange={({ detail }) => setValue(detail.value)}>
      Choose files
    </FileInput>
  </SpaceBetween>
  ```
- Note shown with example: `n===m&&(0,t.jsx)(h,{})`
