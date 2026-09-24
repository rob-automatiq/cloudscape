# container playground examples

Snapshot of the named examples on https://cloudscape.design/components/container/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1


### Setup 2

- Wrapper:

  ```jsx
  <div>
            <Container />
            <Table
              variant="stacked"
              header={<Header variant="h3">Table header</Header>}
              columnDefinitions={[
                {
                  id: 'variable',
                  header: 'Variable name',
                  cell: item => item.name,
                  isRowHeader: true,
                },
                {
                  id: 'value',
                  header: 'Current value',
                  cell: item => item.value,
                },
              ]}
              items={[
                {
                  name: 'Item 1',
                  value: 'First',
                },
                {
                  name: 'Item 2',
                  value: 'Second',
                },
                {
                  name: 'Item 3',
                  value: 'Third',
                },
                {
                  name: 'Item 4',
                  value: 'Fourth',
                },
                {
                  name: 'Item 5',
                  value: 'Fifth',
                },
              ]}
            />
          </div>
  ```

## Examples

### Simple

Playground id: `simple` · uses setup 1

- `header`:

  ```jsx
  
            <Header
              variant="h2"
              description="Container description"
            >
              Container title
            </Header>
          
  ```
- `children`: `Container content`

### With footer

Playground id: `with-footer` · uses setup 1

- `header`:

  ```jsx
  
            <Header
              variant="h2"
              description="Container description"
            >
              Container title
            </Header>
          
  ```
- `children`: `Container content`
- `footer`: `Container footer`

### With actions

Playground id: `with-actions` · uses setup 1

- `header`:

  ```jsx
  
            <Header
              variant="h2"
              description="Container description"
              actions={
                <SpaceBetween direction="horizontal" size="xs">
                  <Button>Action</Button>
                  <Button>Another action</Button>
                </SpaceBetween>
              }
            >
              Container title
            </Header>
          
  ```
- `children`: `Container content`

### With expandable footer

Playground id: `with-expandable-footer` · uses setup 1

- `header`:

  ```jsx
  
            <Header
              variant="h2"
              description="Container description"
            >
              Container title
            </Header>
          
  ```
- `children`: `Container content`
- `footer`:

  ```jsx
  
            <ExpandableSection
              header="Additional settings"
              variant="footer"
            >
              Place additional form fields here.
            </ExpandableSection>
          
  ```

### Key-value pairs in a container with a table

Playground id: `key-value-pairs-in-a-container-with-a-table` · uses setup 2

- `variant`: `stacked`
- `header`:

  ```jsx
  
          <Header headingTagOverride="h3" counter="(5)">
            Header
          </Header>
  ```
- `children`:

  ```jsx
  
          <KeyValuePairs
            columns={4}
            items={[
              {
                label: 'Label for key',
                value: 'Value',
              },
              {
                label: 'Label for key',
                value: 'Value',
              },
              {
                label: 'Label for key',
                value: 'Value',
              },
              {
                label: 'Label for key',
                value: 'Value',
              },
            ]}
          />
        
  ```

### With media

Playground id: `with-media` · uses setup 1

- `media`:

  ```jsx
  
            {
              content: <img src="/image-placeholder.png" alt="placeholder" />,
              height: 200,
              position: 'top',
            }
  ```
- `children`:

  ```jsx
  
            <SpaceBetween direction="vertical" size="s">
              <SpaceBetween direction="vertical" size="xxs">
                <Box variant="small">March 10, 2023</Box>
                <Box variant="h2">Container title</Box>
              </SpaceBetween>
              This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tempor dolor ac
              accumsan. This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tempor
              dolor ac accumsan.
              <Button>Primary action</Button>
            </SpaceBetween>
          
  ```
- `footer`:

  ```jsx
  
          <div className="container-media-footer">
            <Link href="#">Internal link</Link>
            <Button iconName="share" variant="icon" />
          </div>
          
  ```

### With media on the side

Playground id: `with-media-on-the-side` · uses setup 1

- `media`:

  ```jsx
  
            {
              content: <img src="/image-placeholder.png" alt="placeholder" />,
              position: "side",
              width: "33%"
            }
  ```
- `children`:

  ```jsx
  
            <SpaceBetween direction="vertical" size="s">
              <SpaceBetween direction="vertical" size="xxs">
              <Box variant="h2">
                <Link fontSize="heading-m" href="#">
                Product title
                </Link>
              </Box> 
              <Box variant="small">Company name</Box>
              </SpaceBetween>
              <Box variant="p">
              This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tempor dolor ac
              accumsan. This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tempor
              dolor ac accumsan.
              </Box>
              <SpaceBetween direction="vertical" size="xxs">
                <Box fontSize="body-s">
                Start at
                </Box>
                <Box fontWeight="bold">
                $0.1/hour
                </Box>
              </SpaceBetween>
              <Button>Shop now</Button>
            </SpaceBetween>
          
  ```

### With video thumbnail

Playground id: `with-video-thumbnail` · uses setup 1

- `media`:

  ```jsx
  
            {
              content: <Link><img src="/video.jpg" alt="Video thumbnail" /></Link>,
            }
  ```
- `children`:

  ```jsx
  
            <SpaceBetween direction="vertical" size="s">
              <SpaceBetween direction="vertical" size="xxs">
                <Box variant="small">43 min</Box>
                <Box variant="h2">
                  <Link fontSize="heading-m" href="#">
                  Video Title
                  </Link>
                </Box>
              </SpaceBetween>
              This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tempor dolor ac
              accumsan. This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tempor
              dolor ac accumsan.
            </SpaceBetween>
          
  ```

### With custom style

Playground id: `with-custom-style` · uses setup 1

- `header`:

  ```jsx
  
            <Header
              variant="h2"
              description="Custom container description"
            >
              I am a custom container!
            </Header>
          
  ```
- `children`: `Custom container content`
- `style`:

  ```jsx
  {
          root: {
            borderColor: 'light-dark(rgb(4, 125, 149), rgb(0, 184, 217))',
            borderWidth: '2px',
            borderRadius: '10px',
          },
          content: {
            paddingBlock: '16px',
            paddingInline: '8x',
          },
          header: {
            paddingBlock: '20px',
            paddingInline: '20px',
          },
        }
  ```
