# Slider

```ts
import Slider from '@cloudscape-design/components/slider'
import type { SliderProps } from '@cloudscape-design/components/slider'
```

Generated from `@cloudscape-design/components@3.0.1382` `slider/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaDescription?`**: `string`
  Adds an aria-description for slider labels.
  
  Use when sliders have formatted reference values.
- **`ariaLabel?`**: `string`
  Adds an `aria-label` to the native control.
  
  Use this if you don't have a visible label for this control.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`disabled?`**: `boolean`
  Whether or not the slider is disabled.
- **`hideFillLine?`**: `boolean`
  Hides the colored fill line, so only the handle is visible.
- **`i18nStrings?`**: `SliderProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
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
- **`max`**: `number`
  Indicates the maximum value.
- **`min`**: `number`
  Indicates the minimum value.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value, but does not prevent the value from
  being included in a form submission. A read-only control is still focusable.
- **`referenceValues?`**: `ReadonlyArray<number>`
  Labels shown between the minimum and maximum values.
- **`step?`**: `number`
  How big the step size is.
- **`style?`**: `SliderProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the slider's visual appearance.
  Refer to the [style](/components/slider/?tabId=style) tab for more details.
- **`tickMarks?`**: `boolean`
  Show the tick marks along the slider line. Use with stepped sliders, except in extreme cases.
- **`value?`**: `number`
  Indicates the current value.
- **`valueFormatter?`**: `(value: number) => string`
  Formats the values. This will format both the labels and the tooltip.
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

- **`onChange?`**: `NonCancelableEventHandler<SliderProps.ChangeDetail>`
  Called when the user selects a value.
  The event `detail` contains the current `value`.

## Types

Supporting types from `SliderProps` (verbatim):

```ts
export declare namespace SliderProps {
  interface ChangeDetail {
    value: number;
  }
  interface I18nStrings {
    /**
      The aria value text displayed when the slider value is between two labeled values.
     */
    valueTextRange: (previousValue: string, value: number, nextValue: string) => string;
  }
  interface Style {
    track?: {
      backgroundColor?: string;
    };
    range?: {
      backgroundColor?: {
        default?: string;
        active?: string;
      };
    };
    handle?: {
      backgroundColor?: {
        default?: string;
        hover?: string;
        active?: string;
      };
      borderRadius?: string;
    };
  }
}
```
