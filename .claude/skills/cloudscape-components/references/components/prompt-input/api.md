# PromptInput

```ts
import PromptInput from '@cloudscape-design/components/prompt-input'
import type { PromptInputProps } from '@cloudscape-design/components/prompt-input'
```

Generated from `@cloudscape-design/components@3.0.1382` `prompt-input/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`actionButtonAriaLabel?`**: `string` _(@i18n; @deprecated Use `i18nStrings.actionButtonAriaLabel` instead.)_
  Adds an aria-label to the action button.
- **`actionButtonIconAlt?`**: `string`
  Specifies alternate text for a custom icon. We recommend that you provide this for accessibility.
  This property is ignored if you use a predefined icon or if you set your custom icon using the `iconSvg` slot.
- **`actionButtonIconName?`**: `IconProps.Name`
  Determines what icon to display in the action button.
- **`actionButtonIconSvg?`**: `React.ReactNode`
  Specifies the SVG of a custom icon.
  
  Use this property if you want your custom icon to inherit colors dictated by variant or hover states.
  When this property is set, the component will be decorated with `aria-hidden="true"`. Ensure that the `svg` element:
  - has attribute `focusable="false"`.
  - has `viewBox="0 0 16 16"`.
  
  If you set the `svg` element as the root node of the slot, the component will automatically
  - set `stroke="currentColor"`, `fill="none"`, and `vertical-align="top"`.
  - set the stroke width based on the size of the icon.
  - set the width and height of the SVG element based on the size of the icon.
  
  If you don't want these styles to be automatically set, wrap the `svg` element into a `span`.
  You can still set the stroke to `currentColor` to inherit the color of the surrounding elements.
  
  If you set both `actionButtonIconUrl` and `actionButtonIconSvg`, `iconSvg` will take precedence.
  
  *Note:* Remember to remove any additional elements (for example: `defs`) and related CSS classes from SVG files exported from design software.
  In most cases, they aren't needed, as the `svg` element inherits styles from the icon component.
- **`actionButtonIconUrl?`**: `string`
  Specifies the URL of a custom icon. Use this property if the icon you want isn't available.
  
  If you set both `actionButtonIconUrl` and `actionButtonIconSvg`, `actionButtonIconSvg` will take precedence.
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
- **`autoComplete?`**: `boolean | string`
  Specifies whether to enable a browser's autocomplete functionality for this input.
  In some cases it might be appropriate to disable autocomplete (for example, for security-sensitive fields).
  To use it correctly, set the `name` property.
  
  You can either provide a boolean value to set the property to "on" or "off", or specify a string value
  for the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute.
  
  Note: When `tokens` is defined, autocomplete will not function.
- **`autoFocus?`**: `boolean`
  Indicates whether the control should be focused as
  soon as the page loads, which enables the user to
  start typing without having to manually focus the control. Don't
  use this option on pages where the control may be
  scrolled out of the viewport.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`customPrimaryAction?`**: `React.ReactNode`
  Use this to replace the primary action.
  If this is provided then any other `actionButton*` properties will be ignored.
  Note that you should still provide an `onAction` function in order to handle keyboard submission.
- **`disableActionButton?`**: `boolean`
  Specifies whether to disable the action button.
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
- **`disableSecondaryActionsPaddings?`**: `boolean`
  Determines whether the secondary actions area of the input has padding. If true, removes the default padding from the secondary actions area.
- **`disableSecondaryContentPaddings?`**: `boolean`
  Determines whether the secondary content area of the input has padding. If true, removes the default padding from the secondary content area.
- **`i18nStrings?`**: `PromptInputProps.I18nStrings` _(@i18n)_
  An object containing all the localized strings required by the component.
  
  - `ariaLabel` (string) - Adds an aria-label to the input element.
  - `actionButtonAriaLabel` (string) - Adds an aria-label to the action button.
  - `menuErrorIconAriaLabel` (string) - Provides a text alternative for the error icon in the error message in menus.
  - `menuRecoveryText` (string) - Specifies the text for the recovery button in menus. The text is displayed next to the error text.
  - `menuLoadingText` (string) - Specifies the text to display when menus are in a loading state.
  - `menuFinishedText` (string) - Specifies the text to display when menus have finished loading all items.
  - `menuErrorText` (string) - Specifies the text to display when menus encounter an error while loading.
  - `selectedMenuItemAriaLabel` (string) - Specifies the string that describes an option as being selected.
  - `tokenInsertedAriaLabel` ((token: { label?: string; value: string }) => string) - Aria label announced when a reference token is inserted from a menu. Receives the token object with label and value properties.
  - `tokenPinnedAriaLabel` ((token: { label?: string; value: string }) => string) - Aria label announced when a reference token is pinned (inserted at the start). Receives the token object with label and value properties.
  - `tokenRemovedAriaLabel` ((token: { label?: string; value: string }) => string) - Aria label announced when a reference token is removed. Receives the token object with label and value properties.
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
- **`maxMenuHeight?`**: `number`
  Maximum height of the menu dropdown in pixels.
  When not specified, the menu will grow to fit its content.
  
  Requires React 18.
- **`maxRows?`**: `number`
  Specifies the maximum number of lines of text the textarea will expand to.
  Defaults to 3. Use -1 for infinite rows.
- **`menus?`**: `PromptInputProps.MenuDefinition[]`
  Defines trigger-based menus that appear when the user types a specific character (e.g., `@` or `/`).
  Each menu definition maps a trigger character to a list of selectable options.
  
  Requires React 18.
  
  #### MenuDefinition
  - `id` (string) - Unique identifier for this menu. Used in event callbacks to identify the menu.
  - `trigger` (string) - The character that activates this menu (e.g., `@`, `/`, `#`).
  - `options` (Option[] | OptionGroup[]) - The selectable items shown in the dropdown.
  - `useAtStart` (boolean) - (Optional) When true, the trigger is only detected at the start of the input and after any pinned tokens. Selected options become pinned reference tokens. Defaults to false.
  - `filteringType` (`'auto'` | `'manual'`) - (Optional) How filtering is applied. `auto` filters options client-side based on typed text. `manual` disables built-in filtering — use `onMenuFilter` to provide filtered options. Defaults to `auto`.
  - `statusType` (`'pending'` | `'loading'` | `'finished'` | `'error'`) - (Optional) The loading status of the menu options. Use with `onMenuLoadItems` for async loading.
  - `empty` (string) - (Optional) Text shown when no options match the filter.
  - `virtualScroll` (boolean) - (Optional) Enables virtual scrolling for large option lists.
