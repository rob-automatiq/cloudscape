# Attribute editor

> Source: https://cloudscape.design/components/attribute-editor/ (fetched 2026-09-24)

With the attribute editor, users can create, edit, and delete attributes.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/attribute-editor)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/attribute-editor/index.html.json)

## Development guidelines

### Labels

In attribute editor, when displayed on desktop screens, labels in rows below the first one are rendered and placed off-screen. Info links are not rendered off-screen so that they cannot be focused by keyboard navigation. This helps to keep visuals clean as well as providing labels for accessibility purposes.

### State management

The attribute editor component is controlled. Set the `items` property and the `onAdd` and `onRemove` listeners to store its value in the state of your application. Learn more about the [state management](../../get-started/dev-guides/state-management.md) of components.

[Learn more](../../get-started/dev-guides/state-management.md)

### Performance

In order to effectively use the attribute editor, carefully consider the context in which the component is used. If it is used within a functional component, take care to memo the correct properties to avoid unnecessary re-renders caused by control components. Refer to the code snippet below for a performant example.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

AttributeEditorWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findAddButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findAdditionalInfo | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findEmptySlot | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findRow | [AttributeEditorRowWrapper](https://cloudscape.design/) &#124; null | Returns a row for a given index. | row:1-based row index |
| findRows | Array<[AttributeEditorRowWrapper](https://cloudscape.design/)> | Returns all rows.To find a specific row use the findRow(n) function as chaining findRows().get(n) can return unexpected results. | - | AttributeEditorRowWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findCustomAction | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findField | [FormFieldWrapper](../form-field/guidelines.md) &#124; null | Returns a field for a given index | column:1-based column index |
| findFields | Array<[FormFieldWrapper](../form-field/guidelines.md)> | Returns all fields. Fields are supplied in the definition property of the component. | - |
| findRemoveButton | [ButtonWrapper](../button/guidelines.md) &#124; null | - | - |
## Integration testing APIs

AttributeEditorWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findAddButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findAdditionalInfo | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findEmptySlot | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findRow | [AttributeEditorRowWrapper](https://cloudscape.design/) | Returns a row for a given index. | row:1-based row index |
| findRows | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[AttributeEditorRowWrapper](https://cloudscape.design/)> | Returns all rows.To find a specific row use the findRow(n) function as chaining findRows().get(n) can return unexpected results. | - | AttributeEditorRowWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findCustomAction | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findField | [FormFieldWrapper](../form-field/guidelines.md) | Returns a field for a given index | column:1-based column index |
| findFields | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[FormFieldWrapper](../form-field/guidelines.md)> | Returns all fields. Fields are supplied in the definition property of the component. | - |
| findRemoveButton | [ButtonWrapper](../button/guidelines.md) | - | - |
## General guidelines

### Do

- Adding and removing an attribute row should always be the result of a user action. Always provide buttons for these actions.
- Use attribute editor only in create or edit flows.
- When disabling the *Add*   button, always use additional information to  communicate the reason for the button to be disabled.
- Always provide a label for each attribute definition. Labels are used as accessible names for screen readers and provide visible context.
- Always provide a mechanism to unhide the *Remove*   button.

### Don't

- Don't use *Save*   or *Cancel*   buttons in the attribute editor for creating or editing items. Use these buttons only for the overall [create](../../patterns/resource-management/create.md)   or [edit](../../patterns/resource-management/edit.md)   flow.
- Don't use additional information to show generic constraints or tips. Instead, use the [help panel](../help-panel/guidelines.md)   for this information.

## Features

- #### Defining attributes

  Users can specify up to six attributes per row. Each attribute is described by a label.
- #### Labels

  Attribute labels are visible or hidden depending on the size of the container:  

  - When the attribute editor is in a large container, labels are hidden after the first row.
  - When the attribute editor is in a small container, labels are visible on every control so that context isn't only supported by placeholder text.

  Follow the guidelines for [form field](../form-field/guidelines.md)   labels.
- #### Info link - optional

  Use the info link inform your users about the specific rules and constraints that are applied to keys and values for your application. Follow the guidelines for [info link](../link/guidelines.md)  .
- #### Controls

  You can edit attribute values using all standard controls including, [input](../input/guidelines.md)   , [autosuggest](../autosuggest/guidelines.md)   , [select](../select/guidelines.md)   , [multiselect](../multiselect/guidelines.md)   , [date picker](../date-picker/guidelines.md)   , [button](../button/guidelines.md)   , [radio group](../radio-group/guidelines.md)   , and others. By default, controls have columns of equal widths. More complex layouts can be achieved by defining custom widths for each control.
- #### Placeholder

  Placeholder text helps users understand what should be entered in a field. It provides additional information for controls when the label is no longer visible. For example: Enter key
- #### Adding attribute rows

  By using the *Add*** **   button, users can add as many attribute rows as they need.
- #### Removing attribute rows

  Users can remove attribute rows with the *Remove*   button. When all of the rows are removed, the attribute editor is in an empty state.  

  The *Remove*   button can be hidden, preventing users from removing rows.  

  Make sure to include a mechanism to unhide the *Remove*   button.
- #### Constraint text - optional

  Constraint text is a line of text explaining the requirements and constraints of the value control.  

  - Constraints can change based on the user's selection of the key control. Place constraint text below the value control. Follow the constraint guidelines in [form field](../form-field/guidelines.md)    .
  - If the same constraints apply to all value controls, place constraint text below the value control in last row.
- #### Additional information - optional

  - Use the additional information text to specify the number of attributes that can be added before reaching a limit. This text is displayed below the Add button.
  - When the attribute limit is reached, make the Add button inactive.
  - When the attribute limit is exceeded, disable the Add button and display a message explaining the type of issue that occurred.
- #### Validation

  Validation happens per field. Follow the guidelines for [validation](../../patterns/general/errors/validation.md)  .
- #### Empty state

  An empty state is the state of the attribute editor when all rows are removed.  

  When a users initiates a [creation flow](../../patterns/resource-management/create.md)   or an [editing flow](../../patterns/resource-management/edit.md)   , don't display an empty state by default. Instead, display the first attribute row. This prevents an additional step for the user.
- #### Row actions

  When additional in-context actions are needed (for example duplicate, move up, move down), use a [button-dropdown with main action](../button-dropdown/guidelines.md)   . When reducing visual noise and optimizing content density is a priority, use the [icon button dropdown .](../button-dropdown/guidelines.md)

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

- Use complete sentences with periods, where possible. If space is limited, you can use a sentence fragment without a period.
- When providing information on the number of available attributes to add use the format: *You can add up to \[number\] more \[object(s)\].*  

  - For example:    

    - *You can add up to 30 more headers.*
    - *You can add up to 1 more header.*
- If no attributes have been added, use the format: *You can add up to \[number\] \[object(s)\].*  

  - For example: *You can add up to 50 headers.*
- When the limit for attributes is reached, use the format: *You have reached the limit of \[number\] \[object(s)\].*  

  - For example: *You've reached the limit of 50 headers.*

#### Labels

- Follow the writing guidelines for [form field label](../form-field/guidelines.md)  .

#### Info links

- Follow the writing guidelines for [info links](../link/guidelines.md)  .

#### Button

- For button labels, use one of two formats:  

  - [Verb][object] For example: *Add new header*
  - [Verb] For example: *Remove*
- Follow the writing guidelines for [button](../button/guidelines.md)  .

#### Removing attribute rows

- When a row is marked for removal, inform the users about the consequences of this action. For example: *After you save changes, this header is removed.*

#### Placeholder text

- Follow the writing guidelines for [placeholder text](../input/guidelines.md)  .

#### Autosuggest

- Follow the writing guidelines for [autosuggest](../autosuggest/guidelines.md)  .

#### Select

- Follow the writing guidelines for [select](../select/guidelines.md)  .

#### Empty state

- Follow the writing guidelines for [empty states](../../patterns/general/empty-states.md)  .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

- **When "Add new item" is activated**  
  Set focus into the first newly created field.
- **When "Remove" is activated**  
  Set focus on the next attribute input in the list, or the last one if there is only one remaining. If the user has just removed the last item, set focus onto the "Add new item" button.
- **When using custom row actions**  
  Set the focus to an appropriate target after an action is taken. For example, for a "Move down" action in a button dropdown, set the focus onto the button dropdown for the moved item in its new position. For [button dropdown](../button-dropdown/guidelines.md)   with a main action, choose between `focus`   to focus the main action or `focusDropdownTrigger`   to focus the dropdown depending on where the action was triggered from.
