# In-chat context

> Source: https://cloudscape.design/gen-ai/patterns/in-chat-context/ (fetched 2026-09-24)

This pattern covers ways users provide context to an agent during a chat interaction.

## Key UX concepts

### Match the method to the context source

The way context enters the conversation should reflect where it lives. External or third-party services may need authorization outside of the user's environment. Local files need upload affordances. Knowledge in the user's head needs natural language.

### Confirm what was understood

After context is provided, the agent should acknowledge what it received and how it will use it. This builds trust that the context was correctly interpreted and gives users a chance to correct misunderstandings before the agent acts on them.

### Minimize setup friction

Context-adding should feel lightweight, not like filling out a form. Pre-fill what can be inferred, collapse completed steps, and avoid asking for information the system already has. The goal is to get from "user has context" to "agent has context" in as few interactions as possible.

## Common use cases

#### Connecting an external service as context

Users connect a third-party service to give the agent access to existing resources. A multi-step inline flow handles authorization and resource selection directly in the conversation.

### Generative AI assistant

JD I have a repo. Connect my existing third-party repository so I can keep working on it in this chat. Great - let me connect to your third-party account so I can access your code.
#### Connect to repositorySuccessfully connected as John-Doe-Dev

I need permission to read your repositories. This is a one-time authorization.

