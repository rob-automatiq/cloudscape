# Textarea

```ts
import Textarea from '@cloudscape-design/components/textarea'
import type { TextareaProps } from '@cloudscape-design/components/textarea'
```

Generated from `@cloudscape-design/components@3.0.1382` `textarea/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

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
- **`disableBrowserSpellcheck?`**: `boolean` _(@deprecated Use the `spellcheck` property instead.)_
  Specifies whether to disable browser spellcheck feature.
  If you set this to `true`, it disables native browser capability
  that checks for spelling/grammar errors.
  If you don't set it, the behavior follows the default behavior
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
- **`invalid?`**: `boolean`
  Overrides the invalidation state. Usually the invalid state
  comes from the parent `FormField`component,
  however sometimes you need to override its
  state when you have more than one input within a
  single form field.
- **`name?`**: `string`
  Specifies the name of the control used in HTML forms.
- **`nativeTextareaAttributes?`**: `NativeAttributes<React.TextareaHTMLAttributes<HTMLTextAreaElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `textarea` element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`placeholder?`**: `string`
  Specifies the placeholder text rendered when the value is an empty string.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value but includes it in a form
  submission. A read-only control can receive focus.
  
  Don't use read-only inputs outside a form.
- **`resize?`**: `TextareaProps.Resize`
  Specifies the directions in which the user can resize the textarea:
  
  * `both` (default) - The user can change both the width and the height.
  * `vertical` - The user can only change the height. Use this when the textarea
    is next to other content that a width change would disrupt.
  * `horizontal` - The user can only change the width.
  * `none` - The user can't resize the textarea. Longer content scrolls instead.
    Consider using the `rows` property to make the initial height fit the expected content.
- **`rows?`**: `number`
  Specifies the number of lines of text to set the height to.
- **`spellcheck?`**: `boolean`
  Specifies the value of the `spellcheck` attribute on the native control.
  This value controls the native browser capability to check for spelling/grammar errors.
  If not set, the browser default behavior is to perform spellchecking.
  For more details, check the [spellcheck MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).
  
  Enhanced spellchecking features of your browser and/or operating system may send input values to external parties.
  Make sure it’s deactivated for fields with sensitive information to prevent
  inadvertently sending data (such as user passwords) to third parties.
- **`style?`**: `TextareaProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the textarea's visual appearance.
  Refer to the [style](/components/textarea/?tabId=style) tab for more details.
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

Supporting types from `TextareaProps` (verbatim):

```ts
export declare namespace TextareaProps {
  type KeyDetail = BaseKeyDetail;
  type Resize = 'both' | 'horizontal' | 'vertical' | 'none';
  interface ChangeDetail {
    /**
     * The new value of this textarea.
     */
    value: string;
  }
  interface Ref {
    /**
     * Sets input focus on the textarea control.
     */
    focus(): void;
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
