# form-field playground examples

Snapshot of the named examples on https://cloudscape.design/components/form-field/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `label`: `Form field label`
- `description`: `This is a description.`
- `children`: `<Input value={inputValue} onChange={event => setInputValue(event.detail.value)} />`

### Optional

Playground id: `optional`

- `label`: `<span>Form field label <i>- optional</i> </span>`
- `description`: `This is a description.`
- `children`: `<Textarea/>`

### With constraint text

Playground id: `with-constraint-text`

- `label`: `Form field label`
- `constraintText`: `Requirements and constraints for the field.`
- `children`: `<Input />`

### With error

Playground id: `with-error`

- `label`: `Form field label`
- `description`: `This is a description.`
- `children`: `<Input />`
- `constraintText`: `Requirements and constraints for the field.`
- `errorText`: `This is an error message.`

### With warning

Playground id: `with-warning`

- `label`: `Form field label`
- `description`: `This is a description.`
- `children`: `<Input />`
- `constraintText`: `Requirements and constraints for the field.`
- `warningText`: `This is a warning message.`

### With radio buttons

Playground id: `with-radio-buttons`

- `label`: `Form field label`
- `stretch`: `false`
- `children`:

  ```jsx
  
          <RadioGroup
            items={[
              {
                "value": "first",
                "label": "Set the stretch property to true when using radio buttons or checkboxes in a form-field: their label must stretch to 100% of the field width."
              },
              {
                "value": "second",
                "label": "The same applies to any textual information"
              },
              {
                "value": "third",
                "label": "Third Choice"
              }
            ]} />
          
  ```

### With checkbox group

Playground id: `with-checkbox-group`

- `label`: `Log exports`
- `description`: `Select the log types to publish to Amazon CloudWatch Logs.`
- `controlId`: `log-exports`
- `stretch`: `true`
- `children`:

  ```jsx
  
          <div role="group" aria-labelledby="log-exports-label">
            <SpaceBetween size="xxs">
              <Checkbox
                checked={logExports.auditLog}
                onChange={({ detail }) => setLogExports({ ...logExports, auditLog: detail.checked })}
              >
                Audit log
              </Checkbox>
              <Checkbox
                checked={logExports.errorLog}
                onChange={({ detail }) => setLogExports({ ...logExports, errorLog: detail.checked })}
              >
                Error log
              </Checkbox>
              <Checkbox
                checked={logExports.generalLog}
                onChange={({ detail }) => setLogExports({ ...logExports, generalLog: detail.checked })}
              >
                General log
              </Checkbox>
            </SpaceBetween>
          </div>
          
  ```

### With nested checkbox group

Playground id: `with-nested-checkbox-group`

- `label`: `Log exports`
- `description`: `Select the log types to publish to Amazon CloudWatch Logs.`
- `controlId`: `nested-log-exports`
- `stretch`: `true`
- `children`:

  ```jsx
  
          <div role="group" aria-labelledby="nested-log-exports-label">
            <SpaceBetween size="xxs">
              <Checkbox
                controlId="all-logs"
                checked={Object.values(logExports).every(Boolean)}
                indeterminate={Object.values(logExports).some(Boolean) && !Object.values(logExports).every(Boolean)}
                onChange={({ detail }) =>
                  setLogExports({ auditLog: detail.checked, errorLog: detail.checked, generalLog: detail.checked })
                }
              >
                All logs
              </Checkbox>
              <Box padding={{ left: 'xl' }}>
                <div role="group" aria-labelledby="all-logs-label">
                  <SpaceBetween size="xxs">
                    <Checkbox
                      checked={logExports.auditLog}
                      onChange={({ detail }) => setLogExports({ ...logExports, auditLog: detail.checked })}
                    >
                      Audit log
                    </Checkbox>
                    <Checkbox
                      checked={logExports.errorLog}
                      onChange={({ detail }) => setLogExports({ ...logExports, errorLog: detail.checked })}
                    >
                      Error log
                    </Checkbox>
                    <Checkbox
                      checked={logExports.generalLog}
                      onChange={({ detail }) => setLogExports({ ...logExports, generalLog: detail.checked })}
                    >
                      General log
                    </Checkbox>
                  </SpaceBetween>
                </div>
              </Box>
            </SpaceBetween>
          </div>
          
  ```

### With character count

Playground id: `with-character-count`

- `label`: `<span>Name <i>- optional</i></span>`
- `children`: `<Input value={inputValue} onChange={event => setInputValue(event.detail.value)} />`
- `constraintText`: `Name must be 1 to 10 characters.`
- `characterCountText`:

  ```jsx
  `Character count: ${inputValue.length}/10`
  ```

### Select with refresh

Playground id: `select-with-refresh`

- `label`: `Security group`
- `children`:

  ```jsx
  <Select
              options={[
                {
                  label: 'sg-00dcd368',
                  id: '1'
                },
                {
                  label: 'sg-02dcd36a',
                  id: '2'
                },
                {
                  label: 'sg-04dcd36c',
                  id: '3'
                },
                {
                  label: 'sg-05fa4668',
                  id: '4'
                },
                {
                  label: 'sg-064a9062',
                  id: '5'
                }
              ]}
            />
  ```
- `secondaryControl`: `<Button iconName="refresh"/>`

### Terms and conditions

Playground id: `terms-and-conditions`

- `label`: `Terms and conditions`
- `description`:

  ```jsx
  <>Please read through our <Link href="#" external="true" variant="primary" fontSize="body-s">terms and conditions</Link> and agree.</>
  ```
- `children`: `<Checkbox>I agree to the terms and conditions</Checkbox>`
