# live-region playground examples

Snapshot of the named examples on https://cloudscape.design/components/live-region/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper:

  ```jsx
  [a("Dynamically rendered alert",{children:`<Alert
    type="error"
    statusIconAriaLabel="Error"
    header="Your instances could not be stopped"
  >
    Remove the instance from the load balancer before
    stopping it.
  </Alert>`}),a("Table header with manual refresh",{children:"<>Last updated<br />December 21, 2023, 14:29 (UTC+01:00)</>"},`<Header
    headingTagOverride="h3"
    actions={
      <SpaceBetween direction="horizontal" size="xs" alignItems="center">
        <Box fontSize="body-s" padding="n" color="text-status-inactive" textAlign="right">
          <LiveRegion />
        </Box>
        <Button iconName="refresh" ariaLabel="Refresh" loadingText="Refreshing table content" />
      </SpaceBetween>
    }
  >
    Resources
  </Header>`),a("Avatar with loading announcement",{children:"Generating response",hidden:true},`<div>
    <Avatar
      ariaLabel="Avatar of generative AI assistant"
      color="gen-ai"
      iconName="gen-ai"
      loading={true}
      tooltipText="Generative AI assistant"
    />
    <LiveRegion />
  </div>`)]
  ```

## Examples

### Dynamically rendered alert

Playground id: `dynamically-rendered-alert`

- `children`:

  ```jsx
  <Alert
    type="error"
    statusIconAriaLabel="Error"
    header="Your instances could not be stopped"
  >
    Remove the instance from the load balancer before
    stopping it.
  </Alert>
  ```
- Note shown with example:

  ```jsx
  (0,t.jsx)(c.Alert,{statusIconAriaLabel:"Info",children:"The live announcement can be heard using a screen reader, such as VoiceOver (Mac) or NVDA (Windows)."})
  ```

### Table header with manual refresh

Playground id: `table-header-with-manual-refresh`

- `children`: `<>Last updated<br />December 21, 2023, 14:29 (UTC+01:00)</>`
- Note shown with example:

  ```jsx
  (0,t.jsx)(c.Alert,{statusIconAriaLabel:"Info",children:"The live announcement can be heard using a screen reader, such as VoiceOver (Mac) or NVDA (Windows)."})
  ```

### Avatar with loading announcement

Playground id: `avatar-with-loading-announcement`

- `children`: `Generating response`
- `hidden`: `true`
- Note shown with example:

  ```jsx
  (0,t.jsx)(c.Alert,{statusIconAriaLabel:"Info",children:"The live announcement can be heard using a screen reader, such as VoiceOver (Mac) or NVDA (Windows)."})
  ```
