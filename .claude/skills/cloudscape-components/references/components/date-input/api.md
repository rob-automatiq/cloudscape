# DateInput

```ts
import DateInput from '@cloudscape-design/components/date-input'
import type { DateInputProps } from '@cloudscape-design/components/date-input'
```

Generated from `@cloudscape-design/components@3.0.1382` `date-input/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

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
- **`disabled?`**: `boolean`
  Specifies if the control is disabled, which prevents the
  user from modifying the value and prevents the value from
  being included in a form submission. A disabled control can't
  receive focus.
- **`format?`**: `DateInputProps.Format`
  The format as it is displayed. It can take the following values:
  * `iso`: ISO 8601 format without time, e.g.: 2024-01-30 (or 2024-01).
  * `long-localized`: a more human-readable, localized format, e.g.: January 30, 2024 (or January, 2024).
  * `slashed`: similar to ISO 8601 but with '/' in place of '-'. e.g.: 2024/01/30 (or 2024/01).
- **`granularity?`**: `DateInputProps.Granularity`
  Specifies the granularity at which users will be able to select a date.
  Defaults to `day`.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`inputFormat?`**: `DateInputProps.InputFormat`
  Specifies the date format to use when the format is 'long-localized' and editing the date.
  The format of the input as it is being interacted with. It can take the following values:
  * `iso`: ISO 8601 format without time, e.g.: 2024-01-30 (or 2024-01).
  * `slashed`: similar to ISO 8601 but with '/' in place of '-'. e.g.: 2024/01/30 (or 2024/01).
- **`invalid?`**: `boolean`
  Overrides the invalidation state. Usually the invalid state
  comes from the parent `FormField`component,
  however sometimes you need to override its
  state when you have more than one input within a
  single form field.
- **`locale?`**: `string`
  Specifies the locale to use to render month names and determine the starting day of the week.
  If you don't provide this, the locale is determined by the page and browser locales.
  Supported values and formats are listed in the [JavaScript Intl API specification](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
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
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value but includes it in a form
  submission. A read-only control can receive focus.
  
  Don't use read-only inputs outside a form.
- **`value`**: `string`
  The current input value, in YYYY-MM-DD format.
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

## Types

Supporting types from `DateInputProps` (verbatim):

```ts
export declare namespace DateInputProps {
  type Ref = InputProps.Ref;
  type Format = DateFormat;
  type InputFormat = EditableDateFormat;
  type Granularity = DateGranularity;
}
```
