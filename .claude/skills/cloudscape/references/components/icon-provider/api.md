# IconProvider

```ts
import IconProvider from '@cloudscape-design/components/icon-provider'
import type { IconProviderProps } from '@cloudscape-design/components/icon-provider'
```

Generated from `@cloudscape-design/components@3.0.1382` `icon-provider/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children`**: `ReactNode`
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`icons`**: `IconProviderProps.Icons | null`
  Specifies icon overrides using existing icon names, for example, `{'add-plus': <svg>...</svg>}`.
  
  These icon overrides will automatically be applied to any component that is a descendant of this provider, including nested providers.
  
  Set to `null` to reset the icons to the default set or set specific icon names to `null` to change them back to the default set.
  
  For example, override `AppLayout` icons but not icons in the content slot by wrapping content with an `IconProvider` with this property set to `null`.
  
  `<Icon ... />` component can be used as an override (for example, `{'close': <Icon name='arrow-left' />}`).
  However, if the icon name is the same as the key, for example, `{'close': <Icon name='close' />}` an infinite loop will be created.
  The same applies to switching icons in the same configuration (for example, `{'close': <Icon name='arrow-left' />, 'arrow-left': <Icon name='close' />}`).
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `IconProviderProps` (verbatim):

```ts
export declare namespace IconProviderProps {
  type Icons = { [name in IconProps.Name]?: ReactNode | null };
}
```
