# cartesian-chart playground examples

Snapshot of the named examples on https://cloudscape.design/components/cartesian-chart/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Bar chart: Single data series

Playground id: `bar-chart:-single-data-series`

- `ariaLabel`: `Single data series bar chart`
- `series`:

  ```jsx
  [{name:"Site 1",type:"column",data:[34503,25832,4012,-5602,17839]},{type:"y-threshold",name:"Average revenue",value:19104}]
  ```
- `xAxis`:

  ```jsx
  {type:"category",title:"Time (UTC)",categories:[(0,s.dateFormatter)(16010712e5),(0,s.dateFormatter)(16010784e5),(0,s.dateFormatter)(16010856e5),(0,s.dateFormatter)(16010928e5),(0,s.dateFormatter)(16011e8)]}
  ```
- `yAxis`: `{title:"Revenue (USD)",min:-1e4,max:4e4,valueFormatter:s.numberFormatter}`

### Bar chart: Multiple data series, grouped

Playground id: `bar-chart:-multiple-data-series,-grouped`

- `ariaLabel`: `Multiple data series bar chart`
- `series`:

  ```jsx
  [{name:"Site 1",type:"column",data:[470319,374991,430357,440773,464442]},{name:"Site 2",type:"column",data:[452301,432909,463349,470328,485630]},{name:"Site 3",type:"column",data:[301030,352920,368204,358290,210720]},{name:"Site 4",type:"column",data:[91394,56012,156204,98349,99249]},{name:"Site 5",type:"column",data:[102032,84201,173002,103283,95382]},{name:"Site 6",type:"column",data:[45029,99291,90325,23940,59321]}]
  ```
- `tooltip`:

  ```jsx
  {
    point: ({ item }) => {
      const formattedValue = item.y !== null ? numberFormatter(item.y) : null;
      return {
        key: item.series.name,
        value: (
          <Link
            external={true}
            href="#"
            ariaLabel={`See details for ${formattedValue} on ${item.series.name} (opens in a new tab)`}
          >
            {formattedValue}
          </Link>
        ),
      };
    },
  }
  ```
- `xAxis`:

  ```jsx
  {type:"category",title:"Time (UTC)",categories:[(0,s.dateFormatter)(16010712e5),(0,s.dateFormatter)(16010784e5),(0,s.dateFormatter)(16010856e5),(0,s.dateFormatter)(16010928e5),(0,s.dateFormatter)(16011e8)]}
  ```
- `yAxis`: `{title:"Bytes transferred",min:0,max:5e5,valueFormatter:s.numberFormatter}`

### Bar chart: Multiple data series, stacked

Playground id: `bar-chart:-multiple-data-series,-stacked`

- `ariaLabel`: `Stacked, horizontal bar chart`
- `stacking`: `normal`
- `series`:

  ```jsx
  [{name:"Severe",type:"column",data:[12,18,15,9,18]},{name:"Moderate",type:"column",data:[8,11,12,11,13]},{name:"Low",type:"column",data:[7,9,8,7,5]},{name:"Unclassified",type:"column",data:[14,8,6,4,6]}]
  ```
- `xAxis`:

  ```jsx
  {type:"category",title:"Time (UTC)",categories:[(0,s.dateFormatter)(16010712e5),(0,s.dateFormatter)(16010784e5),(0,s.dateFormatter)(16010856e5),(0,s.dateFormatter)(16010928e5),(0,s.dateFormatter)(16011e8)]}
  ```
- `yAxis`: `{title:"Error count",min:0,max:50}`

### Bar chart: Multiple data series, stacked, horizontal

Playground id: `bar-chart:-multiple-data-series,-stacked,-horizontal`

- `inverted`: `true`
- `ariaLabel`: `Stacked, horizontal bar chart`
- `stacking`: `normal`
- `series`:

  ```jsx
  [{name:"Desktop",type:"column",data:[.32,.24]},{name:"Mobile",type:"column",data:[.26,.45]},{name:"Tablet",type:"column",data:[.23,.18]},{name:"Embedded",type:"column",data:[.13,.03]},{name:"Crawler",type:"column",data:[.06,.1]}]
  ```
- `tooltip`:

  ```jsx
  {
    point: ({ item }) => {
      const valueLink = ({ key, value }) => (
        <Link
          external={true}
          href="#"
          ariaLabel={`See details for ${percentageFormatter(value)} on ${key} (opens in a new tab)`}
        >
          {percentageFormatter(value)}
        </Link>
      );
      return {
        key: item.series.name,
        value: valueLink({
          key: item.series.name ?? '',
          value: item.y ?? 0,
        }),
        expandable: item.series.name === 'Desktop' || item.series.name === 'Mobile',
        subItems:
          item.series.name === 'Desktop'
            ? [
                {
                  key: 'Chrome',
                  value: valueLink({
                    key: 'Desktop Chrome',
                    value: item.x === 0 ? 0.19 : 0.15,
                  }),
                },
                {
                  key: 'Safari',
                  value: valueLink({
                    key: 'Desktop Safari',
                    value: item.x === 0 ? 0.07 : 0.05,
                  }),
                },
                {
                  key: 'Edge',
                  value: valueLink({
                    key: 'Desktop Edge',
                    value: item.x === 0 ? 0.02 : 0.02,
                  }),
                },
                {
                  key: 'Firefox',
                  value: valueLink({
                    key: 'Desktop Firefox',
                    value: item.x === 0 ? 0.02 : 0.02,
                  }),
                },
                {
                  key: 'Others',
                  value: valueLink({
                    key: 'Other desktop browsers',
                    value: item.x === 0 ? 0.02 : 0.02,
                  }),
                },
              ]
            : item.series.name === 'Mobile'
            ? [
                {
                  key: 'Chrome',
                  value: valueLink({
                    key: 'Mobile Chrome',
                    value: item.x === 0 ? 0.18 : 0.3,
                  }),
                },
                {
                  key: 'Safari',
                  value: valueLink({
                    key: 'Mobile Safari',
                    value: item.x === 0 ? 0.04 : 0.08,
                  }),
                },
                {
                  key: 'Others',
                  value: valueLink({
                    key: 'Other mobile browsers',
                    value: item.x === 0 ? 0.04 : 0.07,
                  }),
                },
              ]
            : undefined,
      };
    },
    footer: ({ x }) => <Button ariaLabel={`View details for ${x}`}>View details</Button>,
  }
  ```
- `xAxis`: `{type:"category",title:"Visit type",categories:["Visits","Bounces"]}`
- `yAxis`: `{title:"",min:0,max:1,valueFormatter:s.percentageFormatter}`

### Bar chart: With sub-items

Playground id: `bar-chart:-with-sub-items`

- `ariaLabel`: `Costs chart`
- `stacking`: `normal`
- `series`:

  ```jsx
  [{name:"Amazon Simple Storage Service",type:"column",data:[56.03,65.14,69.8,78.45,84.36,90.68]},{name:"Amazon Relational Database Service",type:"column",data:[null,217.77,35.9,36.39,36.39,35.96]},{name:"AWS Config",type:"column",data:[39.02,41.94,40.06,39.6,48.62,88.34]},{name:"AWS Key Management Service",type:"column",data:[39.48,43.63,43.25,45.62,45.12,45.93]},{name:"Amazon Elastic Container Service",type:"column",data:[25.48,45.06,41.65,23.42,13.52,64.24]},{name:"Others",type:"column",data:[27.31,33.6,41.08,37.37,25.49,25.28]}]
  ```
