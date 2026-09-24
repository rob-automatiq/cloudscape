# alert playground examples

Snapshot of the named examples on https://cloudscape.design/components/alert/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Info

Playground id: `info`

- `header`: `Known issues/limitations`
- `children`:

  ```jsx
  Review the documentation to learn about potential compatibility issues with specific database versions.
  ```
- `statusIconAriaLabel`: `Info`

### Success

Playground id: `success`

- `children`: `Your instance has been created successfully.`
- `type`: `success`
- `dismissible`: `true`
- `statusIconAriaLabel`: `Success`

### Error

Playground id: `error`

- `header`: `Your instances could not be stopped`
- `children`: `Remove the instance from the load balancer before stopping it.`
- `type`: `error`
- `statusIconAriaLabel`: `Error`

### Warning

Playground id: `warning`

- `children`: `Changing the configuration might require stopping the instance.`
- `type`: `warning`
- `statusIconAriaLabel`: `Warning`

### With button

Playground id: `with-button`

- `header`: `Versioning is not enabled`
- `children`: `Versioning is not enabled for objects in bucket [IAM-user].`
- `action`: `<Button>Enable versioning</Button>`
- `statusIconAriaLabel`: `Info`

### With custom style

Playground id: `with-custom-style`

- `header`: `I am a custom alert!`
- `dismissible`: `true`
- `style`:

  ```jsx
  
        {
          root: {
            background: 'light-dark(rgb(240, 250, 255), rgb(10, 30, 50))',
            color: 'light-dark(rgb(0, 70, 130), rgb(180, 220, 255))',
            borderRadius: '40px',
            borderWidth: '3px',
            borderColor: 'light-dark(rgb(0, 108, 224), rgb(100, 180, 255))',
          },
          dismissButton: {
            color: {
              active: 'light-dark(rgb(0, 50, 100), rgb(150, 200, 255))',
              default: 'light-dark(rgb(0, 70, 130), rgb(180, 220, 255))',
              hover: 'light-dark(rgb(0, 108, 224), rgb(100, 180, 255))',
            },
          }
        }
  ```
