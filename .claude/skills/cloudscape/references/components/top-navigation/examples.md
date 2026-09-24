# top-navigation playground examples

Snapshot of the named examples on https://cloudscape.design/components/top-navigation/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### With utility controls

Playground id: `with-utility-controls`

- `identity`: `{href:"#",title:"Application",logo:{src:u,alt:"Application"}}`
- `utilities`:

  ```jsx
  [{type:"button",text:"external"===d?"Link":"AWS",href:"external"===d?"https://example.com/":"https://aws.amazon.com",external:true,externalIconAriaLabel:" (opens in a new tab)"},...k]
  ```

### With search

Playground id: `with-search`

- `identity`: `{href:"#",title:"Application",logo:{src:u,alt:"Application"}}`
- `search`: `<Input type="search" placeholder="Search" ariaLabel="Search" />`
- `utilities`:

  ```jsx
  [{type:"button",iconName:"notification",title:"Notifications",ariaLabel:"Notifications (unread)",badge:true,disableUtilityCollapse:false},{type:"menu-dropdown",iconName:"settings",ariaLabel:"Settings",title:"Settings",items:[{id:"settings-org",text:"Organizational settings"},{id:"settings-project",text:"Project settings"}]},{type:"menu-dropdown",text:"Customer Name",description:"email@example.com",iconName:"user-profile",items:[{id:"profile",text:"Profile"},{id:"preferences",text:"Preferences"},{id:"security",text:"Security"},{id:"support-group",text:"Support",items:[{id:"documentation",text:"Documentation",href:"#",external:true,externalIconAriaLabel:" (opens in new tab)"},{id:"support",text:"Support"},{id:"feedback",text:"Feedback",href:"#",external:true,externalIconAriaLabel:" (opens in new tab)"}]},{id:"signout",text:"Sign out"}]}]
  ```

### With custom content

Playground id: `with-custom-content`

- `children`:

  ```jsx
  `<Box padding={{ horizontal: 'l', vertical: 's' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button variant="icon" iconName="menu" ariaLabel="Open drawer" />
      <SpaceBetween direction="horizontal" size="xs" alignItems="center">
        <Icon url="${u}" size="big" ariaLabel="Application" />
        <Box variant="h3" padding="n">Application</Box>
      </SpaceBetween>
      <Button variant="icon" iconName="light-dark" ariaLabel="Switch theme" />
    </div>
  </Box>`
  ```

### Without visual context

Playground id: `without-visual-context`

- `visualContext`: `none`
- `identity`: `{href:"#",title:"Application",logo:{src:u,alt:"Application"}}`
- `search`: `<Input type="search" placeholder="Search" ariaLabel="Search" />`
- `utilities`:

  ```jsx
  [{type:"button",iconName:"notification",title:"Notifications",ariaLabel:"Notifications (unread)",badge:true,disableUtilityCollapse:false},{type:"menu-dropdown",iconName:"settings",ariaLabel:"Settings",title:"Settings",items:[{id:"settings-org",text:"Organizational settings"},{id:"settings-project",text:"Project settings"}]},{type:"menu-dropdown",text:"Customer Name",description:"email@example.com",iconName:"user-profile",items:[{id:"profile",text:"Profile"},{id:"preferences",text:"Preferences"},{id:"security",text:"Security"},{id:"support-group",text:"Support",items:[{id:"documentation",text:"Documentation",href:"#",external:true,externalIconAriaLabel:" (opens in new tab)"},{id:"support",text:"Support"},{id:"feedback",text:"Feedback",href:"#",external:true,externalIconAriaLabel:" (opens in new tab)"}]},{id:"signout",text:"Sign out"}]}]
  ```
