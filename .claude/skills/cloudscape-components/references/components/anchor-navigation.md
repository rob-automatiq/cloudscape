# AnchorNavigation

```ts
import AnchorNavigation from '@cloudscape-design/components/anchor-navigation'
import type { AnchorNavigationProps } from '@cloudscape-design/components/anchor-navigation'
```

Generated from `@cloudscape-design/components@3.0.1382` `anchor-navigation/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`activeHref?`**: `string`
  Specifies the active anchor href. When set, the component will operate in a
  controlled manner, and internal scroll-spy will be disabled.
- **`anchors`**: `AnchorNavigationProps.Anchor[]`
  List of anchors. Each anchor object has the following properties:
  
  * `text` (string) - The text for the anchor item.
  * `href` (string) - The `id` attribute of the target HTML element that the anchor refers to.
  For example: `"#section1.1"`
  * `level` (number) - Level of nesting of the anchor.
  * `info` (string | undefined) - Additional information to display next to the link, for example: "New" or "Updated".
  
  Note: The list of anchors should be sorted in the order they appear on the page.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component.
  
  Use this property for identifying the header or title that labels the anchor navigation.
  To use it correctly, define an ID for the element either as label, and set the property to that ID.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`scrollSpyOffset?`**: `number`
  Specifies the height (in pixels) to be considered as an offset when activating anchors.
  This is useful when you have a fixed or sticky header that might overlap with the content as you scroll.
  
  Defaults to 0.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onActiveHrefChange?`**: `NonCancelableEventHandler<AnchorNavigationProps.Anchor>`
  Fired when an active anchor link changes.
  
  Note: This event is triggered both by the component's internal scroll-spy logic,
  or when the `activeHref` prop is manually updated.
- **`onFollow?`**: `CancelableEventHandler<AnchorNavigationProps.Anchor>`
  Fired when an anchor link is clicked without any modifier keys.

## Types

Supporting types from `AnchorNavigationProps` (verbatim):

```ts
export declare namespace AnchorNavigationProps {
  interface Anchor {
    /**
     * The text for the anchor item.
     */
    text: string;
    /**
     * The `href` of the anchor. For example: `"#section1.1"`".
     */
    href: string;
    /**
     * Level of nesting of the anchor.
     */
    level: number;
    /**
     * Additional information to display next to the link, for example: "New" or "Updated".
     */
    info?: string;
  }
}
```
