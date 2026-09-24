# Grid

```ts
import Grid from '@cloudscape-design/components/grid'
import type { GridProps } from '@cloudscape-design/components/grid'
```

Generated from `@cloudscape-design/components@3.0.1382` `grid/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children?`**: `React.ReactNode`
  The elements to align in the grid.
  
  You can provide any elements here. The number of elements
  should match the number of objects defined in the `gridDefinition`
  property.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`disableGutters?`**: `boolean`
  Determines whether horizontal and vertical gutters are hidden.
- **`gridDefinition?`**: `ReadonlyArray<GridProps.ElementDefinition>`
  An array of element definitions that specifies how the columns must be
  arranged. Each element definition can have the following properties:
  
  - `colspan` (number | GridProps.BreakpointMapping) - The number (1-12) of grid elements for this column to span.
  - `offset` (number | GridProps.BreakpointMapping) - The number (0-11) of grid elements by which to offset the column.
  - `pull` (number | GridProps.BreakpointMapping) - The number (0-12) of grid elements by which to pull the column to the left.
  - `push` (number | GridProps.BreakpointMapping) - The number (0-12) of grid elements by which to push the column to the right.
  
  The value for the each property can be a number (which applies for all
  breakpoints) or an object where the key is one of the supported breakpoints
  (`xxs`, `xs`, `s`, `m`, `l`, `xl`) or `default`. The value of this key is a number of columns,
  applied for that breakpoint and those above it. You must provide a `default` value for `colspan`.
  
  We recommend that you don't use the `pull` and `push` properties of the element definition
  for accessibility reasons.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `GridProps` (verbatim):

```ts
export declare namespace GridProps {
  type Breakpoint = _Breakpoint;
  type BreakpointMapping = Partial<Record<_Breakpoint, number>>;
  interface ElementDefinition {
    /**
     * The number of grid elements for the column to span.
     */
    colspan?: number | GridProps.BreakpointMapping;
    /**
     * The number of grid elements to offset the column by.
     */
    offset?: number | GridProps.BreakpointMapping;
    /**
     * The number of grid elements to pull the column to the left by.
     */
    pull?: number | GridProps.BreakpointMapping;
    /**
     * The number of grid elements to push the column to the right by.
     */
    push?: number | GridProps.BreakpointMapping;
  }
}
```
