# Container

```ts
import Container from '@cloudscape-design/components/container'
import type { ContainerProps } from '@cloudscape-design/components/container'
```

Generated from `@cloudscape-design/components@3.0.1382` `container/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`analyticsMetadata?`**: `ContainerProps.AnalyticsMetadata`
  Specifies additional analytics-related metadata.
  * `instanceIdentifier` - A unique string that identifies this component instance in your application.
- **`children?`**: `React.ReactNode`
  Main content of the container.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`disableContentPaddings?`**: `boolean`
  Determines whether the container content has padding. If `true`, removes the default padding from the content area.
- **`disableFooterPaddings?`**: `boolean`
  Determines whether the container footer has padding. If `true`, removes the default padding from the footer.
- **`disableHeaderPaddings?`**: `boolean`
  Determines whether the container header has padding. If `true`, removes the default padding from the header.
- **`fitHeight?`**: `boolean`
  Enabling this property will make the container to fit into available height. If content is too short, the container
  will stretch, if too long, the container will shrink and show vertical scrollbar.
  
  Use this property to align heights of multiple containers displayed in a single row. It is recommended to stretch
  all containers to the height of the longest one, to avoid extra vertical scroll areas.
- **`footer?`**: `React.ReactNode`
  Footer of the container.
- **`header?`**: `React.ReactNode`
  Heading element of the container. Use the [header component](/components/header/).
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`media?`**: `ContainerProps.Media`
  Use this slot to render a media element. Supported element types are 'img', 'video', and 'picture'.
  You can define different positions and sizes for the media element within the container.
  
  * `content` - Use this slot to render your media element. We support `img`, `video`, `picture`, and `iframe` elements.
  
  * `position` - Defines the media slot's position within the container. Defaults to `top`.
  
  * `width` - Defines the width of the media slot when positioned on the side. Corresponds to the `width` CSS-property.
  When this value is set, media elements larger than the defined width may be cropped, with 'object-fit: cover' centering it.
  Note: This value is considered only when `position` is set to `side`.
  If no width is provided, the media slot will take a maximum of 66% of the container's width.
  
  * `height` - Defines the height of the media slot when position on the top. Corresponds to the `height` CSS-property.
  When this value is set, media elements larger than the defined width may be cropped, with 'object-fit: cover' centering it.   * Note: This value is only considered if `position` is set to `top`.
  If no height is provided, the media slot will be displayed at its full height.
- **`style?`**: `ContainerProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the container's visual appearance.
  Refer to the [style](/components/container/?tabId=style) tab for more details.
- **`variant?`**: `'default' | 'stacked'`
  Specify a container variant with one of the following:
  * `default` - Use this variant in standalone context.
  * `stacked` - Use this variant adjacent to other stacked containers (such as a container,
                table).

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `ContainerProps` (verbatim):

```ts
export declare namespace ContainerProps {
  interface AnalyticsMetadata {
    instanceIdentifier?: string;
  }
  interface Media {
    /**
     * Use this slot to render your media element. We support `img`, `video`, `picture`, and `iframe` elements.
     */
    content: React.ReactNode;
    /**
     * Defines the media slot's position within the container. Defaults to `top`.
     */
    position?: 'top' | 'side';
    /**
     * Defines the width of the media slot when positioned on the side. Corresponds to the `width` CSS-property.
     * When this value is set, the media element may be cropped, with `object-fit: cover` centering it.
     *
     * Note: This value is considered only when `position` is set to `side`.
     * If no width is provided, the media slot will take a maximum of 66% of the container's width.
     */
    width?: string | number;
    /**
     * Defines the height of the media slot when position on the top. Corresponds to the `height` CSS-property.
     * When this value is set, the media element may be cropped, with `object-fit: cover` centering it.
     *
     * Note: This value is only considered if `position` is set to `top`.
     * If no height is provided, the media slot will be displayed at its full height.
     */
    height?: string | number;
  }
  interface Style {
    root?: {
      background?: string;
      borderColor?: string;
      borderRadius?: string;
      borderWidth?: string;
      boxShadow?: string;
      color?: string;
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
      root: {
        paddingBlock?: string;
        paddingInline?: string;
      };
      divider: {
        borderColor?: string;
        borderWidth?: string;
      };
    };
  }
}
```
