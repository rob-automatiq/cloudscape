# skeleton playground examples

Snapshot of the named examples on https://cloudscape.design/components/skeleton/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1


### Setup 2

- Wrapper: `<Box variant="text-body-m"><Skeleton /></Box>`

### Setup 3

- Wrapper: `<Box variant="h2" tagOverride="div"><Skeleton /></Box>`

## Examples

### Default

Playground id: `default` · uses setup 1


### Responsive sizing: body text

Playground id: `responsive-sizing:-body-text` · uses setup 2


### Responsive sizing: heading level 2

Playground id: `responsive-sizing:-heading-level-2` · uses setup 3

- `width`: `10em`

### Variant sizing: heading level 3

Playground id: `variant-sizing:-heading-level-3` · uses setup 1

- `width`: `20em`
- `variant`: `text-heading-m`

### Custom size

Playground id: `custom-size` · uses setup 1

- `width`: `200px`
- `height`: `100px`
