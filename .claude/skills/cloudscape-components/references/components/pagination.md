# Pagination

```ts
import Pagination from '@cloudscape-design/components/pagination'
import type { PaginationProps } from '@cloudscape-design/components/pagination'
```

Generated from `@cloudscape-design/components@3.0.1382` `pagination/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaLabels?`**: `PaginationProps.Labels` _(@i18n)_
  Adds aria-labels to the pagination buttons:
  * `paginationLabel` (string) - Label for the entire pagination group. It allows users to distinguish context
  * in cases of multiple pagination components in a page.
  * `previousPageLabel` (string) - Previous page button.
  * `pageLabel` (number => string) - Individual page button, this function is called for every page number that's rendered.
  * `nextPageLabel` (string) - Next page button
  
  Example:
  ```
  {
    nextPageLabel: 'Next page',
    paginationLabel: 'Table pagination',
    previousPageLabel: 'Previous page',
    pageLabel: pageNumber => `Page ${pageNumber}`
  }
  ```
- **`currentPageIndex`**: `number`
  Index of the current page. The first page has an index of 1.
- **`disabled?`**: `boolean`
  If set to `true`, the pagination links will be disabled. Use it, for example, if you want to prevent the user
  from changing page before items are loaded.
- **`i18nStrings?`**: `PaginationProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component:
  * `jumpToPageInputLabel` (string) - Accessible label for the jump-to-page number input.
  * `jumpToPageError` (string) - Error message displayed when the entered page number is invalid.
  * `jumpToPageLoadingText` (string) - Loading text displayed while the jump-to-page action is in progress.
  * `pagesCompactText` ((options: { currentPage: number; pagesCount: number; openEnd: boolean }) => string) -
    Provides the visible text for compact pages, for example `3 of 12`, or `3 of 12+` when `openEnd` is `true`.
    Receives the current page, page count, and whether pagination is open-ended.
- **`jumpToPage?`**: `PaginationProps.JumpToPageProps`
  Jump to page configuration
- **`openEnd?`**: `boolean`
  Sets the pagination variant. It can be either default (when setting it to `false`) or open ended (when setting it
  to `true`). Default pagination navigates you through the items list. The open-end variant enables you
  to lazy-load your items because it always displays three dots before the next page icon. The next page button is
  never disabled. When the user clicks on it but there are no more items to show, the
  `onNextPageClick` handler is called with `requestedPageAvailable: false` in the event detail.
- **`pagesCount`**: `number`
  Sets the total number of pages. Only positive integers are allowed.
- **`pagesVariant?`**: `PaginationProps.PagesVariant`
  Specifies how pages are displayed:
  * `normal` - Displays page number buttons. For larger page ranges, the displayed range is truncated with ellipses.
  * `compact` - Displays the current page and page count between the previous and next buttons. When `openEnd` is `true`, a plus sign after the page count indicates that more pages are available.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<PaginationProps.ChangeDetail>`
  Called when a user interaction causes a pagination change. The event `detail` contains the new `currentPageIndex`.
- **`onNextPageClick?`**: `NonCancelableEventHandler<PaginationProps.PageClickDetail>`
  Called when the next page arrow is clicked. The event `detail` contains the following:
  * `requestedPageAvailable` (boolean) - Indicates whether the requested page is available for display.
    The value can be `false` when the `openEnd` property is set to `true`.
  * `requestedPageIndex` (integer) - The index of the requested page.
- **`onPreviousPageClick?`**: `NonCancelableEventHandler<PaginationProps.PageClickDetail>`
  Called when the previous page arrow is clicked. The event `detail` contains the following:
  * `requestedPageAvailable` (boolean) - Always set to `true`.
  * `requestedPageIndex` (integer) - The index of the requested page.

## Types

Supporting types from `PaginationProps` (verbatim):

```ts
export declare namespace PaginationProps {
  type PagesVariant = 'normal' | 'compact';
  interface Labels {
    nextPageLabel?: string;
    paginationLabel?: string;
    previousPageLabel?: string;
    pageLabel?: (pageNumber: number) => string;
    jumpToPageButton?: string;
  }
  interface I18nStrings {
    jumpToPageInputLabel?: string;
    jumpToPageError?: string;
    jumpToPageLoadingText?: string;
    pagesCompactText?: (options: {
      currentPage: number;
      pagesCount: number;
      openEnd: boolean;
    }) => string;
  }
  interface ChangeDetail {
    currentPageIndex: number;
  }
  interface PageClickDetail {
    requestedPageAvailable: boolean;
    requestedPageIndex: number;
  }
  interface JumpToPageProps {
    /**
     * User controlled loading state when jump to page callback is executing
     */
    loading?: boolean;
  }
  interface Ref {
    /**
     * Set error state for jump to page. Component will auto-clear when user types or navigates.
     */
    setError: (hasError: boolean) => void;
  }
}
```
