# modal playground examples

Snapshot of the named examples on https://cloudscape.design/components/modal/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `header`: `Modal title`
- `children`: `Your description should go here`
- `footer`:

  ```jsx
  
  <Box float="right">
    <SpaceBetween direction="horizontal" size="xs">
      <Button variant="link">Cancel</Button>
      <Button variant="primary">Ok</Button>
    </SpaceBetween>
  </Box>
  
  ```
- `size`: `medium`
- `visible`: `false`

### With text input

Playground id: `with-text-input`

- `header`: `Modal title`
- `children`:

  ```jsx
  
            <FormField label="Form field label" description="This is a description">
                <Input />
            </FormField>
          
  ```
- `footer`:

  ```jsx
  
  <Box float="right">
    <SpaceBetween direction="horizontal" size="xs">
      <Button variant="link">Cancel</Button>
      <Button variant="primary">Ok</Button>
    </SpaceBetween>
  </Box>
  
  ```
- `size`: `medium`

### With scrollable content

Playground id: `with-scrollable-content`

- `header`: `Modal title`
- `children`:

  ```jsx
  `<span>
    <h3>Modal with vertical scroll</h3>
    ${Array(6).fill(`<p>${l}</p>`).join("\n")}
  </span>`
  ```
- `footer`:

  ```jsx
  
        <Box float="right">
          <Button variant="link">Cancel</Button>
        </Box>
      
  ```
- `size`: `medium`

### With top position

Playground id: `with-top-position`

- `header`: `Modal Title`
- `children`:

  ```jsx
  `<span>
        <p>This modal has a top position</p>
        <p>${l}</p>
      </span>
      `
  ```
- `footer`:

  ```jsx
  
  <Box float="right">
    <SpaceBetween direction="horizontal" size="xs">
      <Button variant="link">Cancel</Button>
      <Button variant="primary">Ok</Button>
    </SpaceBetween>
  </Box>
  
  ```
- `position`: `top`
- `size`: `medium`

### With custom dimensions

Playground id: `with-custom-dimensions`

- `header`: `Modal Title`
- `children`:

  ```jsx
  `<span>
    <h3>Modal with vertical scroll</h3>
    ${Array(6).fill(`<p>${l}</p>`).join("\n")}
  </span>`
  ```
- `footer`:

  ```jsx
  
  <Box float="right">
    <SpaceBetween direction="horizontal" size="xs">
      <Button variant="link">Cancel</Button>
      <Button variant="primary">Ok</Button>
    </SpaceBetween>
  </Box>
  
  ```
- `width`: `900`
- `height`: `500`
