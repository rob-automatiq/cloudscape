# Loading bar

> Source: https://cloudscape.design/components/loading-bar/ (fetched 2026-09-24)

A linear loading indicator that informs the user about an ongoing operation with unknown duration.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/chat-components/tree/main/src/loading-bar)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/loading-bar/index.html.json)

## Development guidelines

### Installing chat components

This component comes from the new `@cloudscape-design/chat-components` NPM module. Make sure to add this module to your dependencies.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

LoadingBarWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| No methods availableThis wrapper does not provide any additional methods. |  |  |  |
## Integration testing APIs

LoadingBarWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| No methods availableThis wrapper does not provide any additional methods. |  |  |  |
## General guidelines

### Do

- Show loading text next to the loading bar to inform users about the ongoing operation. Refer to [generative AI loading states](../../gen-ai/patterns/generative-ai-loading-states.md)   for more guidelines.

### Don't

- Avoid using the loading bar for non-generative AI use cases. The loading bar is currently styled for usage in generative AI use cases only.

## Features

- #### Variant

  - **Generative AI -**     Use when bar is placed inside an element. For example, center of a [container](../container/guidelines.md)    .
  - **Generative AI with mask -**     Use when bar is placed next to the edge of elements that have rounded corners. For example, bottom of a chat bubble.

## Writing guidelines

### Generative AI loading state

Follow the writing guidelines for [generative AI loading states](../../gen-ai/patterns/generative-ai-loading-states.md).

## Accessibility guidelines

You can ensure status changes are announced to users by wrapping a [live region component](../live-region/guidelines.md).

Generating a response
```
import React from 'react';
import { Box, LiveRegion } from '@cloudscape-design/components';
import LoadingBar from '@cloudscape-design/chat-components/loading-bar';

const GenAILoading = () => {
  return (
    <LiveRegion>
      <Box margin={{ bottom: 'xs', left: 'l' }} color="text-body-secondary">
        Generating a response
      </Box>
      <LoadingBar variant="gen-ai" />
    </LiveRegion>
  );
};

export default GenAILoading;
```
