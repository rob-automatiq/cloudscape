# Charts

> Source: https://cloudscape.design/components/charts/ (fetched 2026-09-24)

Charts are a graphic representation of information and quantitative data, built on the Highcharts library, designed to provide a clear and interactive way to convey meaning.

The API properties for this component are found here: [API Properties](https://cloudscape.design/components/charts/index.html.json)

## Overview

These include [cartesian charts](../cartesian-chart/guidelines.md) which makes up [line](../cartesian-chart/guidelines.md) , [bar](../cartesian-chart/guidelines.md) , [mixed](../cartesian-chart/guidelines.md) , [scatter](../cartesian-chart/guidelines.md) , [area](../cartesian-chart/guidelines.md) , and [pie and donut charts](../pie-chart/guidelines.md) . The components are a wrapper around the Highcharts charting library. It offers a scalable and flexible foundation that meets our high standards for accessibility, styles, and internationalization.

## An introduction to data visualization

To get started using charts to visualize data, see the [data visualization foundation article](../../patterns/general/data-vis.md) and [data visualization color guidance](../../foundation/visual-foundation/data-vis-colors.md).

## Migration from legacy to new charts

For guidance on migrating from legacy to the new charts, refer to the [migration guide](../../get-started/dev-guides/charts-migration.md) , which includes configuration examples and code snippets.

## Chart types

When using data visualization patterns to present data, choose the chart type that best shows the relationship between the data series. There are two chart components:

#### Cartesian charts

These use two axes to show data and help users see patterns or compare values.

- [Line chart](../cartesian-chart/guidelines.md)   : Visualizes one or many series of data, with an emphasis on how the data changes over time.
- [Bar chart](../cartesian-chart/guidelines.md)   : Visualizes one or many series of data, with an emphasis on the total amount of each data point.
- [Mixed chart](../cartesian-chart/guidelines.md)   : Visualizes different, but related, series of data on a single chart.
- [Scatter chart](../cartesian-chart/guidelines.md)   : Visualizes the relationships between data in two dimensions.
- [Bubble chart](../cartesian-chart/guidelines.md)   :   Visualizes the relationships between data in three dimensions, using position for two variables and bubble size for a third.
- [Area chart](../cartesian-chart/guidelines.md)   : The area chart visualizes two or more series of data. Through stacked data series, it emphasizes the part-to-whole relationship of data over a period of time.

#### Pie and donut charts

Pie and donut charts display portions of a whole unit so users can compare data points from a total set. A donut chart also includes a summary metric in the center of the chart.

- [Pie chart](../pie-chart/guidelines.md)   : A pie chart helps users see the relationship between different data metrics in a data set.
- [Donut chart](../pie-chart/guidelines.md)   : A donut chart is a variant of a pie chart with its center removed.

## Related patterns

### Cartesian charts

Cartesian charts display information along horizontal and vertical axes to clearly show patterns, comparisons, and relationships between values. It includes line, bar, area, scatter, bubble, and mixed charts.

[View Documentation](../cartesian-chart/guidelines.md)

### Pie and donut charts

Pie and donut charts visualize the relationship or correlation between data metrics in a dataset.

[View Documentation](../pie-chart-legacy/guidelines.md)

### Data visualization colors

Color can be used as a powerful element to augment a chart or other data visualization when applied with a clear sense of purpose.

[View Documentation](../../foundation/visual-foundation/data-vis-colors.md)

### Data visualization

Data visualization is a graphic representation of information and quantitative data intended to quickly and clearly convey meaning.

[View Documentation](../../patterns/general/data-vis.md)

## Licensing

These new chart components require appropriate Highcharts licenses. Cloudscape is not responsible for improper usage of these Highcharts-based components or lack of license coverage. To learn more about the licensing model of Highcharts, review their [license offering](https://shop.highcharts.com/) and [FAQ](https://shop.highcharts.com/faq) , or contact them directly.
