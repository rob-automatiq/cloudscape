# ItemCard

```ts
import ItemCard from '@cloudscape-design/components/item-card'
import type { ItemCardProps } from '@cloudscape-design/components/item-card'
```

Generated from `@cloudscape-design/components@3.0.1382` `item-card/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`actions?`**: `React.ReactNode`
  Actions to display in the item card header area, typically buttons or links.
- **`children?`**: `React.ReactNode`
  Main content of the item card.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`description?`**: `React.ReactNode`
  A description or subtitle displayed below the header.
- **`disableContentPaddings?`**: `boolean`
  Removes the default padding from the content area.
- **`disableFooterPaddings?`**: `boolean`
  Removes the default padding from the footer area.
- **`disableHeaderPaddings?`**: `boolean`
  Removes the default padding from the header area.
- **`footer?`**: `React.ReactNode`
  Footer content displayed at the bottom of the item card.
- **`header?`**: `React.ReactNode`
  Heading element of the item card. Use this to add a title or header text.
- **`icon?`**: `React.ReactNode`
  Icon content displayed next to the header.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`nativeAttributes?`**: `NativeAttributes<React.HTMLAttributes<HTMLDivElement>>` _(@awsuiSystem core)_
  Attributes to add to the native root element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`style?`**: `ItemCardProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the item card's visual appearance.
  Refer to the [style](/components/item-card/?tabId=style) tab for more details.
- **`variant?`**: `ItemCardProps.Variant`
  Specifies the visual variant of the item card, which controls the border radius and padding.
  
  - `default` - Uses container-level border radius and padding (larger).
  - `embedded` - Uses compact border radius and padding (smaller).

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `ItemCardProps` (verbatim):

```ts
export declare namespace ItemCardProps {
  type Variant = 'embedded' | 'default';
  interface Style {
    root?: {
      background?: string;
      borderColor?: string;
      borderRadius?: string;
      borderWidth?: string;
      boxShadow?: string;
    };
    content?: {
      paddingBlock?: string;
      paddingInline?: string;
    };
    header?: {
      paddingBlock?: string;
      paddingInline?: string;
    };
    footer?: {
      root?: {
        paddingBlock?: string;
        paddingInline?: string;
      };
      divider?: {
        borderColor?: string;
        borderWidth?: string;
      };
    };
  }
}
```
