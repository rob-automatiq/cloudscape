# CopyToClipboard

```ts
import CopyToClipboard from '@cloudscape-design/components/copy-to-clipboard'
import type { CopyToClipboardProps } from '@cloudscape-design/components/copy-to-clipboard'
```

Generated from `@cloudscape-design/components@3.0.1382` `copy-to-clipboard/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`copyButtonAriaLabel?`**: `string`
  Adds `aria-label` to the copy button. Use this to provide an accessible name for buttons that don't have visible text,
  and to distinguish between multiple buttons with identical visible text. The text will also be added to the `title` attribute of the button.
- **`copyButtonText?`**: `string`
  The text of the copy button (for variant="button").
- **`copyErrorText`**: `string`
  The message shown when the text is not copied due to an error, see [https://w3c.github.io/clipboard-apis/#dom-clipboard-writetext](https://w3c.github.io/clipboard-apis/#dom-clipboard-writetext).
- **`copySuccessText`**: `string`
  The message shown when the text is copied successfully.
- **`disabled?`**: `boolean`
  Renders the copy to clipboard button as disabled and prevents clicks.
- **`disabledReason?`**: `string`
  Provides a reason why the copy to clipboard button is disabled (only when `disabled` is `true`).
  If provided, the copy to clipboard button becomes focusable.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`popoverRenderWithPortal?`**: `boolean`
  By default, the popover is constrained to fit inside its parent
  [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
  Enabling this property will allow the popover to be rendered in the root stack context using
  [React Portals](https://reactjs.org/docs/portals.html).
  Enable this setting if you need the popover to ignore its parent stacking context.
- **`textToCopy`**: `string`
  The text content to be copied. It is displayed next to the copy button when `variant="inline"` unless when `content` is specified, and is not shown otherwise.
- **`textToDisplay?`**: `React.ReactNode`
  The content to display next to the copy button when `variant="inline"`. If not provided, `textToCopy` will be displayed instead.
- **`variant?`**: `CopyToClipboardProps.Variant`
  Determines the general styling of the copy button as follows:
  
  * `button` to display a standalone secondary button with an icon, and `copyButtonText` as text.
  * `icon` to display a standalone icon-only (no text) button.
  * `inline` to display an icon-only (no text) button within a text context.
  
  Defaults to `button`.
- **`wrapText?`**: `boolean`
  Specifies if the `textToDisplay` content should wrap. If you set it to false, it prevents the text
  from wrapping and truncates it with an ellipsis. Only applies to `variant="inline"`.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onCopyFailure?`**: `NonCancelableEventHandler<CopyToClipboardProps.CopyFailureDetail>`
  Called when the copy operation fails.
  The event `detail` contains the text that failed to copy.
- **`onCopySuccess?`**: `NonCancelableEventHandler<CopyToClipboardProps.CopySuccessDetail>`
  Called when the text is successfully copied to the clipboard.
  The event `detail` contains the text that was copied.

## Types

Supporting types from `CopyToClipboardProps` (verbatim):

```ts
export declare namespace CopyToClipboardProps {
  type Variant = 'button' | 'icon' | 'inline';
  interface CopySuccessDetail {
    /** The text that was copied to the clipboard */
    text: string;
  }
  interface CopyFailureDetail {
    /** The text that failed to copy to the clipboard */
    text: string;
  }
}
```
