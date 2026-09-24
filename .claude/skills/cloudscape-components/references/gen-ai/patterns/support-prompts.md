# Support prompts

> Source: https://cloudscape.design/gen-ai/patterns/support-prompts/ (fetched 2026-09-24)

Prompts in generative AI chats that present recommended inputs to the user

## Key UX concepts

### Types

Support prompts in AI workflows can be largely categorized into two types: non-editable prompts and editable prompts. The distinction is based on what happens when a user selects them.

- **Non-editable: **   These prompts send immediately upon selection without appearing in the prompt input.
- **Editable: **   Editable prompts populate the prompt input field when selected, allowing users to review, modify, or replace the [variables](variables.md)   in the prompt template before sending.

### Affordance for editability

Editable prompts do not execute on selection. The interface should clearly signal that the prompt can be edited with an edit icon before any interaction occurs. A designated visual affordance sets the correct expectation that selecting the prompt will insert the editable text.

### No persistent state

Selecting a prompt is a one-time interaction that inserts text into the prompt input. [Support prompts](support-prompts.md) do not maintain state upon selection. Selecting a prompt is a one-time interaction that either populates the prompt input in editable prompts or sends immediately with non-editable prompts.

## Common use cases

### Helping users get started

Editable prompts can be useful when users are beginning an AI interaction. They act as starting points, or icebreakers, that users can select from to get started.

# Welcome to the AI assistant

Choose a prompt below or type your own in the prompt input to begin a conversation.

Explain my cost trends Visualizes spending over time Analyze my EC2 instance performance Reviews compute metrics and optimization Generate a cost optimization report Actionable recommendations to reduce spending Use of this service is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/)
```
import Container from '@cloudscape-design/components/container';
import Box from '@cloudscape-design/components/box';
import SpaceBetween from '@cloudscape-design/components/space-between';
import SupportPromptGroup, { type SupportPromptGroupProps } from '@cloudscape-design/chat-components/support-prompt-group';
import CustomGenAIChatFooter from '../gen-ai-response-regeneration/custom-gen-ai-chat-footer';
import './styles.scss';
import { useState } from 'react';

export default function GenAiSupportPromptGetStarted() {
  const [message, setMessage] = useState('');
  const items: SupportPromptGroupProps.Item[] = [
    {
      text: (
        <SpaceBetween direction="vertical" size="xxxs">
          Explain my cost trends
          <Box fontSize="body-s" color="text-body-secondary">
            Visualizes spending over time
          </Box>
        </SpaceBetween>
      ),
      iconName: 'edit',
      iconPosition: 'right',
      id: 'explain-cost-trends',
    },
    {
      text: (
        <SpaceBetween direction="vertical" size="xxxs">
          Analyze my EC2 instance performance
          <Box fontSize="body-s" color="text-body-secondary">
            Reviews compute metrics and optimization
          </Box>
        </SpaceBetween>
      ),
      iconName: 'edit',
      iconPosition: 'right',
      id: 'analyze-ec2-instance-performance',
    },
    {
      text: (
        <SpaceBetween direction="vertical" size="xxxs">
          Generate a cost optimization report
          <Box fontSize="body-s" color="text-body-secondary">
            Actionable recommendations to reduce spending
          </Box>
        </SpaceBetween>
      ),
      iconName: 'edit',
      iconPosition: 'right',
      id: 'generate-cost-optimization-report',
    },
  ];
  const itemMessages: Record<string, string> = {
    'explain-cost-trends':
      'Analyze my AWS cost trends over the past <time_period>. Break down spending by <breakdown_dimension>, identify any significant increases or decreases, and highlight the top <number> cost drivers.',
    'analyze-ec2-instance-performance':
      'Analyze the performance of my EC2 instances in <region> over the past <time_period>. Review CPU utilization, memory usage, and network throughput, identify any underutilized or over-provisioned instances, and recommend <number> optimization actions.',
    'generate-cost-optimization-report':
      'Generate a cost optimization report for my AWS account covering the past <time_period>. Identify unused or underutilized resources, highlight potential savings by <savings_category>, and provide the top <number> actionable recommendations to reduce spending.',
  };
  return (
    <Container
      footer={
        <CustomGenAIChatFooter
          message={message}
          onSendMessage={setMessage}
          actionButtonIconName="send"
          actionButtonAriaLabel="Send message"
        />
      }
    >
      <div className="welcome-container">
        <img src="/robot.svg" alt="AI Assistant" width={99} height={87} />
        <SpaceBetween size="xxxs">
          <Box variant="h1" textAlign="center">
            Welcome to the AI assistant
          </Box>
          <Box variant="p" color="text-body-secondary" textAlign="center">
            Choose a prompt below or type your own in the prompt input to begin a conversation.
          </Box>
        </SpaceBetween>
        <SupportPromptGroup
          ariaLabel="Suggested prompts"
          alignment="horizontal"
          onItemClick={({ detail }) => {
            setMessage(itemMessages[detail.id] ?? '');
          }}
          items={items}
        />
      </div>
    </Container>
  );
}
```

