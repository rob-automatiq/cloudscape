# Thinking

> Source: https://cloudscape.design/gen-ai/patterns/thinking/ (fetched 2026-09-24)

A processing state that shows AI's reasoning process and the information it considered before producing a final response.

## Key UX concepts

### Reasoning

AI reasons before responding. This means it processes what a user enters, evaluates patterns, and generates answers. Surfacing this reasoning gives users visibility into how AI approached a problem and what it considered before responding. This is known as thinking *, * a user-facing way to communicate that AI performed analysis and reasoning before generating a response.

### Thinking and execution

Thinking surfaces internal reasoning, not execution. Execution is when AI carries out a structured workflow such as checking nodes, querying services, or completing multi-step tasks. Thinking may involve searches or references along the way, but these support its thinking, rather than representing tasks to be tracked.

### Transparency reduces uncertainty

Thinking makes invisible reasoning visible. When users see thinking, it helps them understand what information was considered, how AI approached the problem, and why a response may take longer. Expanding thinking details allows users to review AI's reasoning, building confidence in the quality and relevance of the final response.

### Balancing depth and speed

Sometimes AI can return a response before its thinking fully completes, based on what's been processed so far. This means users can skip reasoning to get faster responses. This control is valuable when the task doesn't require  full depth of analysis that AI's thinking may provide.

## States

### Active

Thinking is in the active state while AI is performing additional reasoning before generating a response.

A B C
#### A. Thinking label

Thinking is shown as an [expandable section](../../components/expandable-section/guidelines.md) and signals AI is reasoning before generating a response. Collapsed by default is recommended for chat interfaces where the response is the primary content. When the response is not the primary content, such as a code editor, document editor, or dashboard, consider displaying the thinking expanded by default so users can review the reasoning in context.

#### B. Thinking content

Thinking content provides insight into AI's reasoning. Thinking content can include plain text narration describing the approach to a response, [steps](../../components/steps/guidelines.md) showing structured reasoning activities, or a combination of both. Content displays chronologically as AI reasons and remains unchanged after thinking completes. Use [inline code](../../components/box/guidelines.md) to distinguish technical identifiers, configuration values, and resource names within thinking content (for example, region names, memory allocations, or resource IDs). When referencing external sources during thinking, display them as an [external link](../../components/link/guidelines.md) so users can navigate directly to the source material. Use descriptive link text instead of full URLs. See [Generative AI loading states](generative-ai-loading-states.md) for guidance on streaming thinking content as it is generated.

#### C. Skip thinking - optional

A skip thinking option allows users to request an immediate response and cancel thinking. Only show a skip option when the system can deliver a meaningful response without AI completing its thinking. When the user skips thinking, the reasoning completed up to that point remains visible.

### Complete

Thinking enters the completed state when additional reasoning finishes or when the user skips it.

A B
#### A. Completed thinking label

This label i ndicates that the internal reasoning has completed and can be expanded to show additional content.

#### B. Thinking duration - optional

Displays the total time spent in the thinking state. Display duration only after thinking has completed or a user skipped thinking. See writing guidelines on how to display duration.

## Common use cases

### Extended reasoning

When AI performs additional reasoning before responding, surfacing the thinking helps users understand why a response may take longer and what it considered along the way. This applies whether reasoning is system-triggered based on the complexity of the user request, or user-selected when a user has explicitly chosen a deeper reasoning mode. For example, when a user asks a complex architectural question about optimizing a multi-region AWS deployment.

### Generative AI assistant

JD What's the most cost-effective architecture for a multi-region AWS deployment? Thought for 7s Considering tradeoffs between Route 53 latency-based routing and Global Accelerator. Evaluating DynamoDB global tables vs Aurora Global Database for replication overhead. For a multi-region AWS deployment, Global Accelerator is the stronger choice over Route 53 latency-based routing for consistent low-latency routing. For your data layer, DynamoDB global tables will give you lower replication overhead than Aurora Global Database, though Aurora is worth considering if you need complex relational queries across regions.

