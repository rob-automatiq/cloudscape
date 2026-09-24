# Announcing beta and preview features

> Source: https://cloudscape.design/patterns/general/announcing-beta-preview-features/ (fetched 2026-09-24)

Communicate to users which features are in beta or preview.

 [View demo](https://cloudscape.design/examples/react/dashboard.html)
## Key UX concepts

### Informing users about beta or preview features

To help ensure users know whether a feature is in beta or preview, clearly communicate the feature's release state in the user's workflow. Do this even if if the feature's state is communicated through other communication channels.

### Communicating the impact of the beta or preview state

Certain beta or preview features can affect users' workflows. For example, they can introduce functionality changes or be unsuitable for production workloads. Providing contextual information about these features helps users decide how they will use them. To reduce cognitive load on the user, keep your explanation concise. If there's additional information that would be helpful, provide a [Learn more link](../../components/link/guidelines.md).

### Minimizing visual noise

To earn users trust and maintain operational focus, only announcing an entire service launch in beta or preview should use info [flashbars](../../components/flashbar/guidelines.md) for notification. We don't recommend using badges to announce any types of beta or preview features.

## Beta and preview releases

Betas releases aren't publicly announced. Teams use them to gather customer feedback before a general availability (GA) launch. Previews are expected to be publicly announced. Both beta and preview releases might not be immediately ready for all customers or might be missing key features.

## Types of beta and preview announcements

### Entire service in beta/preview

Use an info [flashbar](../../components/flashbar/guidelines.md) to communicate an entire service launch in beta or preview state. The message should communicate the impact of the the beta or preview state for the service and provide links to learn more and to give feedback for the product service. On the service homepage, the flashbar should be persistent, without a way to dismiss it, so the beta or preview state remains in view for the user. On every other page, users should be able to dismiss the flashbar.

- CloudFront is currently in preview   Changes may be made to this service. We don't recommend using it for production workloads. Find out more about this preview here   , or send feedback here  .

```
import React from 'react';
import { Flashbar, FlashbarProps } from '@cloudscape-design/components';

export default function FlashbarBuilder(props: FlashbarProps) {
  return function Component() {
    return <Flashbar {...props} />;
  };
}
```

### Other types of beta and preview

When releasing a new beta or preview capability page within an existing service, use the [Announcing new feature](announcing-new-features.md) patterns on the new beta or preview capability page and related pages as needed, include a Side Navigation indication with a "Beta" or "Preview" label, and add an In-page title indication using "- Beta" or "- Preview." When releasing a new beta or preview feature within an existing service page, use the [Announcing new feature](announcing-new-features.md) patterns on the specific service page only, and apply an Inline indication using "- Beta" or "- Preview" - Side Navigation and In-page title indications do not apply in this case

### Feature notification panel and prompt

Use feature notification panel and prompt communicate all types of launches in beta or preview state for releasing a new capability page and a new feature within an existing service.

### Side navigation indication

Use *Beta * or *Preview* labels in the side navigation to mark pages appropriately. Marking features as beta or preview within the side navigation helps to set users' expectations about these pages. Include a [popover](../../components/popover/guidelines.md) communicating what users can expect from the page. For example, the popover content area can say: *We're improving the way to use \[feature name\]* . Add an external [Learn more link](../../components/link/guidelines.md) , guiding users to relevant service documentation about the feature, if available.

## Side navigation

## Service name

- Page 1   Beta
- Page 2
- Page 3
- Page 4

- Notifications   23
- [Documentation](https://example.com/)

```
import { Box, Popover, SideNavigation, Link, Badge } from '@cloudscape-design/components';
import React, { useState } from 'react';

export default function SideNavigationBeta() {
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
                header="Beta features"
                size="medium"
                triggerType="text"
                content={
                  <>
                    We are improving the way to create scheduled instances.{' '}
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
                  Beta
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

To implement the Beta or Preview labels in the side navigation, use the snippet below in the `info` slot of the SideNavigation component:

```
<Box color="text-status-info" display="inline">
  <Popover
    header="[Release type] feature"
    size="medium"
    triggerType="text"
    content={
      <>
        Add description about the feature state.{' '}
        <Link external>Learn more</Link>
      </>
    }
    renderWithPortal={true} 
  >
    <Box color="text-status-info" fontSize="body-s" fontWeight="bold">
      Beta
    </Box>
  </Popover>
</Box>
```

### In-page title indication

In addition to the side navigation, append a *- beta* or *- preview* label to the page title. Because users might access the page through a direct link, and not only through the side navigation, this reinforces the page's release type.

Include an info link and [help panel](../../components/help-panel/guidelines.md) to provide more information about the beta or preview, such as a description of what it entails, how it impacts users' workflows, and how to provide feedback. If you can't implement a content ramp with the help panel, you can use [Learn more links](../../components/link/guidelines.md) as a fallback. Place the links after beta or preview descriptions.

Don't add additional popovers on the page for page-level beta and previews.

## General guidelines

### Do

- Mark pages as beta or preview within the side navigation to help set users' expectations about these pages before they open them.
- Plan your release so users will know when the feature is going into GA. This way users can stay engaged with the beta or preview, and also plan on using the feature in production workflows.
- Use *Beta *   or *Preview *   labels in the side navigation only for pages that are entirely in a beta or preview release state.
- Always combine *Beta *   or *Preview *   labels in the side navigation with a popover so that users can get more details about the features in those states.
- Beta features may introduce functionality changes or prove unsuitable for production workloads. Provide clear guidance to help customers understand adoption implications and make informed decisions.

### Don't

- Don't rely only on external channels, such as documentation or email, to communicate that a feature is in beta or preview.
- Don't use the [New](announcing-new-features.md)   label together with *Beta *   or P *review*
- Don't use badges for labeling features as beta or preview.

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

#### Flashbar

- Follow the accessibility guidelines for [flashbar](../../components/flashbar/guidelines.md)  .

## Related patterns and components

### Announcing new features

Communicate new feature releases to users.

[View Documentation](announcing-new-features.md)

### Flashbar

Flashbar - Displays one or more status notifications that communicate critical task operation status - errors, success, in-progress, and info. The info flashbar also announces entire service launch in beta or preview.

[View Documentation](../../components/flashbar/guidelines.md)

### Popover

Provides on-demand contextual information about elements or events.---

[View Documentation](../../components/popover/guidelines.md)
