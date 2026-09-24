# FileTokenGroup

```ts
import FileTokenGroup from '@cloudscape-design/components/file-token-group'
import type { FileTokenGroupProps } from '@cloudscape-design/components/file-token-group'
```

Generated from `@cloudscape-design/components@3.0.1382` `file-token-group/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`alignment?`**: `FileTokenGroupProps.Alignment`
  Specifies the direction in which tokens are aligned (`horizontal | vertical`).
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`i18nStrings?`**: `FileTokenGroupProps.I18nStrings`
  An object containing all the localized strings required by the component:
  * `removeFileAriaLabel` (function): A function to render the ARIA label for file token remove button. Receives file index and file name.
  * `errorIconAriaLabel` (string): The ARIA label to be shown on the error file icon.
  * `warningIconAriaLabel` (string): The ARIA label to be shown on the warning file icon.
  * `formatFileSize` (function): (Optional) A function that takes file size in bytes, and produces a formatted string.
  * `formatFileLastModified` (function): (Optional) A function that takes the files last modified date, and produces a formatted string.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`items`**: `ReadonlyArray<FileTokenGroupProps.Item>`
  An array of objects representing token items. Each token has the following properties:
  
  - `file` (string) - File value.
  - `loading` (boolean) - (Optional) Determine whether the token is loading.
  - `errorText` (string) - (Optional) Text that displays as a validation error message.
  - `warningText` (string) - (Optional) - Text that displays as a validation warning message.
- **`limit?`**: `number`
  Specifies the maximum number of displayed tokens. If the property isn't set, all of the tokens are displayed.
- **`limitShowFewerAriaLabel?`**: `string`
  Adds an `aria-label` to the "Show fewer" button.
  Use to assign unique labels when there are multiple file token groups with the same `limitShowFewer` label on one page.
- **`limitShowMoreAriaLabel?`**: `string`
  Adds an `aria-label` to the "Show more" button.
  Use to assign unique labels when there are multiple file token groups with the same `limitShowMore` label on one page.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value. A read-only control is still focusable.
- **`showFileLastModified?`**: `boolean`
  Show file last modified timestamp in the token. Use `i18nStrings.formatFileLastModified` to customize it.
- **`showFileSize?`**: `boolean`
  Show file size in the token. Use `i18nStrings.formatFileSize` to customize it.
- **`showFileThumbnail?`**: `boolean`
  Show file thumbnail in the token. Only supported for images.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onDismiss`**: `NonCancelableEventHandler<FileTokenGroupProps.DismissDetail>`
  Called when the user clicks on the dismiss button. The token won't be automatically removed.
  Make sure that you add a listener to this event to update your application state.

## Types

Supporting types from `FileTokenGroupProps` (verbatim):

```ts
export declare namespace FileTokenGroupProps {
  interface DismissDetail {
    fileIndex: number;
  }
  interface I18nStrings {
    limitShowFewer?: string;
    limitShowMore?: string;
    removeFileAriaLabel?: (fileIndex: number, fileName: string) => string;
    errorIconAriaLabel?: string;
    warningIconAriaLabel?: string;
    formatFileSize?: (sizeInBytes: number) => string;
    formatFileLastModified?: (date: Date) => string;
  }
  type Alignment = 'horizontal' | 'vertical';
  interface Item {
    file: File;
    loading?: boolean;
    errorText?: null | string;
    warningText?: null | string;
  }
}
```
