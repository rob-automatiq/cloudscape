# In-flow user input

> Source: https://cloudscape.design/gen-ai/patterns/in-flow-user-input/ (fetched 2026-09-24)

Inline interactions that collect structured input or allow users to review and modify agent-generated output within a generative AI chat.

## Key UX concepts

#### The right information at the right time

Only present an interaction when the agent understands the user's intent and needs something specific from the user to proceed. Don't front-load interactions that could be deferred or resolved automatically.

#### Explain why input is needed

Help users understand the value in providing additional information. Highlight how their input enables the agent to generate better output or execute actions correctly, and the expected outcome.

#### Match input mechanism to information type

Display input methods that complement the type of information to be collected. Questions with a finite set of answers, such as selecting resource IDs or timestamps, should use a succinct [form](../../components/form/guidelines.md) . This reduces errors and improves data quality.

## Common use cases

#### Agent needs multiple inputs to execute an action

An inline form collects the required values directly in the conversation. For example, agent is helping create a resource and progressively displays forms inline based on what information is needed. The steps are synchronous; the output of the previous step, determines the next. Forms appear sequentially and may have agent responses between each step. Completed steps show a summarized read only view.

### Generative AI assistant

JD Set up a scheduled Lambda that runs a cleanup job nightly. I'll create a Lambda function triggered by an EventBridge schedule rule to run your cleanup job every night. I just need a few configuration details.

#### Lambda function setupComplete

