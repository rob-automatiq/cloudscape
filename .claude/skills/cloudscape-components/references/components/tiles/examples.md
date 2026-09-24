# tiles playground examples

Snapshot of the named examples on https://cloudscape.design/components/tiles/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `value`: `item1`
- `items`:

  ```jsx
  [{label:"Item 1 label",value:"item1"},{label:"Item 2 label",value:"item2"},{label:"Item 3 label",value:"item3"}]
  ```

### With descriptions

Playground id: `with-descriptions`

- `value`: `item1`
- `items`:

  ```jsx
  [{label:"Item 1 label",description:"This is a description for item 1",value:"item1"},{label:"Item 2 label",description:"This is a description for item 2",value:"item2"}]
  ```

### With images

Playground id: `with-images`

- `value`: `item1`
- `items`:

  ```jsx
  [
            {
              label: 'Item 1',
              image: <img src="/image-placeholder.png" alt="placeholder" />,
              value: 'item1'
            },
            {
              label: 'Item 2',
              image: <img src="/image-placeholder.png" alt="placeholder" />,
              value: 'item2'
            },
            {
              label: 'Item 3',
              image: <img src="/image-placeholder.png" alt="placeholder" />,
              value: 'item3'
            },
            {
              label: 'Item 4',
              image: <img src="/image-placeholder.png" alt="placeholder" />,
              value: 'item4'
            }
          ]
  ```
- `columns`: `4`

### With disabled items

Playground id: `with-disabled-items`

- `value`: `item1`
- `items`:

  ```jsx
  [{label:"Item 1 label",description:"This is a description for item 1",value:"item1"},{label:"Item 2 label",description:"This is a description for item 2",value:"item2",disabled:true},{label:"Item 3 label",description:"This is a description for item 3",value:"item3"},{label:"Item 4 label",description:"This is a description for item 4",value:"item4"}]
  ```

### Read-only state

Playground id: `read-only-state`

- `readOnly`: `true`
- `value`: `item1`
- `items`:

  ```jsx
  [{label:"Item 1 label",description:"This is a description for item 1",value:"item1"},{label:"Item 2 label",description:"This is a description for item 2",value:"item2"},{label:"Item 3 label",description:"This is a description for item 3",value:"item3"},{label:"Item 4 label",description:"This is a description for item 4",value:"item4"}]
  ```

### With badge

Playground id: `with-badge`

- `value`: `item1`
- `items`:

  ```jsx
  [
        {
          label: 'Item 1 label',
          description: (
            <SpaceBetween size="xs" direction="vertical">
              <span>This is a description for item 1</span>
              <Badge>Attribute 1</Badge>
            </SpaceBetween>
          ),
          value: 'item1'
        },
        {
          label: 'Item 2 label',
          description: (
            <SpaceBetween size="xs" direction="vertical">
              <span>This is a description for item 2</span>
              <SpaceBetween size="xs" direction="horizontal">
                <Badge>Attribute 1</Badge>
                <Badge>Attribute 2</Badge>
              </SpaceBetween>
            </SpaceBetween>
          ),
          value: 'item2'
        },
        {
          label: 'Item 3 label',
          description: (
            <SpaceBetween size="xs" direction="vertical">
              <span>This is a description for item 3</span>
              <Badge>Attribute 2</Badge>
            </SpaceBetween>
          ),
          value: 'item3'
        }
      ]
  ```
