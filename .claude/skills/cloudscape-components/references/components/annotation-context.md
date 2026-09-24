# AnnotationContext

```ts
import AnnotationContext from '@cloudscape-design/components/annotation-context'
import type { AnnotationContextProps } from '@cloudscape-design/components/annotation-context'
```

Generated from `@cloudscape-design/components@3.0.1382` `annotation-context/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`children`**: `React.ReactNode`
  Put all page content inside this component's children. This component
  will provide a context which is used by the Hotspot elements throughout
  the page.
- **`currentTutorial`**: `AnnotationContextProps.Tutorial | null`
  The currently launched tutorial. This should be the object received
  in the `detail` property of the `onStartTutorial` event.
- **`i18nStrings`**: `AnnotationContextProps.I18nStrings`
  An object containing all the necessary localized strings required by the component. The object should contain:
  
  * `finishButtonText` - Specifies the text that's displayed in the finish button.
  * `labelDismissAnnotation` - Specifies the aria-label for the dismiss button.
  * `labelHotspot` - Specifies the aria-label for the hotspot button. The `openState` argument is deprecated, it's handled by the hotspot button aria-expanded attribute.
  * `nextButtonText` - Specifies the text that's displayed in the next button.
  * `previousButtonText` - Specifies the text that's displayed in the previous button.
  * `stepCounterText` - Specifies the step counter text that's displayed in the annotation popover.
  * `taskTitle` - Specifies the title text that's displayed in the annotation popover.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onExitTutorial`**: `NonCancelableEventHandler<TutorialPanelProps.TutorialDetail>`
  Fired when the user exits the current tutorial.
- **`onFinish?`**: `NonCancelableEventHandler<void>`
  Fired when the user clicks the "Finish" button on the last step of
  the tutorial.
- **`onStartTutorial`**: `NonCancelableEventHandler<TutorialPanelProps.TutorialDetail>`
  Fired when the user selects a tutorial from the list.
- **`onStepChange?`**: `NonCancelableEventHandler<AnnotationContextProps.StepChangeDetail>`
  This event is fired when a user clicks the "Next" or "Previous"
  button on a popover, when the user clicks on a closed hotspot icon,
  or when the AnnotationOverlay determines that the current hotspot
  has disappeared from the page and a different one should be
  selected (e.g. when navigating between pages).
  
  Use the `reason` property of the event detail to determine why
  this event was fired.

## Types

Supporting types from `AnnotationContextProps` (verbatim):

```ts
export declare namespace AnnotationContextProps {
  interface StepChangeDetail {
    step: number;
    reason: 'next' | 'previous' | 'open' | 'auto-fallback';
  }
  interface OpenChangeDetail {
    open: boolean;
  }
  type Task = TutorialPanelProps.Task;
  type Step = TutorialPanelProps.Step;
  type Tutorial = TutorialPanelProps.Tutorial;
  interface I18nStrings {
    nextButtonText: string;
    previousButtonText: string;
    finishButtonText: string;
    labelDismissAnnotation: string;
    labelHotspot: (openState: boolean, stepIndex: number, totalStepCount: number) => string;
    stepCounterText: (stepIndex: number, totalStepCount: number) => string;
    taskTitle: (taskIndex: number, taskTitle: string) => string;
  }
}
```
