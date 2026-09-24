# token playground examples

Snapshot of the named examples on https://cloudscape.design/components/token/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Normal

Playground id: `normal`

- `label`: `Normal token`
- `dismissLabel`: `Dismiss token`

### Normal without dismiss

Playground id: `normal-without-dismiss`

- `label`: `Normal token without dismiss`

### Inline

Playground id: `inline`

- `label`: `Inline token`
- `variant`: `inline`
- `dismissLabel`: `Dismiss token`

### Inline without dismiss

Playground id: `inline-without-dismiss`

- `label`: `Inline token without dismiss`
- `variant`: `inline`

### With features

Playground id: `with-features`

- `label`: `Token with features`
- `labelTag`: `Label tag`
- `description`: `This is a description for a token with features`
- `tags`: `["A tag","Another tag"]`
- `icon`:

  ```jsx
  
      <Icon name="share" />
      
  ```
- `dismissLabel`: `Dismiss token`

### With custom style

Playground id: `with-custom-style`

- `label`: `Styled token`
- `dismissLabel`: `Dismiss token`
- `style`:

  ```jsx
  
        {
          root: {
            background: {
              default: 'light-dark(#ecfdf5, #022c22)',
              disabled: 'light-dark(#f0fdf4, #0d3d2e)',
              readOnly: 'light-dark(#f0fdf4, #032e1e)',
            },
            borderColor: {
              default: 'light-dark(#6ee7b7, #059669)',
              disabled: 'light-dark(#a7f3d0, #065f46)',
              readOnly: 'light-dark(#a7f3d0, #047857)',
            },
            borderRadius: '6px',
            borderWidth: '2px',
            paddingBlock: '4px',
            paddingInline: '10px',
          },
          dismissButton: {
            color: {
              default: 'light-dark(#059669, #34d399)',
              hover: 'light-dark(#047857, #6ee7b7)',
              disabled: 'light-dark(#86efac, #065f46)',
              readOnly: 'light-dark(#6ee7b7, #047857)',
            },
          },
        }
  ```
