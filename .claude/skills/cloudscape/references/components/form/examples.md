# form playground examples

Snapshot of the named examples on https://cloudscape.design/components/form/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Full page form

Playground id: `full-page-form`

- `header`: `<Header variant="h1">Form header</Header>`
- `children`:

  ```jsx
  
  <Container header={<Header variant="h2">Form container header</Header>}>
    <SpaceBetween direction="vertical" size="l">
      <FormField label="First field">
        <Input />
      </FormField>
      <FormField label="Second field">
        <Input />
      </FormField>
      <FormField label="Third field">
        <Input />
      </FormField>
    </SpaceBetween>
  </Container>
  
  ```
- `actions`:

  ```jsx
  
              <SpaceBetween direction="horizontal" size="xs">
                <Button formAction="none" variant="link">Cancel</Button>
                <Button variant="primary">Submit</Button>
              </SpaceBetween>
            
  ```

### With errors

Playground id: `with-errors`

- `header`: `<Header variant="h1">Form header</Header>`
- `children`:

  ```jsx
  
  <Container header={<Header variant="h2">Form container header</Header>}>
    <SpaceBetween direction="vertical" size="l">
      <FormField label="First field">
        <Input />
      </FormField>
      <FormField label="Second field">
        <Input />
      </FormField>
      <FormField label="Third field">
        <Input />
      </FormField>
    </SpaceBetween>
  </Container>
  
  ```
- `errorText`: `Some error`
- `actions`:

  ```jsx
  
              <SpaceBetween direction="horizontal" size="xs">
                <Button formAction="none" variant="link">Cancel</Button>
                <Button variant="primary">Submit</Button>
              </SpaceBetween>
            
  ```

### With description

Playground id: `with-description`

- `header`:

  ```jsx
  
              <Header
                variant="h1"
                description="Some description"
              >
                Form header
              </Header>
            
  ```
- `children`:

  ```jsx
  
  <Container header={<Header variant="h2">Form container header</Header>}>
    <SpaceBetween direction="vertical" size="l">
      <FormField label="First field">
        <Input />
      </FormField>
      <FormField label="Second field">
        <Input />
      </FormField>
      <FormField label="Third field">
        <Input />
      </FormField>
    </SpaceBetween>
  </Container>
  
  ```
- `actions`:

  ```jsx
  
              <SpaceBetween direction="horizontal" size="xs">
                <Button formAction="none" variant="link">Cancel</Button>
                <Button variant="primary">Submit</Button>
              </SpaceBetween>
            
  ```
