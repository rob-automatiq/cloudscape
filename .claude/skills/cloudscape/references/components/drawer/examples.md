# drawer playground examples

Snapshot of the named examples on https://cloudscape.design/components/drawer/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1

- Wrapper:

  ```jsx
  `
      <div className="drawer-example-absolute">
        <div className="drawer-container-header">Header</div>
        <div className="drawer-container-content">
          ${[1,2,3,4,5,6,7,8,9,10].map(s=>`<Box>Content line ${s}</Box>`).join("")}
        </div>
        <Drawer />
      </div>
    `
  ```

### Setup 2

- Wrapper:

  ```jsx
  `
      <div className="drawer-example-sticky">
        <div className="drawer-container-content">
          ${[1,2,3,4,5,6,7,8,9].map(s=>`<Box>Content line ${s}</Box>`).join("")}
        </div>
        <Drawer />
      </div>
    `
  ```

### Setup 3

- `onClose` (function): `() => setOpen(false)`
- Wrapper:

  ```jsx
  `
      <div className="drawer-example-absolute">
        <div className="drawer-container-header">Header</div>
        <div className="drawer-container-content">
          ${[1,2,3,4,5,6,7,8,9,10].map(s=>`<Box>Content line ${s}</Box>`).join("")}
        </div>
        <Drawer />
      </div>
    `
  ```

### Setup 4

- `onClose` (function): `() => setOpen(false)`
- Wrapper:

  ```jsx
  
      <div>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer />
      </div>
    
  ```

## Examples

### With summary content

Playground id: `with-summary-content` · uses setup 1

- `header`: `<h2>Summary</h2>`
- `children`:

  ```jsx
  
      <Box margin={{ bottom: 'l' }}>
          <SpaceBetween size="xxl">
              <SpaceBetween size="xs">
                  <Header variant="h3">Step 1: Engine type</Header>
                  <ExpandableSection headerText="Engine options" defaultExpanded>
                      <KeyValuePairs
                          columns={2}
                          items={[
                              {
                                label: 'Engine',
                                value: 'Aurora'
                              },
                              {
                                label: 'License model',
                                value: 'Bring your own license'
                              },
                              {
                                label: 'Edition',
                                value: 'MySQL 5.6-compatible'
                              }
                          ]}
                      />
                  </ExpandableSection>
              </SpaceBetween>
              <SpaceBetween size="xs">
                  <Header variant="h3">Step 2: Instance details</Header>
                  <ExpandableSection headerText="Instance options">
                      <KeyValuePairs
                          columns={2}
                          items={[
                              {
                                label: 'Class',
                                value: 'db.t2.micro'
                              },
                              {
                                label: 'Storage type',
                                value: 'General Purpose (SSD)'
                              },
                              {
                                label: 'Allocated storage',
                                value: '20 GiB'
                              },
                          ]}
                      />
                  </ExpandableSection>
                  <ExpandableSection headerText="Names and password">
                      <KeyValuePairs
                          columns={2}
                          items={[
                              {
                                label: 'DB instance identifier',
                                value: 'example-instance-identifier'
                              },
                              {
                                label: 'Primary username',
                                value: 'example-username'
                              },
                              {
                                label: 'Primary password',
                                value: 'example-password'
                              },
                          ]}
                      />
                  </ExpandableSection>
              </SpaceBetween>
          </SpaceBetween>
        </Box>
          
  ```

### Loading state

Playground id: `loading-state` · uses setup 1

- `loading`: `true`

### With footer

Playground id: `with-footer` · uses setup 1

- `header`: `<h2>Chat Experience</h2>`
- `children`:

  ```jsx
  
        <SpaceBetween size="m">
          <Header variant="h3">Welcome to the chat experience</Header>
        </SpaceBetween>
        
  ```
- `footer`:

  ```jsx
  
          <SpaceBetween size="xs">
            <PromptInput
              value=""
              placeholder="Describe what you want to do with AWS"
              disableSecondaryActionsPaddings={true}
              actionButtonAriaLabel={'Need Help?'}
              actionButtonIconName={'send'}
              secondaryActions={
                <Box padding={{ left: 'xxs', top: 'xs' }}>
                  <ButtonGroup
                    ariaLabel="Additional chat input actions"
                    items={[
                      {
                        type: 'icon-button',
                        id: 'upload-files',
                        iconName: 'upload',
                        text: 'Upload files',
                      },
                      {
                        type: 'icon-button',
                        id: 'add-reference',
                        iconName: 'at-symbol',
                        text: 'Add reference or citation',
                      },
                    ]}
                    variant="icon"
                  />
                </Box>
              }
            />
            <Box fontSize="body-s" color="text-body-secondary">
              Use of this service is subject to the{' '}
              <Link external={true} variant="primary" href="https://aws.amazon.com/machine-learning/responsible-ai/policy/">
                AWS Responsible AI Policy
              </Link>
            </Box>
          </SpaceBetween>
      
  ```

### Sticky position

Playground id: `sticky-position` · uses setup 2

- `ariaLabel`: `Example sticky drawer`
- `position`: `sticky`
- `placement`: `bottom`
- `header`: `<h2>Sticky bottom drawer</h2>`
- `children`: `<Box>Drawer content</Box>`

### Absolute position with backdrop

Playground id: `absolute-position-with-backdrop` · uses setup 3

- `ariaLabel`: `Example absolute drawer`
- `position`: `absolute`
- `placement`: `end`
- `backdrop`: `true`
- `offset`: `{top:40}`
- `header`: `<h2>Dialog drawer</h2>`
- `children`: `<Box>Dialog drawer content</Box>`
- `footer`:

  ```jsx
  
        <span style={{ float: "inline-end" }}>
          <Button variant="primary" onClick={() => setOpen(false)}>Submit and close</Button>
        </span>
      
  ```

### Fixed position with backdrop and close action

Playground id: `fixed-position-with-backdrop-and-close-action` · uses setup 4

- `ariaLabel`: `Example fixed drawer`
- `position`: `fixed`
- `placement`: `end`
- `backdrop`: `true`
- `zIndex`: `2e3`
- `closeAction`: `{ariaLabel:"Close example drawer"}`
- `header`: `<h2>Fixed drawer</h2>`
- `children`: `<Box>Drawer content</Box>`
