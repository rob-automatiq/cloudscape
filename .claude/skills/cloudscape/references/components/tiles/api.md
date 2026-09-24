# Tiles

```ts
import Tiles from '@cloudscape-design/components/tiles'
import type { TilesProps } from '@cloudscape-design/components/tiles'
```

Generated from `@cloudscape-design/components@3.0.1382` `tiles/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaControls?`**: `string`
  Adds `aria-controls` attribute to the component.
  If the component controls any secondary content (for example, another form field), use this to provide an ID referring to the secondary content.
- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaLabel?`**: `string`
  Adds `aria-label` on the group. Don't set this property if you are using this form element within a form field
  because the form field component automatically sets the correct labels to make the component accessible.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`ariaRequired?`**: `boolean`
  Adds `aria-required` on the group.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`columns?`**: `number`
  The number of columns for the tiles to be displayed in. Valid values are integers between 1 and 4.
  If no value is specified, the number of columns is determined based on the number of items, with a maximum of 3.
  It is set to 2 if 4 or 8 items are supplied in order to optimize the layout.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`items?`**: `ReadonlyArray<TilesProps.TilesDefinition>`
  List of tile definitions. Each tile has the following properties:
  
  - `value` [string] - The value that will be associated with the tile. This is the value the tiles will get when the radio button is selected.
  - `label` [ReactNode] - A short description for the option the tile represents.
  - `description` [ReactNode] - (Optional) Further explanatory guidance on the tile option, shown below the `label`.
  - `image` [ReactNode] - (Optional) Visually distinctive image for the tile option, shown below the `description`.
  - `disabled` [boolean] - (Optional) Specifies whether the tile is disabled. Users can't select disabled tiles.
  - `controlId` [string] - (Optional) The ID of the internal input. You can use this to relate a label element's `for` attribute to this control.
             We recommend that you don't set this property because it's automatically set by the tiles component.
- **`name?`**: `string`
  Specify a custom name for the native radio buttons. If not provided, the tiles component generates a random name.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value, but does not prevent the value from
  being included in a form submission. A read-only control is still focusable.
- **`value`**: `string | null`
  Specifies the value of the selected tile.
  If you want to clear the selection, use `null`.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<TilesProps.ChangeDetail>`
  Called when the user selects a different tile.

## Types

Supporting types from `TilesProps` (verbatim):

```ts
export declare namespace TilesProps {
  type Breakpoint = _Breakpoint;
  interface TilesDefinition {
    value: string;
    label: React.ReactNode;
    description?: React.ReactNode;
    image?: React.ReactNode;
    disabled?: boolean;
    controlId?: string;
  }
  interface ChangeDetail {
    value: string;
  }
  interface Ref {
    /**
     * Sets input focus onto the UI control.
     */
    focus(): void;
  }
}
```
