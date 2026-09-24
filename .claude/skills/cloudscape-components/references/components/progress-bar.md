# ProgressBar

```ts
import ProgressBar from '@cloudscape-design/components/progress-bar'
import type { ProgressBarProps } from '@cloudscape-design/components/progress-bar'
```

Generated from `@cloudscape-design/components@3.0.1382` `progress-bar/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`additionalInfo?`**: `React.ReactNode`
  Information that's displayed below the progress bar or status text.
- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the progress bar.
- **`ariaLabel?`**: `string`
  Adds an `aria-label` to the progress bar.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the progress bar.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`description?`**: `React.ReactNode`
  More detailed information about the operation that appears below the label.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`label?`**: `React.ReactNode`
  Short description of the operation that appears at the top of the component.
  
  Make sure that you always provide a label for accessibility.
- **`resultButtonText?`**: `string`
  Specifies the text for the button that's displayed when the `status` is set to `error` or `success`.
  If `resultButtonText` is empty, the result button isn't displayed.
  
  Note: If you use the `flash` variant, the result button isn't displayed.
  Add a button using the `action` property of the flashbar item instead.
- **`resultText?`**: `React.ReactNode`
  Content that's displayed when `status` is set to `error` or `success`.
- **`status?`**: `ProgressBarProps.Status`
  Specifies the status of the progress bar. You can set it to one of the following:
  
  - `"in-progress"` - Displays a progress bar.
  - `"success"` or `"error"` - Displays a result state and replaces the progress element with a status indicator,
  `resultText`, and a result button.
- **`style?`**: `ProgressBarProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the progress bar's visual appearance.
  Refer to the [style](/components/progress-bar/?tabId=style) tab for more details.
- **`value?`**: `number`
  Indicates the current progress as a percentage. The value must be between 0 and 100. Decimals are rounded.
- **`variant?`**: `ProgressBarProps.Variant`
  Enables the correct styling of the progress bar in different contexts. You can set it to one of the following:
  
  - `"flash"` - Use this variant when using the progress bar within a flash component.
               Note that the result button isn't displayed when using this variant.
               Use the `buttonText` property and the `onButtonClick` event listener of the flashbar item instead of the result button provided by the progress bar.
  - `"key-value"` - Use this variant when using the progress bar within the key-value pairs pattern.
  - `"standalone"` Use in all other cases. This is the default value.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onResultButtonClick?`**: `NonCancelableEventHandler`
  Called when the user clicks the result state button.
  
  Note: If you are using the `flash` variant, the result button isn't displayed.
  Use the `buttonText` property and the `onButtonClick` event listener of the flashbar item instead.

## Types

Supporting types from `ProgressBarProps` (verbatim):

```ts
export declare namespace ProgressBarProps {
  type Status = 'in-progress' | 'success' | 'error';
  type Variant = 'standalone' | 'flash' | 'key-value';
  interface Style {
    progressBar?: {
      backgroundColor?: string;
      borderRadius?: string;
      height?: string;
    };
    progressValue?: {
      backgroundColor?: string;
    };
    progressPercentage?: {
      color?: string;
      fontSize?: string;
      fontWeight?: string;
    };
  }
}
```