- **`minRows?`**: `number`
  Specifies the minimum number of lines of text to set the height to.
- **`name?`**: `string`
  Specifies the name of the prompt input for form submissions.
- **`nativeTextareaAttributes?`**: `NativeAttributes<React.TextareaHTMLAttributes<HTMLTextAreaElement>>` _(@awsuiSystem core)_
  Attributes to add to the native `textarea` element.
  Some attributes will be automatically combined with internal attribute values:
  - `className` will be appended.
  - Event handlers will be chained, unless the default is prevented.
  
  We do not support using this attribute to apply custom styling.
  When `tokens` is defined, nativeTextareaAttributes will be ignored.
- **`placeholder?`**: `string`
  Specifies the placeholder text rendered when the value is an empty string.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value but includes it in a form
  submission. A read-only control can receive focus.
  
  Don't use read-only inputs outside a form.
- **`secondaryActions?`**: `React.ReactNode`
  Use this slot to add secondary actions to the prompt input.
- **`secondaryContent?`**: `React.ReactNode`
  Use this slot to add secondary content, such as file attachments, to the prompt input.
- **`spellcheck?`**: `boolean`
  Specifies the value of the `spellcheck` attribute on the native control.
  This value controls the native browser capability to check for spelling/grammar errors.
  If not set, the browser default behavior is to perform spellchecking.
  For more details, check the [spellcheck MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).
  
  Enhanced spellchecking features of your browser and/or operating system may send input values to external parties.
  Make sure it’s deactivated for fields with sensitive information to prevent
  inadvertently sending data (such as user passwords) to third parties.
