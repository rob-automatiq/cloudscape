# pie-chart playground examples

Snapshot of the named examples on https://cloudscape.design/components/pie-chart/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Pie chart

Playground id: `pie-chart`

- `ariaLabel`: `Pie chart`
- `ariaDescription`: `Pie chart showing how many resources are currently in which state.`
- `series`:

  ```jsx
  {name:"Resource count",type:"pie",data:[{name:"Running",y:60},{name:"Failed",y:30},{name:"In-progress",y:10},{name:"Pending",y:null}]}
  ```
- `tooltip`:

  ```jsx
  {
    details({ segmentValue, segmentName, totalValue }) {
      const lastUpdatesMap = new Map([
        ["Running", "Dec 7, 2020"],
        ["Failed", "Dec 6, 2020"],
        ["In-progress", "Dec 6, 2020"],
        ["Pending", "Dec 7, 2020"],
      ]);
      return [
        { key: "Resource count", value: segmentValue },
        { key: "Percentage", value: `${((segmentValue / totalValue) * 100).toFixed(0)}%` },
        { key: "Last update on", value: lastUpdatesMap.get(segmentName) ?? "???" },
      ];
    },
  }
  ```
- `segmentDescription`:

  ```jsx
  ({ segmentValue, totalValue }) =>
    `${segmentValue} units, ${((segmentValue / totalValue) * 100).toFixed(0)}%`
  ```

### Donut chart

Playground id: `donut-chart`

- `ariaLabel`: `Donut chart`
- `ariaDescription`: `Donut chart showing generic example data.`
- `series`:

  ```jsx
  {name:"Value",type:"donut",data:[{name:"Item A",y:40},{name:"Item B",y:25},{name:"Item C",y:20},{name:"Item D",y:10},{name:"Item E",y:5}]}
  ```
- `tooltip`:

  ```jsx
  {
    details: ({ segmentValue, totalValue }) => [
      { key: "Value", value: segmentValue },
      { key: "Percentage", value: `${((segmentValue / totalValue) * 100).toFixed(0)}%` },
    ],
  }
  ```
- `segmentDescription`:

  ```jsx
  ({ totalValue, segmentValue }) =>
    `${segmentValue} units, ${((segmentValue / totalValue) * 100).toFixed(0)}%`
  
  ```
- `innerAreaTitle`: `100`
- `innerAreaDescription`: `total units`

### Small donut chart

Playground id: `small-donut-chart`

- `chartHeight`: `200`
- `ariaLabel`: `Small donut chart`
- `ariaDescription`: `Donut chart showing generic progress.`
- `series`: `{name:"Units",type:"donut",data:[{name:"Complete",y:160},{name:"Incomplete",y:40}]}`
- `tooltip`:

  ```jsx
  {
    details: ({ segmentValue, totalValue }) => [
        { key: "Units", value: segmentValue },
        { key: "Percentage", value: `${((segmentValue / totalValue) * 100).toFixed(0)}%` },
    ],
  }
  ```
- `innerAreaTitle`: `80%`

### Empty

Playground id: `empty`

- `series`: `{name:"Resource count",type:"pie",data:[]}`
- `noData`: `(0,l.noData)("finished")`

### Loading

Playground id: `loading`

- `series`: `{name:"Resource count",type:"pie",data:[]}`
- `noData`: `(0,l.noData)("loading")`

### Error

Playground id: `error`

- `series`: `{name:"Resource count",type:"pie",data:[]}`
- `noData`: `(0,l.noData)("error")`
