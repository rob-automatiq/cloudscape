# key-value-pairs playground examples

Snapshot of the named examples on https://cloudscape.design/components/key-value-pairs/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default layout

Playground id: `default-layout`

- `columns`: `3`
- `items`:

  ```jsx
  [
        {
          label: 'Distribution ID',
          value: 'E1WG1ZNPRXT0D4',
          info: (
            <Link variant="info" href="#">
              Info
            </Link>
          ),
        },
        {
          label: 'ARN',
          value: (
            <CopyToClipboard
              copyButtonAriaLabel="Copy ARN"
              copyErrorText="ARN failed to copy"
              copySuccessText="ARN copied"
              textToCopy="arn:service23G24::111122223333:distribution/23E1WG1ZNPRXT0D4"
              variant="inline"
            />
          ),
        },
        {
          label: 'Status',
          value: <StatusIndicator>Available</StatusIndicator>,
        },
        {
          label: 'SSL Certificate',
          id: 'ssl-certificate-id',
          value: <ProgressBar value={30} additionalInfo="Additional information" description="Progress bar description" ariaLabelledby="ssl-certificate-id" />,
        },
        {
          label: 'Price class',
          value: 'Use only US, Canada, Europe',
        },
        {
          label: 'CNAMEs',
          value: (
            <Link external={true} href="#">
              abc.service23G24.xyz
            </Link>
          ),
        },
        {
          label: (
            <SpaceBetween direction="horizontal" size="xxs" alignItems="center">
              <div key="label">IP Addresses</div>
              <Icon key="icon" name="external" />
            </SpaceBetween>
          ),
          value: (
            <SpaceBetween size="xxxs">
              <Link target="_blank" href="#" variant="secondary">
                192.168.0.1
              </Link>
              <Link target="_blank" href="#" variant="secondary">
                192.168.0.2
              </Link>
              <Link target="_blank" href="#" variant="secondary">
                192.168.0.3
              </Link>
            </SpaceBetween>
          ),
        },
      ]
      
  ```

### Group layout

Playground id: `group-layout`

- `columns`: `2`
- `items`:

  ```jsx
  [
        {
          type: 'group',
          title: 'Column Title 1',
          items: [
            {
              label: 'Label for key 1.1',
              value: 'Value 1',
            },
            {
              label: 'Label for key 1.2',
              value: <StatusIndicator>Value for positive status</StatusIndicator>,
            },
          ],
        },
        {
          type: 'group',
          title: 'Column Title 2',
          items: [
            {
              label: 'Label for key 2.1',
              value: 'Value',
            },
            {
              label: 'Label for key 2.2',
              value: (
                <Link external={true} href="#" ariaLabel="Label for key 2.2">
                  Value with external link
                </Link>
              ),
            },
          ],
        },
        {
          type: 'group',
          title: 'Column Title 3',
          items: [
            {
              label: 'Label for key 3.1',
              value: 'Value',
            },
            {
              label: 'Label for key 3.2',
              value: <StatusIndicator>Value for positive status</StatusIndicator>,
            },
          ],
        },
        {
          type: 'group',
          title: 'Column Title 4',
          items: [
            {
              label: 'Label for key 4.1',
              value: 'Value',
            },
            {
              label: 'Label for key 4.2',
              value: (
                <Link external={true} href="#" ariaLabel="Label for key 4.2">
                  Value with external link
                </Link>
              ),
            },
          ],
        },
      ]
  ```

### Combined layout

Playground id: `combined-layout`

- `columns`: `4`
- `items`:

  ```jsx
  [
        {
          label: 'ARN',
          value: (
            <CopyToClipboard
              copyButtonAriaLabel="Copy ARN"
              copyErrorText="ARN failed to copy"
              copySuccessText="ARN copied"
              textToCopy="arn:service23G24::111122223333:distribution/23E1WG1ZNPRXT0D4"
              variant="inline"
            />
          ),
        },
        {
          label: 'Status',
          value: <StatusIndicator>Available</StatusIndicator>,
        },
        {
          label: 'CloudWatch monitoring',
          value: (
            <StatusIndicator type="in-progress">
              In progress
            </StatusIndicator>
          ),
        },
        {
          label: 'Registered container instances',
          value: '-'
        },
        {
          type: 'group',
          title: 'Services',
          items: [
            {
              label: 'Draining',
              value: '-'
            },
            {
              label: 'Active',
              value: '-'
            }
          ]
        },
        {
          type: 'group',
          title: 'Health check',
          items: [
            {
              label: 'Healthy',
              value: '-',
            },
            {
              label: 'Unhealthy',
              value: '-',
            },
          ],
        },
        {
          type: 'group',
          title: 'Tasks',
          items: [
            {
              label: 'Pending',
              value: '-',
            },
            {
              label: 'Running',
              value: '-',
            }
          ]
        },
        {
          type: 'group',
          title: 'Databases',
          items: [
            {
              label: 'Pending',
              value: '-',
            },
            {
              label: 'Running',
              value: '-',
            }
          ]
        }
      ]
  ```
