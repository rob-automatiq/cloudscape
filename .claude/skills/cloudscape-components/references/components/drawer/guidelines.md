# Drawer

> Source: https://cloudscape.design/components/drawer/ (fetched 2026-09-24)

A panel that displays supplementary content on a page, which supports task completion or feature access.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/drawer)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/drawer/index.html.json)

## Development guidelines

The drawer can be used in combination with the [app layout](../app-layout/guidelines.md) component or standalone.

#### App layout usage

- Place drawer in the content slot of the `drawers`   property of the [app layout](../app-layout/guidelines.md)   component. The app layout enhances drawers with placement, visibility, close action, resize handle, and focus management - do not use these features of the drawer component directly.
- To allow users to adjust the size of the drawer, set the `resizable`   value to true on the `drawers`   property of the app layout . The component will set the maximum and minimum size when resizing the drawer and remember the adjusted size when users close and reopen the drawer. If you need to override the default drawer size provided by the app layout, modify the `defaultSize`   value on the `drawers`   property of the app layout.
- Don't disable the functionality to close the drawer, even when there is only one state of content.
- When the user closes the drawer and later reopens it within the same page view, the content should remain the same as what was previously shown. The content should not automatically switch back to the default content.

#### Standalone usage

- Use standalone drawers with positions "static", "sticky", or "absolute" by placing the component inside a custom layout. Drawers with position "absolute" require the parent container to use relative position. Drawers with position "fixed" can be placed anywhere in the DOM - they will be positioned with respect to the viewport.
- When using multiple absolute or fixed drawers with the same placement or when combining horizontally and vertically placed drawers, use `offset`   property to prevent drawers from overlapping.
- Use semantic drawers ( `role="region"`   with `ariaLabel`   or `ariaLabelledby`   ) and ensure the focus automatically goes to inside the drawer when it opens, and back to the trigger when it closes. This behaviour is automatically provided for semantic drawers with controlled visibility ( `open`   and `onClose`   ), and can be customised via focus behaviour settings ( `focusBehavior`   ).

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Testing guidelines

Drawers with fixed position are rendered to the document root. To find this component using test-utils, you need to start from the document root. For example: `createWrapper(document.body).findDrawer()`.

## Unit testing examples

Selecting drawer
```
import { render } from '@testing-library/react';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import Drawer from '@cloudscape-design/components/drawer';

describe('<Drawer />', () => {
  it('renders the drawer component', () => {
    const { container } = render(<Drawer />);
    const wrapper = createWrapper(container);

    expect(wrapper.findDrawer()).toBeTruthy();
  });

  it('selects all drawer components', () => {
    const { container } = render(<>
      <Drawer />
      <Drawer />
      <Drawer />
    </>);
    const wrapper = createWrapper(container);

    const components = wrapper.findAllDrawers();
    expect(components).toHaveLength(3)
  });
});
```

Selecting drawer header, content and footer
```
import Drawer from '@cloudscape-design/components/drawer';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import { render } from '@testing-library/react';

describe('<Drawer />', () => {
  it('selects the drawer header, content, and footer', () => {
    const { container } = render(
      <Drawer header="Drawer header" footer="Drawer footer">
        Drawer content
      </Drawer>
    );
    const wrapper = createWrapper(container);
    const drawer = wrapper.findDrawer()!;

    const headerText = drawer.findHeader()!.getElement()!.textContent;
    const contentText = drawer.findContent()!.getElement()!.textContent;
    const footerText = drawer.findFooter()!.getElement()!.textContent;

    expect(headerText).toBe('Drawer header');
    expect(contentText).toBe('Drawer content');
    expect(footerText).toBe('Drawer footer');
  });
});
```

## Unit testing APIs

DrawerWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findBackdrop | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findCloseAction | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findFooter | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findHeaderActions | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
## Integration testing APIs

DrawerWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findBackdrop | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findCloseAction | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findFooter | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findHeaderActions | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
## General guidelines

### Do

- Persist the user preference for drawer open or closed when users navigate across pages.
- For drawers that are opened from an on-page action and need an empty state as a default state, display an empty state in the drawer. Follow the guidelines for [empty states](../../patterns/general/empty-states.md)  .
- For more information on the use of drawer, help panel, and split panel, see [secondary panels](../../patterns/general/secondary-panels.md)  .
- Use the footer to host persistent actions or contextual information that must remain accessible while users scroll through the panel's content.
- Use backdrop for drawers with absolute or fixed position that overlay and partially obscure page content.

### Don't

- Don't put critical content in a drawer. Content in a drawer should be supplemental and not required for a user to complete their task.
- Don't trigger a drawer from a modal.
- Don't use a drawer for item selection, instead use a [split panel](../split-panel/guidelines.md)  .
- Don't overwhelm users with information. Be selective on the content of the drawer and keep it concise to minimize cognitive load.
- Don't overload the footer with too much content. Keep it focused on the most important content related to the drawer.

