# navigable-group playground examples

Snapshot of the named examples on https://cloudscape.design/components/navigable-group/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Simple

Playground id: `simple`

- `getItemKey`: `s=>s.dataset.testid`
- `children`:

  ```jsx
  
        <div role="toolbar" aria-label="Menu">
          <SpaceBetween direction="horizontal" size="xs">
            <Button data-testid="one">One</Button>
            <Button data-testid="two">Two</Button>
            <Button data-testid="three">Three</Button>
          </SpaceBetween>
        </div>
      
  ```

### Menu bar

Playground id: `menu-bar`

- `getItemKey`: `s=>s.dataset.testid`
- `children`:

  ```jsx
  
        <div role="menubar" aria-label="Menu">
          <SpaceBetween direction="horizontal" size="xs">
            <Button
              data-testid="settings"
              variant="icon"
              iconName="settings"
              ariaLabel="Settings"
              nativeButtonAttributes={{ role: "menuitem" }}
            />
            <Button
              data-testid="code"
              variant="icon"
              iconName="script"
              ariaLabel="Code"
              nativeButtonAttributes={{ role: "menuitem" }}
            />
            <Button
              data-testid="security"
              variant="icon"
              iconName="security"
              ariaLabel="Security"
              nativeButtonAttributes={{ role: "menuitem" }}
            />
          </SpaceBetween>
        </div>
      
  ```

### Vertical

Playground id: `vertical`

- `getItemKey`: `s=>s.dataset.testid`
- `navigationDirection`: `vertical`
- `children`:

  ```jsx
  
        <div role="toolbar" aria-orientation="vertical" aria-label="Menu">
          <SpaceBetween direction="vertical" size="xxs">
            <Button data-testid="settings" variant="link" href="#" iconName="settings">Settings</Button>
            <Button data-testid="code" variant="link" href="#" iconName="script">Code</Button>
            <Button data-testid="security" variant="link" href="#" iconName="security">Security</Button>
          </SpaceBetween>
        </div>
      
  ```

### Mixed components

Playground id: `mixed-components`

- `getItemKey`: `s=>s.dataset.testid`
- `children`:

  ```jsx
  
        <div role="toolbar" aria-label="Menu">
          <SpaceBetween
            direction="horizontal"
            size="xs"
            alignItems="center"
          >
            <Button data-testid="button">Button</Button>
            <ButtonDropdown
              data-testid="dropdown"
              items={[
                { id: "1", text: "One" },
                { id: "2", text: "Two" },
                { id: "3", text: "Three" }
              ]}
            >
              Dropdown
            </ButtonDropdown>
            <Link
              href="#"
              data-testid="link"
              variant="primary"
            >
              Link
            </Link>
            <Button
              variant="inline-icon"
              iconName="settings"
              ariaLabel="Settings"
              data-testid="iconbutton"
            />
          </SpaceBetween>
        </div>
      
  ```
