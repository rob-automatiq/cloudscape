# area-chart playground examples

Snapshot of the named examples on https://cloudscape.design/components/area-chart/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Stacked area chart

Playground id: `stacked-area-chart`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Network 1",type:"area",data:s.map((e,t)=>({x:e,y:l[t]})),valueFormatter:i.numberFormatter},{title:"Network 2",type:"area",data:s.map((e,t)=>({x:e,y:o[t]})),valueFormatter:i.numberFormatter}]
  ```
- `statusType`: `finished`
- `xDomain`: `[s[0],s[s.length-1]]`
- `yDomain`: `[0,5e5]`
- `xTitle`: `Time (UTC)`
- `yTitle`: `Bytes transferred`
- `xScaleType`: `time`
- `hideFilter`: `true`
- `hideLegend`: `false`
- `ariaLabel`: `Stacked area chart`
- `i18nStrings`: `{xTickFormatter:n.dateTimeFormatter,yTickFormatter:i.numberFormatter}`

### Stacked area chart, multiple metrics

Playground id: `stacked-area-chart,-multiple-metrics`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"CPU1",type:"area",data:s.map((e,t)=>({x:e,y:f(l[t])})),valueFormatter:i.percentageFormatter},{title:"CPU2",type:"area",data:s.map((e,t)=>({x:e,y:f(c[t])})),valueFormatter:i.percentageFormatter},{title:"CPU3",type:"area",data:s.map((e,t)=>({x:e,y:f(o[t])})),valueFormatter:i.percentageFormatter},{title:"CPU4",type:"area",data:s.map((e,t)=>({x:e,y:f(d[t])})),valueFormatter:i.percentageFormatter},{title:"CPU5",type:"area",data:s.map((e,t)=>({x:e,y:f(u[t])})),valueFormatter:i.percentageFormatter},{title:"CPU6",type:"area",data:s.map((e,t)=>({x:e,y:f(h[t])})),valueFormatter:i.percentageFormatter}]
  ```
- `statusType`: `finished`
- `xDomain`: `[s[0],s[s.length-1]]`
- `yDomain`: `[0,1]`
- `xTitle`: `Time (UTC)`
- `yTitle`: `Total CPU load`
- `xScaleType`: `time`
- `hideFilter`: `false`
- `hideLegend`: `false`
- `ariaLabel`: `Stacked area chart, multiple metrics`
- `i18nStrings`: `{xTickFormatter:n.dateTimeFormatter,yTickFormatter:i.percentageFormatter}`

### Stacked area chart, with threshold

Playground id: `stacked-area-chart,-with-threshold`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Network 1",type:"area",data:s.map((e,t)=>({x:e,y:l[t]})),valueFormatter:i.numberFormatter},{title:"Network 2",type:"area",data:s.map((e,t)=>({x:e,y:c[t]})),valueFormatter:i.numberFormatter},{title:"Network 3",type:"area",data:s.map((e,t)=>({x:e,y:o[t]})),valueFormatter:i.numberFormatter},{title:"Target",type:"threshold",y:35e4,valueFormatter:i.numberFormatter}]
  ```
- `statusType`: `finished`
- `xDomain`: `[s[0],s[s.length-1]]`
- `yDomain`: `[0,6e5]`
- `xTitle`: `Time (UTC)`
- `yTitle`: `Bytes transferred`
- `xScaleType`: `time`
- `hideFilter`: `false`
- `hideLegend`: `false`
- `ariaLabel`: `Stacked area chart, with threshold`
- `i18nStrings`: `{xTickFormatter:n.dateTimeFormatter,yTickFormatter:i.numberFormatter}`

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
