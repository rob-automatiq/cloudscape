# token-group playground examples

Snapshot of the named examples on https://cloudscape.design/components/token-group/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `items`:

  ```jsx
  [{label:"Item 1",dismissLabel:"Remove item 1"},{label:"Item 2",dismissLabel:"Remove item 2"},{label:"Item 3",dismissLabel:"Remove item 3"}]
  ```

### With vertical alignment

Playground id: `with-vertical-alignment`

- `alignment`: `vertical`
- `items`:

  ```jsx
  [{label:"Item 1",dismissLabel:"Remove item 1"},{label:"Item 2",dismissLabel:"Remove item 2"},{label:"Item 3",dismissLabel:"Remove item 3"}]
  ```

### With disabled items

Playground id: `with-disabled-items`

- `items`:

  ```jsx
  [{label:"Item 1",dismissLabel:"Remove item 1",description:"This is a description for item 1",disabled:true},{label:"Item 2",dismissLabel:"Remove item 2",description:"This is a description for item 2",disabled:true},{label:"Item 3",dismissLabel:"Remove item 3",description:"This is a description for item 3",disabled:true}]
  ```

### With hidden tokens

Playground id: `with-hidden-tokens`

- `limit`: `3`
- `items`:

  ```jsx
  [{label:"Item 1",dismissLabel:"Remove item 1"},{label:"Item 2",dismissLabel:"Remove item 2"},{label:"Item 3",dismissLabel:"Remove item 3"},{label:"Item 4",dismissLabel:"Remove item 4"},{label:"Item 5",dismissLabel:"Remove item 5"}]
  ```

### With features

Playground id: `with-features`

- `items`:

  ```jsx
  [{label:"Item 1",description:"This is a description for item 1",labelTag:"Label tag 1",tags:["Tag 1","Tag 2"],dismissLabel:"Remove item 1",iconName:"share"},{label:"Item 2",description:"This is a description for item 2",labelTag:"Label tag 2",tags:["Tag 1","Tag 2"],dismissLabel:"Remove item 2",iconName:"settings"},{label:"Item 3",description:"This is a description for item 3",labelTag:"Label tag 3",tags:["Tag 1","Tag 2"],dismissLabel:"Remove item 3",iconName:"key"}]
  ```

### Read-only state

Playground id: `read-only-state`

- `readOnly`: `true`
- `items`:

  ```jsx
  [{label:"Item 1",dismissLabel:"Remove item 1"},{label:"Item 2",dismissLabel:"Remove item 2"},{label:"Item 3",dismissLabel:"Remove item 3"}]
  ```
