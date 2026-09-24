# Side navigation

> Source: https://cloudscape.design/patterns/general/service-navigation/side-navigation/ (fetched 2026-09-24)

Provides a structural view of a services's navigation, allowing users to easily navigate sections and pages within the service.

## Key UX concepts

### Navigation structure

Organize the side navigation according to the information architecture (IA) of your service, the primary use case of the user, and the user's mental model of involved resources. Within the [side navigation](../../../components/side-navigation/guidelines.md) component are four possible types of information architecture, with various hierarchies. [Breadcrumbs](../../../components/breadcrumb-group/guidelines.md) displayed on each page should reflect the same information architecture as used in the side navigation.

**Note** : A use case not currently supported by this pattern is services organized as service hubs. Typically, these types of services are organized by top-level projects.

### Collapsed vs closed states

In its **expanded state** , the side navigation displays all text and section labels in full. The side navigation supports two alternatives to the expanded state for products where content density is a concern:

- **Closed**   : In this state, the navigation drawer is hidden completely out of view.
- **Collapsed:**   In this state, the navigation reduces to a narrow navigation rail of icons, text labels are surfaced as tooltips. Because labels are hidden by default in the collapsed state, the rail depends on icons that users can recognize or learn easily.

## Simple

The pages are hierarchically all on one level, listed one after another. Dividers may be used to provide additional organization between these links when different sets are fundamentally not related to each other. For example, a set of pages that manage the resources provided by the service, versus a set of pages that provide additional information regarding the general service for example, notifications or additional documentation.

##### Standard navigation

## Simple

- Dashboard
- Storage
- Metrics

