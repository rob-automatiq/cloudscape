# Badge

```ts
import Badge from '@cloudscape-design/components/badge'
import type { BadgeProps } from '@cloudscape-design/components/badge'
```

Generated from `@cloudscape-design/components@3.0.1382` `badge/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children?`**: `React.ReactNode`
  Text displayed inside the badge.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`color?`**: `'blue' | 'grey' | 'green' | 'red' | 'severity-critical' | 'severity-high' | 'severity-medium' | 'severity-low' | 'severity-neutral'`
  Specifies the badge color.
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
- **`style?`**: `BadgeProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the badge's visual appearance.
  Refer to the [style](/components/badge/?tabId=style) tab for more details.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `BadgeProps` (verbatim):

```ts
export declare namespace BadgeProps {
  interface Style {
    root?: {
      background?: string;
      borderColor?: string;
      borderRadius?: string;
      borderWidth?: string;
      color?: string;
      paddingBlock?: string;
      paddingInline?: string;
    };
  }
}
```
