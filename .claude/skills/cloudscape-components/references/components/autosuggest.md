# Autosuggest

```ts
import Autosuggest from '@cloudscape-design/components/autosuggest'
import type { AutosuggestProps } from '@cloudscape-design/components/autosuggest'
```

Generated from `@cloudscape-design/components@3.0.1382` `autosuggest/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaLabel?`**: `string`
  Adds an `aria-label` to the native control.
  
  Use this if you don't have a visible label for this control.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`ariaRequired?`**: `boolean`
  Specifies whether to add `aria-required` to the native control.
- **`autoFocus?`**: `boolean`
  Indicates whether the control should be focused as
  soon as the page loads, which enables the user to
  start typing without having to manually focus the control. Don't
  use this option on pages where the control may be
  scrolled out of the viewport.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`clearAriaLabel?`**: `string` _(@i18n)_
  Adds an `aria-label` to the clear button inside the search input.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`disableBrowserAutocorrect?`**: `boolean`
  Specifies whether to disable browser autocorrect and related features.
  If you set this to `true`, it disables any native browser capabilities
  that automatically correct user input, such as `autocorrect` and
  `autocapitalize`. If you don't set it, the behavior follows the default behavior
  of the user's browser.
- **`disabled?`**: `boolean`
  Specifies if the control is disabled, which prevents the
  user from modifying the value and prevents the value from
  being included in a form submission. A disabled control can't
  receive focus.
- **`empty?`**: `React.ReactNode`
  Specifies the text that's displayed when there aren't any suggestions to display.
  This is displayed when `statusType` is set to `finished` or it's not set at all.
- **`enteredTextLabel?`**: `AutosuggestProps.EnteredTextLabel` _(@i18n)_
  Specifies a function that generates the custom value indicator (for example, `Use "${value}"`).
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
- **`filteringResultsText?`**: `(matchesCount: number, totalCount: number) => string`
  Specifies the text to display with the number of matches at the bottom of the dropdown menu while filtering.
  
  Note that the `matchesCount` includes the `enteredTextLabel` ("Use ${value}") item, so in most cases you
  should subtract 1 from `matchesCount`. If using manual filtering, you should provide your own value for `totalCount`.
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
- **`hideEnteredTextOption?`**: `boolean`
  Defines whether entered text option is shown as the first option in the dropdown when value is non-empty.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`invalid?`**: `boolean`
  Overrides the invalidation state. Usually the invalid state
  comes from the parent `FormField`component,
  however sometimes you need to override its
  state when you have more than one input within a
  single form field.
- **`loadingText?`**: `string`
  Specifies the text to display when in the loading state.
- **`name?`**: `string`
  Specifies the name of the control used in HTML forms.
- **`nativeInputAttributes?`**: `NativeAttributes<React.InputHTMLAttributes<HTMLInputElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `input` element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
- **`options?`**: `AutosuggestProps.Options`
  Specifies an array of options that are displayed to the user as a dropdown list.
  The options can be grouped using `OptionGroup` objects.
  
  #### Option
  - `value` (string) - The returned value of the option when selected.
  - `label` (string) - (Optional) Option text displayed to the user.
  - `lang` (string) - (Optional) The language of the option, provided as a BCP 47 language tag.
  - `description` (string) - (Optional) Further information about the option that appears below the label.
  - `disabled` (boolean) - (Optional) Determines whether the option is disabled.
  - `labelTag` (string) - (Optional) A label tag that provides additional guidance, shown next to the label.
  - `tags` [string[]] - (Optional) A list of tags giving further guidance about the option.
  - `filteringTags` [string[]] - (Optional) A list of additional tags used for automatic filtering.
  - `iconName` (string) - (Optional) Specifies the name of an [icon](/components/icon/) to display in the option.
  - `iconAriaLabel` (string) - (Optional) Specifies alternate text for the icon. We recommend that you provide this for accessibility.
  - `iconAlt` (string) - (Optional) **Deprecated**, replaced by \`iconAriaLabel\`. Specifies alternate text for a custom icon, for use with `iconUrl`.
  - `iconUrl` (string) - (Optional) URL of a custom icon.
  - `iconSvg` (ReactNode) - (Optional) Custom SVG icon. Equivalent to the `svg` slot of the [icon component](/components/icon/).
  
  #### OptionGroup
  - `label` (string) - Option group text displayed to the user.
  - `disabled` (boolean) - (Optional) Determines whether the option group is disabled.
  - `options` (Option[]) - (Optional) The options under this group.
  
  Note: Only one level of option nesting is supported.
  
  If you want to use the built-in filtering capabilities of this component, provide
  a list of all valid options here and they will be automatically filtered based on the user's filtering input.
  
  Alternatively, you can listen to the `onChange` or `onLoadItems` event and set new options
  on your own.
- **`placeholder?`**: `string`
  Specifies the placeholder text rendered when the value is an empty string.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value but includes it in a form
  submission. A read-only control can receive focus.
  
  Don't use read-only inputs outside a form.
- **`recoveryText?`**: `string` _(@i18n)_
  Specifies the text for the recovery button. The text is displayed next to the error text.
  Use the `onLoadItems` event to perform a recovery action (for example, retrying the request).
- **`renderHighlightedAriaLive?`**: `AutosuggestProps.ContainingOptionAndGroupString`
  Overrides the element that is announced to screen readers
  when the highlighted option changes. By default, this announces
  the option's name and properties, and its selected state if
  the `selectedAriaLabel` property is defined.
  The highlighted option is provided, and its group (if groups
  are used and it differs from the group of the previously highlighted option).
  
  For more information, see the
  [accessibility guidelines](/components/autosuggest/?tabId=usage#accessibility-guidelines).
- **`renderOption?`**: `AutosuggestProps.ItemRenderer`
  Specifies a render function to render custom options in the dropdown menu.
  
  The item inside the props has a different shape depending on its type:
  
  
  ### item
  
  - `type` ('item') - The item type.
  - `index` (number) - The item's absolute position in the dropdown.
  - `option` (Option) - The original option configuration.
  - `disabled` (boolean) - Whether the item is disabled.
  - `highlighted` (boolean) - Whether the item is currently highlighted.
  - `selected` (boolean) - Whether the item is selected.
  - `parent` (OptionGroupRenderItem | null) - The parent group item, if any.
  
  ### group
  
  - `type` ('group') - The item type.
  - `index` (number) - The item's absolute position in the dropdown.
  - `option` (OptionGroup) - The original option configuration.
  - `disabled` (boolean) - Whether the item is disabled.
  
  ### entered-text
  
  - `type` ('entered-text') - The item type.
  - `option` (Option) - The entered-text option configuration.
  
  When providing a custom `renderOption` implementation, it fully replaces the default visual rendering and content for that item.
  The component still manages focus, keyboard interactions, and selection state, but it no longer applies its default item layout or typography.
  
  When returning `null`, the default rendering will be applied for that item.
- **`selectedAriaLabel?`**: `string` _(@i18n)_
  Specifies the localized string that describes an option as being selected.
  This is required to provide a good screen reader experience. For more information, see the
  [accessibility guidelines](/components/autosuggest/?tabId=usage#accessibility-guidelines).
- **`statusType?`**: `DropdownStatusProps.StatusType`
  Specifies the current status of loading more options.
  * `pending` - Indicates that no request in progress, but more options may be loaded.
  * `loading` - Indicates that data fetching is in progress.
  * `finished` - Indicates that pagination has finished and no more requests are expected.
  * `error` - Indicates that an error occurred during fetch. You should use `recoveryText` to enable the user to recover.
- **`style?`**: `AutosuggestProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the autosuggest's visual appearance.
  Refer to the [style](/components/autosuggest/?tabId=style) tab for more details.
