# chat-bubble playground examples

Snapshot of the named examples on https://cloudscape.design/components/chat-bubble/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Outgoing message

Playground id: `outgoing-message`

- `type`: `outgoing`
- `avatar`: `i.user`
- `children`: `What can I do with Amazon S3?`
- `ariaLabel`: `John Doe at 5:29:02pm`

### Incoming message

Playground id: `incoming-message`

- `type`: `incoming`
- `avatar`: `i.genAI`
- `children`:

  ```jsx
  Amazon S3 is built using AWS's highly available and reliable infrastructure. Our distributed DNS servers ensure
      that you can consistently route your end users to your application.
  ```
- `actions`:

  ```jsx
  <ButtonGroup
          ariaLabel="Chat bubble actions"
          variant="icon"
          items={[
            {
              type: 'group',
              text: 'Feedback',
              items: [
                {
                  type: 'icon-button',
                  id: 'helpful',
                  iconName: 'thumbs-up-filled',
                  text: 'Helpful.',
                  disabled: true,
                  disabledReason: "“Helpful” feedback has been submitted."
                },
                {
                  type: 'icon-button',
                  id: 'not-helpful',
                  iconName: 'thumbs-down',
                  text: 'Not helpful',
                  disabled: true,
                  disabledReason: '“Not helpful” option is unavailable after “helpful” feedback submitted.'
                },
              ],
            },
            {
              type: 'icon-button',
              id: 'copy',
              iconName: 'copy',
              text: 'Copy',
              popoverFeedback: <StatusIndicator type="success">Message copied</StatusIndicator>,
            },
          ]}
        />
  ```
- `ariaLabel`: `Generative AI assistant at 6:35:10pm`

### Generating content in loading state

Playground id: `generating-content-in-loading-state`

- `type`: `incoming`
- `avatar`: `i.genAILoading`
- `children`: `<Box color="text-status-inactive">Generating response</Box>`
- `ariaLabel`: `Generative AI assistant at 9:37:50am`

### With custom style

Playground id: `with-custom-style`

- `type`: `incoming`
- `avatar`: `i.genAI`
- `children`:

  ```jsx
  Amazon S3 is built using AWS's highly available and reliable infrastructure. Our distributed DNS servers ensure
      that you can consistently route your end users to your application.
  ```
- `actions`:

  ```jsx
  <ButtonGroup
          ariaLabel="Chat bubble actions"
          variant="icon"
          items={[
            {
              type: 'group',
              text: 'Feedback',
              items: [
                {
                  type: 'icon-button',
                  id: 'helpful',
                  iconName: 'thumbs-up-filled',
                  text: 'Helpful.',
                  disabled: true,
                  disabledReason: "“Helpful” feedback has been submitted."
                },
                {
                  type: 'icon-button',
                  id: 'not-helpful',
                  iconName: 'thumbs-down',
                  text: 'Not helpful',
                  disabled: true,
                  disabledReason: '“Not helpful” option is unavailable after “helpful” feedback submitted.'
                },
              ],
            },
            {
              type: 'icon-button',
              id: 'copy',
              iconName: 'copy',
              text: 'Copy',
              popoverFeedback: <StatusIndicator type="success">Message copied</StatusIndicator>,
            },
          ]}
        />
  ```
- `ariaLabel`: `Generative AI assistant at 6:35:10pm`
- `style`:

  ```jsx
  {root:{columnGap:"25px"},bubble:{background:"light-dark(rgb(240, 253, 250), rgb(30, 41, 59))",color:"light-dark(rgb(15, 23, 42), rgb(226, 232, 240))",borderColor:"light-dark(#0e7490, #14b8a6)",borderWidth:"1px",borderRadius:"24px",boxShadow:"0 0 0 1px rgba(13, 148, 136, 0.3)",fontSize:"17px",fontWeight:"500",paddingBlock:"20px",paddingInline:"30px",rowGap:"20px"}}
  ```
