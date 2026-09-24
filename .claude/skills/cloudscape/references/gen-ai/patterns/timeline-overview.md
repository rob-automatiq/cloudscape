# Timeline overview

> Source: https://cloudscape.design/gen-ai/patterns/timeline-overview/ (fetched 2026-09-24)

A pattern for presenting agent events, actions, and conversation milestones in a chronological timeline view.

## Key UX concepts

### Keep users informed

A timeline view provides context to communicate what happened and the events that occurred in a chronological order. Timestamps, status icons, labels, or participant indicators serve as contextual signals that make events self-explanatory without requiring additional information. Each event reveals what happened at every step, including intermediate actions and decisions.

### Recognition over recall

Specific details from past conversations are difficult to recall, especially across multiple AI sessions over time. Dividers, timestamps, and anchor links keep information visible and recognizable in place. The timeline presents events as a traceable sequence rather than isolated data points. Navigation flows forward and backward through context without requiring memorization of prior states.

## Building blocks

A B C D E F
#### A. Header

Title of the timeline panel. For example, *Event log* or *Overview*.

#### B. Timestamp - optional

The timestamp indicates when the event occurred. It is displayed in a fixed-width left column. The timestamp is not required in the timeline when it is already shown within the chat or when the label functions as an anchor link. Follow the guidelines for [Timestamps](../../patterns/general/timestamps.md).

#### C. Icon

The icon serves as a visual indicator of the event type within [Steps](../../components/steps/guidelines.md) . Icons differentiate between events at distinct points in the timeline and provide additional context about each event.

- For example, the success icon shows when the agent is running correctly, or the process has finished without errors.

#### D. Label

This can be anchor links or plain text depending on the context. For example, an anchor link can navigate the user back to the corresponding message in the chat overview.

#### E. Divider - optional

Use divider with label to group events by day when activity spans multiple dates. Follows guidance in [Timestamps](../../patterns/general/timestamps.md) , displaying *Today* , *Yesterday* , or an absolute date.

#### F. Filter - optional

A set of filters supports narrowing events by date or tags.

- For example, a [Select filter](../../components/select/guidelines.md)   can be used at the top of the timeline view when you need to filter the event list by category or type.

## Common use cases

### Event log

Use event log timeline to display a chronological log of events, like agent event trails, deployment logs, or system activity feeds. For example, an agent event log displays the details of each step and activity that an agent performed.

Event log Filter All events Filter Yesterday
1. 2:34:01 PM   Initializing workspace environment
2. 2:35:08 PM   Creating src directory structure
3. 2:35:40 PM   Installing npm dependencies
4. 2:37:42 PM   Dependency installation complete
5. 2:39:51 PM   Writing unit test for TodoList

Today
1. 9:12:04 AM   Running ESLint on source files
2. 9:12:12 AM   Lint check passed
3. 9:12:18 AM   Compiling TypeScript to JavaScript
4. 9:15:49 AM   Rebuilding project
5. 9:16:04 AM   Build completed successfully

```
import React, { useState } from 'react';

import Divider from '@cloudscape-design/components/divider';
import Drawer from '@cloudscape-design/components/drawer';
import Select, { SelectProps } from '@cloudscape-design/components/select';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Steps from '@cloudscape-design/components/steps';

interface EventLogEntry {
  timestamp: string;
  text: string;
}

interface EventLogGroup {
  label: string;
  entries: EventLogEntry[];
}

const eventLogGroups: EventLogGroup[] = [
  {
    label: 'Yesterday',
    entries: [
      { timestamp: '2:34:01 PM', text: 'Initializing workspace environment' },
      { timestamp: '2:35:08 PM', text: 'Creating src directory structure' },
      { timestamp: '2:35:40 PM', text: 'Installing npm dependencies' },
      { timestamp: '2:37:42 PM', text: 'Dependency installation complete' },
      { timestamp: '2:39:51 PM', text: 'Writing unit test for TodoList' },
    ],
  },
  {
    label: 'Today',
    entries: [
      { timestamp: '9:12:04 AM', text: 'Running ESLint on source files' },
      { timestamp: '9:12:12 AM', text: 'Lint check passed' },
      { timestamp: '9:12:18 AM', text: 'Compiling TypeScript to JavaScript' },
      { timestamp: '9:15:49 AM', text: 'Rebuilding project' },
      { timestamp: '9:16:04 AM', text: 'Build completed successfully' },
    ],
  },
];

const filterOptions: SelectProps.Options = [
  { value: 'all', label: 'All events' },
  { value: 'Yesterday', label: 'Yesterday' },
  { value: 'Today', label: 'Today' },
];

export default function EventLog() {
  const [selectedFilter, setSelectedFilter] = useState<SelectProps.Option>(filterOptions[0] as SelectProps.Option);

  const visibleGroups =
    selectedFilter.value === 'all'
      ? eventLogGroups
      : eventLogGroups.filter(group => group.label === selectedFilter.value);

  return (
    <Drawer header="Event log">
      <SpaceBetween size="s">
        <Select
          selectedOption={selectedFilter}
          onChange={({ detail }) => setSelectedFilter(detail.selectedOption)}
          options={filterOptions}
          inlineLabelText="Filter"
        />

        {visibleGroups.map(group => (
          <SpaceBetween key={group.label} size="s">
            <Divider>{group.label} </Divider>
            <Steps
              ariaLabel={`${group.label} events`}
              steps={group.entries.map(entry => ({
                status: 'log',
                statusIconAriaLabel: 'Log',
                annotation: entry.timestamp,
                header: entry.text,
              }))}
            />
          </SpaceBetween>
        ))}
      </SpaceBetween>
    </Drawer>
  );
}
```

