# panel-layout playground examples

Snapshot of the named examples on https://cloudscape.design/components/panel-layout/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper: `<div style={{height: '300px'}}><PanelLayout/></div>`

## Examples

### Default resizable

Playground id: `default-resizable`

- `mainContent`:

  ```jsx
  `<>
          <Header variant="h3">Main content</Header>
          <p>${t}</p>
          <p>${t}</p>
          <p>${t}</p>
        </>`
  ```
- `panelContent`:

  ```jsx
  `<>
          <Header variant="h3">Panel content</Header>
          <p>${t}</p>
          <p>${t}</p>
        </>`
  ```
- `mainFocusable`: `{ariaLabel: "Main content"}`
- `panelFocusable`: `{ariaLabel: "Panel content"}`
- `resizable`: `true`
- `panelPosition`: `side-end`
- `minPanelSize`: `100`
- `defaultPanelSize`: `200`
- `maxPanelSize`: `700`

### Custom styled

Playground id: `custom-styled`

- `mainContent`:

  ```jsx
  <>
          <Header variant="h3">Widget configuration</Header>
          <Cards items={[
            { header: 'Line', description: 'Compare metrics over time' },
            { header: 'Data table', description: 'Compare metrics over time in a table' },
            { header: 'Number', description: 'See the latest value for a metric' },
            { header: 'Gauge', description: 'See the latest value for a metric within a range' },
            { header: 'Stacked area', description: 'Compare the total over time' },
            { header: 'Bar', description: 'Compare categories of data' }
          ]} cardDefinition={{
            header: item => <Link href="#" fontSize="heading-m">{item.header}</Link>,
            sections: [
              {
                id: 'description',
                header: 'Description',
                content: item => item.description,
              }
            ]
          }}/>
        </>
  ```
- `panelContent`:

  ```jsx
  <>
          <Header variant="h3">Select source</Header>
          <FormField label="Data source type">
            <RadioGroup value="S3" items={[
              { value: 'S3', label: 'S3' },
              { value: 'RDS', label: 'RDS' },
              { value: 'Aurora', label: 'Aurora' },
            ]} />
          </FormField>
        </>
  ```
- `mainFocusable`: `""` (empty string)
- `panelFocusable`: `""` (empty string)
