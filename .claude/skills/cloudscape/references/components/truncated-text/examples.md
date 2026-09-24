# truncated-text playground examples

Snapshot of the named examples on https://cloudscape.design/components/truncated-text/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper:

  ```jsx
  <div className="truncated-text-container">
    <TruncatedText>
      {children}
    </TruncatedText>
  </div>
  ```

## Examples

### CSS truncated text

Playground id: `css-truncated-text`

- `children`: `arn:aws:lambda:us-east-1:123456789012:function:my-cool-function`
- Note shown with example:

  ```jsx
  (0,c.jsx)(c.Fragment,{children:(0,c.jsx)(function(){return(0,c.jsx)("style",{children:`
        .truncated-text-container {
          max-width: 200px;
        }
      `})},{})})
  ```
