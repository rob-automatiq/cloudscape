# tree-view playground examples

Snapshot of the named examples on https://cloudscape.design/components/tree-view/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Simple tree view

Playground id: `simple-tree-view`

- `items`:

  ```jsx
  [{id:"1",content:"Feature X",iconName:"folder",nestedItems:[{id:"1.1",content:"tests",iconName:"folder",nestedItems:[{id:"1.1.1",content:"unit.test.tsx",iconName:"file"},{id:"1.1.2",content:"integ.test.ts",iconName:"file"}]},{id:"1.2",iconName:"folder",content:"assets"},{id:"1.3",iconName:"file",content:"index.tsx"},{id:"1.4",content:"build-assets.ts",iconName:"file"}]},{id:"2",content:"Feature Y",iconName:"folder",nestedItems:[{id:"2.1",content:"tests",iconName:"folder",nestedItems:[{id:"2.1.1",content:"unit.test.tsx",iconName:"file"},{id:"2.1.2",content:"integ.test.ts",iconName:"file"}]},{id:"2.2",content:"assets",iconName:"folder",nestedItems:[{id:"2.2.1",content:"asset1",iconName:"file"},{id:"2.2.2",content:"asset2",iconName:"file"}]},{id:"2.3",content:"index.tsx",iconName:"file"}]},{id:"3",content:"package.json",iconName:"file"},{id:"4",content:"package-lock.json",iconName:"file"}]
  ```
- `renderItem`:

  ```jsx
  item => ({
    icon: <Icon name={item.iconName} ariaLabel={item.iconName} />,
    content: item.content,
  })
  ```
- `getItemChildren`: `item => item.nestedItems`
- `expandedItems`: `[]`
- `renderItemToggleIcon`: `""` (empty string)

### With connector lines

Playground id: `with-connector-lines`

- `items`:

  ```jsx
  [{id:"1",content:"Feature X",iconName:"folder",nestedItems:[{id:"1.1",content:"tests",iconName:"folder",nestedItems:[{id:"1.1.1",content:"unit.test.tsx",iconName:"file"},{id:"1.1.2",content:"integ.test.ts",iconName:"file"}]},{id:"1.2",iconName:"folder",content:"assets"},{id:"1.3",iconName:"file",content:"index.tsx"},{id:"1.4",content:"build-assets.ts",iconName:"file"}]},{id:"2",content:"Feature Y",iconName:"folder",nestedItems:[{id:"2.1",content:"tests",iconName:"folder",nestedItems:[{id:"2.1.1",content:"unit.test.tsx",iconName:"file"},{id:"2.1.2",content:"integ.test.ts",iconName:"file"}]},{id:"2.2",content:"assets",iconName:"folder",nestedItems:[{id:"2.2.1",content:"asset1",iconName:"file"},{id:"2.2.2",content:"asset2",iconName:"file"}]},{id:"2.3",content:"index.tsx",iconName:"file"}]},{id:"3",content:"package.json",iconName:"file"},{id:"4",content:"package-lock.json",iconName:"file"}]
  ```
- `renderItem`:

  ```jsx
  item => ({
    icon: <Icon name={item.iconName} ariaLabel={item.iconName} />,
    content: item.content,
  })
  ```
- `getItemChildren`: `item => item.nestedItems`
- `expandedItems`: `["1","2","2.1"]`
- `renderItemToggleIcon`: `""` (empty string)
- `connectorLines`: `vertical`

### With actions

Playground id: `with-actions`

- `items`:

  ```jsx
  [{id:"1",label:"Evaluated",type:"success",hasActions:true},{id:"2",label:"node-20",relatedNode:"eksclu-node-wx456",type:"success",hasActions:true,children:[{id:"2.1",label:"node-17",type:"warning"},{id:"2.2",label:"node-18",type:"success"}]},{id:"3",label:"node 21",relatedNode:"eksclu-node-wx457",hasActions:true,children:[{id:"3.1",label:"node 19",relatedNode:"eksclu-node-wx457",type:"success",hasActions:true,children:[{id:"3.1.1",label:"node-22",type:"success"},{id:"3.1.2",label:"node-23",type:"success"}]}]}]
  ```
