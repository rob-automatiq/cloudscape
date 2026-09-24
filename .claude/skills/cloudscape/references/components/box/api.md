# Box

```ts
import Box from '@cloudscape-design/components/box'
import type { BoxProps } from '@cloudscape-design/components/box'
```

Generated from `@cloudscape-design/components@3.0.1382` `box/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children?`**: `React.ReactNode`
  Content of the box.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`color?`**: `BoxProps.Color`
  Overrides the text color. You can set it to the following values:
  
  - `inherit` - Inherits the color from the parent element. For example, use this to style content
       in Flashbars and to style the `empty` and `noMatch` slots of the Table and Cards components.
  - `text-label` - Specifies the text color for non-form labels. For example, use it for the key in key/value pairs.
  - `text-body-secondary` - Specifies the color for secondary text.
  - `text-status-error` - Specifies the color for error text and icons.
  - `text-status-success` - Specifies the color for success text and icons.
  - `text-status-info` - Specifies the color for info text and icon.
  - `text-status-inactive` - Specifies the color for inactive and loading text and icons.
  - `text-status-warning` - Specifies the color for warning text and icons.
  
  Note: If you don't set it, the text color depends on the variant.
- **`display?`**: `BoxProps.Display`
  Overrides the display of the element. You can set it to the following values:
  
  - `block` - Specifies block display.
  - `inline` - Specifies inline display.
  - `inline-block` - Specifies inline-block display.
  - `none` - Hides the box.
  
  Note: If you don't set it, the display depends on the variant.
- **`float?`**: `BoxProps.Float`
  Defines the floating behavior. You can set it to `left` or `right`.
- **`fontSize?`**: `BoxProps.FontSize`
  Overrides the font size and line height. If not set, the font size and line height depend on the variant.
- **`fontWeight?`**: `BoxProps.FontWeight`
  Overrides the font weight. If not set, the value depends on the variant.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`margin?`**: `BoxProps.SpacingSize | BoxProps.Spacing`
  Adds margins to the element. It can be the following:
  
  - A single string with a size. This applies the same margin to all sides (that is, top, right, bottom, left).
  - An object specifying the size of the margin per side. The object has the following format:
  ```
  {
    top: "size of top margin",
    right: "size of right margin",
    bottom: "size of bottom margin",
    left: "size of left margin",
    horizontal: "size of left and right margin",
    vertical: "size of top and bottom margin",
  }
  ```
  
  The size can be `n`, `xxxs`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `xxxl`, where `n` stands for none.
  Sizes are automatically scaled down in compact mode.
  
   For example, `margin="s"` adds a small margin to all sides.
  `margin={{ right: "l", bottom: "s" }}` adds a small margin to the bottom and a large margin to the right.
- **`nativeAttributes?`**: `NativeAttributes<React.HTMLAttributes<HTMLElement>>` _(@awsuiSystem core)_
  Attributes to add to the native element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`padding?`**: `BoxProps.SpacingSize | BoxProps.Spacing`
  Adds padding to the element. It can be the following:
  
  - A single string with a size. This applies the same padding to all sides (that is, top, right, bottom, left).
  - An object specifying the size of padding per side. The object has the following format:
  ```
  {
    top: "size of top padding",
    right: "size of right padding",
    bottom: "size of bottom padding",
    left: "size of left padding",
    horizontal: "size of left and right padding",
    vertical: "size of top and bottom padding",
  }
  ```
  
  The size can be `n`, `xxxs`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `xxxl`, where `n` stands for none.
  Sizes are automatically scaled down in compact mode.
  
   For example, `padding="s"` adds small padding to all sides.
  `padding={{ right: "l", bottom: "s" }}` adds small padding to the bottom and large padding to the right.
- **`tagOverride?`**: `string`
  Overrides the default HTML tag provided by the variant.
- **`textAlign?`**: `BoxProps.TextAlign`
  Defines the text alignment within the element. You can set it to `left`, `center`, or `right`.
