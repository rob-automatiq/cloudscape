# ButtonGroup

```ts
import ButtonGroup from '@cloudscape-design/components/button-group'
import type { ButtonGroupProps } from '@cloudscape-design/components/button-group'
```

Generated from `@cloudscape-design/components@3.0.1382` `button-group/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaLabel?`**: `string`
  Adds `aria-label` to the button group toolbar element.
  Use this to provide a unique accessible name for each button group on the page.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`dropdownExpandToViewport?`**: `boolean`
  Use this property to determine dropdown placement strategy for all menu dropdown items.
  
  By default, the dropdown height is constrained to fit inside the height of its next scrollable container element.
  Enabling this property will allow the dropdown to extend beyond that container by using fixed positioning and
  [React Portals](https://reactjs.org/docs/portals.html).
  
  Set this property if the dropdown would otherwise be constrained by a scrollable container,
  for example inside table and split view layouts.
  
  We recommend you use discretion, and don't enable this property unless necessary
  because fixed positioning results in a slight, visible lag when scrolling complex pages.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`items`**: `ReadonlyArray<ButtonGroupProps.ItemOrGroup>`
  Array of objects with a number of supported types.
  
  ### icon-button
  
  * `id` (string) - The unique identifier of the button, used as detail in `onItemClick` handler and to focus the button using `ref.focus(id)`.
  * `text` (string) - The name shown as a tooltip for this button.
  * `disabled` (optional, boolean) - The disabled state indication for this button.
  * `disabledReason` (optional, boolean) - Provides a reason why the button is disabled (only when `disabled` is `true`). If provided, the button becomes focusable.
  * `loading` (optional, boolean) - The loading state indication for this button.
  * `loadingText` (optional, string) - The loading text announced to screen readers.
  * `iconName` (optional, string) - Specifies the name of the icon, used with the [icon component](/components/icon/).
  * `iconAlt` (optional, string) - Specifies alternate text for the icon when using `iconUrl`.
  * `iconUrl` (optional, string) - Specifies the URL of a custom icon.
  * `iconSvg` (optional, ReactNode) - Custom SVG icon. Equivalent to the `svg` slot of the [icon component](/components/icon/).
  * `href` (optional, string) - Renders the button as a link with the specified URL. Use for actions that navigate, such as opening a page in a new browser tab.
  * `target` (optional, string) - Specifies where to open the linked URL (for example, `_blank` to open in a new tab). This property only applies when `href` is set.
  * `rel` (optional, string) - Adds a `rel` attribute to the link. By default, the component sets `rel` to "noopener noreferrer" when `target` is `"_blank"`. This property only applies when `href` is set.
  * `download` (optional, boolean | string) - Specifies whether the linked URL, when selected, prompts the user to download instead of navigate. You can provide a string to suggest a file name. This property only applies when `href` is set.
  * `popoverFeedback` (optional, ReactNode) - Text that appears when the user clicks the button. Use to provide feedback to the user.
  
  ### icon-toggle-button
  
  * `id` (string) - The unique identifier of the button, used as detail in `onItemClick` handler and to focus the button using `ref.focus(id)`.
  * `pressed` (boolean) - The toggle button pressed state.
  * `text` (string) - The name shown as a tooltip for this button.
  * `disabled` (optional, boolean) - The disabled state indication for this button.
  * `disabledReason` (optional, boolean) - Provides a reason why the button is disabled (only when `disabled` is `true`). If provided, the button becomes focusable.
  * `loading` (optional, boolean) - The loading state indication for this button.
  * `loadingText` (optional, string) - The loading text announced to screen readers.
  * `iconName` (optional, string) - Specifies the name of the icon, used with the [icon component](/components/icon/).
  * `iconUrl` (optional, string) - Specifies the URL of a custom icon.
  * `iconSvg` (optional, ReactNode) - Custom SVG icon. Equivalent to the `svg` slot of the [icon component](/components/icon/).
  * `pressedIconName` (optional, string) - Specifies the name of the icon in pressed state, used with the [icon component](/components/icon/).
  * `pressedIconUrl` (optional, string) - Specifies the URL of a custom icon in pressed state.
  * `pressedIconSvg` (optional, ReactNode) - Custom SVG icon in pressed state. Equivalent to the `svg` slot of the [icon component](/components/icon/).
  * `popoverFeedback` (optional, ReactNode) - Text that appears when the user clicks the button. Use to provide feedback to the user.
  * `pressedPopoverFeedback` (optional, ReactNode) - Text that appears when the user clicks the button in pressed state. Defaults to `popoverFeedback`.
  
  * ### file-input
  
  * `id` (string) - The unique identifier of the button, used as detail in `onFilesChange`.
  * `text` (string) - The name of the menu button shown as a tooltip.
  * `accept` (optional, string) - Specifies the native file input `accept` attribute to describe the allow-list of file types.
  * `multiple` (optional, string) - Specifies the native file input `multiple` attribute to allow users entering more than one file.
  
  ### menu-dropdown
  
  * `id` (string) - The unique identifier of the button, used as detail in `onItemClick`.
  * `text` (string) - The name of the menu button shown as a tooltip.
  * `disabled` (optional, boolean) - The disabled state indication for the menu button.
  * `disabledReason` (optional, boolean) - Provides a reason why the button is disabled (only when `disabled` is `true`). If provided, the button becomes focusable.
  * `loading` (optional, boolean) - The loading state indication for the menu button.
  * `loadingText` (optional, string) - The loading text announced to screen readers.
  * `iconName` (optional, string) - Specifies the name of the icon, used with the [icon component](/components/icon/). Defaults to `ellipsis`.
  * `iconAlt` (optional, string) - Specifies alternate text for the icon when using `iconUrl`.
  * `iconUrl` (optional, string) - Specifies the URL of a custom icon.
  * `iconSvg` (optional, ReactNode) - Custom SVG icon. Equivalent to the `svg` slot of the [icon component](/components/icon/).
  * `items` (ButtonDropdownProps.ItemOrGroup[]) - The array of dropdown items that belong to this menu.
  
  ### icon-copy-to-clipboard
  
  * `id` (string) - The unique identifier of the button, used as detail in `onCopySuccess` and `onCopyFailure` handlers and to focus the button using `ref.focus(id)`.
  * `text` (string) - The name shown as a tooltip for this button.
  * `textToCopy` (string) - The text that is copied to the clipboard when the button is activated.
  * `copySuccessText` (string) - The message announced to screen readers and shown as a popover when the text is copied successfully.
  * `copyErrorText` (string) - The message announced to screen readers and shown as a popover when the text fails to copy.
  * `disabled` (optional, boolean) - The disabled state indication for this button.
  * `disabledReason` (optional, boolean) - Provides a reason why the button is disabled (only when `disabled` is `true`). If provided, the button becomes focusable.
  
  ### group
  
  * `text` (string) - The name of the group rendered as ARIA label for this group.
  * `items` ((ButtonGroupProps.IconButton | ButtonGroupProps.MenuDropdown)[]) - The array of items that belong to this group.
- **`style?`**: `ButtonGroupProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the button group's visual appearance.
  Refer to the [style](/components/button-group/?tabId=style) tab for more details.
- **`variant`**: `ButtonGroupProps.Variant`
  Determines the general styling of the button dropdown.
  * `icon` for icon buttons.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onCopyFailure?`**: `NonCancelableEventHandler<ButtonGroupProps.CopyFailureDetail>`
  Called when the copy operation fails.
- **`onCopySuccess?`**: `NonCancelableEventHandler<ButtonGroupProps.CopySuccessDetail>`
  Called when the text is successfully copied to the clipboard.
- **`onFilesChange?`**: `NonCancelableEventHandler<ButtonGroupProps.FilesChangeDetails>`
  Called when the user uploads files. The event detail object contains the id and files from the file input item.
- **`onItemClick?`**: `NonCancelableEventHandler<ButtonGroupProps.ItemClickDetails>`
  Called when the user clicks on an item, and the item is not disabled. The event detail object contains the id of the clicked item.

## Types

Supporting types from `ButtonGroupProps` (verbatim):

```ts
export declare namespace ButtonGroupProps {
  type Variant = 'icon';
  type ItemOrGroup = Item | Group;
  type Item = IconButton | IconToggleButton | IconFileInput | MenuDropdown | IconCopyToClipboard;
  interface IconButton {
    type: 'icon-button';
    id: string;
    text: string;
    disabled?: boolean;
    disabledReason?: string;
    loading?: boolean;
    loadingText?: string;
    iconName?: IconProps.Name;
    iconAlt?: string;
    iconUrl?: string;
    iconSvg?: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
    download?: boolean | string;
    popoverFeedback?: React.ReactNode;
  }
  interface IconToggleButton {
    type: 'icon-toggle-button';
    id: string;
    text: string;
    pressed: boolean;
    disabled?: boolean;
    disabledReason?: string;
    loading?: boolean;
    loadingText?: string;
    iconName?: IconProps.Name;
    iconUrl?: string;
    iconSvg?: React.ReactNode;
    pressedIconName?: IconProps.Name;
    pressedIconUrl?: string;
    pressedIconSvg?: React.ReactNode;
    popoverFeedback?: React.ReactNode;
    pressedPopoverFeedback?: React.ReactNode;
  }
  interface IconFileInput {
    type: 'icon-file-input';
    id: string;
    text: string;
    accept?: string;
    multiple?: boolean;
  }
  interface MenuDropdown {
    type: 'menu-dropdown';
    id: string;
    text: string;
    disabled?: boolean;
    disabledReason?: string;
    loading?: boolean;
    loadingText?: string;
    iconName?: IconProps.Name;
    iconAlt?: string;
    iconUrl?: string;
    iconSvg?: React.ReactNode;
    items: ReadonlyArray<ButtonDropdownProps.ItemOrGroup>;
  }
  interface IconCopyToClipboard {
    type: 'icon-copy-to-clipboard';
    id: string;
    text: string;
    textToCopy: string;
    copySuccessText: string;
    copyErrorText: string;
    disabled?: boolean;
    disabledReason?: string;
  }
  interface Group {
    type: 'group';
    text: string;
    items: ReadonlyArray<ButtonGroupProps.Item>;
  }
  interface ItemClickDetails {
    id: string;
    pressed?: boolean;
    checked?: boolean;
  }
  interface FilesChangeDetails {
    id: string;
    files: File[];
  }
  interface CopySuccessDetail {
    id: string;
    text: string;
  }
  interface CopyFailureDetail {
    id: string;
    text: string;
  }
  interface Ref {
    /**
     * Focuses button group item by id.
     */
    focus(itemId: string): void;
  }
  interface Style {
    root?: {
      background?: string;
      borderColor?: string;
      borderRadius?: string;
      borderWidth?: string;
      paddingBlock?: string;
      paddingInline?: string;
      boxShadow?: string;
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
    item?: {
      color?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      boxShadow?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
  }
}
```
