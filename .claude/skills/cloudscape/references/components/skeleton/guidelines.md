# Skeleton

> Source: https://cloudscape.design/components/skeleton/ (fetched 2026-09-24)

A placeholder element giving the user feedback that content is loading.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/skeleton) If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/skeleton/index.html.json)

## Unit testing APIs

SkeletonWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| No methods availableThis wrapper does not provide any additional methods. |  |  |  |
## Integration testing APIs

SkeletonWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| No methods availableThis wrapper does not provide any additional methods. |  |  |  |
## General guidelines

### Do

- Use the skeleton component to indicate that content or data is loading and will appear shortly.
- Use skeletons as a visual hint of the upcoming content. They should reflect the intended structure of the page, such as tables, lists, or text blocks, so users can anticipate what will be rendered. Skeletons don't need to match the final layout exactly, just convey the shape and intent of the content.
- Use multiple skeletons to represent complex content, such as cards or paragraphs of text.
- Replace skeletons with real content as soon as it becomes available. Transition individual elements independently when data arrives at different times (progressive loading).
- Match the skeleton's height to the expected content size as closely as possible. By default, the skeleton component will match the text size and line height of its parent. Alternatively, use a predefined variant or set a custom height.
- Set the skeleton width to the expected width of the content being loaded. Vary widths across multiple skeletons to create a more natural appearance.
- Combine skeletons with the [live region](../live-region/guidelines.md)   component to announce loading state changes to assistive technology users.

### Don't

- Don't use skeletons when the page structure is unknown. If the layout depends on the data being loaded, use a full-page loading state instead.
- Don't animate or change skeleton dimensions while loading. The placeholder should remain stable until replaced by content.
- Don't use a skeleton to replace the text content of a [header](../header/guidelines.md)   . Screen readers rely on visible heading text for page navigation. Instead, render the skeleton with the matching heading variant styling, and replace it with a real header element once the text loads.

## Features

- #### Variant

  Determines the default size of the skeleton loader. The default `dynamic`   variant automatically adjusts to surrounding context by matching its height to the text height. Other variants ( `text-body-*`   , `text-heading-*`   ) can be used to make the skeleton match a specific text size from the design system.
- #### Height

  If none of the predefined variants are suitable, a skeleton can optionally be given a custom height.
- #### Width

  Determines the width of the skeleton. Use this to adjust the skeleton appearance to approximate the expected content length. For example, use smaller widths for headers or values that are likely to be short, and the default full width for full lines of text.

### Composite skeletons

Multiple skeletons can be combined to represent complex content.

### Demo: skeleton loading text content

Show skeleton

Loading text content
```
import React, { useState } from 'react';
import { LiveRegion, Toggle } from '@cloudscape-design/components';
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Skeleton from '@cloudscape-design/components/skeleton';

export default function SkeletonParagraph() {
  const [loading, setLoading] = useState(true);

  return (
    <Container
      header={
        <Header
          variant="h2"
          headingTagOverride="h3"
          actions={
            <Toggle onChange={() => setLoading(!loading)} checked={loading}>
              Show skeleton
            </Toggle>
          }
        >
          Demo: skeleton loading text content
        </Header>
      }
    >
      <LiveRegion>
        {loading ? (
          <>
            <Box variant="h3" tagOverride="div" padding={{ bottom: 'xs' }}>
              <Skeleton width="40%" />
            </Box>
            <Box variant="p">
              <Skeleton />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
            <LiveRegion hidden>Loading text content</LiveRegion>
          </>
        ) : (
          <>
            <Header variant="h3">Article heading</Header>
            <Box variant="p">
              This is a paragraph of loaded content. It demonstrates what the content looks like when it has finished
              loading and is ready for the user to read. This is the second sentence with additional information about
              the topic being discussed in this section. This is the third sentence that concludes the content section
              with final thoughts and summary information.
            </Box>
          </>
        )}
      </LiveRegion>
    </Container>
  );
}
```

### Demo: skeleton loading item card

Show skeleton

```
import React, { useState } from 'react';
import { LiveRegion, Toggle } from '@cloudscape-design/components';
import Box from '@cloudscape-design/components/box';
import ButtonGroup from '@cloudscape-design/components/button-group';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import ItemCard from '@cloudscape-design/components/item-card';
import Skeleton from '@cloudscape-design/components/skeleton';

export default function SkeletonCard() {
  const [loading, setLoading] = useState(true);

  return (
    <Container
      header={
        <Header
          variant="h2"
          headingTagOverride="h3"
          actions={
            <Toggle onChange={() => setLoading(!loading)} checked={loading}>
              Show skeleton
            </Toggle>
          }
        >
          Demo: skeleton loading item card
        </Header>
      }
    >
      <LiveRegion>
        {loading ? (
          <ItemCard
            actions={
              <ButtonGroup
                variant="icon"
                items={[
                  {
                    type: 'icon-button',
                    id: 'edit',
                    iconName: 'edit',
                    text: 'Edit',
                    disabled: true,
                  },
                  {
                    type: 'icon-button',
                    id: 'delete',
                    iconName: 'remove',
                    text: 'Delete',
                    disabled: true,
                  },
                ]}
              />
            }
            header={<Skeleton width="30%" variant="text-heading-m" />}
            description={<Skeleton width="40%" />}
          >
            <Box variant="p">
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </ItemCard>
        ) : (
          <ItemCard
            actions={
              <ButtonGroup
                variant="icon"
                items={[
                  {
                    type: 'icon-button',
                    id: 'edit',
                    iconName: 'edit',
                    text: 'Edit',
                  },
                  {
                    type: 'icon-button',
                    id: 'delete',
                    iconName: 'remove',
                    text: 'Delete',
                  },
                ]}
              />
            }
            header="Item card header"
            description="Item card description"
          >
            <Box variant="p">
              This is the main content of the item card. It displays the detailed information about the item when the
              content has finished loading and is ready for user interaction.
            </Box>
          </ItemCard>
        )}
      </LiveRegion>
    </Container>
  );
}
```

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific accessibility guidelines

The skeleton component renders with `aria-hidden="true"` , which means it is invisible to assistive technology. This is intentional: the skeleton itself is a visual-only placeholder and conveys no meaningful content. This means that you must make the loading state available to assistive technologies in other ways, such as using a [live region](../live-region/guidelines.md).