Use of this service is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/)
```
import React, { useState } from 'react';
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import { genAiAvatar, genAiName, userAvatar, userName } from '../genai-common/avatars';
import CustomGenAIChatFooter from '../gen-ai-response-regeneration/custom-gen-ai-chat-footer';

export default function ThinkingExtendedReasoning() {
  const [prompt, setPrompt] = useState('');

  return (
    <Container
      header={<Header variant="h3">Generative AI assistant</Header>}
      footer={
        <CustomGenAIChatFooter
          actionButtonIconName="send"
          actionButtonAriaLabel="Send message"
          message={prompt}
          onSendMessage={setPrompt}
        />
      }
    >
      <div role="region" aria-label="Chat" style={{ minHeight: 280 }}>
        <SpaceBetween size="xs">
          <ChatBubble type="outgoing" ariaLabel={`${userName} at 10:00am`} avatar={userAvatar}>
            What&apos;s the most cost-effective architecture for a multi-region AWS deployment?
          </ChatBubble>

          <ChatBubble type="incoming" ariaLabel={`${genAiName} at 10:00am`} avatar={genAiAvatar}>
            <ExpandableSection
              variant="inline"
              defaultExpanded
              headerText={
                <Box fontSize="body-m" fontWeight="normal">
                  Thought for 7s
                </Box>
              }
            >
              <Box color="text-body-secondary" fontSize="body-s">
                Considering tradeoffs between Route 53 latency-based routing and Global Accelerator. Evaluating DynamoDB
                global tables vs Aurora Global Database for replication overhead.
              </Box>
            </ExpandableSection>
          </ChatBubble>

          <ChatBubble type="incoming" ariaLabel={`${genAiName} at 10:00am`} avatar={genAiAvatar} hideAvatar>
            <Box variant="p">
              For a multi-region AWS deployment, Global Accelerator is the stronger choice over Route 53 latency-based
              routing for consistent low-latency routing. For your data layer, DynamoDB global tables will give you
              lower replication overhead than Aurora Global Database, though Aurora is worth considering if you need
              complex relational queries across regions.
            </Box>
          </ChatBubble>
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

### High stakes and auditable contexts

In contexts where the cost of a wrong decision is high, such as security configuration, compliance, or infrastructure changes, displaying thinking gives users visibility into how AI approached a problem before they act on its response.

### Generative AI assistant

JD Review this IAM policy and tell me if it follows least privilege principles. Thought for 14s Reviewing the policy for least privilege compliance. Checking each permission block. Found s3:* on all resources, this is overly broad. Found iam:* which grants full identity and access management control, this is a significant security risk. Found ec2:* scoped to a specific instance but the action is still too broad. Cross-referenced against AWS least privilege best practices. Identifying replacement actions for each violation. Generating a response... Use of this service is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/)
```
import React from 'react';
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Avatar from '@cloudscape-design/chat-components/avatar';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import { genAiAvatarAriaLabel, genAiName, userAvatar, userName } from '../genai-common/avatars';
import CustomGenAIChatFooter from '../gen-ai-response-regeneration/custom-gen-ai-chat-footer';

