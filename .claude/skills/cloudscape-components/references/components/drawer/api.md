# Drawer

```ts
import Drawer from '@cloudscape-design/components/drawer'
import type { DrawerProps } from '@cloudscape-design/components/drawer'
```

Generated from `@cloudscape-design/components@3.0.1382` `drawer/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaLabel?`**: `string`
  Sets the `aria-label` on the drawer body.
  By default the body is labelled by the drawer's `header` content. Use this when you need a different
  or more specific label (e.g. to include additional context or exclude parts of the header).
  Does not apply when `role="presentation"`. Don't use `ariaLabel` and `ariaLabelledby` at the same time.
- **`ariaLabelledby?`**: `string`
  Sets the `aria-labelledby` on the drawer body.
  By default the body is labelled by the drawer's `header` content. Use this when you need a different
  or more specific label (e.g. to include additional context or exclude parts of the header).
  Does not apply when `role="presentation"`. Don't use `ariaLabel` and `ariaLabelledby` at the same time.
- **`backdrop?`**: `boolean`
  Shows a semi-transparent backdrop behind the drawer when open. Used with `absolute`
  and `fixed` positions.
  
  When a backdrop is set, the keyboard focus is trapped inside the drawer by default
  to prevent it from moving to elements covered by the backdrop. This can be overridden
  with `focusBehavior.trapFocus`.
  
  Do not use this property when using drawers inside app layout.
- **`children?`**: `React.ReactNode`
  Main content of the drawer.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`closeAction?`**: `DrawerProps.CloseActionProps`
  When defined, renders a close button in the header with the provided configuration.
  The close button fires the `onClose` event with method `'close-action'` when
  clicked.
  
  Do not use this property when using drawers inside app layout.
- **`disableContentPaddings?`**: `boolean`
  Determines whether the drawer content has padding. If `true`, removes the default padding from the content area.
- **`focusBehavior?`**: `DrawerProps.FocusBehavior`
  Customizes focus-related behavior:
  
  - `autoFocus` - Whether focus moves into the drawer when `open` changes from `false` to `true`,
  and captures the previously focused element for default return-focus on close.
  Defaults to `true`. Set to `false` to manage focus-in manually via `ref.current.focus()`.
  
  - `trapFocus` - Whether keyboard focus is constrained to elements inside the drawer.
  Defaults to `true` when `backdrop` is set, `false` otherwise.
  
  - `returnFocus` - Called instead of the default return-focus behavior when the drawer closes.
  Use this to override where focus lands on close (e.g. a specific trigger element).
  If omitted, focus returns to the element that was focused when the drawer opened.
  If that element is no longer in the DOM, the behavior silently no-ops.
  
  Do not use this property when using drawers inside app layout.
- **`footer?`**: `React.ReactNode`
  Sticky footer content that remains visible at the bottom during scroll.
  
  Automatically becomes non-sticky when scrollable content area is too small
  to ensure content remains accessible (not covered by the footer).
- **`header?`**: `React.ReactNode`
  Header of the drawer.
  
  It should contain the only `h2` used in the drawer.
- **`headerActions?`**: `React.ReactNode`
  Actions for the header. Available only if you specify the `header` property.
- **`hideCloseAction?`**: `boolean`
  Hides the close action slot next to the header actions, which is present even
  when close action is not set. Use it when a close action is not needed, or a
  custom close action implementation is used.
  
  Do not use this property when using drawers inside app layout.
