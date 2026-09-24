# ActionCard

```ts
import ActionCard from '@cloudscape-design/components/action-card'
import type { ActionCardProps } from '@cloudscape-design/components/action-card'
```

Generated from `@cloudscape-design/components@3.0.1382` `action-card/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Adds an aria-describedby reference for the action card.
- **`ariaLabel?`**: `string`
  Adds an aria-label to the action card.
- **`children?`**: `ReactNode`
  The main content of the action card.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`description?`**: `ReactNode`
  The description content displayed below the header.
- **`disableContentPaddings?`**: `boolean`
  Removes the default padding from the content area.
- **`disabled?`**: `boolean`
  Determines whether the action card is disabled.
- **`disableHeaderPaddings?`**: `boolean`
  Removes the default padding from the header area.
- **`download?`**: `boolean | string`
  Specifies whether the linked URL, when selected, will prompt the user to download instead of navigate.
  You can specify a string value that will be suggested as the name of the downloaded file.
  This property only applies when an `href` is provided.
- **`header?`**: `ReactNode`
  The header content displayed at the top of the action card.
- **`href?`**: `string`
  Turns the action card into a link, pointing to the given URL. The card is rendered using an `a` element instead of a `button`.
  For example, use this property if selecting the card should navigate the user to another page.
- **`icon?`**: `React.ReactNode`
  Displays an icon next to the content. You can use the `iconVerticalAlignment` property to control vertical alignment.
- **`iconVerticalAlignment?`**: `ActionCardProps.IconVerticalAlignment`
  Specifies the vertical alignment of the icon.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`nativeAnchorAttributes?`**: `NativeAttributes<React.AnchorHTMLAttributes<HTMLAnchorElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `a` element (when `href` is provided).
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`nativeButtonAttributes?`**: `NativeAttributes<React.ButtonHTMLAttributes<HTMLButtonElement>>` _(@awsuiSystem core)_
  Attributes to add to the native button element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`rel?`**: `string`
  Adds a `rel` attribute to the link. By default, the component sets the `rel` attribute to "noopener noreferrer" when `target` is `"_blank"`.
  If the `rel` property is provided, it overrides the default behavior.
  This property only applies when an `href` is provided.
- **`target?`**: `string`
  Specifies where to open the linked URL (for example, to open in a new browser window or tab use `_blank`).
  This property only applies when an `href` is provided.
- **`variant?`**: `ActionCardProps.Variant`
  Specifies the visual variant of the card, which controls the border radius and padding.
  
  - `default` - Uses container-level border radius and padding (larger).
  - `embedded` - Uses compact border radius and padding (smaller).

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onClick?`**: `CancelableEventHandler<ActionCardProps.ClickDetail>`
  Called when the user clicks on the action card.
- **`onFollow?`**: `CancelableEventHandler<ActionCardProps.FollowDetail>`
  Called when the user clicks on the action card with the left mouse button without pressing
  modifier keys (that is, CTRL, ALT, SHIFT, META), and the action card has an `href` set.

## Types

Supporting types from `ActionCardProps` (verbatim):

```ts
export declare namespace ActionCardProps {
  interface ClickDetail {}
  type FollowDetail = BaseNavigationDetail;
  type IconVerticalAlignment = 'top' | 'center';
  type Variant = 'default' | 'embedded';
  interface Ref {
    /**
     * Sets focus on the action card.
     */
    focus(): void;
  }
}
```
