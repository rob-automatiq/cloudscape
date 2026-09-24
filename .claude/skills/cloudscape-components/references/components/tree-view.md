# TreeView

```ts
import TreeView from '@cloudscape-design/components/tree-view'
import type { TreeViewProps } from '@cloudscape-design/components/tree-view'
```

Generated from `@cloudscape-design/components@3.0.1382` `tree-view/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Sets the `aria-describedby` property on the tree view.
- **`ariaLabel?`**: `string`
  Provides an `aria-label` to the tree view that screen readers can read (for accessibility).
  Don't use `ariaLabel` and `ariaLabelledby` at the same time.
- **`ariaLabelledby?`**: `string`
  Sets the `aria-labelledby` property on the tree view.
  If there's a visible label element that you can reference, use this instead of `ariaLabel`.
  Don't use `ariaLabel` and `ariaLabelledby` at the same time.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`connectorLines?`**: `TreeViewProps.ConnectorLinesVariant`
  Shows connector lines highlighting hierarchy between parent and child items.
- **`expandedItems?`**: `ReadonlyArray<string>`
  Provides the IDs of the expanded tree view items. It controls whether an item is expanded or collapsed.
- **`getItemChildren`**: `(item: T, index: number) => ReadonlyArray<T> | undefined`
  Specifies the nested items that are displayed when a tree view item gets expanded.
- **`getItemId`**: `(item: T, index: number) => string`
  Provides a unique identifier for each tree view item.
- **`i18nStrings?`**: `TreeViewProps.I18nStrings<T>` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`items`**: `ReadonlyArray<T>`
  Specifies the top-level items to display in the tree view. Use `getItemChildren` to provide nested items.
- **`renderItem`**: `(item: T, index: number) => TreeViewProps.TreeItem`
  Use this property to map your data to tree view items. This property must return an object with the following properties:
  * `content` (ReactNode) - The content of the item.
  * `icon` (ReactNode) - (Optional) The icon of the item.
  * `secondaryContent` (ReactNode) - (Optional) Secondary content of the item, such as a description of the item.
  * `actions` (ReactNode) - (Optional) Actions related to the item. Use [button](/components/button/?tabId=playground&example=inline-icon-button) with inline-icon or inline-link variants. For items with multiple actions, use [button dropdown](/components/button-dropdown/?tabId=playground&example=inline-icon-button-dropdown) with the inline-icon variant.
  * `announcementLabel` (string) - (Optional) An announcement label for the item, used for labeling the toggle button. By default, the `content` is used. Make sure to provide the `announcementLabel` if `content` is not a string.
- **`renderItemToggleIcon?`**: `(data: TreeViewProps.ItemToggleRenderIconData) => React.ReactNode`
  Use this property to display a custom icon in the toggle button.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onItemToggle?`**: `NonCancelableEventHandler<TreeViewProps.ItemToggleDetail<T>>`
  Called when an item expands or collapses.

## Types

Supporting types from `TreeViewProps` (verbatim):

```ts
export declare namespace TreeViewProps {
  interface TreeItem {
    content: React.ReactNode;
    icon?: React.ReactNode;
    secondaryContent?: React.ReactNode;
    actions?: React.ReactNode;
    announcementLabel?: string;
  }
  interface ItemToggleDetail<T> {
    id: string;
    item: T;
    expanded: boolean;
  }
  interface ItemToggleRenderIconData {
    expanded: boolean;
  }
  type ConnectorLinesVariant = 'vertical' | 'none';
  interface I18nStrings<T> {
    collapseButtonLabel?: (item: T) => string;
    expandButtonLabel?: (item: T) => string;
  }
}
```
