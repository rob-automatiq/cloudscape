# DateRangePicker

```ts
import DateRangePicker from '@cloudscape-design/components/date-range-picker'
import type { DateRangePickerProps } from '@cloudscape-design/components/date-range-picker'
```

Generated from `@cloudscape-design/components@3.0.1382` `date-range-picker/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`absoluteFormat?`**: `DateRangePickerProps.AbsoluteFormat`
  Specifies the time format to use for displaying the absolute time range.
  
  It can take the following values:
  * `iso`: ISO 8601 format, e.g.: 2024-01-30T13:32:32+01:00 (or 2024-01-30 when `dateOnly` is true)
  * `long-localized`: a more human-readable, localized format, e.g.: January 30, 2024, 13:32:32 (UTC+1) (or January 30, 2024 when `dateOnly` is true)
  * `slashed`: similar to ISO 8601 but with '/' in place of '-'. e.g.: 2024/01/30 (or 2024/01)
- **`absoluteMultiGridStartPeriod?`**: `DateRangePickerProps.StartPeriod`
  Specifies whether to start with the previous or current period (month or year)
  when multiple calendar grids are displayed in absolute mode.
  
  Defaults to 'auto', which starts with previous if no date is selected,
  or current if a selection is present.
- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaLabel?`**: `string`
  Adds `aria-label` to the trigger and dropdown.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`customAbsoluteRangeControl?`**: `DateRangePickerProps.AbsoluteRangeControl`
  Specifies an additional control displayed in the dropdown, located below the range calendar.
- **`customRelativeRangeUnits?`**: `DateRangePickerProps.TimeUnit[]`
  Specifies which time units to allow in the custom relative range control.
- **`dateDisabledReason?`**: `DateRangePickerProps.DateDisabledReasonFunction`
  Provides a reason why a particular date in the calendar is not enabled (only when `isDateEnabled` returns `false`).
  If provided, the date becomes focusable.
- **`dateInputFormat?`**: `DateRangePickerProps.DateInputFormat`
  Specifies the date format to use on the date inputs in the absolute dropdown.
  
  The format of the input as it is being interacted with. It can take the following values:
  * `iso`: ISO 8601 format without time, e.g.: 2024-01-30 (or 2024-01)
  * `slashed`: similar to ISO 8601 but with '/' in place of '-'. e.g.: 2024/01/30 (or 2024/01)
- **`dateOnly?`**: `boolean`
  Hides time inputs and changes the input format to date-only, e.g. 2021-04-06.
  
  Do not use `dateOnly` flag conditionally. The component does not trigger the value update
  when the flag changes which means the value format can become inconsistent.
  
  This does not apply when the 'granularity' is set to 'month'
  
  Default: `false`.
- **`disabled?`**: `boolean`
  Specifies that the component is disabled, preventing the user from
  modifying the value. A disabled component cannot receive focus.
