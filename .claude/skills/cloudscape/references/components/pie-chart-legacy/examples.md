# pie-chart-legacy playground examples

Snapshot of the named examples on https://cloudscape.design/components/pie-chart-legacy/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Pie chart

Playground id: `pie-chart`

- `size`: `medium`
- `data`:

  ```jsx
  [{title:"Running",value:60,lastUpdate:"Dec 7, 2020"},{title:"Failed",value:30,lastUpdate:"Dec 6, 2020"},{title:"In-progress",value:10,lastUpdate:"Dec 6, 2020"},{title:"Pending",value:0,lastUpdate:"Dec 7, 2020"}]
  ```
- `ariaLabel`: `Pie chart`
- `ariaDescription`: `Pie chart showing how many resources are currently in which state.`
- `segmentDescription`:

  ```jsx
  (datum, sum) => `${datum.value} units, ${(datum.value / sum * 100).toFixed(0)}%`
  ```
- `detailPopoverContent`:

  ```jsx
  (datum, sum) => [
    {
      key: 'Resource count',
      value: datum.value
    },
    {
      key: 'Percentage',
      value: `${(datum.value / sum * 100).toFixed(0)}%`
    },
    {
      key: 'Last update on',
      value: datum.lastUpdate
    }
  ]
  ```

### Donut chart

Playground id: `donut-chart`

- `size`: `large`
- `variant`: `donut`
- `data`:

  ```jsx
  [{title:"Item A",percentage:40,value:40},{title:"Item B",percentage:25,value:25},{title:"Item C",percentage:20,value:20},{title:"Item D",percentage:10,value:10},{title:"Item E",percentage:5,value:5}]
  ```
- `ariaLabel`: `Donut chart`
- `ariaDescription`: `Donut chart showing generic example data.`
- `innerMetricValue`: `100`
- `innerMetricDescription`: `total units`
- `segmentDescription`:

  ```jsx
  (datum, sum) => `${datum.value} units, ${(datum.value / sum * 100).toFixed(0)}%`
  ```
- `visibleSegments`:

  ```jsx
  [{title:"Item A",percentage:40,value:40},{title:"Item B",percentage:25,value:25},{title:"Item C",percentage:20,value:20},{title:"Item D",percentage:10,value:10},{title:"Item E",percentage:5,value:5}]
  ```

### Small donut chart

Playground id: `small-donut-chart`

- `size`: `small`
- `variant`: `donut`
- `data`: `[{title:"Complete",value:160},{title:"Incomplete",value:40}]`
- `ariaLabel`: `Small donut chart`
- `ariaDescription`: `Donut chart showing generic progress.`
- `innerMetricValue`: `80%`
- `hideFilter`: `true`
- `hideLegend`: `true`

### Empty

Playground id: `empty`

- `size`: `small`
- `data`: `[]`

### Loading

Playground id: `loading`

- `size`: `small`
- `data`: `[]`
- `statusType`: `loading`

### Error

Playground id: `error`

- `size`: `small`
- `data`: `[]`
- `statusType`: `error`
