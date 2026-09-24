# Hotspot

> Source: https://cloudscape.design/components/hotspot/ (fetched 2026-09-24)

In hands-on tutorials, hotspots are invisible containers that mark the spots where hotspot icons should be placed. Hotspot icons are rendered by the annotation context and are used to open and close annotation popovers.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/hotspot) [View in demo](https://cloudscape.design/examples/react/onboarding.html)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/hotspot/index.html.json)

## Development guidelines

This component is a part of the [Hands-on Tutorials pattern](../../patterns/general/onboarding/hands-on-tutorials.md) , together with the [Annotation Context](../annotation-context/guidelines.md) and [Tutorial Panel](../tutorial-panel/guidelines.md) components. Place the hotspot component around elements that you want to annotate in your tutorials. A hotspot element that is not used in the currently launched tutorial will not render anything except the content of its `children` slot. A single hotspot element can be used in multiple different tutorials.

Refer to the source code of [the official Cloudscape Hands-on tutorials demo](https://cloudscape.design/examples/react/onboarding.html) for comparison.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

HotspotWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findAnnotation | [AnnotationWrapper](https://cloudscape.design/) &#124; null | - | - |
| findTrigger | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - | AnnotationWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findDismissButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findFinishButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
| findNextButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findPreviousButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findStepCounter | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> | - | - |
## Integration testing APIs

HotspotWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findAnnotation | [AnnotationWrapper](https://cloudscape.design/) | - | - |
| findTrigger | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - | AnnotationWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findDismissButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findFinishButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findNextButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findPreviousButton | [ButtonWrapper](../button/guidelines.md) | - | - |
| findStepCounter | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - | The Hotspot component provides both the annotation popover and the hotspot affordance. There is no separate component for the annotation popover.
## General guidelines

### Do

- Use hotspots only in the context of a [hands-on tutorial](../../patterns/general/onboarding/hands-on-tutorials.md)  .

### Don't

- Avoid placing hotspots next to inactive elements. Placing hotspots with inactive elements can cause confusion, because inactive elements aren't interactive.
- Don't place hotspots in [modals](../modal/guidelines.md)  .

## Features

- #### Hotspot icon

  Hotspot icons are visual affordances that open and close annotation popovers. After a tutorial is launched, the [annotation context](../annotation-context/guidelines.md)   automatically renders hotspot icons for any hotspots that belong to that tutorial. When the tutorial is dismissed, the icons disappear.
- #### Side

  Specify where the hotspot should be placed in relation to a page element. The hotspot can be placed either to the top-right or top-left of the page content or element that it refers to.
- #### Direction

  Specify the direction that the associated annotation popover should open in. To learn more about the features of annotation popovers, follow the guidelines for [annotation context.](../annotation-context/guidelines.md)

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
