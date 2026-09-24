# FormField

```ts
import FormField from '@cloudscape-design/components/form-field'
import type { FormFieldProps } from '@cloudscape-design/components/form-field'
```

Generated from `@cloudscape-design/components@3.0.1382` `form-field/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`analyticsMetadata?`**: `FormFieldProps.AnalyticsMetadata`
  Specifies additional analytics-related metadata.
  * `instanceIdentifier` - A unique string that identifies this component instance in your application.
  * `errorContext` - Identifies the error category and sub-category.
- **`characterCountText?`**: `string`
  Character count constraint displayed adjacent to the constraintText. Use
  this to provide an updated character count on each keypress that is debounced
  for screen reader users.
- **`children?`**: `React.ReactNode`
  The primary form control (for example, input, textarea, etc.).
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`constraintText?`**: `React.ReactNode`
  Constraint text that's displayed below the control. Use this to provide
  additional information about valid formats, etc.
- **`controlId?`**: `string`
  The ID of the primary form control. You can use this to set the
  `for` attribute of a label for accessibility.
  
  If you don't set this property, the control group automatically sets
  the label to the ID of an inner form control (for example, an [input](/components/input) component).
  This only works well if you're using a single control in the form field.
- **`description?`**: `React.ReactNode`
  Detailed information about the form field that's displayed below the label.
- **`errorText?`**: `React.ReactNode`
  Text that displays as a validation error message. If this is set to a
  non-empty string, it will render the form field as invalid.
- **`i18nStrings?`**: `FormFieldProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`info?`**: `React.ReactNode`
  Use to display an 'Info' link next to the label.
- **`label?`**: `React.ReactNode`
  The main label for the form field.
- **`secondaryControl?`**: `React.ReactNode`
  A secondary control. You can use this for custom actions and content.
- **`stretch?`**: `boolean`
  Determines whether the primary control should expand to 12 columns.
  
  By default (or when this property is set to `false`), the primary control
  occupies 9 columns. The secondary control uses the remaining 3 columns.
  On smaller viewports, both components occupy 12 columns and stack on top of each other.
  
  If this property is set to `true`, the primary control uses the full
  12 columns. The secondary control (if present) also uses 12 columns, and the two
  controls stack on top of each other.
- **`warningText?`**: `React.ReactNode`
  Text that displays as a validation warning message. If this is set to a
  non-empty string, it will render the form field in a warning state.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `FormFieldProps` (verbatim):

```ts
export declare namespace FormFieldProps {
  interface AnalyticsMetadata {
    instanceIdentifier?: string;
    errorContext?: ErrorContext;
  }
  interface I18nStrings {
    /**
     * Provides a text alternative for the error icon in the error message.
     */
    errorIconAriaLabel?: string;
    /**
     * Provides a text alternative for the warning icon in the warning message.
     */
    warningIconAriaLabel?: string;
  }
}
```