- **`style?`**: `PromptInputProps.Style` _(@awsuiSystem core)_
- **`tokens?`**: `readonly PromptInputProps.InputToken[]`
  Specifies the content of the prompt input when using token mode.
  
  Available types and their properties:
  - Text tokens:
    - `value` contains the text content.
  - Reference tokens:
    - `id` as the unique identifier, this is auto-generated however when setting `tokens` it is required to provide an ID.
    - `value` contains the reference value.
    - `label` for display (e.g., 'file.txt').
    - `menuId` for the associated menu (optional).
    - `pinned` to render at the start of the input.
  - Trigger tokens:
    - `id` as the unique identifier, this is auto-generated however when setting `tokens` it is required to provide an ID.
    - `value` contains the filter text.
    - `triggerChar` for the trigger character.
  
  When `menus` is defined, you should use `tokens` to control the content instead of `value`.
  
  Requires React 18.
- **`tokensToText?`**: `(tokens: readonly PromptInputProps.InputToken[]) => string`
  Custom function to transform tokens into plain text for the `value` field in `onChange` and `onAction` events
  and for the hidden input when `name` is specified.
  
  If not provided, falls back to a default simple implementation.
  
  Use this to customize serialization, for example:
  - Using `label` instead of `value` for reference tokens
  - Adding custom formatting or separators between tokens
  
  Requires React 18.
- **`value?`**: `string`
  Specifies the content of the prompt input.
  
  When `tokens` is not defined:
  - This property is required
  - Represents the current text content of the textarea
  
  When `tokens` is defined:
  - This property is optional and defaults to empty string
  - The actual content is managed via the `tokens` array
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

- **`onAction?`**: `NonCancelableEventHandler<PromptInputProps.ActionDetail>`
  Called whenever a user clicks the action button or presses the "Enter" key.
  The event `detail` contains the current value as a string and an array of tokens.
  
  When `tokens` is defined, the `value` is derived from `tokensToText(tokens)` if provided, otherwise from a default simple implementation.
- **`onBlur?`**: `NonCancelableEventHandler<null>`
  Called when input focus is removed from the UI control.
- **`onChange?`**: `NonCancelableEventHandler<PromptInputProps.ChangeDetail>`
  Called whenever a user changes the input value (by typing or pasting).
  The event `detail` contains the current value as a string and an array of tokens.
  
  When `tokens` is defined, the `value` is derived from `tokensToText(tokens)` if provided, otherwise from a default simple implementation.
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
- **`onMenuFilter?`**: `NonCancelableEventHandler<PromptInputProps.MenuFilterDetail>`
  Called when the user types to filter options in manual filtering mode for a menu.
  Use this to filter the options based on the filtering text.
  
  The detail object contains:
  - `menuId` - The ID of the menu that triggered the event.
  - `filteringText` - The text to use for filtering options.
  
  Requires React 18.
- **`onMenuItemSelect?`**: `NonCancelableEventHandler<PromptInputProps.MenuItemSelectDetail>`
  Called whenever a user selects an option in a menu.
  
  Requires React 18.
- **`onMenuLoadItems?`**: `NonCancelableEventHandler<PromptInputProps.MenuLoadItemsDetail>`
  Use this event to implement the asynchronous behavior for menus.
  
  The event is called in the following situations:
  - The user scrolls to the end of the list of options, if `statusType` is set to `pending` (pagination).
  - The user clicks on the recovery button in the error state.
  - The user types after the trigger character.
  - The menu is opened.
  
  The detail object contains the following properties:
  - `menuId` - The ID of the menu that triggered the event.
  - `filteringText` - The value to use to fetch options (undefined for pagination).
  - `firstPage` - Indicates that you should fetch the first page of options.
  - `samePage` - Indicates that you should fetch the same page (for example, when clicking recovery button).
  
  Requires React 18.
