# date-input playground examples

Snapshot of the named examples on https://cloudscape.design/components/date-input/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper:

  ```jsx
  <FormField label="Certificate expiry" constraintText="Use YYYY/MM/DD format."><DateInput /></FormField>
  ```

## Examples

### With placeholder

Playground id: `with-placeholder`

- `placeholder`: `YYYY/MM/DD`
- `value`: `""` (empty string)

### With value

Playground id: `with-value`

- `value`: `2020-01-01`