- **`i18nStrings?`**: `DrawerProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
  - `loadingText` - The text that's displayed when the drawer is in a loading state.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`loading?`**: `boolean`
  Renders the drawer in a loading state. We recommend that you also set a `i18nStrings.loadingText`.
- **`offset?`**: `DrawerProps.Offset`
  Specifies the distance in pixels between the drawer and the edges of its container.
  Applicable when using `position="absolute"` or `position="fixed"`.
  Supported properties:
  * `start` - Distance from the inline-start edge. Not applicable when `placement` is `"end"`.
  * `end` - Distance from the inline-end edge. Not applicable when `placement` is `"start"`.
  * `top` - Distance from the top edge. Not applicable when `placement` is `"bottom"`.
  * `bottom` - Distance from the bottom edge. Not applicable when `placement` is `"top"`.
  
  Do not use this property when using drawers inside app layout.
- **`open?`**: `boolean`
  Drawer open state. Set to `true` to show the drawer, `false` to hide it.
  Handle the `onClose` event to update this value when the user requests to close the drawer.
  
  When the property is unset - the drawer is always visible, and the built-in focus in/out behaviors are disabled.
  
  Do not use this property when using drawers inside app layout.
- **`placement?`**: `DrawerProps.Placement`
  Specifies which edge of its container the drawer is anchored to, and supports these options:
  * `start` - Anchored to the inline-start edge.
  * `end` - (default) Anchored to the inline-end edge.
  * `top` - Anchored to the top edge.
  * `bottom` - Anchored to the bottom edge.
  
  Do not use this property when using drawers inside app layout.
- **`position?`**: `DrawerProps.Position`
  Specifies the CSS positioning mode of the drawer, and supports the following options:
  * `static` (default) - The drawer is positioned in the normal document flow.
  * `sticky` - The drawer sticks to its nearest scrolling ancestor. Only meaningful with `placement="top"` or `placement="bottom"`.
  Using `sticky` with `placement="start"` or `placement="end"` falls back to `static`.
  * `absolute` - The drawer is positioned relative to its nearest positioned ancestor.
  * `fixed` - The drawer is positioned relative to the viewport.
  
  Do not use this property when using drawers inside app layout.
- **`role?`**: `'region' | 'presentation'`
  Sets the ARIA role of the drawer.
  - `"region"` (default for non-`static` positions) — exposes the drawer as a
  landmark region. The drawer receives focus when opened.
  - `"presentation"` (default for `position="static"`) — removes landmark semantics
  from the drawer body. Use this when the containing element already provides the
  appropriate semantic role (e.g. a wrapping `<nav>` or `<aside>`). The drawer does not
  receive focus when opened.
- **`stickyOffset?`**: `DrawerProps.StickyOffset`
  Specifies the distance in pixels from the top or bottom edge of the scrolling container
  at which the drawer sticks. Applicable only when using `position="sticky"` with `placement="top"` or `placement="bottom"`.
  * Supported properties:
  * `top` - Distance from the top of the scrolling container.
  * `bottom` - Distance from the bottom of the scrolling container.
  
  Do not use this property when using drawers inside app layout.
- **`zIndex?`**: `number`
  Sets the CSS `z-index` of the drawer. Use this to control stacking order when the drawer
  overlaps other positioned elements on the page.
  
  Applicable when using `position="sticky"`, `position="absolute"`, or `position="fixed"`. Defaults to 830.
  
  Do not use this property when using drawers inside app layout.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onClose?`**: `NonCancelableEventHandler<DrawerProps.CloseDetail>`
  Called when the user performs a close action. The `event.detail.method` indicates the trigger:
  * `'close-action'` - The close button was clicked.
  * `'backdrop-click'` - The backdrop was clicked (only when `backdrop=true`).
  * `'escape'` - The Escape key was pressed (only when `backdrop=true`).
  
  Do not use this property when using drawers inside app layout.

## Types

Supporting types from `DrawerProps` (verbatim):

```ts
export declare namespace DrawerProps {
  interface I18nStrings {
    loadingText?: string;
  }
  type Position = 'static' | 'sticky' | 'absolute' | 'fixed';
  type Placement = 'start' | 'end' | 'top' | 'bottom';
  interface Offset {
    start?: number;
    end?: number;
    top?: number;
    bottom?: number;
  }
  interface StickyOffset {
    top?: number;
    bottom?: number;
  }
  interface CloseActionProps {
    ariaLabel?: string;
    disabled?: boolean;
    disabledReason?: string;
    iconName?: IconProps.Name;
    iconUrl?: string;
    iconSvg?: React.ReactNode;
    iconAlt?: string;
  }
  interface CloseDetail {
    method: 'close-action' | 'backdrop-click' | 'escape';
  }
  interface FocusBehavior {
    autoFocus?: boolean;
    trapFocus?: boolean;
    returnFocus?: () => void;
  }
  interface Ref {
    /**
     * Moves focus to the drawer element. Use when `focusBehavior.autoFocus`
     * is disabled and you need to manage focus manually, or to focus a drawer, initially rendered
     * with `open=true`. The drawer with `role="presentation"` cannot be focused.
     */
    focus(): void;
  }
}
```
