# item-card playground examples

Snapshot of the named examples on https://cloudscape.design/components/item-card/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Simple

Playground id: `simple`

- `variant`: `default`
- `header`: `Item card header`
- `children`: `This is the main content of the item card.`

### With description

Playground id: `with-description`

- `variant`: `default`
- `header`: `Item card header`
- `description`: `A short description of this item`
- `children`: `This is the main content of the item card.`

### With icon

Playground id: `with-icon`

- `variant`: `default`
- `header`: `Settings`
- `description`: `Configure your preferences`
- `icon`: `<Icon name="settings"/>`
- `children`: `Manage your account settings and preferences here.`

### With actions

Playground id: `with-actions`

- `variant`: `default`
- `header`: `Item card header`
- `description`: `Item card description`
- `actions`:

  ```jsx
  
  <ButtonGroup
    variant="icon"
    items={[
      { type: "icon-button", id: "edit", iconName: "edit", text: "Edit" },
      { type: "icon-button", id: "delete", iconName: "remove", text: "Delete" },
    ]}
  />
      
  ```
- `children`: `This is the main content of the item card.`

### With footer

Playground id: `with-footer`

- `variant`: `default`
- `header`: `Item card header`
- `description`: `Item card description`
- `children`: `This is the main content of the item card.`
- `footer`: `Item card footer`

### Fully featured

Playground id: `fully-featured`

- `variant`: `default`
- `header`: `Item card header`
- `description`: `A detailed description of this item card`
- `icon`: `<Icon name="settings"/>`
- `actions`:

  ```jsx
  
  <ButtonGroup
    variant="icon"
    items={[
      { type: "icon-button", id: "edit", iconName: "edit", text: "Edit" },
      { type: "icon-button", id: "delete", iconName: "remove", text: "Delete" },
    ]}
  />
      
  ```
- `children`:

  ```jsx
  
  <SpaceBetween size="s">
    <KeyValuePairs
      columns={2}
      items={[
        { label: "Type", value: "Primary" },
        { label: "Status", value: <StatusIndicator>Active</StatusIndicator> },
        { label: "Region", value: "us-east-1" },
        { label: "Created", value: "2024-01-15" },
      ]}
    />
  </SpaceBetween>
      
  ```
- `footer`: `<Link href="#">View details</Link>`

### With media

Playground id: `with-media`

- `variant`: `embedded`
- `header`: `image-title.jpg`
- `description`: `Metadata about file - 4GB`
- `actions`:

  ```jsx
  
  <ButtonGroup
      variant="icon"
      items={[
        {
          id: 'download',
          iconName: 'download',
          type: 'icon-button',
          text: 'Download Image',
        },
  
        {
          id: 'expand-image',
          iconName: 'expand',
          type: 'icon-button',
          text: 'Expand Image',
        },
      ]}
    />
            
  ```
- `disableContentPaddings`: `true`
- `children`:

  ```jsx
  
  <div style={{
    height: '250px',
    paddingTop: '12px',
    overflow: 'hidden',
    borderEndStartRadius: '8px',
    borderEndEndRadius: '8px',
  }}>
    <img src='/image-placeholder.png' alt="Image placeholder for item card media" style={{
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    }} />
  </div>
  ```

### With custom style

Playground id: `with-custom-style`

- `header`: `Custom styled item card`
- `description`: `This item card has custom styling applied`
- `children`: `Custom styled item card content`
- `footer`: `Custom styled item card footer`
- `style`:

  ```jsx
  
  {
      root: {
        background: 'light-dark(rgb(204, 225, 249), rgb(1, 20, 25))',
        borderColor: 'light-dark(rgb(1, 20, 25), rgb(204, 225, 249))',
        borderWidth: '4px',
        borderRadius: '10px',
        boxShadow: '2px 2px 6px 4px rgba(0,0,0,0.2)',
      },
      content: {
        paddingBlock: '0px 16px',
        paddingInline: '16px',
      },
      header: {
        paddingBlock: '14px',
        paddingInline: '16px',
      },
      footer: {
        root: {
          paddingBlock: '12px 14px',
          paddingInline: '16px',
        },
        divider: {
          borderWidth: '2px',
          borderColor: 'light-dark(rgb(2, 62, 75), rgb(204, 225, 249))',
        }
      },
  }
  ```
