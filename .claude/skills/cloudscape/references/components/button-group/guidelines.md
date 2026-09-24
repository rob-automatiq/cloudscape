# Button group

> Source: https://cloudscape.design/components/button-group/ (fetched 2026-09-24)

Enable users to perform an action from a group of buttons.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/button-group) If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/button-group/index.html.json)

## Unit testing APIs

ButtonGroupWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findButtonById | [ButtonWrapper](../button/guidelines.md) &#124; null | Finds a button item by its id. | id: |
| findCopyToClipboardById | [ButtonWrapper](../button/guidelines.md) &#124; null | Finds a copy-to-clipboard item by its id. | id: |
| findFileInputById | [FileInputWrapper](../file-input/guidelines.md) &#124; null | Finds a file input item by its id. | id: |
| findItems | Array<[ElementWrapper](https://cloudscape.design/)> | Finds all button and menu items. | - |
| findMenuById | [ButtonDropdownWrapper](../button-dropdown/guidelines.md) &#124; null | Finds a menu item by its id. | id: |
| findToggleButtonById | [ToggleButtonWrapper](../toggle-button/guidelines.md) &#124; null | Finds a toggle button item by its id. | id: |
| findTooltip | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Finds the currently opened tooltip. | - |
## Integration testing APIs

ButtonGroupWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findButtonById | [ButtonWrapper](../button/guidelines.md) | Finds a button item by its id. | id: |
| findCopyToClipboardById | [ButtonWrapper](../button/guidelines.md) | Finds a copy-to-clipboard item by its id. | id: |
| findFileInputById | [FileInputWrapper](../file-input/guidelines.md) | Finds a file input item by its id. | id: |
| findItems | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[ElementWrapper](../../get-started/testing/core-classes.md)> | Finds all button and menu items. | - |
| findMenuById | [ButtonDropdownWrapper](../button-dropdown/guidelines.md) | Finds a menu item by its id. | id: |
| findToggleButtonById | [ToggleButtonWrapper](../toggle-button/guidelines.md) | Finds a toggle button item by its id. | id: |
| findTooltip | [ElementWrapper](../../get-started/testing/core-classes.md) | Finds the currently opened tooltip. | - |
## General guidelines

### Do

- Display buttons for frequently performed actions as standalone items in the button group. Move other actions to the overflow menu.
- Group related actions within the button group. This helps users distinguish between actions that are related to each other and standalone.
- Use button group component in the [generative AI chat bubbles](../../gen-ai/patterns/generative-ai-chat.md)  .

### Don't

- Avoid adding arbitrary information in the action popovers. Use them to display success and error states only.
- Avoid placing actions that require feedback via a popover in the overflow menu. Instead display these in the visible button group. For example, copy to clipboard action should be visible and not placed in the overflow menu.

## Features

- #### Icon buttons

  Display [icon buttons](../button/guidelines.md)   to enable users to perform specific actions. The icons used for buttons should be easy to understand without visible labels.
- #### Toggle buttons

  Display [toggle buttons](../toggle-button/guidelines.md)   to immediately trigger binary, mutually exclusive actions and persist the action performed. For example, use a toggle button for thumbs up and down feedback actions.
- #### Overflow menu

  Display additional actions in an [icon button dropdown](../button-dropdown/guidelines.md)   . Actions in the dropdown do not support feedback via a popover.
- #### Tooltip

  Display the label associated with the action of a visible icon button in the tooltip.
- #### Popover - optional

  Display feedback associated with the action performed by the user in a popover using [status indicators](../status-indicator/guidelines.md)   . For example, successfully copied content to the clipboard.
- #### Grouped buttons - optional

  Within the button group component, buttons for actions that are related to each other can be grouped. These groups are displayed with dividers to distinguish them from other actions.
- #### Disabled reason - optional

  You can use a tooltip with disabled icon buttons, toggle buttons or icon button dropdown to explain why the action is unavailable.

### States

- #### Disabled

  Display a button in [disabled state](../../patterns/general/disabled-and-read-only-states.md)   to prevent users from being able to act on it.
- #### Loading

  Display the button in loading state to inform users that the action is in-progress.

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

#### Button labels

Follow the writing guidelines for [buttons](../button/guidelines.md).

#### Popover

Follow the writing guidelines for [popover](../popover/guidelines.md).

#### Toggle button

Follow the writing guidelines for [toggle button.](../toggle-button/guidelines.md)

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

- Provide `text`   for every button, group, and dropdown in the button group to ensure all elements have an accessible name.
