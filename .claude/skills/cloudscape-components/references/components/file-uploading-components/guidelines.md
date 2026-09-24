# File uploading components

> Source: https://cloudscape.design/components/file-uploading-components/ (fetched 2026-09-24)

Components that allow users to upload files.

The API properties for this component are found here: [API Properties](https://cloudscape.design/components/file-uploading-components/index.html.json)

## Related components

### File dropzone

An area that allows users to drag and drop files.

[View Documentation](../file-dropzone/guidelines.md)

### File input

A trigger that allows users to select one or more files to upload.

[View Documentation](../file-input/guidelines.md)

### File token group

A collection of uploaded files displayed as tokens.

[View Documentation](../file-token-group/guidelines.md)

### File upload

File upload is a form element. Users can use it to select one or multiple local files to upload. The files can then be uploaded upon form submission or processed further in the browser.

[View Documentation](../file-upload/guidelines.md)

## How the components work together

File uploading consists of four components: one parent component and three sub-components. These components can be configured together to create a full file upload experience.

The [file upload](../file-upload/guidelines.md) is a pre-built combination of a [file input](../file-input/guidelines.md) , [file token group](../file-token-group/guidelines.md) , and [file dropzone](../file-dropzone/guidelines.md) . The file input is the trigger that allows the user to select files to upload. The file token group is the set of uploaded files displayed as [tokens](../token/guidelines.md) . The file dropzone is an area where a user can drag and drop files in order for them to be uploaded.

The file upload component covers standard use cases for file uploading, including in forms and create flows, and, in most cases, is the only component you need. For other use cases, you may need more flexible layouts for uploading files. Examples of this include placing the file tokens in a separate area from the file input, showing file data in a table instead of tokens, or showing the file dropzone even before a file is being dragged. In these cases, you can use the three sub-components in different combinations to create unique layouts.

For an example of all three file uploading components working together, see the [prompt input](../prompt-input/guidelines.md).

A B C---
