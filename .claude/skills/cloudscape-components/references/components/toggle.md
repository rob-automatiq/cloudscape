# Toggle

```ts
import Toggle from '@cloudscape-design/components/toggle'
import type { ToggleProps } from '@cloudscape-design/components/toggle'
```

Generated from `@cloudscape-design/components@3.0.1382` `toggle/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaControls?`**: `string`
  Adds `aria-controls` attribute to the component.
  If the component controls any secondary content (for example, another form field), use this to provide an ID referring to the secondary content.
- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaLabel?`**: `string`
  Adds an `aria-label` to the native control.
  
  Use this if you don't have a visible label for this control.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`checked`**: `boolean`
  Specifies if the component is selected.
- **`children?`**: `React.ReactNode`
  The control's label that's displayed next to the toggle. Clicking this will invoke a state change.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. By default, it uses an automatically generated ID.
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
- **`name?`**: `string`
  Specifies the name of the control used in HTML forms.
- **`nativeInputAttributes?`**: `NativeAttributes<React.InputHTMLAttributes<HTMLInputElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `input` element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value. Should be used only inside forms.
  A read-only control is still focusable.
  If both `readOnly` and `disabled` are set, `disabled` takes precedence.
- **`style?`**: `ToggleProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the toggle's visual appearance.
  Refer to the [style](/components/toggle/?tabId=style) tab for more details.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onBlur?`**: `NonCancelableEventHandler`
  Called when input focus is removed from the UI control.
- **`onChange?`**: `NonCancelableEventHandler<ToggleProps.ChangeDetail>`
- **`onFocus?`**: `NonCancelableEventHandler`
  Called when input focus is moved to the UI control.

## Types

Supporting types from `ToggleProps` (verbatim):

```ts
export declare namespace ToggleProps {
  interface Ref {
    /**
     * Sets input focus onto the UI control.
     */
    focus(): void;
  }
  interface ChangeDetail {
    checked: boolean;
  }
  interface Style {
    input: {
      background?: {
        checked?: string;
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
      handle?: {
        background?: {
          checked?: string;
          default?: string;
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
  }
}
```
