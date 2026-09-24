# BreadcrumbGroup

```ts
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group'
import type { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group'
```

Generated from `@cloudscape-design/components@3.0.1382` `breadcrumb-group/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaLabel?`**: `string`
  Provides an `aria-label` to the breadcrumb group that screen readers can read (for accessibility).
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`expandAriaLabel?`**: `string` _(@i18n)_
  Provides an `aria-label` to the ellipsis button that screen readers can read (for accessibility).
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`items`**: `ReadonlyArray<T>`
  An array of breadcrumb items that describes the link hierarchy for this navigation.
  Each option has the following properties:
    * `text` (string) - Specifies the title text of the breadcrumb item.
  * `href` (string) - Specifies the URL for the link in the breadcrumb item.
  You should specify the link even if you have a click handler for a breadcrumb item
  to ensure that valid markup is generated.
    Note: The last breadcrumb item is automatically considered the current item, and it's
  not a link.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onClick?`**: `CancelableEventHandler<BreadcrumbGroupProps.ClickDetail<T>>`
  Called when the user clicks on a breadcrumb item. Do not use this handler for navigation, use the `onFollow` event instead.
- **`onFollow?`**: `CancelableEventHandler<BreadcrumbGroupProps.ClickDetail<T>>`
  Called when the user clicks on a breadcrumb item with the left mouse button
  without pressing modifier keys (that is, CTRL, ALT, SHIFT, META).

## Types

Supporting types from `BreadcrumbGroupProps` (verbatim):

```ts
export declare namespace BreadcrumbGroupProps {
  interface Item {
    text: string;
    href: string;
  }
  interface ClickDetail<T extends BreadcrumbGroupProps.Item = BreadcrumbGroupProps.Item> extends BaseNavigationDetail {
    item: T;
    text: string;
    href: string;
  }
}
```
