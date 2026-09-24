# Dropdown

> Source: https://cloudscape.design/components/dropdown/ (fetched 2026-09-24)

Provides an overlay for displaying contextual content relative to a trigger element.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/dropdown)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/dropdown/index.html.json)

## Development guidelines

The Dropdown component provides a flexible container for displaying contextual content relative to a trigger element. It can be used for patterns such as option menus and dialogs. The implementer is responsible for providing appropriate keyboard navigation and ARIA roles and attributes. See the [accessibility guidelines](guidelines.md) for more information.

The dropdown component is controlled. Manage the dropdown's visibility state explicitly using the `open` prop to open or close the Dropdown. Learn more about [state management](../../get-started/dev-guides/state-management.md) of Core components.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

DropdownWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findOpenDropdown | [DropdownContentWrapper](https://cloudscape.design/) &#124; null | Returns the open dropdown wrapper, or null if the dropdown is closed. | options:* expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag. |
| findTrigger | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | Returns the trigger element. | - |
| isOpen | boolean | Returns whether the dropdown is open. | options:* expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag. | DropdownContentWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns the dropdown content. | - |
| findFooter | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns the dropdown footer. | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns the dropdown header. | - |
## Integration testing APIs

DropdownWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findOpenDropdown | [DropdownContentWrapper](https://cloudscape.design/) &#124; null | Returns the open dropdown wrapper, or null if the dropdown is closed. | options:* expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag. |
| findTrigger | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the trigger element. | - |
| isOpen | boolean | Returns whether the dropdown is open. | options:* expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag. | DropdownContentWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the dropdown content. | - |
| findFooter | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the dropdown footer. | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the dropdown header. | - |
## General guidelines

### Do

- button dropdown
- select
- multiselect
- date picker
- date ranger picker

## Features

- #### Trigger

  Interactive element that determines how the dropdown content is positioned relative to it.
- #### Content

  Content that is displayed when the dropdown is open.
- #### Header - optional

  Content that is displayed at the top of the dropdown. Remains visible when the dropdown content is scrolled.
- #### Footer - optional

  Content that is displayed at the bottom of the dropdown. Remains visible when the dropdown content is scrolled.
- #### Sizing - optional

  The dropdown width can be set to a fixed value or constrained using minimum and maximum limits.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

### Trigger

The trigger element must be focusable and operable with both keyboard and pointer. It should expose the correct ARIA state and relationship to the dropdown.

**Example:**

```
<Button
  onClick={() => setIsOpen(!isOpen)}
  ariaExpanded={isOpen}
  ariaHaspopup="menu"
>
  Actions
</Button>
```

### Dropdown content requirements

The dropdown content must have an accessible name and the correct semantic role. The most common roles are `menu` for a list of actions, `listbox` for a set of selectable options, and `dialog` for complex content that requires user interaction.

Required props:

- `ariaRole`   : defines the type of popup ( `menu`   , `listbox`   , or `dialog`   ).
- `ariaLabelledby`   or `ariaLabelledby`   : provides the accessible name of the dropdown.

### References

For detailed interaction and accessibility patterns, see the WAI‑ARIA Authoring Practices:

- [https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [https://www.w3.org/WAI/ARIA/apg/patterns/listbox/](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
