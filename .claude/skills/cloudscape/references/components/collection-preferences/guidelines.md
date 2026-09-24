# Collection preferences

> Source: https://cloudscape.design/components/collection-preferences/ (fetched 2026-09-24)

With collection preferences, users can manage their display preferences within a collection.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/collection-preferences)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/collection-preferences/index.html.json)

## Development guidelines

#### State management

The collection preferences component is controlled. Set the `preferences` property and the `onConfirm` listener to store its value in the state of your application. Learn more about the [state management](../../get-started/dev-guides/state-management.md) of Cloudscape components.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

CollectionPreferencesWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findModal | [PreferencesModalWrapper](https://cloudscape.design/) &#124; null | - | - |
| findTriggerButton | [ButtonWrapper](../button/guidelines.md) | - | - | PreferencesModalWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findCancelButton | [ButtonWrapper](../button/guidelines.md) &#124; null | - | - |
| findConfirmButton | [ButtonWrapper](../button/guidelines.md) &#124; null | - | - |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findContentBefore | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findContentDensityPreference | [CheckboxWrapper](../checkbox/guidelines.md) &#124; null | - | - |
| findContentDisplayPreference | [ContentDisplayPreferenceWrapper](https://cloudscape.design/) &#124; null | - | - |
| findCustomPreference | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findDismissButton | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findFooter | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findPageSizePreference | [PageSizePreferenceWrapper](https://cloudscape.design/) &#124; null | - | - |
| findStickyColumnsPreference | [StickyColumnsPreferenceWrapper](https://cloudscape.design/) &#124; null | - | firstOrLast: |
| findStripedRowsPreference | [CheckboxWrapper](../checkbox/guidelines.md) &#124; null | - | - |
| findVisibleContentPreference | [VisibleContentPreferenceWrapper](https://cloudscape.design/) &#124; null | - | - |
| findWrapLinesPreference | [CheckboxWrapper](../checkbox/guidelines.md) &#124; null | - | - |
| isVisible | boolean | - | - | ContentDisplayPreferenceWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDescription | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | Returns the preference description displayed below the title. | - |
| findNoMatch | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns no match with the clear filter button. | - |
| findOptionByIndex | [ContentDisplayOptionWrapper](https://cloudscape.design/) &#124; null | Returns an option for a given index. | index:1-based index of the option to return. |
| findOptions | Array<[ContentDisplayOptionWrapper](https://cloudscape.design/)> | Returns the top-level items in the preference list.For tables without column grouping this returns all column options.For tables with column grouping this returns the top-level entries only(which are group items). Use .findChildrenOptions() on a group item toaccess the leaf columns nested within it. | option: |
| findTextFilter | [TextFilterWrapper](../text-filter/guidelines.md) &#124; null | Returns the text filter input. | - |
| findTitle | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | Returns the title. | - | PageSizePreferenceWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findOptions | Array<[RadioButtonWrapper](../radio-button/guidelines.md)> | - | - |
| findTitle | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - | StickyColumnsPreferenceWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDescription | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findRadioGroup | [RadioGroupWrapper](../radio-group/guidelines.md) | - | - |
| findTitle | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - | VisibleContentPreferenceWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findOptions | Array<[ElementWrapper](https://cloudscape.design/)> | - | - |
| findOptionsGroups | Array<[ElementWrapper](https://cloudscape.design/)> | - | - |
| findTitle | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findToggleByIndex | [ToggleWrapper](../toggle/guidelines.md) &#124; null | Returns a content selector toggle. | groupIndex:1-based index of the content group.optionIndex:1-based index of the option to return within the group. | ContentDisplayOptionWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findChildrenOptions | Array<[ContentDisplayOptionWrapper](https://cloudscape.design/)> &#124; null | Returns all child option items nested under this item when it is a group.Returns null when this item is a leaf column (has no nested children).The children are the leaf-level ContentDisplayOptionWrappers inside the group'snested InternalList - i.e. they already carry a drag handle and visibility toggle. | option: |
| findDragHandle | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | Returns the drag handle for the option item. | - |
| findLabel | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | Returns the text label displayed in the option item. | - |
| findVisibilityToggle | [ToggleWrapper](../toggle/guidelines.md) | Returns the visibility toggle for the option item.Note that, despite its typings, this may return null for group items since groups do not have a visibility toggle. | - |
## Integration testing APIs

CollectionPreferencesWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findModal | [PreferencesModalWrapper](https://cloudscape.design/) | - | - |
| findTriggerButton | [ButtonWrapper](../button/guidelines.md) | - | - | PreferencesModalWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findCancelButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findConfirmButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findContentBefore | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findContentDensityPreference | [CheckboxWrapper](../checkbox/guidelines.md) | - | - |
| findContentDisplayPreference | [ContentDisplayPreferenceWrapper](https://cloudscape.design/) | - | - |
| findCustomPreference | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findDismissButton | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findFooter | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findPageSizePreference | [PageSizePreferenceWrapper](https://cloudscape.design/) | - | - |
| findStickyColumnsPreference | [StickyColumnsPreferenceWrapper](https://cloudscape.design/) | - | firstOrLast: |
| findStripedRowsPreference | [CheckboxWrapper](../checkbox/guidelines.md) | - | - |
| findVisibleContentPreference | [VisibleContentPreferenceWrapper](https://cloudscape.design/) | - | - |
| findWrapLinesPreference | [CheckboxWrapper](../checkbox/guidelines.md) | - | - | ContentDisplayPreferenceWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDescription | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the preference description displayed below the title. | - |
| findNoMatch | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns no match with the clear filter button. | - |
| findOptionByIndex | [ContentDisplayOptionWrapper](https://cloudscape.design/) | Returns an option for a given index. | index:1-based index of the option to return. |
| findOptions | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[ContentDisplayOptionWrapper](https://cloudscape.design/)> | Returns the top-level items in the preference list.For tables without column grouping this returns all column options.For tables with column grouping this returns the top-level entries only(which are group items). Use .findChildrenOptions() on a group item toaccess the leaf columns nested within it. | option: |
| findTextFilter | [TextFilterWrapper](../text-filter/guidelines.md) | Returns the text filter input. | - |
| findTitle | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the title. | - | PageSizePreferenceWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findOptions | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[RadioButtonWrapper](../radio-button/guidelines.md)> | - | - |
| findTitle | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - | StickyColumnsPreferenceWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDescription | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findRadioGroup | [RadioGroupWrapper](../radio-group/guidelines.md) | - | - |
| findTitle | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - | VisibleContentPreferenceWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findOptions | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[ElementWrapper](../../get-started/testing/core-classes.md)> | - | - |
| findOptionsGroups | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[ElementWrapper](../../get-started/testing/core-classes.md)> | - | - |
| findTitle | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findToggleByIndex | [ToggleWrapper](../toggle/guidelines.md) | Returns a content selector toggle. | groupIndex:1-based index of the content group.optionIndex:1-based index of the option to return within the group. | ContentDisplayOptionWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findChildrenOptions | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[ContentDisplayOptionWrapper](https://cloudscape.design/)> &#124; null | Returns all child option items nested under this item when it is a group.Returns null when this item is a leaf column (has no nested children).The children are the leaf-level ContentDisplayOptionWrappers inside the group'snested InternalList - i.e. they already carry a drag handle and visibility toggle. | option: |
| findDragHandle | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the drag handle for the option item. | - |
| findLabel | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the text label displayed in the option item. | - |
| findVisibilityToggle | [ToggleWrapper](../toggle/guidelines.md) | Returns the visibility toggle for the option item.Note that, despite its typings, this may return null for group items since groups do not have a visibility toggle. | - |
## General guidelines

### Do

- Ensure data symmetry by aligning the order of visible content options with the order in which corresponding content appears in the collection view.
- Store all the table preferences when the user leaves the page and restore them when the user comes back to the same page.
- Use wrap lines, zebra stripes, content density, sticky columns and column reordering only in [table views](../../patterns/resource-management/view/table-view.md)  .

### Don't

- Don't show the *View as*   section in the preferences if the data set does not display properly as a card collection.

## Features

- #### Overlay modal

  Collection preferences are placed inside a modal that is invoked by a button.
- #### Page size

  The user can choose how many items are shown per page. You can set the default number of items, based on how much time it takes to load the data. Users can then choose how many items are shown per page.
- #### Column display preferences (table)

  Users can choose which columns to display in a [table view](../../patterns/resource-management/view/table-view.md)  .  

  - **Column reordering **     - optional    

    - The default column order is set up from the input groups order used in the create flow. Users can reorder the columns in the column preferences list to build a customized view. Reordering is performed via [drag-and-drop](../../patterns/general/service-dashboard/configurable-dashboard.md)       , columns can be moved up or down within the list, and a drop zone indicates the new location of the dragged item. When column groups are used, reordering is scoped to within each group. The preferences panel displays columns in a hierarchical tree view, reflecting the group structure. Users can reorder and show or hide individual columns within a group, but cannot move columns between groups.
  - **Text filtering**     - optional    

    - Recommended when there are more than 12 column values in a table. When enabled, users can filter through the list of columns to more quickly access the ability to toggle individual items on or off. Note: Drag and drop to reorder is unavailable while actively filtering.
- #### Visible content preferences (cards)

  Users can choose which content to display in a [card view](../../patterns/resource-management/view/card-view.md)  .  

  The default is to show all the main properties, and hide the secondary properties. The main properties come from the input groups used in the create flow in the primary section. The secondary properties come from the inputs in the create flow, in the additional configuration expanding section.
- #### Wrap lines

  Users can choose to have long text in table cells displayed on one line and truncated, or fully displayed in multiple lines. The default is to truncate.
- #### View as - optional

  Users can choose to display the collection in different formats. For example: [table view](../../patterns/resource-management/view/table-view.md)   or [card view](../../patterns/resource-management/view/card-view.md)  .
- #### Striped rows - optional

  Striped rows add a background color to alternating table rows to assist in tracking data across a row.
- #### Sticky columns - optional

  Allows users to turn on and off sticky columns. When selected, the columns are stuck to the edge of the table when users scroll horizontally. Options include:  

  - **First column(s) **     - Sticks the first one or two visible columns to the left of the table.  For example, to reference a unique identifier when scrolling horizontally is important to users.
  - **Last column **     - Sticks the last visible column to the right of the table. For example, if the last column of the table includes summary content such as totals cost of a bill or to persist in-context actions in view.
- #### Content density (compact mode) - optional

  When checked, it toggles the table's `contentDensity`   property to display the data in a denser, more compact mode.
- #### Preference details - optional

  An area at the top of the modal which can be used to display additional information relating to the preferences. For example, use this to display how the collection preferences are stored or to notify users if their preferences cannot be stored.

## Writing guidelines

### General writing guidelines

- Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.
- Use end punctuation, except in [headers](../header/guidelines.md)   and [buttons](../button/guidelines.md)   . Don't use exclamation points.
- Use present-tense verbs and active voice.
- Don't use *please*   , *thank you*   , ellipsis ( *...*   ), ampersand ( *&*   ), *e.g.*   , *i.e.*   , or *etc.*   in writing.
- Avoid directional language.  

  - For example: use *previous*     not *above*     , use *following*     not *below*    .
- Use device-independent language.  

  - For example: use *choose*     or *select*     not *click*    .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

#### Alternative text

- The alternative text for the trigger button is automatically set to match the modal title.  

  - For example:* Preferences*
