# Items palette

> Source: https://cloudscape.design/components/items-palette/ (fetched 2026-09-24)

Provides the ability to add board items to a board layout when combined with discreet split panel.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/board-components/tree/main/src/items-palette) [Configurable dashboard demo](https://cloudscape.design/examples/react/configurable-dashboard.html)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/items-palette/index.html.json)

## Development guidelines

### Installing board components

This component comes from the new `@cloudscape-design/board-components` NPM module. Make sure to add this module to your dependencies.

#### Usage

This component does not have its own state. Use `onItemsChange` handler on the [board](../board/guidelines.md) component to handle added items from items palette to the main board

This component is a part of configurable dashboard pattern. For more details on the expected usage, see the [pattern article](../../patterns/general/service-dashboard/configurable-dashboard.md).

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

ItemsPaletteWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findItemById | [PaletteItemWrapper](https://cloudscape.design/) &#124; null | - | itemId: |
| findItems | Array<[PaletteItemWrapper](https://cloudscape.design/)> | - | - | PaletteItemWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDragHandle | [ComponentWrapper](https://cloudscape.design/)<HTMLElement> | - | - |
## Integration testing APIs

ItemsPaletteWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findItemById | [PaletteItemWrapper](https://cloudscape.design/) | - | itemId: |
| findItems | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[PaletteItemWrapper](https://cloudscape.design/)> | - | - | PaletteItemWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDragHandle | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
## General guidelines

### Do

- Include the item palette in the discreet split panel.

## Features

The item palette is placed within the [discreet split panel](../split-panel/guidelines.md) to provide the ability for users to add items to a [board layout](../board/guidelines.md).

- #### Content area

  The content area houses palette items that can be added into the board layout. These provide users the details of the board item and the ability to drag it onto the board. Follow the guidelines for [board items](../board-item/guidelines.md)  .

### States

- #### Empty state

  A palette's empty state occurs when there are no board items available. Include actions to trigger the creation or processes to make items available. For example, a button that allows users to create a board item.  

  Follow the guidelines for [empty states](../../patterns/general/empty-states.md)  .
- #### Error state

  When a problem occurs fetching items show an error alert.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

#### Alternative text

- Set all of `liveAnnouncement*`   values in `i18nStrings`   object to provide texts for announcing reorder and resize interactions. Board item movements will be announced using values from this property.
- Provide `i18nStrings.navigationAriaLabel`   and `i18nStrings.navigationItemAriaLabel`   to annotate keyboard navigation helper elements.
