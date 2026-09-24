# Chat bubble

> Source: https://cloudscape.design/components/chat-bubble/ (fetched 2026-09-24)

A visual representation of a chat message.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/chat-components/tree/main/src/chat-bubble) If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/chat-bubble/index.html.json)

## Unit testing examples

Selecting chat bubble
```
import { render } from '@testing-library/react';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import ChatBubble from '@cloudscape-design/components/chat-bubble';

describe('<ChatBubble />', () => {
  it('renders the chat-bubble component', () => {
    const { container } = render(<ChatBubble />);
    const wrapper = createWrapper(container);

    expect(wrapper.findChatBubble()).toBeTruthy();
  });

  it('selects all chat-bubble components', () => {
    const { container } = render(<>
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
    </>);
    const wrapper = createWrapper(container);

    const components = wrapper.findAllChatBubbles();
    expect(components).toHaveLength(3)
  });
});
```

Select code view in content slot
```
// side-effect imports to install the finder methods
import Avatar from '@cloudscape-design/chat-components/avatar';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import CodeView from '@cloudscape-design/code-view/code-view';
// use import from the main package to use the wrapper
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import '@cloudscape-design/chat-components/test-utils/dom';
import '@cloudscape-design/code-view/test-utils/dom';
import { render } from '@testing-library/react';
import React from 'react';

function Component() {
  return (
    <ChatBubble
      type="incoming"
      avatar={<Avatar ariaLabel="Generative AI assistant" iconName="gen-ai" color="gen-ai" />}
      ariaLabel="Generative AI assistant at 03:45:16"
    >
      <CodeView content='const hello: string = "world";' />
    </ChatBubble>
  );
}

describe('<ChatBubble />', () => {
  it('get content', () => {
    const { container } = render(<Component />);
    const wrapper = createWrapper(container).findChatBubble()!;

    const content = wrapper.findContentSlot()!.findCodeView()!.findContent().getElement();

    expect(content.textContent).toBe('const hello: string = "world";');
  });
});
```

Select avatar in avatar slot
```
import Avatar from '@cloudscape-design/chat-components/avatar';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import createWrapper from '@cloudscape-design/chat-components/test-utils/dom';

import { render } from '@testing-library/react';
import React from 'react';

function Component() {
  return (
    <ChatBubble
      type="incoming"
      avatar={
        <Avatar
          ariaLabel="Generative AI assistant"
          tooltipText="Generative AI assistant"
          iconName="gen-ai"
          color="gen-ai"
        />
      }
      ariaLabel="Generative AI assistant at 03:45:16"
    >
      Amazon S3 is built using AWS&apos;s highly available and reliable infrastructure.
    </ChatBubble>
  );
}

describe('<ChatBubble />', () => {
  it('get avatar inside avatar slot', () => {
    const { container } = render(<Component />);
    const wrapper = createWrapper(container).findChatBubble()!;

    const avatar = wrapper.findAvatarSlot()!.findAvatar()!;
    avatar.focus();

    expect(avatar.findTooltip()?.getElement().textContent).toBe('Generative AI assistant');
  });
});
```

Select button group in actions slot
```
// side-effect import to install the finder methods
import Avatar from '@cloudscape-design/chat-components/avatar';
import ChatBubble from '@cloudscape-design/chat-components/chat-bubble';
import ButtonGroup from '@cloudscape-design/components/button-group';
// use import from the main package to use the wrapper
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import '@cloudscape-design/chat-components/test-utils/dom';
import { render } from '@testing-library/react';
import React from 'react';

function Component() {
  return (
    <ChatBubble
      type="incoming"
      avatar={<Avatar ariaLabel="Generative AI assistant" iconName="gen-ai" color="gen-ai" />}
      ariaLabel="Generative AI assistant at 03:45:16"
      actions={
        <ButtonGroup
          ariaLabel="Chat bubble actions"
          variant="icon"
          items={[
            {
              type: 'icon-button',
              id: 'copy',
              iconName: 'copy',
              text: 'Copy',
              popoverFeedback: 'Message copied',
            },
          ]}
        />
      }
    >
      Amazon S3 is built using AWS&apos;s highly available and reliable infrastructure.
    </ChatBubble>
  );
}

describe('<ChatBubble />', () => {
  it('get button group inside actions slot', () => {
    const { container } = render(<Component />);
    const wrapper = createWrapper(container).findChatBubble()!;

    const buttonGroup = wrapper.findActionsSlot()!.findButtonGroup()!;

    expect(buttonGroup.findItems()).toHaveLength(1);
  });
});
```

## Unit testing APIs

ChatBubbleWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findActionsSlot | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findAvatarSlot | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findContentSlot | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findLoadingBar | [LoadingBarWrapper](../loading-bar/guidelines.md) &#124; null | - | - |
## Integration testing examples

Select code view in content slot
```
// side-effect import to install the finder methods of code view
import createWrapper from '@cloudscape-design/chat-components/test-utils/selectors';

import '@cloudscape-design/code-view/test-utils/selectors';

/**
 * browser - is a global object representing your testing framework.
 * The exact API could be different for your stack.
 */

describe('Chat bubble', () => {
  it('get content', async () => {
    // this code tests a component instance similar to the TestPage
    await browser.url('your-page-to-test');
    const wrapper = createWrapper().findChatBubble();

    const content = await browser.$(wrapper.findContentSlot().findCodeView().findContent().toSelector()).getText();

    expect(content).toEqual('const hello: string = "world";');
  });
});

/**
 * TestPage.tsx
 *
 * function Component() {
 *   return (
 *     <ChatBubble
 *       type="incoming"
 *       avatar={<Avatar ariaLabel="Generative AI assistant" iconName="gen-ai" color="gen-ai" />}
 *       ariaLabel="Generative AI assistant at 03:45:16"
 *     >
 *       <CodeView content='const hello: string = "world";' />
 *     </ChatBubble>
 *   );
 * }
 */
```