- `tooltip`:

  ```jsx
  {
    point: ({ item }) => {
      return {
        key: item.series.name,
        value: item.y !== null ? moneyFormatter(item.y) : null,
        expandable: item.series.name === "Others",
        subItems:
          item.series.name === "Others"
            ? [
                {
                  key: "AWS Lambda",
                  value: moneyFormatter([10.89, 11.25, 10.89, 11.25, 11.25, 10.89][item.x]),
                },
                {
                  key: "CodeBuild",
                  value: moneyFormatter([6.42, 9.52, 19.06, 17.92, 7.22, 6.08][item.x]),
                },
                {
                  key: "Amazon GuardDuty",
                  value: moneyFormatter([10, 12.83, 11.13, 8.2, 7.02, 8.31][item.x]),
                },
              ]
            : undefined,
      };
    },
    footer: ({ x }) => {
      const total = [131.29, 447.14, 271.74, 260.85, 253.5, 350.43][x];
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Total</span>
          <span>{moneyFormatter(total)}</span>
        </div>
      );
    },
  }
  ```
- `xAxis`:

  ```jsx
  {type:"category",title:"Time",categories:["2023-04","2023-05","2023-06","2023-07","2023-08","2023-09"]}
  ```
- `yAxis`: `{title:"Costs"}`

### Line chart: Single data series

Playground id: `line-chart:-single-data-series`

- `ariaLabel`: `Single data series line chart`
- `series`: `[c,{type:"x-threshold",name:"Peak hours",value:16010034e5}]`
- `tooltip`:

  ```jsx
  {
    point: ({ item }) => {
      return {
        key: (
          <Link external={true} href="#">
            {item.series.name}
          </Link>
        ),
        value: item.y !== null ? numberFormatter(item.y) : null,
      };
    },
  }
  ```
- `xAxis`:

  ```jsx
  {type:"datetime",title:"Time (UTC)",min:16009848e5,max:16010136e5,valueFormatter:s.dateFormatter}
  ```
- `yAxis`: `{title:"Bytes transferred",min:0,max:5e5,valueFormatter:s.numberFormatter}`

### Line chart: Zoned data series

Playground id: `line-chart:-zoned-data-series`

- `ariaLabel`: `Multiple data series line chart`
- `series`: `[u,y,{type:"x-threshold",name:"Fix deployed",value:16010059e5}]`
- `xAxis`:

  ```jsx
  {type:"datetime",title:"Time (UTC)",min:16009848e5,max:16010136e5,valueFormatter:s.dateFormatter}
  ```
- `yAxis`: `{title:"Bytes transferred",min:0,max:5e5,valueFormatter:s.numberFormatter}`

### Line chart: Linked data series

Playground id: `line-chart:-linked-data-series`

- `ariaLabel`: `Multiple data series line chart`
- `series`:

  ```jsx
  [{id:"site-performance",type:"line",name:"Performance data",data:c.data.slice(0,10)},{type:"scatter",name:"Performance data",data:[c.data[12],c.data[14]],linkedTo:":previous"},{type:"line",name:"Performance data",data:c.data.slice(17),linkedTo:"site-performance"},{type:"y-threshold",name:"Performance goal",value:25e4}]
  ```
- `xAxis`:

  ```jsx
  {type:"datetime",title:"Time (UTC)",min:16009848e5,max:16010136e5,valueFormatter:s.dateFormatter}
  ```
- `yAxis`: `{title:"Bytes transferred",min:0,max:55e4,valueFormatter:s.numberFormatter}`

### Mixed line and bar chart with two y axes

Playground id: `mixed-line-and-bar-chart-with-two-y-axes`

- `ariaLabel`: `Mixed line and bar chart with two y axes`
- `series`:

  ```jsx
  [{name:"Site 1 bytes",type:"line",yAxis:"bytes",data:[{x:16009848e5,y:58020},{x:16009857e5,y:102402},{x:16009866e5,y:104920},{x:16009875e5,y:94031},{x:16009884e5,y:125021},{x:16009893e5,y:159219},{x:16009902e5,y:193082},{x:16009911e5,y:162592},{x:1600992e6,y:274021},{x:16009929e5,y:264286},{x:16009938e5,y:289210},{x:16009947e5,y:256362},{x:16009956e5,y:257306},{x:16009965e5,y:186776},{x:16009974e5,y:294020}]},{name:"Site 2 bytes",type:"line",yAxis:"bytes",data:[{x:16009848e5,y:28320},{x:16009857e5,y:111422},{x:16009866e5,y:83160},{x:16009875e5,y:93002},{x:16009884e5,y:78321},{x:16009893e5,y:122119},{x:16009902e5,y:134214},{x:16009911e5,y:123222},{x:1600992e6,y:180842},{x:16009929e5,y:210782},{x:16009938e5,y:243313},{x:16009947e5,y:203032},{x:16009956e5,y:222456},{x:16009965e5,y:244372},{x:16009974e5,y:301103}]},{name:"Transfer errors",type:"column",yAxis:"errors",data:[{x:16009848e5,y:3},{x:16009857e5,y:2},{x:16009866e5,y:12},{x:16009875e5,y:8},{x:16009884e5,y:11},{x:16009893e5,y:23},{x:16009902e5,y:21},{x:16009911e5,y:56},{x:1600992e6,y:77},{x:16009929e5,y:85},{x:16009938e5,y:84},{x:16009947e5,y:99},{x:16009956e5,y:82},{x:16009965e5,y:82},{x:16009974e5,y:69}],color:f.colorChartsRed600}]
  ```
- `xAxis`:

  ```jsx
  {type:"datetime",title:"Time (UTC)",min:16009848e5,max:16009974e5,valueFormatter:s.dateFormatter}
  ```
- `yAxis`:

  ```jsx
  [{id:"bytes",title:"Bytes transferred",min:0,max:35e4},{id:"errors",title:"Transfer errors",min:0,max:250}]
  ```

### Bar chart with error bars

Playground id: `bar-chart-with-error-bars`

- `ariaLabel`: `Bar chart with error bars`
- `series`:

  ```jsx
  [{id:"c",name:"Costs",type:"column",data:[5373,7563,7900,12342,14311,11830,8505]},{linkedTo:"c",type:"errorbar",name:"Error range",data:[{low:4973,high:5773},{low:7163,high:7963},{low:7500,high:8300},{low:11942,high:12742},{low:13911,high:14711},{low:11430,high:12230},{low:8105,high:8905}]}]
  ```
- `xAxis`:

  ```jsx
  {type:"category",title:"Budget month",categories:["Jun 2025","Jul 2025","Aug 2025","Sep 2025","Oct 2025","Nov 2025","Dec 2025"]}
  ```
