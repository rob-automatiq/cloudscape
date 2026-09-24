# FileUpload

```ts
import FileUpload from '@cloudscape-design/components/file-upload'
import type { FileUploadProps } from '@cloudscape-design/components/file-upload'
```

Generated from `@cloudscape-design/components@3.0.1382` `file-upload/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`accept?`**: `string`
  Specifies the native file input `accept` attribute to describe the allow-list of file types.
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
- **`ariaRequired?`**: `boolean`
  Specifies whether to add aria-required to the file upload control.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`constraintText?`**: `React.ReactNode`
  Constraint text that is displayed below the control. Use this to provide additional information about file size limit, etc.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`errorText?`**: `React.ReactNode`
  Text that displays as a validation error message.
- **`fileErrors?`**: `ReadonlyArray<null | string>`
  An array of file errors corresponding to the files in the `value`.
- **`fileTokenAlignment?`**: `FileUploadProps.FileTokenAlignment`
  Alignment of the file tokens. Defaults to "vertical".
- **`fileWarnings?`**: `ReadonlyArray<null | string>`
  An array of file warnings corresponding to the files in the `value`.
- **`i18nStrings?`**: `FileUploadProps.I18nStrings`
  An object containing all the localized strings required by the component:
  * `uploadButtonText` (function): A function to render the text of the file upload button. It takes `multiple` attribute to define plurality.
  * `dropzoneText` (function): A function to render the text shown in the dropzone. It takes `multiple` attribute to define plurality.
  * `removeFileAriaLabel` (function): A function to render the ARIA label for file token remove button.
  * `limitShowFewer` (string): The text of the show more tokens button.
  * `limitShowMore` (string): The text of the show fewer tokens button.
  * `errorIconAriaLabel` (string): The ARIA label to be shown on the error file icon.
  * `warningIconAriaLabel` (string): The ARIA label to be shown on the warning file icon.
  * `formatFileSize` (function): (Optional) A function that takes file size in bytes, and produces a formatted string.
  * `formatFileLastModified` (function): (Optional) A function that takes the files last modified date, and produces a formatted string.
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
- **`multiple?`**: `boolean`
  Specifies the native file input `multiple` attribute to allow users entering more than one file.
- **`showFileLastModified?`**: `boolean`
  Show file last modified timestamp in the token. Use `i18nStrings.formatFileLastModified` to customize it.
- **`showFileSize?`**: `boolean`
  Show file size in the token. Use `i18nStrings.formatFileSize` to customize it.
- **`showFileThumbnail?`**: `boolean`
  Show file thumbnail in the token. Only supported for images.
- **`tokenLimit?`**: `number`
  Specifies the maximum number of displayed file tokens. If the property isn't set, all of the tokens are displayed.
- **`value`**: `ReadonlyArray<File>`
  Specifies the currently selected file(s).
  If you want to clear the selection, use empty array.
- **`warningText?`**: `React.ReactNode`
  Text that displays as a validation warning message.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<FileUploadProps.ChangeDetail>`
  Called when the user selects new file(s), or removes a file.
  The event `detail` contains the current value of the component.

## Types

Supporting types from `FileUploadProps` (verbatim):

```ts
export declare namespace FileUploadProps {
  interface ChangeDetail {
    value: File[];
  }
  interface DismissDetail {
    index: number;
    file: File;
  }
  type FileTokenAlignment = 'vertical' | 'horizontal';
  interface I18nStrings {
    uploadButtonText?: (multiple: boolean) => string;
    dropzoneText?: (multiple: boolean) => string;
    removeFileAriaLabel?: (fileIndex: number, fileName: string) => string;
    limitShowFewer?: string;
    limitShowMore?: string;
    errorIconAriaLabel?: string;
    warningIconAriaLabel?: string;
    formatFileSize?: (sizeInBytes: number) => string;
    formatFileLastModified?: (date: Date) => string;
  }
  interface Ref {
    /**
     * Sets focus on the file upload button.
     */
    focus(): void;
  }
}
```