- **`expandToViewport?`**: `boolean`
  By default, the dropdown height is constrained to fit inside the height of its next scrollable container element.
  Enabling this property will allow the dropdown to extend beyond that container by using fixed positioning and
  [React Portals](https://reactjs.org/docs/portals.html).
  
  Set this property if the dropdown would otherwise be constrained by a scrollable container,
  for example inside table and split view layouts.
  
  We recommend you use discretion, and don't enable this property unless necessary
  because fixed positioning results in a slight, visible lag when scrolling complex pages.
- **`getTimeOffset?`**: `DateRangePickerProps.GetTimeOffsetFunction`
  A function that defines timezone offset from UTC in minutes for selected dates.
  Use it to define time relative to the desired timezone.
  
  The function is called for the start date and the end date and takes a UTC date
  corresponding the selected value as an argument.
  
  Has no effect when `dateOnly` is true.
  
  Default: the user's current time offset as provided by the browser.
- **`granularity?`**: `CalendarProps.Granularity`
  Specifies the granularity at which users will be able to select a date.
  Defaults to `day`.
- **`hideTimeOffset?`**: `boolean`
  Specifies whether to hide the time offset in the displayed absolute time range.
  Defaults to `false`.
- **`i18nStrings?`**: `DateRangePickerProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
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
- **`isDateEnabled?`**: `DateRangePickerProps.IsDateEnabledFunction`
  A function that defines whether a particular date should be enabled
  in the calendar or not. Note that disabling a date in the calendar
  still allows users to enter this date via keyboard. We therefore
  recommend that you also validate these constraints client- and
  server-side, in the same way as for other form elements.
- **`isValidRange`**: `DateRangePickerProps.ValidationFunction`
  A function that defines whether a particular range is valid or not.
  
  Ensure that your function checks for missing fields in the value.
- **`locale?`**: `string`
  The locale to be used for rendering month names and defining the
  starting date of the week. If not provided, it will be determined
  from the page and browser locales. Supported values and formats
  are as-per the [JavaScript Intl API specification](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
- **`placeholder?`**: `string`
  Specifies the placeholder text that is rendered when the value is empty.
- **`rangeSelectorMode?`**: `DateRangePickerProps.RangeSelectorMode`
  Determines the range selector mode as follows:
  
  * `default` for combined absolute/relative range selector.
  * `absolute-only` for absolute-only range selector.
  * `relative-only` for relative-only range selector.
  
  By default, the range selector mode is `default`.
- **`readOnly?`**: `boolean`
  Specifies that the component is read-only, preventing the user from
  modifying the value. A read-only component can receive focus.
- **`relativeOptions`**: `ReadonlyArray<DateRangePickerProps.RelativeOption>`
  A list of relative time ranges that are shown as suggestions.
- **`renderRelativeRangeContent?`**: `DateRangePickerProps.RelativeRangeControl`
  Specifies custom content to fully override the relative range tab.
  When provided, all default relative range functionality is replaced.
- **`renderTriggerContent?`**: `DateRangePickerProps.RenderTriggerContent`
  Specifies custom content to fully override the trigger content.
  When provided, the default content of the trigger is replaced.
- **`showClearButton?`**: `boolean`
  Specifies whether the component should show a button that
  allows the user to clear the selected value.
- **`startOfWeek?`**: `number`
  Starting day of the week. [0-6] maps to [Sunday-Saturday].
  By default the starting day of the week is defined by the locale,
  but you can override it using this property.
- **`timeInputFormat?`**: `DateRangePickerProps.TimeInputFormat`
  Specifies the format of the time input for absolute ranges.
  
  Use to restrict the granularity of time that the user can enter.
  
  Has no effect when `dateOnly` is true or `granularity` is set to 'month'.
- **`timeOffset?`**: `number` _(@deprecated Use `getTimeOffset` instead.)_
  The time offset from UTC in minutes that should be used to
  display and produce values.
  
  Has no effect when `dateOnly` is true.
  
  Default: the user's current time offset as provided by the browser.
- **`value`**: `null | DateRangePickerProps.Value`
  The current date range value. Can be either an absolute time range
  or a relative time range.
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
  Fired when keyboard focus is removed from the UI control.
- **`onChange?`**: `NonCancelableEventHandler<DateRangePickerProps.ChangeDetail>`
  Fired whenever a user changes the component's value.
  The event `detail` contains the current value of the field.
- **`onFocus?`**: `NonCancelableEventHandler<null>`
  Fired when keyboard focus is set onto the UI control.

## Types

Supporting types from `DateRangePickerProps` (verbatim):

```ts
export declare namespace DateRangePickerProps {
  type Value = AbsoluteValue | RelativeValue;
  interface AbsoluteValue {
    /**
     * In ISO8601 format, e.g.: 2021-04-06T17:23:50+02:00 (or 2021-04-06 when `dateOnly` is true)
     */
    startDate: string;
    /**
     * In ISO8601 format, e.g.: 2021-04-06T17:23:50+02:00 (or 2021-04-06 when `dateOnly` is true)
     */
    endDate: string;
    type: 'absolute';
  }
  interface RelativeValue {
    /**
     * If provided, used to match this value
     * to a provided relative option.
     */
    key?: string;
    amount: number;
    unit: TimeUnit;
    type: 'relative';
  }
  interface RelativeOption {
    /**
     * Used to uniquely identify this relative option.
     */
    key: string;
    amount: number;
    unit: TimeUnit;
    type: 'relative';
  }
  type TimeUnit = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
  type ValidationFunction = (value: Value | null) => ValidationResult;
  type ValidationResult = ValidRangeResult | InvalidRangeResult;
  interface ValidRangeResult {
    valid: true;
  }
  interface InvalidRangeResult {
    valid: false;
    errorMessage: string;
  }
  interface ChangeDetail {
    /**
     * The newly selected range of this date range picker.
     */
    value: null | Value;
  }
  interface IsDateEnabledFunction {
    (date: Date): boolean;
  }
  interface DateDisabledReasonFunction {
    (date: Date): string;
  }
  interface GetTimeOffsetFunction {
    (date: Date): number;
  }
  interface DateTimeStrings {
    date: string;
    time: string;
  }
  interface PendingAbsoluteValue {
    start: DateTimeStrings;
    end: DateTimeStrings;
  }
  type AbsoluteRangeControl = (selectedRange: PendingAbsoluteValue, setSelectedRange: React.Dispatch<React.SetStateAction<PendingAbsoluteValue>>) => React.ReactNode;
  type RelativeRangeControl = (selectedRange: RelativeValue | null, setSelectedRange: (value: RelativeValue) => void) => React.ReactNode;
  type RenderTriggerContent = (props: {
    formattedDate: JSX.Element;
  }) => React.ReactNode;
  type RangeSelectorMode = 'default' | 'absolute-only' | 'relative-only';
  interface Ref {
    /**
     * Sets the browser focus on the UI control
     */
    focus(): void;
  }
  interface I18nStrings {
    /**
     * Adds `aria-label` to the trigger and dropdown.
     * @deprecated Use `ariaLabel` on the component instead.
     */
    ariaLabel?: string;
    /**
     * Adds `aria-labelledby` to the trigger and dropdown.
     * @deprecated Use `ariaLabelledby` on the component instead.
     */
    ariaLabelledby?: string;
    /**
     * Adds `aria-describedby` to the trigger and dropdown.
     * @deprecated Use `ariaDescribedby` on the component instead.
     */
    ariaDescribedby?: string;
    /**
     * Label of the mode selection group. In the standard view, it adds 'aria-label' to the group of segments.
     * In a narrow container the label is visible and attached to the select component.
     * @i18n
     */
    modeSelectionLabel?: string;
    /**
     * Segment title of the relative range selection mode
     * @i18n
     */
    relativeModeTitle?: string;
    /**
     * Segment title of the absolute range selection mode
     * @i18n
     */
    absoluteModeTitle?: string;
    /**
     * Heading for the relative range selection area
     * @i18n
     */
    relativeRangeSelectionHeading?: string;
    /**
     * Description for the relative range selection area
     * @i18n
     */
    relativeRangeSelectionMonthlyDescription?: string;
    /**
     * Visible label of the Cancel button
     * @i18n
     */
    cancelButtonLabel?: string;
    /**
     * Visible label of the Clear and dismiss button
     * @i18n
     */
    clearButtonLabel?: string;
    /**
     * Visible label of the Apply button
     * @i18n
     */
    applyButtonLabel?: string;
    /**
     * Formatting function for relative ranges.
     * This function must convert a relative range to a human-readable string.
     * @i18n
     */
    formatRelativeRange?: (value: RelativeValue) => string;
    /**
     * Formatting function for time units.
     *
     * This function must return a localized form of the unit that fits the provided time value.
     * @i18n
     */
    formatUnit?: (unit: TimeUnit, value: number) => string;
    /**
     * Visible label for the option for selecting
     * a custom relative range.
     * @i18n
     */
    customRelativeRangeOptionLabel?: string;
    /**
     * Visible description for the option for selecting
     * a custom relative range.
     * @i18n
     */
    customRelativeRangeOptionDescription?: string;
    /**
     * Visible label for the duration selector for
     * the custom relative range.
     * @i18n
     */
    customRelativeRangeDurationLabel?: string;
    /**
     * Placeholder for the duration selector for
     * the custom relative range.
     * @i18n
     */
    customRelativeRangeDurationPlaceholder?: string;
    /**
     * Visible label for the unit selector for the
     * custom relative range.
     * @i18n
     */
    customRelativeRangeUnitLabel?: string;
    /**
     * Visible label for the Start Month input for the
     * absolute range.
     * @i18n
     */
    startMonthLabel?: string;
    /**
     * Visible label for the Start Date input for the
     * absolute range.
     * @i18n
     */
    startDateLabel?: string;
    /**
     * Visible label for the Start Time input for the
     * absolute range.
     * @i18n
     */
    startTimeLabel?: string;
    /**
     * Visible label for the End Month input for the
     * absolute range.
     * @i18n
     */
    endMonthLabel?: string;
    /**
     * Visible label for the End Date input for the
     * absolute range.
     * @i18n
     */
    endDateLabel?: string;
    /**
     * Visible label for the End Time input for the absolute range.
     * This serves as a fallback if no format specific date constraint test is provided
     *
     * @i18n
     */
    endTimeLabel?: string;
    /**
     * Constraint text for the date input field for the
     * absolute range with no time option.
     * @i18n
     */
    dateConstraintText?: string;
    /**
     * Constraint text for the input fields for the absolute range in 'slashed' format with no time option.
     * @i18n
     */
    slashedDateConstraintText?: string;
    /**
     * Constraint text for the input fields for the absolute range in 'iso' format with no time option.
     * @i18n
     */
    isoDateConstraintText?: string;
    /**
     * Constraint text for the input fields for the absolute range.
     * This serves as a fallback if no format specific datetime constraint test is provided
     *
     * @i18n
     */
    dateTimeConstraintText?: string;
    /**
     * Constraint text for the date input fields for the absolute range in 'slashed' format.
     * @i18n
     */
    slashedDateTimeConstraintText?: string;
    /**
     * Constraint text for the date input fields for the absolute range in 'iso' format with.
     * @i18n
     */
    isoDateTimeConstraintText?: string;
    /**
     * Constraint text for the month input fields for the absolute range.
     * This serves as a fallback if no format specific month constraint test is provided.
     *
     * @i18n
     */
    monthConstraintText?: string;
    /**
     * Constraint text for the month input fields for the absolute range in 'slashed' format.
     * @i18n
     */
    slashedMonthConstraintText?: string;
    /**
     * Constraint text for the month input fields for the absolute range in 'iso' format.
     * @i18n
     */
    isoMonthConstraintText?: string;
    /**
     * Provides a text alternative for the error icon in the error alert.
     * @i18n
     */
    errorIconAriaLabel?: string;
    /**
     * When the property is set, screen readers announce the selected range when the absolute range gets selected.
     */
    renderSelectedAbsoluteRangeAriaLive?: (startDate: string, endDate: string) => string;
    /**
     * Used as part of the `aria-label` for today's date in the calendar.
     * @i18n
     */
    todayAriaLabel?: string;
    /**
     * Specifies an `aria-label` for the 'next month' button.
     * @i18n
     */
    nextMonthAriaLabel?: string;
    /**
     * Specifies an `aria-label` for the 'previous month' button.
     * @i18n
     */
    previousMonthAriaLabel?: string;
    /**
     * Used as part of the `aria-label` for the current month in the calendar.
     * @i18n
     */
    currentMonthAriaLabel?: string;
    /**
     * Specifies an `aria-label` for the 'next year' button.
     * @i18n
     */
    nextYearAriaLabel?: string;
    /**
     * Specifies an `aria-label` for the 'previous year' button.
     * @i18n
     */
    previousYearAriaLabel?: string;
    /**
     * Placeholder text for date inputs in absolute mode with 'iso' format (dashes).
     * Should match the expected date format (for example "YYYY-MM-DD", "JJJJ-MM-TT" for German).
     * Used for both start and end date inputs.
     * @i18n
     */
    isoDatePlaceholder?: string;
    /**
     * Placeholder text for date inputs in absolute mode with 'slashed' format (slashes).
     * Should match the expected date format (for example "YYYY/MM/DD", "JJJJ/MM/TT" for German).
     * Used for both start and end date inputs.
     * @i18n
     */
    slashedDatePlaceholder?: string;
    /**
     * Placeholder text for time inputs in absolute mode.
     * Should match the expected time format (for example "hh:mm:ss", "HH:MM:SS").
     * Used for both start and end time inputs.
     * @i18n
     */
    timePlaceholder?: string;
  }
  type AbsoluteFormat = DateFormat;
  type DateInputFormat = EditableDateFormat | undefined;
  type TimeInputFormat = TimeInputProps.Format;
  type StartPeriod = 'previous' | 'current' | 'auto';
}
```
