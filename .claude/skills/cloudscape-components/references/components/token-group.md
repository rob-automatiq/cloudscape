# TokenGroup

```ts
import TokenGroup from '@cloudscape-design/components/token-group'
import type { TokenGroupProps } from '@cloudscape-design/components/token-group'
```

Generated from `@cloudscape-design/components@3.0.1382` `token-group/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`alignment?`**: `TokenGroupProps.Alignment`
  Specifies the direction in which tokens are aligned (`horizontal | vertical`).
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`disableOuterPadding?`**: `boolean`
  Removes any outer padding from the component.
  We recommend to always enable this property.
- **`i18nStrings?`**: `TokenGroupProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`items?`**: `ReadonlyArray<TokenGroupProps.Item>`
  An array of objects representing token items. Each token has the following properties:
  
  - `label` (string) - Title text of the token.
  - `description` (string) - (Optional) Further information about the token that appears below the label.
  - `disabled` [boolean] - (Optional) Determines whether the token is disabled.
  - `labelTag` (string) - (Optional) A label tag that provides additional guidance, shown next to the label.
  - `tags` [string[]] - (Optional) A list of tags giving further guidance about the token.
  - `dismissLabel` (string) - (Optional) Adds an `aria-label` to the dismiss button.
  - `iconName` (string) - (Optional) Specifies the name of an [icon](/components/icon/) to display in the token.
  - `iconAlt` (string) - (Optional) Specifies alternate text for a custom icon, for use with `iconUrl`.
  - `iconUrl` (string) - (Optional) URL of a custom icon.
  - `iconSvg` (ReactNode) - (Optional) Custom SVG icon. Equivalent to the `svg` slot of the [icon component](/components/icon/).
- **`limit?`**: `number`
  Specifies the maximum number of displayed tokens. If the property isn't set, all of the tokens are displayed.
- **`limitShowFewerAriaLabel?`**: `string`
  Adds an `aria-label` to the "Show fewer" button.
  Use to assign unique labels when there are multiple token groups with the same `limitShowFewer` label on one page.
- **`limitShowMoreAriaLabel?`**: `string`
  Adds an `aria-label` to the "Show more" button.
  Use to assign unique labels when there are multiple token groups with the same `limitShowMore` label on one page.
- **`readOnly?`**: `boolean`
  Specifies if the control is read-only, which prevents the
  user from modifying the value. A read-only control is still focusable.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onDismiss?`**: `NonCancelableEventHandler<TokenGroupProps.DismissDetail>`
  Called when the user clicks on the dismiss button. The token won't be automatically removed.
  Make sure that you add a listener to this event to update your application state.

## Types

Supporting types from `TokenGroupProps` (verbatim):

```ts
export declare namespace TokenGroupProps {
  type Alignment = 'horizontal' | 'vertical';
  interface Item {
    label?: string;
    disabled?: boolean;
    labelTag?: string;
    description?: string;
    iconAlt?: string;
    iconName?: IconProps.Name;
    iconUrl?: string;
    iconSvg?: React.ReactNode;
    tags?: ReadonlyArray<string>;
    dismissLabel?: string;
  }
  interface DismissDetail {
    itemIndex: number;
  }
  interface I18nStrings {
    limitShowFewer?: string;
    limitShowMore?: string;
  }
}
```
