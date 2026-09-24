# Empty states

> Source: https://cloudscape.design/patterns/general/empty-states/ (fetched 2026-09-24)

An empty state occurs when users haven't created a resource or have deleted all existing resources. A zero results state occurs when users have filtered and there are no matches.

## Key UX concepts

### Empty state

Empty state is applicable to [table](../../components/table/guidelines.md) , [card](../../components/cards/guidelines.md) view and [service dashboards](service-dashboard.md) . Display an empty state when the user hasn't created any resources or has deleted all resources.

#### Empty state in table

### Distributions (0)

View details Edit Delete Create distribution
- 1



| Distribution ID | Domain name | Delivery method |
| --- | --- | --- |
| No distributionsCreate distribution |  |  |
```
import React from 'react';
import { Table, Pagination, CollectionPreferences, TextFilter, Button, Header, SpaceBetween, Box } from '@cloudscape-design/components';

const TableEmptyState = () => (
  <Table
    header={
      <Header
        headingTagOverride="h3"
        counter="(0)"
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button disabled={true}>View details</Button>
            <Button disabled={true}>Edit</Button>
            <Button disabled={true}>Delete</Button>
            <Button variant="primary">Create distribution</Button>
          </SpaceBetween>
        }
      >
        Distributions
      </Header>
    }
    columnDefinitions={[
      {
        id: 'id',
        header: 'Distribution ID',
        cell: item => item.id,
        isRowHeader: true,
      },
      {
        id: 'domainName',
        cell: item => item.domainName,
        header: 'Domain name',
      },
      {
        id: 'deliveryMethod',
        header: 'Delivery method',
        cell: item => item.deliveryMethod,
      },
    ]}
    items={[]}
    empty={
      <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
        <SpaceBetween size="m">
          <b>No distributions</b>
          <Button>Create distribution</Button>
        </SpaceBetween>
      </Box>
    }
    filter={<TextFilter filteringPlaceholder="Find distributions" />}
    pagination={
      <Pagination
        currentPageIndex={1}
        pagesCount={1}
        ariaLabels={{
          nextPageLabel: 'Next page',
          previousPageLabel: 'Previous page',
          pageLabel: pageNumber => `Page ${pageNumber} of all pages`,
        }}
      />
    }
    preferences={<CollectionPreferences title="Preferences" confirmLabel="Confirm" cancelLabel="Cancel" />}
  ></Table>
);

export default TableEmptyState;
```

- #### Heading

  Explain what the state is.  

  For example: **No distributions**
- #### Description - optional

  Only include a description if it provides necessary information for the user about why there are no results.  

  For example: *Newly added distributions can take up to 48 hours to become available.*
- #### Action button

  Provides the next action which tells users how to move forward. This should always be a secondary button.  

  For example:* Create distribution*

### Zero results state

Zero results state is applicable to [table](../../components/table/guidelines.md) and [card](../../components/cards/guidelines.md) view. Display a zero results state when the user has filtered and there are no matches.

#### Zero results state in cards

### Distributions (200)

View details Edit Delete Create distribution 0 matches 0 matches
- 1

**No matches** Clear filter
```
import React from 'react';
import { Cards, Pagination, CollectionPreferences, TextFilter, Button, Header, SpaceBetween, Box } from '@cloudscape-design/components';

const CardsEmptyState = () => (
  <Cards
    header={
      <Header
        headingTagOverride="h3"
        counter="(200)"
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button disabled={true}>View details</Button>
            <Button disabled={true}>Edit</Button>
            <Button disabled={true}>Delete</Button>
            <Button variant="primary">Create distribution</Button>
          </SpaceBetween>
        }
      >
        Distributions
      </Header>
    }
    cardDefinition={[]}
    items={[]}
    empty={
      <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
        <SpaceBetween size="m">
          <b>No matches</b>
          <Button>Clear filter</Button>
        </SpaceBetween>
      </Box>
    }
    filter={
      <TextFilter
        filteringPlaceholder="Find distributions"
        filteringText="us-east-1a"
        onChange={() => {}}
        countText="0 matches"
      />
    }
    pagination={
      <Pagination
        currentPageIndex={1}
        pagesCount={1}
        ariaLabels={{
          nextPageLabel: 'Next page',
          previousPageLabel: 'Previous page',
          pageLabel: pageNumber => `Page ${pageNumber} of all pages`,
        }}
      />
    }
    preferences={<CollectionPreferences title="Preferences" confirmLabel="Confirm" cancelLabel="Cancel" />}
  ></Cards>
);
export default CardsEmptyState;
```

