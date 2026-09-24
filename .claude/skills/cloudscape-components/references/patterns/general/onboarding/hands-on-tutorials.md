# Hands-on tutorials

> Source: https://cloudscape.design/patterns/general/onboarding/hands-on-tutorials/ (fetched 2026-09-24)

Hands-on tutorials provide contextual suggestions at decision points in workflows, and  also clarify all the steps that need to be completed in order to achieve an objective.

 [View demo](https://cloudscape.design/examples/react/onboarding.html)
## Building blocks

Hands-on tutorials have three key states: tutorials list, tutorial launched, and tutorial completed.

## Tutorial list

Shows a list of all existing tutorials within the service. This is the first state that users see.

A B C D
#### A. Help panel

A help panel is a container that appears on the right side of the App Layout. It displays help content that relates to a concept, term, setting, option, or task on the corresponding console page.

#### B. Tutorial panel

A tutorial panel is a container that appears on the right side of the [App layout](../../../components/app-layout/guidelines.md) . It contains contextual hands-on tutorials that help users learn how to achieve objectives within the service.

The tutorial panel lists all existing tutorials for a service.

The tutorials relevant to the current page are displayed at the top of the list.

#### C. Tabs

When a tutorial is launched, users can switch between the tutorial and help panel for additional information.

#### D. Info links - optional

Info links allow users to switch between the help panel and the tutorial panel when a tutorial is active. Switching to the help panel doesn't dismiss the tutorial.

## Tutorial launched

The state when a tutorial is launched and active.

E F G
#### E. Tutorial panel

Shows the tasks that need to be completed as part of the tutorial and the steps that make up each task.

#### F. Hotspot & annotation popover

Hotspots surface annotation popovers.

Annotation popovers provide contextual, step-by-step recommendations for all steps of a tutorial.

#### G. Info links in annotation popovers - optional

Use info links in annotation popovers to lead users to the corresponding help panel content. The corresponding help panel content provides additional information about the recommended option as well as other available options. For more information, see the guidelines for [onboarding](../onboarding.md).

## Tutorial completed

The state when a tutorial has been successfully completed.

H
#### H. Tutorial panel

After the user has completed all the tasks of a particular tutorial, the tutorial panel displays a success message and a way to provide feedback on the completed tutorial.

## Hands-on tutorials logic

### Hands-on tutorials keep track of the status of tasks, not progress of individual steps

- Each tutorial is composed of tasks, and each task is composed of steps. A task is achieved when users complete a series of steps.  

  - For example:    

    - *Task - Creating a resource*
    - *Step - Naming the resource during resource creation *
- The hands-on tutorials pattern relies on page level [validation](../errors/validation.md)   for validating data on the page and surfacing an error message if needed.  

  - For example: When a required field is left empty.
- The status of each tutorial is either pending or completed. If users dismiss a tutorial before finishing it, its status will be tracked as pending.

### Whenever a new tutorial is introduced, keep the tutorial panel open by default

- Display the tutorial panel as open by default whenever a new tutorial is introduced. The panel should remain open on all pages, until manually closed. Once closed, the panel should remain closed.
- When a tutorial is launched, keep the tutorial panel open through all relevant pages as users move through the workflow.
- When first introducing the tutorial panel, add a *-new*   label to the tab header and keep it for 30 days. See the guidance for [announcing new features](../announcing-new-features.md)  .
- Additionally, add the *-new*   label to the title of any new tutorial and keep it for 30 days.

*An open tutorial panel with the -new label to indicate that this is a new feature. *

### Enable different configurations than the recommended ones in tutorials

Don't prevent users from selecting configurations that are different from the tutorial's recommendation. Instead, inform users about potential consequences, if any. In general, allow users to select configurations that are different from what is recommended, and still proceed with the tutorial. There might be some instances where selecting a non-recommended configuration can prevent users from achieving the goal they want. In such a case, add a [warning alert](../../../components/alert/guidelines.md) to the annotation popover to communicate potential consequences.

Don't add the warning alert for steps where selecting a non-recommended configuration doesn't affect the end goal.

Bucket Option 1 Block public access Create bucket
```
/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import {
  Alert,
  AnnotationContext,
  Button,
  Checkbox,
  Form,
  FormField,
  Hotspot,
  Link,
  Select,
  SpaceBetween,
} from '@cloudscape-design/components';

export default function HandsOnTutorial() {
  return (
    <AnnotationContext
      onExitTutorial={() => {}}
      onStartTutorial={() => {}}
      currentTutorial={{
        completed: false,
        completedScreenDescription: '',
        description: '',
        title: '',
        learnMoreUrl: '',
        tasks: [
          {
            title: 'Create a bucket',
            steps: [
              {
                title: 'Name the bucket',
                content: (
                  <SpaceBetween size="s">
                    <>Choose the Standard storage class, to be able to frequently retrieve data.</>
                    <Alert statusIconAriaLabel="Warning" type="warning">
                      Selecting a different "Resource type" from the recommendation of the tutorial can result in your
                      data being more difficult to access.
                    </Alert>
                  </SpaceBetween>
                ),
                hotspotId: 'bucket-name',
              },
              {
                title: 'Block all public access',
                content: (
                  <>
                    Keep this checkbox selected to prevent unauthorized access to your bucket.{' '}
                    <Link variant="info">Info</Link>
                  </>
                ),
                hotspotId: 'block-public-access-checkbox',
                warningAlert:
                  'Selecting a different value for this checkbox from the recommendation of the tutorial can result in your data being exposed to unauthorized access.',
              },
              {
                title: 'Create bucket',
                content: 'Submit the form to create the bucket.',
                hotspotId: 'create-bucket-button',
              },
            ],
          },
        ],
      }}
      i18nStrings={{
        stepCounterText: (stepIndex, totalStepCount) => 'Step ' + (stepIndex + 1) + '/' + totalStepCount,
        taskTitle: (taskIndex, taskTitle) => 'Task ' + (taskIndex + 1) + ': ' + taskTitle,
        labelHotspot: (openState, stepIndex, totalStepCount) =>
          openState
            ? 'close annotation for step ' + (stepIndex + 1) + ' of ' + totalStepCount
            : 'open annotation for step ' + (stepIndex + 1) + ' of ' + totalStepCount,
        nextButtonText: 'Next',
        previousButtonText: 'Previous',
        finishButtonText: 'Finish',
        labelDismissAnnotation: 'dismiss annotation',
      }}
    >
      <Form
        actions={
          <Hotspot side="right" hotspotId="create-bucket-button">
            <Button variant="primary">Create bucket</Button>
          </Hotspot>
        }
      >
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Bucket">
            <Hotspot side="right" hotspotId="bucket-name">
              <Select
                selectedOption={{ label: 'Option 1', value: '1' }}
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                  { label: 'Option 4', value: '4' },
                  { label: 'Option 5', value: '5' },
                ]}
              />
            </Hotspot>
          </FormField>

          <Checkbox checked={true}>Block public access</Checkbox>
        </SpaceBetween>
      </Form>
    </AnnotationContext>
  );
}
```

*A warning alert within an announcement popover.*

## Key UX concepts

### Hands-on tutorials are not a replacement for the help system

Hands-on tutorials serve the specific purpose of providing actionable suggestions at decision points in a particular workflow. Any help content that relates to explaining general terms or concepts within the interface should be clarified by using the elements of the [help system](../help-system.md) . Information presented in the hands-on tutorials should require minimal effort to read and act upon. See the guidance for [onboarding](../onboarding.md).

### Don't introduce tutorials for very simple flows

Tutorials create additional clicks and can be more obtrusive than helpful if used for very simple flows. Tutorials should be introduced to improve comprehension and add value that can't be achieved with the use of existing UI elements in complex flows.

## General guidelines

### Do

- If a tutorial includes a step that needs to be completed in another service, provide guidance for users to navigate to the correct service and return back to the tutorial after the step is completed. The underlying service should open in a new tab.
- When introducing multiple tutorials, have the most relevant tutorials at the top of the list, with their cards expanded by default. Have all other tutorial cards collapsed at the bottom of the list.
- Surface [hotspots](../../../components/hotspot/guidelines.md)   only when a tutorial is active. When the tutorial is dismissed, remove the hotspots and display the tutorials list state.

### Don't

- Avoid repeating concepts that should be handled by other UI elements on the page. See guidance for [help system](../help-system.md)  .
- Don't display multiple annotation popovers at once. The previous popover closes when a new one is opened.
- Avoid providing guidance for optional actions within the flow, unless completing that action can be beneficial to the user's overall comprehension of the service.
- Don't hide tutorials that can't be launched yet. Use an [alert](../../../components/alert/guidelines.md)   to communicate prerequisites for launching the tutorial instead.

## Writing guidelines

### General writing guidelines

- Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.
- Use end punctuation, except in [headers](../../../components/header/guidelines.md)   and [buttons](../../../components/button/guidelines.md)   . Don't use exclamation points.
- Use present-tense verbs and active voice.
- Don't use *please*   , *thank you*   , ellipsis ( *...*   ), ampersand ( *&*   ), *e.g.*   , *i.e.*   , or *etc.*   in writing.
- Avoid directional language.  

  - For example: use *previous*     not *above*     , use *following*     not *below*    .
- Use device-independent language.  

  - For example: use *choose*     or *select*     not *click*    .

### Component-specific guidelines

#### Tutorial panel

- Follow the guidelines for [tutorial panel](../../../components/tutorial-panel/guidelines.md)  .

#### Annotation popover

- Follow the guidelines for [annotation context](../../../components/annotation-context/guidelines.md)  .

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

## Related patterns

### Help system

The help system pattern allows users to easily and quickly access help within the interface and current workflow.

[View Documentation](../help-system.md)

### Help panel

The panel displays help content that relates to a concept, term, setting, option, or task within the main page content.

[View Documentation](../../../components/help-panel/guidelines.md)

### Tutorial panel

The tutorial panel houses contextual [Hands-on tutorials](hands-on-tutorials.md) that help users learn how to use an application.

[View Documentation](../../../components/tutorial-panel/guidelines.md)

### Annotation context

The annotation context is an invisible layer on top of the interface. It tracks the progress of a launched tutorial and feeds dynamic content to the [Tutorial panel](../../../components/tutorial-panel/guidelines.md) in [Hands-on tutorials](hands-on-tutorials.md) . It also renders annotation popovers and hotspot icons.---

[View Documentation](../../../components/annotation-context/guidelines.md)

## Task 1: Create a bucket

Choose the Standard storage class, to be able to frequently retrieve data. Selecting a different "Resource type" from the recommendation of the tutorial can result in your data being more difficult to access. Step 1/3 Next
