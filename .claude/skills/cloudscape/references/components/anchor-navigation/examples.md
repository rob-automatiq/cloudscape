# anchor-navigation playground examples

Snapshot of the named examples on https://cloudscape.design/components/anchor-navigation/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1


### Setup 2

- Wrapper:

  ```jsx
  <div><Header variant="h3"><span id="navigation-header">On this page</span></Header><AnchorNavigation /></div>
  ```

### Setup 3

- Wrapper:

  ```jsx
  <ExpandableSection defaultExpanded variant="footer" headerText={<span id="navigation-header">On this page</span>}><AnchorNavigation /></ExpandableSection>
  ```

## Examples

### Default

Playground id: `default` · uses setup 1

- `anchors`:

  ```jsx
  [{text:"Section 1",href:"#playground",level:1},{text:"Section 2",href:"#section2",level:1},{text:"Section 3",href:"#section3",level:1},{text:"Section 4",href:"#section4",level:1}]
  ```

### With heading

Playground id: `with-heading` · uses setup 2

- `anchors`:

  ```jsx
  [{text:"Section 1",href:"#section1",level:1},{text:"Section 2",href:"#section2",level:1},{text:"Section 3",href:"#section3",level:1},{text:"Section 4",href:"#section4",level:1}]
  ```
- `ariaLabelledby`: `navigation-header`

### With nested anchors

Playground id: `with-nested-anchors` · uses setup 1

- `anchors`:

  ```jsx
  [{text:"Section 1",href:"#section1",level:1},{text:"Section 1.1",href:"#section11",level:2},{text:"Section 1.1.1",href:"#section111",level:3},{text:"Section 2",href:"#section2",level:1},{text:"Section 3",href:"#section3",level:1},{text:"Section 4",href:"#section4",level:1}]
  ```
- `activeHref`: `#section111`

### With content status label

Playground id: `with-content-status-label` · uses setup 1

- `anchors`:

  ```jsx
  [{text:"Section 1",href:"#section1",level:1},{text:"Section 2",href:"#section2",level:1},{text:"Section 3",href:"#section3",level:1,info:"Updated"},{text:"Section 4",href:"#section4",level:1,info:"New"}]
  ```

### With expandable section

Playground id: `with-expandable-section` · uses setup 3

- `anchors`:

  ```jsx
  [{text:"Section 1",href:"#section1",level:1},{text:"Section 2",href:"#section2",level:1},{text:"Section 3",href:"#section3",level:1},{text:"Section 4",href:"#section4",level:1}]
  ```
- `ariaLabelledby`: `navigation-header`
