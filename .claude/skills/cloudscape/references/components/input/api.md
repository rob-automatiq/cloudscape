# Input

```ts
import Input from '@cloudscape-design/components/input'
import type { InputProps } from '@cloudscape-design/components/input'
```

Generated from `@cloudscape-design/components@3.0.1382` `input/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

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
- **`ariaRequired?`**: `boolean`
  Specifies whether to add `aria-required` to the native control.
- **`autoComplete?`**: `boolean | string`
  Specifies whether to enable a browser's autocomplete functionality for this input.
  In some cases it might be appropriate to disable autocomplete (for example, for security-sensitive fields).
  To use it correctly, set the `name` property.
  
  You can either provide a boolean value to set the property to "on" or "off", or specify a string value
  for the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute.
- **`autoFocus?`**: `boolean`
  Indicates whether the control should be focused as
  soon as the page loads, which enables the user to
  start typing without having to manually focus the control. Don't
  use this option on pages where the control may be
  scrolled out of the viewport.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`clearAriaLabel?`**: `string` _(@i18n)_
  Adds an `aria-label` to the clear button inside the search input.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`disableBrowserAutocorrect?`**: `boolean`
  Specifies whether to disable browser autocorrect and related features.
  If you set this to `true`, it disables any native browser capabilities
  that automatically correct user input, such as `autocorrect` and
  `autocapitalize`. If you don't set it, the behavior follows the default behavior
  of the user's browser.
- **`disabled?`**: `boolean`
  Specifies if the control is disabled, which prevents the
  user from modifying the value and prevents the value from
  being included in a form submission. A disabled control can't
  receive focus.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`inlineLabelText?`**: `string`
  Adds a small label inline with the input for saving vertical space in the UI.
  
  Use this only when a visible label from a surrounding form field isn't present.
- **`inputMode?`**: `InputProps.InputMode`
  Adds a hint to the browser about the type of data a user may enter into this field.
  Some devices may render a different virtual keyboard depending on this value.
  This value may not be supported by all browsers or devices.
- **`invalid?`**: `boolean`
  Overrides the invalidation state. Usually the invalid state
  comes from the parent `FormField`component,
  however sometimes you need to override its
  state when you have more than one input within a
  single form field.
- **`name?`**: `string`
  Specifies the name of the control used in HTML forms.
- **`nativeInputAttributes?`**: `NativeAttributes<React.InputHTMLAttributes<HTMLInputElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `input` element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`placeholder?`**: `string`
  Specifies the placeholder text rendered when the value is an empty string.
- **`prefix?`**: `ReactNode`
  Use for content rendered before the editable value.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value but includes it in a form
  submission. A read-only control can receive focus.
  
  Don't use read-only inputs outside a form.
- **`spellcheck?`**: `boolean`
  Specifies the value of the `spellcheck` attribute on the native control.
  This value controls the native browser capability to check for spelling/grammar errors.
  If not set, the browser default behavior is to perform spellchecking.
  For more details, check the [spellcheck MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).
  
  Enhanced spellchecking features of your browser and/or operating system may send input values to external parties.
  Make sure it’s deactivated for fields with sensitive information to prevent
  inadvertently sending data (such as user passwords) to third parties.
- **`step?`**: `InputProps.Step`
  The step attribute is a number that specifies the granularity that the value
  must adhere to or the keyword "any". It is valid for the numeric input types,
  including the date, month, week, time, datetime-local, number and range types.
- **`style?`**: `InputProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the input's visual appearance.
  Refer to the [style](../input/guidelines.md) tab for more details.
- **`suffix?`**: `ReactNode`
  Use for content rendered after the editable value.
- **`type?`**: `InputProps.Type`
  Specifies the type of control to render.
  Inputs with a `number` type use the native element behavior, which might
  be slightly different across browsers.
- **`value`**: `string`
  Specifies the text entered into the form element.
- **`warning?`**: `boolean`
  Overrides the warning state. Usually the warning state
  comes from the parent `FormField`component,
  however sometimes you need to override its
  state when you have more than one input within a
  single form field.
  When you use it, provide additional context with
  information on the input state, and associate it
  with the input using `ariaDescribedby`.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onBlur?`**: `NonCancelableEventHandler<null>`
  Called when input focus is removed from the UI control.
- **`onChange?`**: `NonCancelableEventHandler<InputProps.ChangeDetail>`
  Called whenever a user changes the input value (by typing or pasting).
  The event `detail` contains the current value of the field.
- **`onFocus?`**: `NonCancelableEventHandler<null>`
  Called when input focus is moved to the UI control.
- **`onKeyDown?`**: `CancelableEventHandler<InputProps.KeyDetail>`
  Called when the underlying native textarea emits a `keydown` event.
  The event `detail` contains the `keyCode` and information
  about modifiers (that is, CTRL, ALT, SHIFT, META, etc.).
- **`onKeyUp?`**: `CancelableEventHandler<InputProps.KeyDetail>`
  Called when the underlying native textarea emits a `keyup` event.
  The event `detail` contains the `keyCode` and information
  about modifiers (that is, CTRL, ALT, SHIFT, META, etc.).

## Types

Supporting types from `InputProps` (verbatim):

```ts
export declare namespace InputProps {
  type Type = 'text' | 'password' | 'search' | 'number' | 'email' | 'url';
  type InputMode = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  type Step = number | 'any';
  type ChangeDetail = BaseChangeDetail;
  type KeyDetail = BaseKeyDetail;
  interface Ref {
    /**
     * Sets input focus onto the UI control.
     */
    focus(): void;
    /**
     * Selects all text in the input control.
     */
    select(): void;
  }
  interface Style {
    root?: {
      backgroundColor?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      borderColor?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      borderRadius?: string;
      borderWidth?: string;
      boxShadow?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      color?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      fontSize?: string;
      fontWeight?: string;
      paddingBlock?: string;
      paddingInline?: string;
    };
    placeholder?: {
      color?: string;
      fontSize?: string;
      fontStyle?: string;
      fontWeight?: string;
    };
  }
}
```
