# Divider

> Source: https://cloudscape.design/components/divider/ (fetched 2026-09-24)

A divider to visually separate content.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/divider) If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/divider/index.html.json)

## Unit testing APIs

DividerWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findLabel | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns the label element, or null if no label is set. | - |
## Integration testing APIs

DividerWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findLabel | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the label element, or null if no label is set. | - |
## General guidelines

### Do

- Use the divider to visually separate distinct blocks of content.

### Don't

- Don't use divider to separate content that is already visually separate, for example two [containers](../container/guidelines.md)
- Don't use divider to separate equal width columns. Use [column layout](../column-layout/guidelines.md)   instead.
- Don't use divider for list items. Use the [list component](../list/guidelines.md)   instead.

## Features

- #### Orientation

  Dividers can be horizontal or vertical.
- #### Label - optional

  A horizontal divider can include a short text label centered between the two lines. Use a label when the relationship between the separated content needs a descriptor. For example, "Or" between two sign-in options.  

  Vertical dividers don't support labels.

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
