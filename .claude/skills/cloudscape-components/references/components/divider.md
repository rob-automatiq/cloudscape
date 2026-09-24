# Divider

```ts
import Divider from '@cloudscape-design/components/divider'
import type { DividerProps } from '@cloudscape-design/components/divider'
```

Generated from `@cloudscape-design/components@3.0.1382` `divider/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children?`**: `React.ReactNode`
  Text label rendered at the center of a horizontal divider line.
  Use for labels or short section titles.
  
  Only supported by horizontal dividers.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
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
- **`orientation?`**: `DividerProps.Orientation`
  Orientation of the divider line.
  
  - `"horizontal"` (default) — renders a full-width horizontal line. Use inside block-level
    containers to separate stacked content sections.
  - `"vertical"` — renders a full-height vertical line. Use inside flex or inline containers
    to separate side-by-side elements.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `DividerProps` (verbatim):

```ts
export declare namespace DividerProps {
  type Orientation = 'horizontal' | 'vertical';
}
```