- **`value`**: `string`
  Specifies the text entered into the form element.
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

- **`onBlur?`**: `NonCancelableEventHandler<null>`
  Called when input focus is removed from the UI control.
- **`onChange?`**: `NonCancelableEventHandler<InputProps.ChangeDetail>`
  Called whenever a user changes the input value (by typing or pasting).
  The event `detail` contains the current value of the field.
- **`onFocus?`**: `NonCancelableEventHandler<null>`
  Called when input focus is moved to the UI control.
- **`onKeyDown?`**: `CancelableEventHandler<InputProps.KeyDetail>`
  Called when the underlying native textarea emits a `keydown` event.
  The event `detail` contains the `keyCode` and information
  about modifiers (that is, CTRL, ALT, SHIFT, META, etc.).
- **`onKeyUp?`**: `CancelableEventHandler<InputProps.KeyDetail>`
  Called when the underlying native textarea emits a `keyup` event.
  The event `detail` contains the `keyCode` and information
  about modifiers (that is, CTRL, ALT, SHIFT, META, etc.).
- **`onLoadItems?`**: `NonCancelableEventHandler<AutosuggestProps.LoadItemsDetail>`
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
- **`onSelect?`**: `NonCancelableEventHandler<AutosuggestProps.SelectDetail>`
  Called whenever a user selects an option in the dropdown. Don't use this event as the only way to handle user input.
  Instead, use `onSelect` in combination with the `onChange` handler only as an optional convenience for the user.

## Types

Supporting types from `AutosuggestProps` (verbatim):

```ts
export declare namespace AutosuggestProps {
  type ChangeDetail = InputProps.ChangeDetail;
  type KeyDetail = InputProps.KeyDetail;
  type FilteringType = OptionsFilteringType;
  type Option = OptionDefinition;
  type Options = ReadonlyArray<Option | OptionGroup>;
  type EnteredTextLabel = (value: string) => string;
  interface OptionGroup extends Option {
    label?: string;
    options: ReadonlyArray<Option>;
  }
  interface LoadItemsDetail extends OptionsLoadItemsDetail {}
  type StatusType = DropdownStatusProps.StatusType;
  interface SelectDetail {
    value: string;
    selectedOption?: Option;
  }
  interface ContainingOptionAndGroupString {
    (option: Option, group?: OptionGroup): string;
  }
  interface OptionRenderItem {
    type: 'item';
    index: number;
    option: Option;
    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    parent: OptionGroupRenderItem | null;
  }
  interface OptionGroupRenderItem {
    type: 'group';
    index: number;
    option: OptionGroup;
    disabled: boolean;
  }
  interface EnteredTextRenderItem {
    type: 'entered-text';
    option: Option;
    highlighted: boolean;
  }
  type RenderItem = OptionRenderItem | OptionGroupRenderItem | EnteredTextRenderItem;
  type ItemRenderer = (props: {
    item: RenderItem;
    filterText?: string;
  }) => ReactNode | null;
  interface Ref {
    /**
     * Sets input focus onto the UI control.
     */
    focus(): void;
    /**
     * Selects all text in the input control.
     */
    select(): void;
  }
  interface Style {
    root?: {
      backgroundColor?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      borderColor?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      borderRadius?: string;
      borderWidth?: string;
      boxShadow?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      color?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      fontSize?: string;
      fontWeight?: string;
      paddingBlock?: string;
      paddingInline?: string;
    };
    placeholder?: {
      color?: string;
      fontSize?: string;
      fontStyle?: string;
      fontWeight?: string;
    };
  }
}
```
