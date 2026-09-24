> Index of the Cloudscape documentation in this skill, adapted from https://cloudscape.design/llms.txt (fetched 2026-09-24). Links point to the local copies.

# Cloudscape Design System - Documentation for LLMs

> Cloudscape Design System is an open source design system for the cloud. Cloudscape offers user interface guidelines, front-end components, design resources, and development tools for building intuitive, engaging, and inclusive user experiences at scale.


## Getting started

- Package: `@cloudscape-design/components`
- Install: `npm install @cloudscape-design/components @cloudscape-design/global-styles`
- Global styles: `import "@cloudscape-design/global-styles/index.css";`
- Root wrapper: none required
- Charts: `@cloudscape-design/chart-components`. Basic bar, line and pie charts ship inside the components package.
- Setup pages:
  - [AI Tools Support](get-started/for-developers/ai-tools-support.md): Learn how to use Cloudscape Design System documentation with your AI tools and agents. 
  - [Built-in internationalization](get-started/for-developers/internationalization.md): Learn about internationalization support built into Cloudscape and how to integrate it with your application.
  - [Global styles](get-started/for-developers/global-styles.md): Use the Cloudscape global styles package to apply foundational CSS to pages.
  - [Start developing](get-started/for-developers/start-developing.md): Welcome to Cloudscape. Let’s start building. Here you'll find links to integrate with the system, view patterns and demos to see how the system looks in practice, and links to additional documentation. 
  - [Using Cloudscape components](get-started/for-developers/using-cloudscape-components.md): To use Cloudscape components, first install a set of packages. 

## Get Started

- [Bidirectionality](get-started/dev-guides/bidirectionality.md): Right-to-left development requirements and best practices for building bidirectional interfaces. 
- [Charts migration](get-started/dev-guides/charts-migration.md): Migration instructions from legacy to new Cloudscape charts.
- [Collection hooks package](get-started/dev-guides/collection-hooks.md): Use the Cloudscape collection hooks package to handle data operations in collection components.
- [Content security policy (CSP)](get-started/dev-guides/csp.md): Learn how to configure the CSP of your page with Cloudscape.
- [Design resources](get-started/for-designers/design-resources.md): Streamline your design process with official Cloudscape resources. 
- [Flexible iconography](get-started/dev-guides/flexible-iconography.md): Learn about using custom icons with Cloudscape and how to integrate them in your application.
- [Get started](get-started/index.md): Learn about Cloudscape user interface guidelines, components, design resources, and development tools.
- [Introduction to testing](get-started/testing/introduction.md): You can test your application by interacting with Cloudscape components.
- [Responsive development](get-started/dev-guides/responsive-development.md): Responsive development requirements and best practices for building responsive interfaces.
- [Start designing](get-started/for-designers/start-designing.md): Welcome to Cloudscape. Let’s start building. Here, you'll find links to our design library, visual foundation, and information about our components, patterns, and demos.
- [State management](get-started/dev-guides/state-management.md): How to manage the state of Cloudscape components.
- [Testing classes](get-started/testing/core-classes.md): API documentation for test utilities classes.
- [Testing frameworks integration](get-started/testing/frameworks.md): How to integrate different testing frameworks with Cloudscape components. 
- [Z-index](get-started/dev-guides/z-index.md): How to understand and control element stacking in Cloudscape.

## Components

