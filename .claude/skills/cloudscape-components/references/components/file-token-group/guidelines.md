# File token group

> Source: https://cloudscape.design/components/file-token-group/ (fetched 2026-09-24)

A collection of uploaded files displayed as tokens.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/file-token-group)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/file-token-group/index.html.json)

## Development guidelines

#### State management

The file token group component is controlled. Set the `onDismiss` listener to store the visible items in the state of your application and update the `items` property. Learn more about the [state management](../../get-started/dev-guides/state-management.md) of components.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

FileTokenGroupWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findFileToken | [FileTokenWrapper](https://cloudscape.design/) &#124; null | Returns a file token from for a given index. | fileTokenIndex: |
| findFileTokens | Array<[FileTokenWrapper](https://cloudscape.design/)> | - | - | FileTokenWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findFileError | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findFileLastModified | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findFileName | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findFileSize | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findFileThumbnail | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findFileWarning | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findRemoveButton | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
## Integration testing APIs

FileTokenGroupWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findFileToken | [FileTokenWrapper](https://cloudscape.design/) | Returns a file token from for a given index. | fileTokenIndex: |
| findFileTokens | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[FileTokenWrapper](https://cloudscape.design/)> | - | - | FileTokenWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findFileError | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findFileLastModified | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findFileName | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findFileSize | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findFileThumbnail | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findFileWarning | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findRemoveButton | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
## General guidelines

### Do

- Use only when the [file upload](../file-upload/guidelines.md)   cannot be used. For example, with [prompt input](../prompt-input/guidelines.md)  .
- Use in combination with [file input](../file-input/guidelines.md)   and [file dropzone](../file-dropzone/guidelines.md)   to configure the file uploading experience for users.
- By default, tokens stack vertically to allow for easy scanning. In layouts where more compact, horizontal tokens would be beneficial, use horizontal alignment. For example, in the prompt input.

## Features

- #### File metadata

  File metadata helps the user to validate and compare the files selected. Choose the most relevant file metadata to display, based on your use case. The types of metadata that can be displayed per file are:  

  - Name (each file name). This should not include path information.
  - Size (expressed in bytes) - *optional*    

    - For example, KB (kilobyte), MB (megabyte), GB (gigabyte).
  - Last modified date - *optional*
  - Image thumbnail - *optional*
- #### Alignment

  By default, tokens stack vertically to allow for easy scanning. In instances where compact tokens would be beneficial, horizontal stacking can be used instead.
- #### Token truncation - optional

  By default, all file tokens are visible. If you expect the majority of users to upload a small number of files, you can choose to include token truncation. If you know how many files are typically uploaded, hide file tokens above that number. To toggle the visibility of the tokens, users can trigger the show/hide link, which shows or hides the tokens.

### States

- #### Invalid

  Shows that there is an error with a file that the user has uploaded.
- #### Warning

  Indicates a condition regarding a file, which doesn't generate an error, but requires user attention.
- #### Loading

  Shows a loading spinner when a file is in the process of being uploaded.

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

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

#### Alternative text

Specify alternative text for the remove icon in the tokens.

- For example: *Remove file.*
- When there are multiple files, include the specific file index. For example: *Remove file 1.*

#### Announcing files uploading

When uploading files, set the `loading` property per file token, and use the [live region](../live-region/guidelines.md) component to announce the loading state. When uploading multiple files, use a single announcement message, for example: "Uploading 2 files".
