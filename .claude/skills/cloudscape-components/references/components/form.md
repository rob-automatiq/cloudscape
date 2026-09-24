# Form

```ts
import Form from '@cloudscape-design/components/form'
import type { FormProps } from '@cloudscape-design/components/form'
```

Generated from `@cloudscape-design/components@3.0.1382` `form/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`actions?`**: `React.ReactNode`
  Specifies actions for the form. You should wrap action buttons in a [space between component](/components/space-between) with `direction="horizontal"` and `size="xs"`.
- **`analyticsMetadata?`**: `FormProps.AnalyticsMetadata`
  Specifies additional analytics-related metadata.
  * `instanceIdentifier` - A unique string that identifies this component instance in your application.
  * `flowType` - Identifies the type of flow represented by the component.
  * `resourceType` - Identifies the type of resource represented by the flow. **Note:** This API is currently experimental.
  * `errorContext` - Identifies the error category and sub-category.
- **`children?`**: `React.ReactNode`
  Specifies the main form content.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`errorIconAriaLabel?`**: `string` _(@i18n)_
  Provides a text alternative for the error icon in the error alert.
- **`errorText?`**: `React.ReactNode`
  Specifies a form-level validation message.
- **`header?`**: `React.ReactNode`
  Specifies the form title and optional description. Use the [header component](/components/header/).
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`secondaryActions?`**: `React.ReactNode`
  Specifies left-aligned secondary actions for the form. Use a button dropdown if multiple actions are required.
- **`variant?`**: `'full-page' | 'embedded'` _(@deprecated You can safely remove this property as there is no longer any visual difference between `full-page` and `embedded` variants.)_
  Specify a form variant with one of the following:
  * `full-page` - Use this variant when the form contains the entire content of the page.
  * `embedded` - Use this variant when the form doesn't occupy the full page.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `FormProps` (verbatim):

```ts
export declare namespace FormProps {
  interface AnalyticsMetadata {
    instanceIdentifier?: string;
    flowType?: FlowType;
    resourceType?: string;
    errorContext?: ErrorContext;
  }
}
```
