# Pagination

> Source: https://cloudscape.design/components/pagination/ (fetched 2026-09-24)

Provides horizontal navigation between pages of a collection.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/pagination)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/pagination/index.html.json)

## Development guidelines

This component only displays the pagination UI. If you want to perform the actual pagination of data, consider using [collection hooks](../../get-started/dev-guides/collection-hooks.md).

#### State management

The pagination component is controlled. Set the `currentPageIndex` property and the `onChange` listener to store its value in the state of your application. Learn more about the [state management](../../get-started/dev-guides/state-management.md) of Cloudscape components.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing examples

Selecting pagination
```
import { render } from '@testing-library/react';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import Pagination from '@cloudscape-design/components/pagination';

describe('<Pagination />', () => {
  it('renders the pagination component', () => {
    const { container } = render(<Pagination />);
    const wrapper = createWrapper(container);

    expect(wrapper.findPagination()).toBeTruthy();
  });

  it('selects all pagination components', () => {
    const { container } = render(<>
      <Pagination />
      <Pagination />
      <Pagination />
    </>);
    const wrapper = createWrapper(container);

    const components = wrapper.findAllPaginations();
    expect(components).toHaveLength(3)
  });
});
```

Navigates to a page by its number
```
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import Pagination from '@cloudscape-design/components/pagination';
import createWrapper from '@cloudscape-design/components/test-utils/dom';

import { render } from '@testing-library/react';
import { useState } from 'react';

interface Item {
  header: string;
  content: string;
}

const pages: Item[] = [
  { header: 'First page', content: 'Page 1 content' },
  { header: 'Second page', content: 'Page 2 content' },
  { header: 'Third page', content: 'Page 3 content' },
  { header: 'Fourth page', content: 'Page 4 content' },
];

function Component() {
  const [pageIndex, setPageIndex] = useState(1);
  const page = pages[pageIndex - 1];

  return (
    <Box>
      <Container header={page.header}>{page.content}</Container>
      <Pagination
        pagesCount={pages.length}
        currentPageIndex={pageIndex}
        onChange={({ detail }) => {
          setPageIndex(detail.currentPageIndex);
        }}
      />
    </Box>
  );
}

describe('<Pagination />', () => {
  it('navigates to the third page by its number', () => {
    const { container } = render(<Component />);
    const wrapper = createWrapper(container);

    wrapper.findPagination()!.findPageNumberByIndex(3)!.click();
    const pageContent = wrapper.findContainer()!.findHeader()!.getElement();

    expect(pageContent.textContent).toBe('Third page');
  });
});
```

## Unit testing APIs

PaginationWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findCurrentPage | [PaginationButtonWrapper](https://cloudscape.design/) | - | - |
| findJumpToPageButton | [ButtonWrapper](../button/guidelines.md) &#124; null | Returns the jump to page submit button. | - |
| findJumpToPageInput | [InputWrapper](../input/guidelines.md) &#124; null | Returns the jump to page input field. | - |
| findJumpToPagePopover | [PopoverWrapper](../popover/guidelines.md) &#124; null | Returns the error popover for jump to page. | - |
| findNextPageButton | [PaginationButtonWrapper](https://cloudscape.design/) | - | - |
| findPageNumberByIndex | [PaginationButtonWrapper](https://cloudscape.design/) &#124; null | Returns a page number for a given index. | index:1-based index of the page number to return. |
| findPageNumbers | Array<[PaginationButtonWrapper](https://cloudscape.design/)> | - | - |
| findPagesCompactText | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns the visible text for compact pages (for example, 3 of 12 or 3 of 12+). | - |
| findPreviousPageButton | [PaginationButtonWrapper](https://cloudscape.design/) | - | - |
| isDisabled | boolean | - | - | PaginationButtonWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| isDisabled | boolean | - | - |
## Integration testing APIs

PaginationWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findCurrentPage | [PaginationButtonWrapper](https://cloudscape.design/) | - | - |
| findJumpToPageButton | [ButtonWrapper](../button/guidelines.md) &#124; null | Returns the jump to page submit button. | - |
| findJumpToPageInput | [InputWrapper](../input/guidelines.md) | Returns the jump to page input field. | - |
| findJumpToPagePopover | [PopoverWrapper](../popover/guidelines.md) | Returns the error popover for jump to page. | - |
| findNextPageButton | [PaginationButtonWrapper](https://cloudscape.design/) | - | - |
| findPageNumberByIndex | [PaginationButtonWrapper](https://cloudscape.design/) | Returns a page number for a given index. | index:1-based index of the page number to return. |
| findPageNumbers | [MultiElementWrapper](../../get-started/testing/core-classes.md)<[PaginationButtonWrapper](https://cloudscape.design/)> | - | - |
| findPagesCompactText | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the visible text for compact pages (for example, 3 of 12 or 3 of 12+). | - |
| findPreviousPageButton | [PaginationButtonWrapper](https://cloudscape.design/) | - | - | PaginationButtonWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| No methods availableThis wrapper does not provide any additional methods. |  |  |  |
## General guidelines

### Do

- Use pagination to provide horizontal navigation between pages of a collection. Most common use-cases include different types of collection views: tables, cards, lists.
- Use the default pagination when you need a simple pagination pattern for a collection that will not change size.
- Consider using the jump to page feature when pagination becomes truncated, typically when datasets exceed 9 pages. This allows users to quickly navigate to a specific page without relying on multiple sequential clicks.
- Use the compact pages variant in space-constrained layouts where a full row of numbered page buttons does not fit.

### Don't

- Don't use pagination if the majority of your users operate on really small collection (less than five elements).
- Don't use open end pagination if you can determine the full size of the collection.

## Features

- #### Basic controls

  Pagination includes several mechanisms to move between pages:  

**Left arrow**  

  - Navigates backward one page.
  - Inactive when the first page is selected.

**Numbers**  

  - Redirect directly to a certain collection page.
  - The number of pages changes based on the filter results.

**Right arrow**  

  - Navigates forward one page.
  - Inactive when the last page is selected.

**Ellipsis**  

  - Ellipsis is included at the end of the pagination element when the total amount of items is unknown (see *Open end pagination*     ).
- #### Open end pagination

  Open end pagination is a pagination variant for cases when it's impossible to determine the full size of the data set. This can happen when, for example, the API does not return the total number of items, or it's not paginated. The open end variant always displays ellipsis before the next page icon. The next button is always active so that users can load the next page of items.
- #### Jump to page - optional

  This allows users to directly navigate to a specific page by entering a page number. This feature is particularly useful for large data sets where navigating through multiple pages can be time-consuming. The jump to page feature should be put in "loading" state when the requested page is being loaded (server-side pagination).
- #### Compact - optional

  This displays the current page and total number of pages as a single counter instead of a row of numbered page buttons. This is useful for space-constrained layouts where a full row of page buttons does not fit. *For example, 1 of 3*   .  When openEnd is true, a plus sign after the page count indicates that more pages are available.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

#### Alternative text

- Define labels for the pagination buttons through the `labels`   property according to the alternative text guidelines.
- When using multiple `Pagination`   on a page, define `paginationLabel`   to help users with context setting.
- State where the icon takes the user to.  

  - For example: Previous page or even page numbers (such as* Page 6*     ) rather than *left*     or *right*    .
