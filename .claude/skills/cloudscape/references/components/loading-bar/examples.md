# loading-bar playground examples

Snapshot of the named examples on https://cloudscape.design/components/loading-bar/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1

- Wrapper:

  ```jsx
  <LiveRegion>
    <Box margin={{ bottom: "xs", left: "l" }} color="text-body-secondary">
      Generating a response
    </Box>
    <LoadingBar />
  </LiveRegion>
  ```

### Setup 2


## Examples

### Default

Playground id: `default` · uses setup 1

- `variant`: `gen-ai`

### With mask

Playground id: `with-mask` · uses setup 2

- `variant`: `gen-ai-masked`
