# PieChart

```ts
import PieChart from '@cloudscape-design/components/pie-chart'
import type { PieChartProps } from '@cloudscape-design/components/pie-chart'
```

Generated from `@cloudscape-design/components@3.0.1382` `pie-chart/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`additionalFilters?`**: `React.ReactNode`
  Additional filters that you can add above the chart component.
  Make sure you update the `data` property when any of your custom filters change the data that's displayed.
- **`ariaDescription?`**: `string`
  A description of the chart that assistive technologies can use (through `aria-describedby` and `<title>`).
  Provide a concise summary of the data visualized in the chart.
- **`ariaLabel?`**: `string`
  ARIA label that's assigned to the chart. It should match the visible label on the page
  (for example, in the container header). Use either `ariaLabel` or `ariaLabelledby` (you can't use both).
- **`ariaLabelledby?`**: `string`
  Sets `aria-labelledby` on the chart. If there is a visible label for the chart on the page
  (for example, in the container header), set this property to the ID of that header element.
  Use either `ariaLabel` or `ariaLabelledby` (you can't use both).
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`data`**: `ReadonlyArray<T>`
  An array that represents the source of data for the displayed segments.
  Each element can have the following properties:
  
  * `title` (string) - A human-readable title for this data point.
  * `value` (number) - Numeric value that determines the segment size.
                         A segment with a value of zero (0) or lower (negative number) won't have a segment.
  * `color`: (string) - (Optional) Color value for this segment that takes priority over the automatically assigned color.
                         Can be any valid CSS color identifier.
  
  As long as your data object implements the properties above, you can also define additional properties
  that are relevant to your data visualization.
  The full data object will be passed down to events and properties like `detailPopoverContent`.
- **`detailPopoverContent?`**: `PieChartProps.DetailPopoverContentFunction<T>`
  A function that determines the details that are displayed in the popover when hovering over a segment.
  The function is called with the data of the target segment and is expected to return an array of detail pairs.
  By default, each segment displays two detail pairs: count and percentage.
  
  Each pair has the following properties:
  * `key` (ReactNode) - Name of the detail or metric.
  * `value` (ReactNode) - The value of this detail for the target segment.
- **`detailPopoverFooter?`**: `PieChartProps.DetailPopoverFooter<T>`
  Additional content that is displayed at the bottom of the detail popover.
- **`detailPopoverSize?`**: `PopoverProps.Size`
  Determines the maximum width of the popover.
- **`empty?`**: `React.ReactNode`
  Content that's displayed when the data passed to the component is empty.
- **`errorText?`**: `string` _(@i18n)_
  Text that's displayed when the chart is in error state (that is, when `statusType` is set to `error`).
- **`fitHeight?`**: `boolean`
  Enable this property to make the chart fit into the available height of the parent container.
- **`hideDescriptions?`**: `boolean`
  Hides the label descriptions next to the chart segments when set to `true`.
- **`hideFilter?`**: `boolean`
  Hides the default filtering dropdown when set to `true`.
  You can still display additional filters with the `additionalFilters` slot.
- **`hideLegend?`**: `boolean`
  Hides legend beneath the chart when set to `true`.
  We highly recommend that you leave this unspecified or set to `false`.
- **`hideTitles?`**: `boolean`
  Hides label titles next to the chart segments when set to `true`.
  We highly recommend that you leave this unspecified or set to `false`.
- **`highlightedSegment?`**: `T | null`
  Specifies the currently highlighted data segment. Highlighting is typically the result of
  a user hovering over or selecting a segment in the chart or the legend.
  A value of `null` means no segment is being highlighted.
  
  - If you don't set this property, segments are highlighted automatically when a user hovers over or selects one of the triggers (that is, uncontrolled behavior).
  - If you explicitly set this property, you must set an `onHighlightChange` listener to update this property when a segment should be highlighted (that is, controlled behavior).
- **`i18nStrings?`**: `PieChartProps.I18nStrings` _(@i18n)_
  An object that contains all of the localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`innerMetricDescription?`**: `string`
  Additional description that's displayed in the center of the chart below `innerMetricValue` if `variant` is set to `donut`.
  This is usually the unit of the `innerMetricValue`.
- **`innerMetricValue?`**: `string`
  Additional metric number that's displayed in the center of the chart if `variant` is set to `donut`.
- **`legendTitle?`**: `string`
  Title for the legend.
- **`loadingText?`**: `string` _(@i18n)_
  Text that's displayed when the chart is loading (that is, when `statusType` is set to `loading`).
- **`noMatch?`**: `React.ReactNode`
  Content that's displayed when there is no data to display because it doesn't match the specified filter.
- **`recoveryText?`**: `string` _(@i18n)_
  Text for the recovery button that's displayed next to the error text.
- **`segmentDescription?`**: `PieChartProps.SegmentDescriptionFunction<T>`
  A function that determines the description of a segment that is displayed on the chart, unless `hideDescriptions` is set to `true`.
  This is an optional description that explains the segment and is displayed underneath the label.
  The function is called with the data object of each segment and is expected to return the description as a string.
- **`size?`**: `'small' | 'medium' | 'large'`
  Specifies the size of the pie or donut chart.
  When used with `fitHeight`, this property defines the minimum size of the chart area.
- **`statusType?`**: `'loading' | 'finished' | 'error'`
  Specifies the current status of loading data.
  * `loading` - Indicates that data fetching is in progress.
  * `finished` - Indicates that data has loaded successfully.
  * `error` - Indicates that an error occurred during fetch. You should provide an option to enable the user to recover.
- **`variant?`**: `'pie' | 'donut'`
  Visual variant of the pie chart. Currently supports the default `pie` variant and the `donut` variant.
  The donut variant provides a slot in the center of the chart that can contain additional information.
  For more information, see `innerContent`.
- **`visibleSegments?`**: `ReadonlyArray<T>`
  An array of data segment objects that determines which data segments are currently visible (that is, not filtered out).
  
  - If you don't set this property, segments are filtered automatically when using the default filtering of the component (that is, uncontrolled behavior).
  - If you explicitly set this property, you must set an `onFilterChange` listener to update this property when the list of filtered segments changes (that is, controlled behavior).

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onFilterChange?`**: `NonCancelableEventHandler<PieChartProps.FilterChangeDetail<T>>`
  Called when the values of the internal filter component changes.
  This isn't called for any custom filter components you've defined in `additionalFilters`.
