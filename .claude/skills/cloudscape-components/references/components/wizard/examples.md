# wizard playground examples

Snapshot of the named examples on https://cloudscape.design/components/wizard/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `steps`:

  ```jsx
  `
  [
    {
      title: 'Choose instance type',
      info: <Link variant="info">Info</Link>,
      description:
        'Each instance type includes one or more instance sizes, allowing you to scale your resources to the requirements of your target workload.',
      content: ${l}
    },
    {
      title: 'Add storage',
      content: ${l},
      isOptional: true
    },
    {
      title: 'Configure security group',
      content: ${l},
      isOptional: true
    },
    {
      title: 'Review and launch',
      content: ${c}
    }
  ]`
  ```
- `i18nStrings`:

  ```jsx
  {
    stepNumberLabel: stepNumber => `Step ${stepNumber}`,
    collapsedStepsLabel: (stepNumber, stepsCount) =>
      `Step ${stepNumber} of ${stepsCount}`,
    skipToButtonLabel: (step, stepNumber) => `Skip to ${step.title}`,
    navigationAriaLabel: 'Steps',
    cancelButton: 'Cancel',
    previousButton: 'Previous',
    nextButton: 'Next',
    optional: 'optional'
  }
  ```
- `allowSkipTo`: `true`

### Review page

Playground id: `review-page`

- `steps`:

  ```jsx
  `
          [
            {
              title: 'Choose instance type',
              content: ${l}
            },
            {
            title: 'Review and launch',
            content: ${c}
            }
          ]`
  ```
- `i18nStrings`:

  ```jsx
  {
    stepNumberLabel: stepNumber => `Step ${stepNumber}`,
    collapsedStepsLabel: (stepNumber, stepsCount) =>
      `Step ${stepNumber} of ${stepsCount}`,
    skipToButtonLabel: (step, stepNumber) => `Skip to ${step.title}`,
    navigationAriaLabel: 'Steps',
    cancelButton: 'Cancel',
    previousButton: 'Previous',
    nextButton: 'Next',
    optional: 'optional'
  }
  ```
- `activeStepIndex`: `1`
