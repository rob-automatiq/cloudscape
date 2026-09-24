# CollectionPreferences

```ts
import CollectionPreferences from '@cloudscape-design/components/collection-preferences'
import type { CollectionPreferencesProps } from '@cloudscape-design/components/collection-preferences'
```

Generated from `@cloudscape-design/components@3.0.1382` `collection-preferences/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`cancelLabel?`**: `string` _(@i18n)_
  Label of the cancel button in the modal footer.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`closeAriaLabel?`**: `string` _(@i18n)_
  Adds an aria-label to the close button, for accessibility.
- **`confirmLabel?`**: `string` _(@i18n)_
  Label of the confirm button in the modal footer.
- **`contentBefore?`**: `React.ReactNode`
  Content displayed before the preferences. Use it to display additional information relating to the preferences.
- **`contentDensityPreference?`**: `CollectionPreferencesProps.ContentDensityPreference` _(@i18n)_
  Configures the content density preference (Comfortable / Compact).
  
  If you set it, the component displays this preference in the modal.
  
  It contains the following:
  - `label` (string) - Specifies the label for the option checkbox.
  - `description` (string) - Specifies the text displayed below the checkbox label.
  
  You must set the current value in the `preferences.contentDensity` property.
- **`contentDisplayPreference?`**: `CollectionPreferencesProps.ContentDisplayPreference` _(@i18n)_
  Configures the built-in content display preference for order and visibility of the table columns.
  
  Recommended for table and not applicable for cards.
  
  Cannot be used together with `visibleContentPreference`.
  
  If you set it, the component displays this preference in the modal.
  
  It contains the following:
  - `title` (string) - Specifies the text displayed at the top of the preference.
  - `description` (string) - Specifies the description displayed below the title.
  - `options` - Specifies an array of options for reordering and visible content selection.
  - `groups` - (Optional) Specifies an array of column group definitions for multi-level content display. Each group contains:
    - `id` (string) - A unique identifier for the group.
    - `label` (string) - The text displayed as the group label.
  - `enableColumnFiltering` (boolean) - Adds a columns filter.
  - `liveAnnouncementDndStarted` ((position: number, total: number) => string) - (Optional) Adds a message to be announced by screen readers when an option is picked.
  - `liveAnnouncementDndDiscarded` (string) - (Optional) Adds a message to be announced by screen readers when a reordering action is canceled.
  - `liveAnnouncementDndItemReordered` ((initialPosition: number, currentPosition: number, total: number) => string) - (Optional) Adds a message to be announced by screen readers when an item is being moved.
  - `liveAnnouncementDndItemCommitted` ((initialPosition: number, finalPosition: number, total: number) => string) - (Optional) Adds a message to be announced by screen readers when a reordering action is committed.
  - `dragHandleAriaDescription` (string) - (Optional) Adds an ARIA description for the drag handle.
  - `dragHandleAriaLabel` (string) - (Optional) Adds an ARIA label for the drag handle.
  - `liveAnnouncementDndGroupLabel` ((label: string, count: number) => string) - (Optional) Adds a label for a group item to be announced by screen readers during drag and drop operations.
  
  Each option contains the following:
  - `id` (string) - Corresponds to a table column `id`.
  - `label` (string) - Specifies a short description of the content.
  - `alwaysVisible` (boolean) - (Optional) Determines whether the visibility is always on and therefore cannot be toggled. This is set to `false` by default.
  
  You must provide an ordered list of the items to display in the `preferences.contentDisplay` property.
  Each content display item is one of the following:
  - `ContentDisplayColumn` - Represents a single column.
    - `type` ('column') - (Optional) Identifies the entry as a column. Defaults to `'column'` when omitted.
    - `id` (string) - The column identifier.
    - `visible` (boolean) - Whether the column is visible.
  - `ContentDisplayGroup` - Represents a column group.
    - `type` ('group') - Identifies the entry as a group.
    - `id` (string) - The group identifier.
    - `visible` (boolean) - Whether the group is visible.
    - `children` (ReadonlyArray<ContentDisplayItem>) - The columns or nested groups within this group.
- **`customPreference?`**: `(customValue: CustomPreferenceType, setCustomValue: React.Dispatch<CustomPreferenceType>) => React.ReactNode`
  Configures custom preferences. The function receives two parameters:
  
  - `customValue` (CustomPreferenceType) - Current value for your custom preference. It is initialized using the value you provide in `preferences.custom`.
  - `setCustomValue` - A function that is called to notify a state update.
  
  It should return the content of your custom preference, for example:
  ```
  (customValue, setCustomValue) => (
    <Checkbox checked={customValue} onChange={({ detail }) => setCustomValue(detail.checked)} />
  )
  ```
  
  When the user confirms the changes, the new value is passed in the `detail.custom` property of the `onConfirm` listener.
  When the user cancels the changes, the `customValue` is reset to the one present in `preferences.custom` property.
  
  **Display**
  - If any of the built-in preferences (`pageSizePreference`, `wrapLinesPreference`, or `visibleContentPreference`) are displayed,
  the custom content is displayed at the bottom of the left column within the modal.
  - If no built-in preference is displayed, the custom content occupies the whole modal.
- **`disabled?`**: `boolean`
  Determines whether the preferences trigger button is disabled.
- **`getModalRoot?`**: `PortalProps['getContainer']`
  Use this property to specify a different dynamic modal root for the dialog.
  The function will be called when a user clicks on the trigger button.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`pageSizePreference?`**: `CollectionPreferencesProps.PageSizePreference` _(@i18n)_
  Configures the built-in "page size selection" preference.
  
  If you set it, the component displays this preference in the modal.
  
  It contains the following:
  - `title` (string) - Specifies the text displayed at the top of the preference.
  - `options` - Specifies an array of options for page size selection. Each entry contains:
    - `value` (number) - The value for the radio button (that is, the number of items per page).
    - `label` (string) - A label for the radio button (for example, "10 resources").
  
  You must set the current value in the `preferences.pageSize` property.
- **`preferences?`**: `CollectionPreferencesProps.Preferences<CustomPreferenceType>`
  Specifies the current preference values. This includes both built-in and custom preferences.
  
  It contains the following:
  - `pageSize` (number) - (Optional)
  - `wrapLines` (boolean) - (Optional)
  - `contentDisplay` (ReadonlyArray<ContentDisplayItem>) - (Optional) Specifies the list of content and their visibility. The order of the elements influences the display.
  - `visibleContent` (ReadonlyArray<string>) - Specifies the list of visible content `id`s. The order of the `id`s does not influence the display. If the `contentDisplay` property is set, this property is ignored.
  - `custom` (CustomPreferenceType) - Specifies the value for your custom preference.
- **`removeModalRoot?`**: `PortalProps['removeContainer']`
  Use this property when `getModalRoot` is used to clean up the modal root
  element after a user closes the dialog. The function receives the return value
  of the most recent getModalRoot call as an argument.
- **`stickyColumnsPreference?`**: `CollectionPreferencesProps.StickyColumnsPreference`
  Configures the sticky columns preference that can be set for both left and right columns.
  
  If you set it, the component displays this preference in the modal.
  
  It contains the following:
  - `label` (string) - Specifies the label for each radio group.
  - `description` (string) - Specifies the text displayed below each radio group label.
  
  You must set the current value in the `preferences.stickyColumns` property.
- **`stripedRowsPreference?`**: `CollectionPreferencesProps.StripedRowsPreference` _(@i18n)_
  Configures the built-in "striped rows" preference.
  
  If you set it, the component displays this preference in the modal.
  
  It contains the following:
  - `label` (string) - Specifies the label for the option checkbox.
  - `description` (string) - Specifies the text displayed below the checkbox label.
  
  You must set the current value in the `preferences.stripedRows` property.
- **`title?`**: `string` _(@i18n)_
  Specifies the title of the preferences modal dialog. It is also used as an `aria-label` for the trigger button.
- **`visibleContentPreference?`**: `CollectionPreferencesProps.VisibleContentPreference`
  Configures the built-in visible sections preference for cards or visible columns for table.
  
  Recommended for cards. For table use `contentDisplayPreference` instead.
  
  Cannot be used together with `contentDisplayPreference`.
  
  If you set it, the component displays this preference in the modal.
  
  It contains the following:
  - `title` (string) - Specifies the text displayed at the top of the preference.
  - `options` - Specifies an array of groups of options for visible content selection.
  
  Each group of options contains the following:
  - `label` (string) - The text to display as a title for the options group.
  - `options` - Specifies an array of options in the group. Each option contains the following:
    - `id` (string) - Corresponds to a column `id` for tables or to a section `id` for cards.
    - `label` (string) - Specifies a short description of the content.
    - `editable` (boolean) - (Optional) Determines whether the user is able to toggle its visibility. This is `true` by default.
  
  You must set the current list of visible content `id`s in the `preferences.visibleContent` property.
  
  **Deprecated** in table, replaced by `contentDisplayPreference`.
- **`wrapLinesPreference?`**: `CollectionPreferencesProps.WrapLinesPreference` _(@i18n)_
  Configures the built-in "wrap lines" preference.
  
  If you set it, the component displays this preference in the modal.
  
  It contains the following:
  - `label` (string) - Specifies the label for the option checkbox.
  - `description` (string) - Specifies the text displayed below the checkbox label.
  
  You must set the current value in the `preferences.wrapLines` property.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onCancel?`**: `NonCancelableEventHandler`
  Called when the user cancels a preference change using the cancel button in the modal footer or by dismissing the modal.
