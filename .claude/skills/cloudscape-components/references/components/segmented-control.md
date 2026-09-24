# SegmentedControl

```ts
import SegmentedControl from '@cloudscape-design/components/segmented-control'
import type { SegmentedControlProps } from '@cloudscape-design/components/segmented-control'
```

Generated from `@cloudscape-design/components@3.0.1382` `segmented-control/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ariaLabelledby?`**: `string`
  Adds aria-labelledby to the component. Create a visually hidden element with an ID and set this property to that ID. If you don't want the label to be visible in narrow containers, use this property instead of `label`.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`label?`**: `string`
  Defines the label of the entire segmented control. In the standard view (that is, all individual segments are visible),
  this label is used as `aria-label` on the group of segments. In a narrow container, where this component is displayed as a select component,
  the label is visible and attached to the select component, unless `ariaLabelledBy` is defined. Don't use `label` and `ariaLabelledBy` at the same time.
- **`options?`**: `ReadonlyArray<SegmentedControlProps.Option>`
  An array of objects representing options. Only up to 6 options are supported.
  Each segment has the following properties:
  
  - `id` (string) - The ID of the segment.
  - `disabled` [boolean] - (Optional) Determines whether the segment is disabled, which prevents the user from selecting it.
  - `disabledReason` (string) - (Optional) Displays tooltip near the segment when disabled. Use to provide additional context.
  - `iconName` (string) - (Optional) Specifies the name of the icon, used with the [icon component](/components/icon/).
  - `iconAlt` (string) - (Optional) Specifies alternate text for the icon when using `iconUrl`, or `iconName` without `text`.
             This is required when you use an icon without `text`.
  - `iconUrl` (string) - (Optional) Specifies the URL of a custom icon.
  - `iconSvg` (ReactNode) - (Optional) Custom SVG icon. Equivalent to the `svg` slot of the [icon component](/components/icon/).
  - `text` (string) - (Optional) Specifies the text of the segment.
- **`selectedId`**: `string | null`
  ID of the selected option. If you want to clear the selection, use `null`.
- **`style?`**: `SegmentedControlProps.Style` _(@awsuiSystem core)_
  An object containing CSS properties to customize the segmented control's visual appearance.
  Refer to the [style](/components/segmented-control/?tabId=style) tab for more details.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<SegmentedControlProps.ChangeDetail>`
  Called when the user selects a different segment.

## Types

Supporting types from `SegmentedControlProps` (verbatim):

```ts
export declare namespace SegmentedControlProps {
  interface Option {
    id: string;
    disabled?: boolean;
    disabledReason?: string;
    iconName?: IconProps.Name;
    iconAlt?: string;
    iconUrl?: string;
    iconSvg?: React.ReactNode;
    text?: string;
  }
  interface ChangeDetail {
    selectedId: string;
  }
  interface Style {
    root?: {
      borderRadius?: string;
    };
    segment?: {
      background?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      color?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
      borderRadius?: string;
      fontSize?: string;
      paddingBlock?: string;
      paddingInline?: string;
    };
  }
}
```
