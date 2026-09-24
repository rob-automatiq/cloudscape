# RadioButton

```ts
import RadioButton from '@cloudscape-design/components/radio-button'
import type { RadioButtonProps } from '@cloudscape-design/components/radio-button'
```

Generated from `@cloudscape-design/components@3.0.1382` `radio-button/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`checked`**: `boolean`
  Specifies if the component is selected.
- **`children?`**: `React.ReactNode`
  The control's label that's displayed next to the radio button. A state change occurs when a user clicks on it.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
- **`description?`**: `React.ReactNode`
  Description that appears below the label.
- **`disabled?`**: `boolean`
  Specifies if the control is disabled, which prevents the
  user from modifying the value and prevents the value from
  being included in a form submission. A disabled control can't
  receive focus.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`name`**: `string`
  Name of the group that the radio button belongs to.
- **`nativeInputAttributes?`**: `NativeAttributes<React.InputHTMLAttributes<HTMLInputElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `input` element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`readOnly?`**: `boolean`
  Specifies if the radio button is read-only, which prevents the
  user from modifying the value, but does not prevent the value from
  being included in a form submission. A read-only control is still focusable.
  
  This property should be set for either all or none of the radio buttons in a group.
- **`style?`**: `RadioButtonProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the radio button's visual appearance.
  Refer to the [style](/components/radio-button/?tabId=style) tab for more details.
- **`value?`**: `string`
  Sets the value attribute to the native control.
  If using native form submission, this value is sent to the server if the radio button is checked.
  It is never shown to the user by their user agent.
  For more details, see the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio#value).

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onSelect?`**: `NonCancelableEventHandler`
  Called when the user clicks on the radio button and it is not disabled or read-only.

## Types

Supporting types from `RadioButtonProps` (verbatim):

```ts
export declare namespace RadioButtonProps {
  interface ChangeDetail {
    checked: boolean;
  }
  interface Ref {
    /**
     * Sets input focus onto the UI control.
     */
    focus(): void;
  }
  interface Style {
    input?: {
      fill?: {
        checked?: string;
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
      stroke?: {
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
      circle?: {
        fill?: {
          checked?: string;
          disabled?: string;
          readOnly?: string;
        };
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
    label?: {
      color?: {
        checked?: string;
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
    };
    description?: {
      color?: {
        checked?: string;
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
    };
  }
}
```