- **`onConfirm?`**: `NonCancelableEventHandler<CollectionPreferencesProps.Preferences<CustomPreferenceType>>`
  Called when the user confirms a preference change using the confirm button in the modal footer.
  
  The event `detail` contains the following:
  - `contentDensity` (boolean) - (Optional) The current content density preference value. Available only if you specify the `contentDensityPreference` property.
  - `contentDisplay` (ReadonlyArray<ContentDisplayItem>) - (Optional) The ordered list of table columns and their visibility. Available only if you specify the `contentDisplayPreference` property.
  - `custom` (CustomPreferenceType) - (Optional) The selected value for your custom preference.
  - `pageSize` (number) - (Optional) The selected page size value. Available only if you specify the `pageSizePreference` property.
  - `stickyColumns` (CollectionPreferencesProps.StickyColumns) - (Optional) The current sticky columns preference value. Available only if you specify the `stickyColumnsPreference` property.
  - `stripedRows` (boolean) - (Optional) The current striped rows preference value. Available only if you specify the `stripedRowsPreference` property.
  - `visibleContent` (ReadonlyArray<string>) - (Optional) The list of selected content `id`s. Available only if you specify the `visibleContentPreference` property.
  - `wrapLines` (boolean) - (Optional) The current line wrapping preference value. Available only if you specify the `wrapLinesPreference` property.
  
  The values for all configured preferences are present even if the user didn't change their values.

