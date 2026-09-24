# multiselect playground examples

Snapshot of the named examples on https://cloudscape.design/components/multiselect/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1

- `onChange` (function): `({ detail }) => setSelectedOptions(detail.selectedOptions)`
- `options` (array): `[]`

### Setup 2


## Examples

### Default

Playground id: `default` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",labelTag:"This is a label tag"},{label:"Option 3 (disabled)",value:"3",iconName:"share",tags:["Tags go here","Tag1","Tag2"],disabled:true},{label:"Option 4",value:"4",filteringTags:["filtering","tags","these are filtering tags"]},{label:"Option 5",value:"5"}]
  ```
- `placeholder`: `Choose options`
- `selectedOptions`: `[{label:"Option 1",value:"1",description:"This is a description"}]`

### With groups

Playground id: `with-groups` · uses setup 1

- `options`:

  ```jsx
  [{label:"Group 1",options:[{label:"Option 1",value:"1",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",labelTag:"This is a label tag"}]},{label:"Group 2",options:[{label:"Option 3 (disabled)",value:"3",iconName:"share",tags:["Tags go here","Tag1","Tag2"],disabled:true},{label:"Option 4",value:"4",filteringTags:["filtering","tags","these are filtering tags"]}]},{label:"Group 3 (disabled)",disabled:true,options:[{label:"Option 5",value:"5"},{label:"Option 6",value:"6"}]}]
  ```
- `placeholder`: `Choose options`
- `selectedOptions`: `[{label:"Option 1",value:"1",description:"This is a description"}]`

### With auto filtering

Playground id: `with-auto-filtering` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",iconName:"settings",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",description:"This is a description"},{label:"Option 3",value:"3",iconName:"share",description:"This is a description"}]
  ```
- `selectedOptions`: `[{label:"Option 1",value:"1",iconName:"settings",description:"This is a description"}]`
- `filteringType`: `auto`
- `placeholder`: `Choose options`

### Select all

Playground id: `select-all` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",iconName:"settings",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",description:"This is a description"},{label:"Option 3",value:"3",iconName:"share",description:"This is a description"},{label:"Option 4",value:"4",iconName:"settings",description:"This is a description"},{label:"Option 5",value:"5",iconName:"unlocked",description:"This is a description"},{label:"Option 6",value:"6",iconName:"share",description:"This is a description"}]
  ```
- `placeholder`: `Choose options`
- `selectedOptions`: `[]`
- `enableSelectAll`: `true`

### With hidden tokens

Playground id: `with-hidden-tokens` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",iconName:"settings",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",description:"This is a description"},{label:"Option 3",value:"3",iconName:"share",description:"This is a description"},{label:"Option 4",value:"4",iconName:"settings",description:"This is a description"},{label:"Option 5",value:"5",iconName:"unlocked",description:"This is a description"},{label:"Option 6",value:"6",iconName:"share",description:"This is a description"}]
  ```
- `placeholder`: `Choose options`
- `selectedOptions`:

  ```jsx
  [{label:"Option 1",value:"1",iconName:"settings",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",description:"This is a description"},{label:"Option 3",value:"3",iconName:"share",description:"This is a description"},{label:"Option 4",value:"4",iconName:"settings",description:"This is a description"},{label:"Option 5",value:"5",iconName:"unlocked",description:"This is a description"},{label:"Option 6",value:"6",iconName:"share",description:"This is a description"}]
  ```
- `tokenLimit`: `2`

### With inline tokens

Playground id: `with-inline-tokens` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",iconName:"settings",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",description:"This is a description"},{label:"Option 3",value:"3",iconName:"share",description:"This is a description"},{label:"Option 4",value:"4",iconName:"settings",description:"This is a description"},{label:"Option 5",value:"5",iconName:"unlocked",description:"This is a description"},{label:"Option 6",value:"6",iconName:"share",description:"This is a description"}]
  ```
- `placeholder`: `Choose options`
- `selectedOptions`:

  ```jsx
  [{label:"Option 1",value:"1",iconName:"settings",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",description:"This is a description"},{label:"Option 3",value:"3",iconName:"share",description:"This is a description"},{label:"Option 4",value:"4",iconName:"settings",description:"This is a description"},{label:"Option 5",value:"5",iconName:"unlocked",description:"This is a description"},{label:"Option 6",value:"6",iconName:"share",description:"This is a description"}]
  ```
- `inlineTokens`: `true`
- `ariaLabel`: `r(u)`

### Empty state

Playground id: `empty-state` · uses setup 1

- `selectedOptions`: `[]`
- `options`: `[]`
- `empty`: `No options`
- `placeholder`: `Choose options`

### Loading state

Playground id: `loading-state` · uses setup 1

- `selectedOptions`: `[]`
- `options`: `[]`
- `placeholder`: `Choose options`
- `statusType`: `loading`
- `loadingText`: `Loading instances`

### Error state

Playground id: `error-state` · uses setup 1

- `selectedOptions`: `[]`
- `options`: `[]`
- `placeholder`: `Choose options`
- `statusType`: `error`
- `errorText`: `Error fetching instances`

### Disabled state

Playground id: `disabled-state` · uses setup 1

- `selectedOptions`: `[]`
- `options`: `[]`
- `placeholder`: `Choose options`
- `disabled`: `true`

### Read-only state

Playground id: `read-only-state` · uses setup 1

- `options`:

  ```jsx
  [{label:"Option 1",value:"1",description:"This is a description"},{label:"Option 2",value:"2",iconName:"unlocked",labelTag:"This is a label tag"},{label:"Option 3 (disabled)",value:"3",iconName:"share",tags:["Tags go here","Tag1","Tag2"],disabled:true},{label:"Option 4",value:"4",filteringTags:["filtering","tags","these are filtering tags"]},{label:"Option 5",value:"5"}]
  ```
- `placeholder`: `Choose options`
- `selectedOptions`: `[{label:"Option 1",value:"1",description:"This is a description"}]`
- `readOnly`: `true`

### With disabled reason

Playground id: `with-disabled-reason` · uses setup 1

- `selectedOptions`: `[]`
- `options`:

  ```jsx
  [{label:"Option 1",value:"1",disabled:true,disabledReason:"This option is available in the primary region. You need to switch regions."},{label:"Option 2",value:"2",disabled:true,disabledReason:"This option is available in the primary region. You need to switch regions."},{label:"Option 3",value:"3"}]
  ```
- `placeholder`: `Choose options`

### Announcing new features

Playground id: `announcing-new-features` · uses setup 2

- `options`:

  ```jsx
  [{label:"us-east-1",value:"us-east-1"},{label:"us-west-2",value:"us-west-2"},{label:"eu-central-1",value:"eu-central-1"}]
  ```
- `selectedOptions`: `[{label:"us-east-1",value:"us-east-1"}]`
- `placeholder`: `Choose regions`
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
              gap: '8px',
              paddingBlock: spaceOptionPaddingVertical,
              paddingInline: spaceFieldHorizontal
            }}
          >
            <Checkbox checked={item.selected} />
            <span>{item.option.label} – <em>new</em></span>
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
- `selectedOptions`:

  ```jsx
  [{label:"Option 1",value:"1",description:"Option 1 Description",tags:["Tag1","Tag2","Tag3"]}]
  ```
- `placeholder`: `Choose options`
- `enableSelectAll`: `true`
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
        } else if (item.type === 'select-all') {
          return (
            <div
              style={{
                paddingInline: '12px',
                paddingBlock: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              Select All
            </div>
          );
        }
        return null;
      }
  ```
