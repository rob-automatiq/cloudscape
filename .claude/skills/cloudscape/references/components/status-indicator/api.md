# StatusIndicator

```ts
import StatusIndicator from '@cloudscape-design/components/status-indicator'
import type { StatusIndicatorProps } from '@cloudscape-design/components/status-indicator'
```

Generated from `@cloudscape-design/components@3.0.1382` `status-indicator/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children?`**: `React.ReactNode`
  A text fragment that communicates the status.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`colorOverride?`**: `StatusIndicatorProps.Color`
  Specifies an override for the status indicator color.
- **`iconAriaLabel?`**: `string`
  Specifies an `aria-label` for the icon. If the status text alone does not fully describe the status,
  use this to communicate additional context.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`nativeAttributes?`**: `NativeAttributes<React.HTMLAttributes<HTMLElement>>` _(@awsuiSystem core)_
  Attributes to add to the native element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`type?`**: `StatusIndicatorProps.Type`
  Specifies the status type.
- **`wrapText?`**: `boolean`
  Specifies if the text content should wrap. If you set it to false, it prevents the text from wrapping
  and truncates it with an ellipsis.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `StatusIndicatorProps` (verbatim):

```ts
export declare namespace StatusIndicatorProps {
  type Type = 'error' | 'warning' | 'success' | 'info' | 'stopped' | 'pending' | 'in-progress' | 'loading' | 'not-started' | 'log';
  type Color = 'blue' | 'grey' | 'green' | 'red' | 'yellow';
}
```
