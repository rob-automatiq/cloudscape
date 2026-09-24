# Feedback mechanisms

> Source: https://cloudscape.design/patterns/general/user-feedback/ (fetched 2026-09-24)

Ways to communicate specific messages to a user in an interface.

## Patterns

Consider the context and use case when you choose an appropriate pattern for communicating a message to users.

### Alert

A brief message that provides information or instructs users to take a specific action.

[View Documentation](../../components/alert/guidelines.md)

### Flashbar

Flashbar - Displays one or more status notifications that communicate critical task operation status - errors, success, in-progress, and info. The info flashbar also announces entire service launch in beta or preview.

[View Documentation](../../components/flashbar/guidelines.md)

### Spinner

A compact, looped animation giving the user feedback that a process is currently running.

[View Documentation](../../components/spinner/guidelines.md)

### Progress bar

Informs the user about the progress of an operation with a known duration.

[View Documentation](../../components/progress-bar/guidelines.md)

## Criteria

|  | Alert | Flashbar | Spinner | Progress bar |
| --- | --- | --- | --- | --- |
| Context | Place in context of the page or element that requires the user's attention. For example, at the top of a dashboard or next to an input field in a form. | Place at the top of the page to notify about status notification of an action result. For example, to indicate the completion of a process after a creation flow. | Place in context of the element that was used to initiate the operation. | Place in context on the page or in a flash message. |
| Type of feedback | Info, warning, success, error | Info, warning, success, error, progress | In progress | In progress |
| Determinate or indeterminate | - | Determinate or indeterminate | Determinate or indeterminate | Determinate |
| How long is the action? | - | - | Within 1-10 seconds or for indeterminate operation | 10 or more seconds |

### Context

The context informs where the pattern is located in the user interface and when it appears.

- Alerts are contextual. Place alerts in the context of a particular element or section. For example, place an alert next to an input field in a form to inform the user about the cost of a choice.
- Place flashbars at the top of the page (for example, to communicate status notification and entire service launch in beta or preview).
- For progress bars/spinner, place it in alerts and flashbars message when communicating in-progress task status, or contextually in a workflow on a page (for example, uploading an image)

### Type of feedback

Each of these patterns can be used for a different type of feedback:

- Flashbars and alerts support different types of messages such as [error](errors/error-messages.md)   , warning, info, and can be used to display the respective message in them
- Spinner and progress bars are used to provide information to users regarding tasks in progress.

### Determinate or indeterminate

Use a progress bar for operations with a determinate duration (for example: 5 minutes), or duration that can be calculated based on available data (for example: file upload speed). If the operation duration isn't quantifiable, use a spinner instead.

### Determinate feedback duration

There are three main time limits (which are determined by human perceptual abilities) to keep in mind when optimizing web and application performance. ( [Research from Nielsen Norman Group](https://www.nngroup.com/articles/response-times-3-important-limits/) )

1. Less than 1 second  

  - Don't display any type of feedback
  - Block the user from doing anything else until the operation completes
2. 1-10 seconds  

  - Display a spinner to provide feedback about the operation in progress
  - For compact layouts, place the spinner inside the [button](../../components/button/guidelines.md)     component
  - Block the user from doing anything else until the operation completes
3. Longer than 10 seconds  
  10 seconds is approximately the limit for keeping the user's attention focused. For longer delays, users will want to perform other tasks while waiting for the operation to complete. We recommend giving feedback indicating when the operation is expected to be complete.  

  - Show a progress bar
  - Allow the user to perform other tasks (such as navigate to other pages) while the operation is in progress
