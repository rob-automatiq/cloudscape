# box playground examples

Snapshot of the named examples on https://cloudscape.design/components/box/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Paragraph text

Playground id: `paragraph-text`

- `variant`: `p`
- `children`:

  ```jsx
  When you launch an instance, the instance class that you specify determines the hardware of the host
          computer used for your instance. Each instance class offers different compute, memory, and storage
          capabilities. Choose an instance class based on the requirements of the application or software that you
          plan to run on your instance.
  ```

### Secondary text

Playground id: `secondary-text`

- `color`: `text-body-secondary`
- `children`: `Secondary text`

### H1 text

Playground id: `h1-text`

- `variant`: `h1`
- `children`: `Distribution settings`

### Inline code

Playground id: `inline-code`

- `variant`: `awsui-inline-code`
- `children`: `background-color`

### Large bold text

Playground id: `large-bold-text`

- `fontWeight`: `bold`
- `fontSize`: `display-l`
- `children`: `Large and bold text`

### Key label text

Playground id: `key-label-text`

- `variant`: `awsui-key-label`
- `children`: `Key label`

### Centered text

Playground id: `centered-text`

- `textAlign`: `center`
- `children`: `Centered text`

### Margins and paddings - all sides

Playground id: `margins-and-paddings---all-sides`

- `padding`: `"xxl"`
- `margin`: `"xxl"`
- `children`:

  ```jsx
  
            <Button>Edit</Button>
          
  ```

### Margins and paddings - one side

Playground id: `margins-and-paddings---one-side`

- `padding`: `{left:"xxl"}`
- `margin`: `{left:"xxl"}`
- `children`:

  ```jsx
  
            <Button>Edit</Button> 
          
  ```

### Float right

Playground id: `float-right`

- `float`: `right`
- `children`:

  ```jsx
  
            <SpaceBetween direction="horizontal" size="xs">
              <Button>Edit</Button>
              <Button>Delete</Button>
              <Button variant="primary">Create distribution</Button>
            </SpaceBetween>
          
  ```
