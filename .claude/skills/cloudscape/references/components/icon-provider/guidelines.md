# Icon provider

> Source: https://cloudscape.design/components/icon-provider/ (fetched 2026-09-24)

With the icon provider component, the built-in icons can be overridden with custom icons.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/icon-provider)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/icon-provider/index.html.json)

## Development guidelines

See the guidelines for [flexible iconography](../../get-started/dev-guides/flexible-iconography.md).

## General guidelines

### Do

- Use icons that align with their original intended purpose.
- Keep size values above 12px and stroke-width values above 1px to maintain icon clarity.
- Use whole-pixel or half-pixel stroke-width values (e.g., 1.5px, 2px) for crisp rendering.

### Don't

- Avoid using icons that are visually unclear or ambiguous.
- Don't use custom colors in icons, as color handling is managed by components.
- Don't use IconProvider when a standard Icon component with a custom SVG or URL would suffice.
