# Loading and refreshing

> Source: https://cloudscape.design/patterns/general/loading-and-refreshing/ (fetched 2026-09-24)

Loading and refreshing is used to refresh collections of data in the interface.

 [View demo](https://cloudscape.design/examples/react/table-editable.html)
## Key UX concepts

### Loading and refreshing

Loading is the process of bringing data or content into an application or a web page. For example, loading at first page visit to make information available to users. Refreshing is the action of updating or reloading the current state of a system or application. It can be done manually by a user or automatically by the system, to ensure that the displayed information is current and up-to-date.

[View Documentation](loading-and-refreshing.md)

### Refresh types

Refresh can be applied in scenarios when data is fetched from the backend, such as in a [collection view](../resource-management/view.md) , within a data list.

- **Manual refresh**   is triggered by user interaction, via a [button](../../components/button/guidelines.md)   , ensuring control over when the data is updated. For example, a [table](../../components/table/guidelines.md)   with a large data set where users need to perform actions on several resources.
- **Automatic refresh**   is achieved by refreshing the data set at predefined intervals, for example 10 seconds, offering real-time updates and continuous synchronization with the dataset. For example, a [select](../../components/select/guidelines.md)   where the list represents resources created across consoles.

Choose the best refresh type depending on your use-case, user needs, and API type.

## Manual refresh

### Successful refresh

You can include a refresh button as part of the [header](../../components/header/guidelines.md) , for example in a [table](../../components/table/guidelines.md) . Keep the dataset visible while the refresh operation is ongoing, and enable users to perform actions on the resources. Once the data set is refreshed, display a timestamp to provide users with information on the outcome of the operation.

### Items

Last updated
December 21, 2023, 14:29 (UTC+01:00)

Edit Delete Create 

| Variable name | Current value | Description |
| --- | --- | --- |
| Item 1 | First | This is the first item |
| Item 2 | Second | This is the second item |
| Item 3 | Third | This is the third item |
| Item 4 | Fourth | This is the fourth item |
| Item 5 | Fifth | This is the fifth item |
| Item 6 | Sixth | This is the sixth item |
### Refreshing issues

Sometimes refreshing can take longer than expected or fail for some resources due to, for example, availability zone outages. When refreshing can't be completed within 1-10 seconds, communicate that the process is taking longer by using a status indicator next to the refresh button.

- If the API call returns issues with the refreshing, use a [pending status indicator](../../components/status-indicator/guidelines.md)   to inform users. Include in the popover additional information to explain the issues, such as longer time required to perform the refresh.
- If the API call returns partial or total failure of the refreshing, use a [warning status indicator](../../components/status-indicator/guidelines.md)   to inform users. Include in the popover additional information to explain the failure and provide actions to support users, such as retry or filter out affected availability zones.

### Items

Loading issues Refreshing table content Edit Delete Create 

| Variable name | Current value | Description |
| --- | --- | --- |
| Item 1 | First | This is the first item |
| Item 2 | Second | This is the second item |
| Item 3 | Third | This is the third item |
| Item 4 | Fourth | This is the fourth item |
| Item 5 | Fifth | This is the fifth item |
| Item 6 | Sixth | This is the sixth item |
### Items

Loading failed Edit Delete Create 

| Variable name | Current value | Description |
| --- | --- | --- |
| Item 1 | First | This is the first item |
| Item 2 | Second | This is the second item |
| Item 3 | Third | This is the third item |
| Item 4 | Fourth | This is the fourth item |
| Item 5 | Fifth | This is the fifth item |
| Item 6 | Sixth | This is the sixth item |
### Form controls

You can include a refresh button next to a [form](../../components/form/guidelines.md) control, for example a [select](../../components/select/guidelines.md) , to update the data set with the latest information. If an error occurs, display an [error message](errors/error-messages.md) to communicate the status.

## Loading

Loading is the process of making information available to users, for example at first page visit. In a table, use [skeleton loading](../../components/table/guidelines.md) to indicate that data is being retrieved. Skeleton rows preserve the table's column layout, giving users a preview of the expected content structure and reducing perceived loading time.

### Items

Edit Delete Create 

| Variable name | Current value | Description |
| --- | --- | --- |
| Loading items |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
#### Loading with a spinner

A spinner can also be used in a table to indicate loading. However, we recommend using skeleton loading instead, as a spinner provides no structural context and can increase perceived loading time and layout shift. Loading spinners should however be used for [expandable rows and progressive loading](../../components/table/guidelines.md) in tables.

### Items

Edit Delete Create 

| Variable name | Current value | Description |
| --- | --- | --- |
| Loading items |  |  |
## General guidelines

### Do

- For manual refresh, include the refresh button as part of the [header actions](../../components/header/guidelines.md)   . Include a timestamp to inform users on the outcome of the refresh operation.

### Don't

- Don't add refresh buttons in the interface, except when users need to perform an explicit action to refresh only a part of the interface.

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

#### Loading message

- Don't use articles ( *a, an, the*   ).
- Don't use end punctuation.

#### Popover

- Follow the guidelines for [popover](../../components/popover/guidelines.md)  .

#### Table

- Follow the guidelines for [table](../../components/table/guidelines.md)  .

#### Select

- Follow the guidelines for [select](../../components/select/guidelines.md)  .

#### Status indicator

- Follow the guidelines for [status indicator](../../components/status-indicator/guidelines.md)  .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

- When using a refresh button, make it accessible by providing a label (aria-label). Describe the refresh action by setting the `ariaLabel`   property in the [button](../../components/button/guidelines.md)   component. Also set the `loadingText`   property to communicate the loading state.
- Use an ARIA live region to announce updates to the last refresh timestamp.
