# NavigableGroup

```ts
import NavigableGroup from '@cloudscape-design/components/navigable-group'
import type { NavigableGroupProps } from '@cloudscape-design/components/navigable-group'
```

Generated from `@cloudscape-design/components@3.0.1382` `navigable-group/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children`**: `React.ReactNode`
  The children that will be rendered inside the navigation group.
  
  The following Cloudscape components are supported, but do not
  need to be direct children of the group:
  - Button
  - Button dropdown
  - Toggle button
  - Link
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`getItemKey`**: `(element: HTMLElement) => string`
  A method that should return a unique identifier for a given element.
  The element passed will be the first focusable descendent of a child component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`navigationDirection?`**: `'horizontal' | 'vertical' | 'both'`
  Determines which arrow keys move focus sequentially within the group:
  - `horizontal` - left and right arrow keys
  - `vertical` - up and down arrow keys
  - `both` - all arrow keys

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `NavigableGroupProps` (verbatim):

```ts
export declare namespace NavigableGroupProps {
  interface Ref {
    /**
     * Focuses the first focusable element (or previously focused element) in the navigation group.
     */
    focus(): void;
  }
}
```
