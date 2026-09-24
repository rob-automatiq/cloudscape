# dropdown playground examples

Snapshot of the named examples on https://cloudscape.design/components/dropdown/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Simple

Playground id: `simple`

- `ariaRole`: `dialog`
- `ariaLabel`: `Simple dropdown example`
- `trigger`:

  ```jsx
  <Button onClick={() => setOpen(!open)} ariaExpanded={open} ariaHasPopup="dialog">Open dropdown</Button>
  ```
- `content`:

  ```jsx
  <Box padding="s">
    This is the dropdown content.
  </Box>
  ```

### With header and footer

Playground id: `with-header-and-footer`

- `ariaRole`: `dialog`
- `ariaLabel`: `Notifications`
- `trigger`:

  ```jsx
  <Button onClick={() => setOpen(!open)} ariaExpanded={open} ariaHasPopup="dialog"><Icon name="notification" /> Notifications</Button>
  ```
- `header`:

  ```jsx
  <Box padding={{ vertical: 'xs', horizontal: 's' }} fontWeight="bold" nativeAttributes={{ style: { borderBottom: '1px solid light-dark(#c6c6cd, #424650)' } }}>
    Notifications
  </Box>
  ```
- `content`:

  ```jsx
  <Box padding={{ vertical: 'xxxs', horizontal: 's' }} nativeAttributes={{ style: { maxHeight: '200px', overflowY: 'auto' } }}>
  <List
    ariaLabel="Notifications"
    disablePaddings={false}
    items={[
      { id: 'instance', title: 'Instance i-0a1b2c3d ready', description: 'Your EC2 instance has finished launching.', time: '2 minutes ago' },
      { id: 'deployment', title: 'Deployment completed', description: 'my-app-stack was deployed successfully.', time: '15 minutes ago' },
      { id: 'backup', title: 'Backup succeeded', description: 'Daily backup of prod-db completed.', time: '1 hour ago' },
      { id: 'health', title: 'Health check passed', description: 'Target group tg-prod-api is healthy.', time: '2 hours ago' },
      { id: 'scaling', title: 'Scaling complete', description: 'Auto Scaling group reached desired capacity.', time: '3 hours ago' },
      { id: 'cert', title: 'Certificate renewed', description: 'TLS cert for example.com was auto-renewed.', time: 'Yesterday' },
    ]}
    renderItem={item => ({
      id: item.id,
      content: item.title,
      secondaryContent: <Box variant="small">{item.description} · {item.time}</Box>,
      icon: <Icon name="status-positive" variant="success" />,
    })}
  />
  </Box>
  ```
- `footer`:

  ```jsx
  <Box padding={{ vertical: 'xxs', horizontal: 's' }} textAlign="center" nativeAttributes={{ style: { borderTop: '1px solid light-dark(#c6c6cd, #424650)' } }}>
    <Button variant="link">View all notifications</Button>
  </Box>
  ```

### With custom style

Playground id: `with-custom-style`

- `ariaRole`: `dialog`
- `ariaLabel`: `Custom styled dropdown`
- `trigger`:

  ```jsx
  <Button onClick={() => setOpen(!open)} ariaExpanded={open} ariaHasPopup="dialog">Open dropdown</Button>
  ```
- `style`:

  ```jsx
  {
    dropdown: {
      background: 'light-dark(#f5f0ff, #1a1025)',
      borderColor: 'light-dark(#7c3aed, #a78bfa)',
      borderRadius: '0px',
      borderWidth: '2px'
    }
  }
  ```
- `content`:

  ```jsx
  <Box padding="s">
    Background, border color, width and radius are all customized via the <code>style</code> prop.
  </Box>
  ```
