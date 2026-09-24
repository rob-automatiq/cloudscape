# AppLayoutToolbar

```ts
import AppLayoutToolbar from '@cloudscape-design/components/app-layout-toolbar'
import type { AppLayoutToolbarProps } from '@cloudscape-design/components/app-layout-toolbar'
```

Generated from `@cloudscape-design/components@3.0.1382` `app-layout-toolbar/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`activeDrawerId?`**: `string | null`
  The active drawer id. If you want to clear the active drawer, use `null`.
- **`analyticsMetadata?`**: `AppLayoutProps.AnalyticsMetadata`
  Specifies additional analytics-related metadata.
  * `instanceIdentifier` - A unique string that identifies this component instance in your application.
  * `flowType` -  Identifies the type of flow represented by the component.
  **Note:** This API is currently experimental.
- **`ariaLabels?`**: `AppLayoutProps.Labels` _(@i18n)_
  Aria labels for the drawer operating buttons. Use this property to ensure accessibility.
  
  * `navigation` (string) - Label for the landmark that wraps the navigation drawer.
  * `navigationClose` (string) - Label for the button that closes the navigation drawer.
  * `navigationToggle` (string) - Label for the button that opens the navigation drawer.
  * `notification` (string) - Label for the region that contains notification messages.
  * `tools` (string) - Label for the landmark that wraps the tools drawer.
  * `toolsClose` (string) - Label for the button that closes the tools drawer.
  * `toolsToggle` (string) - Label for the button that opens the tools drawer.
  * `drawers` (string) - Label for the landmark that wraps the active drawer.
  * `drawersOverflow` (string) - Label for the ellipsis button with any overflow drawers.
  * `drawersOverflowWithBadge` (string) - Label for the ellipsis button with any overflow drawers, with a badge.
  
  Example:
  ```
  {
    navigation: "Navigation drawer",
    navigationClose: "Close navigation drawer",
    navigationToggle: "Open navigation drawer",
    notifications: "Notifications",
    tools: "Help panel",
    toolsClose: "Close help panel",
    toolsToggle: "Open help panel",
    drawers: "Drawers",
    drawersOverflow: "Overflow drawers",
    drawersOverflowWithBadge: "Overflow drawers (Unread notifications)"
  }
  ```
- **`breadcrumbs?`**: `React.ReactNode`
  Use this slot to add the [breadcrumb group component](/components/breadcrumb-group/) to the app layout.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`content?`**: `React.ReactNode`
  Main content.
- **`contentHeader?`**: `React.ReactNode` _(@deprecated Replaced by the `header` slot of the [content layout](/components/content-layout/) component.)_
  Top area of the page content.
- **`contentType?`**: `AppLayoutProps.ContentType`
  Determines the default behavior of the component based on some predefined page layouts.
  Individual properties will always take precedence over the default coming from the content type.
- **`disableContentHeaderOverlap?`**: `boolean` _(@deprecated Replaced by the `disableOverlap` property of the [content layout](/components/content-layout/) component.)_
  Disables overlap between `contentHeader` and `content` slots.
- **`disableContentPaddings?`**: `boolean`
  If `true`, disables outer paddings for the content slot.
- **`drawers?`**: `Array<AppLayoutToolbarProps.Drawer>`
  Drawers property. If you set both `drawers` and `tools`, `drawers` will take precedence.
    Each Drawer is an item in the drawers wrapper with the following properties:
  * id (string) - the id of the drawer.
  * content (React.ReactNode) - the content in the drawer.
  * trigger (DrawerTrigger) - (Optional) the button that opens and closes the active drawer.
  If not set, a corresponding trigger button is not displayed, while the drawer might be displayed, but opened using a custom trigger.
  * ariaLabels (DrawerAriaLabels) - the labels for the interactive elements of the drawer.
  * badge (boolean) - (Optional) Adds a badge to the corner of the icon to indicate a state change. For example: Unread notifications.
  * resizable (boolean) - (Optional) if the drawer is resizable or not.
  * defaultSize (number) - (Optional) starting size of the drawer. if not set, defaults to 290.
  * onResize (({ size: number }) => void) - (Optional) Fired when the active drawer is resized.
  
  #### DrawerTrigger
  - `iconName` (IconProps.Name) - (Optional) Specifies the icon to be displayed.
  - `iconSvg` (React.ReactNode) - (Optional) Specifies the SVG of a custom icon. For more information, see [SVG icon guidelines](/components/icon/?tabId=api#slots)
  
  #### DrawerAriaLabels
  - `drawerName` (string) - Label for the drawer itself, and for the drawer trigger button tooltip text.
  - `closeButton` (string) - (Optional) Label for the close button.
  - `triggerButton` (string) - (Optional) Label for the trigger button.
  - `resizeHandle` (string) - (Optional) Label for the resize handle.
- **`footerSelector?`**: `string`
  CSS selector for the application footer.
- **`headerSelector?`**: `string`
  CSS selector for the application header.
- **`headerVariant?`**: `'default' | 'high-contrast'`
  Determines the visual treatment for the breadcrumbs and notifications slots. Specifically:
  * `default` - Does not apply any visual treatment.
  * `high-contrast` - Applies high-contrast to both slots. Use in conjunction with `headerVariant="high-contrast"` in ContentLayout.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`maxContentWidth?`**: `number`
  Maximum main content panel width in pixels.
  
  If set to `Number.MAX_VALUE`, the main content panel will occupy the full available width.
- **`minContentWidth?`**: `number`
  Minimum main content panel width in pixels.
- **`navigation?`**: `React.ReactNode`
  Navigation drawer.
- **`navigationCloseBehavior?`**: `'collapse' | 'hide'`
  Determines whether the navigation panel collapses or hides completely when closed.
  Defaults to `hide` if not specified.
  
  When set to `collapse`, closing the navigation shows a collapsed icon-only navigation rail
  at `navigationCollapsedWidth` instead of hiding the panel. Use it together with the
  `collapsed` property of the side navigation component. On mobile viewports the rail
  is not available and the closed navigation is completely hidden.
- **`navigationCollapsedWidth?`**: `number`
  Width of the collapsed navigation rail in pixels.
  Only applies when `navigationCloseBehavior` is `collapse` and `navigationOpen` is `false`.
- **`navigationHide?`**: `boolean`
  If `true`, the navigation drawer is not displayed at all.
- **`navigationOpen?`**: `boolean`
  State of the navigation drawer.
- **`navigationTriggerHide?`**: `boolean`
  If `true`, the navigation trigger is not displayed at all,
  while navigation drawer might be displayed, but opened using a custom trigger.
- **`navigationWidth?`**: `number`
  Navigation drawer width in pixels.
- **`notifications?`**: `React.ReactNode`
  Displayed on top of the main content in the scrollable area.
  
  Conceived to contain notifications (flash messages).
- **`splitPanel?`**: `React.ReactNode`
  Use this slot to add the [split panel component](/components/split-panel/) to the app layout.
  
  Note: If provided, this property should be set to `null` or `undefined` if a split panel should not be rendered.
- **`splitPanelOpen?`**: `boolean`
  State of the split panel.
- **`splitPanelPreferences?`**: `AppLayoutProps.SplitPanelPreferences`
  Controls the split panel preferences.
  
  By default, the preference is `{ position: 'bottom' }`.
  
  On smaller screens, the panel is forced to the `'bottom'` position and the `'side'` preference becomes disabled.
- **`splitPanelSize?`**: `number`
  The size of the split panel in pixels.
- **`stickyNotifications?`**: `boolean`
  If true, the notification slot is rendered above the scrollable
  content area so it is always visible.
- **`tools?`**: `React.ReactNode`
  Tools drawer.
- **`toolsHide?`**: `boolean`
  If `true`, the tools drawer is not displayed at all.
- **`toolsOpen?`**: `boolean`
  State of the tools drawer.
- **`toolsWidth?`**: `number`
  Tools drawer width in pixels.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onDrawerChange?`**: `NonCancelableEventHandler<AppLayoutProps.DrawerChangeDetail>`
  Fired when the active drawer is toggled.
