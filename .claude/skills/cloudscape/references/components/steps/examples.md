# steps playground examples

Snapshot of the named examples on https://cloudscape.design/components/steps/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `steps`:

  ```jsx
  [
          { status: 'success', header: 'Success step', statusIconAriaLabel: 'Success' },
          {
            status: 'warning',
            header: (
              <Popover content="More info about warning" dismissButton={false}>
                Warning step
              </Popover>
            ),
            statusIconAriaLabel: 'Warning',
          },
          { status: 'stopped', header: 'Stopped step', statusIconAriaLabel: 'Stopped' },
        ]
  ```

### With loading

Playground id: `with-loading`

- `steps`:

  ```jsx
  [
          { status: 'success', header: 'Success step', statusIconAriaLabel: 'Success' },
          { status: 'loading', header: 'Loading step', statusIconAriaLabel: 'Loading' },
        ]
  ```

### With error

Playground id: `with-error`

- `steps`:

  ```jsx
  [
        { status: 'success', header: 'Success step', statusIconAriaLabel: 'Success' },
        {
          status: 'error',
          header: (
            <>
              Error step.{' '}
              <Button href="#" variant="inline-link">
                Retry
              </Button>
            </>
          ),
          statusIconAriaLabel: 'Error',
        },
      ]
  ```

### With not started

Playground id: `with-not-started`

- `steps`:

  ```jsx
  [
        { status: 'success', header: 'Success step', statusIconAriaLabel: 'Success' },
        { status: 'loading', header: 'Loading step', statusIconAriaLabel: 'Loading' },
        { status: 'not-started', header: 'Not started step', statusIconAriaLabel: 'Not started' },
      ]
  ```

### Horizontal

Playground id: `horizontal`

- `orientation`: `horizontal`
- `steps`:

  ```jsx
  [
          { status: 'success', header: 'Success step', statusIconAriaLabel: 'Success' },
          {
            status: 'warning',
            header: (
              <Popover content="More info about warning" dismissButton={false}>
                Warning step
              </Popover>
            ),
            statusIconAriaLabel: 'Warning',
          },
          { status: 'stopped', header: 'Stopped step', statusIconAriaLabel: 'Stopped' },
        ]
  ```

### With custom steps

Playground id: `with-custom-steps`

- `steps`:

  ```jsx
  [
        { status: 'success', header: 'Success step' },
        { status: 'stopped', header: 'Locked step'},
      ]
  ```
- `renderStep`:

  ```jsx
  step => ({
        header: <i>{step.header}</i>,
        icon: step.status === 'stopped' ? 
          <Icon ariaLabel="locked" name="lock-private" variant="subtle" /> :
          <Icon ariaLabel="success" name="status-positive" variant="success" />,
      })
  ```

### With timestamps

Playground id: `with-timestamps`

- `steps`:

  ```jsx
  [
        {
          annotation: <time dateTime="2024-05-01T15:01:23Z">May 1, 2024, 15:01 (UTC+0:00)</time>,
          status: 'log',
          statusIconAriaLabel: 'Log',
          header: 'Task started',
        },
        {
          annotation: <time dateTime="2024-05-01T15:03:10Z">May 1, 2024, 15:03 (UTC+0:00)</time>,
          status: 'log',
          statusIconAriaLabel: 'Log',
          header: 'Workspace initialized',
        },
        {
          annotation: <time dateTime="2024-05-01T15:04:20Z">May 1, 2024, 15:04 (UTC+0:00)</time>,
          status: 'success',
          statusIconAriaLabel: 'Success',
          header: 'Build succeeded',
        },
      ]
  ```