Function name Runtime Python 3.12 Memory (MB) 256 MB Timeout (seconds) Schedule Every night at midnight UTC Create function Use of this service is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/)
```
import React, { useState } from 'react';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import ItemCard from '@cloudscape-design/components/item-card';
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs';
import Select, { SelectProps } from '@cloudscape-design/components/select';
import SpaceBetween from '@cloudscape-design/components/space-between';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import { genAiAvatar, genAiName, userAvatar, userName } from '../genai-common/avatars';
import CustomGenAIChatFooter from '../gen-ai-response-regeneration/custom-gen-ai-chat-footer';
import '../genai-common/styles.scss';

export default function GenAiInlineChatActionsFormInput() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [responseReady, setResponseReady] = useState(false);
  const [streamedText, setStreamedText] = useState('');
  const [streamComplete, setStreamComplete] = useState(false);

  const [functionName, setFunctionName] = useState('nightly-cleanup');
  const [functionNameError, setFunctionNameError] = useState('');
  const [runtime, setRuntime] = useState<SelectProps.Option | null>({ value: 'python312', label: 'Python 3.12' });
  const [memory, setMemory] = useState<SelectProps.Option | null>({ value: '256', label: '256 MB' });
  const [timeoutSeconds, setTimeoutSeconds] = useState('30');
  const [schedule, setSchedule] = useState<SelectProps.Option | null>({
    value: 'midnight',
    label: 'Every night at midnight UTC',
  });
  const [targetResource, setTargetResource] = useState('');

  const fullResponse =
    "Done. I've created nightly-cleanup with Python 3.12, 256 MB memory, and a 30-second timeout. Now that the function exists, I need to configure what triggers it. Since you chose EventBridge, I'll need a few more details about the event source mapping.";

  const validateName = () => {
    if (!functionName.trim()) {
      return 'Function name is required.';
    }
    if (!/^[a-zA-Z0-9\-_]+$/.test(functionName)) {
      return 'Function name can only contain letters, numbers, hyphens, and underscores.';
    }
    return '';
  };

  const streamResponse = () => {
    setResponseReady(true);
    let index = 0;
    const interval = window.setInterval(() => {
      index += 2;
      if (index >= fullResponse.length) {
        setStreamedText(fullResponse);
        setStreamComplete(true);
        window.clearInterval(interval);
      } else {
        setStreamedText(fullResponse.slice(0, index));
      }
    }, 20);
  };

  const handleSubmit = () => {
    const error = validateName();
    setFunctionNameError(error);
    if (error) {
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
    window.setTimeout(() => setExpanded(false), 2800);
    window.setTimeout(streamResponse, 6000);
  };

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
      <div role="region" aria-label="Chat" className="chat-region">
        <SpaceBetween size="xs">
          <ChatBubble type="outgoing" ariaLabel={`${userName} at 10:00am`} avatar={userAvatar}>
            Set up a scheduled Lambda that runs a cleanup job nightly.
          </ChatBubble>

          <ChatBubble type="incoming" ariaLabel={`${genAiName} at 10:00am`} avatar={genAiAvatar}>
            <Box variant="p">
              I&apos;ll create a Lambda function triggered by an EventBridge schedule rule to run your cleanup job every
              night. I just need a few configuration details.
            </Box>
          </ChatBubble>

          <div className="chat-bubble-indentation">
            <ItemCard variant="embedded">
              <ExpandableSection
                variant="inline"
                expanded={expanded}
                onChange={({ detail }) => setExpanded(detail.expanded)}
                headerText={
                  <SpaceBetween direction="horizontal" size="xs" alignItems="center">
                    <Box fontSize="body-m" fontWeight="bold">
                      Lambda function setup
                    </Box>
                    
                      <StatusIndicator type="success">Complete</StatusIndicator>
                    
                  </SpaceBetween>
                }
                headingTagOverride="h4"
              >
                {!submitted ? (
                  <SpaceBetween size="s">
                    <FormField label="Function name" errorText={functionNameError}>
                      <Input
                        value={functionName}
                        onChange={({ detail }) => {
                          setFunctionName(detail.value);
                          setFunctionNameError('');
                        }}
                        placeholder="my-function-name"
                        disabled={loading}
                        invalid={!!functionNameError}
                      />
                    </FormField>
                    <FormField label="Runtime">
                      <Select
                        placeholder="Choose runtime"
                        selectedOption={runtime}
                        onChange={({ detail }) => setRuntime(detail.selectedOption)}
                        options={[
                          { value: 'nodejs20', label: 'Node.js 20.x' },
                          { value: 'python312', label: 'Python 3.12' },
                          { value: 'java21', label: 'Java 21' },
                          { value: 'go', label: 'Go 1.x' },
                        ]}
                        disabled={loading}
                      />
                    </FormField>
                    <FormField label="Memory (MB)">
                      <Select
                        selectedOption={memory}
                        onChange={({ detail }) => setMemory(detail.selectedOption)}
                        options={[
                          { value: '128', label: '128 MB' },
                          { value: '256', label: '256 MB' },
                          { value: '512', label: '512 MB' },
                          { value: '1024', label: '1024 MB' },
                        ]}
                        disabled={loading}
                      />
                    </FormField>
                    <FormField label="Timeout (seconds)">
                      <Input
                        value={timeoutSeconds}
                        onChange={({ detail }) => setTimeoutSeconds(detail.value)}
                        type="number"
                        disabled={loading}
                      />
                    </FormField>
                    <FormField label="Schedule">
                      <Select
                        selectedOption={schedule}
                        onChange={({ detail }) => setSchedule(detail.selectedOption)}
                        options={[
                          { value: 'midnight', label: 'Every night at midnight UTC' },
                          { value: '2am', label: 'Every night at 2:00 AM UTC' },
                          { value: '4am', label: 'Every night at 4:00 AM UTC' },
                          { value: 'custom', label: 'Custom cron expression' },
                        ]}
                        disabled={loading}
                      />
                    </FormField>
                    <Box padding={{ top: 's' }} float="right">
                      <Button variant="primary" onClick={handleSubmit} loading={loading}>
                        Create function
                      </Button>
                    </Box>
                  </SpaceBetween>
                ) : (
                  <KeyValuePairs
                    columns={2}
                    items={[
                      { label: 'Function name', value: functionName },
                      { label: 'Runtime', value: runtime?.label ?? '' },
                      { label: 'Memory (MB)', value: memory?.label ?? '' },
                      { label: 'Timeout (seconds)', value: timeoutSeconds },
                      { label: 'Schedule', value: schedule?.label ?? '' },
                    ]}
                  />
                )}
              </ExpandableSection>
            </ItemCard>
          </div>

          {submitted && !responseReady && (
            <ChatBubble type="incoming" ariaLabel={`${genAiName} at 10:01am`} avatar={genAiAvatar} hideAvatar>
              <Box color="text-status-inactive">Generating a response</Box>
            </ChatBubble>
          )}

          {responseReady && (
            <ChatBubble type="incoming" ariaLabel={`${genAiName} at 10:01am`} avatar={genAiAvatar} hideAvatar>
              <Box variant="p">{streamedText}</Box>
            </ChatBubble>
          )}

          {streamComplete && (
            <div className="chat-bubble-indentation">
              <ItemCard variant="embedded">
                <ExpandableSection
                  variant="inline"
                  defaultExpanded
                  headerText={
                    <Box fontSize="body-m" fontWeight="bold">
                      Event source mapping
                    </Box>
                  }
                  headingTagOverride="h4"
                >
                  <SpaceBetween size="s">
                    <FormField label="Source type">
                      <Select
                        placeholder="Choose source"
                        selectedOption={{ value: 'eventbridge', label: 'EventBridge' }}
                        options={[
                          { value: 'eventbridge', label: 'EventBridge' },
                          { value: 'sqs', label: 'SQS' },
                          { value: 's3', label: 'S3' },
                          { value: 'dynamodb', label: 'DynamoDB Streams' },
                        ]}
                      />
                    </FormField>
                    <FormField label="Target resources">
                      <Input
                        value={targetResource}
                        onChange={({ detail }) => setTargetResource(detail.value)}
                        placeholder="e.g. arn:aws:s3:::my-bucket"
                      />
                    </FormField>
                    <Box padding={{ top: 's' }} float="right">
                      <Button variant="primary">Configure mapping</Button>
                    </Box>
                  </SpaceBetween>
                </ExpandableSection>
              </ItemCard>
            </div>
          )}
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

#### Agent needs input as part of a multi-step process

Steps are independent and the agent can process them without waiting for previous results. Forms appear as individual collapsible cards within the conversation. Each step resolves on its own and doesn't block subsequent steps, similar to asynchronous creation.

### Generative AI assistant

JD Help me set up a nightly cleanup Lambda function. Happy to help. I'll walk you through the setup step by step.

1. Lambda function setup (1 of 3)   Complete   Function name   nightly-cleanup   Runtime   Python 3.12   Memory   256 MB   Timeout   30 seconds
2. EventBridge schedule (2 of 3)   Complete   Schedule   Every night at midnight UTC   Target   nightly-cleanup
3. Target resources (3 of 3)   Which resources should the cleanup function target?  

  Resource ARN   View available S3 buckets   AWS Region   Choose a region   Configure

Use of this service is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/)
```
import React, { useState } from 'react';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import ItemCard from '@cloudscape-design/components/item-card';
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs';
import Link from '@cloudscape-design/components/link';
import Select, { SelectProps } from '@cloudscape-design/components/select';
import SpaceBetween from '@cloudscape-design/components/space-between';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import { genAiAvatar, genAiName, userAvatar, userName } from '../genai-common/avatars';
import CustomGenAIChatFooter from '../gen-ai-response-regeneration/custom-gen-ai-chat-footer';
import '../genai-common/styles.scss';
import './styles.scss';