- `yAxis`: `{title:"Costs (USD)",valueFormatter:s.numberFormatter}`

### Bar and line chart with error bars

Playground id: `bar-and-line-chart-with-error-bars`

- `ariaLabel`: `Mixed chart with error bars`
- `series`:

  ```jsx
  [{id:"c",name:"Costs",type:"column",data:[6562,8768,9742,10464,16777,9956,5876]},{linkedTo:"c",type:"errorbar",name:"Error range",data:[{low:6162,high:6962},{low:8368,high:9168},{low:9342,high:10142},{low:10064,high:10864},{low:16377,high:17177},{low:9556,high:10356},{low:5476,high:6276}]},{id:"c-1",name:"Costs last year",type:"spline",data:[5373,7563,7900,12342,14311,11830,8505]},{type:"errorbar",linkedTo:"c-1",name:"Error range",data:[{low:5106,high:5640},{low:7296,high:7830},{low:7633,high:8167},{low:12075,high:12609},{low:14044,high:14578},{low:11563,high:12097},{low:8238,high:8772}]}]
  ```
- `xAxis`:

  ```jsx
  {type:"category",title:"Budget month",categories:["Jun 2025","Jul 2025","Aug 2025","Sep 2025","Oct 2025","Nov 2025","Dec 2025"]}
  ```
- `yAxis`: `{title:"Costs (USD)",valueFormatter:s.numberFormatter}`
- `tooltip`:

  ```jsx
  {
    point: () => ({description: null}),
    footer: ({ items }) =>
      items.some(item => item.errorRanges.length > 0) ? (
        <Box fontSize="body-s">
          Error range: ±{moneyFormatter((items[0].errorRanges[0].high - items[0].errorRanges[0].low)/2)}
        </Box>
      ) : null,
  }
  ```

### Area chart: Stacked

Playground id: `area-chart:-stacked`

- `ariaLabel`: `Stacked area chart`
- `stacking`: `normal`
- `series`:

  ```jsx
  [{name:"Network 1",type:"area",data:[{x:16009848e5,y:114489},{x:16009857e5,y:136935},{x:16009866e5,y:141026},{x:16009875e5,y:123288},{x:16009884e5,y:121956},{x:16009893e5,y:119868},{x:16009902e5,y:132326},{x:16009911e5,y:126879},{x:1600992e6,y:138543},{x:16009929e5,y:144309},{x:16009938e5,y:121118},{x:16009947e5,y:113430},{x:16009956e5,y:135911},{x:16009965e5,y:113126},{x:16009974e5,y:119538},{x:16009983e5,y:124338},{x:16009992e5,y:133884},{x:16010001e5,y:135473},{x:1601001e6,y:131187},{x:16010019e5,y:136176},{x:16010028e5,y:144422},{x:16010037e5,y:115392},{x:16010046e5,y:139307},{x:16010055e5,y:128517},{x:16010064e5,y:107160},{x:16010073e5,y:110283},{x:16010082e5,y:134513},{x:16010091e5,y:111311},{x:160101e7,y:142686},{x:16010109e5,y:130652},{x:16010118e5,y:149418},{x:16010127e5,y:121923}]},{name:"Network 2",type:"area",data:[{x:16009848e5,y:10413},{x:16009857e5,y:26582},{x:16009866e5,y:45593},{x:16009875e5,y:65918},{x:16009884e5,y:76223},{x:16009893e5,y:62385},{x:16009902e5,y:83330},{x:16009911e5,y:127209},{x:1600992e6,y:104802},{x:16009929e5,y:145899},{x:16009938e5,y:121375},{x:16009947e5,y:112968},{x:16009956e5,y:145263},{x:16009965e5,y:139562},{x:16009974e5,y:128343},{x:16009983e5,y:122774},{x:16009992e5,y:145396},{x:16010001e5,y:176509},{x:1601001e6,y:201006},{x:16010019e5,y:196538},{x:16010028e5,y:213773},{x:16010037e5,y:205076},{x:16010046e5,y:216369},{x:16010055e5,y:159386},{x:16010064e5,y:238852},{x:16010073e5,y:207500},{x:16010082e5,y:187110},{x:16010091e5,y:314165},{x:160101e7,y:165653},{x:16010109e5,y:175584},{x:16010118e5,y:230042},{x:16010127e5,y:293879}]}]
  ```
- `tooltip`:

  ```jsx
  {
    footer: ({ x }) => {
      const total = getTotal(x, areaSeriesNetworkLoads);
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Total</span>
          <span>{numberFormatter(total)}</span>
        </div>
      );
    }
  }
  ```
- `xAxis`:

  ```jsx
  {type:"datetime",title:"Time (UTC)",min:16009848e5,max:16010127e5,valueFormatter:s.dateFormatter}
  ```
- `yAxis`: `{title:"Bytes transferred",min:0,max:5e5,valueFormatter:s.numberFormatter}`

### Area chart: Stacked, multiple metrics

Playground id: `area-chart:-stacked,-multiple-metrics`

