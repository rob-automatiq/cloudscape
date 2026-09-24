# PropertyFilter

```ts
import PropertyFilter from '@cloudscape-design/components/property-filter'
import type { PropertyFilterProps } from '@cloudscape-design/components/property-filter'
```

Generated from `@cloudscape-design/components@3.0.1382` `property-filter/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`asyncProperties?`**: `boolean`
  Set `asyncProperties` if you need to load `filteringProperties` asynchronously. This would cause extra `onLoadMore`
  events to fire calling for more properties.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`countText?`**: `string`
  Accepts a human-readable, localized string that indicates the number of results. For example, "1 match" or "165 matches."
  If the total number of results is unknown, also include an indication that there may be more results than
  the number listed. For example, "25+ matches."
  
  The count text is only displayed when `query.tokens` isn't empty.
  When the `countText` or `query` changes, it will be announced to assistive technologies.
- **`customControl?`**: `React.ReactNode`
  A slot located before the filtering input. Use it if for a Select component if your dataset supports property
  filter queries only after an initial filter is applied.
- **`customFilterActions?`**: `React.ReactNode`
  A slot that replaces the standard "Clear filter" button.
  When using this slot, make sure to still provide a mechanism to clear all filters.
- **`customGroupsText?`**: `PropertyFilterProps.GroupText[]`
  An array of objects that contain localized, human-readable strings for the labels of custom groups within the filtering dropdown. Use group property to associate the strings with your custom group of options. Define the following values for each group:
  
  * properties [string]: The group label in the filtering dropdown that contains the list of properties from this group. For example: Tags.
  * values [string]: The group label in the filtering dropdown that contains the list of values from this group. For example: Tags values.
  * group [string]: The identifier of a custom group.
- **`disabled?`**: `boolean`
  If set to `true`, the filtering input will be disabled.
  Use it, for example, if you are fetching new items upon filtering change
  in order to prevent the user from changing the filtering query.
- **`disableFreeTextFiltering?`**: `boolean`
  Set `disableFreeTextFiltering` only if you can’t filter the dataset using a filter that is applied to every column,
  instead of a specific property. This would stop the user from creating such tokens.
- **`enableTokenGroups?`**: `boolean`
  Activates token grouping mechanism to support token nesting (up to one level).
  When `true`, the `query.tokens` property is ignored and `query.tokenGroups` is used instead.
- **`expandToViewport?`**: `boolean`
  By default, the dropdown height is constrained to fit inside the height of its next scrollable container element.
  Enabling this property will allow the dropdown to extend beyond that container by using fixed positioning and
  [React Portals](https://reactjs.org/docs/portals.html).
  
  Set this property if the dropdown would otherwise be constrained by a scrollable container,
  for example inside table and split view layouts.
  
  We recommend you use discretion, and don't enable this property unless necessary
  because fixed positioning results in a slight, visible lag when scrolling complex pages.
- **`filteringAriaLabel?`**: `string`
  The label that will be passed down to the Autosuggest `ariaLabel` property.
  See the [Autosuggest API](/components/autosuggest/?tabId=api) page for more details.
- **`filteringConstraintText?`**: `React.ReactNode`
  Constraint text that's displayed below the filtering input.
  Use this to provide additional information about supported filters.
- **`filteringEmpty?`**: `React.ReactNode`
  Displayed when there are no options to display.
  This is only shown when `statusType` is set to `finished` or not set at all.
- **`filteringErrorText?`**: `string`
  Specifies the text to display when a data fetching error occurs. Make sure that you provide `recoveryText`.
- **`filteringFinishedText?`**: `string`
  Specifies the text to display at the bottom of the dropdown menu after pagination has reached the end.
- **`filteringLoadingText?`**: `string`
  Specifies the text to display when in the loading state.
- **`filteringOptions?`**: `ReadonlyArray<PropertyFilterProps.FilteringOption>`
  An array of possible values of the individual `filteringProperties`. Each element has the following properties:
  
  * `propertyKey` [string]: The key of the corresponding filtering property in the `filteringProperties` array.
  * `value` [string]: The value that will be used as a suggestion when creating or modifying a filtering token.
  * `label` [string]: Optional suggestion label to be matched instead of the value.
  * `tags` [string[]]: Optional list of tags giving further guidance about the option.
  * `filteringTags` [string[]]: Optional list of additional tags used for automatic filtering.
  
  Filtering options that require labels can only use `=` and `!=` operators. The token value must be labelled separately, for example:
  ```
  const filteringProperty = {
    key: 'state',
    propertyLabel: 'State',
    operators: ['=', '!='].map(operator => ({ operator, format: getStateLabel }))
  }
  const filteringOptions = [
    { propertyKey: 'state', value: 'STOPPED', label: getStateLabel('STOPPED') },
    { propertyKey: 'state', value: 'STOPPING', label: getStateLabel('STOPPING') },
    { propertyKey: 'state', value: 'RUNNING', label: getStateLabel('RUNNING') },
  ]
  ```
- **`filteringPlaceholder?`**: `string`
  Placeholder for the filtering input.
- **`filteringProperties`**: `ReadonlyArray<PropertyFilterProps.FilteringProperty>`
  An array of properties by which the data set can be filtered. Each element has the following properties:
  
  * groupValuesLabel [string]: Localized string to display for the 'Values' group label for a specific property.
  * key [string]: The identifier of this property.
  * propertyLabel [string]: A human-readable string for the property.
  * operators [Array]: A list of all operators supported by this property. Built-in operators are always shown first in their standard order; custom operators are appended after them. If you omit the equals operator because your API does not support it, make sure to set `defaultOperator` to a supported operator from this list. Each entry is either an operator string (for example, `=`, `!=`, `:`, `>`), or an object that customizes the operator with the following properties:
    * `operator` [string]: The operator string. In addition to the built-in operators, you can define a custom operator string, for example `~` or `in`.
    * `match` ['date' | 'datetime' | function]: Overrides how items are matched for this operator. Use `'date'` or `'datetime'` for the built-in date matchers, or a function `(itemValue, tokenValue) => boolean` for custom matching. When you use a custom operator string, provide a `match` function; otherwise there is no matcher for it and items are not filtered by that operator.
    * `description` [string]: A human-readable description shown next to the operator in the operator dropdown. Use it to describe a custom operator, or to override the built-in description of a predefined operator (for example, describing `>` as "After" for a date property).
    * `tokenType` ['value' | 'enum']: The type of value input rendered for this operator.
    * `format` [function]: A function `(value) => string` used to format the token value for display.
    * `form` [ReactNode]: A custom form used to enter the token value.
  * group [string]: Optional identifier of a custom group that this filtering option is assigned to. Use to create additional groups below the default one. Make sure to also define labels for the group in the customGroupsText property. Notice that only one level of options nesting is supported.
  * defaultOperator [ComparisonOperator]: Optional parameter that changes the default operator used with this filtering property. Use it only if your API does not support "equals" filtering terms with this property.
- **`filteringRecoveryText?`**: `string`
  Specifies the text for the recovery button. The text is displayed next to the error text.
  Use the `onLoadItems` event to perform a recovery action (for example, retrying the request).
- **`filteringStatusType?`**: `PropertyFilterProps.StatusType`
  Specifies the current status of loading more options.
  * `pending` - Indicates that no request in progress, but more options may be loaded.
  * `loading` - Indicates that data fetching is in progress.
  * `finished` - Indicates that pagination has finished and no more requests are expected.
  * `error` - Indicates that an error occurred during fetch. You should use `recoveryText` to enable the user to recover.
- **`freeTextFiltering?`**: `PropertyFilterProps.FreeTextFiltering`
  An object configuring the operators for free text filtering, which has the following properties:
  
  * operators [Array]: A list of all operators supported for free text filtering. Each entry is either an operator string, or an object with an `operator` string and an optional `match` function `(item, text) => boolean` for custom matching. Custom operator strings are supported and are appended after the built-in operators. If you omit the contains operator because your API does not support it, make sure to set `defaultOperator` to a supported operator from this list.
  * defaultOperator [ComparisonOperator]: An optional parameter that changes the default operator used for free text filtering. Use this parameter only if your API does not support "contains" free test filtering terms.
- **`hideOperations?`**: `boolean`
  If hideOperations it set, the indicator of the operation (that is, `and` or `or`) and the selection of operations
  (applied to the property and value token) are hidden from the user. Only use when you have a custom
  filtering logic which combines tokens in different way than the default one. When used, ensure that
  operations are communicated to the user in another way, or use `readOnlyOperations`.
  
  This property cannot be set when `enableTokenGroups=true`.
- **`i18nStrings?`**: `PropertyFilterProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`loading?`**: `boolean`
  Set to `true` while the related collection is loading (e.g. during an async filtering action).
  If set to `true`, the live announcement of countText by assistive technologies will be paused until it changes back to `false`.
