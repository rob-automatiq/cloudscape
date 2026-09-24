# In-context actions

> Source: https://cloudscape.design/patterns/general/actions/incontext-actions/ (fetched 2026-09-24)

Use in-context actions when there are actions tied to a singular element, resource or container.

## Key UX concepts

In-context actions are performed on only one resource. For example, actions related to specific data in a container, such as *Manage tags* . They should be placed contextually with the item they relate to. This helps speed up task completion for commonly used actions.

### In-context actions in a container

## Container title

Action Another action Container description

Container content
### In-context actions in cards

## Cards title

1. Item 1   Description
  This is the first item   Type   1A   Size   Small
2. Item 2   Description
  This is the second item   Type   1B   Size   Large

### In-context actions in tables

## Table title (2)

Actions
Create duplicate Create resource 

| Variable name | Text value | Type | Description | Actions |
| --- | --- | --- | --- | --- |
|  | Item 1 | First | 1A | This is the first item | Create duplicate |
|  | Item 2 | Second | 1B | This is the second item | Create duplicate |
### In-context action locations

In-context actions should be placed in consistent and predictable locations in the interface.

- **Containers: **   Use the header to display the actions. Follow the guidelines for [header component with actions.](../../../components/header/guidelines.md)
- **Dashboard items: **   Use the header slot of the dashboard item. Follow the guidelines for [dashboard items](../service-dashboard/dashboard-items.md)  .
- **Tables: **  

  - Place these in the last column either as an [inline icon button dropdown](../../../components/button-dropdown/guidelines.md)     , an [inline icon button](../../../components/button/guidelines.md)     , or a [inline link button,](../../../components/button/guidelines.md)     depending on the action type. To maintain the visibility of available actions in table rows we recommend enabling the [sticky table column feature](../../../components/table/guidelines.md)     to maintain visibility of the available actions.
  - When considering which actions to place as in-context actions in table rows, consult user data for commonly used actions that speed up repetitive tasks for your users.
  - You can persist one or two repetitive actions as a link or icon button to speed up task completion. In case of more than two actions, group them in a button dropdown to conserve space.
  - If there are no repetitive actions then place all actions in a button dropdown to conserve space.
  - For actions that are interconnected with a resource status, display the status column to inform users about the relationship. For example, for a reboot action, the status column should show that the resource is active.
- **Cards: **   Use the header or content area of the card to feature the actions. Follow the guidelines for [cards](../../resource-management/view/card-view.md)  .

### Icon button dropdown

Use the [inline icon button dropdown](../../../components/button-dropdown/guidelines.md) for in-context actions to reduce visual noise and optimize content density. For example placing download, copy, and share actions in an icon button dropdown.

### Disabled reasons - optional

For extra clarity, provide a tooltip with inactive actions that explains why the action is unavailable. These tooltip explanations should be as short as possible, with longer descriptions belong outside the dropdown component. Follow the guidelines for [disabled and read-only states](../disabled-and-read-only-states.md).

## General guidelines

### Do

- Use a button dropdown to present up to 7 contextual actions that users can choose from to initiate one action.
- Sort the actions set in a logical and hierarchical order. Start with the most relevant and frequently used actions at the top.

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

## Related patterns

### Actions

Ways to invoke actions in the interface.

[View Documentation](../actions.md)

### Global actions

Use global actions when there's a single set of actions, or bulk actions, to be taken against any or all resources in a given view or page.

[View Documentation](global-actions.md)

### Button group

Enable users to perform an action from a group of buttons.

[View Documentation](../../../components/button-group/guidelines.md)
