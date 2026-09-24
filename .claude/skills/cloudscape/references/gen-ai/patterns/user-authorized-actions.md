# User authorized actions

> Source: https://cloudscape.design/gen-ai/patterns/user-authorized-actions/ (fetched 2026-09-24)

Best practices for building experiences where generative AI needs ongoing user authorization to invoke tools or run commands during a session.

## Key UX concepts

### Match authorization to risk level

Present the level of friction appropriate to the action's potential impact. Routine tool calls and commands use a scope selector. Irreversible actions require explicit confirmation input.

### Reduce repeated friction

When an agent calls the same tool multiple times in a session, let users grant session-level trust so the agent can proceed without repeated prompts.

### Communicate consequences

Before authorization, clearly communicate whether changes can be reversed, what happens if something goes wrong, and any long-term impacts of the change. This helps users decide how much trust to grant.

### Keep users in control

Always provide clear scoped access, full access or exit. If the user declines, make sure the agent acknowledges it.

## Building blocks

A B C D E F G H I
#### A. Authorization dialog

Display a dialog above the prompt input to allow users to authorize tool or command calls when an AI invokes it.

#### B. Title

Describes what the agent wants to do. For example, use *Allow * *tool-name** ? * for tool authorization, use *Allow this command? * for command authorization.

#### C. Description - optional

A short explanation of what this tool or command does. Use regular body text. When builders need to provide additional context that is secondary for the user, show an expandable section below the description.

#### D. Command body  - optional

When a command is too long to fit in the title of the dialog, the complete command string appears in a code block underneath the title.

#### E. Expandable section - optional

When additional details are needed (such as parameters, metadata, or output), use an expandable section below the description. This keeps the dialog compact by default while allowing users to inspect details when needed.

#### F. Scope selector

A compact [Select](../../components/select/guidelines.md) component that determines how long the permission persists. Options vary by use case.

- **Allow this time:**   Grants permission for this single invocation only. The next time the agent calls the same tool or command, the authorization dialog appears again.
- **Allow for this chat: **   Grants permission for all subsequent invocations of the same tool or command within the current conversation. The agent runs the tool automatically without prompting again.
- **Always allow:**   Grants persistent permission for all future invocations of the same tool or command, across all conversations.

#### G. Action buttons

- **Cancel:**   Dismisses the dialog. Agent then acknowledges the dismissal in the conversation. For example: *Got it, skipping that step.*
- **Allow: **   Approves the action at the selected scope. dialog dismisses immediately.
- **Skip: **   Skip is used for bulk authorization. For example, when the agent needs authorization for multiple tools, it allows user to selectively deny individual tools while continuing to review the remaining ones.

#### H. Pagination - optional

Pagination is used for bulk tool authorization, for example, when the agent needs authorization for multiple tools, the dialog shows one tool at a time with pagination controls in the header. Users can navigate between tools, approve or skip each one individually.

#### I. Close button

Always present in the top-right corner of the dialog. Dismisses the entire authorization flow. The close button is always visible regardless of use case to maintain consistency.

## Common use cases

## Tool authorization

Use when an agent needs to invoke a tool (MCP server, API integration) during a workflow. The user sees the tool name and decides whether to allow it. When the user first invokes the tool, the authorization dialog appears with the tool name. The user selects a permission scope and approves or cancels. When the same tool is invoked subsequently in the current session, and if the user previously selected "Allow for this chat", the tool runs automatically. Display an inline confirmation in the conversation. For example, if the MCP is involved during the [thinking](thinking.md) stages of the agent, display a step stating the tool name and requisite details.

## Single tool authorization

The agent requests permission to invoke a certain tool. The title shows the tool name in inline code format.

## Bulk authorization (multiple tools)

The agent needs to run several tools. Instead of grouping them into a single approval, the dialog shows one tool at a time with pagination. The user can Allow or Skip each tool individually, selecting different scope settings per tool if desired.

## CLI command authorization

Use when an agent needs to run a command such as a CLI command. Display the command in the authorization dialog so the user can verify what will be executed before approving. For short commands (under ~40 characters) display the command in the title. For long commands, use a generic title with the full command as a code block in the body of the dialog.

## Short command

The command is brief enough to display in the title. A description explains what the command does.

## Long command

The command is too long for the title. A generic title is used and the full command is displayed in a code block in the body. A description below explains what the command does.

## General guidelines

### Do

- Show the tool or command name in `awsui-inline-code`   format to visually distinguish it from surrounding text.
- Dismiss the dialog immediately when the user selects Action buttons. Don't show a loading state or success indicator.
- Always show the close button on the authorization dialog.
- Show a description explaining what the tool or command does. This helps users who may not recognize the tool name.
- If the user cancels, have the agent acknowledge in the conversation. For example, *Got it, skipping that step.*

### Don't

- Don't show the authorization dialog for a tool that is already trusted for the session. Instead, let the agent execute the tool automatically, and display a confirmation in chat or [thinking](thinking.md)   trace.
- Don't show the scope selector if your system does not support persisting preferences.

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

#### Authorization dialog title

- Use the format: *Allow * *tool-or-command-name* *?*  

  - For example: *Allow * *npm test* *? *

#### Scope selector options

- Allow this time, Allow for this chat, Always allow

## Accessibility guidelines

### General accessibility guidelines

- Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.
- Make sure to define ARIA labels aligned with the language context of your application.
- Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.
- Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

### Component-specific guidelines

- When the dialog appears, focus moves to the dialog.
- When a confirmation input is present (critical action variant), Enter triggers form submission only after the confirmation phrase matches. The Allow button remains disabled until the input is validated.
- Focus returns to the chat input when the dialog is dismissed.
