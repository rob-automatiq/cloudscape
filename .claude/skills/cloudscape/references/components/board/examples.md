# board playground examples

Snapshot of the named examples on https://cloudscape.design/components/board/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- `onItemsChange` (function): `(event) => setItems(event.detail.items)`

## Examples

### Simple

Playground id: `simple`

- `items`:

  ```jsx
  [{id:"1",rowSpan:1,columnSpan:2,data:{title:"Demo 1",content:"First item"}},{id:"2",rowSpan:1,columnSpan:2,data:{title:"Demo 2",content:"Second item"}},{id:"3",rowSpan:1,columnSpan:3,data:{title:"Demo 3",content:"Third item"}}]
  ```

### Removable items

Playground id: `removable-items`

- `items`:

  ```jsx
  [{id:"1",rowSpan:1,columnSpan:2,data:{title:"Demo 1",content:"First item"}},{id:"2",rowSpan:1,columnSpan:2,data:{title:"Demo 2",content:"Second item"}},{id:"3",rowSpan:1,columnSpan:3,data:{title:"Demo 3",content:"Third item"}}]
  ```
- `renderItem`:

  ```jsx
  `(item, actions) => <BoardItem
    header={<Header>{item.data.title}</Header>}
    i18nStrings={${c.boardItemI18nStrings}}
    settings={
      <ButtonDropdown
        items={[
          { id: 'remove', text: 'Remove' }
        ]}
        ariaLabel="Board item settings"
        variant="icon"
        onItemClick={() => actions.removeItem()}
      />
    }
  >
    {item.data.content}
  </BoardItem>`
  ```
- `empty`:

  ```jsx
  <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
    <SpaceBetween size="m">
      <Box variant="strong" color="inherit">No items</Box>
      <Button iconName="add-plus">Add an item</Button>
    </SpaceBetween>
  </Box>
  ```

### Empty

Playground id: `empty`

- `items`: `[]`
- `empty`:

  ```jsx
  <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
    <SpaceBetween size="m">
      <Box variant="strong" color="inherit">No items</Box>
      <Button iconName="add-plus">Add an item</Button>
    </SpaceBetween>
  </Box>
  ```