- #### Heading

  Explain what the state is.  

  For example: **No matches**
- #### Description - optional

  Include a description if it provides necessary information for the user about why there are no results, such as filter constraints are not met.  

  For example: *You don't have any distributions in us-east-1.*  

  For example: *You have applied too many filters.*
- #### Action button

  Provides the next action. In this case it sets the collection view back to the default state. This should always be a [secondary button](../../components/button/guidelines.md)  .  

  Follow the guideline for [clear filter](../../components/text-filter/guidelines.md)  .  

  Use this text: *Clear filter*

### Additional empty states

- #### Empty value

  When the user doesn't provide a value or the value is empty. This doesn't include errors or a valid value of 0). Use hyphen (-) for any empty values. For example, in [table](../../components/table/guidelines.md)   rows or [key-value pairs](../../components/key-value-pairs/guidelines.md)  .
- #### Empty form controls - no options available

  For empty states in form controls, follow the guidelines for: [autosuggest](../../components/autosuggest/guidelines.md)   , [select](../../components/select/guidelines.md)   , [multiselect](../../components/multiselect/guidelines.md)  .

## General guidelines

### Do

- Always provide an action. Having no recourse creates confusion and prevents users from moving forward. If no action can be provided, include a link in the description to navigate users to the page where they can complete the action.
- If additional information is needed, provide a description.   A description should always sit below a heading, and never appear without one.
- Always display a resource counter to reflect the number of resources.

### Don't

- Don't use empty states for errors. Use the [flash bar](../../components/flashbar/guidelines.md)   and [status indicator](../../components/status-indicator/guidelines.md)   for displaying errors.
- Don't repeat heading or button text in the description.
- Don't use empty states in [help panel](../../components/help-panel/guidelines.md)   . Follow the guidelines for [help system](help-system.md)  .

## Writing guidelines

### General writing guidelines

- Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.
- Use end punctuation, except in [headers](../../components/header/guidelines.md)   and [buttons](../../components/button/guidelines.md)   . Don't use exclamation points.
- Use present-tense verbs and active voice.
- Don't use *please*   , *thank you*   , ellipsis ( *...*   ), ampersand ( *&*   ), *e.g.*   , *i.e.*   , or *etc.*   in writing.
- Avoid directional language.  

  - For example: use *previous*     not *above*     , use *following*     not *below*    .
- Use device-independent language.  

  - For example: use *choose*     or *select*     not *click*    .

### Component-specific guidelines

#### Heading

- Headings should be bold, and not include end punctuation.
- **Empty state: **  

  - For example: **No distributions**
- **Zero results state: **  

  - For example: **No matches**

#### Description

- Descriptions should have end punctuation, with the only exception being if a description ends with an external link icon, which should not have a period after it.
- If needed, provide a clear explanation of why the state is empty, and any steps the user needs to take.
- Avoid repeating any copy that is already in the heading or action button.
- Descriptions should not be in bold text.

#### Action button

- Empty state or Zero results state button label should match the corresponding table button label.
- Follow the writing guidelines for [button](../../components/button/guidelines.md)  .
- **Empty state: **  

  - For example:    

    - *Create distribution*
    - *Connect to repository*
    - *Manage tags*
- **Zero results state:**  

  - Use this text: *Clear filter*

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

## Related patterns and components

### Table view

The table view pattern is a collection of resources in a tabular format. It's effective for quickly identifying categories or comparing values in a large text and numerical data set.

[View source code](https://github.com/cloudscape-design/demos/tree/main/src/pages/table)

[View Documentation](../resource-management/view/table-view.md)

### Table

Presents data in a two-dimensional table format, arranged in columns and rows in a rectangular form.

[View Documentation](../../components/table/guidelines.md)

### Card view

A collection of resources represented as cards. It's effective for glancing at small sets of similar resources with text, numerical, and imagery data sets.

[View source code](https://github.com/cloudscape-design/demos/tree/main/src/pages/cards)

[View Documentation](../resource-management/view/card-view.md)

### Cards

Represents a collection of items.---

[View Documentation](../../components/cards/guidelines.md)
