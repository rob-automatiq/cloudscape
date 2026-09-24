# icon-provider playground examples

Snapshot of the named examples on https://cloudscape.design/components/icon-provider/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Custom icons

Playground id: `custom-icons`

- `icons`:

  ```jsx
  {
    "status-positive": (
      <svg
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 9L7 11L11 7" />
        <path d="M8 2C6.29 3.53 4.13 4.32 2 4.48V7.96C2 10.01 2.76 11.84 3.71 13.1C4.63 14.32 6.03 15.31 8 16C9.97 15.31 11.37 14.32 12.29 13.1C13.3935 11.6128 13.9926 9.81183 14 7.96V4.48C11.87 4.32 9.71 3.52 8 2Z" />
      </svg>
    ),
  }
  ```
- `children`:

  ```jsx
  <SpaceBetween size="s">
    <Box>Custom "status-positive" icon used across different components</Box>
    <StatusIndicator type="success">Two-factor authentication enabled</StatusIndicator>
    <Alert type="success" statusIconAriaLabel="Success">
      Two-factor authentication enabled successfully.
    </Alert>
    <Flashbar
      items={[
        {
          type: "success",
          content: "Two-factor authentication enabled successfully.",
          statusIconAriaLabel: "Success"
        }
      ]}
    />
  </SpaceBetween>
  ```

### Custom component icons

Playground id: `custom-component-icons`

- `componentIcons`:

  ```jsx
  {
    "expandable-section": {
      expandToggle: ({ expanded }) => (
        <Icon name={expanded ? "treeview-collapse" : "treeview-expand"} size="inherit" />
      )
    },
    table: {
      sortingIndicator: ({ sortingState }) => {
        switch (sortingState) {
          case "ascending":
            return <Icon name="arrow-up" size="inherit" />;
          case "descending":
            return <Icon name="arrow-down" size="inherit" />;
          case "sortable":
            return null;
        }
      }
    }
  }
  ```
- `children`:

  ```jsx
  <SpaceBetween size="s">
    <Box>Custom expandable section toggle and table sorting indicator</Box>  
    <ExpandableSection headerText="Expandable section" defaultExpanded={true}>
      <Table
        sortingColumn={{ sortingField: "name" }}
        columnDefinitions={[
          { id: "name", header: "Name", cell: item => item.name, sortingField: "name" },
          { id: "type", header: "Type", cell: item => item.type, sortingField: "type" }
        ]}
        items={[
          { name: "Item A", type: "Primary" },
          { name: "Item B", type: "Secondary" }
        ]}
      />
    </ExpandableSection>
  </SpaceBetween>
  ```
