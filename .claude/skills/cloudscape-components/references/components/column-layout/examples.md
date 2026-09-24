# column-layout playground examples

Snapshot of the named examples on https://cloudscape.design/components/column-layout/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Two columns

Playground id: `two-columns`

- `columns`: `2`
- `children`:

  ```jsx
  
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
            
  ```

### Form fields

Playground id: `form-fields`

- `columns`: `2`
- `children`:

  ```jsx
  
              <FormField
                label="Form label"
                description="This is a description"
                stretch={true}
              >
                <Input></Input>
              </FormField>
              <FormField
                label="Form label"
                description="This is a description"
                errorText="This is an error message"
                stretch={true}
              >
                <Input></Input>
              </FormField>
            
  ```

### With horizontal borders

Playground id: `with-horizontal-borders`

- `columns`: `3`
- `borders`: `horizontal`
- `children`:

  ```jsx
  
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
            
  ```

### With text grids

Playground id: `with-text-grids`

- `columns`: `3`
- `variant`: `text-grid`
- `children`:

  ```jsx
  
              <div>Use this variant when you have text content inside columns.</div>
              <div>Use this variant when you have text content inside columns.</div>
              <div>Use this variant when you have text content inside columns.</div>
            
  ```