export default function ThinkingHighStakesAuditable() {
  return (
    <Container
      header={<Header variant="h3">Generative AI assistant</Header>}
      footer={<CustomGenAIChatFooter actionButtonIconName="send" actionButtonAriaLabel="Send message" />}
    >
      <div role="region" aria-label="Chat" style={{ minHeight: 280 }}>
        <SpaceBetween size="xs">
          <ChatBubble type="outgoing" ariaLabel={`${userName} at 10:00am`} avatar={userAvatar}>
            Review this IAM policy and tell me if it follows least privilege principles.
          </ChatBubble>

          <ChatBubble
            type="incoming"
            ariaLabel={`${genAiName} at 10:00am`}
            avatar={
              <Avatar
                ariaLabel={genAiAvatarAriaLabel}
                color="gen-ai"
                iconName="gen-ai"
                tooltipText={genAiName}
                loading={true}
              />
            }
          >
            <ExpandableSection
              variant="inline"
              defaultExpanded
              headerText={
                <Box fontSize="body-m" fontWeight="normal">
                  Thought for 14s
                </Box>
              }
            >
              <Box color="text-body-secondary" fontSize="body-s">
                Reviewing the policy for least privilege compliance. Checking each permission block. Found s3:* on all
                resources, this is overly broad. Found iam:* which grants full identity and access management control,
                this is a significant security risk. Found ec2:* scoped to a specific instance but the action is still
                too broad. Cross-referenced against AWS least privilege best practices. Identifying replacement actions
                for each violation.
              </Box>
            </ExpandableSection>
          </ChatBubble>

          <ChatBubble
            type="incoming"
            ariaLabel={`${genAiName} at 10:00am`}
            avatar={
              <Avatar
                ariaLabel={genAiAvatarAriaLabel}
                color="gen-ai"
                iconName="gen-ai"
                tooltipText={genAiName}
                loading={true}
              />
            }
            hideAvatar
          >
            <Box color="text-status-inactive">Generating a response...</Box>
          </ChatBubble>
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

### Agentic decision making

When an agent is deciding how to approach a problem, which service to query, or how to prioritize tasks, surfacing that decision-making process gives users a chance to review the agent's plan before execution begins. For example, before an agent begins diagnosing a Lambda timeout issue, it thinks through whether to suggest memory allocation, VPC configuration, or timeout settings first.

### Generative AI assistant

JD My lambda function keeps timing out, can you investigate and tell me what's wrong? Thinking... I need to investigate the Lambda timeout issue. Planning diagnostic approach.
1. Checked CloudWatch logs for invocation errors
2. Analyzed function memory and timeout configuration
3. Reviewing VPC and subnet connectivity

Use of this service is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/)
```
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Steps from '@cloudscape-design/components/steps';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import Avatar from '@cloudscape-design/chat-components/avatar';
import { genAiAvatarAriaLabel, genAiName, userAvatar, userName } from '../genai-common/avatars';
import CustomGenAIChatFooter from '../gen-ai-response-regeneration/custom-gen-ai-chat-footer';

export default function ThinkingAgenticDecisionMaking() {
  return (
    <Container
      header={<Header variant="h3">Generative AI assistant</Header>}
      footer={<CustomGenAIChatFooter actionButtonIconName="send" actionButtonAriaLabel="Send message" />}
    >
      <div role="region" aria-label="Chat" style={{ minHeight: 280 }}>
        <SpaceBetween size="xs">
          <ChatBubble type="outgoing" ariaLabel={`${userName} at 10:00am`} avatar={userAvatar}>
            My lambda function keeps timing out, can you investigate and tell me what&apos;s wrong?
          </ChatBubble>

          <ChatBubble
            type="incoming"
            ariaLabel={`${genAiName} at 10:00am`}
            avatar={
              <Avatar
                ariaLabel={genAiAvatarAriaLabel}
                color="gen-ai"
                iconName="gen-ai"
                tooltipText={genAiName}
                loading={true}
              />
            }
          >
            <ExpandableSection
              variant="inline"
              headerText={
                <Box fontSize="body-m" fontWeight="normal">
                  Thinking...
                </Box>
              }
            >
              <SpaceBetween size="xxs">
                <Box color="text-body-secondary" fontSize="body-s">
                  I need to investigate the Lambda timeout issue. Planning diagnostic approach.
                </Box>
                <Steps
                  steps={[
                    {
                      status: 'log',
                      statusIconAriaLabel: 'Info',
                      header: 'Checked CloudWatch logs for invocation errors',
                    },
                    {
                      status: 'log',
                      statusIconAriaLabel: 'Info',
                      header: 'Analyzed function memory and timeout configuration',
                    },
                    {
                      status: 'loading',
                      statusIconAriaLabel: 'In progress',
                      header: 'Reviewing VPC and subnet connectivity',
                    },
                  ]}
                />
              </SpaceBetween>
            </ExpandableSection>
          </ChatBubble>
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

## General guidelines

### Do

- Show thinking when additional reasoning is occurring to perform deeper analysis before generating a response.
- Display a skip thinking option when the system can deliver a complete response based on reasoning completed so far.
- Use the [steps](../../components/steps/guidelines.md)   component inside thinking when reasoning involves a sequence of actions, such as calling tools and evaluating approaches as part of its additional reasoning process.

### Don't

- Don't use thinking as a substitute for standard loading when AI is not performing additional reasoning.
- Don't replace the thinking label with thinking content. This can cause flickering and reduce clarity. Show thinking content inside the thinking content area instead.
- Don't use thinking to show the steps an agent is performing during response generation. Thinking represents internal reasoning, not external actions. To show structured agent activity as it happens, use the [progressive steps pattern](progressive-steps.md)   instead. For example, when a list of nodes is being checked when troubleshooting an EKS issue.

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

#### Thinking label

- The thinking label communicates there is additional reasoning occurring without over-explaining. Use a concise phrase that remains consistent while this reasoning is in progress.  

  - For example: *Thinking...*

#### Skip thinking

- Use clear, action-oriented language. Avoid referencing internal reasoning terms or implying an incomplete response. Follow writing guidelines for [inline link button](../../components/button/guidelines.md)  .  

  - For example: *Skip thinking*

#### Completed thought label

- The completed thought label communicates that the thinking has completed. Use descriptive, user-facing language. Display duration of thinking as simple, rounded values.  

  - For example: *Thought for 14s, Completed thinking*

#### Thinking content

- Write thought narrations as brief, easy to understand statements that describe the current activity.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
