# prompt-input playground examples

Snapshot of the named examples on https://cloudscape.design/components/prompt-input/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1

- Wrapper: `e.i(51014)`

### Setup 2


### Setup 3

- `onChange` (function): `({ detail }) => setValue(detail.value)`
- `value`: `""` (empty string)
- Wrapper:

  ```jsx
  // AreFilesDragging is the playground-only component implemented with useFilesDragging() util.
  <AreFilesDragging>
    {areFilesDragging => <PromptInput />}
  </AreFilesDragging>
  ```

### Setup 4

- Wrapper:

  ```jsx
  <FormField stretch={true} constraintText="Type @ to mention team members in your message."><PromptInput /></FormField>
  ```

### Setup 5

- `tokensToText` (function):

  ```jsx
  (tokens) => tokens.map(token => {
    if (token.type === 'trigger') {
      return `${token.triggerChar}${token.value}`;
    }
    return token.value;
  }).join('')
  ```
- `onAction` (function):

  ```jsx
  ({ detail }) => { 
    window.alert(`Submitted:\n\n${detail.value}`);
    
    // Keep pinned tokens (from useAtStart menus like /) after submission
    const pinnedTokens = detail.tokens?.filter(
      token => token.type === 'reference' && token.pinned === true
    ) || [];
    
    setTokens(pinnedTokens);
  }
  ```
- `onMenuItemSelect` (function):

  ```jsx
  ({ detail }) => {
    if (detail.menuId === 'commands' && detail.option.value === 'help') {
      // Show help message
      const helpMessage = `Available Commands:\n\n` +
        `/dev - Developer Mode (Optimized for code generation)\n` +
        `/creative - Creative Mode (Optimized for creative writing)\n` +
        `/analyze - Analyze Mode (Optimized for data analysis)\n` +
        `/help - Show this help message\n\n` +
        `Mentions:\n\n` +
        `Use @ to mention users, for example: @Alice Johnson\n` +
        `Available users: Alice Johnson, Bob Smith, Charlie Brown`;
      
      window.alert(helpMessage);
      
      // Keep pinned tokens after showing help
      const pinnedTokens = tokens.filter(
        token => token.type === 'reference' && token.pinned === true
      ) || [];
      
      setTokens(pinnedTokens);
    }
  }
  ```
- `onChange` (function):

  ```jsx
  ({ detail }) => { 
    const newTokens = detail.tokens || [];
    
    // Handle mode swapping: keep only the most recent pinned command reference
    const commandRefs = newTokens.filter(
      token => token.type === 'reference' && token.pinned === true && token.menuId === 'commands'
    );
    
    if (commandRefs.length > 1) {
      // Keep only the last command reference (the newly selected one)
      const lastCommandRef = commandRefs[commandRefs.length - 1];
      const filteredTokens = newTokens.filter(
        token => !(token.type === 'reference' && token.pinned === true && token.menuId === 'commands') || token === lastCommandRef
      );
      setTokens(filteredTokens);
    } else {
      setTokens([...newTokens]);
    }
  }
  ```
- `tokens` (array, held in state): `[]`
- Wrapper:

  ```jsx
  <WithPromptInputRef>
    {promptInputRef => <FormField stretch={true} constraintText="Type / to select a mode or @ to mention team members. Use the shortcut buttons below to quickly insert these triggers."><PromptInput ref={promptInputRef} /></FormField>}
  </WithPromptInputRef>
  ```

### Setup 6

- `onChange` (function): `({ detail }) => setValue(detail.value)`
- `value`: `""` (empty string)

## Examples

### Visible on file dragged into web browser

Playground id: `visible-on-file-dragged-into-web-browser` · uses setup 1

- `children`: `Drop files here`
- Note shown with example: `c===k&&(0,t.jsx)(d,{})`

### Always visible

Playground id: `always-visible` · uses setup 1

- `children`:

  ```jsx
  <SpaceBetween size="xxs" alignItems="center">
  <Box color="inherit">Drop files here or select from below</Box>
    <FileInput value={value} onChange={({ detail }) => setValue(detail.value)}>
      Choose files
    </FileInput>
  </SpaceBetween>
  ```
- Note shown with example: `c===k&&(0,t.jsx)(d,{})`

### Default

Playground id: `default` · uses setup 2

- `ariaLabel`: `Default prompt input`

### With action button

Playground id: `with-action-button` · uses setup 2

- `actionButtonIconName`: `send`
- `actionButtonAriaLabel`: `Send message`
- `ariaLabel`: `Prompt input with action button`

### With min and max rows

Playground id: `with-min-and-max-rows` · uses setup 2

- `actionButtonIconName`: `send`
- `actionButtonAriaLabel`: `Send message`
- `ariaLabel`: `Prompt input with min and max rows`
- `minRows`: `3`
- `maxRows`: `8`

### With secondary actions

Playground id: `with-secondary-actions` · uses setup 2

- `actionButtonIconName`: `send`
- `actionButtonAriaLabel`: `Send message`
- `ariaLabel`: `Prompt input with action button`
- `disableSecondaryActionsPaddings`: `true`
- `secondaryActions`:

  ```jsx
  
      <Box padding={{ left: 'xxs', top: 'xs' }}>
        <ButtonGroup
          ariaLabel="Chat actions"
          items={[
            {
              type: 'icon-button',
              id: 'copy',
              iconName: 'upload',
              text: 'Upload files',
            },
            {
              type: 'icon-button',
              id: 'expand',
              iconName: 'expand',
              text: 'Go full page',
            },
          ]}
          variant="icon"
        />
      </Box>
        
  ```

### With character count

Playground id: `with-character-count` · uses setup 2

- `actionButtonIconName`: `send`
- `actionButtonAriaLabel`: `Send message`

### With file upload

Playground id: `with-file-upload` · uses setup 3

- `placeholder`: `Ask a question`
- `value`: `""` (empty string)
- Note shown with example: `y==y&&(0,k.jsx)(g.AreFilesDraggingBanner,{})`

### With @ mentions

Playground id: `with-@-mentions` · uses setup 4

- `placeholder`: `Ask a question`
- `tokens`: `[]`

### With shortcuts and secondary actions

Playground id: `with-shortcuts-and-secondary-actions` · uses setup 5

- `placeholder`: `Ask a question`
- `tokens`: `[]`

### With custom style

Playground id: `with-custom-style` · uses setup 6

- `placeholder`: `Ask a question`
- `value`: `""` (empty string)
