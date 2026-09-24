# code-editor playground examples

Snapshot of the named examples on https://cloudscape.design/components/code-editor/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### JavaScript Sample

Playground id: `javascript-sample`

- `value`: `const pi = 3.14;`
- `language`: `javascript`
- `loading`: `false`
- Note shown with example: `null`

### Loading state

Playground id: `loading-state`

- `loading`: `true`
- Note shown with example: `null`

### Error state

Playground id: `error-state`

- `ace`: `undefined`
- `loading`: `false`
- Note shown with example: `null`
