# Follow-up questions

> Source: https://cloudscape.design/gen-ai/patterns/follow-up-questions/ (fetched 2026-09-24)

Ways to request additional information from users to help generate more accurate and relevant responses.

## Key UX concepts

### Gather context at the right time

Decide whether to gather information before showing output or during the interaction. For high-impact decisions or when confidence is low, collect details first. When multiple questions are needed, collecting them sequentially reduces cognitive load and keeps each decision focused. For other scenarios, start with an initial response and ask follow-up questions to refine results.

### Streamline user choices

Provide clear options for users to proceed, skip, or exit at each step of the interaction. This ensures users feel in control of the experience and reduces friction. When structured options don't meet the user's needs, ensure they can always access the prompt input to provide open-ended context in their own words.

### Guide users to necessary information

Help users access information that isn't readily available. Provide links or instructions on where to find required data when appropriate. This ensures users can provide accurate information even when it's not immediately at hand.

## Criteria table

| **Information type** | **Input method** | **Examples** |
| --- | --- | --- |
| **Clarifying user intent** | Present sequential predefined choices in a dismissible dialog docked above prompt input. | Context is needed upfront to generate an accurate response. Multiple back-and forth exchanges would otherwise be required. |
| **Guiding a conversation** | Present recommended inputs with [support prompt group](../../components/support-prompt-group/guidelines.md)  . | The initial response applies broadly to multiple situations. A follow-up selection narrows it to the user's specific case. There are up to five valid choices. |

## Common use cases

### Clarifying user intent

When users provide ambiguous or incomplete information, or when a request requires additional information to generate an accurate response, a dismissible dialog collects structured input upfront, reducing back-and-forth exchanges in the thread.

![Video]()
Controls: true

### Guiding a conversation

When an initial response applies broadly but a follow-up selection can tailor it to the user's specific situation, a [support prompt group](../../components/support-prompt-group/guidelines.md) presents a constrained set of options after the response.

### Generative AI assistant

JD I need to choose between AWS Fargate and ECS on EC2 for my containerized application. Both are great options for running containers. Here are the key differences:

AWS Fargate:

[1]

1. Serverless - no need to manage infrastructure
2. Pay only for resources used by containers
3. Easier to get started and maintain

ECS on EC2:

[2]

1. More control over underlying infrastructure
2. Better cost optimization for consistent workloads
3. Access to instance-level customization

Sources [[1] Simplify compute management with AWS Fargate](https://docs.aws.amazon.com/eks/latest/userguide/fargate.html) [[2] What is Amazon EC2?](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html) To provide a more tailored recommendation, what's your primary concern when choosing a container orchestration solution?

Minimize management overhead Maximize control over infrastructure Optimize cost
```
import React from 'react';
import Box from '@cloudscape-design/components/box';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SupportPromptGroup from '@cloudscape-design/chat-components/support-prompt-group';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TextContent from '@cloudscape-design/components/text-content';
import ExpandableSources, { Sources } from '../genai-common/sources';
import { genAiAvatar, userAvatar, userName } from '../genai-common/avatars';
import chatBubbleActions from '../genai-common/chat-bubble-actions';
import CitationPopover from '../genai-common/citation-popover';
import '../genai-common/styles.scss';

const sources: Sources = [
  {
    href: 'https://docs.aws.amazon.com/eks/latest/userguide/fargate.html',
    description: 'Simplify compute management with AWS Fargate',
  },
  {
    href: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html',
    description: 'What is Amazon EC2?',
  },
];

export default function GenAiFollowUpClarifyIntent() {
  return (
    <Container header={<Header variant="h3">Generative AI assistant</Header>}>
      <SpaceBetween size="xs">
        <ChatBubble avatar={userAvatar} type="outgoing" ariaLabel={`${userName} at 05:37:30pm`}>
          I need to choose between AWS Fargate and ECS on EC2 for my containerized application.
        </ChatBubble>
        <ChatBubble
          avatar={genAiAvatar}
          type="incoming"
          ariaLabel="Generative AI assistant at 05:37:40pm"
          actions={chatBubbleActions}
        >
          <TextContent>
            <p>Both are great options for running containers. Here are the key differences:</p>
            <p>
              AWS Fargate: <CitationPopover count={1} href={sources[0].href} />
            </p>
            <ol>
              <li>Serverless - no need to manage infrastructure</li>
              <li>Pay only for resources used by containers</li>
              <li>Easier to get started and maintain</li>
            </ol>
            <p>
              ECS on EC2: <CitationPopover count={2} href={sources[1].href} />
            </p>
            <ol>
              <li>More control over underlying infrastructure</li>
              <li>Better cost optimization for consistent workloads</li>
              <li>Access to instance-level customization</li>
            </ol>
          </TextContent>
          <Box padding={{ top: 'xs' }}>
            <ExpandableSources sources={sources} />
          </Box>
        </ChatBubble>
        <ChatBubble avatar={genAiAvatar} type="incoming" ariaLabel="Generative AI assistant at 05:37:50pm">
          <Box variant="p">
            To provide a more tailored recommendation, what&apos;s your primary concern when choosing a container
            orchestration solution?
          </Box>
        </ChatBubble>
        <div className="chat-bubble-indentation">
          <SupportPromptGroup
            ariaLabel="Proposed prompts"
            onItemClick={() => null}
            items={[
              { id: 'minmize-management-overhead', text: 'Minimize management overhead' },
              { id: 'maxmimize-control-over-infrastructure', text: 'Maximize control over infrastructure' },
              { id: 'optimize-cost', text: 'Optimize cost' },
            ]}
          />
        </div>
      </SpaceBetween>
    </Container>
  );
}
```

## General guidelines

### Do

- Use structured input methods to collect follow-up information instead of open-ended text prompts.
- To avoid overwhelming the user, limit follow-up questions to 5 or fewer per workflow.

### Don't

- Avoid requiring users to formulate free-text responses when predefined choices or structured inputs can capture the same information more efficiently.
- Don't ask for information already provided or data that can be retrieved automatically through APIs.

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

#### Dialog title

- Be specific and action-oriented. Dialog titles should clearly indicate the action being performed or the purpose of the dialog, often by combining an action verb with the resource or concept involved.  

  - For example: *Any specific constraints I should know about?*

#### Placeholder text

- Use placeholder text to provide a brief example or hint of the expected input format, not as a replacement for a label.
- Keep placeholder text concise and descriptive enough to guide the user without cluttering the input field.

#### Button text

- If the button performs the primary action indicated in the dialog title, the verb used in the button label should match the verb in the title.
- Follow the writing guidelines for [button](../../components/button/guidelines.md)  .

#### Support prompts

- Limit support prompt labels to less than 72 characters.  

  - Follow writing guidelines for [support prompt group](../../components/support-prompt-group/guidelines.md)

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