- `ariaLabel`: `Stacked area chart, multiple metrics`
- `stacking`: `normal`
- `series`:

  ```jsx
  [{name:"CPU1",type:"area",data:[{x:16009848e5,y:.11879533073929961},{x:16009857e5,y:.14208560311284046},{x:16009866e5,y:.14633047989623865},{x:16009875e5,y:.12792529182879378},{x:16009884e5,y:.1265431906614786},{x:16009893e5,y:.12437665369649804},{x:16009902e5,y:.13730324254215304},{x:16009911e5,y:.1316513618677043},{x:1600992e6,y:.14375408560311284},{x:16009929e5,y:.14973696498054476},{x:16009938e5,y:.12567367055771725},{x:16009947e5,y:.11769649805447471},{x:16009956e5,y:.1410230869001297},{x:16009965e5,y:.1173810635538262},{x:16009974e5,y:.12403424124513618},{x:16009983e5,y:.12901478599221788},{x:16009992e5,y:.13891984435797666},{x:16010001e5,y:.14056861219195851},{x:1601001e6,y:.1361214007782101},{x:16010019e5,y:.14129805447470817},{x:16010028e5,y:.14985421530479898},{x:16010037e5,y:.11973229571984437},{x:16010046e5,y:.14454682230869},{x:16010055e5,y:.1333509727626459},{x:16010064e5,y:.11119066147859921},{x:16010073e5,y:.11443112840466925},{x:16010082e5,y:.13957250324254214},{x:16010091e5,y:.11549779507133592},{x:160101e7,y:.14805291828793773},{x:16010109e5,y:.1355662775616083},{x:16010118e5,y:.15503813229571983},{x:16010127e5,y:.12650894941634241}]},{name:"CPU2",type:"area",data:[{x:16009848e5,y:.1313857328145266},{x:16009857e5,y:.15256549935149158},{x:16009866e5,y:.14162178988326848},{x:16009875e5,y:.15541167315175097},{x:16009884e5,y:.13147600518806743},{x:16009893e5,y:.11202490272373541},{x:16009902e5,y:.13693281452658884},{x:16009911e5,y:.15257587548638132},{x:1600992e6,y:.12727470817120623},{x:16009929e5,y:.1166651102464332},{x:16009938e5,y:.13817587548638133},{x:16009947e5,y:.10018988326848248},{x:16009956e5,y:.12684409857328144},{x:16009965e5,y:.1029810635538262},{x:16009974e5,y:.15013540856031127},{x:16009983e5,y:.15517198443579766},{x:16009992e5,y:.1298396887159533},{x:16010001e5,y:.12954085603112842},{x:1601001e6,y:.10663346303501946},{x:16010019e5,y:.09411984435797666},{x:16010028e5,y:.12106977950713359},{x:16010037e5,y:.13847678339818417},{x:16010046e5,y:.11526848249027237},{x:16010055e5,y:.10887782101167316},{x:16010064e5,y:.13845291828793774},{x:16010073e5,y:.14058728923476005},{x:16010082e5,y:.10500440985732813},{x:16010091e5,y:.09681556420233463},{x:160101e7,y:.10691880674448768},{x:16010109e5,y:.14403112840466925},{x:16010118e5,y:.11747756160830092},{x:16010127e5,y:.14765654993514915}]},{name:"CPU3",type:"area",data:[{x:16009848e5,y:.010804669260700388},{x:16009857e5,y:.02758184176394293},{x:16009866e5,y:.04730791180285344},{x:16009875e5,y:.06839740596627757},{x:16009884e5,y:.07909001297016861},{x:16009893e5,y:.06473151750972762},{x:16009902e5,y:.08646433203631647},{x:16009911e5,y:.13199377431906614},{x:1600992e6,y:.10874396887159532},{x:16009929e5,y:.15138677042801554},{x:16009938e5,y:.1259403372243839},{x:16009947e5,y:.1172171206225681},{x:16009956e5,y:.15072684824902724},{x:16009965e5,y:.14481141374837875},{x:16009974e5,y:.1331704280155642},{x:16009983e5,y:.12739195849546045},{x:16009992e5,y:.15086485084306095},{x:16010001e5,y:.18314811932555122},{x:1601001e6,y:.20856653696498054},{x:16010019e5,y:.20393047989623866},{x:16010028e5,y:.22181374837872891},{x:16010037e5,y:.21278962386511024},{x:16010046e5,y:.22450739299610895},{x:16010055e5,y:.1653810635538262},{x:16010064e5,y:.2478360570687419},{x:16010073e5,y:.21530479896238652},{x:16010082e5,y:.19414785992217898},{x:16010091e5,y:.3259818417639429},{x:160101e7,y:.17188378728923476},{x:16010109e5,y:.18218832684824904},{x:16010118e5,y:.238694682230869},{x:16010127e5,y:.3049328145265888}]},{name:"CPU4",type:"area",data:[{x:16009848e5,y:.4169463035019455},{x:16009857e5,y:.2213769130998703},{x:16009866e5,y:.16022723735408562},{x:16009875e5,y:.11987963683527886},{x:16009884e5,y:.14835382619974058},{x:16009893e5,y:.10211258106355382},{x:16009902e5,y:.07866044098573281},{x:16009911e5,y:.06610428015564201},{x:1600992e6,y:.07220752269779507},{x:16009929e5,y:.07288715953307393},{x:16009938e5,y:.04931984435797666},{x:16009947e5,y:.05281867704280156},{x:16009956e5,y:.04482075226977951},{x:16009965e5,y:.04784954604409857},{x:16009974e5,y:.043612970168612195},{x:16009983e5,y:.03713203631647211},{x:16009992e5,y:.04359429312581064},{x:16010001e5,y:.039395071335927366},{x:1601001e6,y:.037094682230869},{x:16010019e5,y:.03044980544747082},{x:16010028e5,y:.02587081712062257},{x:16010037e5,y:.028407782101167314},{x:16010046e5,y:.025798184176394293},{x:16010055e5,y:.02083942931258106},{x:16010064e5,y:.02171413748378729},{x:16010073e5,y:.020902723735408562},{x:16010082e5,y:.025170428015564204},{x:16010091e5,y:.022062775616083007},{x:160101e7,y:.020867444876783398},{x:16010109e5,y:.022508949416342416},{x:16010118e5,y:.019239429312581064},{x:16010127e5,y:.018333592736705578}]},{name:"CPU5",type:"area",data:[{x:16009848e5,y:.035286121919584953},{x:16009857e5,y:.029357198443579768},{x:16009866e5,y:.03726070038910506},{x:16009875e5,y:.048325810635538265},{x:16009884e5,y:.03768300907911803},{x:16009893e5,y:.03875175097276264},{x:16009902e5,y:.04819818417639429},{x:16009911e5,y:.07545421530479897},{x:1600992e6,y:.060908949416342416},{x:16009929e5,y:.09228845654993516},{x:16009938e5,y:.1118651102464332},{x:16009947e5,y:.12358495460440987},{x:16009956e5,y:.1346241245136187},{x:16009965e5,y:.1371569390402075},{x:16009974e5,y:.21250739299610896},{x:16009983e5,y:.37775771725032425},{x:16009992e5,y:.3320861219195849},{x:16010001e5,y:.39978002594033724},{x:1601001e6,y:.14514552529182878},{x:16010019e5,y:.1176207522697795},{x:16010028e5,y:.09372140077821012},{x:16010037e5,y:.08439844357976653},{x:16010046e5,y:.09929961089494163},{x:16010055e5,y:.0669260700389105},{x:16010064e5,y:.06256186770428016},{x:16010073e5,y:.060151491569390404},{x:16010082e5,y:.06549105058365759},{x:16010091e5,y:.04230350194552529},{x:160101e7,y:.04555849546044098},{x:16010109e5,y:.030188326848249028},{x:16010118e5,y:.034107392996108946},{x:16010127e5,y:.044323735408560314}]},{name:"CPU6",type:"area",data:[{x:16009848e5,y:.10952944228274968},{x:16009857e5,y:.1410614785992218},{x:16009866e5,y:.10770635538261997},{x:16009875e5,y:.1404171206225681},{x:16009884e5,y:.11001504539559015},{x:16009893e5,y:.11049546044098574},{x:16009902e5,y:.14370946822308692},{x:16009911e5,y:.14083320363164722},{x:1600992e6,y:.11042697795071335},{x:16009929e5,y:.14704643320363164},{x:16009938e5,y:.1471118028534371},{x:16009947e5,y:.14830817120622566},{x:16009956e5,y:.10513618677042802},{x:16009965e5,y:.1139911802853437},{x:16009974e5,y:.15371206225680933},{x:16009983e5,y:.15401089494163422},{x:16009992e5,y:.10528664072632944},{x:16010001e5,y:.10756731517509728},{x:1601001e6,y:.10576601815823607},{x:16010019e5,y:.1062028534370947},{x:16010028e5,y:.1485011673151751},{x:16010037e5,y:.1044669260700389},{x:16010046e5,y:.11177587548638133},{x:16010055e5,y:.10890376134889754},{x:16010064e5,y:.14598495460440986},{x:16010073e5,y:.10602749675745785},{x:16010082e5,y:.1505431906614786},{x:16010091e5,y:.11074656290531777},{x:160101e7,y:.11062827496757459},{x:16010109e5,y:.106021271076524},{x:16010118e5,y:.14992892347600517},{x:16010127e5,y:.14492347600518807}]}]
  ```
