# grid playground examples

Snapshot of the named examples on https://cloudscape.design/components/grid/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Static grid

Playground id: `static-grid`

- `gridDefinition`: `[{colspan:2},{colspan:10}]`
- `children`:

  ```jsx
  
              <div>col-2</div>
              <div>col-10</div>
            
  ```

### Basic responsive grid

Playground id: `basic-responsive-grid`

- `gridDefinition`: `[{colspan:{default:3,xxs:9}},{colspan:{default:9,xxs:3}}]`
- `children`:

  ```jsx
  
              <div>default-3 xxs-9</div>
              <div>default-9 xxs-3</div>
            
  ```

### Stacking elements

Playground id: `stacking-elements`

- `gridDefinition`: `[{colspan:{default:12,xxs:6}},{colspan:{default:12,xxs:6}}]`
- `children`:

  ```jsx
  
              <div>default-12 xxs-6</div>
              <div>default-12 xxs-6</div>
            
  ```

### Grid without gutters

Playground id: `grid-without-gutters`

- `gridDefinition`: `[{colspan:4},{colspan:4},{colspan:4},{colspan:4},{colspan:4},{colspan:4}]`
- `children`:

  ```jsx
  
              <div>col-4</div>
              <div>col-4</div>
              <div>col-4</div>
              <div>col-4</div>
              <div>col-4</div>
              <div>col-4</div>
            
  ```
- `disableGutters`: `true`

### Offset

Playground id: `offset`

- `gridDefinition`: `[{colspan:4,offset:{xxs:2}},{colspan:4,offset:{xxs:2,default:4}}]`
- `children`:

  ```jsx
  
              <div>col-4 offset-xxs-2</div>
              <div>col-4 offset-xxs-2 offset-default-4</div>
            
  ```

### Push and pull

Playground id: `push-and-pull`

- `gridDefinition`: `[{colspan:9,push:{xxs:3}},{colspan:3,pull:{xxs:9}}]`
- `children`:

  ```jsx
  
              <div>col-4 push-xxs-3</div>
              <div>col-4 pull-xxs-9</div>
            
  ```
