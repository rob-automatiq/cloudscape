# Button

```ts
import Button from '@cloudscape-design/components/button'
import type { ButtonProps } from '@cloudscape-design/components/button'
```

Generated from `@cloudscape-design/components@3.0.1382` `button/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaControls?`**: `string`
  Adds `aria-controls` to the button. Use when the button controls the contents or presence of an element.
- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the button.
- **`ariaExpanded?`**: `boolean`
  Adds aria-expanded to the button element. Use when the button controls an expandable element.
- **`ariaHaspopup?`**: `boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'`
  Adds `aria-haspopup` to the button element. Use when the button triggers a popup element such as a menu, listbox, tree, grid, or dialog.
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
- **`download?`**: `boolean | string`
  Specifies whether the linked URL, when selected, will prompt the user to download instead of navigate.
  You can specify a string value that will be suggested as the name of the downloaded file.
  This property only applies when an `href` is provided.
- **`external?`**: `boolean`
  Adds an external icon after the button label text.
  If an href is provided, it opens the link in a new tab.
- **`form?`**: `string`
  The id of the <form> element to associate with the button. The value of this attribute must be the id of a <form> in the same document.
  Use when a button is not the descendant of a form element, such as when used in a modal.
- **`formAction?`**: `ButtonProps.FormAction`
  The form action that is performed by a button click.
- **`fullWidth?`**: `boolean`
  Sets the button width to be 100% of the parent container width. Button content is centered.
- **`href?`**: `string`
  Applies button styling to a link. Use this property if you need a link styled as a button (`variant=link`).
  For example, if you have a 'help' button that links to a documentation page.
- **`i18nStrings?`**: `ButtonProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component. The object should contain:
  
  * `externalIconAriaLabel` - (optional) Specifies the aria-label for the external icon when `external` is set to `true`.
- **`iconAlign?`**: `ButtonProps.IconAlign`
  Specifies the alignment of the icon.
- **`iconAlt?`**: `string`
  Specifies alternate text for a custom icon. We recommend that you provide this for accessibility.
  This property is ignored if you use a predefined icon or if you set your custom icon using the `iconSvg` slot.
- **`iconName?`**: `IconProps.Name`
  Displays an icon next to the text. You can use the `iconAlign` property to position the icon.
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
- **`nativeAnchorAttributes?`**: `NativeAttributes<React.AnchorHTMLAttributes<HTMLAnchorElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `a` element (when `href` is provided).
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`nativeButtonAttributes?`**: `NativeAttributes<React.ButtonHTMLAttributes<HTMLButtonElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `button` element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`rel?`**: `string`
  Adds a `rel` attribute to the link. By default, the component sets the `rel` attribute to "noopener noreferrer" when `target` is `"_blank"`.
  If the `rel` property is provided, it overrides the default behavior.
- **`style?`**: `ButtonProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the button's visual appearance.
  Refer to the [style](/components/button/?tabId=style) tab for more details.
- **`target?`**: `string`
  Specifies where to open the linked URL (for example, to open in a new browser window or tab use `_blank`).
  This property only applies when an `href` is provided.
- **`variant?`**: `ButtonProps.Variant`
  Determines the general styling of the button as follows:
  * `primary` for primary buttons.
  * `normal` for secondary buttons.
  * `link` for tertiary buttons.
  * `icon` to display an icon only (no text).
  * `inline-icon` to display an icon-only (no text) button within a text context.
  * `inline-link` to display a tertiary button with no outer padding.
- **`wrapText?`**: `boolean`
  Specifies if the `text` content wraps. If you set it to `false`, it prevents the text from wrapping.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onClick?`**: `CancelableEventHandler<ButtonProps.ClickDetail>`
  Called when the user clicks on the button and the button is not disabled or in loading state.
- **`onFollow?`**: `CancelableEventHandler<ButtonProps.FollowDetail>`
  Called when the user clicks on the button with the left mouse button without pressing
  modifier keys (that is, CTRL, ALT, SHIFT, META), and the button has an `href` set.

## Types

Supporting types from `ButtonProps` (verbatim):

```ts
export declare namespace ButtonProps {
  type Variant = 'normal' | 'primary' | 'link' | 'icon' | 'inline-icon' | 'inline-link';
  type ClickDetail = _ClickDetail;
  type FollowDetail = BaseNavigationDetail;
  type FormAction = 'submit' | 'none';
  type IconAlign = 'left' | 'right';
  interface I18nStrings {
    /**
     * Specifies the aria-label for the external icon when `external` is set to `true`.
     */
    externalIconAriaLabel?: string;
  }
  interface Ref {
    /**
     * Focuses the underlying native button.
     */
    focus(options?: FocusOptions): void;
  }
  interface Style {
    root?: {
      background?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      borderColor?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      borderRadius?: string;
      borderWidth?: string;
      boxShadow?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      color?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
      paddingBlock?: string;
      paddingInline?: string;
    };
  }
}
```