- **`onHighlightChange?`**: `NonCancelableEventHandler<PieChartProps.HighlightChangeDetail<T>>`
  Called when the highlighted segmented changes because of a user interaction.
- **`onRecoveryClick?`**: `NonCancelableEventHandler`
  Called when the user clicks the recovery button that appears when there is an error state.
  Use this to enable the user to retry a failed request or provide another option for the user
  to recover from the error.

## Types

Supporting types from `PieChartProps` (verbatim):

```ts
export declare namespace PieChartProps {
  interface Datum {
    title: string;
    value: number;
    color?: string;
  }
  type PieChartData = ReadonlyArray<Datum>;
  interface DetailPopoverContentFunction<T = Datum> {
    (segment: T, visibleDataSum: number): ReadonlyArray<ChartDetailPair>;
  }
  interface DetailPopoverFooter<T> {
    (segment: T): React.ReactNode;
  }
  interface SegmentDescriptionFunction<T = Datum> {
    (segment: T, visibleDataSum: number): string;
  }
  interface HighlightChangeDetail<T> {
    highlightedSegment: T | null;
  }
  interface FilterChangeDetail<T> {
    visibleSegments: ReadonlyArray<T>;
  }
  interface I18nStrings {
    /** Name of the "Value" key that is displayed in the details popover by default */
    detailsValue?: string;
    /** Name of the "Percentage" key that is displayed in the details popover by default */
    detailsPercentage?: string;
    /** Visible label of the default filter */
    filterLabel?: string;
    /** Placeholder text of the default filter */
    filterPlaceholder?: string;
    /** ARIA label for the default filter which is appended to any option that is selected */
    filterSelectedAriaLabel?: string;
    /** ARIA label that is associated with the legend in case there is no visible `legendTitle` defined */
    legendAriaLabel?: string;
    /** ARIA label for details popover dismiss button */
    detailPopoverDismissAriaLabel?: string;
    /** Name of the ARIA role description of the chart, e.g. "pie chart" */
    chartAriaRoleDescription?: string;
    /** Name of the ARIA role description of each segment, e.g. "segment" */
    segmentAriaRoleDescription?: string;
  }
}
```
