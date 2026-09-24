# cards playground examples

Snapshot of the named examples on https://cloudscape.design/components/cards/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Full page cards

Playground id: `full-page-cards`

- `header`: `<Header variant="awsui-h1-sticky">Cards with dark header</Header>`
- `variant`: `full-page`
- `stickyHeader`: `true`
- `filter`: `<TextFilter filteringPlaceholder="Find resources" />`
- `pagination`: `<Pagination currentPageIndex={1} pagesCount={2} />`
- Note shown with example: `e.i(271645)`

### Common cards

Playground id: `common-cards`

- `header`:

  ```jsx
  <Header counter={selectedItems?.length ? ('(' + selectedItems.length + '/10)') : '(10)'}>
      Common cards with selection
    </Header>
  ```
- `filter`: `<TextFilter filteringPlaceholder="Find resources" />`
- `pagination`: `<Pagination currentPageIndex={1} pagesCount={2} />`
- `visibleSections`: `["description","type","size"]`
- `selectedItems`: `[{name:"Item 2"}]`
- `trackBy`: `"name"`
- `selectionType`: `multi`
- `preferences`:

  ```jsx
  
    <CollectionPreferences
      title="Preferences"
      confirmLabel="Confirm"
      cancelLabel="Cancel"
      preferences={{pageSize: 6, visibleContent: ["description", "type", "size"]}}
      pageSizePreference={{
        title: "Page size",
        options: [
          { value: 6, label: "6 resources" },
          { value: 12, label: "12 resources" }
        ]
      }}
      visibleContentPreference={{
        title: "Select visible content",
        options: [
          {
            label: "Main distribution properties",
            options: [
              { id: "description", label: "Description" },
              { id: "type", label: "Type" },
              { id: "size", label: "Size" }
            ]
          }
        ]
      }}
    />
  
  ```
- Note shown with example: `e.i(271645)`

### Cards with global actions

Playground id: `cards-with-global-actions`

- `header`:

  ```jsx
  ((e,t=h.items.length)=>`<Header
      counter={
        selectedItems?.length
          ? "(" + selectedItems?.length + "/${t})"
          : "(${t})"
      }
      actions={
        <SpaceBetween
          direction="horizontal"
          size="xs"
        >
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
          <Button variant="primary">
            Create resource
          </Button>
        </SpaceBetween>
      }
    >
      ${e}
    </Header>`)("Cards with global actions",10)
  ```
- `filter`: `<TextFilter filteringPlaceholder="Find resources" />`
- `pagination`: `<Pagination currentPageIndex={1} pagesCount={2} />`
- `visibleSections`: `["description","type","size"]`
- `selectedItems`: `[{name:"Item 2"}]`
- `trackBy`: `"name"`
- `selectionType`: `multi`
- `preferences`:

  ```jsx
  
    <CollectionPreferences
      title="Preferences"
      confirmLabel="Confirm"
      cancelLabel="Cancel"
      preferences={{pageSize: 6, visibleContent: ["description", "type", "size"]}}
      pageSizePreference={{
        title: "Page size",
        options: [
          { value: 6, label: "6 resources" },
          { value: 12, label: "12 resources" }
        ]
      }}
      visibleContentPreference={{
        title: "Select visible content",
        options: [
          {
            label: "Main distribution properties",
            options: [
              { id: "description", label: "Description" },
              { id: "type", label: "Type" },
              { id: "size", label: "Size" }
            ]
          }
        ]
      }}
    />
  
  ```
- Note shown with example: `e.i(271645)`

### Cards with in context actions

Playground id: `cards-with-in-context-actions`

- `header`:

  ```jsx
  <Header counter={selectedItems?.length ? ('(' + selectedItems.length + '/10)') : '(10)'}>
      Cards with actions
    </Header>
  ```
- `filter`: `<TextFilter filteringPlaceholder="Find resources" />`
- `pagination`: `<Pagination currentPageIndex={1} pagesCount={2} />`
- `visibleSections`: `["image","description","type","size"]`
- `selectedItems`: `[{name:"Item 2"}]`
- `trackBy`: `"name"`
- `selectionType`: `multi`
- `preferences`:

  ```jsx
  
    <CollectionPreferences
      title="Preferences"
      confirmLabel="Confirm"
      cancelLabel="Cancel"
      preferences={{pageSize: 6, visibleContent: ["description", "type", "size"]}}
      pageSizePreference={{
        title: "Page size",
        options: [
          { value: 6, label: "6 resources" },
          { value: 12, label: "12 resources" }
        ]
      }}
      visibleContentPreference={{
        title: "Select visible content",
        options: [
          {
            label: "Main distribution properties",
            options: [
              { id: "description", label: "Description" },
              { id: "type", label: "Type" },
              { id: "size", label: "Size" }
            ]
          }
        ]
      }}
    />
  
  ```