## Types

Supporting types from `CollectionPreferencesProps` (verbatim):

```ts
export declare namespace CollectionPreferencesProps {
  export interface Preferences<CustomPreferenceType = any> {
    pageSize?: number;
    wrapLines?: boolean;
    stripedRows?: boolean;
    contentDensity?: 'comfortable' | 'compact';
    visibleContent?: ReadonlyArray<string>;
    stickyColumns?: StickyColumns;
    contentDisplay?: ReadonlyArray<ContentDisplayItem>;
    custom?: CustomPreferenceType;
  }
  export interface ContentDisplayPreference extends DndAreaI18nStrings {
    title?: string;
    description?: string;
    options: ReadonlyArray<CollectionPreferencesProps.ContentDisplayOption>;
    groups?: ReadonlyArray<CollectionPreferencesProps.ContentDisplayOptionGroup>;
    enableColumnFiltering?: boolean;
    i18nStrings?: ContentDisplayPreferenceI18nStrings;
    liveAnnouncementDndGroupLabel?: (label: string, count: number) => string;
  }
  export interface ContentDisplayColumn {
    type?: 'column';
    id: string;
    visible: boolean;
  }
  export interface ContentDisplayGroup {
    type: 'group';
    id: string;
    visible: boolean;
    children: ReadonlyArray<ContentDisplayItem>;
  }
  export type ContentDisplayItem = ContentDisplayColumn | ContentDisplayGroup;
  export interface ContentDisplayOption {
    id: string;
    label: string;
    alwaysVisible?: boolean;
  }
  export interface ContentDisplayOptionGroup {
    id: string;
    label: string;
  }
  export interface VisibleContentPreference {
    title: string;
    options: ReadonlyArray<CollectionPreferencesProps.VisibleContentOptionsGroup>;
  }
  export interface VisibleContentOptionsGroup {
    label: string;
    options: ReadonlyArray<CollectionPreferencesProps.VisibleContentOption>;
  }
  export interface VisibleContentOption {
    id: string;
    label: string;
    editable?: boolean;
  }
  export interface PageSizePreference {
    title?: string;
    options: ReadonlyArray<PageSizeOption>;
  }
  export interface PageSizeOption {
    value: number;
    label?: string;
  }
  export interface WrapLinesPreference {
    label?: string;
    description?: string;
  }
  export interface StripedRowsPreference {
    label?: string;
    description?: string;
  }
  export interface ContentDensityPreference {
    label?: string;
    description?: string;
  }
  interface StickyColumns {
    first?: number;
    last?: number;
  }
  interface StickyColumnPreference {
    title: string;
    description: string;
    options: ReadonlyArray<{
      label: string;
      value: number;
    }>;
  }
  export interface StickyColumnsPreference {
    firstColumns?: StickyColumnPreference;
    lastColumns?: StickyColumnPreference;
  }
  export interface ContentDisplayPreferenceI18nStrings {
    /**
     * Specifies a `placeholder` for the filtering input.
     * @i18n
     */
    columnFilteringPlaceholder?: string;
    /**
     * Specifies an `aria-label` for the filtering input.
     * @i18n
     */
    columnFilteringAriaLabel?: string;
    /**
     * Specifies the `count text` for the filtering input to reflect matches found.
     * @i18n
     */
    columnFilteringCountText?: (count: number) => string;
    /**
     * Specifies the `no match` text for when there are no matching options in the filtering.
     * @i18n
     */
    columnFilteringNoMatchText?: string;
    /**
     * Specifies both an `aria-label` for the clear filtering input action and the `clear filter button` text for the no match button.
     * @i18n
     */
    columnFilteringClearFilterText?: string;
  }
  export {};
}
```
