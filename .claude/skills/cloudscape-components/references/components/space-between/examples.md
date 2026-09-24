# space-between playground examples

Snapshot of the named examples on https://cloudscape.design/components/space-between/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### With buttons

Playground id: `with-buttons`

- `size`: `xs`
- `direction`: `horizontal`
- `children`:

  ```jsx
  
            <Button>Edit</Button>
            <Button>Delete</Button>
            <Button variant="primary">Create distribution</Button>         
            
  ```

### With containers

Playground id: `with-containers`

- `size`: `l`
- `children`:

  ```jsx
  
          <Container header={<Header variant="h2">Distribution settings</Header>}>
            Container content
          </Container>
          <Container header={<Header variant="h2">Cache behaviour settings</Header>}>
            Container content
          </Container>
          <Container header={<Header variant="h2">Container title</Header>}>
            Container content
          </Container>
            
  ```

### With form fields

Playground id: `with-form-fields`

- `size`: `l`
- `children`:

  ```jsx
  
            <FormField
              label="S3 bucket for logs"
              description="The Amazon S3 bucket that you want CloudFront to store your access logs in."
            >
              <Input placeholder="Choose an S3 bucket" />
            </FormField>
          
            <FormField
              stretch={true}
              label={<span id="certificate-expiry-label">Certificate expiry</span>}
              description="Specify the date and time when the certificate should expire."
            >
              <SpaceBetween size="s" direction="horizontal">
                <FormField stretch={true}>
                  <Input
                    ariaLabelledby="certificate-expiry-label"
                    placeholder="YYYY/MM/DD"
                  />
                </FormField>
                <FormField stretch={true} constraintText="Use 24-hour format.">
                  <Input
                    ariaLabelledby="certificate-expiry-label"
                    placeholder="hh:mm:ss"
                  />
                </FormField>
              </SpaceBetween>
            </FormField>
            
  ```

### Nested

Playground id: `nested`

- `size`: `l`
- `direction`: `horizontal`
- `children`:

  ```jsx
  
            <SpaceBetween size="xs">
              <div>Content one</div>
              <div>Content two</div>
              <div>Content three</div>
            </SpaceBetween>
  
            <SpaceBetween size="s">
              <div>Content four</div>
              <div>Content five</div>
            </SpaceBetween>
  
            <SpaceBetween size="m">
              <div>Content six</div>
              <div>Content seven</div>
              <div>Content eight</div>
            </SpaceBetween>
            
  ```
