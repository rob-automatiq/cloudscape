# List

> Source: https://cloudscape.design/components/list/ (fetched 2026-09-24)

A list is a group of consecutive items displayed one below the other.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/list) If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/list/index.html.json)

## Unit testing examples

Selecting list
```
import { render } from '@testing-library/react';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import List from '@cloudscape-design/components/list';

describe('<List />', () => {
  it('renders the list component', () => {
    const { container } = render(<List />);
    const wrapper = createWrapper(container);

    expect(wrapper.findList()).toBeTruthy();
  });

});
```

## Unit testing APIs

ListWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findItemById | [ListItemWrapper](https://cloudscape.design/) &#124; null | Returns an item for a given id. | id: |
| findItemByIndex | [ListItemWrapper](https://cloudscape.design/) &#124; null | Returns an item for a given index. | index:1-based index of the item to return. |
| findItems | Array<[ListItemWrapper](https://cloudscape.design/)> | Returns all list items. | - | ListItemWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findActions | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findDragHandle | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findIcon | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findSecondaryContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
## Integration testing APIs

ListWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findItemById | [ListItemWrapper](https://cloudscape.design/) | Returns an item for a given id. | id: |
| findItemByIndex | [ListItemWrapper](https://cloudscape.design/) | Returns an item for a given index. | index:1-based index of the item to return. |
| findItems | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[ListItemWrapper](https://cloudscape.design/)> | Returns all list items. | - | ListItemWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findActions | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findDragHandle | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findIcon | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findSecondaryContent | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
## General guidelines

### Do

- Use a list to display two or more items, or groups of items, vertically.
- When adding multiple actions, use [button group](../button-group/guidelines.md)  .
- When each list item contains a link, use [secondary links](../link/guidelines.md)  .
- When not all list items are links, use [primary link](../link/guidelines.md)  .

### Don't

- Don't use traditional bulleted and numbered lists as the main content in the list component. If you need bulleted or numbered lists, use standard HTML list syntax with <ul> or <ol> within the [text content](../text-content/guidelines.md)   component.
- Don't use a list to display multiple columns of sortable data that users need to compare. Use a [table](../table/guidelines.md)   instead.

## Features

- #### Variant

  - **Normal**    
    The default structured list with slots and content areas.
  - **Sortable **    
    A normal list with the ability to sort enabled via [drag-and-drop](../../patterns/general/drag-and-drop.md)    .
- #### Content

  The area for main list item content. Common content types are:  

  - [Link](../link/guidelines.md)     to display a succinct, interactive title for each list item.
  - [Text content](../text-content/guidelines.md)     to display a non-interactive heading in a list item.
- #### Secondary content - optional

  The area for supplementary content below the main content area. Common content types are:  

  - [Text content](../text-content/guidelines.md)     , for writing a description or supporting content associated with the main content of a list.
- #### Icon - optional

  Can be used to show an action or an [icon](../../foundation/visual-foundation/iconography.md)   to visually support the meaning of each list item.
- #### Actions - optional

  Secondary content can be used to show an action or set of actions, supporting data like timestamps, tags, or brief details of the content.

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
