# autosuggest playground examples

Snapshot of the named examples on https://cloudscape.design/components/autosuggest/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### With suggestions

Playground id: `with-suggestions`

- `ariaLabel`: `Autosuggest example with suggestions`
- `placeholder`: `Enter value`
- `empty`: `No matches found`
- `options`:

  ```jsx
  [{value:"Suggestion 1"},{value:"Suggestion 2"},{value:"Suggestion 3"},{value:"Suggestion 4"}]
  ```

### With values and labels

Playground id: `with-values-and-labels`

- `ariaLabel`: `Autosuggest example with values and labels`
- `placeholder`: `Enter value`
- `empty`: `No matches found`
- `options`: `a.map((s,t)=>({value:""+(t+1),label:s.value}))`

### With suggestions groups

Playground id: `with-suggestions-groups`

- `ariaLabel`: `Autosuggest example with suggestions groups`
- `placeholder`: `Enter value`
- `empty`: `No matches found`
- `options`:

  ```jsx
  [{label:"Group 1",options:a},{label:"Group 2",options:[{value:"Suggestion 5"},{value:"Suggestion 6"},{value:"Suggestion 7"}]}]
  ```

### With features

Playground id: `with-features`

- `ariaLabel`: `Autosuggest example with features`
- `placeholder`: `Enter value`
- `empty`: `No matches found`
- `options`:

  ```jsx
  [{value:"Suggestion 1",description:"This is a description"},{value:"Suggestion 2",iconName:"unlocked",labelTag:"This is a label tag"},{value:"Suggestion 3 (disabled)",iconName:"share",tags:["Tags go here","Tag1","Tag2"],disabled:true},{value:"Suggestion 4",disabled:false,filteringTags:["filtering","tags","these are filtering tags"]}]
  ```

### No suggestions

Playground id: `no-suggestions`

- `ariaLabel`: `Autosuggest example with no suggestions`
- `placeholder`: `Enter value`
- `empty`: `No matches found`
- `options`: `[]`

### Loading state

Playground id: `loading-state`

- `ariaLabel`: `Autosuggest example with loading state`
- `statusType`: `loading`
- `loadingText`: `Loading services`
- `options`: `[]`

### Error state

Playground id: `error-state`

- `ariaLabel`: `Autosuggest example with error state`
- `statusType`: `error`
- `errorText`: `Error fetching values.`
- `options`: `[]`

### With custom style

Playground id: `with-custom-style`

- `ariaLabel`: `Autosuggest with custom style`
- `placeholder`: `Enter value`
- `empty`: `No matches found`
- `options`:

  ```jsx
  [{value:"Suggestion 1"},{value:"Suggestion 2"},{value:"Suggestion 3"},{value:"Suggestion 4"}]
  ```
- `style`:

  ```jsx
  
        {
          root: {
            borderColor: {
              default: 'light-dark(#0e7490, #14b8a6)',
              hover: 'light-dark(#0e7490, #2dd4bf)',
              focus: 'light-dark(#0891b2, #5eead4)',
              disabled: 'light-dark(#cbd5e1, #475569)',
              readonly: 'light-dark(#64748b, #64748b)',
            },
            borderWidth: '2px',
            borderRadius: '16px',
            backgroundColor: {
              default: 'light-dark(rgb(240, 253, 250), rgb(30, 41, 59))',
              hover: 'light-dark(rgb(204, 251, 241), rgb(51, 65, 85))',
              focus: 'light-dark(rgb(240, 253, 250), rgb(30, 41, 59))',
              disabled: 'light-dark(rgb(240, 253, 250), rgb(30, 41, 59))',
              readonly: 'light-dark(rgb(224, 242, 241), rgb(51, 65, 85))',
            },
            boxShadow: {
              default: 'none',
              hover: 'none',
              focus: '0 0 0 3px rgba(13, 148, 136, 0.3)',
              disabled: 'none',
              readonly: 'none',
            },
            color: {
              default: 'light-dark(rgb(15, 23, 42), rgb(226, 232, 240))',
              hover: 'light-dark(rgb(15, 23, 42), rgb(226, 232, 240))',
              focus: 'light-dark(rgb(15, 23, 42), rgb(226, 232, 240))',
              disabled: 'light-dark(rgb(148, 163, 184), rgb(100, 116, 139))',
              readonly: 'light-dark(rgb(71, 85, 105), rgb(148, 163, 184))',
            },
            fontSize: '14px',
            fontWeight: '400',
            paddingBlock: '8px',
            paddingInline: '32px 12px',
          },
          placeholder: {
            color: 'light-dark(rgba(100, 116, 139, 0.9), rgba(148, 163, 184, 0.9))',
            fontSize: '14px',
            fontStyle: 'italic',
            fontWeight: '400',
          },
        }
  ```

### With custom renderOption

Playground id: `with-custom-renderoption`

- `ariaLabel`: `Autosuggest with custom render`
- `placeholder`: `Enter value`
- `empty`: `No matches found`
- `options`:

  ```jsx
  [{label:"Group 1",description:"Group 1 Description",tags:["Group","Tag"],options:[{label:"Option 1",value:"Option 1",description:"Option 1 Description",tags:["Tag1","Tag2","Tag3"]},{label:"Option 2",value:"Option 2",description:"Option 2 Description",tags:["Tag1","Tag2","Tag3"]},{label:"Option 3",value:"Option 3",description:"Option 3 Description",tags:["Tag1","Tag2","Tag3"]}]},{label:"Group 2 (disabled)",disabled:true,description:"Group 2 Description",tags:["Group","Tag"],options:[{label:"Option 4",value:"Option 4",description:"Option 4 Description",tags:["Tag1","Tag2","Tag3"]},{label:"Option 5",value:"Option 5",description:"Option 5 Description",tags:["Tag1","Tag2","Tag3"]}]}]
  ```
- `renderOption`:

  ```jsx
  
  ({ item }) => {
    const isDisabled = item.type !== 'entered-text' && item.disabled;
    return (
      <div
        style={{
          paddingBlock: '6px',
          paddingInlineStart: item.type === 'item' && item.parent ? '32px' : '12px',
          paddingInlineEnd: '12px',
          color: isDisabled ? 'lightgrey' : 'black',
          opacity: isDisabled ? 0.6 : 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SpaceBetween size="xxxs">
          <Box fontSize="body-m" margin="xxxs">
            {item.option.label ?? item.option.value}
          </Box>
          <Box fontSize="body-s" fontWeight="light" margin="xxxs">
            {item.option.description}
          </Box>
        </SpaceBetween>
        <SpaceBetween size="xxxs" direction="horizontal" alignItems="end">
          {item.option.tags?.map(tag => (
            <Badge>{tag}</Badge>
          ))}
          {item.type === 'entered-text' && <Badge color="green">Add New Item</Badge>}
        </SpaceBetween>
      </div>
    );
  }
        
  ```