- `renderItem`:

  ```jsx
  item => ({
    content: (
      <StatusIndicator type={item.type} iconAriaLabel={item.type}>
        {item.label} {item.relatedNode && '('}
        {item.relatedNode && <Link href="#" variant="primary">{item.relatedNode}</Link>}
        {item.relatedNode && ')'}
      </StatusIndicator>
    ),
    actions: item.hasActions && (
      <ButtonDropdown
        items={[
          { id: 'start', text: 'Start' },
          { id: 'stop', text: 'Stop' },
          { id: 'terminate', text: 'Terminate' },
        ]}
        ariaLabel={`Actions menu for ${item.label}`}
        variant="inline-icon"
      />
    ),
    announcementLabel: `${item.label} ${item.relatedNode}`,
  })
  ```
- `getItemChildren`: `item => item.children`
- `expandedItems`: `["2","3","3.1"]`
- `renderItemToggleIcon`: `""` (empty string)

### With different expand toggle icon

Playground id: `with-different-expand-toggle-icon`

- `items`:

  ```jsx
  [{id:"1",content:"Resource 1",tagName:"tag 1",children:[{id:"1.1",content:"Sub-resource 1.1"},{id:"1.2",content:"Sub-resource 1.2"},{id:"1.3",content:"Sub-resource 1.3"}]},{id:"2",content:"Resource 2",tagName:"tag 2"},{id:"3",content:"Resource 3",tagName:"tag 3",children:[{id:"3.1",content:"Sub-resource 3.1"}]},{id:"4",content:"Resource 4",tagName:"tag 4",children:[{id:"4.1",content:"Sub-resource 4.1"}]}]
  ```
- `renderItem`:

  ```jsx
  item => ({
    content: item.content,
    secondaryContent: (
      <Box color="text-body-secondary" fontSize="body-s">
        <SpaceBetween size="xxs" direction="horizontal">
          {item.tagName && <Icon name="ticket" size="small" />}
          {item.tagName}
        </SpaceBetween>
      </Box>
    ),
  })
  ```
- `getItemChildren`: `item => item.children`
- `expandedItems`: `[]`
- `renderItemToggleIcon`:

  ```jsx
  ({ expanded }) => (
    <Icon size="small" name={expanded ? 'treeview-collapse' : 'treeview-expand'} />
  )
  ```

### With horizontal scrolling

Playground id: `with-horizontal-scrolling`

- `items`:

  ```jsx
  [{id:"1",content:"Resource 1",children:[{id:"1.1",content:"Sub-resource 1"},{id:"1.2",content:"Sub-resource 2",children:[{id:"1.3",content:"Sub-resource 3"},{id:"1.4",content:"Sub-resource 4",children:[{id:"1.5",content:"Sub-resource 5"},{id:"1.6",content:"Sub-resource 6",children:[{id:"1.7",content:"Sub-resource 7"},{id:"1.8",content:"Sub-resource 8",children:[{id:"1.9",content:"Sub-resource 9"},{id:"1.10",content:"Sub-resource 10",children:[{id:"1.11",content:"Sub-resource 11"},{id:"1.12",content:"Sub-resource 12",children:[{id:"1.13",content:"Sub-resource 13"},{id:"1.14",content:"Sub-resource 14"}]}]}]}]}]}]}]},{id:"2",content:"Resource 2",children:[{id:"2.1",content:"Sub-resource 2.1"}]},{id:"3",content:"Resource 3",children:[{id:"3.1",content:"Sub-resource 3.1"}]},{id:"4",content:"Resource 4",children:[{id:"4.1",content:"Sub-resource 4.1"}]}]
  ```
- `renderItem`:

  ```jsx
  item => ({
      content: item.content,
    })
  ```
- `getItemChildren`: `item => item.children`
- `expandedItems`: `["1","1.2","1.4","1.6","1.8","1.10","1.12"]`
- `renderItemToggleIcon`: `""` (empty string)
