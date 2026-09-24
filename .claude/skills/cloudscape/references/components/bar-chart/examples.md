# bar-chart playground examples

Snapshot of the named examples on https://cloudscape.design/components/bar-chart/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Single data series

Playground id: `single-data-series`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Site 1",type:"bar",data:c,valueFormatter:n.moneyFormatter},{title:"Average revenue",type:"threshold",y:19104,valueFormatter:n.moneyFormatter}]
  ```
- `statusType`: `finished`
- `xDomain`: `c.map(({x:e})=>e)`
- `yDomain`: `[-1e4,4e4]`
- `xTitle`: `Time (UTC)`
- `yTitle`: `Revenue (USD)`
- `ariaLabel`: `Single data series line chart`
- `i18nStrings`: `{xTickFormatter:s.dateTimeFormatter,yTickFormatter:n.numberFormatter}`

### Multiple data series, grouped

Playground id: `multiple-data-series,-grouped`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Site 1",type:"bar",data:o.map(({x:e,site1:t})=>({x:e,y:t})),valueFormatter:n.numberFormatter},{title:"Site 2",type:"bar",data:o.map(({x:e,site2:t})=>({x:e,y:t})),valueFormatter:n.numberFormatter},{title:"Site 3",type:"bar",data:o.map(({x:e,site3:t})=>({x:e,y:t})),valueFormatter:n.numberFormatter},{title:"Site 4",type:"bar",data:o.map(({x:e,site4:t})=>({x:e,y:t})),valueFormatter:n.numberFormatter},{title:"Site 5",type:"bar",data:o.map(({x:e,site5:t})=>({x:e,y:t})),valueFormatter:n.numberFormatter},{title:"Site 6",type:"bar",data:o.map(({x:e,site6:t})=>({x:e,y:t})),valueFormatter:n.numberFormatter}]
  ```
- `statusType`: `finished`
- `xDomain`: `o.map(({x:e})=>e)`
- `yDomain`: `[0,5e5]`
- `xTitle`: `Time (UTC)`
- `yTitle`: `Bytes transferred`
- `ariaLabel`: `Multiple data series line chart`
- `i18nStrings`: `{xTickFormatter:s.dateTimeFormatter,yTickFormatter:n.numberFormatter}`
- `detailPopoverSeriesContent`:

  ```jsx
  ({ series, y }) => {
    const formattedValue = numberFormatter(y);
    return {
      key: series.title,
      value: <Link external="true" href="#" ariaLabel={`See details for ${formattedValue} on ${series.title} (opens in a new tab)`}>
        { formattedValue }
      </Link>
    };
  }
  ```

### Multiple data series, stacked

Playground id: `multiple-data-series,-stacked`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Severe",type:"bar",data:l.map(({x:e,severe:t})=>({x:e,y:t}))},{title:"Moderate",type:"bar",data:l.map(({x:e,moderate:t})=>({x:e,y:t}))},{title:"Low",type:"bar",data:l.map(({x:e,low:t})=>({x:e,y:t}))},{title:"Unclassified",type:"bar",data:l.map(({x:e,unclassified:t})=>({x:e,y:t}))}]
  ```
- `statusType`: `finished`
- `stackedBars`: `true`
- `xDomain`: `l.map(({x:e})=>e)`
- `yDomain`: `[0,50]`
- `xTitle`: `Time (UTC)`
- `yTitle`: `Error count`
- `ariaLabel`: `Stacked bar chart`
- `i18nStrings`: `{xTickFormatter:s.dateTimeFormatter}`

### Multiple data series, stacked, horizontal

Playground id: `multiple-data-series,-stacked,-horizontal`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Desktop",type:"bar",valueFormatter:i,data:[{x:"Visits",y:.32},{x:"Bounces",y:.24}]},{title:"Mobile",type:"bar",valueFormatter:i,data:[{x:"Visits",y:.26},{x:"Bounces",y:.45}]},{title:"Tablet",type:"bar",valueFormatter:i,data:[{x:"Visits",y:.23},{x:"Bounces",y:.18}]},{title:"Embedded",type:"bar",valueFormatter:i,data:[{x:"Visits",y:.13},{x:"Bounces",y:.03}]},{title:"Crawler",type:"bar",valueFormatter:i,data:[{x:"Visits",y:.06},{x:"Bounces",y:.1}]}]
  ```
- `statusType`: `finished`
- `stackedBars`: `true`
- `horizontalBars`: `true`
- `xDomain`: `["Visits","Bounces"]`
- `yDomain`: `[0,1]`
- `xTitle`: `Visit type`
- `yTitle`: `""` (empty string)
- `ariaLabel`: `Stacked, horizontal bar chart`
- `detailPopoverFooter`:

  ```jsx
  (xValue) => <Button ariaLabel={`View details for ${ xValue}`}>View details</Button>
  ```
