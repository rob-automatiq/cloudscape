# LiveRegion

```ts
import LiveRegion from '@cloudscape-design/components/live-region'
import type { LiveRegionProps } from '@cloudscape-design/components/live-region'
```

Generated from `@cloudscape-design/components@3.0.1382` `live-region/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`assertive?`**: `boolean`
  Whether the announcements should be made using assertive aria-live.
  Assertive announcements interrupt the user's action, so they should only
  be used when absolutely necessary.
- **`children?`**: `React.ReactNode`
  Use the rendered content as the source for the announcement text. When the
  text content inside this slot changes, it will be re-announced to
  assistive technologies.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`hidden?`**: `boolean`
  Determines whether to visually hide the contents of the `children` slot.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`tagName?`**: `LiveRegionProps.TagName`
  The tag name to use for the wrapper around the `children` slot.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `LiveRegionProps` (verbatim):

```ts
export declare namespace LiveRegionProps {
  type TagName = 'span' | 'div';
}
```
