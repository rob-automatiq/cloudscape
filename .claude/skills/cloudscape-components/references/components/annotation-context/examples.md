# annotation-context playground examples

Snapshot of the named examples on https://cloudscape.design/components/annotation-context/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `children`:

  ```jsx
  <Form
    actions={
      <Hotspot side="right" hotspotId="create-bucket-button">
        <Button variant="primary">Create bucket</Button>
      </Hotspot>
    }
  >
    <SpaceBetween direction="vertical" size="l">
      <FormField label="Bucket name">
        <Hotspot side="right" hotspotId="bucket-name">
          <Input />
        </Hotspot>
      </FormField>
  
      <Checkbox checked={true}>
        Block public access
        <Hotspot side="right" hotspotId="block-public-access-checkbox" />
      </Checkbox>
    </SpaceBetween>
  </Form>
  ```

### With warning alert

Playground id: `with-warning-alert`

- `children`:

  ```jsx
  <Checkbox>
    Block public access <Hotspot hotspotId="block-public-access-checkbox" direction="right"/>
  </Checkbox>
  ```

### With code snippet

Playground id: `with-code-snippet`

- `children`:

  ```jsx
  <Hotspot hotspotId="inline-policy-input">
    <Textarea />
  </Hotspot>
  ```
- `currentTutorial`:

  ```jsx
  {
    tasks: [
      {
  	  title: "Create access policy",
        steps: [
          {
            title: 'Add permission for SNS to access ',
            content: (
              <>
                Enter the following inline policy to allow read-only access to the
                IAM console.
                <pre>
                  <code>{`{
    "Version": "2012-10-17",
    "Statement": {
      "Effect": "Allow",
      "Action": [
        "iam:Get*",
        "iam:List*",
        "iam:Generate*"
      ],
      "Resource": "*"
    }
  }`}</code>
                </pre>
              </>
            ),
            hotspotId: 'inline-policy-input',
          },
          {
            title: 'Create policy',
            content: 'Submit the form to create the policuy.',
            hotspotId: 'create-policy-button',
          },
        ],
      },
    ]
  }
  ```

### With finish button

Playground id: `with-finish-button`

- `children`:

  ```jsx
  <Container
    header={
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Header description="Select download to save a local copy of the transcription.">
          Transcription preview
        </Header>
        <Hotspot hotspotId="transcription-job-details-transcription-preview" direction="right" />
      </div>
    }
  >
      machine learning is employed in a range of computing tasks where designing and programming explicit
      algorithms with good performance is difficult or infeasible Example Applications include email filtering
      detection of network intruders and computer vision Machine learning is closely related to computational
      statistics which also focuses on predictions making through the use of computer It has strong ties to
      mathematical optimization which delivers methods theory and application domains to the field
  </Container>
  ```
- `currentTutorial`:

  ```jsx
  {
    tasks: [
      {
        title: "View transcription details",
        steps: [
          { 
            title: "Navigate to details page",
            content: "Click on the resource name to see resource details.",
            hotspotId: 'transcription-jobs-new-transcription-job-name'
          },
          {
            title: 'See preview',
            content: "Preview your transcribed text.",
            hotspotId: 'transcription-job-details-transcription-preview',
          },
        ],
      },
    ]
  }
  ```
