# KeyValuePairs

```ts
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs'
import type { KeyValuePairsProps } from '@cloudscape-design/components/key-value-pairs'
```

Generated from `@cloudscape-design/components@3.0.1382` `key-value-pairs/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaLabel?`**: `string`
  Provides an `aria-label` to the Key-value pairs container.
  Don't use `ariaLabel` and `ariaLabelledby` at the same time.
- **`ariaLabelledby?`**: `string`
  Sets the `aria-labelledby` property on the Key-value pairs container.
  If there's a visible label element that you can reference, use this instead of `ariaLabel`.
  Don't use `ariaLabel` and `ariaLabelledby` at the same time.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`columns?`**: `number`
  Specifies the number of columns in each grid row.
  Valid values are any integer between 1 and 4. It defaults to 1.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`items`**: `ReadonlyArray<KeyValuePairsProps.Item>`
  An array of either key-value pairs individual items or groups.
  They could be combined.
  Each item has `type` prop, which might be either `group` or `pair`. Defaults to `pair` if not specified.
  
  Each key-value pair definition has the following properties:
    * `type` (string) - (Optional) Item type (pair).
    * `label` (React.ReactNode) - The key label.
    * `info` (React.ReactNode) - (Optional) Area next to the key to display an info link.
    * `value` (React.ReactNode) - The corresponding value for the key.
  
  Each group definition has the following properties:
    * `type` (string) - Item type (group).
    * `title` (string) - (Optional) An optional title for this column.
    * `items` (ReadonlyArray<KeyValuePairProps.KeyValuePair>) - An array of
      key-value pair items.
- **`minColumnWidth?`**: `number`
  Use to specify the desired minimum width for each column in pixels.
  
  The number of columns is determined by the value of this property, the available space,
  and the maximum number of columns as defined by the `columns` property.
  If not set, defaults to 150.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `KeyValuePairsProps` (verbatim):

```ts
export declare namespace KeyValuePairsProps {
  type Item = Group | Pair;
  interface Group {
    type: 'group';
    title?: string;
    items: ReadonlyArray<Pair>;
  }
  interface Pair extends BaseComponentProps {
    type?: 'pair';
    label: React.ReactNode;
    value: React.ReactNode;
    info?: React.ReactNode;
  }
}
```
