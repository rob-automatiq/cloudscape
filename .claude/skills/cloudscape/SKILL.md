---
name: cloudscape
description: Expert guidance for designing and building UI with the Cloudscape Design System (AWS's React design system, @cloudscape-design/components), bundled with the full cloudscape.design docs. Includes every component's usage, writing and accessibility guidelines, named playground examples, and exact API, plus all UX patterns (create, edit, delete, tables, validation, empty states, navigation, dashboards, generative-AI chat) and the visual foundation. Use it whenever the user mentions Cloudscape, names a Cloudscape component (DatePicker, Table, FormField, AppLayout, Header, Modal, Wizard, Flashbar…), builds or reviews UI in a project using @cloudscape-design/*, or asks how to design a page, form, or flow the Cloudscape way, for example "use a date picker, disable weekends with the reason 'You can only select a weekday.'", "add a table with filtering", or "should this be a modal or a page?" Use it even when the user only describes the behavior, and give design feedback when there's a better Cloudscape way.
---

# Cloudscape design system

This skill makes you a Cloudscape expert in two ways. You build what the user asks the way the cloudscape.design documentation does it. You also tell them when the guidelines point to a better way to reach their goal.

## What's in `references/`

| Path | What it holds | Read it when |
|---|---|---|
| `catalog.md` | Every component grouped by purpose, with a "use it for" line | The request describes behavior instead of naming a component |
| `components/<folder>/guidelines.md` | The component's documentation page: when to use, dos and don'ts, features, states, writing and accessibility guidelines, unit/integration testing APIs | Always, for each component you use or review |
| `components/<folder>/examples.md` | The page's named playground examples (for example `with-disabled-reason-for-weekends`), as props plus the shared setup and wrapper | You're building the component. Start from the closest example. |
| `components/<folder>/api.md` | Exact props, events, and types for the installed package version, from its type definitions. Components in other packages have the site's `api.json` instead. | Before writing any prop |
| `patterns/…` | UX patterns: `resource-management/` (create, view, details, edit, delete) and `general/` (actions, validation, error messages, empty states, loading, selection, filtering, navigation, help system, unsaved changes, timestamps, dashboards, onboarding, feedback) | The request is a page, form, flow, or collection, not a single control |
| `gen-ai/…` | Generative-AI patterns (chat, loading states, output labels, follow-up questions, prompts, artifacts previews, agent management) and their foundation | Anything involving AI or chat UI |
| `foundation/…` | Visual foundation (layout, spacing, typography, colors, content density, design tokens, theming, motion, iconography, visual modes and contexts) and core principles (accessibility, responsive, bidirectionality) | Layout, styling, theming, density, or accessibility questions |
| `get-started/…` | Developer guides: imports, global styles, state management, i18n, collection hooks, testing, CSP, z-index, responsive, charts migration | Setup, testing, or integration questions |
| `snippets/index.md` + `snippets/<name>.txt` | 192 coded pattern implementations (validation, empty states, refreshing tables, unsaved-changes modal, tagging, collection hooks…) | A snippet matches what you're building, so reuse it |
| `index.md` | The site's full documentation index, with local links | You can't find the right file |

Links inside these files are rewritten to point at the local copies, so follow them.

## How to work

1. **Find the level of the request.** Is it a page or flow ("a create form", "a resources list", "a details page", "a chat assistant"), or a single control?
   - For a page or flow, read the matching pattern first. It decides structure, component choice, and behavior before any component detail. For example, `patterns/resource-management/create.md` has the criteria table for modal vs single-page vs wizard.
2. **Pick the components.** Use the names the user gives, or `catalog.md`.
3. **Read each component's three files:**
   - `guidelines.md` for how it should be used.
   - `examples.md` for the closest named example. If the user refers to a playground example, use it exactly.
   - `api.md` for exact prop names and types. Cloudscape's names are specific (`disabledReason`, `dateDisabledReason`, `constraintText`, `errorText`, `invalid`, `expandToViewport`, `i18nStrings`). Types like `CalendarProps.X` are defined in that component's own `api.md`.
4. **Check `snippets/index.md`** for an implementation of the pattern. Snippets import from the package root (`import { Button } from '@cloudscape-design/components'`). Convert those to per-component imports when you reuse them.
5. **Build it** following the conventions below.
6. **Review your result, and anything the user asked for, against the guidelines** using the checklist below. Then give feedback as described in "Giving feedback".
7. **Verify** with the project's typecheck or build. If you can, look at it in a browser.

## Giving feedback

The user wants to use Cloudscape well, so share what the guidelines say. Keep it short and specific:

- **If the request already follows the guidelines,** just build it. Don't add feedback for the sake of it.
- **If there's a better Cloudscape way that doesn't change what the user explicitly specified,** do it the better way and say so in one line. For example: "Added a disabled reason to the Launch button so users know why it's unavailable."
- **If the request conflicts with a guideline,** build what they asked and then recommend the alternative. Say what to change, why (quote or paraphrase the guideline), and where it comes from (file path). Offer to switch. Examples: a second primary button, a toggle for a setting applied on submit, a modal holding a long form, a submit button disabled until valid in a complex form. Don't override an explicit choice silently.
- **If the conflict would harm accessibility or cause data loss,** say so before or while building. Examples: no label, an icon button without `ariaLabel`, deleting critical resources with no confirmation.
- Put feedback at the end under a short "Design notes" list, at most about three bullets and most important first. Ground every point in the references. If the documentation doesn't cover something, say that instead of inventing a guideline.

## Review checklist

The most common issues, each with the file that covers it. Read the file when a point applies.

**Structure and layout**
- One app layout type per product. Choose toolbar vs standard app layout by interactivity and density (`foundation/visual-foundation/layout.md`).
- Page header `h1`, container headers `h2`, subsections `h3`. Collection headers get a `counter` with the total, like "(12)", which also shows the selection while items are selected, like "(2/12)" (`components/header/guidelines.md`).
- Create flow by size: modal for a single field; single-page `Form` for 2 to 15 fields or up to 5 groups; `Wizard` for more (`patterns/resource-management/create.md`).
- Use modals mainly to confirm or cancel a choice. Keep them short, with no tabs, expandable sections, or scrolling (`components/modal/guidelines.md`).

**Actions**
- Only one primary button per page (`components/button/guidelines.md`).
- Actions on one or many selected items (including bulk actions) go in the page or collection header. Frequent single-item actions can also appear in context, such as per row (`patterns/general/actions.md`).
- Delete friction matches severity: one-click delete, simple confirmation, or additional typed confirmation (`patterns/resource-management/delete.md`).
- Leaving with unsaved changes shows a confirmation modal, but only when something actually changed (`patterns/general/unsaved-changes.md`).

**Forms and selection**
- Every control is in a `FormField` with a real label. A placeholder is an example value, not a label or instructions. Rules and formats go in `constraintText` (`components/form-field/guidelines.md`, `components/input/guidelines.md`).
- Selection control:
  - toggle: takes effect immediately
  - checkbox: applied on submit
  - radio group: 2 to 7 options
  - select: 8 or more options
  - tiles: options that need metadata
  - multiselect or autosuggest: as the options require

  See `patterns/general/selection.md` and each component's guidelines.
- Validation:
  - Validate after the user leaves a field, not while they first type.
  - Show errors under the field (`errorText` + `invalid`), and put server errors that aren't tied to a field in `Form` `errorText`.
  - Scroll to and focus the top-most error.
  - Keep submit enabled in medium or complex forms.

  See `patterns/general/errors/validation.md`.
- Disabled vs read-only: use read-only for data users may view but not change. Give disabled controls a `disabledReason` where supported: buttons, button dropdown items, select/multiselect options, tabs, segmented control items, and calendar dates (`patterns/general/disabled-and-read-only-states.md`).

**Collections and data**
- Tables and cards: separate empty states (nothing created, so offer the create action) from no-match states (filters hide everything, so offer to clear filters) (`patterns/general/empty-states.md`).
- Use `@cloudscape-design/collection-hooks` for client-side filtering, sorting, and pagination (`get-started/dev-guides/collection-hooks.md`, `snippets/collection-hooks-*.txt`). For large data sets, do these on the server.
- While refreshing, keep existing data visible. With a manual refresh button in the header, show a last-updated timestamp and announce it with a live region (`patterns/general/loading-and-refreshing.md`).
- Timestamps always have a label. Relative timestamps suit most cases (`patterns/general/timestamps.md`).

**Messages and writing** (the "Writing guidelines" section of every component page)
- Sentence case. End punctuation everywhere except headers and buttons. No exclamation points.
- Present tense, active voice. Don't use "please", "thank you", ellipses, "&", "e.g.", "i.e.", or "etc.".
- Device-independent verbs ("choose", "select", not "click"). No directional words ("previous", not "above").
- Error messages say what happened and how to fix it. Never show a raw system error as the main message (`patterns/general/errors/error-messages.md`). Use `FormField` for field errors, `Alert` for page or section messages, and `Flashbar` for page-level status.

**Accessibility**
- Icon-only buttons need `ariaLabel`. Images need alt text. Follow each component's "Accessibility guidelines" section and `foundation/core-principles/accessibility/`.

## Code conventions

- **Setup.** Install `@cloudscape-design/components` and `@cloudscape-design/global-styles`, and import `@cloudscape-design/global-styles/index.css` once. Import each component from its own path (`import Button from '@cloudscape-design/components/button'`), which the docs recommend over root imports to keep bundles small (`get-started/for-developers/using-cloudscape-components.md`).
- **Built-in strings (`@i18n`).** Props tagged `@i18n` in `api.md` have no default on their own. Without a provider they're missing, which mostly hurts screen-reader users. Wrap the app once:

  ```tsx
  import I18nProvider from '@cloudscape-design/components/i18n'
  import messages from '@cloudscape-design/components/i18n/messages/all.en'

  <I18nProvider locale="en" messages={[messages]}>{/* app */}</I18nProvider>
  ```

  Props you pass always override the provider (`get-started/for-developers/internationalization.md`). If the project has no provider, either pass the `@i18n` props the component needs or recommend adding it.
- **State.** Cloudscape components are controlled: pass `value`, `checked`, or `selectedOption(s)` from state and update it in `onChange`. A few are *controllable* (for example `Tabs`, `activeTabId`): they manage themselves until you pass the value (`get-started/dev-guides/state-management.md`).
- **Events are `CustomEvent`s.** Destructure `({ detail })`. `Cancelable` handlers can call `event.preventDefault()`. For in-app navigation, keep `href` and, in `onFollow`, call `event.preventDefault()` and then your router's `navigate(href)` (Link, SideNavigation, BreadcrumbGroup, TopNavigation utilities, ButtonDropdown).
- **Layout and spacing.** Use `SpaceBetween`, `ColumnLayout`, `Grid`, `Box`, and component slots (`header`, `footer`, `actions`) instead of custom CSS. For "next to" or "beside", use `<SpaceBetween direction="horizontal" size="xs">`, with `alignItems="end"` to line a button up with a labeled field. Custom CSS should use design tokens (`foundation/visual-foundation/design-tokens.md`). Styling component internals through `className` isn't supported.
- **Scope of an example.** For a single-control request, a `FormField` wrapper is enough. Add a `Container` + `Header` for page sections. When adding to an existing app, put it where the user says, or ask.

## Worked example

Request: *"Use a Date picker, disable weekends with the reason 'You can only select a weekday.'"*

`components/date-picker/examples.md` has this exact playground example (`with-disabled-reason-for-weekends`): `isDateEnabled` rejects Saturday and Sunday, and `dateDisabledReason` returns the message for those days. Its base setup supplies `value`/`onChange` state, `openCalendarAriaLabel`, and a `FormField` wrapper. `api.md` confirms the types, and `guidelines.md` adds that disabled dates should reinforce real constraints, which you should also validate.

```tsx
import { useState } from 'react'
import DatePicker from '@cloudscape-design/components/date-picker'
import FormField from '@cloudscape-design/components/form-field'

