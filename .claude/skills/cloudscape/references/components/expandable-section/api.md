# ExpandableSection

```ts
import ExpandableSection from '@cloudscape-design/components/expandable-section'
import type { ExpandableSectionProps } from '@cloudscape-design/components/expandable-section'
```

Generated from `@cloudscape-design/components@3.0.1382` `expandable-section/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`analyticsMetadata?`**: `ExpandableSectionProps.AnalyticsMetadata`
  Specifies additional analytics-related metadata.
  * `instanceIdentifier` - A unique string that identifies this component instance in your application.
- **`children?`**: `React.ReactNode`
  Primary content displayed in the expandable section element.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`defaultExpanded?`**: `boolean`
  Determines whether the component initially displays in expanded state (that is, with content visible). The component operates in an uncontrolled
  manner even if you provide a value for this property.
- **`disableContentPaddings?`**: `boolean`
  Determines whether the default padding around the content section is removed.
- **`expanded?`**: `boolean`
  Determines whether the component is in the expanded state (that is, with content visible). The component operates in a controlled
  manner if you provide a value for this property.
- **`header?`**: `React.ReactNode` _(@deprecated Use `headerText` instead.)_
- **`headerActions?`**: `React.ReactNode`
  Actions for the header. Use with the default or container variant.
- **`headerAriaLabel?`**: `string`
  Adds `aria-label` to the header element.
  Use to assign unique labels when there are multiple expandable sections with the same header text on one page.
- **`headerCounter?`**: `string`
  Specifies secondary text that's displayed to the right of the heading title. Use with the container variant.
  Behaves similar to the Header component counter.
- **`headerDescription?`**: `string`
  Supplementary text below the heading. Use with the container, default or footer variants.
- **`headerInfo?`**: `React.ReactNode`
  The area next to the heading, used to display an Info link. Use with the container variant.
- **`headerText?`**: `React.ReactNode`
  The heading text. Use plain text. When using the container variant, you can use additional header props like `headerDescription` and `headerCounter` to display other elements in the header.
- **`headingTagOverride?`**: `ExpandableSectionProps.HeadingTag`
  Overrides the default [HTML heading tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).
  Use with the container variant (which defaults to H2) or default/footer variants (which default to DIV). Using this
  property does not change the visual appearance of the component. Note that this only works with the `headerText`
  slot (not with the deprecated `header`), and not with the navigation variant.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`variant?`**: `ExpandableSectionProps.Variant`
  The possible variants of an expandable section are as follows:
   * `default` - Use this variant in any context.
   * `footer` - Use this variant in container footers.
   * `container` - Use this variant in a detail page alongside other containers.
   * `navigation` - Use this variant in the navigation panel with anchors and custom styled content.
     It doesn't have any default styles.
  * `stacked` - Use this variant directly adjacent to other stacked containers (such as a container, table).
  * `inline` - Use this variant in any context where you need reduced padding around the header.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<ExpandableSectionProps.ChangeDetail>`
  Called when the state changes (that is, when the user expands or collapses the component).
  The event `detail` contains the current value of the `expanded` property.

## Types

Supporting types from `ExpandableSectionProps` (verbatim):

```ts
export declare namespace ExpandableSectionProps {
  interface AnalyticsMetadata {
    instanceIdentifier?: string;
  }
  type Variant = 'default' | 'footer' | 'container' | 'navigation' | 'stacked' | 'inline';
  interface ChangeDetail {
    expanded: boolean;
  }
  type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}
```
