# Calendar

> Source: https://cloudscape.design/components/calendar/ (fetched 2026-09-24)

With the calendar component, users can select dates.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/calendar)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/calendar/index.html.json)

## Development guidelines

#### State management

The calendar component is controlled. Set the `value` property and the `onChange` listener to store its value in the state of your application. Learn more about the [state management](../../get-started/dev-guides/state-management.md) of Cloudscape components.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

CalendarWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDateAt | [CalendarDateWrapper](https://cloudscape.design/) | Returns a date container on the calendar. | row:1-based row index of the day or month.column:1-based column index of the day or month. |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findNextButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findNextMonthButton | [ButtonWrapper](../button/guidelines.md) | Alias for findNextButton for compatibility with previous versions | - |
| findPreviousButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findPreviousMonthButton | [ButtonWrapper](../button/guidelines.md) | Alias for findPreviousButton for compatibility with previous versions | - |
| findSelectedDate | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - | CalendarDateWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDisabledReason | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
## Integration testing APIs

CalendarWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDateAt | [CalendarDateWrapper](https://cloudscape.design/) | Returns a date container on the calendar. | row:1-based row index of the day or month.column:1-based column index of the day or month. |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findNextButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findNextMonthButton | [ButtonWrapper](../button/guidelines.md) | Alias for findNextButton for compatibility with previous versions | - |
| findPreviousButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findPreviousMonthButton | [ButtonWrapper](../button/guidelines.md) | Alias for findPreviousButton for compatibility with previous versions | - |
| findSelectedDate | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - | CalendarDateWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDisabledReason | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
## General guidelines

### Do

- Only use the calendar when the [date picker](../date-picker/guidelines.md)   cannot be used.
- Only use the calendar in combination with a [date input](../date-input/guidelines.md)  .
- Follow the guidelines for [disabled and read-only states](../../patterns/general/disabled-and-read-only-states.md)  .

## Features

- #### Embeddable calendar

  The embeddable calendar component is a visual grid that allows users to choose a date using a mouse or keyboard.  

  Each date in the grid can have any of the following states:  

  - Selected: The day or month that has been chosen by the user or provided as a default.
  - Disabled: Days or months that cannot be selected by the user.
  - Disabled with reason - You can use a tooltip with disabled days or months to explain why they are unavailable.
  - Current: The current day or month. This is set by the calendar component.
  - Inactive: Trailing days of the next or previous month. These dates are set by the date picker component and can be selected by the user.
- #### Granularity

**Day picker**  

  Used to select a day within a calendar year by choosing a day from the calendar grid.  

**Month picker**  

  Used to select a month within a calendar year by choosing a month from the calendar grid.
- #### Selected date

  The selected day or month is the currently selected date value. It can be chosen by the user, or you can provide a value as a default. This date appears in the calendar in the selected state.
- #### Disabled date - optional

  An disabled date is any dates that cannot be selected by the user. Disabled dates appear in the calendar in the disabled state.  

  Use disabled dates to reinforce constraints for dates that will not be accepted. For example, if an acceptable date can only be in the future, you could make days or months prior to the current date disabled.
- #### Start of the week - optional

  Start of the week determines which day denotes the first day of a week. This value is automatically determined from the locale, so in most cases you don't need to supply it.
- #### Locale - optional

  The locale determines the language used in the calendar, for example month and day-of-week names.  

  The calendar automatically determines the locale from the page and browser, so in most cases you should not need to supply it.

## Writing guidelines

### General writing guidelines

- Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.
- Use end punctuation, except in [headers](../header/guidelines.md)   and [buttons](../button/guidelines.md)   . Don't use exclamation points.
- Use present-tense verbs and active voice.
- Don't use *please*   , *thank you*   , ellipsis ( *...*   ), ampersand ( *&*   ), *e.g.*   , *i.e.*   , or *etc.*   in writing.
- Avoid directional language.  

  - For example: use *previous*     not *above*     , use *following*     not *below*    .
- Use device-independent language.  

  - For example: use *choose*     or *select*     not *click*    .

#### Disabled reasons

- Follow the guidelines for [short in-context disabled reasons](../../patterns/general/disabled-and-read-only-states.md)  .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