## Features

### Content features

- #### Header

  The header area should contain a title that explains the content of the drawer in a concise manner. This should be the only `<h2>`   in the drawer.
- #### Content

  Drawer content is a space for supplementary features or assistance in task completion. Unlike the help panel content, drawer content can be interactive and may include inputs, expandable sections, and other dynamic components. Common content types in a drawer are:  

  - Inputs and text areas for feedback or queries
  - Key-value pairs for summaries
  - Links and buttons for sharing content
  - Expandable sections for progressive disclosure or simplifying the interface
- #### Footer - optional

  An area at the bottom of the panel to display content, for example text or [prompt input](../prompt-input/guidelines.md)   in a chat experience. Footer is sticky by default and remains visible when users scroll.
- #### App layout integration

  Place a drawer in the `drawers`   region of [app layout](../app-layout/guidelines.md)   to get properties such as default drawer width and dismiss control functionality.

### Layout features

- #### Position - optional

  Determines how the drawer is rendered and positioned on the page. The four supported positions are:  

  - **static**     - The drawer follows the normal page flow. It appears inline with surrounding content and scrolls with the page. This is the default behaviour and is best suited for drawers embedded within a custom layout. This is the only supported position when using drawers in combination with [app layout](../app-layout/guidelines.md)    .
  - **sticky**     - The drawer remains visible within its scrollable area, staying anchored to the top or bottom edge as the user scrolls. This position is only supported by top and bottom placements.
  - **absolute**     - The drawer is positioned relative to its nearest positioned parent container. Use this when you need the drawer to overlay content within a specific section of the page.
  - **fixed**     - The drawer is positioned relative to the browser viewport and remains in place regardless of scrolling. Use this for drawers that should always be visible on screen, such as global panels or overlays.
- #### Placement

  Drawers using all positions except static must specify placement to determine the edge the drawer is anchored to. The four supported placements are:  

  - **start**     - Anchored to the inline-start edge (left in left-to-right languages, right in right-to-left languages).
  - **end**     - Anchored to the inline-end edge (right in left-to-right languages, left in right-to-left languages).
  - **top**     - Anchored to the top edge.
  - **bottom**     - Anchored to the bottom edge.
- #### Offsets - optional

  Use offsets to add spacing between the drawer and the edges of its container, preventing overlaps with other drawers, sticky headers, or fixed elements on the page. Not supported for static drawers.
- #### Backdrop - optional

  Displays a semi-transparent overlay behind the drawer, dimming the rest of the page to draw focus to the drawer content. When a backdrop is active, clicking outside the drawer or pressing Escape will close it. Available with absolute and fixed positions. Not supported for drawers used in combination with [app layout](../app-layout/guidelines.md)  .
- #### Close action - optional

  Renders a close button in the drawer header, giving users a clear way to dismiss the drawer. When clicked, it triggers the close event alongside any backdrop-based dismissal methods. Not supported for drawers used in combination with [app layout](../app-layout/guidelines.md)   - use app layout drawers visibility controls instead.

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

- Keep the content succinct. Users should be able to quickly scan content without scrolling. Content that's in a drawer should never include critical information.
- To keep content concise, rely on page element context as much as possible.
- Follow the writing guidelines for any child component in the content area.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and ARIA regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
- [More accessibility guidelines](../../foundation/core-principles/accessibility.md)

### Component-specific guidelines

#### Semantic role and labelling

When using drawers with a semantic role ( `role="region"` , the default for positions sticky, absolute, and fixed), the drawer container is automatically labelled with its header contents. Set an explicit `ariaLabel` or `ariaLabelledby` when a header is not provided or when the header text alone does not sufficiently describe the drawer's purpose.

When using `role="presentation"` , the drawer does not expose any landmark semantics. In this case, place the drawer inside a custom semantic container (such as `<nav>` or `<aside>` ) to ensure assistive technologies can identify the region appropriately.

#### Focus management

By default, the drawer automatically moves focus into its container when it opens and returns focus to the previously focused element when it closes. This built-in behaviour requires the drawer to use a semantic role, and the trigger element to be available in the DOM when the drawer closes. When these conditions are not met, you must implement a custom focus management solution (e.g. using `ref.focus()` on open and `focusBehavior.returnFocus` on close).

#### Close action

The close action button requires a distinct `ariaLabel` (e.g. "Close panel" or "Close filter drawer") to clearly communicate its purpose to screen reader users. Avoid generic labels like "Close" when multiple drawers or dismissible panels are present on the same page, as users need to distinguish which element will be dismissed.
