# MixedLineBarChart

```ts
import MixedLineBarChart from '@cloudscape-design/components/mixed-line-bar-chart'
import type { MixedLineBarChartProps } from '@cloudscape-design/components/mixed-line-bar-chart'
```

Generated from `@cloudscape-design/components@3.0.1382` `mixed-line-bar-chart/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`additionalFilters?`**: `React.ReactNode`
  Additional filters that are added above the chart component.
  Make sure to update the `data` property when any of your custom filters change the data to be displayed.
- **`ariaDescription?`**: `string`
  A description of the chart that assistive technologies can use (through `aria-describedby`).
  Provide a concise summary of the data visualized in the chart.
- **`ariaLabel?`**: `string`
  ARIA label that is assigned to the chart itself. It should match the visible label on the page, e.g. in the container header.
  Do not use `ariaLabel` and `ariaLabelledby` at the same time.
- **`ariaLabelledby?`**: `string`
  Sets `aria-labelledby` on the chart itself.
  If there is a visible label for the chart on the page, e.g. in the container header, set this property to the ID of that header element.
  Do not use `ariaLabel` and `ariaLabelledby` at the same time.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`detailPopoverFooter?`**: `CartesianChartProps.DetailPopoverFooter<T>`
  Additional content that is displayed at the bottom of the detail popover.
- **`detailPopoverSeriesContent?`**: `MixedLineBarChartProps.DetailPopoverSeriesContent<T>`
  A function that determines the details that are displayed in the popover for each series.
  Use this for wrapping keys or values in external links, or to display a metric breakdown by adding an additional level of nested items.
  
  The function is called with the parameters `{ series, x, y }` representing the series, the highlighted x coordinate value and its corresponding y value respectively,
  and should return the following properties:
  * `key` (ReactNode) - Name of the series.
  * `value` (ReactNode) - Value of the series at the highlighted x coordinate.
  * `subItems` (ReadonlyArray<{ key: ReactNode; value: ReactNode }>) - (Optional) List of nested key-value pairs.
  * `expandable` (boolean) - (Optional) Determines whether the optional list of nested items provided via `subItems` is expandable. This is `false` by default.
- **`detailPopoverSize?`**: `'small' | 'medium' | 'large'`
  Determines the maximum width the detail popover will be limited to.
- **`emphasizeBaselineAxis?`**: `boolean`
  When set to `true`, adds a visual emphasis on the zero baseline axis.
  See the usage guidelines for more details.
- **`empty?`**: `React.ReactNode`
  Content that is displayed when the data passed to the component is empty.
- **`errorText?`**: `string` _(@i18n)_
  Text that is displayed when the chart is in error state, i.e. when `statusType` is set to `"error"`.
- **`fitHeight?`**: `boolean`
  Enable this property to make the chart fit into the available height of the parent container.
- **`height?`**: `number`
  An optional pixel value number that fixes the height of the chart area.
  If not set explicitly, the component will use a default height that is defined internally.
  When used with `fitHeight`, this property defines the minimum height of the chart area.
- **`hideFilter?`**: `boolean`
  When set to `true`, the default filtering dropdown is not displayed.
  It is still possible to render additional filters with the `additionalFilters` slot.
- **`hideLegend?`**: `boolean`
  When set to `true`, the legend beneath the chart is not displayed.
  It is highly recommended to keep this set to `false`.
- **`highlightedSeries?`**: `Series | null`
  The currently highlighted data series, usually through hovering over a series or the legend.
  A value of `null` means no series is highlighted.
  
  - If you do not set this property, series are highlighted automatically when hovering over one of the triggers (uncontrolled behavior).
  - If you explicitly set this property, you must set an `onHighlightChange` listener to update this property when a series should be highlighted (controlled behavior).
- **`horizontalBars?`**: `boolean`
  When set to `true`, the x and y axes are flipped, which causes any bars to be rendered horizontally instead of vertically.
  This can only be used when the chart consists exclusively of bar series.
- **`i18nStrings?`**: `CartesianChartProps.I18nStrings<T>` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`legendTitle?`**: `string`
  Optional title for the legend.
- **`loadingText?`**: `string` _(@i18n)_
  Text that is displayed when the chart is loading, i.e. when `statusType` is set to `"loading"`.
- **`noMatch?`**: `React.ReactNode`
  Content that is displayed when there is no data to display due to the built-in filtering.
- **`recoveryText?`**: `string` _(@i18n)_
  Text for the recovery button that is displayed next to the error text.
- **`series`**: `ReadonlyArray<MixedLineBarChartProps.ChartSeries<T>>`
  Array that represents the source of data for the displayed chart.
  Each element can represent a line series, bar series, or a threshold, and can have the following properties:
  
  * `title` (string): A human-readable title for this series.
  * `type` (string): Series type (`"line"`, `"bar"`, or `"threshold"`).
  * `data` (Array): For line and bar series, an array of data points, represented as objects with `x` and `y` properties.
  * `y` (number): For threshold series, the value of the threshold.
  * `color` (string): (Optional) A color hex value for this series. When assigned, it takes priority over the automatically assigned color.
  * `valueFormatter` (Function): (Optional) A function that formats data values before rendering in the UI, For example, in the details popover.
- **`stackedBars?`**: `boolean`
  When set to `true`, bars in the same data point are stacked instead of grouped next to each other.
- **`statusType?`**: `'loading' | 'finished' | 'error'`
  Specifies the current status of loading data.
  * `loading`: data fetching is in progress.
  * `finished`: data has loaded successfully.
  * `error`: an error occurred during fetch. You should provide user an option to recover.
- **`visibleSeries?`**: `ReadonlyArray<Series>`
  An array of series objects that determines which of the data series are currently displayed, i.e. not filtered out.
  - If you do not set this property, series are shown and hidden automatically when using the default filter component (uncontrolled behavior).
  - If you explicitly set this property, you must set an `onFilterChange` listener to update this property when the visible series should change, or when one of your custom filters changes the number of visible series (controlled behavior).
- **`xDomain?`**: `ReadonlyArray<T>`
  Determines the domain of the x axis, i.e. the range of values that will be visible in the chart.
  For numerical and time-based data this is represented as an array with two values: `[minimumValue, maximumValue]`.
  For categorical data this is represented as an array of strings that determine the categories to display.
  
  It is recommended to set this explicitly. If not, the component will determine a domain that fits all data points.
  When controlling this directly, make sure to update the value based on filtering changes.
- **`xScaleType?`**: `ScaleType`
  Determines the type of scale for values on the x axis.
  Use `categorical` for charts with bars.
- **`xTickFormatter?`**: `CartesianChartProps.TickFormatter<T>`
  Function to format the displayed label of an x axis tick.
- **`xTitle?`**: `string`
  The title of the x axis.
- **`yDomain?`**: `ReadonlyArray<number>`
  Determines the domain of the y axis, i.e. the range of values that will be visible in the chart.
  The domain is defined by a tuple: `[minimumValue, maximumValue]`.
  
  It is recommended to set this explicitly. If not, the component will determine a domain that fits all data points.
  When controlling this directly, make sure to update the value based on filtering changes.
- **`yScaleType?`**: `'linear' | 'log'`
  Determines the type of scale for values on the y axis.
- **`yTickFormatter?`**: `CartesianChartProps.TickFormatter<number>`
  Function to format the displayed label of a y axis tick.
- **`yTitle?`**: `string`
  The title of the y axis.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onFilterChange?`**: `NonCancelableEventHandler<CartesianChartProps.FilterChangeDetail<Series>>`
  Called when the values of the internal filter component changed.
  This will **not** be called for any custom filter components you have defined in `additionalFilters`.
