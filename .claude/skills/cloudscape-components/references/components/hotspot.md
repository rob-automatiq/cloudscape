# Hotspot

```ts
import Hotspot from '@cloudscape-design/components/hotspot'
import type { HotspotProps } from '@cloudscape-design/components/hotspot'
```

Generated from `@cloudscape-design/components@3.0.1382` `hotspot/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children?`**: `React.ReactNode`
  Content that should be wrapped by the hotspot icon. Optional.
  
  If you supply this property, the hotspot will wrap it in an element with
  `flex: 1`, in order to give the children the maximum available space. The
  hotspot icon will be placed floating next to the children. Use
  this if you are wrapping e.g. an input field that should use the full
  available width, or a button.
  
  If you do not supply this property, the hotspot icon will behave as an inline
  element. Use this if you want to place the hotspot icon on a label, e.g. a
  checkbox's label.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`direction?`**: `'top' | 'right' | 'bottom' | 'left'`
  The direction that the annotation popover should open in.
  Change this property if in the default direction the annotation popover
  overlaps too much with other content on the page.
- **`hotspotId`**: `string`
  ID of this hotspot. Use this ID in your tutorial data to refer to this
  hotspot's location in your application. The ID must be unique
  throughout your whole application.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`side?`**: `'left' | 'right'`
  On which side of the content the hotspot icon should be displayed.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._
