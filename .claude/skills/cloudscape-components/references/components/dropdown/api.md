# Dropdown

```ts
import Dropdown from '@cloudscape-design/components/dropdown'
import type { DropdownProps } from '@cloudscape-design/components/dropdown'
```

Generated from `@cloudscape-design/components@3.0.1382` `dropdown/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the dropdown content element.
- **`ariaLabel?`**: `string`
  Adds `aria-label` to the dropdown content element.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the dropdown content element.
- **`ariaRole?`**: `string`
  Adds `role` to the dropdown content element.
- **`content?`**: `React.ReactNode`
  Main content of the dropdown.
- **`expandToViewport?`**: `boolean`
  By default, the dropdown height is constrained to fit inside the height of its next scrollable container element.
  Enabling this property will allow the dropdown to extend beyond that container by using fixed positioning and
  [React Portals](https://reactjs.org/docs/portals.html).
  
  Set this property if the dropdown would otherwise be constrained by a scrollable container,
  for example inside table and split view layouts.
  
  We recommend you use discretion, and don't enable this property unless necessary
  because fixed positioning results in a slight, visible lag when scrolling complex pages.
- **`footer?`**: `React.ReactNode`
  Optional footer content that stays fixed at the bottom while
  scrolling dropdown content.
  Typically used to display loading status or action buttons.
- **`header?`**: `React.ReactNode`
  Optional header content that stays fixed at the top while
  scrolling dropdown content.
- **`maxWidth?`**: `number`
  Maximum width for the dropdown in pixels. If no value is specified, the
  dropdown will expand to fit its content.
- **`minWidth?`**: `number`
  Minimum width for the dropdown in pixels. If no value is specified, the
  dropdown will shrink to fit its content.
- **`open?`**: `boolean`
  Open state of the dropdown.
- **`style?`**: `DropdownProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the dropdown's visual appearance.
- **`trigger`**: `React.ReactNode`
  The trigger element that opens/closes the dropdown.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onEscape?`**: `NonCancelableEventHandler`
  Called when the user presses the Escape key while the dropdown is open.
  The dropdown does not close automatically - the `open` prop needs to be
  updated to actually close the dropdown.
- **`onFocusEnter?`**: `NonCancelableEventHandler<Pick<React.FocusEvent, 'target' | 'relatedTarget'>>`
  Called when any element inside the dropdown content gains focus.
  This includes nested interactive elements like buttons, links, or inputs.
- **`onFocusLeave?`**: `NonCancelableEventHandler<Pick<React.FocusEvent, 'target' | 'relatedTarget'>>`
  Called when focus leaves the dropdown content entirely.
- **`onOutsideClick?`**: `NonCancelableEventHandler<null>`
  Called when the user clicks outside the dropdown. The dropdown does not
  close automatically - the `open` prop needs to be updated to actually close
  the dropdown.

## Types

Supporting types from `DropdownProps` (verbatim):

```ts
export declare namespace DropdownProps {
  interface Style {
    dropdown?: {
      /**
       * Background color of the dropdown content wrapper.
       */
      background?: string;
      /**
       * Border color of the dropdown content wrapper.
       */
      borderColor?: string;
      /**
       * Border radius of the dropdown content wrapper.
       */
      borderRadius?: string;
      /**
       * Border width of the dropdown content wrapper.
       */
      borderWidth?: string;
    };
  }
}
```
