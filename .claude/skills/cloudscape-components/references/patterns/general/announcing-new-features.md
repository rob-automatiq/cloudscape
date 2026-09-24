# Announcing new features

> Source: https://cloudscape.design/patterns/general/announcing-new-features/ (fetched 2026-09-24)

Communicate new feature releases to users.

 [View demo](https://cloudscape.design/examples/react/dashboard.html?awsui-density=comfortable)
## Key UX concepts

### Minimize task operation interruption

To earn users' trust and maintain operational focus and reduce cognitive load, flashbars are reserved for status notification and launching brand new services in beta and preview. This ensures customers maintain uninterrupted focus on their workflows and task completion.

### Deliver concise information

To reduce cognitive load and respect users time, feature explanations should be brief and focused on users benefits. Provide essential information paired with a "Learn more" link to comprehensive documentation, empowering users to decide when deeper learning aligns with their workflow priorities.

### Provide contextual communication

Surfacing feature notifications on pages with relevant capabilities ensures customers discover new features at the moment of need, drives adoption, and maintains operational focus. Customers benefit from new capabilities without workflow disruption.

## Building blocks

### Feature notification panel and prompt

A B C D
#### A. Feature notification button

A feature notification button expands the notification panel with relevant released feature(s) on a service page. An indicator signals unread released feature(s) requiring customer attention.

#### B. Feature prompt

A popover displayed next to the feature notification button opens by default when customers land on a service page with new or latest unread feature(s). When multiple released features exist, the feature prompt displays the most recent feature.

#### C. "Latest released features" panel

A right-side drawer allows users to discover the latest released feature(s) for a service.

#### D. Feature discovery page - optional

A page where users can discover and view all released features of a service regardless of time, when "Latest released features" panel aims to help customer focus on latest released features.

#### Implementation

To implement feature notifications on a page using the AppLayoutToolbar component, use the plugin API. For reference, see the [plugin API source](https://github.com/cloudscape-design/components/blob/main/src/plugins/index.ts#L11).

### Inline indication

For feature releases that add a new element to an existing page or introduce new functionality to a page element (such as adding a new widget to a dashboard), add an inline indication to highlight it. Because users encounter these features during specific workflows, the indicators should be subtle to minimize distractions. Indicate that a form element is new by adding "-new" to labels, headings, or group items (such as an individual radio button in a [radio group](../../components/radio-group/guidelines.md) ).

Use inline help content to explain or describe the feature. If a content ramp with the [help panel](../../components/help-panel/guidelines.md) cannot be implemented, standalone learn more links may be used as a fallback and should be placed after descriptions. Do not add popovers for inline indication, as they can create double-click targets or conflict with info links. Some new features, such as a new option within a select component, might not be immediately noticeable. To bring attention to these hidden features, leverage the "Latest released features" panel.

### New form field

## Distribution content delivery

Bucket Region - *new*
```
import React, { useState } from 'react';

import { Container, FormField, Header, Input, SpaceBetween } from '@cloudscape-design/components';

export default function NewFeatureFormField() {
  const [bucketValue, setBucketValue] = useState('');
  const [regionValue, setRegionValue] = useState('');
  return (
    <Container header={<Header variant="h2">Distribution content delivery</Header>}>
      <SpaceBetween size="m">
        <FormField label="Bucket">
          <Input value={bucketValue} onChange={event => setBucketValue(event.detail.value)} />
        </FormField>
        <FormField
          label={
            <>
              Region - <em>new</em>
            </>
          }
        >
          <Input value={regionValue} onChange={event => setRegionValue(event.detail.value)} />
        </FormField>
      </SpaceBetween>
    </Container>
  );
}
```

### New key-value pair

## Service overview

Running instances 14 Volumes 126 Security groups - *new* 116 Load balancers 28
```
import React from 'react';

import { Container, Header, KeyValuePairs, Link } from '@cloudscape-design/components';

export default function NewFeatureKeyValuePairs() {
  return (
    <Container header={<Header variant="h2">Service overview</Header>}>
      <KeyValuePairs
        columns={4}
        items={[
          {
            label: 'Running instances',
            value: (
              <Link variant="awsui-value-large" href="#" ariaLabel="Running instances (14)">
                14
              </Link>
            ),
          },
          {
            label: 'Volumes',
            value: (
              <Link variant="awsui-value-large" href="#" ariaLabel="Volumes (126)">
                126
              </Link>
            ),
          },
          {
            label: (
              
                Security groups - <em>new</em>
              
            ),
            value: (
              <Link variant="awsui-value-large" href="#" ariaLabel="Security groups (116)">
                116
              </Link>
            ),
          },
          {
            label: 'Load balancers',
            value: (
              <Link variant="awsui-value-large" href="#" ariaLabel="Load balancers (28)">
                28
              </Link>
            ),
          },
        ]}
      />
    </Container>
  );
}
```

### New tab

- Details
- Permissions
- Monitoring - *new*

Distribution details
```
import React from 'react';

import { Tabs } from '@cloudscape-design/components';

export default function NewFeatureTabs() {
  return (
    <Tabs
      tabs={[
        { label: 'Details', id: 'details', content: 'Distribution details' },
        { label: 'Permissions', id: 'permissions', content: 'Distribution permissions' },
        {
          label: (
            <>
              Monitoring - <em>new</em>
            </>
          ),
          id: 'monitoring',
          content: 'Distribution monitoring',
        },
      ]}
    />
  );
}
```

### New table column



| Distribution ID | Domain name | Region - new |
| --- | --- | --- |
| D1 | example1.cloudfront.net | us-east-1 |
| D2 | example2.cloudfront.net | us-west-2 |
| D3 | example3.cloudfront.net | eu-west-1 |
```
import React from 'react';

import { Table } from '@cloudscape-design/components';

interface Distribution {
  id: string;
  domainName: string;
  region: string;
}

const items: Distribution[] = [
  { id: 'D1', domainName: 'example1.cloudfront.net', region: 'us-east-1' },
  { id: 'D2', domainName: 'example2.cloudfront.net', region: 'us-west-2' },
  { id: 'D3', domainName: 'example3.cloudfront.net', region: 'eu-west-1' },
];

export default function NewFeatureTableColumn() {
  return (
    <Table
      variant="container"
      items={items}
      columnDefinitions={[
        { id: 'id', header: 'Distribution ID', cell: item => item.id },
        { id: 'domainName', header: 'Domain name', cell: item => item.domainName },
        {
          id: 'region',
          header: (
            <>
              Region - <em>new</em>
            </>
          ),
          cell: item => item.region,
        },
      ]}
    />
  );
}
```

### Side navigation indication

When introducing a new capability page (such as adding a new dashboard page or a new sub-service within a service), use "New" labels in the side navigation to indicate new pages. Because users typically view the side navigation as the site map of the service product, these labels provide an immediate overview of newly introduced pages. Include a popover, invoked by user action, that provides a summary of the functionalities introduced by the new page. Add an external "Learn more" link guiding customers to relevant service documentation about the new feature. If you are using a "New" label as an indicator, change the behavior of collapsible sections by opening any section that is usually collapsed if one or more pages in that section use the "New" label. This improves discoverability and avoid cognitive information load for users.

## Service name

- Page 1   New
- Page 2
- Page 3
- Page 4

- Notifications   23
- [Documentation](https://example.com/)

```
import React, { useState } from 'react';
import { Box, Popover, SideNavigation, Link, Badge } from '@cloudscape-design/components';

export default function SideNavigationSnippet() {
  const [activeHref, setActiveHref] = useState('#/page1');
  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: '#/', text: 'Service name' }}
      onFollow={event => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
        }
      }}
      items={[
        {
          type: 'link',
          text: 'Page 1',
          href: '#/page1',
          info: (
            <Box color="text-status-info" variant="span">
              <Popover
                header="Introducing events"
                size="medium"
                triggerType="text"
                content={
                  <>
                    AWS can schedule events for your instances, such as reboot, stop/start, or retirement.{' '}
                    <Link
                      external={true}
                      ariaLabel="Learn more about events management, opens in new tab"
                      href="#"
                      variant="primary"
                    >
                      Learn more
                    </Link>
                  </>
                }
                renderWithPortal={true}
                dismissAriaLabel="Close"
              >
                <Box
                  variant="span"
                  color="text-status-info"
                  fontSize="body-s"
                  fontWeight="bold"
                  data-testid="new-feature-announcement-trigger"
                >
                  New
                </Box>
              </Popover>
            </Box>
          ),
        },
        { type: 'link', text: 'Page 2', href: '#/page2' },
        { type: 'link', text: 'Page 3', href: '#/page3' },
        { type: 'link', text: 'Page 4', href: '#/page4' },
        { type: 'divider' },
        {
          type: 'link',
          text: 'Notifications',
          href: '#/notifications',
          info: <Badge color="red">23</Badge>,
        },
        {
          type: 'link',
          text: 'Documentation',
          href: 'https://example.com',
          external: true,
        },
      ]}
    />
  );
}
```

### Displaying mechanism

| **Types of feature notifications** | **Feature notification panel and prompt** | **Inline indication "- ** **new** **"** | **Side navigation indication "New"** |
| --- | --- | --- | --- |
| New feature as a brand new capability page | Yes, display on related service page(s) | No | yes |
| New service-wide feature | Yes, display on related service page(s) | Optional | No |
| New feature as part of a service page | Yes, display on specific part of a service page | Yes | No |

## General guidelines

### Do

- Always prioritize status notification over feature notifications.
- Only use *New*   labels as side navigation indicator for pages that are entirely new, not for any new addition to an existing page.
- Always combine *New*   labels in the side navigation with a popover.
- When using *New*   labels as inline and side navigation indicator, it should persist for 30 days only.
- Display feature releases contextually aligned with the page and customer operation tasks. The right-side panel is designed for feature notifications released within 90 days or the latest three releases related to the displaying page.

### Don't

- Don't use info flashbars for announcing new features
- Don't add *New*   labels indicating changes of low importance, such as small bug fixes or minor UI improvements. Keep the visual noise to a minimum to decrease the cognitive load.
- Don't use badges for labeling features as new.
- Don't add *New*   labels to section headers in the side navigation, because this can create double-click targets. Instead, add *New*   labels to every new page introduced in the new expandable section.

## Writing guidelines

### General writing guidelines

- Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.
- Use end punctuation, except in [headers](../../components/header/guidelines.md)   and [buttons](../../components/button/guidelines.md)   . Don't use exclamation points.
- Use present-tense verbs and active voice.
- Don't use *please*   , *thank you*   , ellipsis ( *...*   ), ampersand ( *&*   ), *e.g.*   , *i.e.*   , or *etc.*   in writing.
- Avoid directional language.  

  - For example: use *previous*     not *above*     , use *following*     not *below*    .
- Use device-independent language.  

  - For example: use *choose*     or *select*     not *click*    .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

#### Popover

- Follow the accessibility guidelines for [popover](../../components/popover/guidelines.md)  .

## Related patterns and components

### Announcing beta and preview features

Communicate to users which features are in beta or preview.

[View Documentation](announcing-beta-preview-features.md)

### Flashbar

Flashbar - Displays one or more status notifications that communicate critical task operation status - errors, success, in-progress, and info. The info flashbar also announces entire service launch in beta or preview.

[View Documentation](../../components/flashbar/guidelines.md)

### Popover

Provides on-demand contextual information about elements or events.

[View Documentation](../../components/popover/guidelines.md)

### Feedback mechanisms

Ways to communicate specific messages to a user in an interface.---

[View Documentation](user-feedback.md)
