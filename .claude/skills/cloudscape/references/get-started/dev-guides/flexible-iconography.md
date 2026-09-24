# Flexible iconography

> Source: https://cloudscape.design/get-started/dev-guides/flexible-iconography/ (fetched 2026-09-24)

Learn about using custom icons with Cloudscape and how to integrate them in your application.

## Overview

Cloudscape includes a set of built-in icons that are used across many components. These are available to be used in your application with components like icon and button where a configurable icon name property exists.

For applications that require one or more different icons, you can use the [icon provider](../../components/icon-provider/guidelines.md) component. This component allows you to replace built-in icons by name with a custom SVG (for example, replacing all *search* icons), or register new custom icons to extend the built-in set. All uses of that icon inside Cloudscape components that are child elements to icon provider will be replaced with the custom SVG.

Refer to our guidelines for custom icons in the [iconography](../../foundation/visual-foundation/iconography.md) pattern.

## Usage

The icon provider component can be used at any level within an application, such as defining a full suite of custom SVGs at the top level or only a single custom SVG for a single component. For nested contexts icons can be reset with null values either for the entire definition, or for a specific icon name.

### Overriding built-in icons

Below is an example of using custom icons at an application level.

```
import IconProvider, { IconProviderProps } from '@cloudscape-design/components/icon-provider';

const customIcons: IconProviderProps.Icons = {
   // This object has a structure like: <built-in-icon-name>: <custom-svg-element>
   search: <CustomSearchSvg />,
   close: <CustomCloseSvg />
}

// At the top of your application tree:
<IconProvider icons={customIcons}>
  // Any instances of search or close icons will use the custom SVGs provided
  <App />
</IconProvider>
```

Icon provider can be used to update icons for only a specific component.

```
const customIcons: IconProviderProps.Icons = {
   search: <CustomSearchSvg />,
   close: <CustomCloseSvg />
}

<IconProvider icons={customIcons}>
    <TextFilter
        filteringText={filteringText}
        onChange={({ detail }) => setFilteringText(detail.filteringText)}
    />
</IconProvider>
```

This can also be nested within an existing icon provider to chain custom icons.

```
const customTextFilterIconDefinition: IconProviderProps.Icons = {
   search: <CustomSearchSvg />,
   close: <CustomCloseSvg />
}

const customCloseIconDefinition: IconProviderProps.Icons = {
   close: <AlternateCustomCloseSvg />
}

<IconProvider icons={customTextFilterIconDefinition}>
    // This TextFilter will have the custom search icon and close icon
    <TextFilter
        filteringText={filteringText}
        onChange={({ detail }) => setFilteringText(detail.filteringText)}
    />
    <IconProvider icons={customCloseIconDefinition}>
        // This TextFilter will have the search icon from the previous definition
        // and a new close icon
        <TextFilter
            filteringText={filteringText}
            onChange={({ detail }) => setFilteringText(detail.filteringText)}
        />
    </IconProvider>
</IconProvider>
```

Nesting an icon provider with a null value for the icons property will reset the icons in child components back to the Cloudscape built-in icons.

```
const customIcons: IconProviderProps.Icons = {
   search: <CustomSearchSvg />,
   close: <CustomCloseSvg />
}

<IconProvider icons={customIcons}>
  // Any instances of search or close icons will use the custom SVGs provided
  <App />

  // By providing a null value the icons in the below IconProvider will be reset
  // to the Core built-in icons
  <IconProvider icons={null}>
     // This TextFilter will use the Core built-in icons
     <TextFilter
        filteringText={filteringText}
        onChange={({ detail }) => setFilteringText(detail.filteringText)}
     />
  </IconProvider>
</IconProvider>
```

If only a specific icon should be reset that can be done by passing a null value with the specific icon name, this will reset just that icon and maintain any other custom icons from the parent context.

```
const customTextFilterIconDefinition: IconProviderProps.Icons = {
   search: <CustomSearchSvg />,
   close: <CustomCloseSvg />
}

const customCloseIconDefinition: IconProviderProps.Icons = {
   close: null
}

<IconProvider icons={customTextFilterIconDefinition}>
    // This TextFilter will have the custom search icon and close icon
    <TextFilter
        filteringText={filteringText}
        onChange={({ detail }) => setFilteringText(detail.filteringText)}
    />
    <IconProvider icons={customCloseIconDefinition}>
        // This TextFilter will have the search icon from the previous definition
        // and the Core built-in close icon
        <TextFilter
            filteringText={filteringText}
            onChange={({ detail }) => setFilteringText(detail.filteringText)}
        />
    </IconProvider>
</IconProvider>
```

### Special component icon overrides

Some Cloudscape components render icons whose meaning depends on state. For example, expand toggles use one icon and rotate it, and tables use the same caret for sorting indicators and expand toggles. A by-name override through icons is imprecise here: it can't distinguish the states the animation expresses, and it affects every element sharing the name.

The `componentIcons` property addresses this by targeting the icon slot of a specific component. Each entry is a render function that receives the icon's current state and returns the icon to display:

- The custom icon replaces the default rendering entirely, including its animation - so it must represent every state. Return null from any state to fall back to the default icon.
- Use `size="inherit"`   on a custom `<Icon>`   (or provide a plain SVG) so it matches the default icon size.
- Component icons apply to nested usage (for example, expandable sections inside side navigation) and are inherited by nested providers - the closest provider wins. Set the property, or an individual component entry, to null to reset to the defaults.

```
import Icon from '@cloudscape-design/components/icon';
import IconProvider from '@cloudscape-design/components/icon-provider';

const expandToggle = ({ expanded }) => <Icon name={expanded ? 'treeview-collapse' : 'treeview-expand'} size="inherit" />;

<IconProvider componentIcons={{  'expandable-section': { expandToggle },  table: { expandToggle } }}>
  {content}
</IconProvider>
```

### Registering new icons

You can also define new icons in addition to the built-in set. The solution uses TypeScript module augmentation to ensure the new icons are type-safe.

```
import Button from '@cloudscape-design/components/button';
import IconProvider, { defineIcons, type IconMap, } from '@cloudscape-design/components/icon-provider';

// 1. Define custom icons with defineIcons (preserves literal key types)
const myIcons = defineIcons({
  "new-icon": <MySvgComponent />,
});

// 2. Augment IconRegistry so custom names are type-safe everywhere
declare module "@cloudscape-design/components/icon-provider" {
  interface IconRegistry extends IconMap<typeof myIcons> {}
}

// 3. Wrap app in IconProvider - same as overriding built-in icons
<IconProvider icons={myIcons}>
  <App />
</IconProvider>

// 4. Use custom icon names anywhere - full autocomplete, type-checked
<Button iconName="new-icon">Click me</Button>
```

### Customizing sizes and stroke widths

In addition to replacing icon SVGs, icon provider allows you to customize icon sizes and stroke widths across your application or within a scoped region of the UI.

```
<IconProvider
  sizes={{ normal: 14, medium: 18 }}
  strokeWidths={{ normal: 1.5, medium: 1.5 }}
>
  <App />
</IconProvider>
```

This is useful for dense UI regions where icons need to be smaller without changing individual component props. Providers can be nested for scoped overrides - a child provider inherits its parent's values and can selectively override specific sizes.

```
<IconProvider sizes={{ normal: 18 }}>
  <App />

  // Scoped: smaller icons in a dense table region
  <IconProvider sizes={{ normal: 12 }} strokeWidths={{ normal: 1.5 }}>
    <Table ... />
  </IconProvider>
</IconProvider>
```