Select avatar in avatar slot
```
import createWrapper from '@cloudscape-design/chat-components/test-utils/selectors';

/**
 * browser - is a global object representing your testing framework.
 * The exact API could be different for your stack.
 */

describe('Chat bubble', () => {
  it('get avatar inside avatar slot', async () => {
    // this code tests a component instance similar to this /components/chat-bubble&example=incoming-message
    await browser.url('your-page-to-test');
    const wrapper = createWrapper().findChatBubble();

    const avatarSelector = await browser.$(wrapper.findAvatarSlot()!.findAvatar().toSelector());
    await avatarSelector.moveTo();

    const tooltipSelector = await browser.$(wrapper.findAvatarSlot()!.findAvatar().findTooltip().toSelector());

    expect(tooltipSelector.getText()).toBe('Generative AI assistant');
  });
});
```

Select button group in actions slot
```
import createWrapper from '@cloudscape-design/chat-components/test-utils/selectors';

/**
 * browser - is a global object representing your testing framework.
 * The exact API could be different for your stack.
 */

describe('Chat bubble', () => {
  it('get button group inside actions slot', async () => {
    // this code tests a component instance similar to this /components/chat-bubble&example=incoming-message
    await browser.url('your-page-to-test');
    const wrapper = createWrapper().findChatBubble();

    const buttonGroupItemsSelector = await browser.$$(
      wrapper.findActionsSlot()!.findButtonGroup().findItems().toSelector()
    );

    expect(buttonGroupItemsSelector.length).toBe(3);
  });
});
```

## Integration testing APIs

ChatBubbleWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findActionsSlot | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findAvatarSlot | [ElementWrapper](../../get-started/testing/core-classes.md) &#124; null | - | - |
| findContentSlot | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findLoadingBar | [LoadingBarWrapper](../loading-bar/guidelines.md) | - | - |
## General guidelines

### Do

- Use [avatars](../avatar/guidelines.md)   to provide a visual representation of authors in a conversation. They help to differentiate content in a conversation and in turn enhance readability.
- When you need to show inline actions in chat bubbles, use [button group](../button-group/guidelines.md)  .
- When building a generative AI chat, follow the guidelines for [generative AI chat](../../gen-ai/patterns/generative-ai-chat.md)  .

### Don't

- Don't display inline actions [button group](../button-group/guidelines.md)   in a message when it is loading.
- Don't display [loading bar](../loading-bar/guidelines.md)   in the outgoing messages.

## Features

### Types

- #### Outgoing message

  Chat messages sent by the user.
- #### Incoming message

  Chat messages received from others.

### Structure

- #### Avatar

  Use avatar to show the identity of authors. Follow the guidelines for [avatar](../avatar/guidelines.md)  .
- #### Content

  The area for content of a chat message. Common types of content are:  

  - Text: simple messages with plain or formatted text.
  - Media: image, graphics, embedded or linked videos.
  - [Expandable section](../expandable-section/guidelines.md)     : a collapsible section. For example, to display additional options, or sources and citations.
  - [Links](../link/guidelines.md)     : Hyperlinks that direct users to sites or pages.
  - Other: complex UI elements such as list of items, and code blocks.
- #### Actions - optional

  Use [button group](../button-group/guidelines.md)   to display inline actions that a user can perform in a chat bubble.

### States

- #### Loading state

  Indicate the incoming message is loading.  

  To show the loading state of incoming response from generative AI:  

  - When generative AI is in processing stage, display a loading [avatar](../avatar/guidelines.md)     with loading text in the chat bubble.
  - When generative AI response includes other UI elements such as list of items, display a loading [avatar](../avatar/guidelines.md)     and show [loading bar](../loading-bar/guidelines.md)     with loading text. Follow the guidelines for [generative AI loading states](../../gen-ai/patterns/generative-ai-loading-states.md)    .

## Writing guidelines

### General writing guidelines

- Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.
- Use end punctuation, except in [headers](../header/guidelines.md)   and [buttons](../button/guidelines.md)   . Don't use exclamation points.
- Use present-tense verbs and active voice.
- Don't use *please*   , *thank you*   , ellipsis ( *...*   ), ampersand ( *&*   ), *e.g.*   , *i.e.*   , or *etc.*   in writing.
- Avoid directional language.  

  - For example: use *previous*     not *above*     , use *following*     not *below*    .
- Use device-independent language.  

  - For example: use *choose*     or *select*     not *click*    .

#### Component-specific guidelines

**Inline actions**

- Follow the writing guidelines for [button group](../button-group/guidelines.md)  .

**Avatar**

- Follow the writing guidelines for [avatar](../avatar/guidelines.md)  .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

#### Component-specific guidelines

- Provide a unique `ariaLabel`   for each chat bubble to help screen reader users differentiate each of the messages. For example, use a timestamp, *Jane Doe at 2:30:25 pm*  .
