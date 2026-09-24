# Side navigation

> Source: https://cloudscape.design/components/side-navigation/ (fetched 2026-09-24)

A list of navigational links that point to the pages within an application.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/side-navigation)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/side-navigation/index.html.json)

## Development guidelines

All links in the component are rendered as `<a>` tags. Therefore, a click on link will modify `window.location` object. If you use a client-side routing logic in your application, you can prevent this behavior by providing an `onFollow` event handler to the navigation component. For more information on the `onFollow` event, see the `Events` section.

The component will reset user expansion state on re-render if the reference to the items array is changed between renders. To avoid this, provide the same instance of the items array for each render.

#### Collapsible nav

Set `collapsed` to render the icon-only navigation rail. The `collapsed` prop is controlled. Configure the icons using the [icon component](../icon/guidelines.md) on each item that also accepts an href.

For configuring with app layout, refer to the [development guidelines](../app-layout-toolbar/guidelines.md) of the app layout toolbar component. If you are configuring your own custom layout, ensure you follow the [accessibility guidelines](guidelines.md) for panel toggles.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing examples

Selecting side navigation
```
import { render } from '@testing-library/react';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import SideNavigation from '@cloudscape-design/components/side-navigation';

describe('<SideNavigation />', () => {
  it('renders the side-navigation component', () => {
    const { container } = render(<SideNavigation />);
    const wrapper = createWrapper(container);

    expect(wrapper.findSideNavigation()).toBeTruthy();
  });

  it('selects all side-navigation components', () => {
    const { container } = render(<>
      <SideNavigation />
      <SideNavigation />
      <SideNavigation />
    </>);
    const wrapper = createWrapper(container);

    const components = wrapper.findAllSideNavigations();
    expect(components).toHaveLength(3)
  });
});
```

Navigating to a nested link using its index
```
import Box from '@cloudscape-design/components/box';
import SideNavigation, { SideNavigationProps } from '@cloudscape-design/components/side-navigation';
import createWrapper from '@cloudscape-design/components/test-utils/dom';
import TextContent from '@cloudscape-design/components/text-content';

import { render } from '@testing-library/react';
import { useState } from 'react';

const items: SideNavigationProps['items'] = [
  { type: 'link', text: 'Page 1', href: '#/page1' },
  { type: 'divider' },
  {
    type: 'section-group',
    title: 'Section group',
    items: [
      {
        type: 'section',
        text: 'Section 1',
        items: [
          { type: 'link', text: 'Page 2', href: '#/page2' },
          { type: 'link', text: 'Page 3', href: '#/page3' },
        ],
      },
    ],
  },
];

function Component() {
  const [activeHref, setActiveHref] = useState('#/page1');

  return (
    <Box>
      <TextContent>Current href: {activeHref}</TextContent>
      <SideNavigation
        activeHref={activeHref}
        items={items}
        onFollow={event => {
          event.preventDefault();
          setActiveHref(event.detail.href);
        }}
      />
    </Box>
  );
}

describe('<SideNavigation />', () => {
  it('navigates to a nested link using its index', () => {
    const { container } = render(<Component />);
    const wrapper = createWrapper(container);
    const sideNavigation = wrapper.findSideNavigation()!;

    sideNavigation
      .findItemByIndex(3)! // 3rd item: Section group
      .findItemByIndex(1)! // 1st item: Section 1
      .findItemByIndex(2)! // 2nd item: Page 3
      .findLink()!
      .click();

    expect(wrapper.findTextContent()!.getElement().textContent).toBe('Current href: #/page3');
    expect(sideNavigation.findActiveLink()!.getElement().textContent).toBe('Page 3');
  });
});
```