### Guiding users during a conversation

Non-editable prompts help maintain conversation flow by proactively suggesting contextually relevant next steps. Users can quickly select these suggestions to continue the interaction without composing their own prompt, making the experience feel more guided.

How can I help? JD My AWS bill increased by 30% last month and I need to understand why I've analyzed your billing data and identified cost increases across multiple regions and services. To help you investigate further, I can generate a comprehensive cost report covering both EC2 and S3, or create a workflow one service at a time. Create comprehensive cost report Create individual cost report for my service Use of this service is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/)
```
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import ChatBubble, { ChatBubbleProps } from '@cloudscape-design/chat-components/chat-bubble';
import SupportPromptGroup, { type SupportPromptGroupProps } from '@cloudscape-design/chat-components/support-prompt-group';
import { genAiAvatar, userAvatar, userName } from '../genai-common/avatars';
import CustomGenAIChatFooter from '../gen-ai-response-regeneration/custom-gen-ai-chat-footer';
import { useState } from 'react';
import '../genai-common/styles.scss';

export default function GenAiSupportPromptDuringConversation() {
  const [chatHistory, setChatHistory] = useState([
    {
      avatar: genAiAvatar,
      type: 'incoming',
      ariaLabel: 'AI Assistant chat initiation message',
      message: 'How can I help?',
    },
    {
      avatar: userAvatar,
      type: 'outgoing',
      ariaLabel: `${userName} at 05:37:30pm`,
      message: 'My AWS bill increased by 30% last month and I need to understand why',
    },
    {
      avatar: genAiAvatar,
      type: 'incoming',
      ariaLabel: 'AI Assistant response',
      message:
        "I've analyzed your billing data and identified cost increases across multiple regions and services. To help you investigate further, I can generate a comprehensive cost report covering both EC2 and S3, or create a workflow one service at a time.",
    },
  ]);
  const items: SupportPromptGroupProps.Item[] = [
    { text: 'Create comprehensive cost report', id: 'create-comprehensive-cost-report' },
    { text: 'Create individual cost report for my service', id: 'create-individual-cost-report-for-service' },
  ];
  const itemMessages: Record<string, string> = {
    'create-comprehensive-cost-report': 'Create comprehensive cost report',
    'create-individual-cost-report-for-service': 'Create individual cost report for my service',
  };

  return (
    <Container footer={<CustomGenAIChatFooter actionButtonIconName="send" actionButtonAriaLabel="Send message" />}>
      <div className="chat-container">
        <SpaceBetween size="xs">
          {chatHistory.map((message, index) => {
            return (
              <ChatBubble
                key={index}
                avatar={message.avatar}
                type={message.type as ChatBubbleProps.Type}
                ariaLabel={message.ariaLabel}
              >
                {message.message}
              </ChatBubble>
            );
          })}
          {chatHistory.length === 3 ? (
            <div className="chat-bubble-indentation">
              <SupportPromptGroup
                ariaLabel="Suggested prompts"
                onItemClick={({ detail }) => {
                  setChatHistory(prevChatHistory => [
                    ...prevChatHistory,
                    {
                      avatar: userAvatar,
                      type: 'outgoing',
                      ariaLabel: `${userName} at 05:37:30pm`,
                      message: itemMessages[detail.id] ?? '',
                    },
                  ]);
                }}
                items={items}
              />
            </div>
          ) : null}
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

## General guidelines

### Do

- Enable users to edit all text after inserting an editable prompt into the [prompt input](../../components/prompt-input/guidelines.md)  .
- Use [variables](variables.md)   in editable prompt text to indicate expected customization. For example, when a user selects "Analyze my AWS cost trends over the past <time_period>," they understand that <time_period> is the primary element to customize.

### Don't

- Avoid using editable prompts when prompts should be sent directly into the conversation. For example, use non-editable prompts for contextual [follow-up questions](follow-up-questions.md)   , or suggestions like "Show me more details" or "Compare with last quarter" that users can quickly select and send without customization.
- Don't disable text inserted from a prompt template.

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

#### Variable text

- Follow the writing guidelines for [variables](variables.md)  .

#### Support prompt labels

- Follow the writing guidelines for [support prompt group](../../components/support-prompt-group/guidelines.md)  .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