- **`variant?`**: `BoxProps.Variant`
  Defines the style of element to display.
  
  - If you set it to `'div'`, `'span'`, `'h1'`, `'h2'`, `'h3'`, `'h4'`, `'h5'`, `'p'`, `'strong'`, `'small'`, `'code'`, `'pre'`, or `'samp'`, the variant is also used as the HTML tag name.
  - If you set it to `awsui-key-label`, the component will render a `div`,
    styled for use as a key label in key-value pairs.
  - If you set it to `awsui-gen-ai-label`, the component will render a `div`,
    styled for use as a label indicating that content is produced by generative AI.
  - If you set it to `awsui-value-large`, the component will render a `span`,
    styled using "Display large light" typography.
  - If you set it to `awsui-inline-code`, the component will render a `code` element,
    styled with a background and padding for inline code snippets.
  
  Override the HTML tag by using property `tagOverride`.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `BoxProps` (verbatim):

```ts
export declare namespace BoxProps {
  type Variant = 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'strong' | 'small' | 'code' | 'pre' | 'samp' | 'awsui-key-label' | 'awsui-gen-ai-label' | 'awsui-value-large' | 'awsui-inline-code';
  interface VisualAccent {
    /**
     * The coordinated background and foreground color pair applied to the accent wrapper.
     * Each color works in both light and dark modes.
     *
     * The background color is applied directly to the wrapper. The foreground color is applied
     * as the wrapper's CSS `color` and is therefore only picked up by content that inherits the
     * current color, such as an `Icon` or a nested `Box` with `color="inherit"`. Content that
     * defines its own color (for example a `Box` with an explicit `color`, or a `Link`) keeps that
     * color and is not recolored by the accent.
     */
    color: BoxProps.VisualAccent.Color;
    /**
     * Controls the aspect ratio of the accent wrapper.
     *
     * - `auto` (default) — the wrapper's width follows its content.
     * - `equal` — the wrapper has equal width and height, suitable for wrapping icons.
     *
     * Combine `aspectRatio: 'equal'` with `borderRadius: 'full'` to render a circle.
     */
    aspectRatio?: BoxProps.VisualAccent.AspectRatio;
    /**
     * The corner rounding applied to the accent wrapper. When not set, the wrapper has no
     * border radius.
     *
     * Use one of the curated t-shirt size keywords, which map to the same spacing scale used by
     * `padding` and `margin`: `xxxs`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, or `xxxl`. Use
     * `full` for fully rounded corners; combine it with `aspectRatio: 'equal'` to render a circle.
     */
    borderRadius?: BoxProps.VisualAccent.BorderRadius;
  }
  namespace VisualAccent {
    type Color = 'red' | 'yellow' | 'indigo' | 'green' | 'orange' | 'purple' | 'lime' | 'grey' | 'teal' | 'blue' | 'violet' | 'magenta' | 'pink' | 'amber';
    type AspectRatio = 'auto' | 'equal';
    type BorderRadius = 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
  }
  type Display = 'block' | 'inline' | 'inline-block' | 'none';
  type TextAlign = 'left' | 'center' | 'right';
  type Float = 'left' | 'right';
  type FontSize = 'body-s' | 'body-m' | 'heading-xs' | 'heading-s' | 'heading-m' | 'heading-l' | 'heading-xl' | 'display-l' | 'display-xl';
  type FontWeight = 'light' | 'normal' | 'bold' | 'heavy';
  type Color = 'inherit' | 'text-label' | 'text-body-secondary' | 'text-status-error' | 'text-status-success' | 'text-status-info' | 'text-status-inactive' | 'text-status-warning';
  type SpacingSize = 'n' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  interface Spacing {
    top?: BoxProps.SpacingSize;
    right?: BoxProps.SpacingSize;
    bottom?: BoxProps.SpacingSize;
    left?: BoxProps.SpacingSize;
    horizontal?: BoxProps.SpacingSize;
    vertical?: BoxProps.SpacingSize;
  }
}
```
