# Header

```ts
import Header from '@cloudscape-design/components/header'
import type { HeaderProps } from '@cloudscape-design/components/header'
```

Generated from `@cloudscape-design/components@3.0.1382` `header/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`actions?`**: `React.ReactNode`
  Actions for the container.
- **`children?`**: `React.ReactNode`
  The heading text. Plain text is recommended. The component renders the
  HTML heading tag based on the specified `variant` or `headingTagOverride`.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`counter?`**: `React.ReactNode`
  Specifies secondary content that's displayed to the right of the heading title. This is commonly used
  to display resource counters in table and cards components.
- **`description?`**: `React.ReactNode`
  Supplementary text below the heading.
- **`headingTagOverride?`**: `HeaderProps.HeadingTag`
  Overrides the default [HTML heading tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
  provided by the variant. Using this property does not change the visual appearance of the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`info?`**: `React.ReactNode`
  Area next to the heading to display an Info link.
- **`variant?`**: `HeaderProps.Variant`
  Specifies the variant of the header:
  * `h1` - Use this for page level headers.
  * `h2` - Use this for container level headers.
  * `h3` - Use this for section level headers.
  * `awsui-h1-sticky` - Use this for sticky headers in cards and tables.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `HeaderProps` (verbatim):

```ts
export declare namespace HeaderProps {
  type Variant = 'h1' | 'h2' | 'h3' | 'awsui-h1-sticky';
  type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}
```