- `tooltip`:

  ```jsx
  {
    footer: ({ x }) => {
      const total = getTotal(x, areaSeriesCpuLoads);
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Total</span>
          <span>{percentageFormatter(total)}</span>
        </div>
      );
    }
  }
  ```
- `xAxis`:

  ```jsx
  {type:"datetime",title:"Time (UTC)",min:16009848e5,max:16010127e5,valueFormatter:s.dateFormatter}
  ```
- `yAxis`: `{title:"Total CPU load",min:0,max:1,valueFormatter:s.percentageFormatter}`

### Area chart: Stacked, with threshold

Playground id: `area-chart:-stacked,-with-threshold`

- `ariaLabel`: `Stacked area chart, with threshold`
- `stacking`: `normal`
- `series`:

  ```jsx
  [...d,{name:"Network 3",type:"area",data:[{x:16009848e5,y:10413},{x:16009857e5,y:26582},{x:16009866e5,y:45593},{x:16009875e5,y:65918},{x:16009884e5,y:76223},{x:16009893e5,y:62385},{x:16009902e5,y:83330},{x:16009911e5,y:127209},{x:1600992e6,y:104802},{x:16009929e5,y:145899},{x:16009938e5,y:121375},{x:16009947e5,y:112968},{x:16009956e5,y:145263},{x:16009965e5,y:139562},{x:16009974e5,y:128343},{x:16009983e5,y:122774},{x:16009992e5,y:145396},{x:16010001e5,y:176509},{x:1601001e6,y:201006},{x:16010019e5,y:196538},{x:16010028e5,y:213773},{x:16010037e5,y:205076},{x:16010046e5,y:216369},{x:16010055e5,y:159386},{x:16010064e5,y:238852},{x:16010073e5,y:207500},{x:16010082e5,y:187110},{x:16010091e5,y:314165},{x:160101e7,y:165653},{x:16010109e5,y:175584},{x:16010118e5,y:230042},{x:16010127e5,y:293879}]},{type:"y-threshold",name:"Target",value:35e4}]
  ```
- `tooltip`:

  ```jsx
  {
    footer: ({ x }) => {
      const total = getTotal(x, areaSeriesWithThreshold);
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Total</span>
          <span>{numberFormatter(total)}</span>
        </div>
      );
    }
  }
  ```
- `xAxis`:

  ```jsx
  {type:"datetime",title:"Time (UTC)",min:16009848e5,max:16010127e5,valueFormatter:s.dateFormatter}
  ```
- `yAxis`: `{title:"Bytes transferred",min:0,max:6e5,valueFormatter:s.numberFormatter}`

### Bubble chart

Playground id: `bubble-chart`

- `series`:

  ```jsx
  [{name:"Series A",type:"bubble",data:[{x:16009848e5,y:58020,size:150},{x:16009857e5,y:102402,size:280},{x:16009866e5,y:104920,size:200},{x:16009875e5,y:94031,size:120},{x:16009884e5,y:125021,size:310},{x:16009893e5,y:159219,size:180},{x:16009902e5,y:193082,size:250},{x:16009911e5,y:162592,size:140},{x:1600992e6,y:274021,size:350},{x:16009929e5,y:264286,size:220}]},{name:"Series B",type:"bubble",data:[{x:16009852e5,y:72e3,size:100},{x:16009861e5,y:88500,size:190},{x:1600987e6,y:115e3,size:260},{x:1600988e6,y:135e3,size:80},{x:1600989e6,y:142e3,size:300},{x:160099e7,y:178e3,size:170},{x:16009908e5,y:205e3,size:230},{x:16009915e5,y:185e3,size:110},{x:16009923e5,y:24e4,size:290},{x:16009932e5,y:23e4,size:160}]}]
  ```
- `ariaLabel`: `Bubble chart`
- `xAxis`: `{type:"datetime",title:"Time (UTC)",valueFormatter:s.dateFormatter}`
- `yAxis`: `{title:"Events",valueFormatter:s.numberFormatter}`
- `sizeAxis`:

  ```jsx
  {title:"Time to fix",valueFormatter:e=>`${e} minutes`}
  ```

### Scatter chart

Playground id: `scatter-chart`

