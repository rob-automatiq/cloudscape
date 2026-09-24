# Collection hooks package

> Source: https://cloudscape.design/get-started/dev-guides/collection-hooks/ (fetched 2026-09-24)

Use the Cloudscape collection hooks package to handle data operations in collection components.

## Overview

Cloudscape provides [table](../../components/table/guidelines.md) and [cards](../../components/cards/guidelines.md) components to display collections of items. These components display static datasets. Operations on these datasets (such as filtering, sorting, and pagination) should happen outside of these components.

### Client-side collections

The `@cloudscape-design/collection-hooks` package provides utilities to handle filtering, sorting, or pagination operations when the full dataset describing the collection can be fetched on the client side, without requiring further asynchronous calls. This use case is called *client-side collection*.

### Server-side collections

If your dataset has to be fetched asynchronously upon filtering, sorting, and pagination operations, don't use the `@cloudscape-design/collection-hooks` package. Instead, implement the fetching, filtering, selection, pagination, and sorting yourself. This use case is called *server-side collection*.

## Install the package

This package is published to NPM as [@cloudscape-design/collection-hooks](https://www.npmjs.com/package/@cloudscape-design/collection-hooks).

For more information, see the [package installation guide](../for-developers/using-cloudscape-components.md).

## Using with React

This package exports the `useCollection` [React hook](https://reactjs.org/docs/hooks-intro.html) . It takes the original collection items and a configuration, and returns filtered, sorted, and paginated content, according to your configuration.

### Code example

Example below uses text filtering. Check out [the official demo](https://cloudscape.design/examples/react/table-property-filter.html) that uses property filtering feature of the collection hooks.

## Instances (25)

- 1
- 2
- 3



| ID | Availability zone | State |
| --- | --- | --- |
|  | [O4DMYB22MWEYROBVNSRAN](https://cloudscape.design/) | us-east-1c | Healthy |
|  | [S4JE6P56MI4XBCMD63GQP](https://cloudscape.design/) | us-east-1a | Healthy |
|  | [7U59ZZLQYGXZFHTKZF7UI](https://cloudscape.design/) | us-east-1d | Healthy |
|  | [LF2QRGQR73UA8I4HOJXGP](https://cloudscape.design/) | us-east-1b | Unhealthy |
|  | [8WYHUA2A03V71YQMM5VYN](https://cloudscape.design/) | us-east-1a | Healthy |
|  | [PJVCIGWWP24XF6168QDR9](https://cloudscape.design/) | us-east-1c | Healthy |
|  | [DLBTSDMY30151I1B3Q77B](https://cloudscape.design/) | us-east-1e | Healthy |
|  | [EEIX26WFY6YA56R2BER2E](https://cloudscape.design/) | us-east-1b | Healthy |
|  | [8JMC1H9LIKCKGCXS6FT3Y](https://cloudscape.design/) | us-east-1c | Healthy |
|  | [KPG0CDOTQRF830MWRDIA5](https://cloudscape.design/) | us-east-1d | Healthy |
```
import React, { useState } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { Box, Button, CollectionPreferences, Header, Pagination, Table, TextFilter } from '@cloudscape-design/components';
import allItems from './data';
import { columnDefinitions, getMatchesCountText, paginationLabels, collectionPreferencesProps } from './table-config';

function EmptyState({ title, subtitle, action }) {
  return (
    <Box textAlign="center" color="inherit">
      <Box variant="strong" textAlign="center" color="inherit">
        {title}
      </Box>
      <Box variant="p" padding={{ bottom: 's' }} color="inherit">
        {subtitle}
      </Box>
      {action}
    </Box>
  );
}

export default function CollectionHooksTable() {
  const [preferences, setPreferences] = useState({
    pageSize: 10,
    contentDisplay: [
      { id: 'id', visible: true },
      { id: 'availabilityZone', visible: true },
      { id: 'state', visible: true },
    ],
  });
  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
    allItems,
    {
      filtering: {
        empty: <EmptyState title="No instances" action={<Button>Create instance</Button>} />,
        noMatch: (
          <EmptyState
            title="No matches"
            action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>}
          />
        ),
      },
      pagination: { pageSize: preferences.pageSize },
      sorting: {},
      selection: {},
    }
  );
  const { selectedItems } = collectionProps;
  return (
    <Table
      {...collectionProps}
      selectionType="multi"
      header={
        <Header
          counter={selectedItems.length ? `(${selectedItems.length}/${allItems.length})` : `(${allItems.length})`}
        >
          Instances
        </Header>
      }
      columnDefinitions={columnDefinitions}
      columnDisplay={preferences.contentDisplay}
      items={items}
      pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels} />}
      filter={
        <TextFilter
          {...filterProps}
          countText={getMatchesCountText(filteredItemsCount)}
          filteringAriaLabel="Filter instances"
        />
      }
      preferences={
        <CollectionPreferences
          {...collectionPreferencesProps}
          preferences={preferences}
          onConfirm={({ detail }) => setPreferences(detail)}
        />
      }
    />
  );
}
```

### Sorting and filtering on nested properties

If you want to use sorting, filtering, or property filtering on items that include nested properties, such as `item.name.first` and `item.name.last` , transform the items to bring the nested properties to the top:

```
allItems = allItems.map(item => ({ ...item, firstName: item.name.first, lastName: item.name.last }));

const { items, collectionProps, filterProps, actions } = useCollection(allItems, {
  filtering: {
    empty: <EmptyState title="No instances" action={<Button>Create instance</Button>} />,
    noMatch: <EmptyState title="No matches" action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>} />,
  },
  sorting: {},
});

// The sorting and filtering now include item.firstName and item.lastName
```

### Multi-column sorting

If you want users to sort by more than one column at a time, enable multi-column sorting and optionally provide the initial sorting columns in priority order, from highest to lowest:

```
const defaultSortingColumns = [
  { sortingColumn: columnDefinitions[0] },
  { sortingColumn: columnDefinitions[1], isDescending: true },
];

const { items, collectionProps } = useCollection(allItems, {
  sorting: {
    multiColumn: true,
    defaultSortingColumns,
  },
});

return (<Table items={items} columnDefinitions={columnDefinitions} {...collectionProps} />);
```

### Using expandable rows

If you want a [table](../../components/table/guidelines.md) to use hierarchical data presentation with expandable rows, define nested items structure with expandable rows configuration of the `useCollection` hook:

```
const allItems = [
  { id: '1', type: 'group', name: 'Devices', parentId: null },
  { id: '1.1', type: 'device', name: 'Smartphone', parentId: '1' },
  { id: '1.2', type: 'device', name: 'Laptop', parentId: '1' },
  { id: '2', type: 'group', name: 'Auxillary', parentId: null }
];

const { items: rootItems, collectionProps } = useCollection(allItems, {
  expandableRows: {
    getId: (item) => item.id,
    getParentId: (item) => item.parentId,
    // set `dataGrouping: {}` to use alternative computation for data counters and selection
  }
});

return (<Table items={rootItems} columnDefinitions={columnDefinitions} {...collectionProps} />);
```

Note that it is important to define expandable rows via collection hooks so that filtering, sorting, and pagination work correctly.

### Using multi-select tokens

To use multi-select tokens, pass `tokenType="enum"` to the desired properties and operators. For example:

```
const { items, propertyFilterProps, ... } = useCollection({
  propertyFiltering: {
    filteringProperties: [
      {
        key: 'state',
        operators: [
          // Set token type for equals and not equals operators as enum so that
          // the default many-to-one matching logic is used.
          // In the property filter, the corresponding multi-choice form and formatter will be used.
          { operator: '=',  tokenType: "enum" },
          { operator: '!=', tokenType: "enum" },
          // Keep token type for contains and not contains operators as is.
          ':',
          '!:',
        ],
        // ...
      }
    ]
  }
});
```

### Using custom operator matchers

If you want to override the default filtering logic, use a match function on the extended operator notation:

```
const { items, propertyFilterProps, ... } = useCollection({
  propertyFiltering: {
    filteringProperties: [
      // Using custom matcher to support searching with a comma-separated list
      {
        key: 'status',
        operators: [
          { operator: '=', match: (itemValue, tokenValue) => tokenValue.split(',').includes(itemValue) },
          { operator: '!=', match: (itemValue, tokenValue) => !tokenValue.split(',').includes(itemValue) },
        ],
        ...
      },
      // Using predefined date matcher
      {
        key: 'launchDate',
        operators: [
          { operator: '=', match: 'date' },
          { operator: '!=', match: 'date' },
          { operator: '<', match: 'date' },
          { operator: '<=', match: 'date' },
          { operator: '>', match: 'date' },
          { operator: '>=', match: 'date' },
        ],
        ...
      },
      // Using predefined datetime matcher
      {
        key: 'lastEventAt',
        operators: [
          { operator: '=', match: 'datetime' },
          { operator: '!=', match: 'datetime' },
          { operator: '<', match: 'datetime' },
          { operator: '<=', match: 'datetime' },
        ],
        ...
      },
    ]
  }
});
```

Note that overrides are done per operator.

### Intercepting event listeners

If you want to define a custom behavior upon user actions, ensure you always call the method created by the collection hook:

```
const { ..., paginationProps } = useCollection(...);

return (
  <Table
    ...
    pagination={
      <Pagination
        {...paginationProps}
        onChange={event => {
          myCustomFunction(event);
          paginationProps.onChange(event);
        }}
      />
    }
  />
);
```

## API

```
useCollection(allItems: Array, configuration: Configuration): Result
```

### Configuration



| Name | Type | Description |
| --- | --- | --- |
| filtering | Object | Filtering configuration. If you want to activate filtering with default settings, provide an empty object. |
| filteringFunction | (item: T, text: string, fields?: string[]) => boolean | Custom function to filter items. The default value is a function that loops through all items keys (unless fields property is provided, see below), converts all values to strings, and matches them against current filteringText. |
| fields | string[] | Array of keys within the item object whose values are taken into account by the default filteringFunction. |
| defaultFilteringText | string | Initial filtering value on the first render. |
| empty | React.ReactNode | Content to display in the table/cards empty slot when there are no items initially provided. |
| noMatch | React.ReactNode | Content to display in the table/cards empty slot when filtering returns no matched items. |
| propertyFiltering | Object | Configuration for property filtering. |
| filteringProperties | readonly PropertyFilterProperty[] | Array of properties by which the data set is going to be filtered. Individual items have following properties:key [string]: The identifier of this property. Refer to a property name in type T of the data item to enable built-in filtering.groupValuesLabel [string]: Localized string to display for the 'Values' group label for a specific property. For example: EC2 instance values.propertyLabel [string]: A human-readable string for the property.operators [ReadonlyArray<PropertyFilterOperator &#124; PropertyFilterOperatorExtended>, optional]: A list of all operators supported by this property. The equals operator should always be supported, even if you omit it in the list. Operators can be extended to accept additional properties. Include match to define an alternative filtering logic.group [string, optional]: Optional identifier of a custom group that this filtering option is assigned to. Use to create additional groups below the default one. Make sure to also define labels for the group in the customGroupsText property. Notice that only one level of options nesting is supported. |
| filteringFunction | (item: T, query: PropertyFilterQuery) => boolean; | Custom function to filter items. The default value is a function that takes values under the FilteringProperty['key'] in individual items, and matches them against current filteringText. |
| defaultQuery | PropertyFilterQuery | Initial query on the first render. |
| empty | React.ReactNode | Content to display in the table/cards empty slot when there are no items initially provided. |
| noMatch | React.ReactNode | Content to display in the table/cards empty slot when filtering returns no matched items. |
| sorting | Object | Sorting configuration. If you want to use sorting with default settings, provide an empty object. This feature is only applicable for the table component. |
| defaultState | SortingState | Initial sorting state for single-column sorting. Ignored when multiColumn is enabled. |
| multiColumn | boolean | Enables multi-column sorting. Defaults to false. |
| defaultSortingColumns | ReadonlyArray> | Initial sorting columns in priority order, with the first column having the highest priority. Only used with multiColumn. |
| pagination | Object | Pagination configuration. If you want to paginate items using default settings, provide an empty object. |
| pageSize | number | Value of the desired page size. |
| defaultPage | number | Page number for the initial render. |
| allowPageOutOfRange | boolean | Set to true to disable the logic that by default clamps the current page number to the number of available pages of items. This can be useful in conjunction with openEnd pagination and lazy-loading of data. |
| selection | Object | Selection configuration. If you want to use the selection feature with default settings, provide an empty object. |
| defaultSelectedItems | ReadonlyArray | Items selected on the initial render. The items are matched by trackBy if defined and by reference otherwise. |
| keepSelection | boolean | If set to true, selected items will be kept across pagination, sorting, filtering and page size changes. |
| trackBy | string &#124; ((item: T) => string) | Property of an item that uniquely identifies it. It is used for matching the objects in items and selectedItems arrays. This value is also passed down to the collectionProps return value to ensure that the hook and the collection component use the same tracking logic. Must be the same as expandableRows.getId if defined. |
| expandableRows | Object | Expandable rows configuration. |
| getId | (item: T) => string | Property of an item that uniquely identifies it. It is used to make a nested items structure from of a plain list of items, and to match objects items and expandedItems arrays. This value is also passed down to the collectionProps return value (as trackBy) to ensure that the hook and the collection component use the same tracking logic. Must be the same as selection.trackBy if defined. |
| getParentId | (item: T) => null &#124; string | Property of an item that identifies its parent by ID. For root items the function must return null. |
| defaultExpandedItems | ReadonlyArray | Items expanded on the initial render. The items are matched by expandableRows.getId. |
| dataGrouping | {} | Determines how counters and selection are computed. When set to {}, only leaf nodes are counted, and selecting an expandable row selects all nested rows. |
### Result



| Name | Type | Description |
| --- | --- | --- |
| items | ReadOnlyArray | Table items on the current page with filtering, sorting, and pagination applied. In tables with expandable rows, only root items are returned. |
| allPageItems | ReadOnlyArray | Table items across all pages with filtering and sorting applied. In tables with expandable rows, only root items are returned. |
| filteredItemsCount | number | Total numbers of items matching the current filter, ignoring the pagination. Use this value for creating the localized matches count text for the TextFilter component. |
| firstIndex | number | The 1-based index of the first item returned in the items array. This index changes when pagination is used. |
| totalItemsCount | number | The total count of all items in a table. For tables with expandable rows it only includes the top-level items. |
| actions | Object | An object with functions to perform different actions. |
| setFiltering | (filteringText: string): void | Sets new filtering text. |
| setPropertyFiltering | (query: Query): void | Sets new filtering query. |
| setSorting | (state: SortingState): void | Sets the single-column sorting state. |
| setMultiSorting | (sortingColumns: ReadonlyArray>) => void | Sets the current multi-column sort state. |
| setCurrentPage | (currentPageIndex: number): void | Sets current page in pagination. |
| setSelectedItems | (selectedItems: ReadonlyArray): void | Sets the list of currently selected items. |
| setExpandedItems | (expandedItems: ReadonlyArray): void | Sets the list of currently expanded items. |
| collectionProps | Object | Props object to spread on the table/cards component. For more details see the [table component API documentation](../../components/table/guidelines.md). |
| empty | React.ReactNode |  |
| sortingColumn | SortingColumn |  |
| sortingDescending | boolean |  |
| onSortingChange | (event: CustomEvent>) => void |  |
| multiColumnSort | Object | Props used by Table for multi-column sorting. |
| sortingColumns | ReadonlyArray> | Current sorting columns in priority order. |
| onChange | (event: CustomEvent>) => void | Updates the multi-column sort state. |
| selectedItems | ReadonlyArray |  |
| onSelectionChange | (event: CustomEvent>) => void |  |
| expandableRows | Object | Expandable rows configuration of the Table component (matches TableProps.ExpandableRows<T>). |
| trackBy | string &#124; ((item: T) => string) |  |
| ref | React.RefObject |  |
| filterProps | Object | Props object to spread on the TextFilter component. |
| disabled | boolean |  |
| filteringText | string |  |
| onChange | (event: CustomEvent) => void |  |
| propertyFilterProps | Object | Props object to spread on the PropertyFilter component. |
| query | PropertyFilterQuery |  |
| onChange | (event: CustomEvent) => void |  |
| filteringProperties | readonly PropertyFilterProperty[] |  |
| filteringOptions | readonly PropertyFilterOption[] |  |
| paginationProps | Object | Props object to spread on the Pagination component. |
| disabled | boolean |  |
| currentPageIndex | number |  |
| pagesCount | number |  |
| onChange | (event: CustomEvent) => void |  |---
