# board-item playground examples

Snapshot of the named examples on https://cloudscape.design/components/board-item/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper: `s.i(271645)`

## Examples

### Simple

Playground id: `simple`

- Note shown with example: `(0,t.jsx)(u,{})`

### With actions

Playground id: `with-actions`

- Note shown with example: `(0,t.jsx)(u,{})`

### With table

Playground id: `with-table`

- `wrapper`:

  ```jsx
  <Board 
    items={[{ id: '1', rowSpan: 4, columnSpan: 4, data: {}}]}
    renderItem={() => <BoardItem />}
    i18nStrings={${i.boardI18nStrings}}
    onItemsChange={() => {}}
  />
  ```
- Note shown with example: `(0,t.jsx)(u,{})`

### With mixed content

Playground id: `with-mixed-content`

- `wrapper`:

  ```jsx
  <Board 
    items={[{ id: '1', rowSpan: 5, columnSpan: 4, data: {}}]}
    renderItem={() => <BoardItem />}
    i18nStrings={${i.boardI18nStrings}}
    onItemsChange={() => {}}
  />
  ```
- Note shown with example: `(0,t.jsx)(u,{})`

### Palette item

Playground id: `palette-item`

- `wrapper`:

  ```jsx
  `<ItemsPalette 
    items={[{ id: '1', data: {}}]}
    renderItem={() => <BoardItem />}
    i18nStrings={${i.itemsPaletteI18nStrings}}
  />`
  ```
- Note shown with example: `(0,t.jsx)(u,{})`
