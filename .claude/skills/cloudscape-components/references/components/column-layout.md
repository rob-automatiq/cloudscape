# ColumnLayout

```ts
import ColumnLayout from '@cloudscape-design/components/column-layout'
import type { ColumnLayoutProps } from '@cloudscape-design/components/column-layout'
```

Generated from `@cloudscape-design/components@3.0.1382` `column-layout/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`borders?`**: `ColumnLayoutProps.Borders`
  Controls whether dividers are placed between rows and columns.
  
  Note: This is not supported when used with `minColumnWidth`.
- **`children?`**: `React.ReactNode`
  The columns to render.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`columns?`**: `number`
  Specifies the number of columns in each grid row.
  When `minColumnWidth` is not set, only up to 4 columns are supported.
- **`disableGutters?`**: `boolean`
  Determines whether the default gutters between columns are removed.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`minColumnWidth?`**: `number`
  Use together with `columns` to specify the desired minimum width for each column in pixels.
  
  The number of columns is determined by the value of this property, the available space,
  and the maximum number of columns as defined by the `columns` property.
- **`variant?`**: `ColumnLayoutProps.Variant`
  Specifies the content type. This determines the spacing of the grid.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `ColumnLayoutProps` (verbatim):

```ts
export declare namespace ColumnLayoutProps {
  type Variant = 'default' | 'text-grid';
  type Borders = 'none' | 'vertical' | 'horizontal' | 'all';
}
```
