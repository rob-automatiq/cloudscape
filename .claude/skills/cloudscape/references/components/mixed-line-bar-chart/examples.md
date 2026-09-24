# mixed-line-bar-chart playground examples

Snapshot of the named examples on https://cloudscape.design/components/mixed-line-bar-chart/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Mixed bar chart

Playground id: `mixed-bar-chart`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Costs",type:"bar",data:c.map(({x:e,actual:t})=>({x:e,y:t})),valueFormatter:s.moneyFormatter},{title:"Costs last year",type:"line",data:c.map(({x:e,lastYear:t})=>({x:e,y:t})),valueFormatter:s.moneyFormatter},{title:"Budget",type:"threshold",y:12e3,valueFormatter:s.moneyFormatter},{title:"Peak cost",type:"threshold",x:"Sep 2019"}]
  ```
- `statusType`: `finished`
- `xDomain`: `c.map(({x:e})=>e)`
- `yDomain`: `[0,2e4]`
- `xTitle`: `Budget month`
- `yTitle`: `Costs (USD)`
- `ariaLabel`: `Mixed bar chart`
- `i18nStrings`: `{yTickFormatter:s.numberFormatter}`
- `detailPopoverSeriesContent`:

  ```jsx
  ({ series, x, y }) => ({
    key: series.title,
    value: <Link external="true" href="#" ariaLabel={ `See details for ${moneyFormatter(y)} on ${series.title} (opens in a new tab)` }>
      {moneyFormatter(y)}
    </Link>
  })
  ```

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
