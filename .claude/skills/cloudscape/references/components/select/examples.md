# select playground examples

Snapshot of the named examples on https://cloudscape.design/components/select/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1

- `selectedOption` (object, held in state): `null`
- `onChange` (function): `({ detail }) => setSelectedOption(detail.selectedOption)`
- `options` (array): `[]`

### Setup 2


## Examples

### Default

Playground id: `default` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}]
  ```
- `selectedOption`: `{label:"Option 1",value:"1"}`

### With groups

Playground id: `with-groups` · uses setup 1

- `options`:

  ```jsx
  [{label:"Group 1",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]},{label:"Group 2 (disabled)",disabled:true,options:[{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}]}]
  ```
- `selectedOption`: `{label:"Option 1",value:"1"}`

### With icons

Playground id: `with-icons` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",iconName:"settings"},{label:"Option 2",value:"2",iconName:"unlocked"},{label:"Option 3",value:"3",iconName:"share"}]
  ```
- `selectedOption`: `{label:"Option 1",value:"1",iconName:"settings"}`

### With auto filtering

Playground id: `with-auto-filtering` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",iconName:"settings",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",description:"This is a description"},{label:"Option 3",value:"3",iconName:"share",description:"This is a description"}]
  ```
- `selectedOption`: `{label:"Option 1",value:"1",iconName:"settings",description:"This is a description"}`
- `filteringType`: `auto`

### With tags

Playground id: `with-tags` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",tags:["OptionTag1","Tag2","Tag3"]},{label:"Option 2",value:"2",tags:["OptionTag1","Tag2","Tag3"]}]
  ```
- `selectedOption`: `{label:"Option 1",value:"1",tags:["OptionTag1","Tag2","Tag3"]}`

### With features

Playground id: `with-features` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",iconName:"settings",description:"sub value",tags:["CPU-v2","2Gb RAM"],labelTag:"128Gb"},{label:"Option 2",value:"2",iconName:"settings",description:"sub value",tags:["CPU-v2","2Gb RAM"],labelTag:"128Gb"},{label:"Option 3",value:"3",iconName:"settings",description:"sub value",tags:["CPU-v2","2Gb RAM"],labelTag:"128Gb"}]
  ```
- `selectedOption`:

  ```jsx
  {label:"Option 1",value:"1",iconName:"settings",description:"sub value",tags:["CPU-v2","2Gb RAM"],labelTag:"128Gb"}
  ```
- `triggerVariant`: `option`

### Loading state

Playground id: `loading-state` · uses setup 1

- `selectedOption`: `null`
- `options`: `[]`
- `placeholder`: `Choose an option`
- `statusType`: `loading`
- `loadingText`: `Loading instances`

### Error state

Playground id: `error-state` · uses setup 1

- `selectedOption`: `null`
- `options`: `[]`
- `placeholder`: `Choose an option`
- `statusType`: `error`
- `errorText`: `Error fetching instances`

### Empty state

Playground id: `empty-state` · uses setup 1

- `selectedOption`: `null`
- `options`: `[]`
- `empty`: `No options`
- `placeholder`: `Choose an option`

### With disabled reason

Playground id: `with-disabled-reason` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",disabled:true,disabledReason:"This option is available in the primary region. You need to switch regions."},{label:"Option 2",value:"2",disabled:true,disabledReason:"This option is available in the primary region. You need to switch regions."},{label:"Option 3",value:"3"}]
  ```
- `selectedOption`: `{label:"Option 3",value:"3"}`
- `triggerVariant`: `option`

### Announcing new features

Playground id: `announcing-new-features` · uses setup 2

- `options`:

  ```jsx
  [{label:"us-east-1",value:"us-east-1"},{label:"us-west-2",value:"us-west-2"},{label:"eu-central-1",value:"eu-central-1"}]
  ```
- `selectedOption`: `{label:"us-east-1",value:"us-east-1"}`
- `renderOption`:

  ```jsx
  ({ item }) => {
        if (item.type === 'group') {
          return null;
        }
        const newOptionValues = ['eu-central-1'];
        const isNew = newOptionValues.includes(item.option.value);
        if (!isNew) {
          return null;
        }
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBlock: spaceOptionPaddingVertical,
              paddingInline: spaceFieldHorizontal
            }}
          >
            <span>{item.option.label} – <em>new</em></span>
            {item.selected && <span style={{ color: colorItemSelected }}><Icon name="check" /></span>}
          </div>
        );
      }
  ```

### With custom renderOption

Playground id: `with-custom-renderoption` · uses setup 1

- `options`:

  ```jsx
  [{label:"Group 1",description:"Group 1 Description",tags:["Group","Tag"],options:[{label:"Option 1",value:"1",description:"Option 1 Description",tags:["Tag1","Tag2","Tag3"]},{label:"Option 2",value:"2",description:"Option 2 Description",tags:["Tag1","Tag2","Tag3"]},{label:"Option 3",value:"3",description:"Option 3 Description",tags:["Tag1","Tag2","Tag3"]}]},{label:"Group 2 (disabled)",disabled:true,description:"Group 2 Description",tags:["Group","Tag"],options:[{label:"Option 4",value:"4",description:"Option 4 Description",tags:["Tag1","Tag2","Tag3"]},{label:"Option 5",value:"5",description:"Option 5 Description",tags:["Tag1","Tag2","Tag3"]}]}]
  ```
- `selectedOption`:

  ```jsx
  {label:"Option 1",value:"1",description:"Option 1 Description",tags:["Tag1","Tag2","Tag3"]}
  ```
- `triggerVariant`: `option`
- `renderOption`:

  ```jsx
  ({ item, filterText }) => {
        if (item.type === 'group' || item.type === 'item') {
          return (
            <div
              style={{
                paddingBlock: '8px',
                paddingInlineStart: item.type === 'item' && item.parent ? '32px' : '12px',
                paddingInlineEnd: '12px',
                color: item.disabled ? 'lightgrey' : 'black',
                opacity: item.disabled ? 0.6 : 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <SpaceBetween size="xxxs">
                <Box fontSize="body-m" margin="xxxs">
                  {item.option.label}
                </Box>
                <Box fontSize="body-s" fontWeight="light" margin="xxxs">
                  {item.option.description}
                </Box>
              </SpaceBetween>
              <SpaceBetween size="xxxs" direction="horizontal" alignItems="end">
                {item.option.tags?.map(tag => (
                  <Badge>{tag}</Badge>
                ))}
              </SpaceBetween>
            </div>
          );
        } else if (item.type === 'trigger') {
          return (
            <div
              style={{
                paddingInline: '12px',
                paddingBlock: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <SpaceBetween size="xxxs">
                <Box fontSize="body-m" margin="xxxs">
                  {item.option.label}
                </Box>
                <Box fontSize="body-s" fontWeight="light" margin="xxxs">
                  {item.option.description}
                </Box>
              </SpaceBetween>
              <SpaceBetween size="xxxs" direction="horizontal">
                {item.option.tags?.map(tag => (
                  <Badge>{tag}</Badge>
                ))}
              </SpaceBetween>
            </div>
          );
        }
        return null;
      }
  ```
