# Alert

```ts
import Alert from '@cloudscape-design/components/alert'
import type { AlertProps } from '@cloudscape-design/components/alert'
```

Generated from `@cloudscape-design/components@3.0.1382` `alert/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`action?`**: `React.ReactNode`
  Specifies an action for the alert message.
  Although it is technically possible to insert any content, our UX guidelines only allow you to add a button.
- **`analyticsMetadata?`**: `AlertProps.AnalyticsMetadata`
  Specifies additional analytics-related metadata.
  * `errorContext` - Identifies the error category and sub-category.
- **`buttonText?`**: `React.ReactNode` _(@deprecated Replaced by `action`.)_
  Displays an action button next to the message area when set.
  An `onButtonClick` event is fired when the user clicks it.
- **`children?`**: `React.ReactNode`
  Primary text displayed in the element.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`dismissAriaLabel?`**: `string` _(@i18n; @deprecated Use `i18nStrings.dismissAriaLabel` instead.
If the label is assigned via the `i18nStrings` property, this label will be ignored.)_
  Adds an aria-label to the dismiss button.
- **`dismissible?`**: `boolean`
  Adds a close button to the alert when set to `true`.
  An `onDismiss` event is fired when a user clicks the button.
- **`header?`**: `React.ReactNode`
  Heading text.
- **`i18nStrings?`**: `AlertProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`statusIconAriaLabel?`**: `string` _(@deprecated Use the label properties inside `i18nStrings` instead.
If the label is assigned via the `i18nStrings` property, this label will be ignored.)_
  Provides a text alternative for the icon.
- **`style?`**: `AlertProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the alert's visual appearance.
  Refer to the [style](../alert/guidelines.md) tab for more details.
- **`type?`**: `AlertProps.Type`
  Specifies the type of message you want to display.
- **`visible?`**: `boolean` _(@deprecated Use conditional rendering in your code instead of this prop.)_
  Determines whether the alert is displayed.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onButtonClick?`**: `NonCancelableEventHandler`
  Fired when the user clicks the action button.
  **Deprecated** Replaced by `action`.
- **`onDismiss?`**: `NonCancelableEventHandler`
  Fired when the user clicks the close icon that is displayed
  when the `dismissible` property is set to `true`.

## Types

Supporting types from `AlertProps` (verbatim):

```ts
export declare namespace AlertProps {
  type Type = 'success' | 'error' | 'warning' | 'info';
  interface Ref {
    /**
     * Sets focus on the alert content.
     */
    focus(): void;
  }
  interface I18nStrings {
    successIconAriaLabel?: string;
    errorIconAriaLabel?: string;
    warningIconAriaLabel?: string;
    infoIconAriaLabel?: string;
    dismissAriaLabel?: string;
  }
  interface AnalyticsMetadata {
    errorContext?: ErrorContext;
  }
  interface Style {
    root?: {
      background?: string;
      borderColor?: string;
      borderRadius?: string;
      borderWidth?: string;
      color?: string;
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
    icon?: {
      color?: string;
    };
    dismissButton?: {
      color?: {
        active?: string;
        default?: string;
        hover?: string;
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
  }
  interface PersistenceConfig {
    uniqueKey: string;
    crossServicePersistence?: boolean;
  }
}
```