- Notifications
- [Support](https://example.com/)

##### Collapsible navigation

## Simple

- Dashboard
- Storage
- Metrics

- Notifications
- [Support](https://example.com/)

- Dashboard
- Storage
- Metrics

- Notifications
- [Support](https://example.com/)

##### Example IA

```
import React, { useState } from 'react';
import Icon from '@cloudscape-design/components/icon';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

import renderSideNavConfigs from './util-layout';

const navItems: SideNavigationProps.Item[] = [
  {
    type: 'link',
    text: 'Dashboard',
    href: '#/page1',
    icon: (
      <Icon
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18">
            <path
              stroke="currentColor"
              d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"
            />
          </svg>
        }
      />
    ),
  },
  {
    type: 'link',
    text: 'Storage',
    href: '#/page2',
    icon: (
      <Icon
        svg={
          <svg viewBox="0 0 16 16" height="16" width="16">
            <path
              className="filled no-stroke"
              fill="currentColor"
              fillRule="evenodd"
              d="M3.3.79C4.54.29 6.2 0 8 0s3.46.29 4.7.79a5 5 0 0 1 1.57.94c.41.39.73.9.73 1.52v9.5a2 2 0 0 1-.73 1.52 5 5 0 0 1-1.57.94c-1.24.5-2.9.79-4.7.79s-3.46-.29-4.7-.79a5 5 0 0 1-1.57-.94A2 2 0 0 1 1 12.75v-9.5c0-.62.32-1.13.73-1.52A5 5 0 0 1 3.3.8m-.8 4.54V8c0 .07.03.22.26.43q.33.33 1.1.64c1.02.41 2.49.68 4.14.68s3.12-.27 4.14-.68q.77-.31 1.1-.64c.23-.21.26-.36.26-.43V5.33a6 6 0 0 1-.8.38c-1.24.5-2.9.79-4.7.79s-3.46-.29-4.7-.79a6 6 0 0 1-.8-.38m11-2.08c0 .07-.03.22-.26.43q-.33.33-1.1.64C11.12 4.73 9.65 5 8 5s-3.12-.27-4.14-.68q-.77-.31-1.1-.64c-.23-.21-.26-.36-.26-.43s.03-.22.26-.43q.33-.33 1.1-.64C4.88 1.77 6.35 1.5 8 1.5s3.12.27 4.14.68q.77.31 1.1.64c.23.21.26.36.26.43m0 6.83a6 6 0 0 1-.8.38c-1.24.5-2.9.79-4.7.79s-3.46-.29-4.7-.79a6 6 0 0 1-.8-.38v2.67c0 .07.03.22.26.43q.33.33 1.1.64c1.02.41 2.49.68 4.14.68s3.12-.27 4.14-.68q.77-.31 1.1-.64c.23-.21.26-.36.26-.43z"
              clipRule="evenodd"
            ></path>
          </svg>
        }
      />
    ),
  },
  {
    type: 'link',
    text: 'Metrics',
    href: '#/page3',
    icon: (
      <Icon
        svg={
          <svg viewBox="0 0 16 16" height="16" width="16">
            <path
              className="filled no-stroke"
              fill="currentColor"
              fillRule="evenodd"
              d="M1 1v11.75C1 13.99 2 15 3.25 15H15v-1.5H3.25a.75.75 0 0 1-.75-.75V1zm13.3 5.01.51-.54-1.1-1.03-.5.55-3.23 3.43-2.27-2.27a1 1 0 0 0-1.42 0L4.22 8.22l-.53.53 1.06 1.06.53-.53L7 7.56l2.29 2.29a1 1 0 0 0 1.43-.03z"
              clipRule="evenodd"
            ></path>
          </svg>
        }
      />
    ),
  },
  { type: 'divider' },
  {
    type: 'link',
    text: 'Notifications',
    href: '#/notifications',
    icon: <Icon name="notification" />,
  },
  {
    type: 'link',
    text: 'Support',
    href: 'https://example.com',
    external: true,
    icon: <Icon name="support" />,
  },
];

export default function SideNavigationSimple() {
  const [activeHref, setActiveHref] = useState('#/page1');
  return renderSideNavConfigs(navItems, activeHref, setActiveHref, { href: '#/', text: 'Simple' });
}
```

#### A. Service homepage

The introduction or home page for a service. This is always the top page of the service's IA.

#### B. Page

Page of a service that is hierarchically on the second level of a service's IA. In the collapsible navigation , each page that has an icon appears in the navigation rail; pages without an icon are hidden.

## Organized with sections

A set of links that are conceptually related to each other can be grouped together under a single section header to provide further organization. The links should have a clear relationship to one another and to the section header. Avoid redundancy by not repeating the title for a link in the section header.

##### Standard navigation

## Service

- Dashboard
- Deployments
- Reports and Analytics
  - Usage
  - Alarms
  - Logs
- Security
  - API Keys
  - Encryption
  - Authentication

##### Collapsible navigation

## Service

- Dashboard
- Deployments
- Reports and Analytics
  - Usage
  - Alarms
  - Logs
- Security
  - API Keys
  - Encryption
  - Authentication

- Dashboard
- Deployments
- Reports and Analytics
  - Usage
  - Alarms
  - Logs
- Security
  - API Keys
  - Encryption
  - Authentication

##### Example IA

```
import React, { useState } from 'react';
import Icon from '@cloudscape-design/components/icon';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

import renderSideNavConfigs from './util-layout';

const navItems: SideNavigationProps.Item[] = [
  {
    type: 'link',
    text: 'Dashboard',
    href: '#/page1',
    icon: (
      <Icon
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18">
            <path
              stroke="currentColor"
              d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"
            />
          </svg>
        }
      />
    ),
  },
  {
    type: 'link',
    text: 'Deployments',
    href: '#/page2',
    icon: (
      <Icon
        svg={
          <svg viewBox="0 0 16 16" height="16" width="16">
            <path
              className="filled no-stroke"
              fill="currentColor"
              d="m8.35.34 6.25 3.25.4.2v8.42l-.4.2-6.25 3.26-.35.18-.35-.18-6.25-3.25-.4-.21V3.8l.4-.21L7.65.34 8 .15zM2.5 11.3l4.75 2.46V7.81L2.5 5.44zM8.75 7.8v5.95l4.75-2.46V5.44zM3.42 4.22 8 6.52l4.58-2.3L8 1.85z"
            ></path>
          </svg>
        }
      />
    ),
  },
  {
    type: 'section',
    text: 'Reports and Analytics',
    items: [
      {
        type: 'link',
        text: 'Usage',
        href: '#/page4',
        icon: (
          <Icon
            svg={
              <svg viewBox="0 0 16 16" height="16" width="16">
                <path
                  className="filled no-stroke"
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1 1v11.75C1 13.99 2 15 3.25 15H15v-1.5H3.25a.75.75 0 0 1-.75-.75V1zm8.5 2.75V3H8v9h1.5V3.75M6 8v4H4.5V8zm7-1.25V6h-1.5v6H13V6.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
          />
        ),
      },
      {
        type: 'link',
        text: 'Alarms',
        href: '#/page5',
        icon: <Icon name="status-warning" />,
      },
      {
        type: 'link',
        text: 'Logs',
        href: '#/page6',
        icon: <Icon name="list-view" />,
      },
    ],
  },
  {
    type: 'section',
    text: 'Security',
    items: [
      {
        type: 'link',
        text: 'API Keys',
        href: '#/page7',
        icon: <Icon name="key" />,
      },
      {
        type: 'link',
        text: 'Encryption',
        href: '#/page8',
        icon: <Icon name="lock-private" />,
      },
      {
        type: 'link',
        text: 'Authentication',
        href: '#/page9',
        icon: <Icon name="user-profile" />,
      },
    ],
  },
];

export default function SideNavigationExpandableSections() {
  const [activeHref, setActiveHref] = useState('#/page1');
  return renderSideNavConfigs(navItems, activeHref, setActiveHref, { href: '#/', text: 'Service' });
}
```

#### A. Service homepage

The introduction or home page for a service. This is always the top page of the service's IA.

#### B. Page

Page of a service that is hierarchically on the second level of a service's IA. In the collapsible navigation , each page that has an icon appears in the navigation rail; pages without an icon are hidden.

#### C. Section header

Group header title, with related pages below. A section header is not a link but provides a label for the section. In the collapsible navigation, section headers are hidden and the section's child pages appear as a flat list of icons.

### Corresponding with breadcrumbs - optional

Section headers may be included within the breadcrumbs as a prefix to the breadcrumb item for the current page, separated by a colon. We recommend this when the additional context will help users maintain the mental model of the service's IA and resources.

## Organized with group sections

A set of links that are conceptually related to each other can be grouped together under a single section group to provide further organization. You can nest expandable sections, link groups, and expandable link groups within a section group depending on you IA needs.

##### Standard navigation

## Service

- Dashboard
- Distributions

- ### Reports and analytics

  - Cache statistics
  - Monitoring and alarms
  - Popular objects
  - Security
    - Origin access identity
    - Public key
    - Field-level encryption

- Settings

##### Example IA

```
import { useState } from 'react';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

import renderSideNavConfigs from './util-layout';

const navItems: SideNavigationProps.Item[] = [
  {
    type: 'link',
    text: 'Dashboard',
    href: '#/page1',
  },
  {
    type: 'link',
    text: 'Distributions',
    href: '#/page2',
  },
  { type: 'divider' },
  {
    type: 'section-group',
    title: 'Reports and analytics',
    items: [
      {
        type: 'link',
        text: 'Cache statistics',
        href: '#/page3',
      },
      {
        type: 'link',
        text: 'Monitoring and alarms',
        href: '#/page4',
      },
      {
        type: 'link',
        text: 'Popular objects',
        href: '#/page5',
      },
      {
        type: 'section',
        text: 'Security',
        items: [
          {
            type: 'link',
            text: 'Origin access identity',
            href: '#/page6',
          },
          {
            type: 'link',
            text: 'Public key',
            href: '#/page7',
          },
          {
            type: 'link',
            text: 'Field-level encryption',
            href: '#/page8',
          },
        ],
      },
    ],
  },
  { type: 'divider' },
  {
    type: 'link',
    text: 'Settings',
    href: '#/page9',
  },
];

export default function SideNavigationOrganizedWithNestedGroups() {
  const [activeHref, setActiveHref] = useState('#/page5');
  return renderSideNavConfigs(
    navItems,
    activeHref,
    setActiveHref,
    { href: '#/', text: 'Service' },
    { hideCollapsible: true }
  );
}
```

#### A. Service homepage

The introduction or home page for a service. This is always the top page of the service's IA.

#### B. Page

Page of a service that is hierarchically on the second level of a service's IA.

#### C. Section header

Group header title, with related pages below. A section header is not a link but provides a label for the section. In the collapsible navigation, section headers are hidden and the section's child pages appear as a flat list of icons.

### Corresponding with breadcrumbs - optional

Section group headers may be included within the breadcrumbs as a prefix to the breadcrumb item for the current page, separated by a colon. We recommend this when the additional context will help users maintain the mental model of the service's IA and resources.

## Nesting with expandable link groups

This structure supports a primary and secondary level to allow nesting of child pages. We recommend child pages be hidden unless the section has an active link (on the parent or any child pages) or the user has expanded the section into view.

When there are three or more levels of hierarchy with in the service's IA, the user may navigate to them via links and actions embedded within the first and second level pages. The breadcrumbs will then become the method for the user to understand where they are and how to get back. If this strategy is not optimal, consider restructuring the IA. Keeping the navigation shallow helps surface functionality to users faster and helps them keep a mental model of the service.

##### Standard navigation

## Service

- Home
- Deployments
- Projects
  - Project 1
  - Project 2
  - Project 3
- Groups
  - My team
  - My org
  - My company

- [Help and support](https://example.com/)
- Feedback

##### Collapsible navigation

## Service

- Home
- Deployments
- Projects
  - Project 1
  - Project 2
  - Project 3
- Groups
  - My team
  - My org
  - My company

- [Help and support](https://example.com/)
- Feedback

- Home
- Deployments
- Projects
  - Project 1
  - Project 2
  - Project 3
- Groups
  - My team
  - My org
  - My company

- [Help and support](https://example.com/)
- Feedback

##### Example IA

```
import React, { useState } from 'react';
import Icon from '@cloudscape-design/components/icon';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

import renderSideNavConfigs from './util-layout';

const navItems: SideNavigationProps.Item[] = [
  {
    type: 'link',
    text: 'Home',
    href: '#/page1',
    icon: (
      <Icon
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
          >
            <path d="M1.75 6.75 L8 1.5 L14.25 6.75 V13.5 A1 1 0 0 1 13.25 14.5 H2.75 A1 1 0 0 1 1.75 13.5 Z" />
            <path d="M5.75 14.5 V9.5 H10.25 V14.5" />
          </svg>
        }
      />
    ),
  },
  {
    type: 'link',
    text: 'Deployments',
    href: '#/page2',
    icon: (
      <Icon
        svg={
          <svg viewBox="0 0 16 16" height="16" width="16">
            <path
              className="filled no-stroke"
              fill="currentColor"
              d="m8.35.34 6.25 3.25.4.2v8.42l-.4.2-6.25 3.26-.35.18-.35-.18-6.25-3.25-.4-.21V3.8l.4-.21L7.65.34 8 .15zM2.5 11.3l4.75 2.46V7.81L2.5 5.44zM8.75 7.8v5.95l4.75-2.46V5.44zM3.42 4.22 8 6.52l4.58-2.3L8 1.85z"
            ></path>
          </svg>
        }
      />
    ),
  },
  {
    type: 'expandable-link-group',
    text: 'Projects',
    href: '#/group1',
    icon: <Icon name="grid-view" />,
    defaultExpanded: true,
    items: [
      {
        type: 'link',
        text: 'Project 1',
        href: '#/page4',
      },
      {
        type: 'link',
        text: 'Project 2',
        href: '#/page5',
      },
      {
        type: 'link',
        text: 'Project 3',
        href: '#/page6',
      },
    ],
  },
  {
    type: 'expandable-link-group',
    text: 'Groups',
    href: '#/group2',
    icon: <Icon name="group" />,
    defaultExpanded: true,
    items: [
      {
        type: 'link',
        text: 'My team',
        href: '#/page7',
      },
      {
        type: 'link',
        text: 'My org',
        href: '#/page8',
      },
      {
        type: 'link',
        text: 'My company',
        href: '#/page9',
      },
    ],
  },
  { type: 'divider' },
  {
    type: 'link',
    text: 'Help and support',
    href: 'https://example.com',
    external: true,
    icon: <Icon name="support" />,
  },
  {
    type: 'link',
    text: 'Feedback',
    href: '#/notifications',
    icon: <Icon name="contact" />,
  },
];

export default function SideNavigationELGs() {
  const [activeHref, setActiveHref] = useState('#/page1');
  return renderSideNavConfigs(navItems, activeHref, setActiveHref, { href: '#/', text: 'Service' });
}
```

#### A. Service homepage

The introduction or home page for a service. This is always the top page of the service's IA.

#### B. Parent page

Page that has children pages directly related to it.

#### C. Child page

Page that is hierarchically on the third level of a service's IA, and one level below a parent page.

### Corresponding with breadcrumbs

Child pages are listed as a separate breadcrumb item to the parent page that it is secondary to.

## Link groups for large resource details

Some services may contain resources that are too large or complex to use the [details page with tabs](../../resource-management/details/details-page-with-tabs.md) or [detail pages as a hub](../../resource-management/details/details-page-as-hub.md) structures, and must split it into multiple pages to manage the resource. In this case, a link group may be used to organize the resource detail pages.

After an existing resource has been selected from a collection via a [view resource page](../../resource-management/view.md) (E), the links for the selected [resource's detail pages](../../resource-management/details.md) (F) appear nested below the overarching view resource page. The landing page for the specific resource should be listed as the first link of the nested link group. We recommend that all primary actions and information relevant to the resource be made available on the first (and landing) detail page for the resource.

##### Standard navigation

## Service

- Dashboard
- Data sources
  - Data summary
  - Target distributions
  - Missing values
  - Attributes
- ML models
- Evaluations
- Batch predictions

##### Example IA

```
import { useState } from 'react';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

import renderSideNavConfigs from './util-layout';

const navItems: SideNavigationProps.Item[] = [
  {
    type: 'link',
    text: 'Dashboard',
    href: '#/page1',
  },
  {
    type: 'expandable-link-group',
    text: 'Data sources',
    href: '#/group1',
    defaultExpanded: true,
    items: [
      {
        type: 'link',
        text: 'Data summary',
        href: '#/page2',
      },
      {
        type: 'link',
        text: 'Target distributions',
        href: '#/page3',
      },
      {
        type: 'link',
        text: 'Missing values',
        href: '#/page4',
      },
      {
        type: 'link',
        text: 'Attributes',
        href: '#/page5',
      },
    ],
  },
  {
    type: 'link',
    text: 'ML models',
    href: '#/page6',
  },
  {
    type: 'link',
    text: 'Evaluations',
    href: '#/page7',
  },
  {
    type: 'link',
    text: 'Batch predictions',
    href: '#/page8',
  },
];

export default function SideNavigationLargeResourceLinkGroups() {
  const [activeHref, setActiveHref] = useState('#/page2');
  return renderSideNavConfigs(
    navItems,
    activeHref,
    setActiveHref,
    { href: '#/', text: 'Service' },
    {
      hideCollapsible: true,
      moreResourcesHrefs: ['#/group1'],
    }
  );
}
```

#### A. Service homepage

The introduction or home page for a service. This is always the top page of the service's IA.

#### B. View resource page for large resources

The view resource page that becomes the parent page for a group of [resource detail pages](../../resource-management/details.md) utilized for a single existing resource.

#### C. Resource detail page

A resource detail page for a large resource with multiple detail pages. These sets of detail pages only appear in the side navigation once a specific resource has been selected.

### Corresponding with breadcrumbs

The name of the selected resource is included as a prefix to the breadcrumb item for the current page, separated by a colon.

## Service identity

The service identity tells the user which service they're using. Always link it to the homepage of your particular service, so users can learn more about it. The service identity is always displayed at the top page of the service's IA.

You may choose to use a logo in the navigation, in order to provide additional brand awareness. Logos can be used together with the service name, or separately.

## General guidelines

### Do

- Organize the side navigation to best support the user's primary use cases and the mental model for the involved resources rather than treating the navigation as a site map. Avoid including links for pages which are best intended to be accessed inline a page, such as: [create resource](../../resource-management/create.md)   flows, [edit resource](../../resource-management/edit.md)   flows, and [view resource](../../resource-management/view.md)   pages accessed from another [details page as a hub](../../resource-management/details/details-page-as-hub.md)  .
- Keep groupings to a minimum when organizing the side navigation with sections or expandable link groups.
- Organize and order your links from general to specific, in order of usefulness, relevance, or frequency of use.
- Use dividers sparingly to separate sets of links that are fundamentally not related to each other.
- Keep the name of the items within the side navigation consistent with the breadcrumb items.
- By default side navigation is closed on [create resource](../../resource-management/create.md)   and [edit resource](../../resource-management/edit.md)   pages. It is open on all other pages.
- Keep the side navigation open by default for returning users.
- Always ensure one link in the side navigation is active. If the user is on a [resource details](../../resource-management/details.md)   page, the resources type link should be active.   For example,* *   when on *Service > Distributions > SLCCSMWOHOFUY0, Distributions*   should be highlighted in the side navigation.
- In a collapsible navigation, a   pply icons consistently at one level of the navigation: give every sibling in that level an icon. For example, all parent pages, or all children of a section.
- Choose icons that are easily recognizable and distinct from one another so users can tell destinations apart without labels.

### Don't

- Avoid using sections and expandable link groups in the same side navigation.
- Avoid sections with only two links.
- Don't use badges with section headers or for labeling links with static messages. For example: *Preview*   , *New*   , or *Beta*   . Badges may be used to surface actionable areas to a page.
- When opening a [resource details](../../resource-management/details.md)   page, don't add a new item to the side navigation.
- Don't use the collapsible navigation pattern with overly complex navigations such as the link groups for large resources pattern. Especially if the deep links are contextual and transient, making them difficult to learn or completely hidden when collapsed.
- Don't offer a navigation rail for occasional-use services, or where destinations can't be clearly represented by icons.

## Related patterns

### Side navigation

A list of navigational links that point to the pages within an application.

[View Documentation](side-navigation.md)

### Breadcrumb group

Displays a series of navigational links in a hierarchical list.

[View Documentation](../../../components/breadcrumb-group/guidelines.md)

### Resource details

On a resource details page, users can view the details of a resource and, when relevant, any related resources.

[View Documentation](../../resource-management/details.md)

### View resources

With the view resources patterns, users can find and take action on a collection of resources in the most efficient way possible.---

[View Documentation](../../resource-management/view.md)
