# TextFilter

```ts
import TextFilter from '@cloudscape-design/components/text-filter'
import type { TextFilterProps } from '@cloudscape-design/components/text-filter'
```

Generated from `@cloudscape-design/components@3.0.1382` `text-filter/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
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
- **`countText?`**: `string`
  Accepts a human-readable, localized string that indicates the number of results. For example, "1 match" or "165 matches."
  If the total number of results is unknown, also include an indication that there may be more results than
  the number listed. For example, "25+ matches."
  
  The count text is only displayed when `filteringText` isn't empty.
  When the `countText` or `filteringText` changes, it will be announced to assistive technologies.
- **`disableBrowserAutocorrect?`**: `boolean`
  Specifies whether to disable browser autocorrect and related features.
  If you set this to `true`, it disables any native browser capabilities
  that automatically correct user input, such as `autocorrect` and
  `autocapitalize`. If you don't set it, the behavior follows the default behavior
  of the user's browser.
- **`disabled?`**: `boolean`
  Specifies if the filtering input is disabled.
  For example, you can use it if you are fetching new items upon filtering change
  in order to prevent the user from changing the filtering text.
- **`filteringAriaLabel?`**: `string`
  Adds an `aria-label` on the filtering input.
- **`filteringClearAriaLabel?`**: `string`
  Label for the filtering input clear button.
- **`filteringPlaceholder?`**: `string`
  Placeholder for the filtering input.
- **`filteringText`**: `string`
  The current value of the filtering input.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`loading?`**: `boolean`
  Set to `true` while the related collection is loading (e.g. during an async filtering action).
  If set to `true`, the live announcement of countText by assistive technologies will be paused until it changes back to `false`.
- **`style?`**: `TextFilterProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the text filter's visual appearance.
  Refer to the [style](/components/text-filter/?tabId=style) tab for more details.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<TextFilterProps.ChangeDetail>`
  Called when a change in filtering is caused by a user interaction. The event `detail` contains the current `filteringText`.
- **`onDelayedChange?`**: `NonCancelableEventHandler<TextFilterProps.ChangeDetail>`
  Called after the user changes the value of the filtering input field and stops typing for a certain
  period of time. If you want a delayed handler to invoke a filtering API call, you can use this event in addition to `onChange`.

## Types

Supporting types from `TextFilterProps` (verbatim):

```ts
export declare namespace TextFilterProps {
  interface ChangeDetail {
    filteringText: string;
  }
  interface Ref {
    /**
     * Sets focus on the underlying input control.
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
