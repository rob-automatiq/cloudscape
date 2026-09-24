# Tooltip

```ts
import Tooltip from '@cloudscape-design/components/tooltip'
import type { TooltipProps } from '@cloudscape-design/components/tooltip'
```

Generated from `@cloudscape-design/components@3.0.1382` `tooltip/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`content`**: `React.ReactNode`
  Content to display in the tooltip.
- **`getTrack`**: `() => null | HTMLElement | SVGElement`
  Function that returns the element the tooltip points to.
  Can return null if the element is not yet mounted or available.
- **`position?`**: `TooltipProps.Position`
  Determines where the tooltip is displayed when opened, relative to the trigger. If the tooltip doesn't have enough space to open in this direction, it automatically chooses a better direction based on available space.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onEscape?`**: `NonCancelableEventHandler`
  Callback fired when the user presses the Escape key while the tooltip is visible.

## Types

Supporting types from `TooltipProps` (verbatim):

```ts
export declare namespace TooltipProps {
  /**
   * Position of the tooltip relative to the tracked element.
   */
  type Position = PopoverProps.Position;
}
```
