# segmented-control playground examples

Snapshot of the named examples on https://cloudscape.design/components/segmented-control/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `label`: `Default segmented control`
- `options`:

  ```jsx
  [{text:"Segment 1",id:"seg-1"},{text:"Segment 2",id:"seg-2"},{text:"Segment 3",id:"seg-3"}]
  ```

### With a disabled segment

Playground id: `with-a-disabled-segment`

- `label`: `Segmented control with a disabled segment`
- `options`:

  ```jsx
  [{text:"Segment 1",id:"seg-1"},{disabled:true,text:"Segment 2",id:"seg-2"},{text:"Segment 3",id:"seg-3"}]
  ```

### With icons and text

Playground id: `with-icons-and-text`

- `label`: `Segmented control with icons`
- `options`:

  ```jsx
  [{text:"Segment 1",iconName:"view-full",id:"seg-1"},{text:"Segment 2",iconName:"view-horizontal",id:"seg-2"},{text:"Segment 3",iconName:"view-vertical",id:"seg-3"}]
  ```

### With icons only

Playground id: `with-icons-only`

- `label`: `Segmented control with only icons`
- `options`:

  ```jsx
  [{iconName:"view-full",iconAlt:"Segment 1",id:"seg-1"},{iconName:"view-horizontal",iconAlt:"Segment 2",id:"seg-2"},{iconName:"view-vertical",iconAlt:"Segment 3",id:"seg-3"}]
  ```

### With disabled reason

Playground id: `with-disabled-reason`

- `label`: `Segmented control with a disabled with reason segment`
- `options`:

  ```jsx
  [{text:"Segment 1",id:"seg-1"},{text:"Segment 2",id:"seg-2",disabled:true,disabledReason:"This segment is available in the primary region. You need to switch regions."},{text:"Segment 3",id:"seg-3"}]
  ```

### With custom style

Playground id: `with-custom-style`

- `label`: `Segmented control with custom style`
- `options`:

  ```jsx
  [{text:"Segment 1",id:"seg-1"},{text:"Segment 2",id:"seg-2"},{text:"Segment 3",id:"seg-3",disabled:true}]
  ```
- `style`:

  ```jsx
  
        {
          root: {
            borderRadius: '20px',
          },
          segment: {
            background: {
              default: 'light-dark(rgb(255, 255, 255), rgb(30, 41, 59))',
              hover: 'light-dark(rgb(240, 253, 250), rgb(51, 65, 85))',
              active: 'light-dark(rgb(204, 251, 241), rgb(15, 118, 110))',
              disabled: 'light-dark(rgb(248, 250, 252), rgb(30, 41, 59))',
            },
            color: {
              default: 'light-dark(rgb(51, 65, 85), rgb(203, 213, 225))',
              hover: 'light-dark(rgb(15, 23, 42), rgb(226, 232, 240))',
              active: 'light-dark(rgb(15, 23, 42), rgb(255, 255, 255))',
              disabled: 'light-dark(rgb(148, 163, 184), rgb(100, 116, 139))',
            },
            focusRing: {
              borderColor: 'light-dark(rgb(13, 148, 136), rgb(45, 212, 191))',
              borderRadius: '16px',
              borderWidth: '3px',
            },
            borderRadius: '16px',
            fontSize: '15px',
            paddingBlock: '10px',
            paddingInline: '20px',
          },
        }
  ```
