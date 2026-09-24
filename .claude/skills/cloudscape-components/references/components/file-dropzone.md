# FileDropzone

```ts
import FileDropzone from '@cloudscape-design/components/file-dropzone'
import type { FileDropzoneProps } from '@cloudscape-design/components/file-dropzone'
```

Generated from `@cloudscape-design/components@3.0.1382` `file-dropzone/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children`**: `React.ReactNode`
  Children of the Dropzone.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange`**: `NonCancelableEventHandler<FileDropzoneProps.ChangeDetail>`
  Called when the user selects new file(s), or removes a file.
  The event `detail` contains the current value of the component.

## Types

Supporting types from `FileDropzoneProps` (verbatim):

```ts
export declare namespace FileDropzoneProps {
  interface ChangeDetail {
    value: File[];
  }
}
```
