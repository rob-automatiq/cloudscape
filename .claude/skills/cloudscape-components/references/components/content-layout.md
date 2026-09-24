# ContentLayout

```ts
import ContentLayout from '@cloudscape-design/components/content-layout'
import type { ContentLayoutProps } from '@cloudscape-design/components/content-layout'
```

Generated from `@cloudscape-design/components@3.0.1382` `content-layout/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`breadcrumbs?`**: `React.ReactNode`
  Use this slot to add the [breadcrumb group component](/components/breadcrumb-group/) to the content layout:
  * if your application does not use the [app layout component](/components/app-layout/), which already offers a `breadcrumbs` slot.
  * If your page uses the [app layout component](/components/app-layout/) with `disableContentPaddings=true`.
  
  Do not use in conjunction with the `breadcrumbs` slot in the [app layout component](/components/app-layout/).
- **`children?`**: `React.ReactNode`
  Use this slot to render the main content of the layout below the header.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`defaultPadding?`**: `boolean`
  Set it to `true` if your page uses the [app layout component](/components/app-layout/) with `disableContentPaddings=true`.
  In that case, the content layout will become sensitive to the state of drawers in app layout and leave the necessary padding to avoid visual overlap with those elements.
- **`disableOverlap?`**: `boolean`
  Determines whether the layout has an overlap between the header and content.
  If true, the overlap will be removed.
- **`header?`**: `React.ReactNode`
  Use this slot to render the header content for the layout.
- **`headerBackgroundStyle?`**: `string | ((mode: 'light' | 'dark') => string)`
  Use this property to style the background of the header.
  
  It can be:
  * a string representing the CSS `background` value for the header element.
  * a function that receives the mode ("light" or "dark") as a parameter and returns a string.
  
   The header background spans across the full available width, independent of the specified `maxContentWidth`.
   If set, the component will not add the default background color to the header.
- **`headerVariant?`**: `'default' | 'high-contrast' | 'divider'`
  Determines the visual treatment for the header. Specifically:
  * `default` - Does not apply any visual treatment.
  * `high-contrast` - Applies high-contrast to the background of the header and the elements contained within it.
      If you are using the AppLayout component, set `headerVariant="high-contrast"` to apply the same treatment to the breadcrumbs and notifications slots.
  * `divider` - Adds a horizontal separator between the header and the content.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`maxContentWidth?`**: `number`
  Maximum width for the content.
  If set, all elements of the content layout (header, content, notifications, breadcrumbs) will be center-aligned and have the desired maximum width.
  If not set, all elements will occupy the full available width.
- **`notifications?`**: `React.ReactNode`
  Use this slot to display [notifications](/components/flashbar/) to the content layout:
  * If your page does not use the [app layout component](/components/app-layout/), which already offers a `notifications` slot.
  * If your page uses the [app layout component](/components/app-layout/) with `disableContentPaddings=true`.
  
  Do not use in conjunction with the `notifications` slot in the [app layout component](/components/app-layout/).
- **`secondaryHeader?`**: `React.ReactNode`
  Use this slot to add a secondary element inside the header. The secondary element will be displayed next to main header and occupy 25% of the available space.
  Note that the secondary header will not have a high-contrast treatement, even if you set `headerVariant` to `high-contrast`.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._