- `series`:

  ```jsx
  [{name:"A",type:"scatter",data:[{name:"A0",x:0x174c2154850,y:58020},{name:"A1",x:0x174c22c79b7,y:102402},{name:"A2",x:0x174c235cec8,y:104920},{name:"A3",x:0x174c23d9f1d,y:94031},{name:"A4",x:0x174c250c3fa,y:125021},{name:"A5",x:0x174c264c65b,y:159219},{name:"A6",x:0x174c26ddde8,y:193082},{name:"A7",x:0x174c27a2135,y:162592},{name:"A8",x:0x174c286ed5f,y:274021},{name:"A9",x:0x174c28f7919,y:264286},{name:"A10",x:0x174c2a76095,y:289210},{name:"A11",x:0x174c2abdf6e,y:256362},{name:"A12",x:0x174c2b8d51b,y:257306},{name:"A13",x:0x174c2d0deb3,y:186776},{name:"A14",x:0x174c2d9b0ee,y:294020},{name:"A15",x:0x174c2e4036c,y:385975},{name:"A16",x:0x174c2f27c8b,y:486039},{name:"A17",x:0x174c307c226,y:490447},{name:"A18",x:0x174c30b20a2,y:361845},{name:"A19",x:0x174c31c0593,y:339058},{name:"A20",x:0x174c32c5ae2,y:298028},{name:"A21",x:0x174c33c7291,y:255555},{name:"A22",x:0x174c33f582d,y:231902},{name:"A23",x:0x174c349b0e9,y:224558},{name:"A24",x:0x174c353350c,y:253901},{name:"A25",x:0x174c36a1e4b,y:102839},{name:"A26",x:0x174c36ce724,y:234943},{name:"A27",x:0x174c385ecdf,y:204405},{name:"A28",x:0x174c38795ba,y:190391},{name:"A29",x:0x174c3981ac0,y:183570},{name:"A30",x:0x174c3ab6271,y:162592},{name:"A31",x:0x174c3bc057f,y:148910},{name:"A32",x:0x174c3c96288,y:229492},{name:"A33",x:0x174c3d201a8,y:293910}]},{name:"B",type:"scatter",data:[{name:"B0",x:0x174c2197901,y:72821},{name:"B1",x:0x174c2275c61,y:38307},{name:"B2",x:0x174c235c9a1,y:7128},{name:"B3",x:0x174c2499948,y:117841},{name:"B4",x:0x174c256e6bb,y:122927},{name:"B5",x:0x174c263e34a,y:179175},{name:"B6",x:0x174c2704cd6,y:185301},{name:"B7",x:0x174c28171ed,y:183051},{name:"B8",x:0x174c28b122f,y:350463},{name:"B9",x:0x174c29c45cd,y:203209},{name:"B10",x:0x174c2a2f787,y:345283},{name:"B11",x:0x174c2b08d24,y:295229},{name:"B12",x:0x174c2bce61c,y:173226},{name:"B13",x:0x174c2d36f1a,y:147984},{name:"B14",x:0x174c2d8b04b,y:252502},{name:"B15",x:0x174c2e4b881,y:323314},{name:"B16",x:0x174c2fb3581,y:536436},{name:"B17",x:0x174c3034369,y:488208},{name:"B18",x:0x174c30cacfd,y:460799},{name:"B19",x:0x174c3198e5e,y:376989},{name:"B20",x:0x174c32f84ca,y:226407},{name:"B21",x:0x174c3339914,y:206778},{name:"B22",x:0x174c3399a00,y:328391},{name:"B23",x:0x174c3459eb2,y:203510},{name:"B24",x:0x174c35526b7,y:318152},{name:"B25",x:0x174c35f1021,y:107852},{name:"B26",x:0x174c36d5f29,y:318601},{name:"B27",x:0x174c379725c,y:207824},{name:"B28",x:0x174c3883ccf,y:109517},{name:"B29",x:0x174c39a5ecd,y:118542},{name:"B30",x:0x174c3aa306d,y:175792},{name:"B31",x:0x174c3b5a83f,y:228596},{name:"B32",x:0x174c3c99b1a,y:209195},{name:"B33",x:0x174c3cc1b46,y:271652}]},{name:"C",type:"scatter",data:[{name:"C0",x:0x174c21dcef3,y:-12011},{name:"C1",x:0x174c2265c92,y:74787},{name:"C2",x:0x174c2379017,y:139319},{name:"C3",x:0x174c24927f0,y:-16757},{name:"C4",x:0x174c24fea81,y:94823},{name:"C5",x:0x174c25f2d48,y:165216},{name:"C6",x:0x174c2695ab7,y:220562},{name:"C7",x:0x174c2775644,y:84104},{name:"C8",x:0x174c28b3562,y:260056},{name:"C9",x:0x174c29cb01c,y:164783},{name:"C10",x:0x174c29ea5d4,y:179030},{name:"C11",x:0x174c2b2e6c5,y:213171},{name:"C12",x:0x174c2c22014,y:185222},{name:"C13",x:0x174c2cb8bfe,y:111363},{name:"C14",x:0x174c2db5a16,y:237945},{name:"C15",x:0x174c2eca608,y:414706},{name:"C16",x:0x174c2f8391d,y:514031},{name:"C17",x:0x174c307a650,y:504400},{name:"C18",x:0x174c30f62ad,y:318426},{name:"C19",x:0x174c324b21f,y:214368},{name:"C20",x:0x174c3273986,y:306838},{name:"C21",x:0x174c32f72a5,y:154990},{name:"C22",x:0x174c33da6ec,y:243128},{name:"C23",x:0x174c346c569,y:110356},{name:"C24",x:0x174c35af86d,y:220616},{name:"C25",x:0x174c3641d8a,y:-30096},{name:"C26",x:0x174c36fd758,y:87120},{name:"C27",x:0x174c37e7cf6,y:232176},{name:"C28",x:0x174c38d7fbb,y:180859},{name:"C29",x:0x174c39c7f6a,y:187434},{name:"C30",x:0x174c3ac95ae,y:148001},{name:"C31",x:0x174c3bcdde3,y:90657},{name:"C32",x:0x174c3c4df79,y:135367},{name:"C33",x:0x174c3cfef27,y:259304}]},{name:"D",type:"scatter",data:[{name:"D0",x:0x174c21971d7,y:-74219},{name:"D1",x:0x174c22adc2c,y:-76094},{name:"D2",x:0x174c23c3ab7,y:-81246},{name:"D3",x:0x174c23eb110,y:-37830},{name:"D4",x:0x174c24e8c3c,y:13947},{name:"D5",x:0x174c264902c,y:13967},{name:"D6",x:0x174c272aa41,y:65985},{name:"D7",x:0x174c277e3f8,y:53930},{name:"D8",x:0x174c28dfbf1,y:173243},{name:"D9",x:0x174c2926963,y:85716},{name:"D10",x:0x174c2a03ad1,y:121142},{name:"D11",x:0x174c2b7464a,y:60890},{name:"D12",x:0x174c2b8b92f,y:79766},{name:"D13",x:0x174c2c749c8,y:72792},{name:"D14",x:0x174c2ddaa5e,y:97561},{name:"D15",x:0x174c2e48732,y:262968},{name:"D16",x:0x174c2ef712c,y:328999},{name:"D17",x:0x174c2fe1c0f,y:388318},{name:"D18",x:0x174c316c448,y:171617},{name:"D19",x:0x174c31cd496,y:224061},{name:"D20",x:0x174c32f3fb0,y:125898},{name:"D21",x:0x174c3368894,y:105776},{name:"D22",x:0x174c33c82e5,y:96667},{name:"D23",x:0x174c341ff7c,y:34966},{name:"D24",x:0x174c3549947,y:145729},{name:"D25",x:0x174c35ea4c1,y:-13886},{name:"D26",x:0x174c36be2f0,y:48873},{name:"D27",x:0x174c38353ea,y:41153},{name:"D28",x:0x174c38c0ad8,y:465},{name:"D29",x:0x174c39ddc6c,y:12979},{name:"D30",x:0x174c3a6d900,y:-35665},{name:"D31",x:0x174c3ba943c,y:-27626},{name:"D32",x:0x174c3c29bda,y:125613},{name:"D33",x:0x174c3d84b47,y:118724}]},{name:"E",type:"scatter",data:[{name:"E0",x:0x174c2163476,y:127825},{name:"E1",x:0x174c22ab6f6,y:165582},{name:"E2",x:0x174c234b0c1,y:172918},{name:"E3",x:0x174c248bbd0,y:153461},{name:"E4",x:0x174c25511b6,y:176526},{name:"E5",x:0x174c260cafb,y:210200},{name:"E6",x:0x174c2733f11,y:265748},{name:"E7",x:0x174c274c9b9,y:222653},{name:"E8",x:0x174c2871844,y:330335},{name:"E9",x:0x174c28fff49,y:321474},{name:"E10",x:0x174c2a1b494,y:345778},{name:"E11",x:0x174c2af956a,y:308688},{name:"E12",x:0x174c2c2b434,y:327363},{name:"E13",x:0x174c2d08dcd,y:244292},{name:"E14",x:0x174c2e157ae,y:361179},{name:"E15",x:0x174c2e69b90,y:443182},{name:"E16",x:0x174c2faea11,y:550904},{name:"E17",x:0x174c2feb972,y:548061},{name:"E18",x:0x174c30fe306,y:434174},{name:"E19",x:0x174c3228fdb,y:395375},{name:"E20",x:0x174c328911a,y:366889},{name:"E21",x:0x174c33597a5,y:326159},{name:"E22",x:0x174c338cfb1,y:287735},{name:"E23",x:0x174c3466d29,y:276911},{name:"E24",x:0x174c354e056,y:306681},{name:"E25",x:0x174c3628e17,y:169441},{name:"E26",x:0x174c37686fc,y:299595},{name:"E27",x:0x174c37b6d0e,y:254510},{name:"E28",x:0x174c386fe79,y:242079},{name:"E29",x:0x174c398699e,y:235893},{name:"E30",x:0x174c3aca697,y:219002},{name:"E31",x:0x174c3bc90e1,y:221655},{name:"E32",x:0x174c3c66b9f,y:291657},{name:"E33",x:0x174c3d492e0,y:349791}]}]
  ```
