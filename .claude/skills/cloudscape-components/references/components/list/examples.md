# list playground examples

Snapshot of the named examples on https://cloudscape.design/components/list/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Simple list

Playground id: `simple-list`

- `ariaLabel`: `Simple list`
- `items`:

  ```jsx
  [{id:"1",content:"First item"},{id:"2",content:"Second item"},{id:"3",content:"Third item"},{id:"4",content:"Fourth item"},{id:"5",content:"Fifth item"}]
  ```
- `renderItem`: `item => item`

### With secondary content

Playground id: `with-secondary-content`

- `ariaLabel`: `List with secondary content`
- `items`:

  ```jsx
  [{id:"instance",content:"Instance",description:"A virtual server in the cloud, typically running in Amazon EC2."},{id:"bucket",content:"Bucket",description:"A container for storing objects in Amazon S3. Buckets are used to organize and control access to your data in the cloud."},{id:"vpc",content:"VPC (Virtual Private Cloud)",description:"A logically isolated section of the AWS cloud where you can launch resources in a virtual network."},{id:"ami",content:"AMI (Amazon Machine Image)",description:"A pre-configured template for your instances, containing the necessary information to launch an instance."}]
  ```
- `renderItem`:

  ```jsx
  ({id, content, description}) => ({
        id,
        content: <Link href={`#${id}`} variant="primary">{content}</Link>,
        secondaryContent: <Box variant="small">{description}</Box>
      })
  ```

### List of external links

Playground id: `list-of-external-links`

- `ariaLabelledby`: `links-header`
- `items`:

  ```jsx
  [{id:"1",content:"Amazon Bedrock",href:"#1"},{id:"2",content:"Cloudwatch",href:"#2"},{id:"3",content:"Cloudtrail",href:"#3"},{id:"4",content:"S3",href:"#4"},{id:"5",content:"EC2",href:"#5"}]
  ```
- `renderItem`:

  ```jsx
  item => ({id: item.id, content: <Link href={item.href} target="_blank" ariaLabel={`${item.content} (opens in a new tab)`}>{item.content}</Link>})
  ```
- `disablePaddings`: `true`

### List with icons and actions

Playground id: `list-with-icons-and-actions`

- `ariaLabel`: `List with icons and actions`
- `items`:

  ```jsx
  [{id:"health",content:"Health overview",icon:"face-happy"},{id:"functions",content:"Functions",icon:"script"},{id:"network",content:"Network configuration",icon:"globe"},{id:"multi-session",content:"Multi-session data",icon:"multiscreen"},{id:"alert",content:"Alert center",icon:"security"},{id:"communication",content:"Communication",icon:"contact"}]
  ```
- `renderItem`:

  ```jsx
  item => ({
        id: item.id,
        content: <Link href={`#${item.id}`}>{item.content}</Link>,
        icon: <Icon name={item.icon} aria-label=""/>,
        actions: <ButtonDropdown items={
          [{
            id: '1',
            text: 'Action one'
          },{
            id: '2',
            text: 'Action two'
          },{
            id: '3',
            text: 'Action three'
          }]
        } variant='icon' ariaLabel={`Actions for ${item.content}`} />
      })
  ```

### Sortable list

Playground id: `sortable-list`

- `ariaLabel`: `Sortable list`
- `items`:

  ```jsx
  [{item:"Apples"},{item:"Pears"},{item:"Bananas"},{item:"Oranges"},{item:"Strawberries"},{item:"Watermelon"},{item:"Blueberries"},{item:"Grapes"},{item:"Plums"}]
  ```
- `sortable`: `true`
- `renderItem`: `item => ({ id: item.item, content: item.item })`

### List builder

Playground id: `list-builder`

- `ariaLabel`: `List builder`
- `items`: `[{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"},{id:"6"}]`
- `sortable`: `true`
- `renderItem`:

  ```jsx
  item => ({
        id: item.id,
        content: <Input placeholder="Enter value" value={item.value} onChange={({detail}) => {
          const newItems = [...items];
          newItems[newItems.indexOf(item)].value = detail.value;
          setItems(newItems);
        }} />,
        actions: <Button onClick={() => {
          const newItems = [...items];
          newItems.splice(newItems.indexOf(item), 1);
          setItems(newItems);
        }} variant="icon" iconName="close" ariaLabel={`Delete item ${item.value}`}/>
      })
  ```
