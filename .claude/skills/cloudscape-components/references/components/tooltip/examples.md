# tooltip playground examples

Snapshot of the named examples on https://cloudscape.design/components/tooltip/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- `tooltipVisible` (boolean, held in state): `false`
- `getTrack` (function): `() => ref.current`
- `onEscape` (function): `() => setTooltipVisible(false)`
- Wrapper:

  ```jsx
  {/* UseRef is a playground helper. In your code, use: const ref = useRef(null) */}
  <UseRef>
    {(ref) => (
      <span
        ref={ref}
        onPointerEnter={() => setTooltipVisible(true)}
        onPointerLeave={() => setTooltipVisible(false)}
        onFocus={() => setTooltipVisible(true)}
        onBlur={() => setTooltipVisible(false)}
      >
        <Button
          variant="icon"
          iconName="settings"
          ariaLabel="Settings"
          ariaDescribedby="settings-tooltip-description"
        />
        <span id="settings-tooltip-description" hidden={true}>
          {content}
        </span>
        {tooltipVisible && <Tooltip />}
      </span>
    )}
  </UseRef>
  ```

## Examples

### Icon button with tooltip

Playground id: `icon-button-with-tooltip`

- `content`: `Opens the settings panel`
- `position`: `top`
- Note shown with example:

  ```jsx
  (0,c.jsx)(function(){return(0,c.jsxs)(u.default,{statusIconAriaLabel:"Info",children:[(0,c.jsx)("code",{children:"UseRef"})," is a playground helper. In your code, use ",(0,c.jsx)("code",{children:"useRef()"})," directly."]})},{})
  ```
