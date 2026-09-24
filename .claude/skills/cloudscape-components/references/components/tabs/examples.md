# tabs playground examples

Snapshot of the named examples on https://cloudscape.design/components/tabs/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `tabs`:

  ```jsx
  [{label:"First tab label",id:"first",content:"First tab content area"},{label:"Second tab label",id:"second",content:"Second tab content area"},{label:"Third tab label",id:"third",content:"Third tab content area",disabled:true}]
  ```

### Controlled

Playground id: `controlled`

- `tabs`:

  ```jsx
  [{label:"First tab label",id:"first",content:"First tab content area"},{label:"Second tab label",id:"second",content:"Second tab content area"},{label:"Third tab label",id:"third",content:"Third tab content area",disabled:true}]
  ```

### With container

Playground id: `with-container`

- `tabs`:

  ```jsx
  [{label:"First tab label",id:"first",content:"First tab content area"},{label:"Second tab label",id:"second",content:"Second tab content area"},{label:"Third tab label",id:"third",content:"Third tab content area",disabled:true}]
  ```
- `variant`: `container`

### With actions

Playground id: `with-actions`

- `tabs`:

  ```jsx
  [
    {
      label: 'First tab label',
      id: 'first',
      content: 'First tab content area',
      action: (
        <ButtonDropdown
          variant="icon"
          ariaLabel="Query actions for first tab"
          items={[
            { id: 'save', text: 'Save' },
            { id: 'saveAs', text: 'Save as' },
            { id: 'rename', text: 'Rename'},
          ]}
          expandToViewport={true}
        />
      )
    },
    {
      label: 'Second tab label',
      id: 'second',
      content: 'Second tab content area',
      action: (
        <ButtonDropdown
          variant="icon"
          ariaLabel="Query actions for second tab"
          items={[
            { id: 'save', text: 'Save' },
            { id: 'saveAs', text: 'Save as' },
            { id: 'rename', text: 'Rename'},
          ]}
          expandToViewport={true}
        />
      )
    },
  ]
  ```

### Dismissible

Playground id: `dismissible`

- `tabs`:

  ```jsx
  [
    {
      label: 'First tab label',
      id: 'first',
      content: 'First tab content area',
      dismissible: true,
      dismissLabel: 'Dismiss first tab',
    },
    {
      label: 'Second tab label',
      id: 'second',
      content: 'Second tab content area',
      dismissible: true,
      dismissLabel: 'Dismiss second tab',
    }
  ]
  ```
- Note shown with example:

  ```jsx
  (0,c.jsxs)(a.default,{statusIconAriaLabel:"Info",children:["The dismissible tabs in this example are static. You can find details on how to make them interactive on the"," ",(0,c.jsx)(n.default,{href:"/components/tabs/?tabId=api",children:"API tab"}),"."]})
  ```

### With disabled reason

Playground id: `with-disabled-reason`

- `tabs`:

  ```jsx
  [
        {
          label: 'First tab label',
          id: 'first',
          content: 'First tab content area',
        },
        {
          label: 'Second tab label',
          id: 'second',
          content: 'Second tab content area',
          disabled: true,
          disabledReason: 'This tab is available in the primary region. You need to switch regions.',
        },
        {
          label: 'Third tab label',
          id: 'third',
          content: 'Third tab content area',
          disabled: true,
        },
        {
          label: 'Fourth tab label',
          id: 'fourth',
          content: 'Fourth tab content area',
        },
      ]
  ```
- `variant`: `container`

### With custom style

Playground id: `with-custom-style`

- `tabs`:

  ```jsx
  [{label:"First tab label",id:"first",content:"First tab content area"},{label:"Second tab label",id:"second",content:"Second tab content area"},{label:"Third tab label",id:"third",content:"Third tab content area",disabled:true}]
  ```
- `style`:

  ```jsx
  
        {
          tab: {
            backgroundColor: {
              default: 'light-dark(rgb(248, 250, 252), rgb(30, 41, 59))',
              hover: 'light-dark(rgb(241, 245, 249), rgb(51, 65, 85))',
              active: 'light-dark(rgb(99, 102, 241), rgb(124, 58, 237))',
              disabled: 'light-dark(rgb(248, 250, 252), rgb(30, 41, 59))',
            },
            borderColor: {
              default: 'light-dark(rgb(226, 232, 240), rgb(51, 65, 85))',
              hover: 'light-dark(rgb(203, 213, 225), rgb(71, 85, 105))',
              active: 'light-dark(rgb(99, 102, 241), rgb(124, 58, 237))',
              disabled: 'light-dark(rgb(226, 232, 240), rgb(51, 65, 85))',
            },
            borderRadius: '12px 12px 0 0',
            borderWidth: '1px',
            color: {
              default: 'light-dark(rgb(71, 85, 105), rgb(148, 163, 184))',
              hover: 'light-dark(rgb(51, 65, 85), rgb(203, 213, 225))',
              active: 'light-dark(rgb(255, 255, 255), rgb(255, 255, 255))',
              disabled: 'light-dark(rgb(148, 163, 184), rgb(71, 85, 105))',
            },
            fontSize: '16px',
            fontWeight: '500',
            focusRing: {
              borderColor: 'light-dark(rgb(99, 102, 241), rgb(139, 92, 246))',
              borderRadius: '22px',
              borderWidth: '3px',
            },
            paddingBlock: '8px',
            paddingInline: '15px',
            activeIndicator: {
              color: 'transparent',
              width: '0px',
            },
          },
          tabSeparator: {
            color: 'transparent',
            width: '0px',
          },
        }
  ```
