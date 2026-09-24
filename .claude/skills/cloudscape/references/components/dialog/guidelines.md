# Dialog

> Source: https://cloudscape.design/components/dialog/ (fetched 2026-09-24)

With Dialog, you can present a non-modal interaction.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/dialog) Looking for a blocking interaction? Use [Modal](../modal/guidelines.md) when users must complete or dismiss an interaction before returning to the page.
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/dialog/index.html.json)

## Development guidelines

#### State management

The Dialog component doesn't manage its own visibility. Render it conditionally, and remove it on dismiss.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing examples

Selecting dialog
```
import { render } from '@testing-library/react';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import Dialog from '@cloudscape-design/components/dialog';

describe('<Dialog />', () => {
  it('renders the dialog component', () => {
    const { container } = render(<Dialog />);
    const wrapper = createWrapper(container);

    expect(wrapper.findDialog()).toBeTruthy();
  });

});
```

Finding dialog slots
```
import Dialog from '@cloudscape-design/components/dialog';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import { render } from '@testing-library/react';

describe('<Dialog />', () => {
  it('finds the header, header actions, content, footer, and dismiss button', () => {
    const { container } = render(
      <Dialog
        header="Dialog header"
        headerActions={Dialog header actions}
        footer="Dialog footer"
        i18nStrings={{ dismissAriaLabel: 'Close dialog' }}
        onDismiss={() => {}}
      >
        Dialog content
      </Dialog>
    );
    const wrapper = createWrapper(container);
    const dialog = wrapper.findDialog()!;

    expect(dialog.findHeader()!.getElement().textContent).toContain('Dialog header');
    expect(dialog.findHeaderActions()!.getElement().textContent).toBe('Dialog header actions');
    expect(dialog.findContent()!.getElement().textContent).toContain('Dialog content');
    expect(dialog.findFooter()!.getElement().textContent).toContain('Dialog footer');
    expect(dialog.findDismissButton()!.getElement()).toHaveAttribute('aria-label', 'Close dialog');
  });
});
```

Finding all dialogs
```
import Dialog from '@cloudscape-design/components/dialog';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import { render } from '@testing-library/react';

describe('<Dialog />', () => {
  it('finds all dialogs on the page', () => {
    const { container } = render(
      <>
        <Dialog header="First dialog" onDismiss={() => {}}>
          First dialog content
        </Dialog>
        <Dialog header="Second dialog" onDismiss={() => {}}>
          Second dialog content
        </Dialog>
        <Dialog header="Third dialog" onDismiss={() => {}}>
          Third dialog content
        </Dialog>
      </>
    );
    const wrapper = createWrapper(container);

    const allDialogs = wrapper.findAllDialogs();

    expect(allDialogs).toHaveLength(3);
    expect(allDialogs[0].findHeader()!.getElement().textContent).toBe('First dialog');
    expect(allDialogs[1].findHeader()!.getElement().textContent).toBe('Second dialog');
    expect(allDialogs[2].findHeader()!.getElement().textContent).toBe('Third dialog');
  });
});
```

## Unit testing APIs

DialogWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Finds the content slot of the dialog. | - |
| findDismissButton | [ButtonWrapper](../button/guidelines.md) &#124; null | Finds the dismiss button of the dialog. | - |
| findFooter | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Finds the footer slot of the dialog. | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Finds the header slot of the dialog. | - |
| findHeaderActions | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Finds the header actions slot of the dialog. | - |
## Integration testing APIs

DialogWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md) | Finds the content slot of the dialog. | - |
| findDismissButton | [ButtonWrapper](../button/guidelines.md) | Finds the dismiss button of the dialog. | - |
| findFooter | [ElementWrapper](../../get-started/testing/core-classes.md) | Finds the footer slot of the dialog. | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md) | Finds the header slot of the dialog. | - |
| findHeaderActions | [ElementWrapper](../../get-started/testing/core-classes.md) | Finds the header actions slot of the dialog. | - |
## General guidelines

### Do

- Use a dialog to ask a user for a response, input, or decision when the rest of the page can stay available. If the user must respond before continuing, use a [modal](../modal/guidelines.md)   instead.
- Place the dialog next to the content it refers to. For example, above the [prompt input](../prompt-input/guidelines.md)   when a generative AI response needs authorization or additional information from a user.

### Don't

- Don't use a dialog to display an item or artifact that doesn't request anything from the user.
- Don't chain a sequence of dialogs or launch a dialog from within a dialog. If a dialog contains a multi-step flow, use [compact pagination](../pagination/guidelines.md)   inside the dialog to navigate between steps.

## Features

- #### Header

  Use the header to state what's being asked of the user.
- #### Header actions - optional

  Add controls that relate to the dialog itself, placed before the dismiss button. For example, a [compact pagination](../pagination/guidelines.md)   for a multi-page form.
- #### Content

  The area for the dialog's primary content.
- #### Footer - optional

  An area for actions that commit or cancel the request, such as *Submit*   , *Allow*   , or *Skip*   . Form controls can sit in the content area, but actions that commit or cancel an operation always belong in the footer. If empty, the footer isn't displayed.

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

### Component-specific guidelines

#### Roles and labels

The Dialog component sets its role attribute to `dialog` and uses the header as its accessible name. Don't add another role or accessible name.

#### Alternative text

Provide alternative text for the close button using `i18nStrings.dismissAriaLabel`. This string is automatically provided when the application uses `I18nProvider`.

#### Keyboard interaction

When Dialog opens, focus moves to the first focusable element. If header actions are present, focus moves to the first focusable header action. Otherwise, it moves to the close button.

Focus isn't trapped, so users can move between Dialog and the surrounding page. Pressing Escape dismisses Dialog. When Dialog closes, focus returns to the previously focused element if it still exists.