export default function GenAiInlineChatActionsMultiStep() {
  const [prompt, setPrompt] = useState('');
  const [executionId, setExecutionId] = useState('');
  const [region, setRegion] = useState<SelectProps.Option | null>(null);

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
      <div role="region" aria-label="Chat" className="chat-region">
        <SpaceBetween size="xs">
          <ChatBubble type="outgoing" ariaLabel={`${userName} at 10:00am`} avatar={userAvatar}>
            Help me set up a nightly cleanup Lambda function.
          </ChatBubble>

          <ChatBubble type="incoming" ariaLabel={`${genAiName} at 10:00am`} avatar={genAiAvatar}>
            <Box variant="p">Happy to help. I&apos;ll walk you through the setup step by step.</Box>
          </ChatBubble>

          <div className="chat-bubble-indentation">
            <ol className="step-list">
              <li className="step-list-item">
                <ItemCard
                  variant="embedded"
                  header={
                    <ExpandableSection
                      variant="inline"
                      headerText={
                        <SpaceBetween direction="horizontal" size="xs" alignItems="center">
                          <Box fontSize="body-m" fontWeight="bold">
                            Lambda function setup (1 of 3)
                          </Box>
                          <StatusIndicator type="success">Complete</StatusIndicator>
                        </SpaceBetween>
                      }
                    >
                      <KeyValuePairs
                        columns={2}
                        items={[
                          { label: 'Function name', value: 'nightly-cleanup' },
                          { label: 'Runtime', value: 'Python 3.12' },
                          { label: 'Memory', value: '256 MB' },
                          { label: 'Timeout', value: '30 seconds' },
                        ]}
                      />
                    </ExpandableSection>
                  }
                />
              </li>
              <li className="step-list-item">
                <ItemCard
                  variant="embedded"
                  header={
                    <ExpandableSection
                      variant="inline"
                      headerText={
                        <SpaceBetween direction="horizontal" size="xs" alignItems="center">
                          <Box fontSize="body-m" fontWeight="bold">
                            EventBridge schedule (2 of 3)
                          </Box>
                          <StatusIndicator type="success">Complete</StatusIndicator>
                        </SpaceBetween>
                      }
                    >
                      <KeyValuePairs
                        columns={2}
                        items={[
                          { label: 'Schedule', value: 'Every night at midnight UTC' },
                          { label: 'Target', value: 'nightly-cleanup' },
                        ]}
                      />
                    </ExpandableSection>
                  }
                />
              </li>
              <li className="step-list-item">
                <ItemCard
                  variant="embedded"
                  header={
                    <ExpandableSection
                      variant="inline"
                      defaultExpanded
                      headerText={
                        <Box fontSize="body-m" fontWeight="bold">
                          Target resources (3 of 3)
                        </Box>
                      }
                    >
                      <SpaceBetween size="s">
                        <Box variant="p">Which resources should the cleanup function target?</Box>
                        <FormField
                          label="Resource ARN"
                          description={
                            
                              View available{' '}
                              <Link external href="#">
                                S3 buckets
                              </Link>
                            
                          }
                        >
                          <Input
                            value={executionId}
                            onChange={({ detail }) => setExecutionId(detail.value)}
                            placeholder="e.g. arn:aws:s3:::my-bucket"
                          />
                        </FormField>
                        <FormField label="AWS Region">
                          <Select
                            placeholder="Choose a region"
                            selectedOption={region}
                            onChange={({ detail }) => setRegion(detail.selectedOption)}
                            options={[
                              { value: 'us-east-1', label: 'US East (N. Virginia)' },
                              { value: 'us-west-2', label: 'US West (Oregon)' },
                              { value: 'eu-west-1', label: 'Europe (Ireland)' },
                              { value: 'ap-southeast-1', label: 'Asia Pacific (Singapore)' },
                            ]}
                          />
                        </FormField>
                        <Box padding={{ top: 's' }} float="right">
                          <Button variant="primary">Configure</Button>
                        </Box>
                      </SpaceBetween>
                    </ExpandableSection>
                  }
                />
              </li>
            </ol>
          </div>
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

#### Editing values inline

An inline edit within the response allows the user to review and optionally modify the value the agent has created.

### Generative AI assistant

JD I want to build a landing page for my SaaS product. It needs a waitlist signup form and Stripe payment integration for early access. I've created an environment for you so we have a place to track everything, code, infrastructure, and deployments.

Project FreelancerHub Now a few quick questions so I can set up the right backend for you:

Use of this service is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/)
```
import React, { useState } from 'react';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import SpaceBetween from '@cloudscape-design/components/space-between';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import { genAiAvatar, genAiName, userAvatar, userName } from '../genai-common/avatars';
import CustomGenAIChatFooter from '../gen-ai-response-regeneration/custom-gen-ai-chat-footer';
import '../genai-common/styles.scss';
import './styles.scss';

export default function GenAiInlineChatActionsInlineEdit() {
  const [prompt, setPrompt] = useState('');
  const [projectName, setProjectName] = useState('FreelancerHub');
  const [editValue, setEditValue] = useState('FreelancerHub');
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState('');

  const handleEdit = () => {
    setEditValue(projectName);
    setEditing(true);
    setError('');
  };

  const handleConfirm = () => {
    if (!editValue.trim()) {
      setError('Project name is required.');
      return;
    }
    setProjectName(editValue);
    setEditing(false);
    setError('');
  };

  const handleCancel = () => {
    setEditing(false);
    setError('');
  };

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
      <div role="region" aria-label="Chat" className="chat-region">
        <SpaceBetween size="xs">
          <ChatBubble type="outgoing" ariaLabel={`${userName} at 10:00am`} avatar={userAvatar}>
            I want to build a landing page for my SaaS product. It needs a waitlist signup form and Stripe payment
            integration for early access.
          </ChatBubble>

          <ChatBubble type="incoming" ariaLabel={`${genAiName} at 10:00am`} avatar={genAiAvatar}>
            <SpaceBetween size="s">
              <Box variant="p">
                I&apos;ve created an environment for you so we have a place to track everything, code, infrastructure,
                and deployments.
              </Box>

              {!editing ? (
                <div className="inline-edit-row">
                  <StatusIndicator type="success">Project {projectName}</StatusIndicator>
                  <Button iconName="edit" variant="inline-icon" ariaLabel="Edit project name" onClick={handleEdit} />
                </div>
              ) : (
                <SpaceBetween size="xxs">
                  <div className="inline-edit-row">
                    <StatusIndicator type="success">Project</StatusIndicator>
                    <div className="inline-edit-content">
                      <Input
                        value={editValue}
                        onChange={({ detail }) => {
                          setEditValue(detail.value);
                          setError('');
                        }}
                        ariaLabel="Project name"
                        invalid={!!error}
                      />
                    </div>
                    <Button iconName="check" variant="inline-icon" ariaLabel="Confirm" onClick={handleConfirm} />
                    <Button iconName="close" variant="inline-icon" ariaLabel="Cancel" onClick={handleCancel} />
                  </div>
                  {error && (
                    <Box color="text-status-error" fontSize="body-s">
                      {error}
                    </Box>
                  )}
                </SpaceBetween>
              )}

              <Box variant="p">Now a few quick questions so I can set up the right backend for you:</Box>
            </SpaceBetween>
          </ChatBubble>
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

## General guidelines

### Do

- Limit to 5 or fewer input fields per form to keep cognitive load low.
- When a value in the response is editable inline, display an edit icon button next to it so users can identify it as modifiable.
- For interaction with a single form, disable inputs and show a success indicator after submission.
- When possible, pre-fill fields with values inferred from context to reduce user effort.

### Don't

- Don't use embedded flows to clarify user intent. Inline form input collects values to execute an action. If you need to clarify user intent, use [follow-up questions](follow-up-questions.md)   instead.
- Don't include optional fields. Only ask for what's required to proceed.

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

#### Card title

- Be specific to the resource or action. Avoid generic labels like *Information required*   or *Configuration needed.*

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
