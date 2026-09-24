# Link

```ts
import Link from '@cloudscape-design/components/link'
import type { LinkProps } from '@cloudscape-design/components/link'
```

Generated from `@cloudscape-design/components@3.0.1382` `link/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaLabel?`**: `string`
  Adds an aria-label to the HTML element.
- **`children?`**: `React.ReactNode`
  The text to render inside the link.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`color?`**: `LinkProps.Color`
  Determines the text color of the link and its icon.
  
  - `normal`: Use in most cases where a link is required.
  - `inverted`: Use to style links inside Flashbars.
  
  This property is overridden if the variant is `info`.
- **`external?`**: `boolean`
  Marks the link as external by adding an icon after the text. If `href`
  is provided, opens the link in a new tab when clicked.
- **`externalIconAriaLabel?`**: `string` _(@i18n)_
  Adds an aria-label to the external icon.
- **`fontSize?`**: `LinkProps.FontSize`
  Determines the font size and line height.
  This property is overridden if the variant is `info`.
- **`href?`**: `string`
  The URL that the link points to.
  If an `href` is not provided, the component will render using a
  "button" role and `target` will not be used.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`nativeAttributes?`**: `NativeAttributes<React.AnchorHTMLAttributes<HTMLAnchorElement>>` _(@awsuiSystem core)_
  Attributes to add to the native element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`rel?`**: `string`
  Adds a `rel` attribute to the link. If the `rel` property is provided, it overrides the default behaviour.
  By default, the component sets the `rel` attribute to "noopener noreferrer" when `external` is `true` or `target` is `"_blank"`.
- **`style?`**: `LinkProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the link's visual appearance.
  Refer to the [style](../link/guidelines.md) tab for more details.
- **`target?`**: `string`
  Specifies where to open the linked URL. Set this to `_blank` to open the URL
  in a new tab. If you set this property to `_blank`, the component
  automatically adds `rel="noopener noreferrer"` to avoid performance
  and security issues.
  
  For other options see the documentation for <a> tag's
  [target attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
- **`variant?`**: `LinkProps.Variant`
  Determines the visual style of the link as follows:
  
  - `primary` - Displays the link text with an underline for sufficient contrast with surrounding text.
      Use this for links adjacent to other text, such as inside a paragraph, a "Learn more" link,
      an item ID in a table, a link in a key-value pair, or a link in an alert.
  - `secondary` - Uses regular font weight without additional interactivity indicators (except for an underline on hover).
      Use this where context implies interactivity and users can identify links easily,
      such as in a list of links inside a container.
  - `info` - Use for "info" links that link to content in a help panel.
  
  The default is `secondary`, except inside the following components where it defaults to `primary`:
  - Table
  - Cards
  - Alert
  - Popover
  - Help Panel (main `content` only)

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onClick?`**: `NonCancelableEventHandler<LinkProps.ClickDetail>`
  Called when the user clicks on the link. Do not use this handler for navigation, use the `onFollow` event instead.
- **`onFollow?`**: `CancelableEventHandler<LinkProps.FollowDetail>`
  Called when a link is clicked without any modifier keys. If the link has no `href` provided, it will be called on
  all clicks.
  
  If you want to implement client-side routing yourself, use this event and prevent default browser navigation
  (by calling `preventDefault`).

## Types

Supporting types from `LinkProps` (verbatim):

```ts
export declare namespace LinkProps {
  type Variant = 'primary' | 'secondary' | 'info' | 'awsui-value-large';
  type FontSize = 'body-s' | 'body-m' | 'heading-xs' | 'heading-s' | 'heading-m' | 'heading-l' | 'heading-xl' | 'display-l' | 'inherit';
  type Color = 'normal' | 'inverted';
  type FollowDetail = BaseNavigationDetail;
  interface Ref {
    /**
     * Sets the browser focus on the anchor element.
     */
    focus(): void;
  }
  type ClickDetail = _ClickDetail;
  interface Style {
    root?: {
      color?: {
        active?: string;
        default?: string;
        hover?: string;
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
  }
}
```
