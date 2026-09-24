# Cloudscape component catalog

Use this to pick a component when the request describes what it should do rather than naming it. Each component's folder is `components/<folder>/`, which contains:

- `guidelines.md`: the cloudscape.design page (when to use, dos and don'ts, features, states, writing and accessibility guidelines, testing APIs).
- `examples.md`: the page's named playground examples, when it has any.
- `api.md`: the exact props for the installed package version. Components that live in other packages have the site's `api.json` instead.

For the entries below, the import is `@cloudscape-design/components/<folder>`. The last section lists components from other packages.

## Page layout and structure
| Folder | Use it for |
|---|---|
| `app-layout` | The whole-page shell: navigation drawer, main content, tools/help panel, split panel, notifications, breadcrumbs slot. One per page. |
| `app-layout-toolbar` | App layout variant with a toolbar-style header for drawers and triggers (same slots as `app-layout`). |
| `content-layout` | Page content wrapper with a page-level `header` (usually `<Header variant="h1">`) and optional hero styling. |
| `container` | A bordered panel grouping related content, with its own `header` and `footer`. |
| `column-layout` | Even columns (1–4) for small pieces of content, with optional dividers between them. |
| `grid` | 12-column responsive grid when you need uneven column spans per breakpoint. |
| `space-between` | Consistent spacing between siblings, vertical or horizontal (`size` from `xxxs` to `xxl`). The default way to space things. |
| `box` | Typography and spacing primitive: variants (`h1`–`h5`, `p`, `code`, `small`, `awsui-key-label`…), color, padding, margin, float, text alignment. |
| `divider` | A horizontal separator line. |
| `panel-layout` | Main content plus a resizable side panel inside a region. |
| `split-panel` | Resizable bottom or side panel inside `app-layout`, typically showing details of the selected table row. |
| `drawer` | Side content panel: help, settings, or a detail view. |
| `header` | Section or page titles with `variant` (`h1`, `h2`, `h3`, `awsui-h1-sticky`), `description`, `counter`, `info` link, and `actions`. |

## Navigation
| Folder | Use it for |
|---|---|
| `top-navigation` | Global app header: identity/logo, search, utilities (buttons, menu dropdowns). |
| `side-navigation` | Left-hand navigation tree with sections, links, dividers, and an active link. |
| `breadcrumb-group` | Breadcrumb trail (put it in `app-layout`'s `breadcrumbs` slot). |
| `anchor-navigation` | In-page table of contents that tracks the section being scrolled. |
| `tabs` | Switching between views of the same context. |
| `pagination` | Page numbers for collections (pairs with `table` and `cards`). |
| `link` | Inline or standalone text links, external links, and info links (`variant="info"` opens help). |
| `steps` | Read-only list of steps with status (not interactive; for a multi-page flow use `wizard`). |

## Actions
| Folder | Use it for |
|---|---|
| `button` | Actions. `variant`: `primary` (one per page/section), `normal`, `link`, `icon`, `inline-icon`, `inline-link`. Supports `loading`, `disabled` + `disabledReason`, `href`. |
| `button-dropdown` | A button that opens a menu of actions (items can be grouped, disabled with reasons, or checkbox items). Also has split-button mode (`mainAction`). |
| `button-group` | A compact toolbar of icon buttons, menus, and toggles (e.g. copy, like/dislike). |
| `toggle-button` | A button with a pressed/unpressed state (e.g. favorite). |
| `copy-to-clipboard` | Copy button with success/error popover. |
| `action-card` | A clickable card that performs an action or navigates. |

## Form controls
| Folder | Use it for |
|---|---|
| `form` | Form page wrapper: `header`, `actions` (Cancel/Submit buttons), `errorText`. |
| `form-field` | Label, description, info link, constraint text, error/warning text around any control. Wrap every input in one. |
| `input` | Single-line text, number, email, password, or search input. |
| `textarea` | Multi-line text. |
| `select` | Pick one option from a list (options, groups, filtering, disabled options with reasons). |
| `multiselect` | Pick several options (shows selected tokens). |
| `autosuggest` | Free text with suggestions. |
| `checkbox` | A single on/off choice, or one of several independent choices (supports indeterminate). |
| `toggle` | Instant on/off setting. |
| `radio-group` / `radio-button` | Pick exactly one of a few visible options. |
| `tiles` | Radio choice presented as larger tiles with descriptions/images. |
| `segmented-control` | Switch between 2–5 views or modes. |
| `slider` | Pick a numeric value on a range, with optional reference values/ticks. |
| `date-picker` | Pick one date (calendar dropdown plus typed input). Disabling dates: `isDateEnabled` and `dateDisabledReason`. |
| `date-input` | Typed-only date entry without a calendar. |
| `date-range-picker` | Absolute and/or relative date-time range. |
| `calendar` | Inline calendar (no input), same date-enabling props as `date-picker`. |
| `time-input` | Typed time entry (`hh:mm:ss` formats). |
| `attribute-editor` | Editable list of rows (e.g. key/value pairs, tags) with add/remove. |
| `tag-editor` | Resource tags editor with key/value suggestions and limits. |
| `file-upload` | Choose files and show them as tokens (complete upload control). |
| `file-input` | Just the file-choose button. |
| `file-dropzone` | Drag-and-drop area for files. |
| `file-token-group` | Displays chosen files as dismissible tokens. |
| `code-editor` | Ace-based code editor (needs the `ace` package passed in). |
| `prompt-input` | Chat-style multi-line prompt box with send action. |
| `s3-resource-selector` | AWS-specific S3 bucket/object picker. |

## Collections and data display
| Folder | Use it for |
|---|---|
| `table` | Tabular data: sorting, selection, sticky header, column resizing, inline editing, expandable rows, empty/loading states. Pair with `@cloudscape-design/collection-hooks` `useCollection` for filtering, sorting, and pagination. |
| `cards` | A collection shown as a card grid (same collection features as `table`). |
| `collection-preferences` | Page size, visible columns, wrap lines, and other table/cards preferences modal. |
| `text-filter` | Simple text search over a collection. |
| `property-filter` | Advanced filtering by property/operator/value tokens. |
| `key-value-pairs` | Labeled read-only values (details pages). |
| `list` | A styled list of items, optionally sortable by drag. |
| `tree-view` | Hierarchical, expandable items. |
| `item-card` | A static card presenting one item with header, actions, footer. |
| `token-group` / `token` | Dismissible chips (e.g. selected filters or labels). |
| `badge` | Small status/count label with color. |
| `status-indicator` | Icon plus text for status (`success`, `error`, `warning`, `info`, `stopped`, `pending`, `in-progress`, `loading`). |
| `progress-bar` | Progress of an operation, standalone or in flashbar. |
| `icon` | Built-in icons by `name`, or custom SVG/URL. |
| `truncated-text` | Single-line text that truncates with a tooltip showing the full text. |
| `text-content` | Styles raw HTML typography (`h1`, `p`, `ul`, `code`…) inside it. |

## Feedback and status
| Folder | Use it for |
|---|---|
| `alert` | Inline message in the page flow (`type`: `info`, `success`, `warning`, `error`), dismissible, with action. |
| `flashbar` | Page-level notifications stack (put in `app-layout` `notifications`). |
| `spinner` | Loading indicator. |
| `skeleton` | Placeholder shape while content loads. |
| `live-region` | Announces dynamic content to screen readers. |
| `error-boundary` | Catches render errors and shows a fallback. |

## Overlays
| Folder | Use it for |
|---|---|
| `modal` | Dialog that blocks the page (confirmations, short forms). `footer` usually holds right-aligned buttons. |
| `popover` | Click-triggered small overlay with extra info or actions. |
| `tooltip` | Hover/focus hint anchored to an element. |
| `dropdown` | Low-level overlay anchored to a trigger, for custom menus or panels when no higher-level component fits. You manage keyboard handling and `open` state yourself. |
| `help-panel` | Content for the `app-layout` tools (help) panel. |

## Charts
| Folder | Use it for |
|---|---|
| `line-chart` | Trends over a continuous x axis. |
| `bar-chart` | Comparing categories (vertical/horizontal, stacked/grouped). |
| `area-chart` | Cumulative totals over time. |
| `mixed-line-bar-chart` | Bars and lines on shared axes. |
| `pie-chart-legacy` | Part-to-whole (pie or donut): the `PieChart` in this package (`@cloudscape-design/components/pie-chart`). Its site page is "pie-chart-legacy". |

For chart selection and data-visualization guidance, read `components/charts-legacy/guidelines.md` (the charts in this package), `components/charts/guidelines.md` (the newer Highcharts-based package), and `patterns/general/data-vis.md`.

## Guided experiences
| Folder | Use it for |
|---|---|
| `wizard` | Multi-step create flows with step navigation, review step, and submit. |
| `tutorial-panel` | Hands-on tutorials list and steps (with `annotation-context`). |
| `annotation-context` | Anchors tutorial annotations/hotspots to the UI. |
| `hotspot` | Marks a UI element as a tutorial anchor. |
| `expandable-section` | Collapsible content (`variant`: `default`, `container`, `footer`, `navigation`, `stacked`). |

## Utilities
| Folder | Use it for |
|---|---|
| `icon-provider` | Override built-in icons for a subtree. |
| `navigable-group` | Arrow-key navigation across a group of focusable children. |

## From other Cloudscape packages
These need their own npm package. Check that the project has it installed, or tell the user it's needed.

| Folder | Package | Use it for |
|---|---|---|
| `charts`, `cartesian-chart`, `pie-chart` | `@cloudscape-design/chart-components` | Newer charts built on Highcharts, a commercial library with its own license. `charts/guidelines.md` covers licensing, and `get-started/dev-guides/charts-migration.md` covers moving from the legacy charts. |
| `board-components`, `board`, `board-item`, `items-palette` | `@cloudscape-design/board-components` | Configurable dashboards: users add, move, and resize items. |
| `genai-components`, `chat-bubble`, `avatar`, `loading-bar`, `support-prompt-group` | `@cloudscape-design/chat-components` | Generative-AI chat interfaces. Pair with the `gen-ai/` patterns. |
| `code-view` | `@cloudscape-design/code-view` | Read-only syntax-highlighted code. |
| `dialog` | `@cloudscape-design/components` (newer than the installed version) | Documented on the site but not in the installed package. Upgrade the package to use it, or say it isn't available yet. |

Overview pages without a single component: `collection-select-filter` (select filters for collections), `file-uploading-components` (how the file components fit together), `hands-on-tutorials` (tutorial panel + annotation context).
