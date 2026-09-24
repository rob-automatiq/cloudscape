# ErrorBoundary

```ts
import ErrorBoundary from '@cloudscape-design/components/error-boundary'
import type { ErrorBoundaryProps } from '@cloudscape-design/components/error-boundary'
```

Generated from `@cloudscape-design/components@3.0.1382` `error-boundary/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children`**: `React.ReactNode`
  Child content rendered when no error has been captured.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`errorBoundaryId?`**: `string`
  Optional identifier for the error boundary instance.
  
  When provided, the identifier is included in the `onError` callback payload.
  In the rendered output, the boundary wraps its content in a `<div>` with the
  attribute `data-awsui-boundary-id={errorBoundaryId}` to support debugging.
- **`i18nStrings?`**: `ErrorBoundaryProps.I18nStrings` _(@i18n)_
  Localized strings and components used in the fallback UI.
  
  * `headerText` (string): Header text displayed in the fallback view.
  * `descriptionText` (string): Description text displayed in the fallback view. Supports embedding inline
    feedback actions by including `<Feedback>` pseudo-tags when `components.Feedback` is provided.
  * `refreshActionText` (string): Text for the default refresh action button.
  * `components.Feedback` (React.ComponentType<I18nFeedbackProps>): A component used to render
    inline feedback actions within the description text.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`renderFallback?`**: `(props: ErrorBoundaryProps.FallbackProps) => React.ReactNode`
  Optional custom renderer for the fallback UI displayed when an error occurs.
  
  The function receives the default slots derived from i18n configuration:
  * `header` (ReactNode): The fallback header text.
  * `description` (ReactNode): The fallback description text.
  * `action` (ReactNode): The fallback action element (a refresh button by default).
  
  Return a React node to fully override the default fallback presentation.
- **`suppressible?`**: `boolean`
  When set to `true`, this error boundary can be suppressed by another error
  boundary with `suppressNested=true`, rendered above in the components tree.
- **`suppressNested?`**: `boolean`
  Controls how nested error boundaries behave.
  
  Several components—such as app layout, container, and modal include built-in
  error boundaries. These boundaries activate automatically when they detect
  an ancestor boundary, inheriting configuration from the closest one.
  
  When `suppressNested` is set to `true`, nested built-in error boundaries
  and nested standalone error boundaries with `suppressible=true` are disabled,
  so the errors propagate further up and are captured by this error boundary.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onError`**: `(detail: ErrorBoundaryProps.OnErrorDetail) => void`
  Callback invoked when an error is intercepted by the boundary.
  Use this function to record, log, or report errors (for example, to telemetry or monitoring systems).
  
  The callback receives a `detail` object containing:
  * `error` (Error): The thrown error instance.
  * `errorInfo` (React.ErrorInfo): Additional metadata captured by React.
  * `errorBoundaryId` (optional, string): The boundary identifier, if defined.

## Types

Supporting types from `ErrorBoundaryProps` (verbatim):

```ts
export declare namespace ErrorBoundaryProps {
  interface FallbackProps {
    header?: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactNode;
  }
  interface I18nStrings {
    headerText?: string;
    descriptionText?: string;
    refreshActionText?: string;
    components?: {
      Feedback?: React.ComponentType<I18nFeedbackProps>;
    };
  }
  interface I18nFeedbackProps {
    children: React.ReactNode;
  }
  interface OnErrorDetail {
    error: Error;
    errorInfo: ErrorInfo;
    errorBoundaryId?: string;
  }
}
```
