# table playground examples

Snapshot of the named examples on https://cloudscape.design/components/table/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1


### Setup 2


### Setup 3

- Wrapper:

  ```jsx
  `
        <UseCollection
          items={${JSON.stringify([{id:"grp-product",parentId:null,kind:"account-group",name:"Product accounts",environment:"2 environments",type:"2 types",description:"Customer-facing workloads and product data"},{id:"acct-prod-core",parentId:"grp-product",kind:"account",name:"prod-core",environment:"prod",type:"product",description:"Core services (API, auth, shared infra)"},{id:"acct-prod-data",parentId:"grp-product",kind:"account",name:"prod-data",environment:"prod",type:"product",description:"Databases, backups, analytics pipelines"},{id:"acct-stage",parentId:"grp-product",kind:"account",name:"staging",environment:"stage",type:"product",description:"Release candidate validation environment"},{id:"grp-engineering",parentId:null,kind:"account-group",name:"Engineering",environment:"2 environments",type:"2 types",description:"Build, test, and developer tooling"},{id:"acct-dev-platform",parentId:"grp-engineering",kind:"account",name:"dev-platform",environment:"dev",type:"shared",description:"CI/CD, registries, dev tooling"},{id:"acct-qa",parentId:"grp-engineering",kind:"account",name:"qa",environment:"dev",type:"product",description:"Test automation and integration validation"},{id:"grp-shared",parentId:null,kind:"account-group",name:"Shared services",environment:"1 environment",type:"1 type",description:"Centralized identity, networking, logging, security"},{id:"acct-shared-network",parentId:"grp-shared",kind:"account",name:"shared-network",environment:"prod",type:"shared",description:"VPC hub, TGW, DNS, egress controls"},{id:"acct-shared-security",parentId:"grp-shared",kind:"account",name:"shared-security",environment:"prod",type:"shared",description:"Audit logging, SIEM ingest, guardrails"},{id:"grp-sandbox",parentId:null,kind:"account-group",name:"Sandbox",environment:"1 environment",type:"1 type",description:"Experiments and short-lived environments"},{id:"acct-sandbox-a",parentId:"grp-sandbox",kind:"account",name:"sandbox-a",environment:"sandbox",type:"experimental",description:"Team experiments / prototypes"},{id:"acct-sandbox-b",parentId:"grp-sandbox",kind:"account",name:"sandbox-b",environment:"sandbox",type:"experimental",description:"Load tests and cost exploration"}])}}
          selection={{}}
          sorting={{}}
          expandableRows={{ getId: (item) => item.id, getParentId: (item) => item.parentId, dataGrouping: {} }}
        >
          {({ items, collectionProps }) => {
            let total = collectionProps.expandableRows.totalItemsCount;
            let selected = collectionProps.expandableRows.totalSelectedItemsCount;
            let counter = selected ? \`(\${selected}/\${total})\` : \`(\${total})\`;
            return (
              <Table
                items={items}
                selectedItems={collectionProps.selectedItems}
                onSelectionChange={collectionProps.onSelectionChange}
                expandableRows={collectionProps.expandableRows}
                sortingColumn={collectionProps.sortingColumn}
                sortingDescending={collectionProps.sortingDescending}
                onSortingChange={collectionProps.onSortingChange}
                header={<Header counter={counter}>Accounts</Header>}
              />
            );
          }}
        </UseCollection>
        `
  ```

### Setup 4

- Wrapper:

  ```jsx
  `
        <Table
          items={${JSON.stringify([{id:"i-001",name:"web-server-1",type:"t3.medium",az:"us-east-1a",cpu:45,memory:62,netIn:1250,netOut:890,cost:30},{id:"i-002",name:"api-server-1",type:"t3.large",az:"us-east-1b",cpu:78,memory:81,netIn:3420,netOut:2890,cost:60},{id:"i-003",name:"db-server-1",type:"r5.xlarge",az:"us-east-1c",cpu:23,memory:45,netIn:890,netOut:450,cost:201},{id:"i-004",name:"cache-server",type:"r5.large",az:"us-east-1a",cpu:12,memory:88,netIn:560,netOut:320,cost:100},{id:"i-005",name:"worker-1",type:"c5.2xlarge",az:"us-east-1d",cpu:91,memory:72,netIn:4560,netOut:3210,cost:248}])}}
          header={<Header counter="(5)">Instances</Header>}
        />
        `
  ```

## Examples

### Embedded table

Playground id: `embedded-table` · uses setup 1

- `variant`: `embedded`

### Common table

Playground id: `common-table` · uses setup 2

- `header`:

  ```jsx
  <Header counter={selectedItems.length ? ('(' + selectedItems.length + '/10)') : '(10)'}>
    Table with common features
  </Header>
  ```
- `columnDefinitions`:

  ```jsx
  [
              {
                id: 'variable',
                header: 'Variable name',
                cell: item => <Link href="#">{item.name}</Link>,
                sortingField: 'name',
                isRowHeader: true,
              },
              {
                id: 'value',
                header: 'Text value',
                cell: item => item.alt,
                sortingField: 'alt',
              },
              {
                id: 'type',
                header: 'Type',
                cell: item => item.type,
              },
              {
                id: 'description',
                header: 'Description',
                cell: item => item.description,
              },
            ]
  ```
- `columnDisplay`:

  ```jsx
  [{id:"variable",visible:true},{id:"value",visible:true},{id:"type",visible:true},{id:"description",visible:true}]
  ```
- `selectedItems`: `[{name:"Item 2"}]`
- `pagination`:

  ```jsx
  <Pagination
      currentPageIndex={1}
      pagesCount={2}
    />
  ```
- `selectionType`: `multi`
- `trackBy`: `'name'`
- `preferences`:

  ```jsx
  
    <CollectionPreferences
      title="Preferences"
      confirmLabel="Confirm"
      cancelLabel="Cancel"
      preferences={{
        pageSize: 10,
        contentDisplay: [{
          id: 'variable',
          visible: true
        },
        {
          id: 'value',
          visible: true
        },
        {
          id: 'type',
          visible: true
        },
        {
          id: 'description',
          visible: true
        }]
      }}
      pageSizePreference={{
        title: "Page size",
        options: [
          { value: 10, label: "10 resources" },
          { value: 20, label: "20 resources" }
        ]
      }}
      wrapLinesPreference={{}}
      stripedRowsPreference={{}}
      contentDensityPreference={{}}
      contentDisplayPreference={{
        options: [
          {
            id: 'variable',
            label: 'Variable name',
            alwaysVisible: true
          },
          {
            id: 'value',
            label: 'Text value'
          },
          { id: 'type', label: 'Type' },
          {
            id: 'description',
            label: 'Description'
          }
        ]
      }}
      stickyColumnsPreference={{
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
      }}
    />
  
  ```
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Sticky columns

Playground id: `sticky-columns` · uses setup 2

- `header`: `<Header>Table with sticky columns</Header>`
- `columnDefinitions`:

  ```jsx
  [...P,{id:"description-2",header:"Description 2",cell:e=>e.description||"-",width:200},{id:"description-3",header:"Description 3",cell:e=>e.description||"-",width:200},{id:"description-4",header:"Description 4",cell:e=>e.description||"-",width:200},{id:"description-5",header:"Description 5",cell:e=>e.description||"-",width:200},{id:"description-6",header:"Description 6",cell:e=>e.description||"-",width:200},{id:"description-7",header:"Description 7",cell:e=>e.description||"-",width:200},{id:"description-8",header:"Description 8",cell:e=>e.description||"-",width:200},{id:"description-9",header:"Description 9",cell:e=>e.description||"-",width:200}]
  ```
- `selectedItems`: `[{name:"Item 2"}]`
- `stickyColumns`: `{first:1,last:0}`
- `selectionType`: `multi`
- `trackBy`: `'name'`
- `preferences`:

  ```jsx
  
    <CollectionPreferences
      title="Preferences"
      confirmLabel="Confirm"
      cancelLabel="Cancel"
      preferences={{
        pageSize: 10,
        contentDisplay: [{
          id: 'variable',
          visible: true
        },
        {
          id: 'value',
          visible: true
        },
        {
          id: 'type',
          visible: true
        },
        {
          id: 'description',
          visible: true
        }]
      }}
      pageSizePreference={{
        title: "Page size",
        options: [
          { value: 10, label: "10 resources" },
          { value: 20, label: "20 resources" }
        ]
      }}
      wrapLinesPreference={{}}
      stripedRowsPreference={{}}
      contentDensityPreference={{}}
      contentDisplayPreference={{
        options: [
          {
            id: 'variable',
            label: 'Variable name',
            alwaysVisible: true
          },
          {
            id: 'value',
            label: 'Text value'
          },
          { id: 'type', label: 'Type' },
          {
            id: 'description',
            label: 'Description'
          }
        ]
      }}
      stickyColumnsPreference={{
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
      }}
    />
  
  ```
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Resizable columns

Playground id: `resizable-columns` · uses setup 2

- `header`: `<Header>Table with resizable columns</Header>`
- `resizableColumns`: `true`
- `selectedItems`: `[{name:"Item 2"}]`
- `columnDefinitions`:

  ```jsx
  [{id:"variable",header:"Variable name",cell:e=>e.name,width:170,minWidth:165,sortingField:"name",isRowHeader:true},{id:"type",header:"Type",cell:e=>e.type,width:110,minWidth:110,sortingField:"type"},{id:"size",header:"Size",cell:e=>e.size,width:110,minWidth:90},{id:"description",header:"Description",cell:e=>e.description,width:200,minWidth:170}]
  ```
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Multi-column sort

Playground id: `multi-column-sort` · uses setup 2

- `header`: `<Header>Table with multi-column sort</Header>`
- `columnDefinitions`:

  ```jsx
  [
              {
                id: 'type',
                header: 'Type',
                cell: item => item.type,
                sortingField: 'type',
                isRowHeader: true,
              },
              {
                id: 'size',
                header: 'Size',
                cell: item => item.size,
                sortingField: 'size',
              },
              {
                id: 'variable',
                header: 'Variable name',
                cell: item => item.name,
                sortingField: 'name',
              },
              {
                id: 'description',
                header: 'Description',
                cell: item => item.description,
              },
            ]
  ```
- `items`:

  ```jsx
  [{name:"Item 1",alt:"First",description:"This is the first item",type:"1A",size:"Small"},{name:"Item 2",alt:"Second",description:"This is the second item",type:"1B",size:"Large"},{name:"Item 3",alt:"Third",description:"-",type:"1A",size:"Large"},{name:"Item 4",alt:"Fourth",description:"This is the fourth item",type:"2A",size:"Small"},{name:"Item 5",alt:"-",description:"This is the fifth item with a longer description",type:"2A",size:"Large"},{name:"Item 6",alt:"Sixth",description:"This is the sixth item",type:"1A",size:"Small"}]
  ```
- `multiColumnSort`:

  ```jsx
  {
              sortingColumns: [
                { sortingColumn: { sortingField: 'type' }, isDescending: false },
                { sortingColumn: { sortingField: 'size' }, isDescending: true },
              ],
              onChange: () => {},
            }
  ```
- `pagination`: `""` (empty string)
- `filter`: `""` (empty string)
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Formatted columns

Playground id: `formatted-columns` · uses setup 2

- `header`: `<Header>Table with formatted columns</Header>`
- `columnDefinitions`:

  ```jsx
  
          [
            {
              id: "variable",
              header: "Variable name",
              cell: item => item.name || "-",
              sortingField: 'name',
              isRowHeader: true,
            },
            {
              id: "type",
              header: "Text pushed right",
              cell: item => <Box float="right">{item.type || "-"}</Box>,
              sortingField: 'type',
            },
            {
              id: "description",
              header: "Description",
              cell: item => item.description || "-"
            }
          ]
  ```
- `items`:

  ```jsx
  [{name:"Item 1",alt:"First",description:"This is the first item",type:"1A",size:"Small"},{name:"Item 2",alt:"Second",description:"This is the second item",type:"1B",size:"Large"},{name:"Item 3",alt:"Third",description:"-",type:"1A",size:"Large"},{name:"Item 4",alt:"Fourth",description:"This is the fourth item",type:"2A",size:"Small"},{name:"Item 5",alt:"-",description:"This is the fifth item with a longer description",type:"2A",size:"Large"},{name:"Item 6",alt:"Sixth",description:"This is the sixth item",type:"1A",size:"Small"}]
  ```
- `selectedItems`: `[{name:"Item 2"}]`
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Empty state

Playground id: `empty-state` · uses setup 2

- `header`: `<Header>Table with no resources</Header>`
- `items`: `[]`
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### No match state

Playground id: `no-match-state` · uses setup 2

- `header`: `<Header>Table with no results</Header>`
- `filter`:

  ```jsx
  <TextFilter filteringPlaceholder="Find resources" filteringText="asdfjkl" countText="0 matches" />
  ```
- `empty`:

  ```jsx
  <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
    <SpaceBetween size="m">
      <b>No matches</b>
      <Button>Clear filter</Button>
    </SpaceBetween>
  </Box>
  ```
- `items`: `[]`
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Skeleton loading

Playground id: `skeleton-loading` · uses setup 2

- `header`: `<Header>Table loading with skeleton rows</Header>`
- `loading`: `true`
- `items`:

  ```jsx
  `loading ? [] : ${JSON.stringify(j)}`
  ```
- `skeleton`: `{ totalRows: 6 }`
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Skeleton loading with partial data

Playground id: `skeleton-loading-with-partial-data` · uses setup 2

- `header`: `<Header>Table with partial data and skeleton rows</Header>`
- `loading`: `true`
- `items`: `[j[0],j[1],j[2]]`
- `skeleton`: `{ totalRows: 10 }`
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Skeleton loading with column templates

Playground id: `skeleton-loading-with-column-templates` · uses setup 2

- `header`: `<Header>Table loading with column-shaped skeleton rows</Header>`
- `loading`: `true`
- `items`:

  ```jsx
  `loading ? [] : ${JSON.stringify(j)}`
  ```
- `columnDefinitions`:

  ```jsx
  [
          {
            id: 'name',
            header: 'Variable name',
            cell: item => <Link href="#">{item.name}</Link>,
            isRowHeader: true,
          },
          {
            id: 'description',
            header: 'Description',
            cell: item => (
              <SpaceBetween size="xxs">
                <Box>{item.description}</Box>
                <Box color="text-body-secondary" fontSize="body-s">
                  {item.type} · {item.size}
                </Box>
              </SpaceBetween>
            ),
          },
          {
            id: 'status',
            header: 'Status',
            cell: item => (
              <StatusIndicator type={item.size === 'Large' ? 'success' : 'in-progress'}>
                {item.size === 'Large' ? 'Available' : 'Pending'}
              </StatusIndicator>
            ),
          },
        ]
  ```
- `skeleton`:

  ```jsx
  {
          totalRows: 6,
          renderCell: column => {
            switch (column.id) {
              case 'description':
                return (
                  <SpaceBetween size="xxs">
                    <Skeleton variant="text-body-m" width="90%" />
                    <Skeleton variant="text-body-s" width="60%" />
                  </SpaceBetween>
                );
              case 'status':
                return <Skeleton variant="text-body-m" width="80px" />;
              default:
                return undefined;
            }
          },
        }
  ```
- `sortingDisabled`: `true`
- `pagination`: `""` (empty string)
- `filter`: `""` (empty string)
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Loading state

Playground id: `loading-state` · uses setup 2

- `header`: `<Header>Table that is loading</Header>`
- `loading`: `true`
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Disabled selection

Playground id: `disabled-selection` · uses setup 2

- `header`:

  ```jsx
  <Header counter={selectedItems.length ? ('(' + selectedItems.length + '/)') : '()'}>
    Table with disabled rows
  </Header>
  ```
- `items`:

  ```jsx
  [{name:"Item 1",alt:"First",description:"This is the first item",type:"1A"},{name:"Item 2",alt:"Second",description:"This is the second item and it is disabled",type:"1B"},{name:"Item 3",alt:"Third",description:"-",type:"1A"},{name:"Item 4",alt:"Fourth",description:"This is the fourth item",type:"2A"},{name:"Item 5",alt:"-",description:"This is the fifth item",type:"2A"},{name:"Item 6",alt:"Sixth",description:"This is the sixth item and it is disabled",type:"1A"}]
  ```
- `isItemDisabled`: `item => item.alt === 'Second' || item.alt === 'Sixth'`
- `selectedItems`: `[]`
- `selectionType`: `single`
- `trackBy`: `'name'`
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### Simple

Playground id: `simple` · uses setup 1


### With action buttons

Playground id: `with-action-buttons` · uses setup 2

- `header`:

  ```jsx
  <Header
      counter={
        selectedItems.length
          ? "(" + selectedItems.length + "/10)"
          : "(10)"
      }
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <ButtonDropdown
            items={[
              {
                text: "Deactivate",
                id: "rm",
                disabled: false
              },
              {
                text: "Activate",
                id: "mv",
                disabled: false
              },
              {
                text: "Status 3",
                id: "rn",
                disabled: false
              },
              {
                text: "View details",
                id: "rm",
                disabled: false
              },
              {
                text: "Edit",
                id: "mv",
                disabled: false
              },
              {
                text: "Delete",
                id: "rn",
                disabled: false
              }
            ]}
          >
            Actions
          </ButtonDropdown>
          <Button>Secondary button</Button>
          <Button variant="primary">Create resource</Button>
        </SpaceBetween>
      }
    >
      Table with action buttons
    </Header>
  ```
- `columnDefinitions`:

  ```jsx
  [{id:"variable",header:"Variable name",cell:e=>e.name,sortingField:"name",isRowHeader:true},{id:"value",header:"Text value",cell:e=>e.alt,sortingField:"alt"},{id:"type",header:"Type",cell:e=>e.type},{id:"description",header:"Description",cell:e=>e.description}]
  ```
- `columnDisplay`:

  ```jsx
  [{id:"variable",visible:true},{id:"value",visible:true},{id:"type",visible:true},{id:"description",visible:true}]
  ```
- `selectedItems`: `[{name:"Item 2"}]`
- `pagination`:

  ```jsx
  <Pagination
      currentPageIndex={1}
      pagesCount={2}
    />
  ```
- `selectionType`: `multi`
- `trackBy`: `'name'`
- `preferences`:

  ```jsx
  
    <CollectionPreferences
      title="Preferences"
      confirmLabel="Confirm"
      cancelLabel="Cancel"
      preferences={{
        pageSize: 10,
        contentDisplay: [{
          id: 'variable',
          visible: true
        },
        {
          id: 'value',
          visible: true
        },
        {
          id: 'type',
          visible: true
        },
        {
          id: 'description',
          visible: true
        }]
      }}
      pageSizePreference={{
        title: "Page size",
        options: [
          { value: 10, label: "10 resources" },
          { value: 20, label: "20 resources" }
        ]
      }}
      wrapLinesPreference={{}}
      stripedRowsPreference={{}}
      contentDensityPreference={{}}
      contentDisplayPreference={{
        options: [
          {
            id: 'variable',
            label: 'Variable name',
            alwaysVisible: true
          },
          {
            id: 'value',
            label: 'Text value'
          },
          { id: 'type', label: 'Type' },
          {
            id: 'description',
            label: 'Description'
          }
        ]
      }}
      stickyColumnsPreference={{
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
      }}
    />
  
  ```
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### With footer

Playground id: `with-footer` · uses setup 2

- `header`: `<Header counter="(100)">Table with footer</Header>`
- `footer`: `<Box textAlign="center"><Link href="#">View all</Link></Box>`
- `pagination`: `""` (empty string)
- `filter`: `""` (empty string)
- `columnDefinitions`: `P.map(e=>({id:e.id,header:e.header,cell:e.cell,isRowHeader:e.isRowHeader}))`
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### With inline editing

Playground id: `with-inline-editing` · uses setup 2

- `header`: `<Header>Table with inline editing</Header>`
- `pagination`: `""` (empty string)
- `filter`: `""` (empty string)
- `columnDefinitions`:

  ```jsx
  
            [
              {
                id: 'variable',
                header: 'Variable name',
                minWidth: 176,
                cell: item => {
                  return item.name;
                },
                isRowHeader: true,
                editConfig: {
                  ariaLabel: 'Name',
                  editIconAriaLabel: 'editable',
                  errorIconAriaLabel: 'Name Error',
                  editingCell: (item, { currentValue, setValue }) => {
                    return (
                      <Input autoFocus={true} value={currentValue ?? item.name} onChange={event => setValue(event.detail.value)} />
                    );
                  },
                  disabledReason: item => {
                    if (item.type === '1A') {
                      return 'You cannot change the name of Type 1A variables.';
                    }
                    return undefined;
                  }
                },
              },
              {
                id: 'type',
                header: 'Type',
                minWidth: 176,
                editConfig: {
                  ariaLabel: 'Type',
                  editIconAriaLabel: 'editable',
                  editingCell: (item, { currentValue, setValue }) => {
                    const value = currentValue ?? item.type;
  
                    return (
                      <Select
                        autoFocus={true}
                        expandToViewport={true}
                        selectedOption={
                          [
                            { label: '1A', value: '1A' },
                            { label: '1B', value: '1B' },
                            { label: '2A', value: '2A' },
                            { label: '2B', value: '2B' },
                          ].find(option => option.value === value) ?? null
                        }
                        onChange={event => {
                          setValue(event.detail.selectedOption.value ?? item.type);
                        }}
                        options={[
                          { label: '1A', value: '1A' },
                          { label: '1B', value: '1B' },
                          { label: '2A', value: '2A' },
                          { label: '2B', value: '2B' },
                        ]}
                      />
                    );
  
                  },
                },
                cell: item => {
                  return item.type;
                },
              },
              {
                id: 'description',
                header: 'Description',
                cell: e => e.description,
              },
            ]
            
  ```
- `items`:

  ```jsx
  [{name:"Item 1",alt:"First",description:"This is the first item",type:"1A",size:"Small"},{name:"Item 2",alt:"Second",description:"This is the second item",type:"1B",size:"Large"},{name:"Item 3",alt:"Third",description:"-",type:"1A",size:"Large"},{name:"Item 4",alt:"Fourth",description:"This is the fourth item",type:"2A",size:"Small"},{name:"Item 5",alt:"-",description:"This is the fifth item with a longer description",type:"2A",size:"Large"},{name:"Item 6",alt:"Sixth",description:"This is the sixth item",type:"1A",size:"Small"}]
  ```
- `submitEdit`: `async()=>{await new Promise(e=>setTimeout(e,1e3))}`
- `onEditCancel`: `()=>{}`
- `ariaLabels`:

  ```jsx
  {
    activateEditLabel: (column, item) => `Edit ${item.name} ${column.header}`,
    cancelEditLabel: column => `Cancel editing ${column.header}`,
    submitEditLabel: column => `Submit editing ${column.header}`,
    tableLabel: 'Table with inline editing',
  }
  ```
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### With in-context actions

Playground id: `with-in-context-actions` · uses setup 2

- `header`:

  ```jsx
  <Header
      counter={
        selectedItems.length
          ? "(" + selectedItems.length + "/10)"
          : "(10)"
      }
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <ButtonDropdown
            items={[
              {
                text: "Deactivate",
                id: "rm",
                disabled: false
              },
              {
                text: "Activate",
                id: "mv",
                disabled: false
              },
              {
                text: "Status 3",
                id: "rn",
                disabled: false
              },
              {
                text: "View details",
                id: "rm",
                disabled: false
              },
              {
                text: "Edit",
                id: "mv",
                disabled: false
              },
              {
                text: "Delete",
                id: "rn",
                disabled: false
              }
            ]}
          >
            Actions
          </ButtonDropdown>
          <Button>Secondary button</Button>
          <Button variant="primary">Create resource</Button>
        </SpaceBetween>
      }
    >
      Table with in-context actions
    </Header>
  ```
- `columnDefinitions`:

  ```jsx
  [
              {
                id: 'variable',
                header: 'Variable name',
                cell: item => item.name,
                sortingField: 'name',
                isRowHeader: true,
              },
              {
                id: 'value',
                header: 'Text value',
                cell: item => item.alt,
                sortingField: 'alt',
              },
              {
                id: 'type',
                header: 'Type',
                cell: item => item.type,
              },
              {
                id: 'description',
                header: 'Description',
                cell: item => item.description,
              },
              {
                id: 'actions',
                header: 'Actions',
                cell: item => (
                  <Button variant="inline-link" ariaLabel={`Download ${item.name}`}>
                    Download
                  </Button>
                ),
                minWidth: 170,
              },
            ]
  ```
- `columnDisplay`: `[...L,{id:"actions",visible:true}]`
- `selectedItems`: `[{name:"Item 2"}]`
- `stickyColumns`: `{first:0,last:1}`
- `pagination`:

  ```jsx
  <Pagination
      currentPageIndex={1}
      pagesCount={2}
    />
  ```
- `selectionType`: `multi`
- `trackBy`: `'name'`
- `preferences`:

  ```jsx
  
    <CollectionPreferences
      title="Preferences"
      confirmLabel="Confirm"
      cancelLabel="Cancel"
      preferences={{
        pageSize: 10,
        contentDisplay: [{
          id: 'variable',
          visible: true
        },
        {
          id: 'value',
          visible: true
        },
        {
          id: 'type',
          visible: true
        },
        {
          id: 'description',
          visible: true
        }]
      }}
      pageSizePreference={{
        title: "Page size",
        options: [
          { value: 10, label: "10 resources" },
          { value: 20, label: "20 resources" }
        ]
      }}
      wrapLinesPreference={{}}
      stripedRowsPreference={{}}
      contentDensityPreference={{}}
      contentDisplayPreference={{
        options: [
          {
            id: 'variable',
            label: 'Variable name',
            alwaysVisible: true
          },
          {
            id: 'value',
            label: 'Text value'
          },
          { id: 'type', label: 'Type' },
          {
            id: 'description',
            label: 'Description'
          }
        ]
      }}
      stickyColumnsPreference={{
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
      }}
    />
  
  ```
- Note shown with example:

  ```jsx
  {onSelectionChange:{value:"({ detail }) => setSelectedItems(detail.selectedItems)",type:r.default.Function},selectedItems:{type:"array",defaultValue:"[]",stateful:true},expandedItems:{type:"array",defaultValue:"[]",stateful:true,internal:true},request:{type:"array",defaultValue:"[]",stateful:true,internal:true},items:{type:"array",defaultValue:"[]",stateful:true}}
  ```

### With expandable rows - nested

Playground id: `with-expandable-rows---nested` · uses setup 1

- `columnDefinitions`:

  ```jsx
  [
    {
      id: 'id',
      header: 'ID',
      cell: item => item.id,
    },
    {
      id: 'name',
      header: 'Name',
      cell: item => item.name,
      sortingField: 'name',
      isRowHeader: true,
    },
    {
      id: 'kind',
      header: 'Kind',
      cell: item => item.kind,
      sortingField: 'kind',
    },
    {
      id: 'status',
      header: 'Status',
      cell: item => (
        <StatusIndicator type={{healthy: 'success', degraded: 'error', creating: 'pending', error: 'error'}[item.status]}>
          {item.status[0].toUpperCase() + item.status.slice(1)}
        </StatusIndicator>
      ),
      sortingField: 'status',
    },
    {
      id: 'size',
      header: 'Size',
      cell: item => item.size,
      sortingField: 'size',
    },
    {
      id: 'type',
      header: 'Type',
      cell: item => item.type,
      sortingField: 'type',
    },
    {
      id: 'description',
      header: 'Description',
      cell: item => item.description,
    },
  ]
  ```
- `enableKeyboardNavigation`: `true`
- `header`:

  ```jsx
  <Header counter={`(${selectedItems.length ? '1/24' : '24'})`}>Replicas</Header>
  ```
- `items`:

  ```jsx
  [{id:"region-eu-central-1",name:"eu-central-1",kind:"region",description:"Frankfurt region (primary)",status:"degraded",type:"2 types",size:"3 sizes",children:[{id:"svc-euc1-rds",name:"Amazon RDS",kind:"service",description:"PostgreSQL clusters",status:"degraded",type:"1 type",size:"1 size",children:[{id:"replica-euc1-orders-writer",name:"orders-db (writer)",kind:"replica",status:"healthy",type:"db.r6g.large",size:"120 GiB",description:"Primary writer instance"},{id:"replica-euc1-orders-reader-1",name:"orders-db (reader-1)",kind:"replica",status:"degraded",type:"db.r6g.large",size:"120 GiB",description:"Read replica, lag ~8s"}]},{id:"svc-euc1-s3",name:"Amazon S3",kind:"service",description:"Buckets",status:"creating",type:"2 types",size:"2 sizes",children:[{id:"replica-euc1-bkt-logs",name:"access-logs",kind:"replica",status:"healthy",type:"Standard",size:"2.3 TiB",description:"Centralized log bucket"},{id:"replica-euc1-bkt-backups",name:"db-backups",kind:"replica",status:"creating",type:"Standard-IA",size:"—",description:"Initial replication in progress"}]}]},{id:"region-eu-west-1",name:"eu-west-1",kind:"region",description:"Ireland region (DR / failover)",status:"healthy",type:"2 types",size:"2 sizes",children:[{id:"svc-euw1-rds",name:"Amazon RDS",kind:"service",description:"Standby replicas",status:"healthy",type:"1 type",size:"1 size",children:[{id:"replica-euw1-orders-standby",name:"orders-db (standby)",kind:"replica",status:"healthy",type:"db.r6g.large",size:"120 GiB",description:"Warm standby for DR"}]},{id:"svc-euw1-cloudfront",name:"Amazon CloudFront",kind:"service",description:"Distribution configs",status:"healthy",type:"1 type",size:"1 size",children:[{id:"replica-euw1-cf-dist-main",name:"web-app-distribution",kind:"replica",status:"healthy",type:"PriceClass_100",size:"—",description:"Primary CDN distribution"}]}]},{id:"region-us-east-1",name:"us-east-1",kind:"region",description:"N. Virginia region (shared tooling)",status:"degraded",type:"2 types",size:"2 sizes",children:[{id:"svc-use1-ecr",name:"Amazon ECR",kind:"service",description:"Container images",status:"healthy",type:"1 type",size:"1 size",children:[{id:"replica-use1-ecr-api",name:"api-service",kind:"replica",status:"healthy",type:"private-repo",size:"14 images",description:"Main API image repository"}]},{id:"svc-use1-sqs",name:"Amazon SQS",kind:"service",description:"Queues",status:"degraded",type:"1 type",size:"1 size",children:[{id:"replica-use1-sqs-payments",name:"payments-events",kind:"replica",status:"degraded",type:"standard",size:"≈ 2.1k msgs",description:"Backlog due to consumer throttling"}]}]},{id:"region-ap-southeast-1",name:"ap-southeast-1",kind:"region",description:"Singapore region (APAC edge)",status:"creating",type:"0 types",size:"0 sizes",children:[]},{id:"region-sa-east-1",name:"sa-east-1",kind:"region",description:"São Paulo region (pilot)",status:"healthy",type:"0 types",size:"0 sizes",children:[]}]
  ```
- `selectionType`: `single`
- `pagination`: `""` (empty string)
- `trackBy`: `'id'`
- `expandableRows`:

  ```jsx
  {
          getItemChildren: (item) => request?.includes(`${item.id}:finished`) ? (item.children ?? []) : [],
          isItemExpandable: (item) => Boolean(item.children),
          expandedItems: expandedItems,
          onExpandableItemToggle: ({ detail }) => setExpandedItems(prev => {
            const next = new Set(prev.map(item => item.id));
            detail.expanded ? (next.add(detail.item.id)) : (next.delete(detail.item.id));
            return [...next].map(id => ({ id }));
          }),
        }
  ```
- `getLoadingStatus`:

  ```jsx
  (item) => {
          const id = item?.id ?? "Root";
          if (request?.includes(`${id}:error`)) {
            return "error";
          }
          if (request?.includes(`${id}:finished`)) {
            return "finished";
          }
          if (request?.includes(`${id}:loading`)) {
            return "loading";
          }
          return id === "Root" ? "pending" : "loading";
        }
  ```
- `renderLoaderPending`:

  ```jsx
  () => {
          const onLoad = () => setRequest(prev => [...prev, "Root:loading"]);
          return <Button variant="inline-link" iconName="add-plus" onClick={onLoad}>Load more</Button>;
        }
  ```
- `renderLoaderLoading`:

  ```jsx
  ({ item }) => {
          setTimeout(() => {
            if (!item) {
              setRequest(prev => [...prev, "Root:error"]);
            } else {
              setRequest(prev => [...prev, `${item.id}:finished`]);
            }
          }, 1000);
          return <StatusIndicator type="loading">Loading items</StatusIndicator>
        }
  ```
- `renderLoaderError`: `() => <StatusIndicator type="error">Loading error</StatusIndicator>`
- `renderLoaderEmpty`: `() => <Box color="text-body-secondary">No replicas found</Box>`
- `ariaLabels`: `{selectionGroupLabel:"items selection",itemSelectionLabel:(e,t)=>t.name}`
- `renderAriaLive`:

  ```jsx
  ({firstIndex:e,lastIndex:t,totalItemsCount:i,visibleItemsCount:n})=>`Displaying items ${e} to ${t} of ${i}, ${n} visible`
  ```
- Note shown with example:

  ```jsx
  (0,s.jsxs)(d.default,{children:["Some table features (such as filtering and sorting) are disabled in this playground example. For a more complete integration, see the ",(0,s.jsx)(o.Link,{href:"/examples/react/table-expandable.html",children:"expandable rows demo"}),"."]})
  ```

### With expandable rows - grouped

Playground id: `with-expandable-rows---grouped` · uses setup 3

- `columnDefinitions`:

  ```jsx
  [{id:"ID",header:"ID",cell:e=>e.id,isRowHeader:true,counter:({item:e,itemsCount:t,selectedItemsCount:i})=>!e.parentId&&t&&i?`(${i}/${t})`:!e.parentId&&t?`(${t})`:null},{id:"name",header:"Name",cell:e=>e.name,sortingField:"name"},{id:"environment",header:"Environment",cell:e=>e.environment,sortingField:"environment"},{id:"type",header:"Type",cell:e=>e.type,sortingField:"type"},{id:"description",header:"Description",cell:e=>e.description}]
  ```
- `enableKeyboardNavigation`: `true`
- `ariaLabels`:

  ```jsx
  {selectionGroupLabel:"items selection",itemSelectionLabel:({itemsCount:e,selectedItemsCount:t},i)=>`${i.name}, ${t} of ${e} selected`,allItemsSelectionLabel:({itemsCount:e,selectedItemsCount:t})=>`select all, ${t} of ${e} selected`}
  ```
- `renderAriaLive`:

  ```jsx
  ({firstIndex:e,lastIndex:t,totalItemsCount:i,visibleItemsCount:n})=>`Displaying items ${e} to ${t} of ${i}, ${n} visible`
  ```
- Note shown with example:

  ```jsx
  (0,s.jsxs)(d.default,{children:["This example uses ",(0,s.jsx)(o.Link,{href:"/get-started/dev-guides/collection-hooks/",children:"collection hooks"})," to manage React state and compute effective selection. Due to playground constraints, the hooks are accessed through a render-prop wrapper around the ",(0,s.jsx)(x.Box,{variant:"awsui-inline-code",children:"useCollection"})," utility."]})
  ```

### With column groups

Playground id: `with-column-groups` · uses setup 4

- `columnDefinitions`:

  ```jsx
  [{id:"id",header:"Instance ID",cell:e=>e.id,isRowHeader:true},{id:"name",header:"Name",cell:e=>e.name},{id:"type",header:"Type",cell:e=>e.type},{id:"az",header:"AZ",cell:e=>e.az},{id:"cpu",header:"CPU (%)",cell:e=>`${e.cpu}%`},{id:"memory",header:"Memory (%)",cell:e=>`${e.memory}%`},{id:"netIn",header:"Network in",cell:e=>e.netIn.toLocaleString()},{id:"netOut",header:"Network out",cell:e=>e.netOut.toLocaleString()},{id:"cost",header:"Cost ($)",cell:e=>`$${e.cost}`}]
  ```
- `groupDefinitions`:

  ```jsx
  [{id:"config",header:"Configuration"},{id:"performance",header:"Performance"},{id:"network",header:"Network"}]
  ```
- `columnDisplay`:

  ```jsx
  [{id:"id",visible:true},{id:"name",visible:true},{type:"group",id:"config",visible:true,children:[{id:"type",visible:true},{id:"az",visible:true}]},{type:"group",id:"performance",visible:true,children:[{id:"cpu",visible:true},{id:"memory",visible:true}]},{type:"group",id:"network",visible:true,children:[{id:"netIn",visible:true},{id:"netOut",visible:true}]},{id:"cost",visible:true}]
  ```
- `selectionType`: `multi`
- `trackBy`: `'id'`
- `enableKeyboardNavigation`: `true`
- `resizableColumns`: `true`
- `ariaLabels`:

  ```jsx
  {selectionGroupLabel:"Instance selection",itemSelectionLabel:(e,t)=>`Select ${t.name}`,allItemsSelectionLabel:({selectedItems:e})=>`${e.length} instances selected`}
  ```
- Note shown with example:

  ```jsx
  (0,s.jsxs)(d.default,{children:["Some table features (such as filtering and sorting) are disabled in this playground example. For a more complete integration, see the ",(0,s.jsx)(o.Link,{href:"/examples/react/split-panel-multiple.html",children:"usage demo"}),"."]})
  ```
