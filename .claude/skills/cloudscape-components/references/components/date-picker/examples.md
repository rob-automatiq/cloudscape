# date-picker playground examples

Snapshot of the named examples on https://cloudscape.design/components/date-picker/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1

- `onChange` (function): `({ detail }) => setValue(detail.value)`
- `value` (string, held in state): `""` (empty string)
- `openCalendarAriaLabel` (function):

  ```jsx
  selectedDate => 'Choose certificate expiry date' + (selectedDate ? `, selected date is ${selectedDate}` : '')
  ```
- Wrapper:

  ```jsx
  <FormField label="Certificate expiry" constraintText="Use YYYY/MM/DD format."><DatePicker /></FormField>
  ```

### Setup 2

- `onChange` (function): `({ detail }) => setValue(detail.value)`
- `value` (string, held in state): `""` (empty string)
- `openCalendarAriaLabel` (function):

  ```jsx
  selectedDate => 'Choose certificate expiry date' + (selectedDate ? `, selected date is ${selectedDate}` : '')
  ```
- Wrapper:

  ```jsx
  <FormField label="Billing period" constraintText="Use YYYY/MM format."><DatePicker /></FormField>
  ```

## Examples

### Default

Playground id: `default` · uses setup 1

- `placeholder`: `YYYY/MM/DD`
- `value`: `""` (empty string)

### With default value

Playground id: `with-default-value` · uses setup 1

- `placeholder`: `YYYY/MM/DD`
- `value`: `2018-01-02`

### With disabled weekends

Playground id: `with-disabled-weekends` · uses setup 1

- `placeholder`: `YYYY/MM/DD`
- `isDateEnabled`: `date => date.getDay() !== 6 && date.getDay() !== 0`
- `value`: `""` (empty string)

### With disabled reason for weekends

Playground id: `with-disabled-reason-for-weekends` · uses setup 1

- `placeholder`: `YYYY/MM/DD`
- `isDateEnabled`: `date => date.getDay() !== 6 && date.getDay() !== 0`
- `dateDisabledReason`: `date => date.getDay() === 6 || date.getDay() === 0 ? "You can only select a weekday." : ''`
- `value`: `""` (empty string)

### With custom locale settings

Playground id: `with-custom-locale-settings` · uses setup 1

- `value`: `""` (empty string)
- `placeholder`: `JJJJ/MM/TT`
- `locale`: `de-DE`
- `startOfWeek`: `0`
- `openCalendarAriaLabel`:

  ```jsx
  selectedDate => 'Datum auswählen' + (selectedDate ? `, ausgewähltes Datum ist ${selectedDate}` : '')
  ```

### With month granularity

Playground id: `with-month-granularity` · uses setup 2

- `granularity`: `month`
- `isDateEnabled`: `date => date <= new Date()`
- `openCalendarAriaLabel`:

  ```jsx
  selectedDate => 'Choose billing period' + (selectedDate ? `, selected period is ${selectedDate}` : '')
  ```
- `placeholder`: `YYYY/MM`
