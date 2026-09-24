# popover playground examples

Snapshot of the named examples on https://cloudscape.design/components/popover/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1


### Setup 2

- Wrapper: `<Box color="text-status-error"><Popover /></Box>`

## Examples

### Small

Playground id: `small` · uses setup 1

- `size`: `small`
- `position`: `top`
- `triggerType`: `custom`
- `dismissButton`: `false`
- `content`:

  ```jsx
  
            <StatusIndicator type="success">Code snippet copied</StatusIndicator>
          
  ```
- `children`: `<Button iconName="copy">Copy</Button>`

### Medium

Playground id: `medium` · uses setup 2

- `size`: `medium`
- `triggerType`: `text`
- `header`: `Memory Error`
- `content`:

  ```jsx
  This instance contains insufficient memory. Stop the instance, choose a different instance type with more memory, and restart it.
  ```
- `children`:

  ```jsx
  
              <StatusIndicator type="error">Error</StatusIndicator>
            
  ```

### Large

Playground id: `large` · uses setup 1

- `size`: `large`
- `fixedWidth`: `true`
- `triggerType`: `text`
- `header`: `Network interface eth0`
- `content`:

  ```jsx
  
            <KeyValuePairs
              columns={2}
              items={[
                {
                  label: 'Interface ID',
                  value: <Link href="#" variant="primary">eni-055da457bed9bbbe6</Link>
                },
                {
                  label: 'Private IP address',
                  value: '192.0.2.0'
                },
                {
                  label: 'VPC ID',
                  value: 'vpc-626163728'
                },
                {
                  label: 'Private DNS name',
                  value: 'example.com'
                },
                {
                  label: 'Attachment owner',
                  value: 'vpc-626163728'
                },
                {
                  label: 'Public IP address',
                  value: '198.51.100.0'
                },
                {
                  label: 'Attached',
                  value: 'May 4, 2010, 04:56 (UTC+3:30)'
                },
                {
                  label: 'Source/Dest. check',
                  value: 'true'
                },
                {
                  label: 'Delete on terminate',
                  value: 'true'
                },
                {
                  label: 'Description',
                  value: '-'
                }
              ]}
            />
          
  ```
- `children`: `eth0`
