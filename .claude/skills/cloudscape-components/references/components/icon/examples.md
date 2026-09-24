# icon playground examples

Snapshot of the named examples on https://cloudscape.design/components/icon/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Settings

Playground id: `settings`

- `size`: `normal`
- `variant`: `normal`
- `name`: `settings`

### Subtle Search

Playground id: `subtle-search`

- `size`: `normal`
- `variant`: `subtle`
- `name`: `search`

### External Link

Playground id: `external-link`

- `size`: `normal`
- `variant`: `link`
- `name`: `external`

### Big Disabled Lock

Playground id: `big-disabled-lock`

- `size`: `big`
- `variant`: `disabled`
- `name`: `lock-private`

### Large Error Status

Playground id: `large-error-status`

- `size`: `large`
- `variant`: `error`
- `name`: `status-negative`

### With custom SVG icon

Playground id: `with-custom-svg-icon`

- `svg`:

  ```jsx
  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              focusable="false"
              key="0"
            >
              <g>
                <line x1="5.5" y1="12" x2="5.5" y2="15" />
                <line x1="0.5" y1="15" x2="10.5" y2="15" />
                <rect x="1" y="5" width="9" height="7" />
                <polyline points="5 4 5 1 14 1 14 8 10 8" />
              </g>
            </svg>
          
  ```
