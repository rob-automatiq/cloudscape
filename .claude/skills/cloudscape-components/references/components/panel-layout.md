# PanelLayout

```ts
import PanelLayout from '@cloudscape-design/components/panel-layout'
import type { PanelLayoutProps } from '@cloudscape-design/components/panel-layout'
```

Generated from `@cloudscape-design/components@3.0.1382` `panel-layout/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`defaultPanelSize?`**: `number`
  Initial panel size, for uncontrolled behavior.
  
  The actual size will be constrained by `minPanelSize` and `maxPanelSize`, if set.
- **`display?`**: `PanelLayoutProps.Display`
  Determines which content is displayed:
  - 'all': Both panel and main content are displayed.
  - 'panel-only': Only panel is displayed.
  - 'main-only': Only main content is displayed.
- **`i18nStrings?`**: `PanelLayoutProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`mainContent`**: `ReactNode`
  Main content area displayed next to the panel.
- **`mainFocusable?`**: `PanelLayoutProps.FocusableConfig`
  Makes the main content area focusable. This should be used if there are no focusable elements
  inside the content, to ensure it is keyboard scrollable.
  
  Provide either `{ariaLabel: "Main label"}` or `{ariaLabelledby: "main-label-id"}`
- **`maxPanelSize?`**: `number`
  The maximum size of the panel.
- **`minPanelSize?`**: `number`
  The minimum size of the panel.
- **`panelContent`**: `ReactNode`
  Panel contents.
- **`panelFocusable?`**: `PanelLayoutProps.FocusableConfig`
  Makes the panel content focusable. This should be used if there are no focusable elements
  inside the panel, to ensure it is keyboard scrollable.
  
  Provide either `{ariaLabel: "Panel label"}` or `{ariaLabelledby: "panel-label-id"}`
- **`panelPosition?`**: `PanelLayoutProps.PanelPosition`
  Position of the panel with respect to the main content
- **`panelSize?`**: `number`
  Size of the panel. If provided, and panel is resizable, the component is controlled,
  so you must also provide `onPanelResize`.
  
  The actual size will be constrained by `minPanelSize` and `maxPanelSize`, if set.
- **`resizable?`**: `boolean`
  Indicates whether the panel is resizable.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onLayoutChange?`**: `NonCancelableEventHandler<PanelLayoutProps.PanelResizeDetail>`
  Called when the panel and/or main content size changes. This can be due
  to user resizing or changes to the available space on the page.
- **`onPanelResize?`**: `NonCancelableEventHandler<PanelLayoutProps.PanelResizeDetail>`
  Called when the user resizes the panel.

## Types

Supporting types from `PanelLayoutProps` (verbatim):

```ts
export declare namespace PanelLayoutProps {
  type PanelPosition = 'side-start' | 'side-end';
  type Display = 'all' | 'panel-only' | 'main-only';
  interface PanelResizeDetail {
    totalSize: number;
    panelSize: number;
  }
  interface FocusableConfig {
    ariaLabel?: string;
    ariaLabelledby?: string;
  }
  interface I18nStrings {
    resizeHandleAriaLabel?: string;
    resizeHandleTooltipText?: string;
  }
  interface Ref {
    /**
     * Focuses the resize handle of the panel layout.
     */
    focusResizeHandle(): void;
  }
}
```
