# Tooltip

> Source: https://cloudscape.design/components/tooltip/ (fetched 2026-09-24)

Displays text when users hover over or focus on an element.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/tooltip)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/tooltip/index.html.json)

## Development guidelines

Tooltips must support both pointer and keyboard interaction. The tooltip trigger must be a focusable element and must handle hover and focus events to control tooltip visibility. Create a ref for the tooltip trigger and pass it to the tooltip via `getTrack` , which returns the trigger element used for positioning and event coordination. Manage the tooltip's visibility state explicitly, and ensure the tooltip closes when the trigger loses focus, the pointer leaves the trigger, or the user presses the Escape key.

The tooltip is shown by attaching pointer ( `pointerenter` / `pointerleave` ) and focus ( `focus` / `blur` ) event handlers to the tracked element.

```
import Tooltip from '@cloudscape-design/components/tooltip';
import Button from '@cloudscape-design/components/button';
import { useRef, useState } from 'react';

function InteractiveTooltipExample() {
  const targetRef = useRef<HTMLSpanElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      ref={targetRef}
      onPointerEnter ={() => setShowTooltip(true)}
      onPointerLeave ={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <Button
        variant="icon"
        iconName="settings"
        ariaLabel="Settings"
        ariaDescribedby="settings-button-description"
      />
      <span id="settings-button-description" hidden>
        Open settings panel to configure your preferences
      </span>
      {showTooltip && (
        <Tooltip
          content="Open settings panel to configure your preferences"
          getTrack={() => targetRef.current}
          onEscape={() => setShowTooltip(false)}
        />
      )}
    </span>
  );
}

export default InteractiveTooltipExample;
```

When the visible target is not natively interactive (for example plain text or a disabled control), wrap it in a focusable element that preserves a visible focus outline.

```
import Tooltip from '@cloudscape-design/components/tooltip';
import { useRef, useState } from 'react';

function NonInteractiveTooltipExample() {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const fullText = 'Very long text that will be truncated when it exceeds the container width';

  return (
    <span
      ref={wrapperRef}
      tabIndex={0}
      role="group"
      onPointerEnter={() => setShowTooltip(true)}
      onPointerLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      className="truncated-text-class"
    >
      {fullText}
      {showTooltip && (
        <Tooltip
          content={fullText}
          getTrack={() => wrapperRef.current}
          onEscape={() => setShowTooltip(false)}
        />
      )}
    </span>
  );
}
```

The element provided to `getTrack` is used to position the tooltip. Ensure that this element's size closely matches the visible size of the tooltip trigger. If the tracked element's layout box is larger than the visible target, the tooltip may appear misaligned.

For detailed accessibility requirements and usage recommendations, see the <a href="/components/tooltip/?tabId=usage#component-specific-guidelines"> **Accessibility guidelines**</a> in the Usage tab.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

TooltipWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md)<HTMLElement> &#124; null | Returns the tooltip content element.Searches within this tooltip's scope to avoid conflicts with popovers. | - |
## Integration testing APIs

TooltipWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findContent | [ElementWrapper](../../get-started/testing/core-classes.md) | Returns the tooltip content element.Searches within this tooltip's scope to avoid conflicts with popovers. | - |
## General guidelines

### Do

- Use tooltips to provide brief, supplementary, and non-essential information. Users should be able to complete related tasks without viewing tooltip content.
- Use tooltips for clarification of icons, truncated text, or complex terminology.
- When possible, position tooltips in a way that doesn't block other interactive elements on the page.

### Don't

- Don't place interactive content inside of a tooltip. If you need to display interactive content, use a [popover](../popover/guidelines.md)   instead.
- Don't place redundant information or instructions inside tooltips that are already present on the element

## Features

- #### Content area

  Use the content area for supplementary information about the trigger element, such as additional context, or metadata.
- #### Position

  Defines where the tooltip will open in reference to its trigger. The tooltip can be placed in four positions: to the right, left, top, or bottom of the trigger. The tooltip defaults to showing to the top of its trigger.  

  If the tooltip does not fit on the screen using the set position, it will automatically reposition itself so the entire tooltip is shown in the viewport. In small viewports, the tooltip will shrink to fit the available viewport width.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

The tooltip trigger element must be focusable and support both keyboard and pointer interaction. Users must be able to:

- Show the tooltip via keyboard focus or pointer hover
- Hide the tooltip via keyboard blur, pointer leave, or the Escape key

Tooltip content is **not exposed to assistive technologies by default** . The trigger element must therefore provide an accessible name or description that matches the tooltip content:

- **Elements without visible labels**  
  Use `aria-label`   on the trigger element. The label serves as the primary accessible name and must match the tooltip text.
- **Elements with visible labels**  
  Use `aria-describedby`   on the trigger element to reference a description element that:  

  - Remains in the DOM at all times
  - Contains the same text as the tooltip
