# Modal

```ts
import Modal from '@cloudscape-design/components/modal'
import type { ModalProps } from '@cloudscape-design/components/modal'
```

Generated from `@cloudscape-design/components@3.0.1382` `modal/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`analyticsMetadata?`**: `ModalProps.AnalyticsMetadata`
  Specifies additional analytics-related metadata.
  * `instanceIdentifier` - A unique string that identifies this component instance in your application.
  * `flowType` - Identifies the type of flow represented by the component.
  * `resourceType` - Identifies the type of resource represented by the flow. **Note:** This API is currently experimental.
- **`children?`**: `React.ReactNode`
  Body of the modal.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`closeAriaLabel?`**: `string` _(@i18n)_
  Adds an `aria-label` to the close button, for accessibility.
- **`disableContentPaddings?`**: `boolean`
  Determines whether the modal content has padding. If `true`, removes the default padding from the content area.
- **`footer?`**: `React.ReactNode`
  Specifies a footer for the modal. If empty, the footer isn't displayed.
- **`getModalRoot?`**: `PortalProps['getContainer']`
  Use this property to specify a different dynamic modal root for the dialog.
  The function will be called when a user clicks on the trigger button.
- **`header?`**: `React.ReactNode`
  Specifies a title for the modal. Although this can be empty, we suggest that you always provide a title.
- **`height?`**: `number`
  Specifies the height of the modal. When provided, the modal content becomes scrollable if it exceeds the specified height.
  If the specified height exceeds available viewport space, the modal will use the maximum available space.
  To make sure the content is accessible, the component will apply a minimum height of 60px for the content area,
  plus the header height and the footer height.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`modalRoot?`**: `HTMLElement`
  Specifies the HTML element where the modal is rendered.
  If neither `modalRoot` or `getModalRoot` properties are provided, the modal will
  render to an element under `document.body`.
- **`position?`**: `ModalProps.Position`
  Controls the vertical positioning of the modal.
  
  - `center` (default) - The modal is vertically centered in the viewport and re-centers
    when content height changes. Use for dialogs with static, predictable content.
  
  - `top` - The modal anchors at fixed distance and grows downward
    as content expands. Use when the content changes dynamically to prevent disruptive
    vertical repositioning that can cause users to lose context.
- **`removeModalRoot?`**: `PortalProps['removeContainer']`
  Use this property when `getModalRoot` is used to clean up the modal root
  element after a user closes the dialog. The function receives the return value
  of the most recent getModalRoot call as an argument.
- **`size?`**: `ModalProps.Size`
  Sets the width of the modal. `max` uses variable width up to the
  largest size allowed by the design guidelines. Other sizes have fixed widths:
  `small` (320px), `medium` (600px), `large` (820px), `x-large` (1024px), `xx-large` (1280px).
- **`visible`**: `boolean`
  Determines whether the modal is displayed on the screen. Modals are hidden by default.
  Set this property to `true` to show them.
- **`width?`**: `number`
  Specifies the width of the modal. When provided, takes precedence over the `size` property.
  If the specified width exceeds available viewport space, the modal will use the maximum available space.
  The minimum width is 320px (equivalent to the `small` size).

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onDismiss?`**: `NonCancelableEventHandler<ModalProps.DismissDetail>`
  Called when a user closes the modal by using the close icon button,
  clicking outside of the modal, or pressing ESC.
  The event detail contains the `reason`, which can be any of the following:
  `['closeButton', 'overlay', 'keyboard']`.

## Types

Supporting types from `ModalProps` (verbatim):

```ts
export declare namespace ModalProps {
  type Size = 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'max';
  type Position = 'center' | 'top';
  interface DismissDetail {
    reason: string;
  }
  interface AnalyticsMetadata {
    instanceIdentifier?: string;
    flowType?: FlowType;
    resourceType?: string;
  }
}
```
