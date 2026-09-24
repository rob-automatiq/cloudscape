# Skeleton

```ts
import Skeleton from '@cloudscape-design/components/skeleton'
import type { SkeletonProps } from '@cloudscape-design/components/skeleton'
```

Generated from `@cloudscape-design/components@3.0.1382` `skeleton/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`display?`**: `'block' | 'inline-block' | 'inline'`
  Specifies the CSS `display` of the skeleton.
- **`height?`**: `string`
  Specifies the height of the skeleton. Accepts any valid CSS value (for example, `"100px"`, `"3em"`).
  By default the height is determined by the `variant`.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`tagOverride?`**: `string`
  Overrides the default HTML tag used by the component.
- **`variant?`**: `SkeletonProps.Variant`
  Specifies the variant of the skeleton to match Box fontSize options.
  The default value, `dynamic`, matches skeleton height to the surrounding font size.
  * `text-body-s` - Skeleton with height matching body-s line-height.
  * `text-body-m` - Skeleton with height matching body-m line-height.
  * `text-heading-xs` - Skeleton with height matching heading-xs line-height.
  * `text-heading-s` - Skeleton with height matching heading-s line-height.
  * `text-heading-m` - Skeleton with height matching heading-m line-height.
  * `text-heading-l` - Skeleton with height matching heading-l line-height.
  * `text-heading-xl` - Skeleton with height matching heading-xl line-height.
  * `text-display-l` - Skeleton with height matching display-l line-height.
- **`width?`**: `string`
  Specifies the width of the skeleton. Accepts any valid CSS value (for example, `"200px"`, `"100%"`).

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `SkeletonProps` (verbatim):

```ts
export declare namespace SkeletonProps {
  type Variant = 'dynamic' | 'text-body-s' | 'text-body-m' | 'text-heading-xs' | 'text-heading-s' | 'text-heading-m' | 'text-heading-l' | 'text-heading-xl' | 'text-display-l';
}
```