### Conversation overview

Timelines provide an overview of a conversation. For example, a long, task-oriented agent-user conversation generates important events and metadata. An overview of such a conversation where each event item in the timeline is an anchor link can help users browse through the exchange and navigate to any specific message via the anchor link.

Overview
1. Build a todo app for petcare
2. A pet care todo app - nice
3. Provided preferences: Keep it simple, Save on this device only
4. Created project: PetCareTodo
5. Ready when you are - let me know if you'd like to adjust anything
6. Start building

```
import React from 'react';

import Drawer from '@cloudscape-design/components/drawer';
import Icon from '@cloudscape-design/components/icon';
import Link from '@cloudscape-design/components/link';
import Steps, { StepsProps } from '@cloudscape-design/components/steps';

interface OverviewEvent {
  status: StepsProps.Step['status'];
  statusIconAriaLabel: string;
  text: string;
  href?: string;
}

const overviewEvents: OverviewEvent[] = [
  { status: 'log', statusIconAriaLabel: 'User message', text: 'Build a todo app for petcare' },
  { status: 'log', statusIconAriaLabel: 'Log', text: 'A pet care todo app - nice', href: '#/message/1' },
  {
    status: 'log',
    statusIconAriaLabel: 'User message',
    text: 'Provided preferences: Keep it simple, Save on this device only',
  },
  { status: 'success', statusIconAriaLabel: 'Success', text: 'Created project: PetCareTodo' },
  {
    status: 'log',
    statusIconAriaLabel: 'Log',
    text: "Ready when you are - let me know if you'd like to adjust anything",
  },
  { status: 'log', statusIconAriaLabel: 'User message', text: 'Start building' },
];

export default function ConversationOverview() {
  return (
    <Drawer header="Overview">
      <Steps
        ariaLabel="Conversation overview"
        steps={overviewEvents.map(event => ({
          status: event.status,
          statusIconAriaLabel: event.statusIconAriaLabel,
          header: event.href ? (
            <Link href={event.href} variant="secondary">
              {event.text}
            </Link>
          ) : (
            event.text
          ),
        }))}
        renderStep={step => {
          if (step.statusIconAriaLabel === 'User message') {
            return {
              header: step.header,
              icon: <Icon name="user-profile" variant="subtle" ariaLabel="User message" />,
            };
          }
          if (step.statusIconAriaLabel === 'Success') {
            return {
              header: step.header,
              icon: <Icon name="status-positive" variant="success" ariaLabel="Success" />,
            };
          }
          return { header: step.header };
        }}
      />
    </Drawer>
  );
}
```

## General guidelines

### Do

- Use timeline view when events are generated over time and users need to track what happened and when.
- Use a [divider](../../components/divider/guidelines.md)   when events in a timeline span multiple days. The date-based categorization helps users navigate to the correct events.
- Use status based icons to communicate the outcome of action oriented events. For example, in conversation overview, the event where an agent successfully created a resource begins with the success status icon.
- Use user-profile icon to indicate user-initiated actions.

### Don't

- Don't use timestamps when time is already shown within the chat or when the label functions as an anchor link.
- Don't enable auto-scroll unless the user is already at the bottom of the timeline view.

## Writing guidelines

### General writing guidelines

- Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.
- Use end punctuation, except in [headers](../../components/header/guidelines.md)   and [buttons](../../components/button/guidelines.md)   . Don't use exclamation points.
- Use present-tense verbs and active voice.
- Don't use *please*   , *thank you*   , ellipsis ( *...*   ), ampersand ( *&*   ), *e.g.*   , *i.e.*   , or *etc.*   in writing.
- Avoid directional language.  

  - For example: use *previous*     not *above*     , use *following*     not *below*    .
- Use device-independent language.  

  - For example: use *choose*     or *select*     not *click*    .

### Component-specific guidelines

#### Event labels

- Keep labels concise and action-oriented. Use past tense to describe what happened.  

  - For example: Use *Created environment: CloudAppConfig.*
- For user-initiated actions, start with a verb that describes what the user did.  

  - For example: Use *Provided preferences.*

#### Anchor link labels

- In the chat overview use case, labels are anchor links that navigate back to the corresponding message in the conversation. Write them to clearly identify which message they point to.

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.
