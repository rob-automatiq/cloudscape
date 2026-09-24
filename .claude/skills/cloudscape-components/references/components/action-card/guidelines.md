# Action card

> Source: https://cloudscape.design/components/action-card/ (fetched 2026-09-24)

With the action card, you can display a single piece of actionable content in a structured, visual format.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/action-card) If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/action-card/index.html.json)

## Unit testing examples

Selecting action card
```
import { render } from '@testing-library/react';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import ActionCard from '@cloudscape-design/components/action-card';

describe('<ActionCard />', () => {
  it('renders the action-card component', () => {
    const { container } = render(<ActionCard />);
    const wrapper = createWrapper(container);

    expect(wrapper.findActionCard()).toBeTruthy();
  });

});
```

Finding action card slots
```
import ActionCard from '@cloudscape-design/components/action-card';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import { render } from '@testing-library/react';

describe('<ActionCard />', () => {
  it('finds the header, content, and description slots', () => {
    const { container } = render(
      <ActionCard header="Card header" description="Card description">
        Card content
      </ActionCard>
    );
    const wrapper = createWrapper(container);
    const actionCard = wrapper.findActionCard()!;

    expect(actionCard.findHeader()!.getElement().textContent).toContain('Card header');
    expect(actionCard.findDescription()!.getElement().textContent).toContain('Card description');
    expect(actionCard.findContent()!.getElement().textContent).toContain('Card content');
  });

  it('finds the icon slot', () => {
    const { container } = render(
      <ActionCard header="Card header" icon={Icon}>
        Card content
      </ActionCard>
    );
    const wrapper = createWrapper(container);
    const actionCard = wrapper.findActionCard()!;

    expect(actionCard.findIcon()).toBeTruthy();
    expect(actionCard.findIcon()!.getElement().textContent).toBe('Icon');
  });
});
```

Finding all action cards
```
import ActionCard from '@cloudscape-design/components/action-card';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import { render } from '@testing-library/react';

describe('<ActionCard />', () => {
  it('finds all action cards on the page', () => {
    const { container } = render(
      <>
        <ActionCard header="First card">First card content</ActionCard>
        <ActionCard header="Second card">Second card content</ActionCard>
        <ActionCard header="Third card">Third card content</ActionCard>
      </>
    );
    const wrapper = createWrapper(container);

    const allActionCards = wrapper.findAllActionCards();

    expect(allActionCards).toHaveLength(3);

    expect(allActionCards[0].findHeader()!.getElement().textContent).toBe('First card');
    expect(allActionCards[1].findHeader()!.getElement().textContent).toBe('Second card');
    expect(allActionCards[2].findHeader()!.getElement().textContent).toBe('Third card');
  });
});
```

## Unit testing APIs

ActionCardWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| click | - | Performs a click by triggering a mouse event on the internal button or link.Note that programmatic events ignore disabled attribute and will trigger listeners even if the element is disabled. | params:optional mouse event properties, for example modifier keys (`ctrlKey`, `metaKey`) or the mouse `button`. |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns the content element of the action card. | - |
| findDescription | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns the description element of the action card. | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns the header element of the action card. | - |
| findIcon | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Finds the icon slot of the action card. | - |
| isDisabled | boolean | Returns whether the action card is disabled. | - |
## Integration testing APIs

ActionCardWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the content element of the action card. | - |
| findDescription | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the description element of the action card. | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the header element of the action card. | - |
| findIcon | [ElementWrapper](../../get-started/testing/core-classes.md) | Finds the icon slot of the action card. | - |
## General guidelines

### Do

- Use action card when you have structured content that needs to be fully selectable as an action.
- Use icons to reinforce the type of action the card triggers. For example, an arrow-right or angle-right icon to indicate the action card that moves a user forward.
- Use default variant for actionable items that appear directly on the background of the main application.
- Use the embedded variant for items such as [selectable artifact previews](../../gen-ai/patterns/artifact-previews.md)   that are nested inside other components.

### Don't

- Don't place interactive elements inside of the action card.
- Don't use action card for selections, use an [item card](../item-card/guidelines.md)   instead.
- Don't use an action card for submitting content in a form. Use a [button](../button/guidelines.md)   instead.
- Don't use action card when the content does not initiate an action.

## Features

- #### Variant

  - **Default: **     Used at the top level of a page or layout to represent discrete objects or entities that users interact with as individual items.
  - **Embedded: **     Used when nested inside other components like containers to display individual items.
- #### Header - optional

  Use the header to display the title of the action card.
- #### Description - optional

  Can be used to display secondary content that applies to the entire content of the action card such as a description or metadata.
- #### Icon - optional

  Action cards can include an icon to reinforce the card's interactivity and expected behavior. The icon serves as a visual cue that helps users understand what action will occur when they select the card and has two available positions:  

  - **Top: **     Use top icon placement when your action card includes full-width media or when you need consistent icon positioning across cards with varying content lengths. The icon anchors to the top of the card and remains fixed in that position regardless of how much content the card contains. This creates predictable visual alignment when displaying multiple cards with different amounts of text.
  - **Center: **     Use center icon placement for text-focused action cards without media. The icon vertically aligns with the card's content, expanding and contracting with the content height. This creates visual balance for cards with similar content structures.
- #### Content - optional

  The area for primary action card content.

### States

- #### Disabled

  Use the disabled state to prevent the user from initiating an action, as well as when a user still needs to perform an action to activate an item.

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

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
