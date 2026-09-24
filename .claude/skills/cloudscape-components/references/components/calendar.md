# Calendar

```ts
import Calendar from '@cloudscape-design/components/calendar'
import type { CalendarProps } from '@cloudscape-design/components/calendar'
```

Generated from `@cloudscape-design/components@3.0.1382` `calendar/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the calendar.
- **`ariaLabel?`**: `string`
  Adds an `aria-label` to the calendar.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the calendar.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`dateDisabledReason?`**: `CalendarProps.DateDisabledReasonFunction`
  Provides a reason why a particular date in the calendar is not enabled (only when `isDateEnabled` returns `false`).
  If provided, the date becomes focusable.
- **`granularity?`**: `CalendarProps.Granularity`
  Specifies the granularity at which users will be able to select a date.
  Defaults to `day`.
- **`i18nStrings?`**: `CalendarProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by
  the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`isDateEnabled?`**: `CalendarProps.IsDateEnabledFunction`
  Defines whether a particular date is enabled in the calendar or not.
  If you disable a date in the calendar, users can still enter this date using a keyboard.
  We recommend that you also validate these constraints on the client-side and server-side
  as you would for other form elements.
- **`locale?`**: `string`
  Specifies the locale to use to render month names and determine the starting day of the week.
  If you don't provide this, the locale is determined by the page and browser locales.
  Supported values and formats are listed in the
  [JavaScript Intl API specification](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
- **`nextMonthAriaLabel?`**: `string` _(@deprecated Use `i18nStrings.nextMonthAriaLabel` instead.)_
  Specifies an `aria-label` for the 'next month' button.
- **`previousMonthAriaLabel?`**: `string` _(@deprecated Use `i18nStrings.previousMonthAriaLabel` instead.)_
  Specifies an `aria-label` for the 'previous month' button.
- **`startOfWeek?`**: `number`
  Determines the starting day of the week. The values 0-6 map to Sunday-Saturday.
  By default the starting day of the week is defined by the locale, but you can use this property to override it.
- **`todayAriaLabel?`**: `string` _(@deprecated Use `i18nString.todayAriaLabel` instead.)_
  Used as part of the `aria-label` for today's date in the calendar.
- **`value`**: `string`
  The current input value, in YYYY-MM-DD format.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<CalendarProps.ChangeDetail>`
  Called whenever a user changes the input value (by typing, pasting, or selecting a value).
  The event `detail` contains the current value of the field.

## Types

Supporting types from `CalendarProps` (verbatim):

```ts
export declare namespace CalendarProps {
  interface ChangeDetail {
    /**
     * The new value of this component.
     */
    value: string;
  }
  interface IsDateEnabledFunction {
    (date: Date): boolean;
  }
  interface DateDisabledReasonFunction {
    (date: Date): string;
  }
  type Granularity = DateGranularity;
  interface I18nStrings {
    /**
     * Used as part of the `aria-label` for today's date in the calendar.
     */
    todayAriaLabel?: string;
    /**
     * Specifies an `aria-label` for the 'next month' button.
     */
    nextMonthAriaLabel?: string;
    /**
     * Specifies an `aria-label` for the 'previous month' button.
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
  }
}
```
