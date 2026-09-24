# Radio button

> Source: https://cloudscape.design/components/radio-button/ (fetched 2026-09-24)

Radio buttons enable users to perform a single selection from a predefined set of options.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/radio-button)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/radio-button/index.html.json)

## Development guidelines

#### State management

The radio button component is controlled. Set the `checked` property and the `onChange` listener to store its value in the state of your application. Learn more about the [state management](../../get-started/dev-guides/state-management.md) of Cloudscape components.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

RadioButtonWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDescription | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findLabel | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findNativeInput | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLInputElement> | - | - |
## Integration testing APIs

RadioButtonWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDescription | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findLabel | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findNativeInput | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
## General guidelines

### Do

- Use radio buttons when they are visually separated or located in different parts of the UI, but still conceptually linked. Otherwise, use the [radio group](../radio-group/guidelines.md)   when possible.
- Only set as checked one radio button in the same radio group at a time.
- Set either all or none of the radio buttons in a radio group as read-only.
- When only two options are provided, use this component when a visible explanation via label and description for both options is needed. Use a [toggle](../toggle/guidelines.md)   or [checkbox](../checkbox/guidelines.md)   instead if you need to explain only the active state of a boolean option.
- If a radio button is selected and disabled, always disable the other radio buttons in the radio group.

### Don't

- Don't use for options that take immediate effect, for example to switch between light and dark mode. Use a [toggle](../toggle/guidelines.md)   instead.

## Features

- #### Label - optional

  The label of the radio button.
- #### Description - optional

  Use the description to provide a broader explanation of the label.

### States

- #### Disabled

  Use the disabled state when users cannot interact with the radio button and to prevent users from modifying the value.
- #### Read-only

  Use the read-only state when the radio button state is not to be modified by the user but they still need to view it.

## Writing guidelines

### Component-specific guidelines

#### Label

- Do not include links in the label.

#### Description - optional

- Do not include links in the description.

## Accessibility guidelines

### Component-specific guidelines

#### Alternative text

- Provide a meaningful label for the radio button, and also a description if it's necessary to fully understand the effects of choosing the option. If you don't provide a visual label next to the radio button, use the component's `id`   to associate it to another label semantically for screen reader users.

#### Labels and descriptions

- Radio button labels and descriptions are part of the clickable/focusable area of the control, so they should not contain interactive content (for example, links).

#### Semantic grouping of radio buttons

- Radio buttons that belong to the same radio group should have the same value for the `name`   attribute.
- If the radio buttons are displayed next to each other, their common DOM ancestor should be a `fieldset`   or have a value of `radiogroup`   for its `role`   attribute.
