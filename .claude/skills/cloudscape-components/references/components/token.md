# Token

```ts
import Token from '@cloudscape-design/components/token'
import type { TokenProps } from '@cloudscape-design/components/token'
```

Generated from `@cloudscape-design/components@3.0.1382` `token/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaLabel?`**: `string`
  Adds an `aria-label` to the token.
  
  Use this if the label is not plain text.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`description?`**: `string`
  Further information about the token that appears below the label.
- **`disabled?`**: `boolean`
  Determines whether the token is disabled.
- **`dismissLabel?`**: `string`
  Adds an `aria-label` to the dismiss button.
- **`icon?`**: `React.ReactNode`
  An icon at the start of the token.
  
  When `variant="normal"`, if a description or tags are set, icon size should be `normal`.
  
  When `variant="inline"`, icon size should be `small`.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`label`**: `React.ReactNode`
  Slot for the label of the token as text or an element.
  
  For `variant="inline"`, only plain text is supported, for example, strings or numbers.
- **`labelTag?`**: `string`
  A label tag that provides additional guidance, shown next to the label.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only. A read-only control is still focusable.
- **`style?`**: `TokenProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the token's visual appearance.
  Refer to the [style](/components/token/?tabId=style) tab for more details.
- **`tags?`**: `ReadonlyArray<string>`
  A list of tags giving further guidance about the token.
- **`tooltipContent?`**: `string`
  Content to display in the tooltip when `variant="inline"`. The tooltip appears when the token label is truncated due to insufficient space.
  
  Only applies to plain text labels.
- **`variant?`**: `TokenProps.Variant`
  Specifies the token's visual style and functionality.
  
  For `inline` only label, icon and dismiss button are displayed.
  
  Defaults to `normal` if not specified.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onDismiss?`**: `NonCancelableEventHandler`
  Called when the user clicks on the dismiss button.
  
  Make sure that you add a listener to this event to update your application state.

## Types

Supporting types from `TokenProps` (verbatim):

```ts
export declare namespace TokenProps {
  type Variant = 'normal' | 'inline';
  interface Style {
    root?: {
      background?: {
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
      borderColor?: {
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
      borderRadius?: string;
      borderWidth?: string;
      paddingBlock?: string;
      paddingInline?: string;
    };
    dismissButton?: {
      color?: {
        default?: string;
        disabled?: string;
        hover?: string;
        readOnly?: string;
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
  }
}
```