- **`query`**: `PropertyFilterProps.Query`
  An object representing the current query displayed in the property filter, which has three properties: `operation`, `tokens`, and `tokenGroups`.
  The `operation` property has two valid values: "and", "or", and controls the join operation to be applied between tokens when filtering the items.
  The `tokens` property is an array of objects that will be displayed to the user beneath the filtering input. When `enableTokenGroups=true`, the
  `tokenGroups` property is used instead, which supports nested tokens.
  
  Each token has the following properties:
  * value [unknown]: The value of the token to be used as a filter. Can be null or string for default tokens, string[] for enum tokens, and anything for tokens with custom forms.
  * propertyKey [string]: The key of the corresponding property in filteringProperties.
  * operator ['<' | '<=' | '>' | '>=' | ':' | '!:' | '=' | '!=' | '^' | '!^']: The operator which indicates how to filter the dataset using this token.
- **`readOnlyOperations?`**: `boolean`
  If readOnlyOperations it set, the indicator of the operation (that is, `and` or `or`) is shown, but the
  operation cannot be changed. This is also supported for nested tokens when `enableTokenGroups=true`.
- **`tokenLimit?`**: `number`
  Specifies the maximum number of displayed tokens. If the property isn't set, all of the tokens are displayed.
- **`tokenLimitShowFewerAriaLabel?`**: `string`
  Adds an aria-label to the "Show fewer" button for the token group control.
  Use to assign unique labels when there are multiple token groups with the same `tokenLimitShowFewer` label on one page.
