# Spinner

```ts
import Spinner from '@cloudscape-design/components/spinner'
import type { SpinnerProps } from '@cloudscape-design/components/spinner'
```

Generated from `@cloudscape-design/components@3.0.1382` `spinner/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

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
- **`size?`**: `SpinnerProps.Size`
  Specifies the size of the spinner.
- **`variant?`**: `SpinnerProps.Variant`
  Specifies the color variant of the spinner. The `normal` variant picks up the current color of its context.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `SpinnerProps` (verbatim):

```ts
export declare namespace SpinnerProps {
  type Size = 'normal' | 'big' | 'large';
  type Variant = 'normal' | 'disabled' | 'inverted';
}
```
