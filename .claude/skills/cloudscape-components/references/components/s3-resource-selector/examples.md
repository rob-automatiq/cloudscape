# s3-resource-selector playground examples

Snapshot of the named examples on https://cloudscape.design/components/s3-resource-selector/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Read mode

Playground id: `read-mode`

- `objectsIsItemDisabled`: `item => item.IsFolder`
- `selectableItemsTypes`: `["objects","versions"]`
- Note shown with example:

  ```jsx
  ((s="")=>(0,t.jsxs)(a.default,{statusIconAriaLabel:"Info",children:[s&&(0,t.jsx)("div",{children:s}),(0,t.jsxs)("div",{children:["This example is not a full implementation, validation and data fetching are not demonstrated. You will find a proper example (with the corresponding code) in the"," ",(0,t.jsx)(e.Link,{href:"/components/s3-resource-selector/?tabId=api#code-examples",children:"API documentation"}),"."]})]}))(h)
  ```

### Write mode

Playground id: `write-mode`

- `objectsIsItemDisabled`: `item => !item.IsFolder`
- `selectableItemsTypes`: `["buckets","objects"]`
- Note shown with example:

  ```jsx
  ((s="")=>(0,t.jsxs)(a.default,{statusIconAriaLabel:"Info",children:[s&&(0,t.jsx)("div",{children:s}),(0,t.jsxs)("div",{children:["This example is not a full implementation, validation and data fetching are not demonstrated. You will find a proper example (with the corresponding code) in the"," ",(0,t.jsx)(e.Link,{href:"/components/s3-resource-selector/?tabId=api#code-examples",children:"API documentation"}),"."]})]}))(h)
  ```

### Loading state

Playground id: `loading-state`

- `fetchVersions`: `() => new Promise(() => {})`
- `selectableItemsTypes`: `["buckets","versions"]`
- `resource`: `{uri:"s3://bucket-ut/archive-2020/electron-8h.zip"}`
- Note shown with example:

  ```jsx
  ((s="")=>(0,t.jsxs)(a.default,{statusIconAriaLabel:"Info",children:[s&&(0,t.jsx)("div",{children:s}),(0,t.jsxs)("div",{children:["This example is not a full implementation, validation and data fetching are not demonstrated. You will find a proper example (with the corresponding code) in the"," ",(0,t.jsx)(e.Link,{href:"/components/s3-resource-selector/?tabId=api#code-examples",children:"API documentation"}),"."]})]}))(h)
  ```

### Selected resource

Playground id: `selected-resource`

- `resource`:

  ```jsx
  {uri:"s3://bucket-ut/archive-2020/electron-8h.zip",versionId:"f2ef887e-af4c-4003-ad16-153d1419c024"}
  ```
- `viewHref`: `https://example.com/`
- `selectableItemsTypes`: `["buckets","objects","versions"]`
- Note shown with example:

  ```jsx
  ((s="")=>(0,t.jsxs)(a.default,{statusIconAriaLabel:"Info",children:[s&&(0,t.jsx)("div",{children:s}),(0,t.jsxs)("div",{children:["This example is not a full implementation, validation and data fetching are not demonstrated. You will find a proper example (with the corresponding code) in the"," ",(0,t.jsx)(e.Link,{href:"/components/s3-resource-selector/?tabId=api#code-examples",children:"API documentation"}),"."]})]}))(h)
  ```

### Server side alert state

Playground id: `server-side-alert-state`

- `resource`: `{uri:"s3://bucket-ut/rock"}`
- `selectableItemsTypes`: `["buckets","objects","versions"]`
- `alert`:

  ```jsx
  <SystemAlert header="Object versions were not retrieved">
      You might not have permissions to retrieve object versions. Contact your account administrator. 
      If no version ID is specified, the most recent version of the object is used.
  </SystemAlert>
  ```
- Note shown with example:

  ```jsx
  ((s="")=>(0,t.jsxs)(a.default,{statusIconAriaLabel:"Info",children:[s&&(0,t.jsx)("div",{children:s}),(0,t.jsxs)("div",{children:["This example is not a full implementation, validation and data fetching are not demonstrated. You will find a proper example (with the corresponding code) in the"," ",(0,t.jsx)(e.Link,{href:"/components/s3-resource-selector/?tabId=api#code-examples",children:"API documentation"}),"."]})]}))(h)
  ```

### Buckets are not selectable

Playground id: `buckets-are-not-selectable`

- `selectableItemsTypes`: `["objects","versions"]`
- Note shown with example:

  ```jsx
  ((s="")=>(0,t.jsxs)(a.default,{statusIconAriaLabel:"Info",children:[s&&(0,t.jsx)("div",{children:s}),(0,t.jsxs)("div",{children:["This example is not a full implementation, validation and data fetching are not demonstrated. You will find a proper example (with the corresponding code) in the"," ",(0,t.jsx)(e.Link,{href:"/components/s3-resource-selector/?tabId=api#code-examples",children:"API documentation"}),"."]})]}))(h)
  ```

### Folders are not selectable

Playground id: `folders-are-not-selectable`

- `resource`: `{uri:"s3://bucket-ut"}`
- `selectableItemsTypes`: `["buckets","objects","versions"]`
- `objectsIsItemDisabled`: `item => item.IsFolder`
- Note shown with example:

  ```jsx
  ((s="")=>(0,t.jsxs)(a.default,{statusIconAriaLabel:"Info",children:[s&&(0,t.jsx)("div",{children:s}),(0,t.jsxs)("div",{children:["This example is not a full implementation, validation and data fetching are not demonstrated. You will find a proper example (with the corresponding code) in the"," ",(0,t.jsx)(e.Link,{href:"/components/s3-resource-selector/?tabId=api#code-examples",children:"API documentation"}),"."]})]}))(h)
  ```

### Custom visible columns

Playground id: `custom-visible-columns`

- `bucketsVisibleColumns`: `["Name","Region"]`
- `selectableItemsTypes`: `["buckets","objects","versions"]`
- Note shown with example:

  ```jsx
  ((s="")=>(0,t.jsxs)(a.default,{statusIconAriaLabel:"Info",children:[s&&(0,t.jsx)("div",{children:s}),(0,t.jsxs)("div",{children:["This example is not a full implementation, validation and data fetching are not demonstrated. You will find a proper example (with the corresponding code) in the"," ",(0,t.jsx)(e.Link,{href:"/components/s3-resource-selector/?tabId=api#code-examples",children:"API documentation"}),"."]})]}))(h)
  ```
