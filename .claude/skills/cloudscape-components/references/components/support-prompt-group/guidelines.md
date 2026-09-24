# Support prompt group

> Source: https://cloudscape.design/components/support-prompt-group/ (fetched 2026-09-24)

Selectable message prompts in generative AI chats that present recommended inputs to the user.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/chat-components/tree/main/src/support-prompt-group) If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/support-prompt-group/index.html.json)

## Unit testing APIs

SupportPromptGroupWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findItemById | [SupportPromptWrapper](https://cloudscape.design/) &#124; null | Finds a support prompt item by its id. | id: |
| findItems | Array<[ElementWrapper](https://cloudscape.design/)> | Finds all items. | - | SupportPromptWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| No methods availableThis wrapper does not provide any additional methods. |  |  |  |
## Integration testing APIs

SupportPromptGroupWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findItemById | [SupportPromptWrapper](https://cloudscape.design/) | Finds a support prompt item by its id. | id: |
| findItems | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[ElementWrapper](../../get-started/testing/core-classes.md)> | Finds all items. | - | SupportPromptWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| No methods availableThis wrapper does not provide any additional methods. |  |  |  |
## General guidelines

### Do

- Use support prompt group in [generative AI chat](../../gen-ai/patterns/generative-ai-chat.md)  .
- Hide previous support prompts once a message is sent in the chat. Once a message is sent, the conversation progresses, and the context changes. As a result, the older support prompts may not be relevant to the user anymore.
- Once support prompt text is sent as a message, follow guidelines for generating a response in [generative AI loading states](../../gen-ai/patterns/generative-ai-loading-states.md)  .
- Indicate editable prompts with an edit icon. For more guidance on affordance, follow guidance in [support prompts](../../gen-ai/patterns/support-prompts.md)  .

### Don't

- Don't display more than five support prompts at a time to avoid cognitive overload.
- Don't use support prompt group to show selected items from a list, instead use [token group](../token-group/guidelines.md)  .

## Features

- #### Text

  There are two possible scenarios for when a user selects a prompt:  

  - When it is not editable, the text is sent immediately as a [chat bubble](../chat-bubble/guidelines.md)    .
  - When editable, the text fills the [prompt input](../prompt-input/guidelines.md)     , and is not sent immediately. Use this option when it is likely that users will want to edit the text before sending it.
- #### Alignment

  - **Vertical **     (default) - By default, support prompts are vertically aligned to allow for easy scanning.    

    - For example, below incoming chat bubbles.
  - **Horizontal - **     In instances where compact prompts would be beneficial, horizontal alignment can be used instead.    

    - For example, at the beginning of new chats or with short text.

## Writing guidelines

- Keep labels and descriptions clear and concise.
- Use parallel sentence structure.
- Use sentence case for all text. Don't use title case.
- Use present-tense verbs and active voice wherever possible.
- Don't use "please," "thank you," or Latinisms such as "e.g.," "i.e.," or "etc."

### Component-specific guidelines

- Phrase prompts as either a full question or a request.  

  - For example: "List my S3 buckets" or "What is the difference between S3 and EC2?"
- Limit support prompt labels to less than 72 characters.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

- Specify an aria label for the group of support prompts.
- Provide text for every support prompt in the group to ensure all elements have an accessible name.

#### Keyboard interaction

- Focus moves between the support prompts with left, right, up, and down arrow keys.
- Press the enter or space key to select the prompt.
