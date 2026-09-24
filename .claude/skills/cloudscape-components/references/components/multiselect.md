# Multiselect

```ts
import Multiselect from '@cloudscape-design/components/multiselect'
import type { MultiselectProps } from '@cloudscape-design/components/multiselect'
```

Generated from `@cloudscape-design/components@3.0.1382` `multiselect/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaLabel?`**: `string`
  Adds `aria-label` to the select element.
  Use this if you don't have a visible label for this control.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`ariaRequired?`**: `boolean`
  Adds `aria-required` to the native input element.
- **`autoFocus?`**: `boolean`
  Automatically focuses the trigger when component is mounted.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string`
  Specifies the ID for the trigger component. It uses an automatically generated ID by default.
- **`deselectAriaLabel?`**: `MultiselectProps.DeselectAriaLabelFunction` _(@i18n)_
  Specifies an `aria-label` for the token deselection button.
- **`disabled?`**: `boolean`
  Determines whether the whole select component is disabled.
- **`dropdownAriaDescribedby?`**: `string`
  Adds `aria-describedby` to the dropdown's listbox/dialog content.
- **`dropdownRole?`**: `SelectProps.DropdownRole`
  Determines the ARIA role of the dropdown.
  
  - `auto` (default): the dropdown uses a listbox role, or a dialog role wrapping the listbox when built-in
  filtering is enabled.
  - `dialog`: the dropdown always uses a dialog role wrapping the listbox, even without built-in filtering. Use
  this when you render interactive custom content and want assistive technologies to treat the dropdown as a dialog.
- **`empty?`**: `ReactNode`
  Displayed when there are no options to display.
  This is only shown when `statusType` is set to `finished` or not set at all.
- **`enableSelectAll?`**: `boolean`
  Enables users to select and deselect all options with a special extra checkbox which is displayed at the start of the dropdown.
- **`errorIconAriaLabel?`**: `string` _(@i18n)_
  Provides a text alternative for the error icon in the error message.
- **`errorText?`**: `string`
  Specifies the text to display when a data fetching error occurs. Make sure that you provide `recoveryText`.
- **`expandToViewport?`**: `boolean`
  By default, the dropdown height is constrained to fit inside the height of its next scrollable container element.
  Enabling this property will allow the dropdown to extend beyond that container by using fixed positioning and
  [React Portals](https://reactjs.org/docs/portals.html).
  
  Set this property if the dropdown would otherwise be constrained by a scrollable container,
  for example inside table and split view layouts.
  
  We recommend you use discretion, and don't enable this property unless necessary
  because fixed positioning results in a slight, visible lag when scrolling complex pages.
- **`filteringAriaLabel?`**: `string`
  Adds an `aria-label` on the built-in filtering input if filtering is enabled.
- **`filteringClearAriaLabel?`**: `string` _(@i18n)_
  Adds an `aria-label` to the clear button inside the search input.
- **`filteringPlaceholder?`**: `string`
  Specifies the placeholder to display in the filtering input if filtering is enabled.
- **`filteringResultsText?`**: `(matchesCount: number, totalCount: number) => string`
  Specifies the text to display with the number of matches at the bottom of the dropdown menu while filtering.
- **`filteringType?`**: `OptionsFilteringType`
  Determines how filtering is applied to the list of `options`:
  
  * `auto` - The component will automatically filter options based on user input.
  * `manual` - You will set up `onChange` or `onLoadItems` event listeners and filter options on your side or request
  them from server.
  
  By default the component will filter the provided `options` based on the value of the filtering input field.
  Only options that have a `value`, `label`, `description` or `labelTag` that contains the input value as a substring
  are displayed in the list of options.
  
  If you set this property to `manual`, this default filtering mechanism is disabled and all provided `options` are
  displayed in the dropdown list. In that case make sure that you use the `onChange` or `onLoadItems` events in order
  to set the `options` property to the options that are relevant for the user, given the filtering input value.
  
  Note: Manual filtering doesn't disable match highlighting.
- **`finishedText?`**: `string`
  Specifies the text to display at the bottom of the dropdown menu after pagination has reached the end.
- **`hideTokens?`**: `boolean`
  Hides the tokens displayed underneath the component.
  Only use this if the selected options are displayed elsewhere on the page.
- **`i18nStrings?`**: `MultiselectProps.I18nStrings` _(@i18n)_
  An object containing all the localized strings required by the component.
  
  * `selectAllText` (string) - Specifies the text to be displayed next to the checkbox that selects or deselects all options.
  * `tokenLimitShowFewer` (string) - Specifies the text to be displayed in the "Show fewer" button for the token group control.
  * `tokenLimitShowMore` (string) - Specifies the text to be displayed in the "Show more" button for the token group control. This string should not contain the number of hidden tokens
  because this will be added by the component automatically.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`inlineLabelText?`**: `string`
  Specifies an inline label that appears next to the multiselect trigger.
- **`inlineTokens?`**: `boolean`
  Shows tokens inside the trigger instead of below it.
- **`invalid?`**: `boolean`
  Overrides the invalidation state. Usually the invalid state
  comes from the parent `FormField`component,
  however sometimes you need to override its
  state when you have more than one input within a
  single form field.
- **`keepOpen?`**: `boolean`
  Determines whether the dropdown list stays open after the user selects an item.
- **`loadingText?`**: `string`
  Specifies the text to display when in the loading state.
- **`name?`**: `string` _(@deprecated Has no effect.)_
- **`noMatch?`**: `React.ReactNode`
  Displayed for `filteringType="auto"` when there are no matches for the filtering.
- **`options?`**: `SelectProps.Options`
  Specifies an array of options that are displayed to the user as a dropdown list.
  The options can be grouped using `OptionGroup` objects.
  
  #### Option
  - `value` (string) - The returned value of the option when selected.
  
  #### OptionGroup
  - `value` (string) - Used to locate option group in test utils.
  - `options` (Option[]) - (Optional) The options under this group.
  
  #### Shared Option and OptionGroup properties
  - `label` (string) - (Optional) Option or group text displayed to the user.
  - `lang` (string) - (Optional) The language of the option or group, provided as a BCP 47 language tag.
  - `description` (string) - (Optional) Further information about the option or group that appears below the label.
  - `disabled` (boolean) - (Optional) Determines whether the option or group is disabled.
  - `disabledReason` (string) - (Optional) Displays tooltip near the item when disabled. Use to provide additional context.
  - `labelTag` (string) - (Optional) A label tag that provides additional guidance, shown next to the label.
  - `tags` [string[]] - (Optional) A list of tags giving further guidance about the option or group.
  - `filteringTags` [string[]] - (Optional) A list of additional tags used for automatic filtering.
  - `iconName` (string) - (Optional) Specifies the name of an [icon](/components/icon/) to display in the option or group.
  - `iconAriaLabel` (string) - (Optional) Specifies alternate text for the icon. We recommend that you provide this for accessibility.
  - `iconAlt` (string) - (Optional) **Deprecated**, replaced by \`iconAriaLabel\`. Specifies alternate text for a custom icon, for use with `iconUrl`.
  - `iconUrl` (string) - (Optional) URL of a custom icon.
  - `iconSvg` (ReactNode) - (Optional) Custom SVG icon. Equivalent to the `svg` slot of the [icon component](/components/icon/).
  
  Note: Only one level of option nesting is supported.
  
  If you want to use the built-in filtering capabilities of this component, provide
  a list of all valid options here and they will be automatically filtered based on the user's filtering input.
  
  Alternatively, you can listen to the `onChange` or `onLoadItems` event and set new options
  on your own.
- **`placeholder?`**: `string`
  Specifies the hint text that's displayed in the field when no option has been selected.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from both modifying the value and opening the dropdown. A read-only control is still focusable.
- **`recoveryText?`**: `string` _(@i18n)_
  Specifies the text for the recovery button. The text is displayed next to the error text.
  Use the `onLoadItems` event to perform a recovery action (for example, retrying the request).
- **`renderDropdownFooter?`**: `SelectProps.DropdownContentRenderer`
  Renders content at the bottom of the dropdown. The content is always sticky and never scrolls with the
  options list. It is added below the built-in status region. Receives the current filtering state and a
  callback to close the dropdown.
- **`renderDropdownHeader?`**: `SelectProps.DropdownContentRenderer`
  Renders content at the top of the dropdown, above the filter input (when filtering is enabled) and the
  options list. Pinned (sticky) to the top and rendered in every state (empty, no-match, loading, error,
  finished).
- **`renderHighlightedAriaLive?`**: `SelectProps.ContainingOptionAndGroupString`
  Overrides the element that is announced to screen readers
  when the highlighted option changes. By default, this announces
  the option's name and properties, and its selected state if
  the `selectedAriaLabel` property is defined.
  The highlighted option is provided, and its group (if groups
  are used and it differs from the group of the previously highlighted option).
  
  For more information, see the
  [accessibility guidelines](/components/select/?tabId=usage#accessibility-guidelines).
- **`renderOption?`**: `MultiselectProps.MultiselectOptionItemRenderer`
  Specifies a render function to render custom options in the dropdown menu.
- **`selectedAriaLabel?`**: `string` _(@i18n)_
  Specifies the localized string that describes an option as being selected.
  This is required to provide a good screen reader experience. For more information, see the
  [accessibility guidelines](/components/select/?tabId=usage#accessibility-guidelines).
- **`selectedOptions`**: `ReadonlyArray<MultiselectProps.Option>`
  Specifies the currently selected options.
  Provide an empty array to clear the selection.
- **`statusType?`**: `DropdownStatusProps.StatusType`
  Specifies the current status of loading more options.
  * `pending` - Indicates that no request in progress, but more options may be loaded.
  * `loading` - Indicates that data fetching is in progress.
  * `finished` - Indicates that pagination has finished and no more requests are expected.
  * `error` - Indicates that an error occurred during fetch. You should use `recoveryText` to enable the user to recover.
- **`tokenLimit?`**: `number`
  Specifies the maximum number of displayed tokens. If the property isn't set, all of the tokens are displayed.
- **`tokenLimitShowFewerAriaLabel?`**: `string`
  Adds an aria-label to the "Show fewer" button for the token group control.
  Use to assign unique labels when there are multiple token groups with the same `tokenLimitShowFewer` label on one page.
- **`tokenLimitShowMoreAriaLabel?`**: `string`
  Adds an aria-label to the "Show more" button for the token group control.
  Use to assign unique labels when there are multiple token groups with the same `tokenLimitShowMore` label on one page.
- **`virtualScroll?`**: `boolean`
  If you have more than 500 options, enable this flag to apply a performance optimization
  that makes the filtering experience smoother. We don't recommend enabling the feature if you
  have less than 500 options, because the improvements to performance are offset by a
  visible scrolling lag.
  
  When you set this flag to `true`, it removes options that are not currently in view from the DOM.
  If your test accesses such options, you need to first scroll the options container
  to the correct offset, before performing any operations on them. Use the element returned
  by the `findOptionsContainer` test utility for this.
- **`warning?`**: `boolean`
  Overrides the warning state. Usually the warning state
  comes from the parent `FormField`component,
  however sometimes you need to override its
  state when you have more than one input within a
  single form field.
  When you use it, provide additional context with
  information on the input state, and associate it
  with the input using `ariaDescribedby`.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onBlur?`**: `NonCancelableEventHandler`
  Called when input focus is removed from the UI control.
