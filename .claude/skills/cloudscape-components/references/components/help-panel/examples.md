# help-panel playground examples

Snapshot of the named examples on https://cloudscape.design/components/help-panel/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### With header, content, and footer

Playground id: `with-header,-content,-and-footer`

- `header`: `<h2>Help panel title (h2)</h2>`
- `children`:

  ```jsx
  
          <div>
            <p>
              This is a paragraph with some <b>bold text</b> and also some{' '}
              <i>italic text</i>.
            </p>
  
            <h3>h3 section header</h3>
            <ul>
              <li>Unordered list item.</li>
              <li>Unordered list item.</li>
            </ul>
  
            <h4>h4 section header</h4>
            <p>
              Code can be formatted as lines of code or blocks of code. Add
              inline code <code>like this</code> using a{' '}
              <code>{'<code>'}</code> tag.
              <pre>
                Or format blocks of code (like this) using a{' '}
                <code>{'<pre>'}</code> tag.
              </pre>
            </p>
  
            <h5>h5 section header</h5>
            <dl>
              <dt>This is a term</dt>
              <dd>This is its description.</dd>
              <dt>This is a term</dt>
              <dd>This is its description</dd>
            </dl>
          </div>
          
  ```
- `footer`:

  ```jsx
  
          <div>
            <h3>
              Learn more <Icon name="external" size="inherit" />
            </h3>
            <ul>
              <li>
                <a href="">Link to documentation</a>
              </li>
              <li>
                <a href="">Link to documentation</a>
              </li>
            </ul>
          </div>
          
  ```

### Loading state

Playground id: `loading-state`

- `loading`: `true`
