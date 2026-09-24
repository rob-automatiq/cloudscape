# Table view

> Source: https://cloudscape.design/patterns/resource-management/view/table-view/ (fetched 2026-09-24)

The table view pattern is a collection of resources in a tabular format. It's effective for quickly identifying categories or comparing values in a large text and numerical data set.

 [View demo](https://cloudscape.design/examples/react/table.html)
## Key UX concepts

### Default

Table view of all user resources within the service.

### Data density

Table view of all user resources displayed with more or less entries per page, set by the user view preferences.

### Sort

Table view of all user resources sorted on a certain data set by the user. Each individual table column can be sorted in ascending or descending order.

### Multi-column sort

Table view of all user resources sorted by multiple columns simultaneously with explicit priority ordering. Each sorted column displays a numbered priority badge and a directional arrow indicating sort order. Multi-column sort is useful when users need to analyze multi-dimensional data. For example: Sorting S3 objects by Storage Class then Size to identify cost optimization opportunities across tiers.

### Filter

Reduction of the list of user resources by a specific query set by the user.

### Empty state

Table view in a state of when data has been successfully fetched, and the table contains no resources. When there are no matched results for the applied filters, show a zero results state. Follow the guidelines for [empty states](../../general/empty-states.md).

### Error state

When a table encounters an issue, the table should reflect an error state. Common table error types and the remediation include:

- **Table actions failures: **   use [flashbar](../../../components/flashbar/guidelines.md)   to notify users.
- **Data fetching error or access permission error: **   display an [alert](../../../components/alert/guidelines.md)   as part of the table empty state.
- **Refreshing error**   : follow the guidelines for [loading and refreshing](../../general/loading-and-refreshing.md)  .
- **Progressive loading error: **   follow the guidelines for [loading and refreshing](../../general/loading-and-refreshing.md)  .
- **Inline table cell editing error: **   follow the guidelines for [inline edit](../edit/inline-edit.md)   and [form field validation](../../general/errors/validation.md)  .

#### Example of table data fetching error in container

### Resources

Edit Delete Create 

| Variable name | Current value | Description |
| --- | --- | --- |
| Failed to fetch resourcesThe list of resources could not be loaded due to a server error. Try again later.Retry |  |  |
```
import React from 'react';
import Alert from '@cloudscape-design/components/alert';
import Button from '@cloudscape-design/components/button';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Table from '@cloudscape-design/components/table';

const Snippet = () => (
  <Table
    columnDefinitions={[
      {
        id: 'variable',
        header: 'Variable name',
        cell: () => '',
        isRowHeader: true,
      },
      {
        id: 'value',
        header: 'Current value',
        cell: () => '',
      },
      {
        id: 'description',
        header: 'Description',
        cell: () => '',
      },
    ]}
    items={[]}
    header={
      <Header
        headingTagOverride="h3"
        actions={
          <SpaceBetween direction="horizontal" size="xs" alignItems="center">
            <Button>Edit</Button>
            <Button>Delete</Button>
            <Button variant="primary">Create</Button>
          </SpaceBetween>
        }
      >
        Resources
      </Header>
    }
    empty={
      <Alert
        header="Failed to fetch resources"
        action={<Button>Retry</Button>}
        type="error"
        statusIconAriaLabel="Error"
      >
        The list of resources could not be loaded due to a server error. Try again later.
      </Alert>
    }
  />
);

export default Snippet;
```

### Showing additional data

There are two ways to show additional data in tables: pagination and progressive loading. Use pagination for organizing large datasets into manageable chunks, making it easier to navigate to specific sections. Pagination provides the ability to jump to specific pages making it easier to keep track of where they are, return to a specific section, and provide an accurate representation of the size of the data set. Use progressive loading when your user needs to see all the data in one view, to compare large data sets, and where context switching between pages creates a cognitive load and prevents easy comparison. For example, loading more child rows in a table with expandable rows.

## Building blocks

A B C D E E F G H I J K A B C D E E F H I J K
#### A. Flash message

Use a flash message to notify the user about the progress and outcome (success or failure) of the actions taken upon the resources.

#### B. Breadcrumbs

Use the service name for the root page in the breadcrumbs, and make it a link. Follow it with the page title, which is usually the category name of the service items (For example: *Resources, Distributions, Instances* ).

#### C. Table

Use the "full-page" `variant` of the [table](../../../components/table/guidelines.md) component for this pattern.

#### D. Header

Enabling a sticky header is optional, but recommended, for these potentially lengthy list pages. If enabled, use the "awsui-h1-sticky" header `variant` so the title reduces its size on scroll.

#### E. Actions - optional

- **Actions in the header: **   For more information on actions, refer to [global actions](../../general/actions/global-actions.md)  .
- **Actions in table cells: **   For more information on actions, refer to [in-context actions](../../general/actions/incontext-actions.md)  .

#### F. Filter - optional

Text filter helps users with an extensive number of table rows to quickly find one or several resources with a matching query. The entire set of columns are used as a base for the filter.
We recommend building in a custom message, with a clear call to action to clear the filter, when the query doesn't match with any resources.

#### G. Sorting - optional

Tables support two sorting modes: single-column sort (default) and multi-column sort.

**Single-column sort**

Activating a sortable column header sorts the table by that column. Activating it again toggles between ascending and descending order. Only one column is sorted at a time - activating a different column replaces the previous sort.

**Multi-column sort**

Multi-column sort allows users to sort by multiple columns simultaneously with explicit priority ordering.

#### H. Pagination - optional

Pagination helps users with an extensive number of resources to navigate through them across multiple pages. Users can change the default number of table rows per view on [Resources preferences](../../../components/collection-preferences/guidelines.md).

Display the pagination even if the resources set fits in one page.

Navigating via the pagination functionality overwrites any selection.

#### I. Preferences - optional

Use preferences to allow users to view and change their display configuration. User configurations in preferences affect the following settings of the table view:

- Number of rows displayed per page (Pagination)
- Which columns are visible or set to hidden
- Order of the columns displayed
- Change of view pattern: from table view to card view, and vice versa
- Which columns are sticky

#### J. Selection - optional

Table rows can be selected individually or in bulk (multiple selection) via the checkboxes mechanism. The parent checkbox, living on the table header, only selects rows visible on the page.

Any actions triggered after selection only affects the selected visible rows. Selection is overwritten by:

- Table sorting
- Pagination
- Preferences
- And as soon as they are no longer visible on the page

#### K. Side navigation

Navigation is open by default on view pages. For more information about structuring side navigation content, follow the guidelines for [side navigation](../../general/service-navigation/side-navigation.md).

## General guidelines

### Do

- Use table view pattern for static data with multiple attributes displayed in a tabular format.
- The best data type for a table view is data that is structured, easily comparable, and sortable.
- Restrain from incorporating graphics in tables. For data sets with a blend of text, images, and data visualizations, or content with mixed formatting, refer to the [cards view](card-view.md)   pattern.
- Organize columns and rows based on the information needs of your users. To help them read the table, order the columns by importance from left to right.
- To enable easy sharing of a table view, refer to the [filter persistence in collection views](../../general/filter-patterns/filter-persistence-in-collection-views.md)   pattern.

### Don't

- Don't use the [content layout](../../../components/content-layout/guidelines.md)   component on this type of page. Instead, use the "full-page" `variant`   of the [table](../../../components/table/guidelines.md)   component to implement this pattern.
- Don't use the table view pattern for tables that aren't overly content-heavy. Instead, if a table only has a few columns, use a bordered table inside the [content layout](../../../components/content-layout/guidelines.md)   component, with the default [app layout](../../../components/app-layout/guidelines.md)   content max-width.
- Don't use pagination and progressive loading at the same time, except when loading child rows in [tables with expandable rows](../../../components/table/guidelines.md)  .
- Don't change table column headers after a user has completed a filter action.

## Writing guidelines

### General writing guidelines

- Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.
- Use end punctuation, except in [headers](../../../components/header/guidelines.md)   and [buttons](../../../components/button/guidelines.md)   . Don't use exclamation points.
- Use present-tense verbs and active voice.
- Don't use *please*   , *thank you*   , ellipsis ( *...*   ), ampersand ( *&*   ), *e.g.*   , *i.e.*   , or *etc.*   in writing.
- Avoid directional language.  

  - For example: use *previous*     not *above*     , use *following*     not *below*    .
- Use device-independent language.  

  - For example: use *choose*     or *select*     not *click*    .

### Component-specific guidelines

#### Text filter - optional

- Use sentence case.
- Don't use end punctuation.

#### Table header

- Follow the writing guidelines for [tables](../../../components/table/guidelines.md)   and [cards](../../../components/cards/guidelines.md)  .

#### Custom messages

- Use active voice wherever possible. Use passive voice only to avoid blaming the users.
- Avoid excessive words, such as *please*  .
- Avoid uppercase text and exclamation points.

#### Empty state - optional

- The goal of this message is to inform the user that data has been successfully fetched, and the table contains no resources. Consider incorporating:
- A clear identification of the state.  

  - For example: *Empty resources.*
- A descriptive explanation of the reasons why the state is displayed.  

  - For example: *No resources to display or You have no resources created.*
- The message can be extended by adding a call to action.  

  - For example: *Create a resource.*

#### Error state - optional

- Make sure to inform the user in concise and clear language, that the system encountered an error retrieving resources. Consider incorporating:  

  - A clear identification of the state.    

    - For example: *Could not retrieve resources.*
  - A descriptive explanation on the reasons why the state is being displayed.    

    - *For example: Could not access your resources.*
  - A single call to action to recover from this state.    

    - For example: *Refresh or Contact support*

#### Zero results - optional

- Use concise and clear language for your custom message in cases of zero results resulting from the text filter. Consider incorporating:
- A clear identification of the state.  

  - For example: *Zero results *     or *No results*
- A descriptive explanation of the reasons why the state is displayed.  

  - For example: *No resources match your search.*
- A single call to action to recover from this state.  

  - For example: *Clear filter or Go back to default.*

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

- Every table cell should have a logical column header or row header.
- Users should be able to access and move the active state using their keyboard (arrow keys). Each single resource has focus on the navigation (links) and on the selection mechanism (checkbox).
- Table must be visible in screen reader list of tables.

## Related patterns and components

### View resources

With the view resources patterns, users can find and take action on a collection of resources in the most efficient way possible.

[View Documentation](../view.md)

### Card view

A collection of resources represented as cards. It's effective for glancing at small sets of similar resources with text, numerical, and imagery data sets.

[View source code](https://github.com/cloudscape-design/demos/tree/main/src/pages/cards)

[View Documentation](card-view.md)

### Split view

A collection of resources presented as table or cards and paired with a [split panel](../../../components/split-panel/guidelines.md) for contextual resource details. It's effective for quickly browsing or comparing key resource details.---

[View source code](https://github.com/cloudscape-design/demos/tree/main/src/pages/split-panel-multiple)

[View Documentation](split-view.md)
