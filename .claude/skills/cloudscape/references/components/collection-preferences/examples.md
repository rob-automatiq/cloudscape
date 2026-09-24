# collection-preferences playground examples

Snapshot of the named examples on https://cloudscape.design/components/collection-preferences/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Table preferences

Playground id: `table-preferences`

- `preferences`:

  ```jsx
  {
    pageSize: 10,
    ${"table"===e?"wrapLines: true,\n  stickyColumns: {first: 1, last: 0}":"visibleContent: ['id', 'domainName', 'deliveryMethod']"}
  }
  ```
- `pageSizePreference`:

  ```jsx
  {
    options: [
      { value: 10, label: '10 resources' },
      { value: 20, label: '20 resources' }
    ]
  }
  ```
- `contentDensityPreference`: `{}`
- `wrapLinesPreference`: `{}`
- `stripedRowsPreference`: `{}`
- `contentDisplayPreference`:

  ```jsx
  {
    options: [
      {
        id: 'id',
        label: 'Distribution ID',
        alwaysVisible: true
      },
      { id: 'domainName', label: 'Domain name' },
      {
        id: 'deliveryMethod',
        label: 'Delivery method'
      },
      {
        id: 'priceClass',
        label: 'Price class'
      },
      {
        id: 'sslCertificate',
        label: 'SSL certificate'
      },
      {
        id: 'origin', label: 'Origin'
      }
    ]
  }
  ```
- `stickyColumnsPreference`:

  ```jsx
  {
    firstColumns: {
      title: 'Stick first column(s)',
      description: 'Keep the first column(s) visible while horizontally scrolling the table content.',
      options: [
        { label: 'None', value: 0 },
        { label: 'First column', value: 1 },
        { label: 'First two columns', value: 2 },
      ],
    },
    lastColumns: {
      title: 'Stick last column',
      description: 'Keep the last column visible while horizontally scrolling the table content.',
      options: [
        { label: 'None', value: 0 },
        { label: 'Last column', value: 1 },
      ],
    },
  }
  ```

### Cards preferences

Playground id: `cards-preferences`

- `preferences`:

  ```jsx
  {
    pageSize: 10,
    ${"table"===e?"wrapLines: true,\n  stickyColumns: {first: 1, last: 0}":"visibleContent: ['id', 'domainName', 'deliveryMethod']"}
  }
  ```
- `pageSizePreference`:

  ```jsx
  {
    options: [
      { value: 10, label: '10 resources' },
      { value: 20, label: '20 resources' }
    ]
  }
  ```
- `visibleContentPreference`:

  ```jsx
  {
    title: 'Select visible content',
    options: [
      {
        label: 'Main distribution properties',
        options: [
          { id: 'id', label: 'Distribution ID', editable: false },
          { id: 'domainName', label: 'Domain name' },
          { id: 'deliveryMethod', label: 'Delivery method' }
        ]
      },
      {
        label: 'Secondary distribution properties',
        options: [
          { id: 'priceClass', label: 'Price class' },
          { id: 'sslCertificate', label: 'SSL certificate' },
          { id: 'origin', label: 'Origin' }
        ]
      }
    ]
  }
  ```
- `customPreference`:

  ```jsx
  () => (
    <FormField label="View as">
      <RadioGroup
        value="cards"
        items={[
          { value: 'table', label: 'Table' },
          { value: 'cards', label: 'Cards' },
        ]}
      />
    </FormField>
  )
  ```