- `cardDefinition`:

  ```jsx
  {
              header: item => <Link href="#" fontSize="heading-m">{item.name}</Link>,
              sections: [
                {
                  id: 'image',
                  content: () => <img style={{ width: '100%' }} src="/logo-small.svg" alt="placeholder" />,
  
                },
                {
                  id: 'description',
                  header: <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}><span>Description</span>
                  <ButtonDropdown
                        items={[
                          {
                            text: 'Delete',
                            id: 'rm',
                            disabled: false,
                          },
                          {
                            text: 'Move',
                            id: 'mv',
                            disabled: false,
                          },
                          {
                            text: 'Rename',
                            id: 'rn',
                            disabled: true,
                          },
                          {
                            text: 'View metrics',
                            href: 'https://example.com',
                            external: true,
                            externalIconAriaLabel: '(opens in new tab)',
                          },
                        ]}
                        ariaLabel="Control instance"
                        variant="inline-icon"
                      />
                  </div>,
                  content: item => <div>{item.description}</div>                    
                },
                {
                  id: 'type',
                  header: 'Type',
                  content: item => item.type,
                  width: 50,
                },
                {
                  id: 'size',
                  header: 'Size',
                  content: item => item.size,
                  width: 50,
                },
              ]
            }
  ```
- Note shown with example: `e.i(271645)`

### Empty state

Playground id: `empty-state`

- `header`: `<Header>Cards with no resources</Header>`
- `items`: `[]`
- Note shown with example: `e.i(271645)`

### No match state

Playground id: `no-match-state`

- `header`: `<Header>Cards with no results</Header>`
- `filter`: `<TextFilter filteringText="asdfjkl" />`
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
- Note shown with example: `e.i(271645)`

### Loading state

Playground id: `loading-state`

- `header`: `<Header>Cards that are loading </Header>`
- `loading`: `true`
- Note shown with example: `e.i(271645)`

### Simple

Playground id: `simple`

- `header`: `<Header>Example Cards</Header>`
- `cardDefinition`:

  ```jsx
  {
            header: item => <Link href="#" fontSize="heading-m">{item.name}</Link>,
            sections: [
              {
                id: 'description',
                header: 'Description',
                content: item => item.description
              },
              {
                id: 'type',
                header: 'Type',
                content: item => item.type
              },
              {
                id: 'size',
                header: 'Size',
                content: item => item.size
              }
            ]
          }
  ```
- Note shown with example: `e.i(271645)`

### Fully selectable

Playground id: `fully-selectable`

- `header`:

  ```jsx
  <Header counter={selectedItems?.length ? ('(' + selectedItems.length + '/10)') : '(10)'}>
      Common cards that are fully selectable
    </Header>
  ```
- `cardDefinition`:

  ```jsx
  {
          header: item => item.name,
          sections: [
            {
              id: 'description',
              header: 'Description',
              content: item => item.description
            },
            {
              id: 'type',
              header: 'Type',
              content: item => item.type
            }
          ]
        }
  ```
- `filter`: `<TextFilter filteringPlaceholder="Find resources" />`
- `pagination`: `<Pagination currentPageIndex={1} pagesCount={2} />`
- `visibleSections`: `["description","type"]`
- `selectedItems`: `[{name:"Item 2"}]`
- `trackBy`: `"name"`
- `selectionType`: `multi`
- `entireCardClickable`: `true`
- `preferences`:

  ```jsx
  
    <CollectionPreferences
      title="Preferences"
      confirmLabel="Confirm"
      cancelLabel="Cancel"
      preferences={{pageSize: 6, visibleContent: ["description", "type", "size"]}}
      pageSizePreference={{
        title: "Page size",
        options: [
          { value: 6, label: "6 resources" },
          { value: 12, label: "12 resources" }
        ]
      }}
      visibleContentPreference={{
        title: "Select visible content",
        options: [
          {
            label: "Main distribution properties",
            options: [
              { id: "description", label: "Description" },
              { id: "type", label: "Type" },
              { id: "size", label: "Size" }
            ]
          }
        ]
      }}
    />
  
  ```
- Note shown with example: `e.i(271645)`
