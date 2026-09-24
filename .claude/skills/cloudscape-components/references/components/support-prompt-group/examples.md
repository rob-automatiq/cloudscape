# support-prompt-group playground examples

Snapshot of the named examples on https://cloudscape.design/components/support-prompt-group/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Vertical alignment (default)

Playground id: `vertical-alignment-(default)`

- `items`:

  ```jsx
  [{text:"How can I get started using Amazon S3?",id:"get-started"},{text:"How reliable is S3?",id:"s3-reliable"}]
  ```
- `ariaLabel`: `Default support prompt`

### Horizontal alignment

Playground id: `horizontal-alignment`

- `items`:

  ```jsx
  [{text:"Create image",id:"create-image"},{text:"Brainstorm",id:"brainstorm"},{text:"Summarize text",id:"summarize"}]
  ```
- `ariaLabel`: `Horizontal support prompt`
- `alignment`: `horizontal`

### With icons

Playground id: `with-icons`

- `items`:

  ```jsx
  [{text:"Create image",id:"create-image",iconName:"gen-ai",iconPosition:"right"},{text:"Brainstorm",id:"brainstorm",iconName:"share",iconPosition:"right"},{text:"Summarize text",id:"summarize",iconName:"file",iconPosition:"right"}]
  ```
- `ariaLabel`: `Support prompt with icons`
- `alignment`: `horizontal`

### With arbitrary content and icons

Playground id: `with-arbitrary-content-and-icons`

- `items`:

  ```jsx
  [
  	     {
  	       text: (
  	         <SpaceBetween direction="vertical" size="xxxs">
  	           <span>Explain my cost trends</span>
  	           <Box fontSize="body-s" color="text-body-secondary">
  	             Visualizes spending over time
  	           </Box>
  	         </SpaceBetween>
  	       ),
  	       iconName: 'edit',
  	       iconPosition: 'right',
  	       id: 'explain-cost-trends',
  	     },
  	     {
  	       text: (
  	         <SpaceBetween direction="vertical" size="xxxs">
  	           <span>Analyze my EC2 instance performance</span>
  	           <Box fontSize="body-s" color="text-body-secondary">
  	             Reviews compute metrics and optimization
  	           </Box>
  	         </SpaceBetween>
  	       ),
  	       iconName: 'edit',
  	       iconPosition: 'right',
  	       id: 'analyze-ec2-instance-performance',
  	     },
  	     {
  	       text: (
  	         <SpaceBetween direction="vertical" size="xxxs">
  	           <span>Generate a cost optimization report</span>
  	           <Box fontSize="body-s" color="text-body-secondary">
  	             Actionable recommendations to reduce spending
  	           </Box>
  	         </SpaceBetween>
  	       ),
  	       iconName: 'edit',
  	       iconPosition: 'right',
  	       id: 'generate-cost-optimization-report',
  	     },
  	   ]
  ```
- `ariaLabel`: `Support prompt with ReactNode text and icons`
