# Hero header

> Source: https://cloudscape.design/patterns/general/hero-header/ (fetched 2026-09-24)

Showcase key messages and functionality for your application or section of an application in the header of the page.

 [Product details demo](https://cloudscape.design/examples/react/product-detail-page.html)
## Key UX concepts

### Why use a hero header

A hero header helps create a strong visual hierarchy on a page, creating clear separation between the header information from the rest of the content. The addition of background colors, gradients, or images helps draw users attention to a specific message or content, and build brand equity.

A hero header acts as a starting point of your user's journey on a page. The fact that it appears at the top of the page makes it an overarching element, which can help set the context for a given type of content (for example, to distinguish a category of offerings from another). The visual prominence of a hero header can also be used to emphasize a call to action, leading to an increase in conversion rates.

### When to use a hero header

A hero header should always be used with intent, to support a given use case, and not as a default across any particular site. Its use is recommended for expressive use-cases, those that require higher level of visual expression and storytelling. These are usually found in consumer grade applications, documentation sites, and marketing sites, at the initial stages of a journey, where users learn about a product or service. Some common use cases are:

- When users land on a service (for example: sign in page, landing page)
- When users browse contents related to a specific offering (for example: category page)
- When users learn about a product or service (for example: [product detail page](https://cloudscape.design/examples/react/product-detail-page.html)   )

We recommend limiting the use of the hero header to expressive use cases, pages with low level of interactivity, and where information density is not critical. Using the hero header in productive use cases, such as productivity tools, can hinder the user experience. The amount of attention that it draws can reduce the user focus when performing a task or interacting with large amounts of data on the screen.

## Building blocks

Depending on the use-case, a hero header can display a particular combination of the following building blocks to inform users about the content on the page, or section of the service. It can contain large display text and images, and can be customized to have a specific background style and layout.

A B C D E F G H I
#### A. Background

Background can display a solid color, a gradient, or an image. The visual treatment spans across 100% of the available space, independent of the maximum content width. It also covers notifications and breadcrumb areas. [Content layout](../../components/content-layout/guidelines.md) allows you to optimize the style of elements inside the hero header in relation to the selected background.

#### B. Main content section

P ositioned on the left, contains the main content for the hero header. When using an image as a background, use a [container](../../components/container/guidelines.md) component to increase color contrast between the image and the text.

#### C. Heading

T he main h1 heading for the page. Use [display large bold](../../foundation/visual-foundation/typography.md) or [heading x-large](../../foundation/visual-foundation/typography.md) type style depending on the use-case. For example, while display large is better suited for the homepage, heading x-large is more appropriate for use on category landing pages or product pages.

#### D. Tags - optional

Tags can be used to visually link your pages and content across multiple pages. Tags can be in the form of [links](../../components/link/guidelines.md) , text, or [badges](../../components/badge/guidelines.md).

#### E. Meta data - optional

Meta data adds additional context to the content on the page. Meta data can be links, text, or icons. For example, a link to a telephone number to contact a sales representative.

#### F. Description - optional

You can add a description of the section or page under the page heading. Use the summary to share what the product or service is and how it benefits users. Use the [body type style](../../foundation/visual-foundation/typography.md).

#### G. Subheading - optional

S upporting information for the heading of the page. Use the [display large light type style](../../foundation/visual-foundation/typography.md) in combination with a heading that uses [display large bold.](../../foundation/visual-foundation/typography.md)

#### H. Actions - optional

Place CTAs at the bottom of the main content section. To increase visibility, actions can also be placed on the top right area. Follow the guidelines for [button](../../components/button/guidelines.md).

#### I. Secondary header - optional

This secondary header area can be used to add complementary page level content and a call to action. Note that the secondary header is always displayed in a light visual context, independent of the styling of the main header.

 [Content layout](../../components/content-layout/guidelines.md) component provides page header styling capabilities in compliance to the hero header pattern. Use this component to create the hero header that best suits your use-case.

In addition, you can use the [grid component](../../components/grid/guidelines.md) to structure elements inside the hero header content area (for example, to place actions on the top right in a product detail page, or a marketing image that is associated with the pages content). We recommend designing the hero layout for all viewports. Refer to [responsive design](../../foundation/core-principles/responsive-design.md) for more information.

## Examples of hero headers

## Landing page

# Cloud software solutions

Industry solutions to unlock innovation Shorten procurement times, implement the controls you need to operate with confidence, and enable your organization to unlock innovation.

Browse by Solution Category Browse by Solution Industry
```
import React from 'react';
import { Grid, Box, Container, SpaceBetween, Button, ContentLayout } from '@cloudscape-design/components';

export default function LandingPage() {
  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerBackgroundStyle={mode => `center center/cover url("/hero-header-${mode}.png")`}
      header={
        <Box padding={{ vertical: 'xxxl' }}>
          <Grid gridDefinition={[{ colspan: { default: 12, s: 8 } }]}>
            <Container>
              <Box padding="s">
                <Box fontSize="display-l" fontWeight="bold" variant="h1" padding="n">
                  Cloud software solutions
                </Box>
                <Box fontSize="display-l" fontWeight="light">
                  Industry solutions to unlock innovation
                </Box>
                <Box variant="p" color="text-body-secondary" margin={{ top: 'xs', bottom: 'l' }}>
                  Shorten procurement times, implement the controls you need to operate with confidence, and enable your
                  organization to unlock innovation.
                </Box>
                <SpaceBetween direction="horizontal" size="xs">
                  <Button variant="primary">Browse by Solution Category</Button>
                  <Button>Browse by Solution Industry</Button>
                </SpaceBetween>
              </Box>
            </Container>
          </Grid>
        </Box>
      }
    />
  );
}
```

## Product detail page

# Elastic Cloud (Elastic search service)

With solutions in Enterprise Search, Observability, and Security, Elastic enhances customer and employee search experiences, keeps mission-critical applications running smoothly, and protects against cyber threats.

Sold by: Elastic Tags: Free trial | Vendor insights View purchase options Request a demo Save to a list
## Content heading

This is a content paragraph.

```
import React from 'react';
import { Grid, Box, SpaceBetween, Button, ContentLayout, Link } from '@cloudscape-design/components';

export default function ProductDetailPage() {
  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerVariant="high-contrast"
      maxContentWidth={1200}
      header={
        <Box padding={{ vertical: 'l' }}>
          <Grid gridDefinition={[{ colspan: { default: 12, xs: 8, s: 9 } }, { colspan: { default: 12, xs: 4, s: 3 } }]}>
            <div>
              <Box variant="h1">Elastic Cloud (Elastic search service)</Box>
              <Box variant="p" color="text-body-secondary" margin={{ top: 'xxs', bottom: 's' }}>
                With solutions in Enterprise Search, Observability, and Security, Elastic enhances customer and employee
                search experiences, keeps mission-critical applications running smoothly, and protects against cyber
                threats.
              </Box>
              <SpaceBetween size="xs">
                <div>
                  Sold by:{' '}
                  <Link variant="primary" href="#">
                    Elastic
                  </Link>
                </div>
                <div>
                  Tags:{' '}
                  <Link variant="primary" href="#">
                    Free trial
                  </Link>
                  {' | '}
                  <Link variant="primary" href="#">
                    Vendor insights
                  </Link>
                </div>
              </SpaceBetween>
            </div>

            <Box margin={{ top: 'l' }}>
              <SpaceBetween size="s">
                <Button variant="primary" fullWidth={true}>
                  View purchase options
                </Button>
                <Button fullWidth={true}>Request a demo</Button>
                <Button fullWidth={true}>Save to a list</Button>
              </SpaceBetween>
            </Box>
          </Grid>
        </Box>
      }
    >
      <Box variant="h2" padding={{ top: 'xxxl' }}>
        Content heading
      </Box>

      <Box variant="p">This is a content paragraph.</Box>
    </ContentLayout>
  );
}
```

## Category page

<-nav->

1. Home
2. ...
3. Category

1. Home
2. Category

</-nav->
# Category

Description of the category.

## Content

```
import React from 'react';
import { Box, ContentLayout, Header, BreadcrumbGroup } from '@cloudscape-design/components';

export default function CategoryPage() {
  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerVariant="high-contrast"
      maxContentWidth={1200}
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: 'Home', href: '#' },
            { text: 'Category', href: '#category' },
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      header={
        <Header variant="h1" description="Description of the category.">
          Category
        </Header>
      }
    >
      <Box variant="h2" padding={{ top: 'm' }}>
        {' '}
        Content
      </Box>
    </ContentLayout>
  );
}
```

## Article

<-nav->

1. Home
2. ...
3. Category
4. Article

1. Home
2. Category
3. Article

</-nav->
# Article title

Article description.

## Content

```
import React from 'react';
import { Box, ContentLayout, Header, BreadcrumbGroup } from '@cloudscape-design/components';

export default function ArticlePage() {
  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerVariant="divider"
      maxContentWidth={1200}
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: 'Home', href: '#' },
            { text: 'Category', href: '#category' },
            { text: 'Article', href: '#article' },
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      header={
        <Header variant="h1" description="Article description.">
          Article title
        </Header>
      }
    >
      <Box variant="h2" padding={{ top: 'm' }}>
        Content
      </Box>
    </ContentLayout>
  );
}
```

## Sign in page

# Welcome to Application X

## Sign in

Email address Password Show password Sign in
```
import React, { useState } from 'react';
import * as awsui from '@cloudscape-design/design-tokens/index.js';
import { Box, Button, Container, ContentLayout, Header, FormField, Input, SpaceBetween, Checkbox } from '@cloudscape-design/components';

import './sign-in-page.scss';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ContentLayout
      defaultPadding
      headerVariant="high-contrast"
      maxContentWidth={500}
      headerBackgroundStyle={`${awsui.colorBackgroundHomeHeader}`}
      header={
        <div className="sign-in-header">
          <Box variant="h1" padding={{ vertical: 'xxxl' }} textAlign="center">
            Welcome to Application X
          </Box>
        </div>
      }
    >
      <div>
        <Container header={<Header>Sign in</Header>}>
          <SpaceBetween size="l">
            <FormField label="Email address">
              <Input type="email" value={email} onChange={({ detail }) => setEmail(detail.value)} placeholder="Email" />
            </FormField>
            <FormField label="Password">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={({ detail }) => setPassword(detail.value)}
                placeholder="Password"
              />
            </FormField>
            <Checkbox checked={showPassword} onChange={({ detail }) => setShowPassword(detail.checked)}>
              Show password
            </Checkbox>
            <Button variant="primary">Sign in</Button>
          </SpaceBetween>
        </Container>
      </div>
    </ContentLayout>
  );
}
```

## Development guidelines

Use the [content layout](../../components/content-layout/guidelines.md) component to implement the hero header pattern in your application. In the component playground you can find examples of hero header with [high-contrast](../../components/content-layout/guidelines.md) , [background image](../../components/content-layout/guidelines.md) , [gradient](../../components/content-layout/guidelines.md) , and [sub page header](../../components/content-layout/guidelines.md).

## Guidelines

### Do

- Use a hero header in expressive use cases, to draw attention to a certain message on the page, to visually emphasize a call to action and drive conversion, and to build brand equity.
- Keep the service summary description brief, to avoid overcrowding the hero area with text.
- Use the [container](../../components/container/guidelines.md)   component to provide a background color to the content area. For example: When a background image affects the legibility and contrast of the header text.
- Apply a high-contrast treatment when using a dark background to ensure the right visibility of all elements in the hero header.
- Use a divider to separate the header from the content in cases where the header has no background and the content below is not displayed inside containers.
- Use h1 for headings.

### Don't

- Don't use a hero header in productive use cases where users need to focus on performing a task or interact with large amounts of data on the screen.
- Don't use more than three action buttons.
- Don't use more that three meta data elements.

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

### Component-specific guidelines

#### Heading

- Keep headings short. Aim for a maximum of five words.
- Don't use terminal punctuation.
- Use action words and present-tense verbs.  

  - For example: *Sign up*

#### Description

- Follow the guidelines for [help system](help-system.md)  .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

- When customizing the header background style, ensure that the header content meets color contrast requirements.
