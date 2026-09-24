# AttributeEditor

```ts
import AttributeEditor from '@cloudscape-design/components/attribute-editor'
import type { AttributeEditorProps } from '@cloudscape-design/components/attribute-editor'
```

Generated from `@cloudscape-design/components@3.0.1382` `attribute-editor/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`addButtonText`**: `string`
  Specifies the text that's displayed in the add button.
- **`addButtonVariant?`**: `AttributeEditorProps.AddButtonVariant`
  Specifies the variant to use for the add button. By default a normal button is used.
  Use `inline-link` when using an attribute editor nested inside complex attribute editing
  with expandable sections.
- **`additionalActions?`**: `React.ReactNode`
  Specifies additional actions displayed next to the add-button (or instead of the add-button if hidden).
- **`additionalInfo?`**: `React.ReactNode`
  Displayed below the add button. Use it for additional information related to the attribute editor.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`customRowActions?`**: `(props: AttributeEditorProps.RowActionsProps<T>) => React.ReactNode`
  Specifies a custom action trigger for each row, in place of the remove button.
  Only button and button dropdown components are supported.
  If you provide this, `removeButtonText`, `removeButtonAriaLabel`,
  and `onRemoveButtonClick` will be ignored.
  The trigger must be given the provided `ref` in order for `focusRemoveButton`
  to work.
  The function receives the following properties:
  - `item`: The item being rendered in the current row.
  - `itemIndex` (`number`): The index of the item.
  - `ref` (`ReactRef`): A React ref that should be passed to the rendered button.
  - `breakpoint` (`Breakpoint`): The current breakpoint, for responsive behavior.
  - `ownRow` (`boolean`): Whether the button is rendered on its own row.
- **`definition`**: `ReadonlyArray<AttributeEditorProps.FieldDefinition<T>>`
  Defines the editor configuration. Each object in the array represents one form field in the row.
  If more than 6 attributes are specified, a `gridLayout` must be provided.
  
  * `label` (ReactNode) - Text label for the form field.
  * `description` (ReactNode) - Additional description for the form field.
  * `info` (ReactNode) - Info link for the form field.
  * `errorText` ((item, itemIndex) => ReactNode) - Error message text to display as a control validation message.
     It renders the form field as invalid if the returned value is not `null` or `undefined`.
  * `warningText` ((item, itemIndex) => ReactNode) - Warning message text to display as a control validation message.
     It renders the form field in a warning state if the returned value is not `null` or `undefined`.
  * `constraintText` ((item, itemIndex) => ReactNode) - Text to display as a constraint message below the field.
  * `control` ((item, itemIndex) => ReactNode) - A control to use as the input for the field.
- **`disableAddButton?`**: `boolean`
  Determines whether the add button is disabled.
- **`empty?`**: `React.ReactNode`
  Displayed when there are no items to display.
- **`gridLayout?`**: `ReadonlyArray<AttributeEditorProps.GridLayout>`
  Optionally specifies the layout of the attributes. By default, all attributes will be
  equally spaced and wrapped into multiple rows on smaller viewports.
  
  A `gridLayout` is an array of breakpoint definitions. Each definition consists of:
  - `rows` (`number[][]`): the rows in which to display the attributes. Each row consists of a list of numbers indicating
    the relative width of each attribute. For example, `[[1, 1, 1, 1]]` is a single row of four evenly-spaced attributes,
    or `[[1, 2], [1, 1, 1]]` splits five attributes onto two rows.
  - `breakpoint` (`string`): optionally specifies that the given entry should only be used when at least that much width is available.
  - `removeButton`: optionally configures the remove (or row action) button placement. If this is not provided, the button will be
    placed at the end of a single row, or below if multiple rows are present. The `removeButton` property supports contains two properties:
    - `ownRow` (`boolean`): forces the remove button onto its own row.
    - `width` (`number | 'auto'`): a number indicating the relative width (equivalent to a `rows` entry), or 'auto' to fit to the button width.
- **`hideAddButton?`**: `boolean`
  Determines whether the add button is hidden
- **`i18nStrings?`**: `AttributeEditorProps.I18nStrings<T>` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`isItemRemovable?`**: `AttributeEditorProps.IsItemRemovableFunction<T>`
  Function that determines whether an item is removable. When this function returns `false`, the remove
  button is not rendered and the user can't remove the item.
  By default, all items are removable.
- **`items?`**: `ReadonlyArray<T>`
  Specifies the items that serve as the data source for all rows.
  The display of a row is handled by the `definition` property.
- **`removeButtonAriaLabel?`**: `(item: T) => string`
  Adds an `aria-label` to the remove button.
- **`removeButtonText?`**: `string` _(@i18n)_
  Specifies the text that's displayed in the remove button.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onAddButtonClick?`**: `NonCancelableEventHandler`
  Called when add button is clicked.
- **`onRemoveButtonClick?`**: `NonCancelableEventHandler<AttributeEditorProps.RemoveButtonClickDetail>`
  Called when remove button is clicked.
  The event `detail` contains the index of the corresponding item.

## Types

Supporting types from `AttributeEditorProps` (verbatim):

```ts
export declare namespace AttributeEditorProps {
  interface IsItemRemovableFunction<T> {
    (item: T): boolean;
  }
  type FieldRenderable<T> = (item: T, itemIndex: number) => React.ReactNode;
  interface FieldDefinition<T> {
    label?: React.ReactNode;
    description?: React.ReactNode;
    info?: React.ReactNode;
    control?: FieldRenderable<T> | React.ReactNode;
    errorText?: FieldRenderable<T> | React.ReactNode;
    warningText?: FieldRenderable<T> | React.ReactNode;
    constraintText?: FieldRenderable<T> | React.ReactNode;
  }
  type AddButtonVariant = 'normal' | 'inline-link';
  interface RemoveButtonClickDetail {
    itemIndex: number;
  }
  interface Ref {
    /**
     * Focuses the 'remove' button for the given row index.
     */
    focusRemoveButton(itemIndex: number): void;
    /**
     * Focuses the 'add' button. Use this, for example, after a user removes the last row.
     */
    focusAddButton(): void;
  }
  interface RowActionsProps<T> {
    item: T;
    itemIndex: number;
    ref: React.Ref<ButtonDropdownProps.Ref>;
    breakpoint: Breakpoint | null;
    ownRow: boolean;
  }
  interface I18nStrings<T = any> {
    /**
     * Provides a text alternative for the error icon in the error message.
     */
    errorIconAriaLabel?: string;
    /**
     * Provides a text alternative for the warning icon in the warning message.
     */
    warningIconAriaLabel?: string;
    /**
     * Announcement made to screen readers when an item is removed.
     */
    itemRemovedAriaLive?: string;
    /**
     * @deprecated Use `removeButtonAriaLabel` on the component instead.
     */
    removeButtonAriaLabel?: (item: T) => string;
  }
  type Breakpoint = InternalBreakpoint;
  interface GridLayout {
    breakpoint?: Breakpoint;
    rows: ReadonlyArray<ReadonlyArray<number>>;
    removeButton?: {
      ownRow?: boolean;
      width?: number | 'auto';
    };
  }
}
```
