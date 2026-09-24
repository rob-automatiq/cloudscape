# TruncatedText

```ts
import TruncatedText from '@cloudscape-design/components/truncated-text'
import type { TruncatedTextProps } from '@cloudscape-design/components/truncated-text'
```

Generated from `@cloudscape-design/components@3.0.1382` `truncated-text/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children?`**: `React.ReactNode`
  The inline text to display. If there isn't enough space to render the text
  in a single line, it is truncated with an ellipsis and the full content is
  shown on pointer hover or keyboard focus.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`tooltipText?`**: `string`
  The content of the tooltip shown when the text is truncated. By default, the
  tooltip content is the same as the `children` slot. Use only if the `children`
  slot may contain interactive elements.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._
