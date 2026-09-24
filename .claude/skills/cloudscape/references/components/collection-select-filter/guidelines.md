# Collection select filter

> Source: https://cloudscape.design/components/collection-select-filter/ (fetched 2026-09-24)

A select filter helps users find specific items in a collection by choosing one or two properties.

 [Get design library](../../get-started/for-designers/design-resources.md) [View in demo](https://cloudscape.design/examples/react/table-select-filter.html)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/collection-select-filter/index.html.json)

## Preview

![Collection select filter desktop image](https://cloudscape.design/__images/yvlrib0vb3vb/3rHKQTD4b3Q06I6oFUIeAJ/89df524700f32262b425b520bf395095/automated--example--table-select-filter-external-light-desktop--component.png.png)![Collection select filter desktop image](https://cloudscape.design/__images/yvlrib0vb3vb/3DcCeJKzs2N3Hjlo1xK0Ef/e37ef22ca531dfbde71e005935aebd14/automated--example--table-select-filter-external-dark-desktop--component.png.png)![Collection select filter mobile image](https://cloudscape.design/__images/yvlrib0vb3vb/1kD0faPpNBJoFmRhf0Jwmn/4e681bfad4006f385ee904a585dec2a5/automated--example--table-select-filter-external-light-mobile--component.png.png)![Collection select filter mobile image](https://cloudscape.design/__images/yvlrib0vb3vb/4d0zcNV2BerC3i3SumvEVS/e229a7622a1cc4df5d851bd6bd7fe47f/automated--example--table-select-filter-external-dark-mobile--component.png.png)
## Features

- #### Properties

  Display the most pertinent properties that users need to find an item in a collection. Most commonly, those properties refer to the column headers for [table view](../../patterns/resource-management/view/table-view.md)   and content labels for a [cards view](../../patterns/resource-management/view/card-view.md)  .  

  We don't recommend using more than two collection select filters. Used in combination, the two filters behave as an And operator.
- #### Values

  - Using the [select filter](../select/guidelines.md)     , list all finite values that correspond to the property.    

    - For example: **Property: Status**       ; Values: Error, Loading, Pending, Stopped, and Success.
  - Use Any {property} as the default pre-selected option. It takes into account any values that correspond to that property. The collection isn't filtered and displays all items.
  - Follow the guidelines for the [select](../select/guidelines.md)     component.

### Collection view

- #### Displaying results

  The collection is filtered as soon as the user selects a value from a select filter or enters text into the accompanying [text filter](../text-filter/guidelines.md)   . Only items that match the conditions of the values are displayed. For example: *Engine*   set to *Aurora*   and *Status*   set to *available*   will show the available resources that are running the Aurora engine*.*
- #### Loading state

  The state of the collection of items, such as [table](../table/guidelines.md)   or [cards](../cards/guidelines.md)   , while the filtered dataset is being loaded. Follow the guidelines for [loading state](../../patterns/general/loading-and-refreshing.md)   for collections.
- #### No match state

  The state of the collection of items, such as [table](../table/guidelines.md)   or [cards](../cards/guidelines.md)   , after a user applies a filter that does not return any results. In other words, the state when there are no items that match the filters applied. Follow the guidelines for [empty states](../../patterns/general/empty-states.md)  .

## General guidelines

### Do

- Always use the filter functionality on the full collection of resources, not just on visible or loaded resources.
- Always display the number of matched resources. In table and card views, the count is shown next to the title in the table header.
- Use a select ﬁlter for commonly used properties and values.
- Always provide a visible label for every select filter to improve accessibility. Labels are optional for open text filters when a search icon is included in the control.
- After a user completes a filter action, display the number of results next to the select filters.
- Use a select filter if users need a maximum of two properties to find a specific item. If more than two are required, use a property filter instead.
- If a select filter has two properties, the operator is always *and*   . If you need more operators to combine properties, use a property filter instead.

### Don't

- Don't use ﬁltering if the majority of your users operate on small collections of resources (fewer than ﬁve resources).
- Don't use a select ﬁlter for collections that have a very large set of values.
- Don't use a select ﬁlter if users need to select multiple values that correspond to one property. Use a property filter instead.
- Don't change the control for the selection mechanism. Always use a [select](../select/guidelines.md)   component.
- Don't change table column headers after a user has completed a filter action.

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

### Component-specific guidelines

#### Placeholder text

- Follow the writing guidelines for [placeholder text](../input/guidelines.md)  .
- Don't use terminal punctuation.

#### Label

- Follow the writing guidelines for [select](../select/guidelines.md)  .

#### Select

- Follow the writing guidelines for [select](../select/guidelines.md)  .

#### Results counter

- Follow the writing guidelines for [table resource counter](../table/guidelines.md)  .

#### Loading state

- Follow the writing guidelines for [loading and refreshing](../../patterns/general/loading-and-refreshing.md)  .

#### No match state

- Follow the guidelines for [empty states](../../patterns/general/empty-states.md)  .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

#### Alternative text

- Follow the accessibility guidelines for [select](../select/guidelines.md)  .

#### Label

- Provide a visible label using `inlineLabelText`   property for filter controls to specify the parameter the dataset is filtered by.  

  - For example: *Filter engine*     , or *Filter class*    .
