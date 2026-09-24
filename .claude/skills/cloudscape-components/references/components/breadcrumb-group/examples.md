# breadcrumb-group playground examples

Snapshot of the named examples on https://cloudscape.design/components/breadcrumb-group/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `ariaLabel`: `Breadcrumbs`
- `items`:

  ```jsx
  [{text:"System",href:"#"},{text:"Components",href:"#components"},{text:"Breadcrumb group",href:"#components/breadcrumb-group"}]
  ```

### Short example

Playground id: `short-example`

- `ariaLabel`: `Breadcrumbs`
- `items`: `[{text:"System",href:"#"},{text:"Components",href:"#components"}]`

### Long example

Playground id: `long-example`

- `ariaLabel`: `Breadcrumbs`
- `items`:

  ```jsx
  [{text:"Service name",href:"#"},{text:"Sub-service",href:"#sub-service"},{text:"Main category with a long name",href:"#main-category"},{text:"Secondary category with a long name",href:"#secondary-category"},{text:"Resource type",href:"#resource-type"},{text:"Resource sub-type",href:"#resource-sub-type"},{text:"resource-name-7880-l09mdsdnebh-1894398823",href:"#resource-name-7880-l09mdsdnebh-1894398823"}]
  ```