Connect third-party account
```
import React, { useState } from 'react';
import ActionCard from '@cloudscape-design/components/action-card';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import ButtonGroup from '@cloudscape-design/components/button-group';
import Container from '@cloudscape-design/components/container';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import Header from '@cloudscape-design/components/header';
import ItemCard from '@cloudscape-design/components/item-card';
import PromptInput from '@cloudscape-design/components/prompt-input';
import SpaceBetween from '@cloudscape-design/components/space-between';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import { genAiAvatar, genAiLoadingAvatar, genAiName, userAvatar, userName } from '../genai-common/avatars';
import '../genai-common/styles.scss';

export default function ContextEnrichmentExternalService() {
  const [prompt, setPrompt] = useState('');
  const [expanded, setExpanded] = useState(true);
  const [connected, setConnected] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [repoCardReady, setRepoCardReady] = useState(false);
  const [repoExpanded, setRepoExpanded] = useState(true);
  const [repoSelected, setRepoSelected] = useState(false);
  const [generatingRepo, setGeneratingRepo] = useState(false);
  const [finalGenerating, setFinalGenerating] = useState(false);

  const handleConnect = () => {
    setConnected(true);
    window.setTimeout(() => {
      setExpanded(false);
      setGenerating(true);
    }, 800);
    window.setTimeout(() => {
      setGenerating(false);
      setRepoCardReady(true);
    }, 4000);
  };

  const handleSelectRepo = () => {
    setRepoSelected(true);
    window.setTimeout(() => {
      setRepoExpanded(false);
      setGeneratingRepo(true);
    }, 800);
    window.setTimeout(() => {
      setGeneratingRepo(false);
      setFinalGenerating(true);
    }, 4000);
  };

  return (
    <Container
      header={<Header variant="h3">Generative AI assistant</Header>}
      footer={
        <PromptInput
          value={prompt}
          onChange={({ detail }) => setPrompt(detail.value)}
          actionButtonIconName="send"
          actionButtonAriaLabel="Send message"
          disableSecondaryActionsPaddings
          secondaryActions={
            <Box padding={{ left: 'xxs', top: 'xs' }}>
              <ButtonGroup
                ariaLabel="Additional chat input actions"
                items={[
                  { type: 'icon-button', id: 'upload-files', iconName: 'upload', text: 'Upload files' },
                  { type: 'icon-button', id: 'add-reference', iconName: 'at-symbol', text: 'Add reference' },
                ]}
                variant="icon"
              />
            </Box>
          }
        />
      }
    >
      <div role="region" aria-label="Chat" style={{ minHeight: 280 }}>
        <SpaceBetween size="xs">
          <ChatBubble type="outgoing" ariaLabel={`${userName} at 2:15pm`} avatar={userAvatar}>
            I have a repo. Connect my existing third-party repository so I can keep working on it in this chat.
          </ChatBubble>

          <ChatBubble
            type="incoming"
            ariaLabel={`${genAiName} at 2:15pm`}
            avatar={generating || generatingRepo || finalGenerating ? genAiLoadingAvatar : genAiAvatar}
          >
            Great - let me connect to your third-party account so I can access your code.
          </ChatBubble>

          <div className="chat-bubble-indentation">
            <ItemCard variant="embedded">
              <ExpandableSection
                variant="inline"
                expanded={expanded}
                onChange={({ detail }) => setExpanded(detail.expanded)}
                headerText={
                  <SpaceBetween direction="horizontal" size="xs" alignItems="center">
                    <Box fontSize="heading-xs" fontWeight="bold">
                      Connect to repository
                    </Box>
                    
                      <StatusIndicator type="success">Successfully connected as John-Doe-Dev</StatusIndicator>
                    
                  </SpaceBetween>
                }
                headingTagOverride="h4"
              >
                {connected ? (
                  <Box color="text-body-secondary">Connected as John-Doe-Dev via third-party OAuth.</Box>
                ) : (
                  <SpaceBetween size="s">
                    <Box variant="p">
                      I need permission to read your repositories. This is a one-time authorization.
                    </Box>
                    <Button iconName="external" iconAlign="right" onClick={handleConnect} disabled={connected}>
                      Connect third-party account
                    </Button>
                  </SpaceBetween>
                )}
              </ExpandableSection>
            </ItemCard>
          </div>

          {generating && (
            <ChatBubble type="incoming" ariaLabel={`${genAiName} at 2:16pm`} avatar={genAiAvatar} hideAvatar>
              <Box color="text-status-inactive">Generating a response</Box>
            </ChatBubble>
          )}

          {repoCardReady && (
            <div className="chat-bubble-indentation">
              <ItemCard variant="embedded">
                <ExpandableSection
                  variant="inline"
                  expanded={repoExpanded}
                  onChange={({ detail }) => setRepoExpanded(detail.expanded)}
                  headerText={
                    <SpaceBetween direction="horizontal" size="xs" alignItems="center">
                      <Box fontSize="heading-xs" fontWeight="bold">
                        Select repository
                      </Box>
                      
                        <StatusIndicator type="success">Connected to repository</StatusIndicator>
                      
                    </SpaceBetween>
                  }
                  headingTagOverride="h4"
                >
                  <SpaceBetween size="xs">
                    <ActionCard
                      variant="embedded"
                      header={
                        <Box
                          fontSize="body-m"
                          fontWeight="bold"
                          color={repoSelected ? 'text-status-inactive' : undefined}
                        >
                          freelancerhub-landing
                        </Box>
                      }
                      description="Next.js landing page with waitlist · 2 days ago"
                      onClick={handleSelectRepo}
                      disabled={repoSelected}
                    />
                    <ActionCard
                      variant="embedded"
                      header={
                        <Box fontSize="body-m" fontWeight="bold" color="text-status-inactive">
                          freelancerhub-api
                        </Box>
                      }
                      description="Backend API (WIP) · 1 week ago"
                      disabled
                    />
                    <ActionCard
                      variant="embedded"
                      header={
                        <Box fontSize="body-m" fontWeight="bold" color="text-status-inactive">
                          personal-site
                        </Box>
                      }
                      description="Portfolio website · 3 weeks ago"
                      disabled
                    />
                  </SpaceBetween>
                </ExpandableSection>
              </ItemCard>
            </div>
          )}

          {generatingRepo && (
            <ChatBubble type="incoming" ariaLabel={`${genAiName} at 2:17pm`} avatar={genAiAvatar} hideAvatar>
              <Box color="text-status-inactive">Generating a response</Box>
            </ChatBubble>
          )}

          {finalGenerating && (
            <ChatBubble type="incoming" ariaLabel={`${genAiName} at 2:18pm`} avatar={genAiAvatar} hideAvatar>
              <Box color="text-status-inactive">Generating a response</Box>
            </ChatBubble>
          )}
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

#### Uploading local files as context

Users attach local files alongside their prompt to give the agent immediate access to relevant content like configuration files, documents, or images.

### Generative AI assistant

What can I help you with? JD I need help setting up a deployment pipeline for my project. I can help with that! Do you have any configuration files you can share for context?
- buildspec.yaml   2.4 KB

I'm working on a deployment pipeline and need help configuring it. Use these files as context for this project.
```
import React, { useRef, useState } from 'react';
import Box from '@cloudscape-design/components/box';
import ButtonGroup from '@cloudscape-design/components/button-group';
import Container from '@cloudscape-design/components/container';
import FileTokenGroup from '@cloudscape-design/components/file-token-group';
import Header from '@cloudscape-design/components/header';
import PromptInput from '@cloudscape-design/components/prompt-input';
import SpaceBetween from '@cloudscape-design/components/space-between';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import { genAiAvatar, genAiName, userAvatar, userName } from '../genai-common/avatars';