- **`onNavigationChange?`**: `NonCancelableEventHandler<AppLayoutProps.ChangeDetail>`
  Fired when the navigation drawer is toggled.
- **`onSplitPanelPreferencesChange?`**: `NonCancelableEventHandler<AppLayoutProps.SplitPanelPreferences>`
  Fired when the split panel preferences change.
- **`onSplitPanelResize?`**: `NonCancelableEventHandler<AppLayoutProps.SplitPanelResizeDetail>`
  Fired when the split panel is resized.
- **`onSplitPanelToggle?`**: `NonCancelableEventHandler<AppLayoutProps.ChangeDetail>`
  Fired when the split panel is toggled.
- **`onToolsChange?`**: `NonCancelableEventHandler<AppLayoutProps.ChangeDetail>`
  Fired when the tools drawer is toggled.

## Types

Supporting types from `AppLayoutToolbarProps` (verbatim):

```ts
export declare namespace AppLayoutToolbarProps {
  type AnalyticsMetadata = AppLayoutProps.AnalyticsMetadata;
  type ContentType = AppLayoutProps.ContentType;
  interface Ref extends AppLayoutProps.Ref {
    /**
     * Focuses the navigation. Use this to focus the navigation after opening it programmatically.
     */
    focusNavigation(): void;
  }
  type Drawer = AppLayoutProps.Drawer;
  type DrawerAriaLabels = AppLayoutProps.DrawerAriaLabels;
  type Labels = AppLayoutProps.Labels;
  type ChangeDetail = AppLayoutProps.ChangeDetail;
  type SplitPanelResizeDetail = AppLayoutProps.SplitPanelResizeDetail;
  type SplitPanelPreferences = AppLayoutProps.SplitPanelPreferences;
  type SplitPanelPosition = AppLayoutProps.SplitPanelPosition;
  type DrawerChangeDetail = AppLayoutProps.DrawerChangeDetail;
}
```
