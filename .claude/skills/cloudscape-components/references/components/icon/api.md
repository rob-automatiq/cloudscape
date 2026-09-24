# Icon

```ts
import Icon from '@cloudscape-design/components/icon'
import type { IconProps } from '@cloudscape-design/components/icon'
```

Generated from `@cloudscape-design/components@3.0.1382` `icon/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`alt?`**: `string` _(@deprecated Use `ariaLabel` instead.)_
  Specifies alternate text for a custom icon (using the `url` attribute).
  This property is ignored if you use a predefined icon or if you set your custom icon using the `svg` slot.
- **`ariaLabel?`**: `string`
  Specifies alternate text for the icon. We recommend that you provide this for accessibility.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`name?`**: `IconProps.Name`
  Specifies the icon to be displayed.
- **`nativeAttributes?`**: `NativeAttributes<React.HTMLAttributes<HTMLElement>>` _(@awsuiSystem core)_
  Attributes to add to the native element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`size?`**: `IconProps.Size`
  Specifies the size of the icon.
  
  If you set size to `inherit`, an icon size will be assigned based on the icon's inherited line height.
  For icons used alongside text, ensure the icon is placed inside the acompanying text tag.
  The icon will be vertically centered based on the height.
- **`svg?`**: `React.ReactNode`
  Specifies the SVG of a custom icon.
  
  Use this property if the icon you want isn't available, and you want your custom icon to inherit colors dictated by variant or hover states.
  When this property is set, the component will be decorated with `aria-hidden="true"`. Ensure that the `svg` element:
  - has attribute `focusable="false"`.
  - has `viewBox="0 0 16 16"`.
  
  If you set the `svg` element as the root node of the slot, the component will automatically
  - set `stroke="currentColor"`, `fill="none"`, and `vertical-align="top"`.
  - set the stroke width based on the size of the icon.
  - set the width and height of the SVG element based on the size of the icon.
  
  If you don't want these styles to be automatically set, wrap the `svg` element into a `span` and ensure icon `size` is not set to `inherit`.
  You can still set the stroke to `currentColor` to inherit the color of the surrounding elements.
  
  If you set both `url` and `svg`, `svg` will take precedence.
  
  *Note:* Remember to remove any additional elements (for example: `defs`) and related CSS classes from SVG files exported from design software.
  In most cases, they aren't needed, as the `svg` element inherits styles from the icon component.
- **`url?`**: `string`
  Specifies the URL of a custom icon. Use this property if the icon you want isn't available, and your custom icon cannot be an SVG.
  For SVG icons, use the `svg` slot instead.
  
  If you set both `url` and `svg`, `svg` will take precedence.
- **`variant?`**: `IconProps.Variant`
  Specifies the color variant of the icon. The `normal` variant picks up the current color of its context.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `IconProps` (verbatim):

```ts
export declare namespace IconProps {
  type Name = BuiltInIconName | IconRegistryIconName;
  type Variant = 'normal' | 'disabled' | 'error' | 'inverted' | 'link' | 'subtle' | 'success' | 'warning' | 'info';
  type Size = 'x-small' | 'small' | 'normal' | 'medium' | 'big' | 'large' | 'inherit';
}
```
