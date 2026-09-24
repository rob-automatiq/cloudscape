---
name: cloudscape-components
description: Build UI with the Cloudscape Design System (@cloudscape-design/components, AWS's React design system). Turns plain-English component requests into correct, idiomatic Cloudscape code using a per-component API reference, e.g. "use a date picker, disable weekends with the reason 'You can only select a weekday.'", "add a table with sorting and pagination", "make a wizard", "put a flashbar at the top", "a select with a disabled option". Use this skill whenever the user mentions Cloudscape, cloudscape.design, or a Cloudscape component by name (DatePicker, Table, FormField, AppLayout, Header, Container, SpaceBetween, Modal, Wizard, Flashbar, …), or asks for UI in a project that depends on @cloudscape-design/components, even if they only describe the behavior they want.
---

# Cloudscape components

This skill turns requests like *"use a Date picker, disable weekends with the reason 'You can only select a weekday.'"* into the code you'd find in the matching cloudscape.design playground example.

What's bundled:

- `references/catalog.md`: every public component, grouped by purpose, with a one-line "use it for". Read it when the request describes behavior instead of naming a component.
- `references/components/<folder>.md`: the full API for each component: every prop (including inherited ones) with its type and the library's own description, every event with its `detail` type, and the supporting types. This is the same JSDoc the "API" tab on cloudscape.design is generated from. Read the file for each component you use before writing code.
- `scripts/generate-references.mjs`: regenerates those references from the installed package version.

## Steps

1. **Pick the component(s).** Use the name the user gives. If they describe behavior ("let people pick a few regions"), choose from `references/catalog.md` (here, `multiselect`).
2. **Read its reference**, `references/components/<folder>.md`. Map each part of the request to props. Don't guess prop names from other libraries, because Cloudscape's names are specific (`disabledReason`, `dateDisabledReason`, `constraintText`, `errorText`, `invalid`, `expandToViewport`, `i18nStrings`). A type written as `CalendarProps.X` or `ButtonDropdownProps.Item` is defined in that component's own reference file (`calendar.md`, `button-dropdown.md`).
3. **Write the smallest complete example**: controlled state, the handler, and the usual wrapper. Form controls go in a `FormField`. Add a `Container` with a `Header` only when building a page section, or when the user asks for one; a request for a single control doesn't need it. Match what the playground examples on cloudscape.design look like, not a stripped-down or over-engineered version. When the user is adding the component to an existing app, put it where they say, or ask.
4. **Verify** with the project's typecheck or build. If the project is running, look at it in the browser.

If the installed version is much newer than the one noted at the top of a reference file, or a prop you expect is missing, regenerate the references (`node <skill>/scripts/generate-references.mjs` from the project root). Or read `node_modules/@cloudscape-design/components/<folder>/interfaces.d.ts` directly, since that's the source of truth.

## Worked example

Request: *"Use a Date picker, disable weekends with the reason 'You can only select a weekday.'"*

From `date-picker.md`: `isDateEnabled(date) => boolean` greys out dates in the calendar. `dateDisabledReason(date) => string` explains why, and it also makes the disabled dates focusable so the reason is announced to screen readers. It's shown only when `isDateEnabled` returns `false`. `value` is a `YYYY-MM-DD` string, and `onChange` gives `detail.value`.

```tsx
import { useState } from 'react'
import DatePicker from '@cloudscape-design/components/date-picker'
import FormField from '@cloudscape-design/components/form-field'

const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6

export default function WeekdayDatePicker() {
  const [value, setValue] = useState('')
  return (
    <FormField label="Certificate expiry date" constraintText="Use YYYY/MM/DD format.">
      <DatePicker
        value={value}
        onChange={({ detail }) => setValue(detail.value)}
        isDateEnabled={date => !isWeekend(date)}
        dateDisabledReason={date => (isWeekend(date) ? 'You can only select a weekday.' : '')}
        placeholder="YYYY/MM/DD"
        openCalendarAriaLabel={selectedDate =>
          'Choose certificate expiry date' + (selectedDate ? `, selected date is ${selectedDate}` : '')
        }
      />
    </FormField>
  )
}
```

The reference also notes that users can still type a disabled date with the keyboard. If the date matters, validate it too, for example by showing `errorText` on the `FormField` when `value` falls on a weekend.

## Conventions that apply to every component

- **Setup.** Install `@cloudscape-design/components` and `@cloudscape-design/global-styles`, and import `@cloudscape-design/global-styles/index.css` once at the app entry. Import each component from its own path (`@cloudscape-design/components/date-picker`), not the package root, so bundles stay small.
- **Built-in strings (`@i18n`).** Props tagged `@i18n` in the references (screen-reader labels, "Selected", "Open calendar", pagination labels, and so on) have no default on their own. Without a provider they're simply missing. Wrap the app once so they all get English text:

  ```tsx
  import I18nProvider from '@cloudscape-design/components/i18n'
  import messages from '@cloudscape-design/components/i18n/messages/all.en'

  <I18nProvider locale="en" messages={[messages]}>{/* app */}</I18nProvider>
  ```

  If the project has no provider, pass the `@i18n` props that matter for the component you're adding (for example `selectedAriaLabel` on `Select`), or add the provider and tell the user. Props you pass always override the provider.
- **Controlled components.** Inputs take `value`, `checked`, or `selectedOption(s)` from your state, and update it in `onChange`. They don't hold their own state, so without the handler the control won't change.
- **Events are `CustomEvent`s.** Destructure `({ detail })`. Handlers typed `CancelableEventHandler` can call `event.preventDefault()`. This is how you stop a link-style `href` from doing a full page load and route with your router instead (`onFollow` on Link, SideNavigation, BreadcrumbGroup, TopNavigation utilities, ButtonDropdown).
- **Forms.** Wrap each control in `FormField` (`label`, `description`, `constraintText`, `errorText`, `warningText`, `info`). Set `invalid` on the control when showing `errorText`. Space fields with `<SpaceBetween size="l">`. Use `Form` with `actions` holding `<SpaceBetween direction="horizontal" size="xs">` Cancel (`variant="link"`) and Submit (`variant="primary"`).
- **Disabled with a reason.** Many controls pair `disabled` with `disabledReason`: `Button`, `ButtonDropdown` items, `Select`/`Multiselect` options, `Tabs`, `SegmentedControl`. The reason is shown in a tooltip and keeps the control focusable, which is better for accessibility than a bare `disabled`.
- **Layout and spacing.** Use `SpaceBetween`, `ColumnLayout`, `Grid`, `Box`, and component slots (`header`, `footer`, `actions`) instead of custom CSS and margins. For "next to" or "beside", use `<SpaceBetween direction="horizontal" size="xs">`, and add `alignItems="end"` to line a button up with a labeled field. Use `FormField`'s `secondaryControl` only when the extra control belongs to that field, such as a "Refresh" button for a select. Cloudscape doesn't support `className` styling of internals, so use design tokens (`@cloudscape-design/design-tokens`) if you need custom CSS that matches the system.
- **Headings.** Pages use `ContentLayout` with `header={<Header variant="h1">}`. Sections use `Container` with `header={<Header variant="h2" description=… actions=…>}`. Collections use `Header` with a `counter` like `"(12)"`.
- **Accessibility strings.** Always give icon-only buttons an `ariaLabel`. For other labels, see "Built-in strings" above: the provider covers props tagged `@i18n`. Anything not tagged `@i18n` that the reference calls required (for example `ariaLabel` on some controls) has to be passed.
- **Collections.** For filtering, sorting, pagination, and selection on `Table`/`Cards`, use `@cloudscape-design/collection-hooks` (`useCollection`) instead of hand-rolling it. Give `Table` an `empty` state, `loading` + `loadingText`, and `trackBy`.
- **Routing.** For in-app links, keep `href` (so middle-click and "open in new tab" work) and handle `onFollow` with `event.preventDefault()` + your router's `navigate(href)`.

## Scope and limits

The API references come from the installed package, so they're exact for that version. The design and usage guidelines ("when to use", dos and don'ts, writing guidelines) and the named playground examples are only on cloudscape.design, which isn't bundled here. The conventions above cover the common guidance. If the user needs a specific guideline, say it comes from the website, and if the site isn't reachable, say so instead of inventing one.