- **`onChange?`**: `NonCancelableEventHandler<MultiselectProps.MultiselectChangeDetail>`
  Called when the user selects or deselects an option.
  The event `detail` contains the current `selectedOptions`.
- **`onFocus?`**: `NonCancelableEventHandler`
  Called when input focus is set onto the UI control.
- **`onLoadItems?`**: `NonCancelableEventHandler<MultiselectProps.LoadItemsDetail>`
  Use this event to implement the asynchronous behavior for the component.
  
  The event is called in the following situations:
  * The user scrolls to the end of the list of options, if `statusType` is set to `pending`.
  * The user clicks on the recovery button in the error state.
  * The user types inside the input field.
  * The user focuses the input field.
  
  The detail object contains the following properties:
  * `filteringText` - The value that you need to use to fetch options.
  * `firstPage` - Indicates that you should fetch the first page of options that match the `filteringText`.
  * `samePage` - Indicates that you should fetch the same page that you have previously fetched (for example, when the user clicks on the recovery button).

## Types

Supporting types from `MultiselectProps` (verbatim):

```ts
export declare namespace MultiselectProps {
  type Option = OptionDefinition;
  type OptionGroup = OptionGroupDefinition;
  type Options = ReadonlyArray<Option | OptionGroup>;
  /**
   * The argument passed to the dropdown render functions (`renderDropdownHeader`
   * and `renderDropdownFooter`).
   */
  type DropdownContentProps = SelectProps.DropdownContentProps;
  type DropdownRole = SelectProps.DropdownRole;
  type DropdownContentRenderer = SelectProps.DropdownContentRenderer;
  interface LoadItemsDetail extends OptionsLoadItemsDetail {}
  interface MultiselectOptionItem {
    type: 'item';
    index: number;
    option: Option;
    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    parent: MultiselectOptionGroupItem | null;
  }
  interface MultiselectOptionGroupItem {
    type: 'group';
    index: number;
    option: OptionGroup;
    indeterminate: boolean;
    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
  }
  interface MultiselectSelectAllItem {
    type: 'select-all';
    option: Option;
    indeterminate: boolean;
    highlighted: boolean;
    selected: boolean;
  }
  type MultiselectItem = MultiselectOptionItem | MultiselectOptionGroupItem | MultiselectSelectAllItem;
  type MultiselectOptionItemRenderer = (props: {
    item: MultiselectItem;
    filterText?: string;
  }) => ReactNode | null;
  type DeselectAriaLabelFunction = (option: Option) => string;
  type TriggerVariant = 'placeholder' | 'tokens';
  interface I18nStrings {
    selectAllText?: string;
    tokenLimitShowFewer?: string;
    tokenLimitShowMore?: string;
  }
  interface MultiselectChangeDetail {
    selectedOptions: ReadonlyArray<Option>;
  }
  interface Ref {
    /**
     * Sets focus on the element without opening the dropdown or showing a visual focus indicator.
     */
    focus(): void;
  }
}
```
