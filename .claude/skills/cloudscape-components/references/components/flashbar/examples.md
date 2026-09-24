# flashbar playground examples

Snapshot of the named examples on https://cloudscape.design/components/flashbar/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Info

Playground id: `info`

- `items`:

  ```jsx
  
          [
            {
              type: 'info',
              dismissible: true,
              dismissLabel: 'Dismiss message',
              onDismiss: () => setItems([]),
              content: (
                <>
                  This is an info flash message. It contains {" "}
                  <Link color="inverted" href="#">a link to another page</Link>.
                </>
              ),
              id: 'message_1',
            }
          ]
  ```

### Success

Playground id: `success`

- `items`:

  ```jsx
  
          [
            {
              type: 'success',
              content: 'This is a success flash message.',
              action: <Button>View instance</Button>,
              dismissible: true,
              dismissLabel: 'Dismiss message',
              onDismiss: () => setItems([]),
              id: 'message_1',
            }
          ]
  ```

### Error

Playground id: `error`

- `items`:

  ```jsx
  
          [
            {           
              header: 'Failed to update 4 instances',
              type: 'error',
              content: 'This is a dismissible error message.',
              dismissible: true,
              dismissLabel: 'Dismiss message',
              onDismiss: () => setItems([]),
              id: 'message_1'
            }
          ]
  ```

### Warning

Playground id: `warning`

- `items`:

  ```jsx
  
          [
            {
              type: 'warning',
              content: 'This is a warning flash message.',
              dismissible: true,
              dismissLabel: 'Dismiss message',
              onDismiss: () => setItems([]),
              id: 'message_1'
            }
          ]
  ```

### With a progress bar

Playground id: `with-a-progress-bar`

- `items`:

  ```jsx
  
          [
            {
              type: 'in-progress',
              content: (
                <ProgressBar
                  label="Progress bar label"
                  description="Progress bar description"
                  value={37}
                  additionalInfo="Additional information"
                  variant="flash"
                />
              ),
              dismissible: true,
              dismissLabel: 'Dismiss message',
              onDismiss: () => setItems([]),
              id: 'message_1'
            }
          ]
  ```

### Loading state

Playground id: `loading-state`

- `items`:

  ```jsx
  
          [
            {
              type: 'success',
              loading: true,
              content: 'This is an in progress flash message.',
              dismissible: true,
              dismissLabel: 'Dismiss message',
              onDismiss: () => setItems([]),
              id: 'message_1'
            }
          ]
  ```

### Stacked notifications

Playground id: `stacked-notifications`

- `stackItems`: `true`
- `i18nStrings`:

  ```jsx
  {ariaLabel:"Notifications",notificationBarAriaLabel:"View all notifications",notificationBarText:"Notifications",errorIconAriaLabel:"Error",warningIconAriaLabel:"Warning",successIconAriaLabel:"Success",infoIconAriaLabel:"Info",inProgressIconAriaLabel:"In progress"}
  ```
- `items`:

  ```jsx
  
          [
            {
              type: 'success',
              dismissible: true,
              dismissLabel: 'Dismiss message',
              content: 'This is a success flash message',
              id: 'message_5',
              onDismiss: () =>
                setItems(items => items.filter(item => item.id !== 'message_5'))
            },
            {
              type: 'warning',
              dismissible: true,
              dismissLabel: 'Dismiss message',
              content: 'This is a warning flash message',
              id: 'message_4',
              onDismiss: () =>
                setItems(items => items.filter(item => item.id !== 'message_4'))
            },
            {
              type: 'error',
              dismissible: true,
              dismissLabel: 'Dismiss message',
              header: 'Failed to update instance id-4890f893e',
              content: 'This is a dismissible error message',
              id: 'message_3',
              onDismiss: () =>
                setItems(items => items.filter(item => item.id !== 'message_3'))
            },
            {
              type: 'info',
              dismissible: true,
              dismissLabel: 'Dismiss message',
              content: 'This is an info flash message',
              id: 'message_2',
              onDismiss: () =>
                setItems(items => items.filter(item => item.id !== 'message_2'))
            },
            {
              type: 'in-progress',
              dismissible: true,
              dismissLabel: 'Dismiss message',
              content: (
                <ProgressBar
                  label="Progress bar label"
                  description="Progress bar description"
                  value={37}
                  additionalInfo="Additional information"
                  variant="flash"
                />
              ),
              id: 'message_1',
              onDismiss: () =>
                setItems(items => items.filter(item => item.id !== 'message_1'))
            }
          ]
  ```

### With custom style

Playground id: `with-custom-style`

- `items`:

  ```jsx
  
          [
            {
              type: 'info',
              header: 'I am a custom Flashbar!',
              content: 'Some of my styles are different.',
              id: 'message_1',
            }
          ]
  ```
- `style`:

  ```jsx
  {
            item: {
              root: {
                background: {
                  info: 'light-dark(rgb(4, 125, 149), rgb(0, 184, 217))',
                },
                borderColor: {
                  info: 'light-dark(rgb(0, 64, 77), rgb(0, 150, 177))',
                },
                borderRadius: '8px',
                borderWidth: '2px',
                color: {
                  info: 'light-dark(white, rgb(242, 243, 243))',
                },
              },
            },
          }
  ```
