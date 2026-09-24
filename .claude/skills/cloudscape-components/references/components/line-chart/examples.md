# line-chart playground examples

Snapshot of the named examples on https://cloudscape.design/components/line-chart/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Single data series

Playground id: `single-data-series`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Site 1",type:"line",data:c.map(({x:e,site1:t})=>({x:e,y:t})),valueFormatter:n.numberFormatter},{title:"Peak hours",type:"threshold",x:new Date(2020,8,25,5,10)}]
  ```
- `statusType`: `finished`
- `xDomain`: `[c[0].x,c[c.length-1].x]`
- `yDomain`: `[0,5e5]`
- `xTitle`: `Time (UTC)`
- `yTitle`: `Bytes transferred`
- `xScaleType`: `time`
- `hideFilter`: `true`
- `hideLegend`: `true`
- `ariaLabel`: `Single data series line chart`
- `i18nStrings`: `{xTickFormatter:s.dateTimeFormatter,yTickFormatter:n.numberFormatter}`
- `detailPopoverSeriesContent`:

  ```jsx
  ({ series, x, y }) => ({
    key: <Link external="true" href="#">{ series.title }</Link>,
    value: numberFormatter(y)
  })
  ```

### Multiple data series and threshold

Playground id: `multiple-data-series-and-threshold`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Site 1",type:"line",data:c.map(({x:e,site1:t})=>({x:e,y:t})),valueFormatter:n.numberFormatter},{title:"Site 2",type:"line",data:c.map(({x:e,site2:t})=>({x:e,y:t})),valueFormatter:n.numberFormatter},{title:"Performance goal",type:"threshold",y:25e4,valueFormatter:n.numberFormatter}]
  ```
- `statusType`: `finished`
- `xDomain`: `[c[0].x,c[c.length-1].x]`
- `yDomain`: `[0,5e5]`
- `xTitle`: `Time (UTC)`
- `yTitle`: `Bytes transferred`
- `xScaleType`: `time`
- `ariaLabel`: `Multiple data series line chart`
- `i18nStrings`: `{xTickFormatter:s.dateTimeFormatter,yTickFormatter:n.numberFormatter}`

### Empty

Playground id: `empty`

- `series`: `[]`
- `statusType`: `finished`

### Loading

Playground id: `loading`

- `series`: `[]`
- `statusType`: `loading`

### Error

Playground id: `error`

- `series`: `[]`
- `statusType`: `error`
