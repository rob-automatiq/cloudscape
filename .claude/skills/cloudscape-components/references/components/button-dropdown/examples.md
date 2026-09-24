# button-dropdown playground examples

Snapshot of the named examples on https://cloudscape.design/components/button-dropdown/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- `items` ("array"): `[]`

## Examples

### Default

Playground id: `default`

- `items`:

  ```jsx
  [{text:"Delete",id:"rm",disabled:false},{text:"Move",id:"mv",disabled:false},{text:"Rename",id:"rn",disabled:true},{id:"view",text:"View metrics",href:"https://example.com",external:true,externalIconAriaLabel:"(opens in new tab)"}]
  ```
- `children`: `Short`
- Note shown with example: `c?o:void 0`

### With nested options

Playground id: `with-nested-options`

- `items`:

  ```jsx
  [{text:"Instances",items:[{text:"Destroy",id:"destroy"},{text:"Restart",id:"restart"}]},{text:"SSH",disabled:true,items:[{text:"Upload key",id:"upload"}]}]
  ```
- `children`: `Long label example`
- Note shown with example: `c?o:void 0`

### With expandable groups

Playground id: `with-expandable-groups`

- `items`:

  ```jsx
  [{id:"connect",text:"Connect"},{id:"password",text:"Get password"},{id:"states",text:"Instance State",items:[{id:"start",text:"Start"},{id:"stop",text:"Stop",disabled:true},{id:"hibernate",text:"Hibernate",disabled:true},{id:"reboot",text:"Reboot",disabled:true},{id:"terminate",text:"Terminate"}]}]
  ```
- `children`: `Actions`
- `expandableGroups`: `true`
- Note shown with example: `c?o:void 0`

### Primary button dropdown

Playground id: `primary-button-dropdown`

- `children`: `Create new stream`
- `variant`: `primary`
- `items`:

  ```jsx
  [{text:"Create from live source",id:"create-from-live-source"},{text:"Create from recorded source",id:"create-from-recorded-source"}]
  ```
- Note shown with example: `c?o:void 0`

### Primary button dropdown with main action

Playground id: `primary-button-dropdown-with-main-action`

- `variant`: `primary`
- `mainAction`: `{text:"Launch instance"}`
- `items`: `[{text:"Launch instance from template",id:"launch-instance-from-template"}]`
- Note shown with example: `c?o:void 0`

### Icon button dropdown

Playground id: `icon-button-dropdown`

- `variant`: `icon`
- `ariaLabel`: `Control instance`
- `items`:

  ```jsx
  [{id:"start",text:"Start"},{id:"stop",text:"Stop",disabled:true},{id:"hibernate",text:"Hibernate",disabled:true},{id:"reboot",text:"Reboot",disabled:true},{id:"terminate",text:"Terminate"}]
  ```
- Note shown with example: `c?o:void 0`

### Inline icon button dropdown

Playground id: `inline-icon-button-dropdown`

- `variant`: `inline-icon`
- `ariaLabel`: `Control instance`
- `items`:

  ```jsx
  [{id:"start",text:"Start"},{id:"stop",text:"Stop",disabled:true},{id:"hibernate",text:"Hibernate",disabled:true},{id:"reboot",text:"Reboot",disabled:true},{id:"terminate",text:"Terminate"}]
  ```
- Note shown with example: `c?o:void 0`

### Disabled

Playground id: `disabled`

- `items`: `[{id:"id-1",text:"Nothing to see here"}]`
- `children`: `Another disabled example`
- `disabled`: `true`
- Note shown with example: `c?o:void 0`

### Disabled and loading

Playground id: `disabled-and-loading`

- `items`: `[{id:"id-1",text:"Nothing to see here"}]`
- `disabled`: `true`
- `loading`: `true`
- `children`: `Disabled`
- Note shown with example: `c?o:void 0`

### With disabled reason

Playground id: `with-disabled-reason`

- `items`: `[]`
- `children`: `Actions`
- `disabled`: `true`
- `disabledReason`: `This action is available in the primary region. You need to switch regions.`
- Note shown with example: `c?o:void 0`

### With disabled reason for an item

Playground id: `with-disabled-reason-for-an-item`

- `items`:

  ```jsx
  [{text:"View",id:"view"},{text:"Delete",id:"rm",disabled:true,disabledReason:"This action is available in the primary region. You need to switch regions."},{text:"Move",id:"mv"},{text:"Rename",id:"rn"}]
  ```
- `children`: `Actions`
- Note shown with example: `c?o:void 0`

### With selectable items

Playground id: `with-selectable-items`

- `items`:

  ```jsx
  [{text:"Settings group",id:"setting-group",items:[{text:"Setting",id:"setting",itemType:"checkbox",checked:true,disabled:false},{text:"Disabled setting",id:"setting",itemType:"checkbox",checked:true,disabled:true}]},{text:"Action",id:"action",disabled:false}]
  ```
- `children`: `Selectable example`
- Note shown with example: `c?o:void 0`