- **`tokenLimitShowMoreAriaLabel?`**: `string`
  Adds an aria-label to the "Show more" button for the token group control.
  Use to assign unique labels when there are multiple token groups with the same `tokenLimitShowMore` label on one page.
- **`virtualScroll?`**: `boolean`
  If you have more than 500 `filteringOptions`, enable this flag to apply a performance optimization that makes
  the filtering experience smoother. We don't recommend enabling the feature if you have less than 500 options,
  because the improvements to performance are offset by a visible scrolling lag. When you set this flag to true,
  it removes options that are not currently in view from the DOM.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange`**: `NonCancelableEventHandler<PropertyFilterProps.Query>`
  Fired when the `query` gets changed. Filter the dataset in response to this event using the values in the `detail` object.
- **`onLoadItems?`**: `NonCancelableEventHandler<PropertyFilterProps.LoadItemsDetail>`
  Use this event to asynchronously load filteringOptions, component currently needs.  The detail object contains following properties:
  
  * `filteringProperty` - The property for which you need to fetch the options.
  * `filteringOperator` - The operator for which you need to fetch the options.
  * `filteringText` - The value that you need to use to fetch options.
  * `firstPage` - Indicates that you should fetch the first page of options for a `filteringProperty` that match the `filteringText`.
  * `samePage` - Indicates that you should fetch the same page that you have previously fetched (for example, when the user clicks on the recovery button).

## Types

Supporting types from `PropertyFilterProps` (verbatim):

```ts
export declare namespace PropertyFilterProps {
  type Token = PropertyFilterToken;
  type TokenGroup = PropertyFilterTokenGroup;
  type JoinOperation = PropertyFilterOperation;
  type ComparisonOperator = PropertyFilterOperator;
  type ExtendedOperator<TokenValue> = PropertyFilterOperatorExtended<TokenValue>;
  type ExtendedOperatorFormProps<TokenValue> = PropertyFilterOperatorFormProps<TokenValue>;
  type ExtendedOperatorForm<TokenValue> = PropertyFilterOperatorForm<TokenValue>;
  type ExtendedOperatorFormat<TokenValue> = PropertyFilterOperatorFormat<TokenValue>;
  type FilteringOption = PropertyFilterOption;
  type FilteringProperty = PropertyFilterProperty;
  type FreeTextFiltering = PropertyFilterFreeTextFiltering;
  type Query = PropertyFilterQuery;
  type StatusType = DropdownStatusProps.StatusType;
  interface LoadItemsDetail {
    filteringProperty?: FilteringProperty;
    filteringOperator?: ComparisonOperator;
    filteringText: string;
    firstPage: boolean;
    samePage: boolean;
  }
  interface I18nStrings {
    /**
     * @deprecated Use `filteringAriaLabel` on the component instead.
     */
    filteringAriaLabel?: string;
    /**
     * @deprecated Use `filteringPlaceholder` on the component instead.
     */
    filteringPlaceholder?: string;
    dismissAriaLabel?: string;
    clearAriaLabel?: string;
    groupValuesText?: string;
    groupPropertiesText?: string;
    operatorsText?: string;
    operationAndText?: string;
    operationOrText?: string;
    operatorLessText?: string;
    operatorLessOrEqualText?: string;
    operatorGreaterText?: string;
    operatorGreaterOrEqualText?: string;
    operatorContainsText?: string;
    operatorDoesNotContainText?: string;
    operatorEqualsText?: string;
    operatorDoesNotEqualText?: string;
    operatorStartsWithText?: string;
    operatorDoesNotStartWithText?: string;
    editTokenHeader?: string;
    propertyText?: string;
    operatorText?: string;
    valueText?: string;
    cancelActionText?: string;
    applyActionText?: string;
    allPropertiesLabel?: string;
    formatToken?: (token: FormattedToken) => string;
    tokenLimitShowMore?: string;
    tokenLimitShowFewer?: string;
    clearFiltersText?: string;
    tokenOperatorAriaLabel?: string;
    removeTokenButtonAriaLabel?: (token: FormattedToken) => string;
    enteredTextLabel?: AutosuggestProps.EnteredTextLabel;
    groupEditAriaLabel?: (group: FormattedTokenGroup) => string;
    tokenEditorTokenActionsAriaLabel?: (token: FormattedToken) => string;
    tokenEditorTokenRemoveAriaLabel?: (token: FormattedToken) => string;
    tokenEditorTokenRemoveLabel?: string;
    tokenEditorTokenRemoveFromGroupLabel?: string;
    tokenEditorAddNewTokenLabel?: string;
    tokenEditorAddTokenActionsAriaLabel?: string;
    tokenEditorAddExistingTokenAriaLabel?: (token: FormattedToken) => string;
    tokenEditorAddExistingTokenLabel?: (token: FormattedToken) => string;
  }
  interface FormattedToken {
    propertyKey?: string;
    propertyLabel: string;
    operator: ComparisonOperator;
    value: string;
  }
  interface FormattedTokenGroup {
    tokens: FormattedToken[];
    operation: string;
    operationLabel: string;
  }
  interface GroupText {
    properties: string;
    values: string;
    group: string;
  }
  interface FilteringChangeDetail {
    filteringText: string;
    filteringProperty?: FilteringProperty;
  }
  interface Ref {
    /**
     * Sets focus on the underlying input control.
     */
    focus(): void;
  }
}
```