- `ariaLabel`: `Scatter chart`
- `xAxis`: `{type:"datetime",title:"Time (UTC)",valueFormatter:s.dateFormatter}`
- `yAxis`: `{title:"Events"}`

### Scatter chart: Multiple series, with trend lines

Playground id: `scatter-chart:-multiple-series,-with-trend-lines`

- `series`:

  ```jsx
  [{name:"A",type:"scatter",data:[{x:17356896e5,y:-10189},{x:17358624e5,y:-16739},{x:17360352e5,y:31358},{x:1736208e6,y:21632},{x:17363808e5,y:18511},{x:17365536e5,y:4732},{x:17367264e5,y:29811},{x:17368992e5,y:9317},{x:1737072e6,y:-3839},{x:17372448e5,y:14471},{x:17374176e5,y:47821},{x:17375904e5,y:6383},{x:17377632e5,y:7245},{x:1737936e6,y:33399},{x:17381088e5,y:13788},{x:17382816e5,y:3678},{x:17384544e5,y:6263},{x:17386272e5,y:15970},{x:17388e8,y:31336},{x:17389728e5,y:2849},{x:17391456e5,y:36920},{x:17393184e5,y:40457},{x:17394912e5,y:24636},{x:1739664e6,y:-6799},{x:17398368e5,y:-14097},{x:17400096e5,y:9418},{x:17401824e5,y:15179},{x:17403552e5,y:24587},{x:1740528e6,y:15081},{x:17407008e5,y:11401},{x:17408736e5,y:32027},{x:17410464e5,y:7126},{x:17412192e5,y:25599},{x:1741392e6,y:29204},{x:17415648e5,y:24947},{x:17417376e5,y:24640},{x:17419104e5,y:21886},{x:17420832e5,y:5639},{x:1742256e6,y:28462},{x:17424288e5,y:10494},{x:17426016e5,y:15635},{x:17427744e5,y:34499},{x:17429472e5,y:24461},{x:174312e7,y:5450},{x:17432928e5,y:2605},{x:17434656e5,y:-6089},{x:17436384e5,y:12972},{x:17438112e5,y:14612},{x:1743984e6,y:-11731},{x:17441568e5,y:38225},{x:17443296e5,y:29078},{x:17445024e5,y:-8352},{x:17446752e5,y:20593},{x:1744848e6,y:3863},{x:17450208e5,y:49299},{x:17451936e5,y:43046},{x:17453664e5,y:23872},{x:17455392e5,y:34626},{x:1745712e6,y:-1092},{x:17458848e5,y:13127},{x:17460576e5,y:26487},{x:17462304e5,y:-5351},{x:17464032e5,y:15719},{x:1746576e6,y:22744},{x:17467488e5,y:21529},{x:17469216e5,y:47774},{x:17470944e5,y:17717},{x:17472672e5,y:13536},{x:174744e7,y:11086},{x:17476128e5,y:14501},{x:17477856e5,y:8942},{x:17479584e5,y:12010},{x:17481312e5,y:23546},{x:1748304e6,y:16983},{x:17484768e5,y:7257},{x:17486496e5,y:40410},{x:17488224e5,y:13487},{x:17489952e5,y:9679},{x:1749168e6,y:-14443},{x:17493408e5,y:-3250},{x:17495136e5,y:13929},{x:17496864e5,y:47060},{x:17498592e5,y:22696},{x:1750032e6,y:23814},{x:17502048e5,y:17056},{x:17503776e5,y:47515},{x:17505504e5,y:25362},{x:17507232e5,y:48635},{x:1750896e6,y:17410},{x:17510688e5,y:-15843},{x:17512416e5,y:-3860},{x:17514144e5,y:-5449},{x:17515872e5,y:4359},{x:175176e7,y:14259},{x:17519328e5,y:11694},{x:17521056e5,y:22864},{x:17522784e5,y:-851},{x:17524512e5,y:3349},{x:1752624e6,y:31553},{x:17527968e5,y:25656},{x:17529696e5,y:35687},{x:17531424e5,y:24546},{x:17533152e5,y:33090},{x:1753488e6,y:34304},{x:17536608e5,y:5090},{x:17538336e5,y:8013},{x:17540064e5,y:12133},{x:17541792e5,y:5401},{x:1754352e6,y:-15088},{x:17545248e5,y:16967},{x:17546976e5,y:14760},{x:17548704e5,y:2098},{x:17550432e5,y:26075},{x:1755216e6,y:23916},{x:17553888e5,y:44127},{x:17555616e5,y:55902},{x:17557344e5,y:26512},{x:17559072e5,y:24709},{x:175608e7,y:48995},{x:17562528e5,y:39397},{x:17564256e5,y:43595},{x:17565984e5,y:-8367},{x:17567712e5,y:8925},{x:1756944e6,y:14491},{x:17571168e5,y:22986},{x:17572896e5,y:4471},{x:17574624e5,y:37547},{x:17576352e5,y:18961},{x:1757808e6,y:4066},{x:17579808e5,y:49476},{x:17581536e5,y:2295},{x:17583264e5,y:18328},{x:17584992e5,y:25048},{x:1758672e6,y:7339},{x:17588448e5,y:-229},{x:17590176e5,y:13210},{x:17591904e5,y:21401},{x:17593632e5,y:38272},{x:1759536e6,y:49135},{x:17597088e5,y:35383},{x:17598816e5,y:36436},{x:17600544e5,y:35026},{x:17602272e5,y:40206},{x:17604e8,y:6876},{x:17605728e5,y:29803},{x:17607456e5,y:32592},{x:17609184e5,y:49939},{x:17610912e5,y:9800},{x:1761264e6,y:14287},{x:17614368e5,y:21539},{x:17616096e5,y:542},{x:17617824e5,y:25393},{x:17619552e5,y:46889},{x:1762128e6,y:23654},{x:17623008e5,y:56587},{x:17624736e5,y:39134},{x:17626464e5,y:15813},{x:17628192e5,y:4640},{x:1762992e6,y:27888},{x:17631648e5,y:41067},{x:17633376e5,y:2495},{x:17635104e5,y:49862},{x:17636832e5,y:43034},{x:1763856e6,y:26315},{x:17640288e5,y:2500},{x:17642016e5,y:-5997},{x:17643744e5,y:2035},{x:17645472e5,y:30470},{x:176472e7,y:36115},{x:17648928e5,y:34764},{x:17650656e5,y:8232},{x:17652384e5,y:4885},{x:17654112e5,y:4300},{x:1765584e6,y:48852},{x:17657568e5,y:35238},{x:17659296e5,y:13596},{x:17661024e5,y:34501},{x:17662752e5,y:54311},{x:1766448e6,y:14157},{x:17666208e5,y:48666},{x:17667936e5,y:29008},{x:17669664e5,y:-3203},{x:17671392e5,y:34807}],color:"rgba(0,205,0,0.6)"},{name:"B",type:"scatter",data:[{x:17388e8,y:10392},{x:17389728e5,y:14744},{x:17391456e5,y:5920},{x:17393184e5,y:7973},{x:17394912e5,y:4820},{x:1739664e6,y:12940},{x:17398368e5,y:8392},{x:17400096e5,y:4777},{x:17401824e5,y:12049},{x:17403552e5,y:12712},{x:1740528e6,y:6004},{x:17407008e5,y:8042},{x:17408736e5,y:7214},{x:17410464e5,y:13936},{x:17412192e5,y:11589},{x:1741392e6,y:8488},{x:17415648e5,y:7114},{x:17417376e5,y:8835},{x:17419104e5,y:8874},{x:17420832e5,y:7213},{x:1742256e6,y:6057},{x:17424288e5,y:11430},{x:17426016e5,y:11754},{x:17427744e5,y:8538},{x:17429472e5,y:9170},{x:174312e7,y:11361},{x:17432928e5,y:10953},{x:17434656e5,y:11223},{x:17436384e5,y:11406},{x:17438112e5,y:9397},{x:1743984e6,y:8631},{x:17441568e5,y:12222},{x:17443296e5,y:7140},{x:17445024e5,y:8068},{x:17446752e5,y:8738},{x:1744848e6,y:4922},{x:17450208e5,y:6275},{x:17451936e5,y:8340},{x:17453664e5,y:7931},{x:17455392e5,y:5489},{x:1745712e6,y:10194},{x:17458848e5,y:3872},{x:17460576e5,y:10482},{x:17462304e5,y:12051},{x:17464032e5,y:6027},{x:1746576e6,y:14410},{x:17467488e5,y:7300},{x:17469216e5,y:3796},{x:17470944e5,y:6150},{x:17472672e5,y:8195},{x:174744e7,y:6141},{x:17476128e5,y:2221},{x:17477856e5,y:13812},{x:17479584e5,y:10317},{x:17481312e5,y:8531},{x:1748304e6,y:11583},{x:17484768e5,y:12802},{x:17486496e5,y:6868},{x:17488224e5,y:9445},{x:17489952e5,y:12643},{x:1749168e6,y:10068},{x:17493408e5,y:12842},{x:17495136e5,y:5341},{x:17496864e5,y:9667},{x:17498592e5,y:3017},{x:1750032e6,y:10912},{x:17502048e5,y:12967},{x:17503776e5,y:8963},{x:17505504e5,y:12224},{x:17507232e5,y:13750},{x:1750896e6,y:6013},{x:17510688e5,y:6150},{x:17512416e5,y:5074},{x:17514144e5,y:7719},{x:17515872e5,y:11652},{x:175176e7,y:13078},{x:17519328e5,y:8473},{x:17521056e5,y:7947},{x:17522784e5,y:8330},{x:17524512e5,y:5644},{x:1752624e6,y:11476},{x:17527968e5,y:3285},{x:17529696e5,y:13970},{x:17531424e5,y:7040},{x:17533152e5,y:8610},{x:1753488e6,y:10072},{x:17536608e5,y:6048},{x:17538336e5,y:2988},{x:17540064e5,y:9122},{x:17541792e5,y:9295},{x:1754352e6,y:10301},{x:17545248e5,y:14564},{x:17546976e5,y:16130},{x:17548704e5,y:8434},{x:17550432e5,y:11759},{x:1755216e6,y:12728},{x:17553888e5,y:12876},{x:17555616e5,y:9630},{x:17557344e5,y:7523},{x:17559072e5,y:6227},{x:175608e7,y:11956},{x:17562528e5,y:8506},{x:17564256e5,y:13191},{x:17565984e5,y:2875},{x:17567712e5,y:6838},{x:1756944e6,y:13837},{x:17571168e5,y:9844},{x:17572896e5,y:12708},{x:17574624e5,y:4449},{x:17576352e5,y:9642},{x:1757808e6,y:6084},{x:17579808e5,y:3361},{x:17581536e5,y:13779},{x:17583264e5,y:6680},{x:17584992e5,y:3071},{x:1758672e6,y:5779},{x:17588448e5,y:10570},{x:17590176e5,y:10880},{x:17591904e5,y:14146},{x:17593632e5,y:10129},{x:1759536e6,y:13144},{x:17597088e5,y:6814},{x:17598816e5,y:11941},{x:17600544e5,y:11805},{x:17602272e5,y:13907},{x:17604e8,y:8900},{x:17605728e5,y:2511},{x:17607456e5,y:6348},{x:17609184e5,y:7733},{x:17610912e5,y:7258},{x:1761264e6,y:4637},{x:17614368e5,y:13062},{x:17616096e5,y:11135},{x:17617824e5,y:5515},{x:17619552e5,y:11408},{x:1762128e6,y:9062},{x:17623008e5,y:9059},{x:17624736e5,y:8796},{x:17626464e5,y:13118},{x:17628192e5,y:5772},{x:1762992e6,y:5399},{x:17631648e5,y:14680},{x:17633376e5,y:12413},{x:17635104e5,y:10270},{x:17636832e5,y:10588},{x:1763856e6,y:5159},{x:17640288e5,y:14388}],color:"rgba(0,155,155,0.6)"},{name:"A trend",type:"spline",data:[{x:17356896e5,y:13194.768591024098},{x:17671392e5,y:26202.990971817286}],color:"rgba(0,125,0,1.0)"},{name:"B trend",type:"spline",data:[{x:17388e8,y:8908.403382970799},{x:17640288e5,y:9363.283691859135}],color:"rgba(0,105,105,1.0)"}]
  ```
- `ariaLabel`: `Scatter chart`
- `xAxis`: `{type:"datetime",title:"Time (UTC)",valueFormatter:s.dateFormatter}`
- `yAxis`: `{title:"Events"}`

### Empty

Playground id: `empty`

- `series`: `[]`
- `noData`: `(0,s.noData)("finished")`

### Loading

Playground id: `loading`

- `series`: `[]`
- `noData`: `(0,s.noData)("loading")`

### Error

Playground id: `error`

- `series`: `[]`
- `noData`: `(0,s.noData)("error")`

### Empty with thresholds

Playground id: `empty-with-thresholds`

- `series`:

  ```jsx
  [{name:"Timestamp",type:"x-threshold",value:new Date("2021-01-01").getTime()},{name:"Alarm",type:"y-threshold",value:25}]
  ```
- `noData`: `(0,s.noData)("finished")`
- `xAxis`:

  ```jsx
  {type:"datetime",title:"Time (UTC)",min:new Date("2020-01-01").getTime(),max:new Date("2022-01-01").getTime()}
  ```
- `yAxis`: `{type:"linear",title:"Events",min:0,max:50}`
