# SpaceBetween

```ts
import SpaceBetween from '@cloudscape-design/components/space-between'
import type { SpaceBetweenProps } from '@cloudscape-design/components/space-between'
```

Generated from `@cloudscape-design/components@3.0.1382` `space-between/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`alignItems?`**: `SpaceBetweenProps.AlignItems`
  Determines how the child elements will be aligned based on the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) property of the CSS Flexbox.
- **`children?`**: `React.ReactNode`
  Content of this component.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`direction?`**: `SpaceBetweenProps.Direction`
  Defines the direction in which the content is laid out.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`nativeAttributes?`**: `NativeAttributes<React.HTMLAttributes<HTMLDivElement>>` _(@awsuiSystem core)_
  Attributes to add to the native element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`size`**: `SpaceBetweenProps.Size`
  Defines the spacing between the individual items of the content.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `SpaceBetweenProps` (verbatim):

```ts
export declare namespace SpaceBetweenProps {
  type Direction = 'vertical' | 'horizontal';
  type Size = 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  type AlignItems = 'center' | 'start' | 'end';
}
```
