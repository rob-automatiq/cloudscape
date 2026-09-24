# button-group playground examples

Snapshot of the named examples on https://cloudscape.design/components/button-group/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1


### Setup 2

- `onFilesChange` (function): `({ detail }) => setFiles(prev => [...prev, ...detail.files])`
- `files` (array, held in state): `[]`
- Wrapper:

  ```jsx
  <SpaceBetween size="s">
    <ButtonGroup />
    <Table 
      columnDefinitions={[
        { id: 'name', header: 'File name', cell: (file) => file.name },
        { id: 'size', header: 'File size', cell: (file) => (file.size / 1000) + 'KB' },
      ]}
      items={files}
      empty="No files"
    />
  </SpaceBetween>
  ```

## Examples

### Default

Playground id: `default` · uses setup 1

- `variant`: `icon`
- `ariaLabel`: `Chat actions`
- `items`:

  ```jsx
  [
        {
          type: 'icon-button',
          id: 'copy',
          iconName: 'copy',
          text: 'Copy',
          popoverFeedback: <StatusIndicator type="success">Message copied</StatusIndicator>,
        },
        {
          type: 'icon-button',
          id: 'add',
          iconName: 'add-plus',
          text: 'Add',
        },
        {
          type: 'icon-button',
          id: 'remove',
          iconName: 'remove',
          text: 'Remove',
        },
      ]
  ```

### With dropdown menu

Playground id: `with-dropdown-menu` · uses setup 1

- `variant`: `icon`
- `ariaLabel`: `Chat actions`
- `items`:

  ```jsx
  [
        {
          type: 'group',
          text: 'Vote',
          items: [
            {
              type: 'icon-toggle-button',
              id: 'like',
              iconName: 'thumbs-up',
              pressedIconName: 'thumbs-up-filled',
              text: 'Like',
              pressed: feedback === 'like',
            },
            {
              type: 'icon-toggle-button',
              id: 'dislike',
              iconName: 'thumbs-down',
              pressedIconName: 'thumbs-down-filled',
              text: 'Dislike',
              pressed: feedback === 'dislike',
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
        {
          type: 'menu-dropdown',
          id: 'more-actions',
          text: 'More actions',
          items: [
            {
              id: 'add',
              iconName: 'add-plus',
              text: 'Add',
            },
            {
              id: 'remove',
              iconName: 'remove',
              text: 'Remove',
            },
          ],
        },
      ]
  ```

### With an action in progress

Playground id: `with-an-action-in-progress` · uses setup 1

- `variant`: `icon`
- `ariaLabel`: `Chat actions`
- `items`:

  ```jsx
  [
        {
          type: 'group',
          text: 'Vote',
          items: [
          {
              type: 'icon-toggle-button',
              id: 'like',
              iconName: 'thumbs-up',
              pressedIconName: 'thumbs-up-filled',
              text: 'Like',
              pressed: false,
              loading: true,
              loadingText: 'Loading',
            },
            {
              type: 'icon-toggle-button',
              id: 'dislike',
              iconName: 'thumbs-down',
              pressedIconName: 'thumbs-down-filled',
              text: 'Dislike',
              pressed: true,
              disabled: true,
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
        {
          type: 'menu-dropdown',
          id: 'more-actions',
          text: 'More actions',
          items: [
            {
              id: 'add',
              iconName: 'add-plus',
              text: 'Add',
            },
            {
              id: 'remove',
              iconName: 'remove',
              text: 'Remove',
            },
          ],
        },
      ]
  ```

### With file upload

Playground id: `with-file-upload` · uses setup 2


### With custom style

Playground id: `with-custom-style` · uses setup 1

- `variant`: `icon`
- `ariaLabel`: `Main navigation`
- `items`:

  ```jsx
  [
          {
            type: 'icon-button',
            id: 'view-full',
            text: 'View',
            iconName: 'view-full',
          },
          {
            type: 'icon-button',
            id: 'folder',
            text: 'Folder',
            iconName: 'folder',
          },
          {
            type: 'icon-button',
            id: 'status-positive',
            text: 'Analytics',
            iconName: 'status-positive',
          },
        ]
  ```
- `style`:

  ```jsx
  {root:{background:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",borderRadius:"24px",paddingBlock:"12px",paddingInline:"16px",boxShadow:"0 2px 8px rgba(4, 125, 149, 0.15)",focusRing:{borderColor:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",borderWidth:"2px",borderRadius:"8px"}},item:{color:{active:"light-dark(white, rgb(242, 243, 243))",default:"light-dark(white, rgb(242, 243, 243))",hover:"light-dark(white, rgb(242, 243, 243))",disabled:"light-dark(rgb(156, 163, 175), rgb(107, 114, 128))"},focusRing:{borderColor:"light-dark(rgb(4, 125, 149), rgb(0, 184, 217))",borderWidth:"2px",borderRadius:"8px"}}}
  ```
