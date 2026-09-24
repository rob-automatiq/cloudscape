# textarea playground examples

Snapshot of the named examples on https://cloudscape.design/components/textarea/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### With placeholder

Playground id: `with-placeholder`

- `placeholder`: `This is a placeholder`
- `value`: `""` (empty string)

### Hidden placeholder

Playground id: `hidden-placeholder`

- `placeholder`: `This is a placeholder`
- `value`: `Non-empty value: Placeholder should be hidden`

### Disabled with line wrap

Playground id: `disabled-with-line-wrap`

- `value`:

  ```jsx
  Long value, enough to line wrap and have scroll bars.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Donec venenatis magna lacus. Sed augue ante, egestas a ultrices condimentum, fringilla in erat. Proin dictum lacus quis metus volutpat viverra. Fusce aliquet leo ut risus venenatis, malesuada pulvinar magna bibendum. Integer pellentesque magna nisl, eget suscipit eros ultrices nec. Proin neque mi, porttitor quis lacinia ut, feugiat nec nulla. Proin sed facilisis leo, quis pharetra massa. Nam congue laoreet eros, eu feugiat metus posuere eget. Quisque accumsan diam a arcu condimentum, ac congue nulla laoreet. Aliquam tempor ligula eu consectetur vehicula. Donec hendrerit purus ligula, ut vulputate enim consectetur eget.
  ```
- `disabled`: `true`
- `rows`: `2`

### With custom style

Playground id: `with-custom-style`

- `value`: `Hello World`
- `style`:

  ```jsx
  
        {
          root: {
            borderColor: {
              default: 'light-dark(#0e7490, #14b8a6)',
              hover: 'light-dark(#0e7490, #2dd4bf)',
              focus: 'light-dark(#0891b2, #5eead4)',
              disabled: 'light-dark(#cbd5e1, #475569)',
              readonly: 'light-dark(#64748b, #64748b)',
            },
            borderWidth: '2px',
            borderRadius: '16px',
            backgroundColor: {
              default: 'light-dark(rgb(240, 253, 250), rgb(30, 41, 59))',
              hover: 'light-dark(rgb(204, 251, 241), rgb(51, 65, 85))',
              focus: 'light-dark(rgb(240, 253, 250), rgb(30, 41, 59))',
              disabled: 'light-dark(rgb(240, 253, 250), rgb(30, 41, 59))',
              readonly: 'light-dark(rgb(224, 242, 241), rgb(51, 65, 85))',
            },
            boxShadow: {
              default: 'none',
              hover: 'none',
              focus: '0 0 0 3px rgba(13, 148, 136, 0.3)',
              disabled: 'none',
              readonly: 'none',
            },
            color: {
              default: 'light-dark(rgb(15, 23, 42), rgb(226, 232, 240))',
              hover: 'light-dark(rgb(15, 23, 42), rgb(226, 232, 240))',
              focus: 'light-dark(rgb(15, 23, 42), rgb(226, 232, 240))',
              disabled: 'light-dark(rgb(148, 163, 184), rgb(100, 116, 139))',
              readonly: 'light-dark(rgb(71, 85, 105), rgb(148, 163, 184))',
            },
            fontSize: '16px',
            fontWeight: '400',
            paddingBlock: '12px',
            paddingInline: '16px',
          },
          placeholder: {
            color: 'light-dark(rgba(100, 116, 139, 0.7), rgba(148, 163, 184, 0.7))',
            fontSize: '14px',
            fontStyle: 'italic',
            fontWeight: '400',
          },
        }
  ```
