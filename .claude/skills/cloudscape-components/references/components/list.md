# List

```ts
import List from '@cloudscape-design/components/list'
import type { ListProps } from '@cloudscape-design/components/list'
```

Generated from `@cloudscape-design/components@3.0.1382` `list/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Adds an aria-describedby to the list.
- **`ariaLabel?`**: `string`
  Adds an aria-label to the list.
- **`ariaLabelledby?`**: `string`
  Adds an aria-labelledby to the list.
- **`disableItemPaddings?`**: `boolean`
  Removes padding around and inside list items.
- **`disablePaddings?`**: `boolean`
  Removes top and bottom padding around the list. Does not apply for sortable lists.
- **`i18nStrings?`**: `ListProps.I18nStrings` _(@i18n)_
  An object containing all the localized strings required by the component.
  
  - `liveAnnouncementDndStarted` ((position: number, total: number) => string) - (Optional) Adds a message to be announced by screen readers when an item is picked for reordering.
  - `liveAnnouncementDndDiscarded` (string) - (Optional) Adds a message to be announced by screen readers when a reordering action is canceled.
  - `liveAnnouncementDndItemReordered` ((initialPosition: number, currentPosition: number, total: number) => string) - (Optional) Adds a message to be announced by screen readers when an item is being moved.
  - `liveAnnouncementDndItemCommitted` ((initialPosition: number, finalPosition: number, total: number) => string) - (Optional) Adds a message to be announced by screen readers when a reordering action is committed.
  - `dragHandleAriaDescription` (string) - (Optional) Adds an ARIA description for the drag handle.
  - `dragHandleAriaLabel` (string) - (Optional) Adds an ARIA label for the drag handle.
- **`items`**: `ReadonlyArray<T>`
  The items to display in the list.
- **`renderItem`**: `(item: T) => { id: string; content: ReactNode; secondaryContent?: ReactNode; icon?: ReactNode; actions?: ReactNode; announcementLabel?: string; }`
  Render an item. The function should return an object with the following keys:
  * `id` (string) - A unique identifier for the item.
  * `content` (React.ReactNode) - The content of the item.
  * `secondaryContent` (React.ReactNode) - (Optional) Secondary content, for example item description.
  * `icon` (React.ReactNode) - (Optional) An icon, displayed at the start.
  * `actions` (React.ReactNode) - (Optional) Action button(s).
  * `announcementLabel` (string) - (Optional) An announcement label for the item, used when sorting.
     By default, the `content` is used: a custom label should be provided if `content` is not a string.
- **`sortable?`**: `boolean`
  Makes the list sortable by enabling drag and drop functionality.
- **`sortDisabled?`**: `boolean`
  Disables sorting drag handles. Use this to temporarily prevent users from reordering the list.
- **`tagOverride?`**: `'ol' | 'ul'`
  The HTML tag to render. By default `ul` is used for standard lists and `ol` for sortable lists.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onSortingChange?`**: `NonCancelableEventHandler<ListProps.SortingState<T>>`
  Called when items are reordered in a sortable list.

## Types

Supporting types from `ListProps` (verbatim):

```ts
export declare namespace ListProps {
  interface SortingState<T> {
    items: ReadonlyArray<T>;
  }
  type I18nStrings = DndAreaI18nStrings;
}
```
