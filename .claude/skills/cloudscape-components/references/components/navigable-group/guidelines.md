# Navigable group

> Source: https://cloudscape.design/components/navigable-group/ (fetched 2026-09-24)

Allows multiple interactive components to be grouped together under a single tab stop for keyboard navigation.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/navigable-group) If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/navigable-group/index.html.json)

## Unit testing APIs

NavigableGroupWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
## Integration testing APIs

NavigableGroupWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
## General guidelines

### Do

- Use the following components within a navigable group: [button](../button/guidelines.md)   , [button dropdown](../button-dropdown/guidelines.md)   , [toggle button](../toggle-button/guidelines.md)   , [link](../link/guidelines.md)  .
- Set an appropriate `navigationDirection`   that matches the visual orientation of the group contents.
- Use the [space between](../space-between/guidelines.md)   component to space items within the group.

### Don't

- Don't place non-Cloudscape interactive elements inside the group.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

- Wrap the contents of the group in an appropriate ARIA role, for example [toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)   or [menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)  .
- For a vertical group, set `aria-orientation="vertical"`  .
