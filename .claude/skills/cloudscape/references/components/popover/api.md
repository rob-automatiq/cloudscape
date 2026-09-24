# Popover

```ts
import Popover from '@cloudscape-design/components/popover'
import type { PopoverProps } from '@cloudscape-design/components/popover'
```

Generated from `@cloudscape-design/components@3.0.1382` `popover/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children?`**: `React.ReactNode`
  Element that triggers the popover when selected by the user.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`content?`**: `React.ReactNode`
  Content of the popover.
- **`dismissAriaLabel?`**: `string` _(@i18n)_
  Adds an `aria-label` to the dismiss button for accessibility.
- **`dismissButton?`**: `boolean`
  Determines whether the dismiss button is shown in the popover body.
- **`fixedWidth?`**: `boolean`
  Expands the popover body to its maximum width regardless of content.
  For example, use it when you need to place a column layout in the popover content.
- **`header?`**: `string`
  Specifies optional header text for the popover.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`position?`**: `PopoverProps.Position`
  Determines where the popover is displayed when opened, relative to the trigger.
  If the popover doesn't have enough space to open in this direction, it
  automatically chooses a better direction based on available space.
- **`renderWithPortal?`**: `boolean`
  By default, the popover is constrained to fit inside its parent
  [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
  Enabling this property will allow the popover to be rendered in the root stack context using
  [React Portals](https://reactjs.org/docs/portals.html).
  Enable this setting if you need the popover to ignore its parent stacking context, such as in side navigation.
  
  Note: Using popover rendered with portal within a Modal is not supported.
- **`size?`**: `PopoverProps.Size`
  Determines the maximum width for the popover.
- **`triggerAriaLabel?`**: `string`
  Adds `aria-label` to the text trigger button. Use this to provide an accessible name for triggers
  that don't have visible text, and to distinguish between multiple triggers with identical visible text.
- **`triggerType?`**: `PopoverProps.TriggerType`
  Specifies the type of content inside the trigger region. The following types are available:
  - `text` - Use for triggers containing inline components, like status indicator.
  - `text-inline` - Use for triggers containing plain text only.
  - `custom` - Use for the [button](../button/guidelines.md) component.
- **`wrapTriggerText?`**: `boolean`
  Specifies if the text trigger content should wrap. If you set it to false, it prevents the text from
  wrapping and truncates it with an ellipsis.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `PopoverProps` (verbatim):

```ts
export declare namespace PopoverProps {
  type Position = 'top' | 'right' | 'bottom' | 'left';
  type Size = 'small' | 'medium' | 'large';
  type TriggerType = 'text' | 'text-inline' | 'custom';
  interface Ref {
    /**
     * Sets focus on the popover's trigger and dismisses the popover if open.
     */
    focus(): void;
    /**
     * Dismisses the popover without focusing the trigger. Use only if an element other than the trigger needs to be focused after dismissing the popover.
     */
    dismiss(): void;
  }
}
```
