# tutorial-panel playground examples

Snapshot of the named examples on https://cloudscape.design/components/tutorial-panel/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Tutorial list

Playground id: `tutorial-list`


### First tutorial launched

Playground id: `first-tutorial-launched`


### Tutorial completed

Playground id: `tutorial-completed`

- `tutorials`:

  ```jsx
  [
  	  {
  		title: 'Transcribe audio',
  		completed: true,
  		description: (
  		  <>
  			<Box variant="p" color="text-body-secondary" padding={{ top: 'n' }}>
  			  In this tutorial you will learn how to:
  			</Box>
  			<ul>
  			  <li>
  				<Box variant="span" color="text-body-secondary">
  				  Transcribe an audio file from Amazon S3 to text
  				</Box>
  			  </li>
  			  <li>
  				<Box variant="span" color="text-body-secondary">
  				  View the transcribed text
  				</Box>
  			  </li>
  			</ul>
  		  </>
  		),
  		completedScreenDescription:
  		  'You now know how to transcribe text from audio with Amazon Transcribe.',
  		prerequisitesAlert: null,
  		learnMoreUrl:
  		  'https://aws.amazon.com/getting-started/hands-on/create-audio-transcript-transcribe/',
  		tasks: []
  	  }
    ]
  ```
