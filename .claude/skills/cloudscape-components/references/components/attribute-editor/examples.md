# attribute-editor playground examples

Snapshot of the named examples on https://cloudscape.design/components/attribute-editor/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `empty`: `No items associated with the resource.`
- `addButtonText`: `Add new item`
- `items`: `[{key:"some-key-1",value:"some-value-1"},{key:"some-key-2",value:"some-value-2"}]`
- `definition`:

  ```jsx
  
          [
            {
              label: "Key",
              control: item => <Input value={item.key} placeholder="Enter key" />
            },
            {
              label: "Value",
              control: item => <Input value={item.value} placeholder="Enter value" />
            }
          ]
          
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(e.default,{statusIconAriaLabel:"Info",children:"This example makes use of controlled components. We have omitted the corresponding change handlers to keep the code sample simple. Editing these fields will not work. Adding and removing rows will work."})
  ```

### Empty state

Playground id: `empty-state`

- `addButtonText`: `Add new item`
- `empty`: `No items associated with the resource.`
- `items`: `[]`
- `definition`:

  ```jsx
  
          [
            {
              label: "Key",
              control: item => <Input value={item.key} placeholder="Enter key"/>
            },
            {
              label: "Value",
              control: item => <Input value={item.value} placeholder="Enter value"/>
            }
          ]
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(e.default,{statusIconAriaLabel:"Info",children:"This example makes use of controlled components. We have omitted the corresponding change handlers to keep the code sample simple. Editing these fields will not work. Adding and removing rows will work."})
  ```

### With info links

Playground id: `with-info-links`

- `addButtonText`: `Add new item`
- `items`: `[{key:"some-key-1",value:"some-value-1"},{key:"some-key-2",value:"some-value-2"}]`
- `definition`:

  ```jsx
  
          [
            {
              label: "Key",
              control: item => <Input value={item.key} placeholder="Enter key"/>,
              info: <Link variant="info">Info</Link>
            },
            {
              label: "Value",
              control: item => <Input value={item.value} placeholder="Enter value"/>,
              info: <Link variant="info">Info</Link>
            }
          ]
          
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(e.default,{statusIconAriaLabel:"Info",children:"This example makes use of controlled components. We have omitted the corresponding change handlers to keep the code sample simple. Editing these fields will not work. Adding and removing rows will work."})
  ```

### With constraint text

Playground id: `with-constraint-text`

- `addButtonText`: `Add new item`
- `items`: `[{key:"some-key-1",value:"some-value-1"},{key:"some-key-2",value:"some-value-2"}]`
- `definition`:

  ```jsx
  
          [
            {
              label: "Key",
              control: item => <Input value={item.key} placeholder="Enter key"/>
            },
            {
              label: "Value",
              control: item => <Input value={item.value} placeholder="Enter value"/>,
              constraintText: (item, index) => index === items.length - 1 ? 'Constraint text for the last value' : null
            }
          ]
          
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(e.default,{statusIconAriaLabel:"Info",children:"This example makes use of controlled components. We have omitted the corresponding change handlers to keep the code sample simple. Editing these fields will not work. Adding and removing rows will work."})
  ```

### With limit

Playground id: `with-limit`

- `addButtonText`: `Add new item`
- `additionalInfo`: `<span>You can add up to {50 - items.length} more items.</span>`
- `items`: `[{key:"some-key-1",value:"some-value-1"},{key:"some-key-2",value:"some-value-2"}]`
- `definition`:

  ```jsx
  
          [
            {
              label: "Key",
              control: item => <Input value={item.key} placeholder="Enter key"/>
            },
            {
              label: "Value",
              control: item => <Input value={item.value} placeholder="Enter value"/>
            }
          ]
          
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(e.default,{statusIconAriaLabel:"Info",children:"This example makes use of controlled components. We have omitted the corresponding change handlers to keep the code sample simple. Editing these fields will not work. Adding and removing rows will work."})
  ```

### With limit reached

Playground id: `with-limit-reached`

- `addButtonText`: `Add new item`
- `disableAddButton`: `true`
- `additionalInfo`: `You have reached the limit of 50 items.`
- `empty`: `No items associated with the resource.`
- `items`: `[{key:"some-key-1",value:"some-value-1"},{key:"some-key-2",value:"some-value-2"}]`
- `definition`:

  ```jsx
  
          [
            {
              label: "Key",
              control: item => <Input value={item.key} placeholder="Enter key"/>
            },
            {
              label: "Value",
              control: item => <Input value={item.value} placeholder="Enter value"/>
            }
          ]
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(e.default,{statusIconAriaLabel:"Info",children:"This example makes use of controlled components. We have omitted the corresponding change handlers to keep the code sample simple. Editing these fields will not work. Adding and removing rows will work."})
  ```

### With different control types

Playground id: `with-different-control-types`