export default function ContextEnrichmentLocalFiles() {
  const [prompt, setPrompt] = useState(
    "I'm working on a deployment pipeline and need help configuring it. Use these files as context for this project."
  );
  const [files, setFiles] = useState<File[]>([
    new File(['x'.repeat(2457)], 'buildspec.yaml', { type: 'application/x-yaml' }),
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDismiss = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
    e.target.value = '';
  };

  return (
    <Container
      header={<Header variant="h3">Generative AI assistant</Header>}
      footer={
        <>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} multiple style={{ display: 'none' }} />
          <PromptInput
            value={prompt}
            onChange={({ detail }) => setPrompt(detail.value)}
            actionButtonIconName="send"
            actionButtonAriaLabel="Send message"
            placeholder="Ask a question"
            disableSecondaryActionsPaddings
            secondaryActions={
              <Box padding={{ left: 'xxs', top: 'xs' }}>
                <ButtonGroup
                  ariaLabel="Additional chat input actions"
                  items={[
                    { type: 'icon-button', id: 'upload-files', iconName: 'upload', text: 'Upload files' },
                    { type: 'icon-button', id: 'add-reference', iconName: 'at-symbol', text: 'Add reference' },
                  ]}
                  onItemClick={({ detail }) => {
                    if (detail.id === 'upload-files') {
                      fileInputRef.current?.click();
                    }
                  }}
                  variant="icon"
                />
              </Box>
            }
            secondaryContent={
              files.length > 0 ? (
                <FileTokenGroup
                  items={files.map(file => ({ file, loading: false }))}
                  onDismiss={({ detail }) => handleDismiss(detail.fileIndex)}
                  showFileSize
                  showFileThumbnail
                  i18nStrings={{
                    removeFileAriaLabel: (_index, fileName) => `Remove file ${fileName}`,
                    formatFileSize: sizeInBytes => `${(sizeInBytes / 1024).toFixed(1)} KB`,
                  }}
                  alignment="horizontal"
                />
              ) : undefined
            }
          />
        </>
      }
    >
      <div role="region" aria-label="Chat" style={{ minHeight: 280 }}>
        <SpaceBetween size="xs">
          <ChatBubble type="incoming" ariaLabel={`${genAiName} at 2:45pm`} avatar={genAiAvatar}>
            What can I help you with?
          </ChatBubble>

          <ChatBubble type="outgoing" ariaLabel={`${userName} at 3:00pm`} avatar={userAvatar}>
            I need help setting up a deployment pipeline for my project.
          </ChatBubble>

          <ChatBubble type="incoming" ariaLabel={`${genAiName} at 3:00pm`} avatar={genAiAvatar}>
            I can help with that! Do you have any configuration files you can share for context?
          </ChatBubble>
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

#### Providing context in the prompt

Users state project details, preferences, or constraints in natural language alongside their request. The agent confirms what it understood and applies it going forward. Use [follow-up questions](follow-up-questions.md) to clarify or gather additional details after context is provided.

### Generative AI assistant

What can I help you with? JD I need help setting up CI/CD. Our stack is React, TypeScript, and DynamoDB. We use a monorepo with packages under /apps and follow conventional commits. Generating a response
```
import React, { useState } from 'react';
import Box from '@cloudscape-design/components/box';
import ButtonGroup from '@cloudscape-design/components/button-group';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import PromptInput from '@cloudscape-design/components/prompt-input';
import SpaceBetween from '@cloudscape-design/components/space-between';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import { genAiAvatar, genAiLoadingAvatar, genAiName, userAvatar, userName } from '../genai-common/avatars';

export default function ContextEnrichmentPrompt() {
  const [prompt, setPrompt] = useState('');

  return (
    <Container
      header={<Header variant="h3">Generative AI assistant</Header>}
      footer={
        <PromptInput
          value={prompt}
          onChange={({ detail }) => setPrompt(detail.value)}
          actionButtonIconName="send"
          actionButtonAriaLabel="Send message"
          placeholder="Ask a question"
          disableSecondaryActionsPaddings
          secondaryActions={
            <Box padding={{ left: 'xxs', top: 'xs' }}>
              <ButtonGroup
                ariaLabel="Additional chat input actions"
                items={[
                  { type: 'icon-button', id: 'upload-files', iconName: 'upload', text: 'Upload files' },
                  { type: 'icon-button', id: 'add-reference', iconName: 'at-symbol', text: 'Add reference' },
                ]}
                variant="icon"
              />
            </Box>
          }
        />
      }
    >
      <div role="region" aria-label="Chat" style={{ minHeight: 280 }}>
        <SpaceBetween size="xs">
          <ChatBubble type="incoming" ariaLabel={`${genAiName} at 4:00pm`} avatar={genAiAvatar}>
            What can I help you with?
          </ChatBubble>

          <ChatBubble type="outgoing" ariaLabel={`${userName} at 4:01pm`} avatar={userAvatar}>
            I need help setting up CI/CD. Our stack is React, TypeScript, and DynamoDB. We use a monorepo with packages
            under /apps and follow conventional commits.
          </ChatBubble>

          <ChatBubble type="incoming" ariaLabel={`${genAiName} at 4:01pm`} avatar={genAiLoadingAvatar}>
            <Box color="text-status-inactive">Generating a response</Box>
          </ChatBubble>
        </SpaceBetween>
      </div>
    </Container>
  );
}
```

## General guidelines

### Do

- Collapse steps after they have been completed to keep the conversation focused on what's next and to save vertical space.
- Use [follow-up questions](follow-up-questions.md)   to clarify or gather additional details after context is provided.
- Use inline chat interactions for multi-step context flows like authorization and resource selection.

### Don't

- Don't require users to leave the conversation to configure conversational context in a separate settings page.
- Don't show multiple context-adding steps simultaneously. Complete one before presenting the next.

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

#### Expandable section header

- Use a short, action-oriented label that describes what the user needs to do.  

  - For example: *Connect to repository*     or *Select repository.*

#### Success indicator

- Confirm what context was connected or added. Include identifying details so users know exactly what context the agent now has. Follow writing guidelines for  

  - For example: S *uccessfully connected as John-Doe-Dev*     or *Connected to repository.*

#### Authorization prompt

- Explain what permission is needed and why in one sentence.  

  - For example: *I need permission to read your repositories. This is a one-time authorization.*

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