- **`onHighlightChange?`**: `NonCancelableEventHandler<CartesianChartProps.HighlightChangeDetail<Series>>`
  Called when the highlighted series has changed because of user interaction.
- **`onRecoveryClick?`**: `NonCancelableEventHandler`
  Called when the user clicks the recovery button that appears when there is an error state.
  Use this to enable the user to retry a failed request or provide another option for the user
  to recover from the error.

## Types

Supporting types from `MixedLineBarChartProps` (verbatim):

```ts
export declare namespace MixedLineBarChartProps {
  export interface Datum<T> {
    x: T;
    y: number;
  }
  interface IDataSeries<T> {
    type: 'line' | 'bar' | 'threshold';
    title: string;
    color?: string;
    data: T extends unknown ? ReadonlyArray<Datum<T>> : ReadonlyArray<Datum<T>>;
    valueFormatter?: T extends unknown ? CartesianChartProps.ValueFormatter<number, T> : CartesianChartProps.ValueFormatter<number, T>;
  }
  export interface BarDataSeries<T> extends IDataSeries<T> {
    type: 'bar';
  }
  export interface LineDataSeries<T> extends IDataSeries<T> {
    type: 'line';
  }
  export interface ThresholdSeries<T = any> extends Omit<IDataSeries<never>, 'data' | 'valueFormatter'> {
    type: 'threshold';
    y?: number;
    x?: T;
    valueFormatter?: CartesianChartProps.TickFormatter<number>;
  }
  export interface YThresholdSeries extends Omit<ThresholdSeries<never>, 'x'> {
    type: 'threshold';
    y: number;
    valueFormatter?: CartesianChartProps.TickFormatter<number>;
  }
  export interface XThresholdSeries<T> extends Omit<ThresholdSeries<T>, 'y' | 'valueFormatter'> {
    type: 'threshold';
    x: T;
  }
  export type DataSeries<T> = LineDataSeries<T> | BarDataSeries<T>;
  export type ChartSeries<T> = DataSeries<T> | ThresholdSeries<T>;
  export type FilterChangeDetail<T> = CartesianChartProps.FilterChangeDetail<ChartSeries<T>>;
  export type HighlightChangeDetail<T> = CartesianChartProps.HighlightChangeDetail<ChartSeries<T>>;
  export type TickFormatter<T> = CartesianChartProps.TickFormatter<T>;
  export type ValueFormatter<YType, XType = null> = CartesianChartProps.ValueFormatter<YType, XType>;
  export type I18nStrings<T> = CartesianChartProps.I18nStrings<T>;
  export interface DetailPopoverSeriesData<T> {
    series: ChartSeries<T>;
    x: T;
    y: number;
  }
  export interface DetailPopoverSeriesKeyValuePair {
    key: ReactNode;
    value: ReactNode;
    expandable?: boolean;
    subItems?: ReadonlyArray<{
      key: ReactNode;
      value: ReactNode;
    }>;
  }
  export interface DetailPopoverSeriesContent<T> {
    (data: DetailPopoverSeriesData<T>): DetailPopoverSeriesKeyValuePair;
  }
  export {};
}
```
