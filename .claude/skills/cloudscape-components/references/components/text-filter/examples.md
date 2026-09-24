# text-filter playground examples

Snapshot of the named examples on https://cloudscape.design/components/text-filter/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Empty

Playground id: `empty`

- `filteringText`: `""` (empty string)

### With matches

Playground id: `with-matches`

- `filteringText`: `Example query`
- `countText`: `18 matches`

### With custom style

Playground id: `with-custom-style`

- `filteringText`: `""` (empty string)
- `filteringPlaceholder`: `Search with custom style`
- `filteringAriaLabel`: `Filter with custom style`
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
            fontSize: '14px',
            fontWeight: '400',
            paddingBlock: '8px',
            paddingInline: '32px 12px',
          },
          placeholder: {
            color: 'light-dark(rgba(100, 116, 139, 0.9), rgba(148, 163, 184, 0.9))',
            fontSize: '14px',
            fontStyle: 'italic',
            fontWeight: '400',
          },
        }
  ```
