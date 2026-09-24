# Steps

```ts
import Steps from '@cloudscape-design/components/steps'
import type { StepsProps } from '@cloudscape-design/components/steps'
```

Generated from `@cloudscape-design/components@3.0.1382` `steps/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Sets the `aria-describedby` property on the progress steps container.
- **`ariaLabel?`**: `string`
  Provides an `aria-label` to the progress steps container.
  Don't use `ariaLabel` and `ariaLabelledby` at the same time.
- **`ariaLabelledby?`**: `string`
  Sets the `aria-labelledby` property on the progress steps container.
  If there's a visible label element that you can reference, use this instead of `ariaLabel`.
  Don't use `ariaLabel` and `ariaLabelledby` at the same time.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`connectorLines?`**: `StepsProps.ConnectorLinesVariant`
  Determines whether the connector lines between steps are displayed. The following variants are available:
  * `visible` - Shows connector lines between consecutive steps.
  * `none` - Hides the connector lines between steps.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`orientation?`**: `StepsProps.Orientation`
  The visual orientation of the steps (vertical or horizontal).
  By default the orientation is vertical.
- **`renderStep?`**: `(step: StepsProps.Step) => { header: React.ReactNode; details?: React.ReactNode; icon?: React.ReactNode; }`
  Render a step. This overrides the default icon, header, and details provided by the component.
  The function is called for each step and should return an object with the following keys:
  * `header` (React.ReactNode) - Summary corresponding to the step.
  * `details` (React.ReactNode) - (Optional) Additional information corresponding to the step.
  * `icon` (React.ReactNode) - (Optional) Replaces the standard step icon from the status indicator.
- **`steps`**: `ReadonlyArray<StepsProps.Step>`
  An array of individual steps
  
  Each step definition has the following properties:
   * `status` (string) - Status of the step corresponding to a status indicator.
   * `statusIconAriaLabel` - (string) - (Optional) Alternative text for the status icon.
   * `header` (ReactNode) - Summary corresponding to the step.
   * `details` (ReactNode) - (Optional) Additional information corresponding to the step.
   * `annotation` (ReactNode) - (Optional) Content rendered at the start of the step, before the icon. Typically a timestamp in a timeline view.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

_None._

## Types

Supporting types from `StepsProps` (verbatim):

```ts
export declare namespace StepsProps {
  type Status = StatusIndicatorProps.Type;
  interface Step {
    status: Status;
    statusIconAriaLabel?: string;
    header: React.ReactNode;
    details?: React.ReactNode;
    annotation?: React.ReactNode;
  }
  type Orientation = 'vertical' | 'horizontal';
  type ConnectorLinesVariant = 'visible' | 'none';
}
```
