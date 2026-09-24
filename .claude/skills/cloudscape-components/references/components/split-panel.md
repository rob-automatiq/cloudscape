# SplitPanel

```ts
import SplitPanel from '@cloudscape-design/components/split-panel'
import type { SplitPanelProps } from '@cloudscape-design/components/split-panel'
```

Generated from `@cloudscape-design/components@3.0.1382` `split-panel/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaLabel?`**: `string`
  ARIA label for the panel. Use this if the value passed in the `header` property is not descriptive as a label for the panel.
- **`children`**: `React.ReactNode`
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`closeBehavior?`**: `'collapse' | 'hide'`
  Determines whether the split panel collapses or hides completely when closed.
- **`header?`**: `string`
  Header text of the split panel.
- **`headerActions?`**: `React.ReactNode`
  Actions for the header.
- **`headerBefore?`**: `React.ReactNode`
  Content displayed before the header text.
- **`headerDescription?`**: `React.ReactNode`
  Supplementary text below the heading.
- **`headerInfo?`**: `React.ReactNode`
  The area next to the heading, used to display an Info link.
- **`hidePreferencesButton?`**: `boolean`
  When set to `true`, the preferences button is not displayed.
- **`i18nStrings?`**: `SplitPanelProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
  - `closeButtonAriaLabel` - The text of the panel close button aria label.
  - `openButtonAriaLabel` - The text of the panel open button aria label.
  - `preferencesTitle` - The text of the preferences modal header.
  - `preferencesPositionLabel` - The text of the position preference label.
  - `preferencesPositionDescription` - The text of the position preference description.
  - `preferencesPositionSide` - The text of the side position preference label.
  - `preferencesPositionBottom` - The text of the bottom position preference label.
  - `preferencesConfirm` - The text of the preference modal confirm button.
  - `preferencesCancel` - The text of the preference modal cancel button.
  - `resizeHandleAriaLabel` - The label of the resize handle aria label.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `SplitPanelProps` (verbatim):

```ts
export declare namespace SplitPanelProps {
  interface I18nStrings {
    closeButtonAriaLabel?: string;
    openButtonAriaLabel?: string;
    preferencesTitle?: string;
    preferencesPositionLabel?: string;
    preferencesPositionDescription?: string;
    preferencesPositionSide?: string;
    preferencesPositionBottom?: string;
    preferencesConfirm?: string;
    preferencesCancel?: string;
    preferencesCloseAriaLabel?: string;
    resizeHandleAriaLabel?: string;
    resizeHandleTooltipText?: string;
  }
}
```
