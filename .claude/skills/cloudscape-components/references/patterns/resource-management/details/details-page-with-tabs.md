# Details page with tabs

> Source: https://cloudscape.design/patterns/resource-management/details/details-page-with-tabs/ (fetched 2026-09-24)

Users can use tabs to view the configuration details of a single resource on a single page. Users can choose each tab on the page to easily switch between different groupings of information in the same view.

 [View demo](https://cloudscape.design/examples/react/details-tabs.html)
## Building blocks

A B C D E F G A B C D E F G

#### A. Breadcrumbs

Follow the guidelines for [details page](details-page.md).

#### B. Page title

Follow the guidelines for [details page](details-page.md).

#### C. Global buttons

Follow the guidelines for [details page](details-page.md).

#### D. Details summary container - optional

- Follow the guidelines for [details page](details-page.md)  .
- For a **details page with tabs**   , this section serves as a summary that is always visible when users switch between the tabs.
- Use it to display important information that applies to tasks in all the tabs.

#### E. Tabs

- Use tabs to organize information about the resource into mutually exclusive, meaningful content groups.
- Follow this rule: one tab, one task.
- Use tabs to group similar content.
- Adjust the sections in tabs to fit the content. Content sections in tabs can have diﬀerent lengths.
- Use multiple containers in content sections to further organize content, as needed.
- Arrange the tabs in a logical order: start with the details of the resource, followed by the most frequently accessed information type that supports user tasks.
- Examples of content that can be grouped into sections in a single tab: logs, charts, and data visualization for monitoring, key-value pairs, and descriptions.

#### F. In context buttons - optional

Use when users can perform contextual actions on the page of the tab.

#### G. Side navigation

Follow the guidelines for [details page](details-page.md).

## General guidelines

### Do

- Use tabs only on details pages.
- Use tabs to organize complex or lengthy content and user tasks into independent, self-contained categories.
- Use tabs to organize discrete but related user tasks.

### Don't

- Don't use tabs for hubs, navigation, steps, or containers that link the users to other pages. Instead use the [details page as a hub](details-page-as-hub.md)   pattern.
- Don't use service names as tabs labels (for example: use *Monitoring*   or *Graphs*   instead of *CloudWatch*   ).
- Don't introduce tabs if you can group your content into meaningful sections on a Details page. The number of sections is not an indicator of whether to use tabs.
- Don't use tabs if users need to compare or access information in each tab simultaneously.
- Don't use this pattern if content discoverability is more important than saving space. Prefer a simple [details page](details-page.md)  .
- Don't disable tabs. All content should always be accessible.
- Don't use more than seven tabs.

## Writing guidelines

### General writing guidelines

- Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.
- Use end punctuation, except in [headers](../../../components/header/guidelines.md)   and [buttons](../../../components/button/guidelines.md)   . Don't use exclamation points.
- Use present-tense verbs and active voice.
- Don't use *please*   , *thank you*   , ellipsis ( *...*   ), ampersand ( *&*   ), *e.g.*   , *i.e.*   , or *etc.*   in writing.
- Avoid directional language.  

  - For example: use *previous*     not *above*     , use *following*     not *below*    .
- Use device-independent language.  

  - For example: use *choose*     or *select*     not *click*    .

### Component-specific guidelines

#### Breadcrumbs, buttons and containers

- Follow the guidelines for [details page](details-page.md)  .

#### Tabs

- Follow the general writing guidelines for [tabs](../../../components/tabs/guidelines.md)  .

## Related patterns

### Resource details

On a resource details page, users can view the details of a resource and, when relevant, any related resources.

[View Documentation](../details.md)

### Details page as a hub

With the  details page as a hub pattern, users can view the details about a resource and a preview of related resources. Use the hub for resources that have large and complex data sets.

[View source code](https://github.com/cloudscape-design/demos/tree/main/src/pages/details-hub)

[View Documentation](details-page-as-hub.md)

### Tabs

With tabs, users can switch between different categories of information in the same view.---

[View Documentation](../../../components/tabs/guidelines.md)
