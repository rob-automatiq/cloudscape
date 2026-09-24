# progress-bar playground examples

Snapshot of the named examples on https://cloudscape.design/components/progress-bar/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1


### Setup 2

- Wrapper:

  ```jsx
  <Flashbar
    items={[
      {
        content: <ProgressBar />,
        type: 'in-progress',
        dismissible: false,
        id: 'progressbar_1'
      }
    ]}
  />
  ```

### Setup 3

- Wrapper:

  ```jsx
  
          <Container header={<Header variant="h2">Header</Header>}>
            <KeyValuePairs 
              columns={2} 
              items={[
                {
                  label: 'Label for key',
                  value: 'Value'
                },
                {
                  label: 'Progress bar label',
                  id: 'progress-bar-id',
                  value: <ProgressBar />
                },
                {
                  label: 'Label for key',
                  value: <StatusIndicator>Value for positive status</StatusIndicator>
                },
                {
                  label: 'Label for key',
                  value: (
                    <Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      external={true}
                      variant="primary"
                      ariaLabel="Label for key"
                    >
                      Value with external link
                    </Link>
                  )
                }
              ]} 
            />
          </Container>
  ```

## Examples

### Standalone in progress

Playground id: `standalone-in-progress` · uses setup 1

- `label`: `Progress bar label`
- `description`: `Progress bar description`
- `value`: `36`
- `additionalInfo`: `Additional information`
- `status`: `in-progress`

### Standalone in success state

Playground id: `standalone-in-success-state` · uses setup 1

- `label`: `Progress bar label`
- `status`: `success`
- `resultText`: `Result text`

### Standalone in error state

Playground id: `standalone-in-error-state` · uses setup 1

- `label`: `Progress bar label`
- `status`: `error`
- `resultText`: `Result text`
- `resultButtonText`: `Retry`

### Within flash component

Playground id: `within-flash-component` · uses setup 2

- `label`: `Progress bar label`
- `description`: `Progress bar description`
- `value`: `36`
- `additionalInfo`: `Additional information`
- `status`: `in-progress`
- `variant`: `flash`

### Within key/value pairs pattern

Playground id: `within-key/value-pairs-pattern` · uses setup 3

- `ariaLabelledby`: `progress-bar-id`
- `description`: `Progress bar description`
- `value`: `36`
- `additionalInfo`: `Additional information`
- `status`: `in-progress`
- `variant`: `key-value`

### With custom style

Playground id: `with-custom-style` · uses setup 1

- `label`: `Custom styled progress bar`
- `description`: `A progress bar wddith custom colors and styling`
- `additionalInfo`: `Additional information`
- `value`: `36`
- `style`:

  ```jsx
  
        {
          progressBar: {
            backgroundColor: 'light-dark(#faf5ff, #2d1b69)',
            borderRadius: '8px',
            height: '8px',
            border: 'light-dark(1px solid #e9d5ff, 1px solid #5b21b6)',
          },
          progressValue: {
            backgroundColor: 'light-dark(#8b5cf6, #a78bfa)',
            borderRadius: '6px',
          },
          progressPercentage: {
            color: 'light-dark(#5b21b6, #e9d5ff)',
            fontSize: '13px',
            fontWeight: '600',
          },
        }
  ```
