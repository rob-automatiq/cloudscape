# RadioGroup

```ts
import RadioGroup from '@cloudscape-design/components/radio-group'
import type { RadioGroupProps } from '@cloudscape-design/components/radio-group'
```

Generated from `@cloudscape-design/components@3.0.1382` `radio-group/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaControls?`**: `string`
  Adds `aria-controls` attribute to the radio group.
  If the radio group controls any secondary content (for example, another form field), use this to provide an ID referring to the secondary content.
- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaLabel?`**: `string`
  Adds `aria-label` to the group. If you are using this form element within a form field,
  don't set this property because the form field component automatically sets the correct labels to make the component accessible.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`ariaRequired?`**: `boolean`
  Adds `aria-required` to the group.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string` _(@deprecated Has no effect.)_
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`direction?`**: `'horizontal' | 'vertical'`
  Defines the direction in which the radio buttons are laid out.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`items?`**: `ReadonlyArray<RadioGroupProps.RadioButtonDefinition>`
  Specifies an array of radio buttons to display. Each of these objects have the following properties:
  
  - `value` (string) - Sets the value of the radio button. Assigned to the radio group when a user selects the radio button.
  - `label` (ReactNode) - Specifies a label for the radio button.
  - `description` (ReactNode) - (Optional) Specifies descriptive text that appears below the label.
  - `disabled` (boolean) - (Optional) Determines whether the radio button is disabled, which prevents the user from selecting it.
  - `controlId` (string) - (Optional) Sets the ID of the internal input. You can use it to relate a label element's `for` attribute to this control.
         In general it's not recommended to set this because the ID is automatically set by the radio group component.
- **`name?`**: `string`
  Specify a custom name for the radio buttons. If not provided, the radio group generates a random name.
- **`readOnly?`**: `boolean`
  Specifies if the whole group is read-only, which prevents the
  user from modifying the value, but does not prevent the value from
  being included in a form submission. A read-only control is still focusable.
- **`style?`**: `RadioGroupProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the radio group's visual appearance.
  Refer to the [style](/components/radio-group/?tabId=style) tab for more details.
- **`value`**: `string | null`
  Sets the value of the selected radio button.
  If you want to clear the selection, use `null`.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<RadioGroupProps.ChangeDetail>`
  Called when the user selects a different radio button. The event `detail` contains the current `value`.

## Types

Supporting types from `RadioGroupProps` (verbatim):

```ts
export declare namespace RadioGroupProps {
  interface RadioButtonDefinition {
    value: string;
    label: React.ReactNode;
    description?: React.ReactNode;
    disabled?: boolean;
    controlId?: string;
  }
  interface ChangeDetail {
    value: string;
  }
  interface Ref {
    /**
     * Sets input focus onto the UI control.
     */
    focus(): void;
  }
  type Style = RadioButtonProps.Style;
}
```