- **`onTriggerDetected?`**: `CancelableEventHandler<PromptInputProps.TriggerDetectedDetail>`
  Called when a trigger character is detected and about to be converted to a trigger token.
  This event is cancellable - return `preventDefault()` to prevent the trigger from being created.
  
  The detail object contains:
  - `menuId` - The ID of the menu associated with the trigger.
  - `triggerChar` - The trigger character that was detected.
  - `position` - The position in the text where the trigger was detected.
  
  Use this to implement custom validation logic for triggers, such as preventing
  triggers that don't meet certain conditions (for example, limiting the amount of references in a prompt).
  
  Requires React 18.

## Types

Supporting types from `PromptInputProps` (verbatim):

```ts
export declare namespace PromptInputProps {
  type KeyDetail = BaseKeyDetail;
  interface I18nStrings {
    actionButtonAriaLabel?: string;
    menuErrorIconAriaLabel?: string;
    menuRecoveryText?: string;
    menuLoadingText?: string;
    menuFinishedText?: string;
    menuErrorText?: string;
    /**
     * Aria label announced when a reference token is inserted from a menu.
     * Receives the token object with label and value properties.
     * @param token The inserted token
     * @returns The announcement string
     * @default `${token.label || token.value} inserted`
     */
    tokenInsertedAriaLabel?: (token: {
      label?: string;
      value: string;
    }) => string;
    /**
     * Aria label announced when a reference token is pinned (inserted at the start).
     * Receives the token object with label and value properties.
     * @param token The pinned token
     * @returns The announcement string
     * @default `${token.label || token.value} pinned`
     */
    tokenPinnedAriaLabel?: (token: {
      label?: string;
      value: string;
    }) => string;
    /**
     * Aria label announced when a reference token is removed.
     * Receives the token object with label and value properties.
     * @param token The removed token
     * @returns The announcement string
     * @default `${token.label || token.value} removed`
     */
    tokenRemovedAriaLabel?: (token: {
      label?: string;
      value: string;
    }) => string;
  }
  interface TextToken {
    type: 'text' | 'break';
    value: string;
  }
  interface ReferenceToken {
    type: 'reference';
    id: string;
    label: string;
    value: string;
    /**
     * The ID of the menu this reference was selected from.
     * Optional — references can exist without being bound to a menu
     * (e.g., preloaded references from external sources).
     */
    menuId?: string;
    /**
     * When true, prevents user entered text from being placed before this token.
     * Typically set for reference tokens from useAtStart menus.
     */
    pinned?: boolean;
  }
  /**
   * Token type for menu triggers with filter text.
   * Represents a trigger character (e.g., "@" or "/") followed by filtering text.
   * This token type is automatically managed by the component when menus are active.
   *
   * - `value`: The filtering text (without the trigger character)
   * - `triggerChar`: The trigger character that opened the menu
   */
  interface TriggerToken {
    type: 'trigger';
    value: string;
    triggerChar: string;
    id: string;
  }
  type InputToken = TextToken | ReferenceToken | TriggerToken;
  interface ChangeDetail {
    value: string;
    tokens?: readonly InputToken[];
  }
  interface ActionDetail {
    value: string;
    tokens?: readonly InputToken[];
  }
  interface MenuItemSelectDetail {
    menuId: string;
    option: OptionDefinition;
  }
  interface MenuLoadItemsDetail {
    menuId: string;
    filteringText?: string;
    firstPage: boolean;
    samePage: boolean;
  }
  interface MenuFilterDetail {
    menuId: string;
    filteringText: string;
  }
  interface TriggerDetectedDetail {
    menuId: string;
    triggerChar: string;
    position: number;
  }
  interface MenuDefinition extends Pick<DropdownStatusProps, 'empty' | 'statusType'>, Pick<BaseDropdownHostProps, 'virtualScroll'> {
    /**
     * The unique identifier for this menu.
     */
    id: string;
    /**
     * The unique trigger symbol for showing this menu.
     */
    trigger: string;
    /**
     * Set `useAtStart=true` for menus where a trigger should only be detected at the start of input.
     * Set this for menus designated to modes or actions.
     *
     * Menus with `useAtStart=true` create pinned reference tokens.
     */
    useAtStart?: boolean;
    /**
     * Specifies an array of options that are displayed to the user as a list.
     * The options can be grouped using `OptionGroup` objects.
     *
     * #### Option
     * - `value` (string) - The returned value of the option when selected.
     * - `label` (string) - (Optional) Option text displayed to the user.
     * - `lang` (string) - (Optional) The language of the option, provided as a BCP 47 language tag.
     * - `description` (string) - (Optional) Further information about the option that appears below the label.
     * - `disabled` (boolean) - (Optional) Determines whether the option is disabled.
     * - `labelTag` (string) - (Optional) A label tag that provides additional guidance, shown next to the label.
     * - `tags` [string[]] - (Optional) A list of tags giving further guidance about the option.
     * - `filteringTags` [string[]] - (Optional) A list of additional tags used for automatic filtering.
     * - `iconName` (string) - (Optional) Specifies the name of an [icon](../icon/guidelines.md) to display in the option.
     * - `iconAriaLabel` (string) - (Optional) Specifies alternate text for the icon. We recommend that you provide this for accessibility.
     * - `iconAlt` (string) - (Optional) **Deprecated**, replaced by \`iconAriaLabel\`. Specifies alternate text for a custom icon, for use with `iconUrl`.
     * - `iconUrl` (string) - (Optional) URL of a custom icon.
     * - `iconSvg` (ReactNode) - (Optional) Custom SVG icon. Equivalent to the `svg` slot of the [icon component](../icon/guidelines.md).
     *
     * #### OptionGroup
     * - `label` (string) - Option group text displayed to the user.
     * - `disabled` (boolean) - (Optional) Determines whether the option group is disabled.
     * - `options` (Option[]) - (Optional) The options under this group.
     *
     * Note: Only one level of option nesting is supported.
     *
     * If you want to use the built-in filtering capabilities of this component, provide
     * a list of all valid options here and they will be automatically filtered based on the user's filtering input.
     *
     * Alternatively, you can listen to the `onChange` or `onLoadItems` event and set new options
     * on your own.
     */
    options: (OptionDefinition | OptionGroup)[];
    /**
     * Determines how filtering is applied to the list of `options`:
     *
     * - `auto` - The component will automatically filter options based on user input.
     * - `manual` - You will set up `onMenuFilter` event listeners and filter options on your side or request
     * them from server.
     *
     * By default the component will filter the provided `options` based on the value of the filtering input field.
     * Only options that have a `value`, `label`, `description` or `labelTag` that contains the input value as a substring
     * are displayed in the list of options.
     *
     * If you set this property to `manual`, this default filtering mechanism is disabled and all provided `options` are
     * displayed in the menu. In that case make sure that you use the `onMenuFilter` event in order
     * to set the `options` property to the options that are relevant for the user, given the filtering input value.
     *
     * Note: Manual filtering doesn't disable match highlighting.
     **/
    filteringType?: Exclude<OptionsFilteringType, 'none'>;
  }
  interface Ref {
    /**
     * Sets input focus on the textarea control.
     */
    focus(): void;
    /**
     * Selects all text in the textarea control.
     */
    select(): void;
    /**
     * Selects a range of text in the textarea control.
     *
     * See https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement/setSelectionRange
     * for more details on this method. Be aware that using this method in React has some
     * common pitfalls: https://stackoverflow.com/questions/60129605/is-javascripts-setselectionrange-incompatible-with-react-hooks
     */
    setSelectionRange(start: number | null, end: number | null, direction?: 'forward' | 'backward' | 'none'): void;
    /**
     * Inserts text at a specified position. Only supported when `tokens` is defined.
     * Triggers input events and menu detection.
     *
     * When pinned reference tokens are present, `caretStart` and `caretEnd` are automatically
     * shifted to account for their positions.
     *
     * @param text The text to insert.
     * @param caretStart Position to insert at. Defaults to current caret position or 0.
     * @param caretEnd Caret position after insertion. Defaults to end of inserted text.
     */
    insertText(text: string, caretStart?: number, caretEnd?: number): void;
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