- `addButtonText`: `Add new item`
- `items`:

  ```jsx
  [{key:"some-key-1",value:"some-value-1",type:{label:"Type 1",value:"0"}},{key:"some-key-2",value:"some-value-2",type:{label:"Type 2",value:"1"}}]
  ```
- `definition`:

  ```jsx
  
            [
              {
                label: "Key",
                control: item => <Input value={item.key} placeholder="Enter key" />
              },
              {
                label: "Value",
                control: item => <Input value={item.value} placeholder="Enter value" />,
                warningText: (item, index) => index === 1 ? "Warning message": null
              },
              {
                label: "Type",
                control: item =>
                  <Select
                    selectedOption={item.type}
                    options={[
                      {
                        label: "Type 1",
                        value: "0"
                      },
                      {
                        label: "Type 2",
                        value: "1"
                      }
                    ]}
                  />,
                errorText: (item, index) => index === 1 ? "Error message": null
              }
            ]
            
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(e.default,{statusIconAriaLabel:"Info",children:"This example makes use of controlled components. We have omitted the corresponding change handlers to keep the code sample simple. Editing these fields will not work. Adding and removing rows will work."})
  ```

### Custom row actions

Playground id: `custom-row-actions`

- `empty`: `No items associated with the resource.`
- `addButtonText`: `Add new item`
- `items`: `[{key:"some-key-1",value:"some-value-1"},{key:"some-key-2",value:"some-value-2"}]`
- `definition`:

  ```jsx
  
          [
            {
              label: "Key",
              control: item => <Input value={item.key} placeholder="Enter key" />
            },
            {
              label: "Value",
              control: item => <Input value={item.value} placeholder="Enter value" />
            }
          ]
          
  ```
- `customRowActions`:

  ```jsx
  
          ({ itemIndex }) => {
            const onClick = ({ detail: { id } }) => {
              const tmpItems = [...items];
              const item = tmpItems[itemIndex];
              switch (id) {
                case 'move-up':
                  tmpItems[itemIndex] = tmpItems[itemIndex - 1];
                  tmpItems[itemIndex - 1] = item;
                  break;
                case 'move-down':
                  tmpItems[itemIndex] = tmpItems[itemIndex + 1];
                  tmpItems[itemIndex + 1] = item;
                  break;
              }
              setItems(tmpItems);
            }
            return (
              <ButtonDropdown
                items={[
                  { text: 'Move up', id: 'move-up' },
                  { text: 'Move down', id: 'move-down' }
                ]}
                ariaLabel={`Remove item ${itemIndex+1}`}
                mainAction={{
                  text: 'Remove',
                  onClick: () => {
                    const tmpItems = [...items];
                    tmpItems.splice(itemIndex, 1);
                    setItems(tmpItems);
                  }
                }}
                onItemClick={onClick}
              />
            );
          }
          
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(e.default,{statusIconAriaLabel:"Info",children:"This example makes use of controlled components. We have omitted the corresponding change handlers to keep the code sample simple. Editing these fields will not work. Adding and removing rows will work."})
  ```

### Flexible layout

Playground id: `flexible-layout`

- `empty`: `No items associated with the resource.`
- `addButtonText`: `Add new item`
- `items`:

  ```jsx
  [
        {
          key: 'key-1',
          option: {
            label: 'Option 1', value: '1'
          },
          value: 'some-value-1',
          value2: {
            type: "absolute",
            startDate: "2024-01-09T12:34:56",
            endDate: "2024-01-19T15:30:00"
          },
        },
        {
          key: 'key-2',
          option: {
            label: 'Option 2', value: '2'
          },
          value: 'some-value-2',
          value2: {
            type: "relative",
            amount: 12,
            unit: "day"
          }
        },
      ]
  ```
- `definition`:

  ```jsx
  
          [
            {
              label: "Key",
              control: item => <Input value={item.key} placeholder="Enter key" />
            },
            {
              label: "Value",
              control: item => <Input value={item.value} placeholder="Enter value" />
            },
            {
              label: "Longer value",
              control: item => <DateRangePicker
                value={item.value2}
                placeholder="Filter by a date and time range"
              />
            }
          ]
          
  ```
- `gridLayout`:

  ```jsx
  [
      {
        rows: [
          [1, 2, 4]
        ],
        removeButton: {
          ownRow: false,
          width: 'auto'
        },
        breakpoint: 's'
      },
      {
        rows: [
          [1, 2, 4]
        ],
        removeButton: {
          ownRow: true,
          width: 'auto'
        },
        breakpoint: 'xs'
      },
      {
        rows: [
          [1, 2],
          [4]
        ],
        breakpoint: 'xxs'
      },
      {
        rows: [
          [1],
          [1],
          [1],
        ]
      }
    ]
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(e.default,{statusIconAriaLabel:"Info",children:"This example makes use of controlled components. We have omitted the corresponding change handlers to keep the code sample simple. Editing these fields will not work. Adding and removing rows will work."})
  ```
