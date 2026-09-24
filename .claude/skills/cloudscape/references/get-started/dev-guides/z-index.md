# Z-index

> Source: https://cloudscape.design/get-started/dev-guides/z-index/ (fetched 2026-09-24)

How to understand and control element stacking in Cloudscape.

## Introduction

Cloudscape uses z-index ranges to control how certain components stack on top of each other. Elements such as [dropdown lists](../../components/button-dropdown/guidelines.md) and [modals](../../components/modal/guidelines.md) should appear layered on top of other content, regardless of where they are located on a page.

If you set a custom z-index for any custom components or elements outside the system, consider these internal z-index ranges and ensure that your content stacks in the expected manner. In general, we recommend that you avoid using z-index unless absolutely necessary, and instead use other CSS properties to control your layout. When setting z-indexes, be aware of the ranges we use in our components. You can find those ranges in the section below.

## Ranges

### z-index: auto

If no other `z-index` is defined, all elements have the default `z-index` of `auto`.

### z-index: 800-850

Sticky elements:

- Table [header](../../components/header/guidelines.md)
- Table sticky columns
- [Modal](../../components/modal/guidelines.md)   footer
- [App layout](../../components/app-layout/guidelines.md)   notifications slot
- App layout navigation and tools panels
- App layout header
- [Split panel](../../components/split-panel/guidelines.md)

### z-index: 2000

Interactive elements that should appear above all content, remain visible, and be able to be interacted with:

- Dropdown ( [select](../../components/select/guidelines.md)   , [button dropdown](../../components/button-dropdown/guidelines.md)   , [multiselect](../../components/multiselect/guidelines.md)   , [autosuggest](../../components/autosuggest/guidelines.md)   , [property filter](../../components/property-filter/guidelines.md)   , [date picker](../../components/date-picker/guidelines.md)   , and [date range picker](../../components/date-range-picker/guidelines.md)   ) content
- [Popover](../../components/popover/guidelines.md)   content

### z-index: 4999-5000

Content that should focus the user and block all interaction with other elements:

- [Modal](../../components/modal/guidelines.md)   overlay
- Modal content

### z-index: 7000

Interactive elements, which ignore its parent [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) , that should appear above all content, remain visible, and be able to be interacted with:

 [Popover](../../components/popover/guidelines.md) content with `renderWithPortal` set to `true`
 [Copy to clipboard](../../components/copy-to-clipboard/guidelines.md) Popover content
