# FileInput

```ts
import FileInput from '@cloudscape-design/components/file-input'
import type { FileInputProps } from '@cloudscape-design/components/file-input'
```

Generated from `@cloudscape-design/components@3.0.1382` `file-input/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

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
- **`ariaLabel?`**: `string`
  Adds `aria-label` to the file input element. Use this to provide an accessible name for file inputs
  that don't have visible text, and to distinguish between multiple file inputs with identical visible text.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`ariaRequired?`**: `boolean`
  Specifies whether to add aria-required to the file upload control.
- **`children?`**: `string`
  Text displayed in the file input component. Used as the aria label if ariaLabel is not defined.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
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
- **`value`**: `ReadonlyArray<File>`
  Specifies the currently selected file(s).
  If you want to clear the selection, use empty array.
- **`variant?`**: `'button' | 'icon'`
  Variant of the file input. Defaults to "button".

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange`**: `NonCancelableEventHandler<FileInputProps.ChangeDetail>`
  Called when the user selects new file(s), or removes a file.
  The event `detail` contains the current value of the component.

## Types

Supporting types from `FileInputProps` (verbatim):

```ts
export declare namespace FileInputProps {
  interface ChangeDetail {
    value: File[];
  }
  interface Ref {
    /**
     * Sets focus on the file upload button.
     */
    focus(): void;
  }
}
```