### With features

Playground id: `with-features`

- `items`:

  ```jsx
  [{text:"Action 1",id:"1",iconName:"settings",secondaryText:"Description",labelTag:"Metadata"},{text:"Action 2",id:"2",iconName:"settings",secondaryText:"Description",labelTag:"Metadata"},{text:"Action 3",id:"3",iconName:"settings",secondaryText:"Description",labelTag:"Metadata"}]
  ```
- `children`: `Actions`
- Note shown with example: `c?o:void 0`

### With filtering

Playground id: `with-filtering`

- `items`:

  ```jsx
  [{id:"connect",text:"Connect"},{id:"password",text:"Get password"},{id:"states",text:"Instance State",items:[{id:"start",text:"Start"},{id:"stop",text:"Stop",disabled:true},{id:"hibernate",text:"Hibernate",disabled:true},{id:"reboot",text:"Reboot",disabled:true},{id:"terminate",text:"Terminate"}]}]
  ```
- `children`: `Actions`
- `expandableGroups`: `true`
- `filteringType`: `auto`
- `filteringPlaceholder`: `Filter actions`
- `filteringAriaLabel`: `Filter actions`
- `noMatch`: `No matching actions.`
- Note shown with example: `c?o:void 0`

### Announcing new features

Playground id: `announcing-new-features`

- `variant`: `primary`
- `children`: `Create resource`
- `items`:

  ```jsx
  [{id:"create-instance",text:"Create instance"},{id:"create-knowledge-base",text:"Create knowledge base"},{id:"create-agent",text:"Create agent"}]
  ```
- `renderItem`:

  ```jsx
  ({ item }) => {
        if (item.type === 'group') {
          return null;
        }
        const newItemIds = ['create-knowledge-base', 'create-agent'];
        const isNew = newItemIds.includes(item.option.id);
        if (!isNew) {
          return null;
        }
        return (
          <div
            style={{
              paddingBlock: spaceOptionPaddingVertical,
              paddingInline: spaceOptionPaddingHorizontal
            }}
          >
            {item.option.text} – <em>new</em>
          </div>
        );
      }
  ```
- Note shown with example: `c?o:void 0`

### With custom renderItem

Playground id: `with-custom-renderitem`

- `expandableGroups`: `true`
- `children`: `Actions`
- `items`:

  ```jsx
  [{id:"connect",text:"Connect",secondaryText:"This is the Connect option",labelTag:"Ctrl + C"},{id:"password",text:"Get password",secondaryText:"This is the Get password option"},{id:"connection-settings",text:"Connection Settings",items:[{id:"reconnect-automatically",text:"Reconnect automatically",itemType:"checkbox",checked:true},{id:"auto-connect-on-startup",text:"Auto-connect on startup",itemType:"checkbox",checked:false},{id:"disconnect-when-idle",text:"Disconnect when idle",itemType:"checkbox",checked:false}]},{id:"states",text:"Instance State",items:[{id:"start",text:"Start"},{id:"stop",text:"Stop",disabled:true},{id:"hibernate",text:"Hibernate",disabled:true},{id:"reboot",text:"Reboot",secondaryText:"This is the Reboot option",labelTag:"Ctrl + B",disabled:true},{id:"terminate",text:"Terminate",secondaryText:"This is the Terminate option"},{id:"external",text:"Root Page",secondaryText:"",labelTag:"Ctrl + P",external:true,href:"/#/light/"}]}]
  ```
- `renderItem`:

  ```jsx
  ({ item }) => {
          if (item.type === 'group') {
            return (
              <div
                style={{
                  padding: '4px 8px',
                  fontWeight: 'bold',
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <span>
                  {item.option.text}
                </span>
                <div
                  style={{
                    transform: item.expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 80ms linear',
                  }}
                >
                  {item.expandDirection === 'vertical' ? (
                    <Icon name="caret-down-filled" />
                  ) : (
                    <Icon name="caret-right-filled" />
                  )}
                </div>
              </div>
            );
          } else {
            return (
              <div
                style={{
                  padding: item.type === 'checkbox' ? '4px 12px 4px 8px' : '4px 4px 4px 8px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: item.disabled ? '#999' : 'inherit',
                  }}
                >
                    
                  {item.type === 'checkbox' && 
                  <div style={{
                      width: '20px'
                  }}>
                  {item.option.checked ? <Icon name="check"/> : null}
                  </div>
                  }
                  <div>
                      
                    {item.option.text}
                    {item.option.href ? <Icon style={{marginLeft: '8px'}} name="external" /> : null}
                  </div>
                </div>
                {item.option.id === 'connect' || item.option.id === 'hibernate' ? (
                  <div
                    style={{
                      background: '#ff9900',
                      borderRadius: '4px',
                      color: '#252f3e',
                      fontStyle: 'italic',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      paddingInline: '3px',
                    }}
                  >
                    NEW
                  </div>
                ) : null}
              </div>
            );
          }
        }
  ```
- Note shown with example: `c?o:void 0`
