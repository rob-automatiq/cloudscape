# button playground examples

Snapshot of the named examples on https://cloudscape.design/components/button/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Primary button

Playground id: `primary-button`

- `children`: `Button`
- `variant`: `primary`

### Normal button

Playground id: `normal-button`

- `children`: `Button`
- `variant`: `normal`

### Link button

Playground id: `link-button`

- `children`: `Button`
- `variant`: `link`
- `href`: `#`

### Inline link button

Playground id: `inline-link-button`

- `children`: `Download`
- `variant`: `inline-link`
- `href`: `#`

### Icon button

Playground id: `icon-button`

- `variant`: `icon`
- `iconName`: `settings`

### Inline icon button

Playground id: `inline-icon-button`

- `variant`: `inline-icon`
- `iconName`: `copy`

### External link button

Playground id: `external-link-button`

- `iconName`: `external`
- `children`: `Report a bug`
- `href`: `https://example.com`
- `iconAlign`: `right`
- `target`: `_blank`
- `ariaLabel`: `Report a bug (opens new tab)`

### Disabled with reason

Playground id: `disabled-with-reason`

- `children`: `Delete`
- `variant`: `primary`
- `disabled`: `true`
- `disabledReason`: `This action is available in the primary region. You need to switch regions.`

### With custom style

Playground id: `with-custom-style`

- `children`: `I am a custom button!`
- `variant`: `primary`
- `style`:

  ```jsx
  {
          root: {
            background: {
              active: 'light-dark(rgb(0, 64, 77), rgb(0, 150, 177))',
              default: 'light-dark(rgb(4, 125, 149), rgb(0, 184, 217))',
              hover: 'light-dark(rgb(0, 85, 102), rgb(0, 167, 197))',
            },
            color: {
              active: 'light-dark(white, rgb(242, 243, 243))',
              default: 'light-dark(white, rgb(242, 243, 243))',
              hover: 'light-dark(white, rgb(242, 243, 243))',
            },
            borderRadius: '4px',
            borderWidth: '0px',
            paddingBlock: '10px',
            paddingInline: '16px',
          },
        }
  ```
