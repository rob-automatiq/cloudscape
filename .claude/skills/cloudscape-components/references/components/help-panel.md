# HelpPanel

```ts
import HelpPanel from '@cloudscape-design/components/help-panel'
import type { HelpPanelProps } from '@cloudscape-design/components/help-panel'
```

Generated from `@cloudscape-design/components@3.0.1382` `help-panel/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children?`**: `React.ReactNode`
  Main content of the help panel.
  
  Use `p, a, h3, h4, h5, span, div, ul, ol, li, code, pre, dl, dt, dd, hr, br, i, em, b, strong` tags to format the content.
  Use `code` for inline code or `pre` for code blocks.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`footer?`**: `React.ReactNode`
  Footer of the help panel.
- **`header?`**: `React.ReactNode`
  Header of the help panel.
  
  It should contain the only `h2` used in the help panel.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`loading?`**: `boolean`
  Renders the panel in a loading state. We recommend that you also set a `loadingText`.
- **`loadingText?`**: `string` _(@i18n)_
  Specifies the text that's displayed when the panel is in a loading state.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._
