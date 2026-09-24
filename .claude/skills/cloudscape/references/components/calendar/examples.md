# calendar playground examples

Snapshot of the named examples on https://cloudscape.design/components/calendar/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `value`: `""` (empty string)

### With default value

Playground id: `with-default-value`

- `value`: `2018-01-02`

### With disabled weekends

Playground id: `with-disabled-weekends`

- `isDateEnabled`: `date => date.getDay() !== 6 && date.getDay() !== 0`
- `value`: `""` (empty string)

### With disabled reason for weekends

Playground id: `with-disabled-reason-for-weekends`

- `isDateEnabled`: `date => date.getDay() !== 6 && date.getDay() !== 0`
- `dateDisabledReason`: `date => date.getDay() === 6 || date.getDay() === 0 ? "You can only select a weekday." : ''`
- `value`: `""` (empty string)

### With disabled reason for months

Playground id: `with-disabled-reason-for-months`

- `isDateEnabled`: `date => date <= new Date('2024-06')`
- `dateDisabledReason`:

  ```jsx
  date => (date >= new Date('2024-06') ? "You can only select a month before July 2024." : '')
  ```
- `value`: `""` (empty string)
- `granularity`: `month`

### With custom locale settings

Playground id: `with-custom-locale-settings`

- `locale`: `de-DE`
- `startOfWeek`: `0`
- `value`: `""` (empty string)

### With month granularity

Playground id: `with-month-granularity`

- `value`: `""` (empty string)
- `granularity`: `month`
