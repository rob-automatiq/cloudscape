# ToggleButton

```ts
import ToggleButton from '@cloudscape-design/components/toggle-button'
import type { ToggleButtonProps } from '@cloudscape-design/components/toggle-button'
```

Generated from `@cloudscape-design/components@3.0.1382` `toggle-button/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaControls?`**: `string`
  Adds `aria-controls` to the button. Use when the button controls the contents or presence of an element.
- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the button.
- **`ariaLabel?`**: `string`
  Adds `aria-label` to the button element. Use this to provide an accessible name for buttons
  that don't have visible text, and to distinguish between multiple buttons with identical visible text.
  The text will also be added to the `title` attribute of the button.
- **`children?`**: `React.ReactNode`
  Text displayed in the button element.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`disabled?`**: `boolean`
  Renders the button as disabled and prevents clicks.
- **`disabledReason?`**: `string`
  Provides a reason why the button is disabled (only when `disabled` is `true`).
  If provided, the button becomes focusable.
  Applicable only for the normal variant.
- **`external?`**: `boolean`
  Adds an external icon after the button label text.
  If an href is provided, it opens the link in a new tab.
- **`i18nStrings?`**: `ButtonProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component. The object should contain:
  
  * `externalIconAriaLabel` - (optional) Specifies the aria-label for the external icon when `external` is set to `true`.
- **`iconName?`**: `IconProps.Name`
  Displays an icon next to the text.
- **`iconSvg?`**: `React.ReactNode`
  Specifies the SVG of a custom icon.
  
  Use this property if you want your custom icon to inherit colors dictated by variant or hover states.
  When this property is set, the component will be decorated with `aria-hidden="true"`. Ensure that the `svg` element:
  - has attribute `focusable="false"`.
  - has `viewBox="0 0 16 16"`.
  
  If you set the `svg` element as the root node of the slot, the component will automatically
  - set `stroke="currentColor"`, `fill="none"`, and `vertical-align="top"`.
  - set the stroke width based on the size of the icon.
  - set the width and height of the SVG element based on the size of the icon.
  
  If you don't want these styles to be automatically set, wrap the `svg` element into a `span`.
  You can still set the stroke to `currentColor` to inherit the color of the surrounding elements.
  
  If you set both `iconUrl` and `iconSvg`, `iconSvg` will take precedence.
  
  *Note:* Remember to remove any additional elements (for example: `defs`) and related CSS classes from SVG files exported from design software.
  In most cases, they aren't needed, as the `svg` element inherits styles from the icon component.
- **`iconUrl?`**: `string`
  Specifies the URL of a custom icon. Use this property if the icon you want isn't available.
  
  If you set both `iconUrl` and `iconSvg`, `iconSvg` will take precedence.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`loading?`**: `boolean`
  Renders the button as being in a loading state. It takes precedence over the `disabled` if both are set to `true`.
  It prevents users from clicking the button, but it can still be focused.
- **`loadingText?`**: `string`
  Specifies the text that screen reader announces when the button is in a loading state.
- **`nativeButtonAttributes?`**: `NativeAttributes<React.ButtonHTMLAttributes<HTMLButtonElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `button` element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`pressed`**: `boolean`
  Sets the toggle button to pressed state.
- **`pressedIconName?`**: `IconProps.Name`
  Displays an icon next to the text in pressed state.
- **`pressedIconSvg?`**: `React.ReactNode`
  Specifies the SVG of a custom icon in pressed state.
  
  Use this property if you want your custom icon to inherit colors dictated by variant or hover states.
  When this property is set, the component will be decorated with `aria-hidden="true"`. Ensure that the `svg` element:
  - has attribute `focusable="false"`
  - has `viewBox="0 0 16 16"`
  
  If you set the `svg` element as the root node of the slot, the component will automatically:
  - set `stroke="currentColor"`, `fill="none"`, and `vertical-align="top"`.
  - set the stroke width based on the size of the icon.
  - set the width and height of the SVG element based on the size of the icon.
  
  If you don't want these styles to be automatically set, wrap the `svg` element into a `span`.
  You can still set the stroke to `currentColor` to inherit the color of the surrounding elements.
  
  If you set both `pressedIconUrl` and `pressedIconSvg`, `pressedIconSvg` will take precedence.
  
  *Note:* Remember to remove any additional elements (for example: `defs`) and related CSS classes from SVG files exported from design software.
  In most cases, they aren't needed, as the `svg` element inherits styles from the icon component.
- **`pressedIconUrl?`**: `string`
  Specifies the URL of a custom icon in pressed state. Use this property if the icon needed for your use case isn't available.
  
  `pressedIconSvg` will take precedence if you set both `pressedIconUrl` and `pressedIconSvg`.
- **`variant?`**: `ToggleButtonProps.Variant`
  Determines the general styling of the toggle button as follows:
  * `normal` for secondary buttons.
  * `icon` to display an icon only (no text).
  
  Defaults to `normal` if not specified.
- **`wrapText?`**: `boolean`
  Specifies if the `text` content wraps. If you set it to `false`, it prevents the text from wrapping.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<ToggleButtonProps.ChangeDetail>`
  Called when the user changes their selection.
  The event `detail` contains the current value for the `pressed` property.

## Types

Supporting types from `ToggleButtonProps` (verbatim):

```ts
export declare namespace ToggleButtonProps {
  type Variant = 'normal' | 'icon';
  interface ChangeDetail {
    pressed: boolean;
  }
  interface Ref {
    /**
     * Focuses the underlying native button.
     */
    focus(options?: FocusOptions): void;
  }
}
```
