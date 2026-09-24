# text-content playground examples

Snapshot of the named examples on https://cloudscape.design/components/text-content/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Basic typography

Playground id: `basic-typography`

- `children`:

  ```jsx
  
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <p>Paragraph</p>
            <p><strong>Strong text</strong></p>
            <p><small>Small text with a <a href="#">link</a></small></p>
            <p><a href="#">Link</a></p>
            <p><code>Code</code></p>
  
            <ul>
              <li>item of unordered list</li>
              <li>item of unordered list</li>
            </ul>
  
            <ol>
              <li>item of ordered list</li>
              <li>item of ordered list</li>
            </ol>
          
  ```