- `i18nStrings`: `{yTickFormatter:i}`
- `detailPopoverSeriesContent`:

  ```jsx
  ({ series, x, y }) => {
    const valueLink = ({ key, value }) => <Link external="true" href="#" ariaLabel={`See details for ${percentageFormatter(value)} on ${key} (opens in a new tab)`}>{percentageFormatter(value)}</Link>;
    return {
      key: series.title,
      value: valueLink({ key: series.title, value: y}),
      expandable: series.title === 'Desktop' || series.title === 'Mobile',
      subItems: series.title === 'Desktop' ? [
        {
          key: 'Chrome',
          value: valueLink({ key: 'Desktop Chrome', value: x === 'Visits' ? 0.19 : 0.15 })
        },
        {
          key: 'Safari',
          value: valueLink({ key: 'Desktop Safari', value: x === 'Visits' ? 0.07 : 0.05 })
        },
        {
          key: 'Edge',
          value: valueLink({ key: 'Desktop Edge', value: x === 'Visits' ? 0.02 : 0.02 })
        },
        {
          key: 'Firefox',
          value: valueLink({ key: 'Desktop Firefox', value: x === 'Visits' ? 0.02 : 0.02 })
        },
        {
          key: 'Others',
          value: valueLink({ key: 'Other desktop browsers', value: x === 'Visits' ? 0.02 : 0.02 })
        }
      ] : series.title === 'Mobile' ? [
        {
          key: 'Chrome',
          value: valueLink({ key: 'Mobile Chrome', value: x === 'Visits' ? 0.18 : 0.3 })
        },
        {
          key: 'Safari',
          value: valueLink({ key: 'Mobile Safari', value: x === 'Visits' ? 0.04 : 0.08 })
        },
        {
          key: 'Others',
          value: valueLink({ key: 'Other mobile browsers', value: x === 'Visits' ? 0.04 : 0.07 })
        }
      ] : undefined
    }
  }
  ```

### With sub-items

Playground id: `with-sub-items`

- `height`: `300`
- `series`:

  ```jsx
  [{title:"Amazon Simple Storage Service",type:"bar",data:[{x:"2023-04",y:56.03},{x:"2023-05",y:65.14},{x:"2023-06",y:69.8},{x:"2023-07",y:78.45},{x:"2023-08",y:84.36},{x:"2023-09",y:90.68}]},{title:"Amazon Relational Database Service",type:"bar",data:[{x:"2023-05",y:217.77},{x:"2023-06",y:35.9},{x:"2023-07",y:36.39},{x:"2023-08",y:36.39},{x:"2023-09",y:35.96}]},{title:"AWS Config",type:"bar",data:[{x:"2023-04",y:39.02},{x:"2023-05",y:41.94},{x:"2023-06",y:40.06},{x:"2023-07",y:39.6},{x:"2023-08",y:48.62},{x:"2023-09",y:88.34}]},{title:"AWS Key Management Service",type:"bar",data:[{x:"2023-04",y:39.48},{x:"2023-05",y:43.63},{x:"2023-06",y:43.25},{x:"2023-07",y:45.62},{x:"2023-08",y:45.12},{x:"2023-09",y:45.93}]},{title:"Amazon Elastic Container Service",type:"bar",data:[{x:"2023-04",y:25.48},{x:"2023-05",y:45.06},{x:"2023-06",y:41.65},{x:"2023-07",y:23.42},{x:"2023-08",y:13.52},{x:"2023-09",y:64.24}]},{title:"Others",type:"bar",data:[{x:"2023-04",y:27.31},{x:"2023-05",y:33.6},{x:"2023-06",y:41.08},{x:"2023-07",y:37.37},{x:"2023-08",y:25.49},{x:"2023-09",y:25.28}]}]
  ```
- `statusType`: `finished`
- `stackedBars`: `true`
- `xTitle`: `Time`
- `yTitle`: `Costs`
- `ariaLabel`: `Costs chart`
- `xTickFormatter`: `d => new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })`
- `xDomain`: `["2023-04","2023-05","2023-06","2023-07","2023-08","2023-09"]`
- `xScaleType`: `categorical`
- `detailPopoverSeriesContent`:

  ```jsx
  ({ series, x, y }) => ({
    key: series.title,
    value: moneyFormatter(y),
    expandable: series.title === 'Others',
    subItems: series.title === 'Others' ? [
      {
        key: 'AWS Lambda',
        value: moneyFormatter({
          '2023-04': 10.89,
          '2023-05': 11.25,
          '2023-06': 10.89,
          '2023-07': 11.25,
          '2023-08': 11.25,
          '2023-09': 10.89,
        }[x])
      },
      {
        key: 'CodeBuild',
        value: moneyFormatter({
          '2023-04': 6.42,
          '2023-05': 9.52,
          '2023-06': 19.06,
          '2023-07': 17.92,
          '2023-08': 7.22,
          '2023-09': 6.08,
        }[x])
      },
      {
        key: 'Amazon GuardDuty',
        value: moneyFormatter({
          '2023-04': 10,
          '2023-05': 12.83,
          '2023-06': 11.13,
          '2023-07': 8.2,
          '2023-08': 7.02,
          '2023-09': 8.31,
        }[x])
      }
    ] : undefined
  })
  ```
- `detailPopoverFooter`:

  ```jsx
  (xValue) => {
    const total = {
      '2023-04': 131.29,
      '2023-05': 447.14,
      '2023-06': 271.74,
      '2023-07': 260.85,
      '2023-08': 253.5,
      '2023-09': 350.43,
    }[xValue];
    return (
      <>
        <hr />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>Total</span>
          <span>{ moneyFormatter(total) }</span>
        </div>
      </>
    )
  }
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