- [All Components](components/index.md): Components are built with React and implement the design patterns and guidelines of Cloudscape. All components are tested, responsive, and accessible.
- [All Components API](https://cloudscape.design/components/index.html.json): Complete API reference for all components in JSON

- [Action card](components/action-card/guidelines.md) ([API](https://cloudscape.design/components/action-card/index.html.json)): With the action card, you can display a single piece of actionable content in a structured, visual format.
- [Alert](components/alert/guidelines.md) ([API](https://cloudscape.design/components/alert/index.html.json)): A brief message that provides information or instructs users to take a specific action.
- [Anchor navigation](components/anchor-navigation/guidelines.md) ([API](https://cloudscape.design/components/anchor-navigation/index.html.json)): Allows users to quickly jump to specific page content via predefined anchor links.
- [Annotation context](components/annotation-context/guidelines.md) ([API](https://cloudscape.design/components/annotation-context/index.html.json)): The annotation context is an invisible layer on top of the interface. It tracks the progress of a launched tutorial and feeds dynamic content to the Tutorial panel in Hands-on tutorials. It also renders annotation popovers and hotspot icons.  
- [App layout](components/app-layout/guidelines.md) ([API](https://cloudscape.design/components/app-layout/index.html.json)): Provides page structure for general use cases, which offers collapsible side navigation, tools panel, drawers, and split panel.
- [App layout toolbar](components/app-layout-toolbar/guidelines.md) ([API](https://cloudscape.design/components/app-layout-toolbar/index.html.json)): Provides page structure for productive use cases, which offers collapsible side navigation, tools panel, drawers, and split panel, in the form of a toolbar.
- [Area chart](components/area-chart/guidelines.md) ([API](https://cloudscape.design/components/area-chart/index.html.json)): The area chart visualizes two or more series of data. Through stacked data series, it emphasizes the part-to-whole relationship of data over a period of time.
- [Attribute editor](components/attribute-editor/guidelines.md) ([API](https://cloudscape.design/components/attribute-editor/index.html.json)): With the attribute editor, users can create, edit, and delete attributes.
- [Autosuggest](components/autosuggest/guidelines.md) ([API](https://cloudscape.design/components/autosuggest/index.html.json)): Autosuggest enables users to choose from a list of suggestions.
- [Avatar](components/avatar/guidelines.md) ([API](https://cloudscape.design/components/avatar/index.html.json)): Visual representation of a user or generative AI entity.
- [Badge](components/badge/guidelines.md) ([API](https://cloudscape.design/components/badge/index.html.json)): A small, color-coded visual element that contains letters or numbers, that is used to label, categorize, organize, or indicate severity of items.
- [Bar chart](components/bar-chart/guidelines.md) ([API](https://cloudscape.design/components/bar-chart/index.html.json)): Visualizes one or many series of data, with an emphasis on the total amount of each data point.
- [Board](components/board/guidelines.md) ([API](https://cloudscape.design/components/board/index.html.json)): Provides the base for a configurable layout, including drag and drop, responsiveness and grid.
- [Board components](components/board-components/guidelines.md): Made up of three components that work together to allow users to interact with, move, and configure a board layout.
- [Board item](components/board-item/guidelines.md) ([API](https://cloudscape.design/components/board-item/index.html.json)): A board item is a self-contained user interface (UI) element living within a board.
- [Box](components/box/guidelines.md) ([API](https://cloudscape.design/components/box/index.html.json)): With the box component, you can display and style basic elements and containers in compliance with Cloudscape's typography and spacing strategy.
- [Breadcrumb group](components/breadcrumb-group/guidelines.md) ([API](https://cloudscape.design/components/breadcrumb-group/index.html.json)): Displays a series of navigational links in a hierarchical list.
- [Button](components/button/guidelines.md) ([API](https://cloudscape.design/components/button/index.html.json)): Allows users to initiate actions in the user interface.
- [Button dropdown](components/button-dropdown/guidelines.md) ([API](https://cloudscape.design/components/button-dropdown/index.html.json)): With a button dropdown, you can group a set of actions under one button.
- [Button group](components/button-group/guidelines.md) ([API](https://cloudscape.design/components/button-group/index.html.json)): Enable users to perform an action from a group of buttons. 
- [Calendar](components/calendar/guidelines.md) ([API](https://cloudscape.design/components/calendar/index.html.json)): With the calendar component, users can select dates.
- [Cards](components/cards/guidelines.md) ([API](https://cloudscape.design/components/cards/index.html.json)): Represents a collection of items.
- [Cartesian charts](components/cartesian-chart/guidelines.md) ([API](https://cloudscape.design/components/cartesian-chart/index.html.json)): Cartesian charts display information along horizontal and vertical axes to clearly show patterns, comparisons, and relationships between values. It includes line, bar, area, scatter, bubble, and mixed charts.
- [Charts](components/charts/guidelines.md): Charts are a graphic representation of information and quantitative data, built on the Highcharts library, designed to provide a clear and interactive way to convey meaning.
- [Charts (Legacy)](components/charts-legacy/guidelines.md): Charts are a graphic representation of information and quantitative data intended to quickly and clearly convey meaning.
- [Chat bubble](components/chat-bubble/guidelines.md) ([API](https://cloudscape.design/components/chat-bubble/index.html.json)): A visual representation of a chat message.
- [Checkbox](components/checkbox/guidelines.md) ([API](https://cloudscape.design/components/checkbox/index.html.json)): Checkboxes enable users to turn an option on or off.
- [Code editor](components/code-editor/guidelines.md) ([API](https://cloudscape.design/components/code-editor/index.html.json)): With the code editor, users can write and edit code.
- [Code view](components/code-view/guidelines.md) ([API](https://cloudscape.design/components/code-view/index.html.json)): Allow users to read and copy a code snippet.
- [Collection preferences](components/collection-preferences/guidelines.md) ([API](https://cloudscape.design/components/collection-preferences/index.html.json)): With collection preferences, users can manage their display preferences within a collection.
- [Collection select filter](components/collection-select-filter/guidelines.md): A select filter helps users find specific items in a collection by choosing one or two properties.
- [Column layout](components/column-layout/guidelines.md) ([API](https://cloudscape.design/components/column-layout/index.html.json)): Column layout helps you position content in columns.
- [Container](components/container/guidelines.md) ([API](https://cloudscape.design/components/container/index.html.json)): With the container, you can present a group of pieces of content, indicating that the items are related. For example, a table is a type of container.
- [Content layout](components/content-layout/guidelines.md) ([API](https://cloudscape.design/components/content-layout/index.html.json)): Provides page structure for expressive use cases.
- [Copy to clipboard](components/copy-to-clipboard/guidelines.md) ([API](https://cloudscape.design/components/copy-to-clipboard/index.html.json)): With copy to clipboard, users can copy content to their clipboard.
- [Date input](components/date-input/guidelines.md) ([API](https://cloudscape.design/components/date-input/index.html.json)): A form element in which a user can enter a date value.
- [Date picker](components/date-picker/guidelines.md) ([API](https://cloudscape.design/components/date-picker/index.html.json)): With the date picker, users can enter or choose a date value.
- [Date range picker](components/date-range-picker/guidelines.md) ([API](https://cloudscape.design/components/date-range-picker/index.html.json)): With the date range picker, users can specify a date and time range. 
- [Dialog](components/dialog/guidelines.md) ([API](https://cloudscape.design/components/dialog/index.html.json)): With Dialog, you can present a non-modal interaction.
- [Divider](components/divider/guidelines.md) ([API](https://cloudscape.design/components/divider/index.html.json)): A divider to visually separate content.
- [Drawer](components/drawer/guidelines.md) ([API](https://cloudscape.design/components/drawer/index.html.json)): A panel that displays supplementary content on a page, which supports task completion or feature access.
- [Dropdown](components/dropdown/guidelines.md) ([API](https://cloudscape.design/components/dropdown/index.html.json)): Provides an overlay for displaying contextual content relative to a trigger element.
- [Error boundary](components/error-boundary/guidelines.md) ([API](https://cloudscape.design/components/error-boundary/index.html.json)): Rendered around any part of the application to isolate unexpected errors.
- [Expandable section](components/expandable-section/guidelines.md) ([API](https://cloudscape.design/components/expandable-section/index.html.json)): With expandable selection, users can expand or collapse a section.
- [File dropzone](components/file-dropzone/guidelines.md) ([API](https://cloudscape.design/components/file-dropzone/index.html.json)): An area that allows users to drag and drop files.
- [File input](components/file-input/guidelines.md) ([API](https://cloudscape.design/components/file-input/index.html.json)): A trigger that allows users to select one or more files to upload.
- [File token group](components/file-token-group/guidelines.md) ([API](https://cloudscape.design/components/file-token-group/index.html.json)): A collection of uploaded files displayed as tokens.
- [File upload](components/file-upload/guidelines.md) ([API](https://cloudscape.design/components/file-upload/index.html.json)): File upload is a form element. Users can use it to select one or multiple local files to upload. The files can then be uploaded upon form submission or processed further in the browser.
- [File uploading components](components/file-uploading-components/guidelines.md): Components that allow users to upload files.
- [Flashbar](components/flashbar/guidelines.md) ([API](https://cloudscape.design/components/flashbar/index.html.json)): Flashbar - Displays one or more status notifications that communicate critical task operation status — errors, success, in-progress, and info. The info flashbar also announces entire service launch in beta or preview.
- [Form](components/form/guidelines.md) ([API](https://cloudscape.design/components/form/index.html.json)): A section of a page that has interactive controls with which a user can submit information to a web server.
- [Form field](components/form-field/guidelines.md) ([API](https://cloudscape.design/components/form-field/index.html.json)): With the form field, users can create properly-styled controls in a form.
- [Generative AI components](components/genai-components/guidelines.md): Components that help build generative AI experiences.
- [Grid](components/grid/guidelines.md) ([API](https://cloudscape.design/components/grid/index.html.json)): The grid component distributes content on a page.  It helps build consistent, balanced, and responsive layouts across an application. React version difference: In React 18 and earlier, React.Fragment children are broken down into individual grid items. This behavior is now deprecated in React 19 and later.
- [Header](components/header/guidelines.md) ([API](https://cloudscape.design/components/header/index.html.json)): Summarizes the content that's displayed under it and provides a space for optional action buttons. 
- [Help panel](components/help-panel/guidelines.md) ([API](https://cloudscape.design/components/help-panel/index.html.json)): The panel displays help content that relates to a concept, term, setting, option, or task within the main page content.
- [Hotspot](components/hotspot/guidelines.md) ([API](https://cloudscape.design/components/hotspot/index.html.json)): In hands-on tutorials, hotspots are invisible containers that mark the spots where hotspot icons should be placed. Hotspot icons are rendered by the annotation context and are used to open and close annotation popovers.
- [Icon](components/icon/guidelines.md) ([API](https://cloudscape.design/components/icon/index.html.json)): Display basic icons that match with Cloudscape's sizes, colors, and typography.
- [Icon provider](components/icon-provider/guidelines.md) ([API](https://cloudscape.design/components/icon-provider/index.html.json)): With the icon provider component, the built-in icons can be overridden with custom icons.
- [Input](components/input/guidelines.md) ([API](https://cloudscape.design/components/input/index.html.json)): With the input control, users can input a single line of text.
- [Item card](components/item-card/guidelines.md) ([API](https://cloudscape.design/components/item-card/index.html.json)): With the item card, you can display a single piece of content in a structured, visual format.
- [Items palette](components/items-palette/guidelines.md) ([API](https://cloudscape.design/components/items-palette/index.html.json)): Provides the ability to add board items to a board layout when combined with discreet split panel.
- [Key-value pairs](components/key-value-pairs/guidelines.md) ([API](https://cloudscape.design/components/key-value-pairs/index.html.json)): Key-value pairs are lists of properties (labels) followed by their corresponding values.
- [Line chart](components/line-chart/guidelines.md) ([API](https://cloudscape.design/components/line-chart/index.html.json)): Visualizes one or many series of data, with an emphasis on how the data changes over time.
- [Link](components/link/guidelines.md) ([API](https://cloudscape.design/components/link/index.html.json)): A link component is an anchor tag that defines a hyperlink, which a user can interact with to find out more information about a concept, task, or field. 
- [List](components/list/guidelines.md) ([API](https://cloudscape.design/components/list/index.html.json)): A list is a group of consecutive items displayed one below the other.
- [Live region](components/live-region/guidelines.md) ([API](https://cloudscape.design/components/live-region/index.html.json)): A non-visual component used to announce page changes to assistive technology.
- [Loading bar](components/loading-bar/guidelines.md) ([API](https://cloudscape.design/components/loading-bar/index.html.json)): A linear loading indicator that informs the user about an ongoing operation with unknown duration.
- [Mixed line and bar chart](components/mixed-line-bar-chart/guidelines.md) ([API](https://cloudscape.design/components/mixed-line-bar-chart/index.html.json)): Visualizes different, but related, series of data on a single chart.
- [Modal](components/modal/guidelines.md) ([API](https://cloudscape.design/components/modal/index.html.json)): A user interface element subordinate to an application's main window. It prevents interaction with the main page content, but keeps it visible with the modal as a child window in front of it.
- [Multiselect](components/multiselect/guidelines.md) ([API](https://cloudscape.design/components/multiselect/index.html.json)): Multiselects enable users to choose multiple items from a list of options.
- [Navigable group](components/navigable-group/guidelines.md) ([API](https://cloudscape.design/components/navigable-group/index.html.json)): Allows multiple interactive components to be grouped together under a single tab stop for keyboard navigation.
- [Pagination](components/pagination/guidelines.md) ([API](https://cloudscape.design/components/pagination/index.html.json)): Provides horizontal navigation between pages of a collection.
- [Panel layout](components/panel-layout/guidelines.md) ([API](https://cloudscape.design/components/panel-layout/index.html.json)): Allows two panels of content to be displayed side by side.
- [Pie and donut charts](components/pie-chart/guidelines.md) ([API](https://cloudscape.design/components/pie-chart/index.html.json)): Pie and donut charts visualize the relationship or correlation between data metrics in a dataset.
- [Pie and donut charts](components/pie-chart-legacy/guidelines.md) ([API](https://cloudscape.design/components/pie-chart-legacy/index.html.json)): Legacy pie and donut charts visualize the relationship or correlation between data metrics in a dataset.
- [Popover](components/popover/guidelines.md) ([API](https://cloudscape.design/components/popover/index.html.json)): Provides on-demand contextual information about elements or events.
- [Progress bar](components/progress-bar/guidelines.md) ([API](https://cloudscape.design/components/progress-bar/index.html.json)): Informs the user about the progress of an operation with a known duration.
- [Prompt input](components/prompt-input/guidelines.md) ([API](https://cloudscape.design/components/prompt-input/index.html.json)): Enables users to provide a prompt or command.
- [Property filter](components/property-filter/guidelines.md) ([API](https://cloudscape.design/components/property-filter/index.html.json)): With the property filter, users can find specific items in a collection by using properties, property values, typing free text, and combining these with operators.
- [Radio button](components/radio-button/guidelines.md) ([API](https://cloudscape.design/components/radio-button/index.html.json)): Radio buttons enable users to perform a single selection from a predefined set of options.
- [Radio group](components/radio-group/guidelines.md) ([API](https://cloudscape.design/components/radio-group/index.html.json)): Radio group enable users to choose one option from a predefined set.
- [S3 resource selector](components/s3-resource-selector/guidelines.md) ([API](https://cloudscape.design/components/s3-resource-selector/index.html.json)): S3 resource selector is a component that provides the ability to read objects from an S3 bucket, or write objects to an S3 bucket with a prefix. 
- [Segmented control](components/segmented-control/guidelines.md) ([API](https://cloudscape.design/components/segmented-control/index.html.json)): With a segmented control, users can toggle between different ways of formatting a piece of content or data.
- [Select](components/select/guidelines.md) ([API](https://cloudscape.design/components/select/index.html.json)): Selects enable users to choose a single item from a list of items.
- [Side navigation](components/side-navigation/guidelines.md) ([API](https://cloudscape.design/components/side-navigation/index.html.json)): A list of navigational links that point to the pages within an application.
- [Skeleton](components/skeleton/guidelines.md) ([API](https://cloudscape.design/components/skeleton/index.html.json)): A placeholder element giving the user feedback that content is loading.
- [Slider](components/slider/guidelines.md) ([API](https://cloudscape.design/components/slider/index.html.json)): A slider enables users to select a value within a defined range.
- [Space between](components/space-between/guidelines.md) ([API](https://cloudscape.design/components/space-between/index.html.json)): A helper component that helps you add consistent spacing between elements on your page.
- [Spinner](components/spinner/guidelines.md) ([API](https://cloudscape.design/components/spinner/index.html.json)): A compact, looped animation giving the user feedback that a process is currently running.
- [Split panel](components/split-panel/guidelines.md) ([API](https://cloudscape.design/components/split-panel/index.html.json)): A collapsible panel that provides access to secondary information or controls. It is the primary component to implement split view, a pattern to display item collection with contextual item details. 
- [Status indicator](components/status-indicator/guidelines.md) ([API](https://cloudscape.design/components/status-indicator/index.html.json)): A status indicator communicates the state of a resource—either in its entirety or a particular facet of a resource—in a compact form that is easily embedded in a card, table, list, or header view.
- [Steps](components/steps/guidelines.md) ([API](https://cloudscape.design/components/steps/index.html.json)): Display a list of tasks.
- [Support prompt group](components/support-prompt-group/guidelines.md) ([API](https://cloudscape.design/components/support-prompt-group/index.html.json)): Selectable message prompts in generative AI chats that present recommended inputs to the user.
- [Table](components/table/guidelines.md) ([API](https://cloudscape.design/components/table/index.html.json)): Presents data in a two-dimensional table format, arranged in columns and rows in a rectangular form.
- [Tabs](components/tabs/guidelines.md) ([API](https://cloudscape.design/components/tabs/index.html.json)): With tabs, users can switch between different categories of information in the same view.
- [Tag editor](components/tag-editor/guidelines.md) ([API](https://cloudscape.design/components/tag-editor/index.html.json)): An extension of the attribute editor built with integrated logic. With the tag editor, users can create, edit, or delete resource tags.
- [Text area](components/textarea/guidelines.md) ([API](https://cloudscape.design/components/textarea/index.html.json)): A form element that provides a multi-line, plain-text input control.
- [Text content](components/text-content/guidelines.md) ([API](https://cloudscape.design/components/text-content/index.html.json)): Use to style chunks of HTML by applying default typographical styles to the content.
- [Text filter](components/text-filter/guidelines.md) ([API](https://cloudscape.design/components/text-filter/index.html.json)): With a text filter, users can enter text that’s used to match specific items in a collection.
- [Tiles](components/tiles/guidelines.md) ([API](https://cloudscape.design/components/tiles/index.html.json)): Tiles enable users to choose one of a predefined set of options, including additional metadata to facilitate comparisons or progressive disclosure.
- [Time input](components/time-input/guidelines.md) ([API](https://cloudscape.design/components/time-input/index.html.json)): A form element in which a user can enter an absolute time value.
- [Toggle](components/toggle/guidelines.md) ([API](https://cloudscape.design/components/toggle/index.html.json)): Toggles enable users to turn an option on or off, and can result in an immediate change. 
- [Toggle button](components/toggle-button/guidelines.md) ([API](https://cloudscape.design/components/toggle-button/index.html.json)): Enables user to toggle between two actions / states.
- [Token](components/token/guidelines.md) ([API](https://cloudscape.design/components/token/index.html.json)): Tokens are a compact representation of an individual item or data point. 
- [Token group](components/token-group/guidelines.md) ([API](https://cloudscape.design/components/token-group/index.html.json)): A set of compact representations of individual items or data.
- [Tooltip](components/tooltip/guidelines.md) ([API](https://cloudscape.design/components/tooltip/index.html.json)): Displays text when users hover over or focus on an element.
- [Top navigation](components/top-navigation/guidelines.md) ([API](https://cloudscape.design/components/top-navigation/index.html.json)): A global navigation element for applications that is consistent and persists across all application pages.
- [Tree view](components/tree-view/guidelines.md) ([API](https://cloudscape.design/components/tree-view/index.html.json)): A hierarchical list of nested items.
- [Truncated text](components/truncated-text/guidelines.md) ([API](https://cloudscape.design/components/truncated-text/index.html.json)): Displays truncated single-line text with a tooltip showing the full content.
- [Tutorial components](components/hands-on-tutorials/guidelines.md): Hands-on tutorials are made up of three components that communicate and work together to teach users in an interactive way how to use an application. 
- [Tutorial panel](components/tutorial-panel/guidelines.md) ([API](https://cloudscape.design/components/tutorial-panel/index.html.json)): The tutorial panel houses contextual Hands-on tutorials that help users learn how to use an application. 
- [Wizard](components/wizard/guidelines.md) ([API](https://cloudscape.design/components/wizard/index.html.json)): A multi-page form that guides a user through a complex flow or a series of interrelated tasks. A wizard consists of a navigation pane, header, main content area, and action buttons.

Total: 113

## Patterns

- [Actions](patterns/general/actions.md): Ways to invoke actions in the interface.
- [Announcing beta and preview features](patterns/general/announcing-beta-preview-features.md): Communicate to users which features are in beta or preview.
- [Announcing new features](patterns/general/announcing-new-features.md): Communicate new feature releases to users.
- [Attribute editing](patterns/resource-management/edit/attribute-editing.md): Create, edit, and delete resource attributes.
- [Card view](patterns/resource-management/view/card-view.md): A collection of resources represented as cards. It’s effective for glancing at small sets of similar resources with text, numerical, and imagery data sets. 
- [Chart metric drill down](patterns/general/data-vis/chart-metric-drill-down.md): Drill into chart metrics by starting at the highest level of data and then exploring lower levels of data.
- [Communicating unsaved changes](patterns/general/unsaved-changes.md): Communicate to users that unsaved changes on the page will be discarded when users leave a page.
- [Configurable dashboard](patterns/general/service-dashboard/configurable-dashboard.md): Gives control to the user to show/hide, delete, move, change the size of, and add items to a dashboard.
- [Create resource](patterns/resource-management/create.md): With the create new resource pattern, users can create new resources. 
- [Dashboard items](patterns/general/service-dashboard/dashboard-items.md): Dashboard items are self contained UI elements that address specific customer needs, such as navigating to a resource, monitor resources status, or viewing a costs summary.
- [Data visualization](patterns/general/data-vis.md): Data visualization is a graphic representation of information and quantitative data intended to quickly and clearly convey meaning.
- [Defaults](patterns/resource-management/create/defaults.md): Reduce friction during resource creation by applying defaults that are both transparent and useful to the user.
- [Delete patterns](patterns/resource-management/delete.md): With delete patterns, users can delete existing resources. 
- [Delete with additional confirmation](patterns/resource-management/delete/delete-with-additional-confirmation.md): The delete with additional confirmation pattern helps prevent users from performing accidental, high-severity deletions by adding friction during the deletion process. 
- [Delete with simple confirmation ](patterns/resource-management/delete/delete-with-simple-confirmation.md): Provide a layer of confirmation before deleting resources that cannot be easily recreated. 
- [Density settings](patterns/general/density-settings.md): With the density settings pattern, users can define the preferred density level of the content visible within the interface. 
- [Details page](patterns/resource-management/details/details-page.md): On a details page, users can view at a glance all the available information about a single resource.
- [Details page as a hub](patterns/resource-management/details/details-page-as-hub.md): With the  details page as a hub pattern, users can view the details about a resource and a preview of related resources. Use the hub for resources that have large and complex data sets. 
- [Details page with tabs](patterns/resource-management/details/details-page-with-tabs.md): Users can use tabs to view the configuration details of a single resource on a single page. Users can choose each tab on the page to easily switch between different groupings of information in the same view.
- [Disabled and read-only states](patterns/general/disabled-and-read-only-states.md): Use disabled and read-only states to indicate non-interactive elements when users are not permitted to interact with or modify them.
- [Drag-and-drop](patterns/general/drag-and-drop.md): Drag-and-drop enables users to select and manipulate UI elements through moving, reordering, or resizing.
- [Edit resource](patterns/resource-management/edit.md): With the edit resource pattern, users can edit properties and configurations of resources.
- [Empty states](patterns/general/empty-states.md): An empty state occurs when users haven’t created a resource or have deleted all existing resources. A zero results state occurs when users have filtered and there are no matches.
- [Error messages](patterns/general/errors/error-messages.md): Error messages give users context about an inaccuracy, malfunction, unsuccessful action, or critical issue.
- [Errors](patterns/general/errors.md): Errors inform users of an inaccuracy, malfunction, unsuccessful action, or critical issue.
- [Feedback mechanisms](patterns/general/user-feedback.md): Ways to communicate specific messages to a user in an interface.
- [Filter persistence in collection views](patterns/general/filter-patterns/filter-persistence-in-collection-views.md): Persist filters in URLs to enable easy sharing of a collection view.
- [Filtering patterns](patterns/general/filter-patterns.md): Filtering patterns let users find specific items in a collection of resources. Users can filter by exact values or by ﬁnite sets of properties.
- [Global actions](patterns/general/actions/global-actions.md): Use global actions when there’s a single set of actions, or bulk actions, to be taken against any or all resources in a given view or page.
- [Hands-on tutorials](patterns/general/onboarding/hands-on-tutorials.md): Hands-on tutorials provide contextual suggestions at decision points in workflows, and  also clarify all the steps that need to be completed in order to achieve an objective.
- [Help system](patterns/general/help-system.md): The help system pattern allows users to easily and quickly access help within the interface and current workflow. 
- [Hero header](patterns/general/hero-header.md): Showcase key messages and functionality for your application or section of an application in the header of the page.
- [Image magnifier](patterns/general/image-magnifier.md): Enable users to enlarge an image to view additional details.
- [In-context actions](patterns/general/actions/incontext-actions.md): Use in-context actions when there are actions tied to a singular element, resource or container.
- [Inline edit](patterns/resource-management/edit/inline-edit.md): Use inline edit on views where information needs to be updated often, or when you want a user to edit a resource property across multiple resources.
- [Loading and refreshing](patterns/general/loading-and-refreshing.md): Loading and refreshing is used to refresh collections of data in the interface. 
- [Multipage create](patterns/resource-management/create/multi-page-create.md): Use the multipage create, which employs the wizard component, when you want users to create resources by completing a set of interrelated tasks. We recommend multipage create for long or complex configurations.
- [Onboarding ](patterns/general/onboarding.md): The process of getting started with a product or feature. 
- [One-click delete](patterns/resource-management/delete/one-click-delete.md): With the one-click delete pattern, users can quickly delete low-risk, non-critical resources. 
- [Page edit](patterns/resource-management/edit/page-edit.md): Use the page edit pattern when you want users to manage an item by editing its properties and configuration in bulk.
- [Patterns](patterns/index.md): Patterns are reusable combinations of components that solve common user problems, help users achieve their goals, and ensure consistency across experiences.
- [Resource details](patterns/resource-management/details.md): On a resource details page, users can view the details of a resource and, when relevant, any related resources.
- [Saved filter sets](patterns/general/filter-patterns/saved-filter-sets.md): Enable users to save filter configurations as filter sets and quickly apply them in a collection of resources.
- [Secondary panels](patterns/general/secondary-panels.md): Panels that allow users to access features or information that are supportive but not essential to the completion of tasks.
- [Selection in forms](patterns/general/selection.md): Form elements that allow users to select one or more options from a list, or turn on and off an option.
- [Service dashboards](patterns/general/service-dashboard.md): A dashboard page presents at-a-glance information about service and resource status. Users can monitor this information and act upon it quickly.
- [Service navigation](patterns/general/service-navigation.md): Provides a structural view of the service's navigation, and offers globally accessible functionality. 
- [Side navigation](patterns/general/service-navigation/side-navigation.md): Provides a structural view of a services's navigation, allowing users to easily navigate sections and pages within the service.
- [Single page create](patterns/resource-management/create/single-page-create.md): Use single page create if you want your users to create a resource on a single page. This component is optimized for simple to medium-complex forms. 
- [Split view](patterns/resource-management/view/split-view.md): A collection of resources presented as table or cards and paired with a split panel for contextual resource details. It’s effective for quickly browsing or comparing key resource details.
- [Static dashboard](patterns/general/service-dashboard/static-dashboard.md): Identify and structure a predefined and persistent set off items within a dashboard.
- [Sub-resource create](patterns/resource-management/create/sub-resource-create.md): Enables users to create new sub-resources within a single or multipage create.
- [Table view](patterns/resource-management/view/table-view.md): The table view pattern is a collection of resources in a tabular format. It's effective for quickly identifying categories or comparing values in a large text and numerical data set. 
- [Table with grouped resources](patterns/resource-management/view/table-with-grouped-resources.md): Use a table with grouped resources when resources are organized by one or more shared characteristics.
- [Table with nested resources](patterns/resource-management/view/table-with-nested-resources.md): Use a table with nested resources when a data set contains resources organized into parent–child relationships.
- [Timestamps](patterns/general/timestamps.md): Timestamps display the relative or absolute datetime at which an event has occurred or will occur. 
- [Top navigation](patterns/general/service-navigation/top-navigation.md): Top navigation provides global controls that help users use the product or service. It’s comprised of a collection of global functionalities that are separate from the product's structural navigation. 
- [User feedback](patterns/general/collect-user-feedback.md): User feedback enables users to directly and quickly express their thoughts, concerns, and suggestions about the page they are viewing.
- [Validation](patterns/general/errors/validation.md): Help users with error recovery by accurately identifying issues and providing easy identification of incorrect fields for correction.
- [View resources](patterns/resource-management/view.md): With the view resources patterns, users can find and take action on a collection of resources in the most efficient way possible.

## Demos

- [Demos](demos/index.md): A demo is an example of a layout template using components. Use our demos to get a feel for the system, and see what services built with Cloudscape look like. Each demo opens in a new tab.

## Foundations

- [Accessibility](foundation/core-principles/accessibility.md): Cloudscape provides guidelines, patterns, and components to help you create delightful experiences for your users.
- [Bidirectionality](foundation/core-principles/bidirectionality.md): Bidirectional design adjusts the visual presentation and functionality of an interface based on the text direction native to the user’s preferred language. 
- [Building accessible experiences](foundation/core-principles/accessibility/Building-accessible-experiences.md): General principles and guidelines to help build more accessible experiences using Cloudscape. 
- [Colors](foundation/visual-foundation/colors.md): Colors set the emotional tone of a user interface and are a powerful way to establish consistency. Each color, as well as the palette as a whole, has specific usage guidelines and role definitions to meet accessibility requirements. 
- [Content density](foundation/visual-foundation/content-density.md): Content density is defined by the ratio of information visible compared to the space available in the interface.
- [Data visualization colors](foundation/visual-foundation/data-vis-colors.md): Color can be used as a powerful element to augment a chart or other data visualization when applied with a clear sense of purpose. 
- [Design tokens](foundation/visual-foundation/design-tokens.md): A design token is an abstraction of a visual property, such as color, size, or animation.
- [Focus management principles](foundation/core-principles/accessibility/focus-management-principles.md): Learn about principles of accessible focus management, potential challenges and examples. 
- [Foundation](foundation/index.md): Learn about the visual foundation of Cloudscape, and the core principles we include in our designs.
- [Iconography](foundation/visual-foundation/iconography.md): Iconography is a visual language used to represent features, functionality, or content. Icons are intended to be simple visual elements that are recognized and understood immediately.
- [Layout](foundation/visual-foundation/layout.md): Layout refers to the arrangement of elements on the interface to serve a specific purpose. It’s the integration of the spatial and organizational principles of the system that result in a final visual composition.
- [Motion](foundation/visual-foundation/motion.md): Motion helps enhance the user experience by making a user interface both easy to use and more expressive.

- [Responsive design](foundation/core-principles/responsive-design.md): Responsive web design responds to the needs of the users, and the devices they're    using. It also ensures that what you’re building looks good and functions properly,    regardless of use case.
- [Spacing](foundation/visual-foundation/spacing.md): Spacing is used to define paddings and margins of the elements on the interface. Consistent spacing creates predictable layouts, favors visual rhythm and helps you create a clear hierarchy.
- [Theming](foundation/visual-foundation/theming.md): Theming allows for the customization of specific visual attributes across the product interface. 
- [Typography](foundation/visual-foundation/typography.md): With typography, you can organize and style information with purpose. It provides hierarchy and structure, serves as guidance, and has a fundamental impact on the user experience.  
- [Visual context](foundation/visual-foundation/visual-context.md): Visual context helps create a different look and feel for components placed in a specific area.
- [Visual modes](foundation/visual-foundation/visual-modes.md): Visual modes are used to optimize the user interface based on environmental conditions and user preferences. The design system elements are customized with a unique color palette and color contrast to help users complete their tasks in the most efficient way. We support both light and dark modes. 
- [Visual style](foundation/visual-foundation/visual-style.md): Visual style defines how the elements of Cloudscape work together to create a consistent visual aesthetic that reinforces our brand. 

## About

- [About Cloudscape](about/index.md): Cloudscape is an open source design system for building user experiences at scale.
- [Connect](about/connect.md): If you want to go fast, go alone. If you want to go far, go together. Connect with the Cloudscape team through one of the channels below.

## Search

- [Search](https://cloudscape.design/search/)

## Terms

- [Site terms](https://cloudscape.design/terms/)

## Privacy

- [Privacy](https://cloudscape.design/privacy/)

## Github

- [GitHub](https://cloudscape.design/github/)

## Gen Ai

- [About generative AI](gen-ai/index.md): Understand more about generative AI, and our key principles behind its creation in Cloudscape.
- [Agent management](gen-ai/patterns/agent-management.md): A pattern for browsing, enabling, and scoping AI agents available to a user or organization.
- [AI tools](gen-ai/ai-tools.md): Tools and integrations for using the design system with AI agents and assistants.
- [Artifact previews](gen-ai/patterns/artifact-previews.md): How to display AI-generated artifacts in generative AI chat.
- [Colors](gen-ai/foundation/colors.md): Color is one of the most powerful drivers of visual consistency. A shared color set across generative AI experiences helps users identify their context faster and build trust more easily. 
- [Components](gen-ai/components.md): Components designed for building generative AI experiences.
- [Conversational history](gen-ai/patterns/conversational-history.md): A list of historical conversations with Generative AI. 
- [Follow-up questions](gen-ai/patterns/follow-up-questions.md): Ways to request additional information from users to help generate more accurate and relevant responses.
- [Foundation](gen-ai/foundation.md): Visual properties and styling that help users identify generative AI powered features across any experience.
- [Generative AI chat](gen-ai/patterns/generative-ai-chat.md): Generative AI chat is a conversation between a user and a generative AI assistant.
- [Generative AI loading states](gen-ai/patterns/generative-ai-loading-states.md): Ways to communicate to a user that generative AI is in the process of generating or processing a response.
- [Generative AI output label](gen-ai/patterns/generative-ai-output-label.md): A short label to indicate that an output is produced by generative AI.
- [Iconography](gen-ai/foundation/iconography.md): Iconography integrates seamlessly across different components in an interface to inform users about new or enhanced generative AI features, signal generative AI output, or to represent a specific entity. 
- [In-chat context](gen-ai/patterns/in-chat-context.md): This pattern covers ways users provide context to an agent during a chat interaction.
- [In-flow user input](gen-ai/patterns/in-flow-user-input.md): Inline interactions that collect structured input or allow users to review and modify agent-generated output within a generative AI chat.
- [Ingress](gen-ai/patterns/ingress.md): An interactive element such as a button that lets users engage a generative AI-powered feature.
- [LLMs.txt files](gen-ai/ai-tools/llms-txt-files.md): Learn how to use Cloudscape Design System documentation with your AI tools and agents.
- [Pattern abstraction](gen-ai/patterns/pattern-abstraction.md): An abstraction of generative AI patterns. 
- [Patterns](gen-ai/patterns.md): Design patterns for building generative AI user experiences.
- [Progressive steps](gen-ai/patterns/progressive-steps.md): A hierarchical display of information to inform users of the tasks being performed.
- [Response regeneration](gen-ai/patterns/response-regeneration.md): Enables users to generate an alternative response in generative AI chat.
- [Shortcut menus](gen-ai/patterns/shortcut-menus.md): Use shortcut menus to help users modify behavior, add context, and execute quick actions.
- [Support prompts](gen-ai/patterns/support-prompts.md): Prompts in generative AI chats that present recommended inputs to the user
- [Thinking](gen-ai/patterns/thinking.md): A processing state that shows AI's reasoning process and the information it considered before producing a final response.
- [Timeline overview](gen-ai/patterns/timeline-overview.md): A pattern for presenting agent events, actions, and conversation milestones in a chronological timeline view.
- [User authorized actions](gen-ai/patterns/user-authorized-actions.md): Best practices for building experiences where generative AI needs ongoing user authorization to invoke tools or run commands during a session.
- [Variables](gen-ai/patterns/variables.md): A pattern for using variables within structured content such as prompt templates, code snippets, and text with predefined formats.
- [Visual affordance](gen-ai/foundation/visual-affordance.md): Styling and visual properties that can help users identify generative AI powered features across any experience.

## Code Snippets

- [Snippets Index](https://cloudscape.design/snippets-content/index.md): Searchable index of coded UI pattern snippets with source code
- Individual snippet source: `https://cloudscape.design/snippets-content/{snippet-name}.txt`


Generated: 2026-09-24T10:46:18.593Z