Navigating to a nested link using its href
```
import Box from '@cloudscape-design/components/box';
import SideNavigation, { SideNavigationProps } from '@cloudscape-design/components/side-navigation';
import createWrapper from '@cloudscape-design/components/test-utils/dom';
import TextContent from '@cloudscape-design/components/text-content';

import { render } from '@testing-library/react';
import { useState } from 'react';

const items: SideNavigationProps['items'] = [
  { type: 'link', text: 'Page 1', href: '#/page1' },
  { type: 'divider' },
  {
    type: 'section-group',
    title: 'Section group',
    items: [
      {
        type: 'section',
        text: 'Section 1',
        items: [
          { type: 'link', text: 'Page 2', href: '#/page2' },
          { type: 'link', text: 'Page 3', href: '#/page3' },
        ],
      },
    ],
  },
];

function Component() {
  const [activeHref, setActiveHref] = useState('#/page1');

  return (
    <Box>
      <TextContent>Current href: {activeHref}</TextContent>
      <SideNavigation
        activeHref={activeHref}
        items={items}
        onFollow={event => {
          event.preventDefault();
          setActiveHref(event.detail.href);
        }}
      />
    </Box>
  );
}

describe('<SideNavigation />', () => {
  it('navigates to a nested link using its href', () => {
    const { container } = render(<Component />);
    const wrapper = createWrapper(container);
    const sideNavigation = wrapper.findSideNavigation()!;

    sideNavigation.findLinkByHref('#/page3')!.click();

    expect(wrapper.findTextContent()!.getElement().textContent).toBe('Current href: #/page3');
    expect(sideNavigation.findActiveLink()!.getElement().textContent).toBe('Page 3');
  });
});
```

## Unit testing APIs

SideNavigationWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findActiveLink | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLAnchorElement> &#124; null | - | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLAnchorElement> &#124; null | - | - |
| findHeaderLink | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLAnchorElement> &#124; null | - | - |
| findItemByIndex | [SideNavigationItemWrapper](https://cloudscape.design/) &#124; null | - | index: |
| findItemsControl | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findLinkByHref | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLAnchorElement> &#124; null | - | href: | SideNavigationItemWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDivider | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findExpandableLinkGroup | [ExpandableSectionWrapper](../expandable-section/guidelines.md) &#124; null | - | - |
| findInfo | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLAnchorElement> &#124; null | - | - |
| findItemByIndex | [SideNavigationItemWrapper](https://cloudscape.design/) &#124; null | - | index: |
| findItems | Array<[SideNavigationItemWrapper](https://cloudscape.design/)> | - | - |
| findLink | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLAnchorElement> &#124; null | - | - |
| findSection | [ExpandableSectionWrapper](../expandable-section/guidelines.md) &#124; null | - | - |
| findSectionGroup | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findSectionGroupTitle | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
| findSectionTitle | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | - | - |
## Integration testing APIs

SideNavigationWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findActiveLink | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findHeader | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findHeaderLink | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findItemByIndex | [SideNavigationItemWrapper](https://cloudscape.design/) | - | index: |
| findItemsControl | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findLinkByHref | [ElementWrapper](../../get-started/testing/core-classes.md) | - | href: | SideNavigationItemWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findDivider | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findExpandableLinkGroup | [ExpandableSectionWrapper](../expandable-section/guidelines.md) | - | - |
| findInfo | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findItemByIndex | [SideNavigationItemWrapper](https://cloudscape.design/) | - | index: |
| findItems | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[SideNavigationItemWrapper](https://cloudscape.design/)> | - | - |
| findLink | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findSection | [ExpandableSectionWrapper](../expandable-section/guidelines.md) | - | - |
| findSectionGroup | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findSectionGroupTitle | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
| findSectionTitle | [ElementWrapper](../../get-started/testing/core-classes.md) | - | - |
## General guidelines

### Do

- Avoid linking outside of your application from the side navigation. If you need to do that, add the flag *external*   to navigation links.
- Sparingly use dividers to separate sets of links that are fundamentally not related to each other.
- Follow the guidelines for [service navigation](../../patterns/general/service-navigation.md)   on how to structure your navigation information architecture and map it to breadcrumbs.
- Use *New*   labels in the side navigation to mark new pages. See the guidance for [announcing new features](../../patterns/general/announcing-new-features.md)  .
- If needing to place both a badge, such as a notifications badge, and a *New*   label next to the same navigational link, place the *New*   label to the right of the badge.
- Use SVG format for logos.
- When using the collapsible nav pattern, give each item a distinct, meaningful icon that can be used as an identifier in the collapsed state. Items without icons will not be shown in the collapsed rail.
- In a collapsible navigation, apply icons consistently at one level of the navigation: give every sibling in that level an icon. For example, all parent pages, or all children of a section.

### Don't

- Avoid sections with only two links.
- Avoid using sections and expandable link groups together in the same  menu.
- Don't use badges with section headers or for labeling links with static messages. For example: *Preview, New, *   or* Beta.*
- Don't add icons purely for decoration. When using the collapsible side navigation pattern, use icons that are easily recognizable and universally accepted, or conduct usability testing to validate icon meanings.
- Don't reuse the same icon for multiple links.

## Features

- #### Header

  The application name is displayed at the top of the navigation panel, so the user can see which application they're using.
- #### Items control - optional

  The side navigation provides an area below the header and above the items, where a custom item control can be added.  
  For example, adding a [select](../select/guidelines.md)   or [segmented control](../segmented-control/guidelines.md)   to let users toggle the content of the side navigation.
- #### Link structure

  The first link listed in the side navigation, below the header, should correspond with the default landing page for a returning user of the application. Often, this may be a dashboard or an item list. This differs with the landing page for either a first-time user or when items don't exist within the application. In such cases, the landing page should be the application homepage.
- #### Sections

  Sets of links can be grouped together under a single header. The header itself is not a link to a page but provides the ability to expand and collapse the section.
- #### Section groups

  Set of items that are conceptually related to each other, and can be displayed under a single heading to provide further organization. You can nest sections, links, link groups and expandable link groups within a section group depending on your information architecture needs.
- #### Expandable link groups

  Link groups support nested page information architectures. Set the group of child links as hidden by default until either a user has navigated to a page within the link group, including the parent, or has explicitly expanded the group into view.
- #### Link groups

  Only to be used when the information for an existing item must be split between multiple detail pages. This link grouping should only appear after an existing item is selected by the user.
- #### Dividers

  Dividers provides the ability to organize the side panel by separating major sets of links that are fundamentally not related to each other.
- #### Badges

  Use badges in the navigation to flag actionable areas. For example, you can use them for notifications.
- #### New labels

  Place New labels next to newly launched pages in the application, and keep them for 30 days. Follow the guidelines for [announcing new features](../../patterns/general/announcing-new-features.md)  .
- #### App layout

  Place the side navigation in the `navigation`   region of [app layout](../app-layout/guidelines.md)  .
- #### Icons & collapsible nav - optional

  Icons are intended to be used in collapsible navigations. When collapsed, the side navigation renders as a navigation rail, or a narrow column of icons. Each visible item's text label appears as a tooltip on hover and keyboard focus. When icons are used, the visual style of the items adapt automatically to better suit the layout.  

  Consider a collapsible navigation when:  

  - Your service is used frequently and repeatedly, where users move between areas, compare sections, and build routines. It's not ideal for products that are single-task oriented.
  - Your destinations can be represented by clear, distinct icons that are easily recognizable.
  - Most pages in your product are full-width content that would suffer from a always expanded nav, such as such as dashboards, canvases, or wide tables.
  - Your IA has fewer than 10 primary destinations that would collapse to icons.

  Text labels reduce ambiguity and increase the target size of each item. Treat the navigation rail as a space-saving option for expert, repeat users, not the default for every service.  

  When applying icons, follow these guidelines:  

  - Add icons to the children of sections or section groups. Section headers are hidden when collapsed, so only icon-bearing children appear in the collapsed state.
  - Place icons on the parent expandable link groups and link groups rather than their children. Link group children are hidden in the collapsed state.
  - Apply icons consistently to all elements in a group.

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

### Component-specific guidelines

- Use sentence case (not title case).
- Use nouns representing objects or features, don't use verbs.
- Keep link names and section headers as short as possible while maintaining clarity, and avoid jargon or abbreviations the user may not know.
- Avoid articles ( *a, an, the*   ) in headings to keep content short and actionable.
- Keep labels short and unambiguous so they work both inline and as help text in the collapsed state.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

#### Roles and landmarks

- Side navigation does not come with its own `navigation`   role, because this is already provided by an enclosing [app layout component](../app-layout/guidelines.md)  .
- If you wish to use side navigation outside of app layout, make sure that you wrap it inside a properly labelled `<nav>`   block.

#### Collapsible nav (navigation rail)

- **Active state:**   The expanded navigation bolds the active item; because icons can't be bold, the active navigation rail icon uses a high-contrast background highlight to differentiate it from the rest.
- **Focus management:**   When the navigation collapses, focus must not be lost. If the focused item stays visible, focus stays; if it becomes hidden (an item without an icon, or a section header), focus moves to the toggle.
- **Toggle button:**   The toggle needs an accessible label and `aria-expanded`   reflecting the collapsed state; if separate open and close controls are used, only the persistent one carries `aria-expanded`   . For an in-container toggle that both expands and collapses, keep it rendered in both the expanded and collapsed states and retain focus on it across the toggle so focus is never lost.