const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6

export default function WeekdayDatePicker() {
  const [value, setValue] = useState('')
  return (
    <FormField label="Certificate expiry" constraintText="Use YYYY/MM/DD format.">
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

Design notes worth giving here: users can still type a weekend date, so validate the value and show `errorText` on the `FormField` (`components/date-picker/guidelines.md`, `patterns/general/errors/validation.md`). The label should name the specific date, such as "Certificate expiry date", not just "Date".

## Keeping it current

- `api.md` files match `@cloudscape-design/components@3.0.1382`. After an upgrade, run `node <skill>/scripts/generate-references.mjs` from the project root, or read `node_modules/@cloudscape-design/components/<folder>/interfaces.d.ts` directly.
- Guidelines, patterns, foundation, and snippets are a snapshot of cloudscape.design. Refresh them with `node <skill>/scripts/fetch-docs.mjs`; behind an HTTPS proxy on Node 22, prefix `NODE_USE_ENV_PROXY=1`. The live pages are at `https://cloudscape.design/<path>/index.html.md`.
- The playground examples are a one-time snapshot extracted from the site's page code. There's no refresh script, because that code isn't a published format. If an example seems outdated, check the live playground.
- The site's pages are labeled as intended for AI tools, and this skill bundles them unchanged apart from links. The content belongs to the Cloudscape Design System.
