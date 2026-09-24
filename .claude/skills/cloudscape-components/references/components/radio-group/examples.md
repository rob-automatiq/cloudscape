# radio-group playground examples

Snapshot of the named examples on https://cloudscape.design/components/radio-group/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `value`: `'second'`
- `items`:

  ```jsx
  [{value:"first",label:"First choice"},{value:"second",label:"Second choice"},{value:"third",label:"Third choice"}]
  ```

### With labels and descriptions

Playground id: `with-labels-and-descriptions`

- `value`: `'second'`
- `items`:

  ```jsx
  [{value:"first",label:"First choice",description:"This is the first option."},{value:"second",label:"Second choice",description:"This is the second option."},{value:"third",label:"Third choice",description:"This is the third option."}]
  ```

### Horizontal

Playground id: `horizontal`

- `value`: `'second'`
- `items`:

  ```jsx
  [{value:"first",label:"First choice",description:"This is the first option."},{value:"second",label:"Second choice",description:"This is the second option."},{value:"third",label:"Third choice",description:"This is the third option."}]
  ```
- `direction`: `horizontal`

### Disabled

Playground id: `disabled`

- `value`: `'second'`
- `items`:

  ```jsx
  [{value:"first",label:"First choice",disabled:true,description:"This option is disabled."},{value:"second",label:"Second choice"},{value:"third",label:"Third choice"}]
  ```

### Read-only

Playground id: `read-only`

- `readOnly`: `true`
- `value`: `'second'`
- `items`:

  ```jsx
  [{value:"first",label:"First choice",description:"This is the first option."},{value:"second",label:"Second choice",description:"This is the second option."},{value:"third",label:"Third choice",description:"This is the third option."}]
  ```

### With custom style

Playground id: `with-custom-style`

- `value`: `'second'`
- `items`:

  ```jsx
  [{value:"first",label:"First choice",description:"This is the first option."},{value:"second",label:"Second choice",description:"This is the second option."},{value:"third",label:"Third choice",description:"Third option is disabled.",disabled:true}]
  ```
- `style`:

  ```jsx
  {input:{fill:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",default:"light-dark(white, rgb(35, 47, 62))",disabled:"light-dark(rgb(200, 200, 200), rgb(68, 68, 68))",readOnly:"light-dark(rgb(240, 240, 240), rgb(45, 57, 72))"},stroke:{default:"light-dark(rgb(100, 100, 100), rgb(170, 170, 170))",disabled:"light-dark(rgb(150, 150, 150), rgb(102, 102, 102))",readOnly:"light-dark(rgb(120, 120, 120), rgb(150, 150, 150))"},circle:{fill:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",disabled:"light-dark(rgb(180, 180, 180), rgb(88, 88, 88))",readOnly:"light-dark(rgb(100, 100, 100), rgb(130, 130, 130))"}}},label:{color:{checked:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",default:"light-dark(black, rgb(242, 243, 243))",disabled:"light-dark(rgb(150, 150, 150), rgb(136, 136, 136))",readOnly:"light-dark(rgb(80, 80, 80), rgb(180, 180, 180))"}},description:{color:{checked:"light-dark(rgb(60, 60, 60), rgb(200, 200, 200))",default:"light-dark(rgb(100, 100, 100), rgb(170, 170, 170))",disabled:"light-dark(rgb(180, 180, 180), rgb(116, 116, 116))",readOnly:"light-dark(rgb(120, 120, 120), rgb(150, 150, 150))"}}}
  ```
