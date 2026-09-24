# CodeEditor

```ts
import CodeEditor from '@cloudscape-design/components/code-editor'
import type { CodeEditorProps } from '@cloudscape-design/components/code-editor'
```

Generated from `@cloudscape-design/components@3.0.1382` `code-editor/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`ace`**: `any`
  The ace object.
- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaLabel?`**: `string`
  Adds `aria-label` to the code editor's textarea element.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`controlId?`**: `string`
  Specifies the ID of the native form element. You can use it to relate
  a label element's `for` attribute to this control.
  
  It defaults to an automatically generated ID that
  is provided by its parent form field component.
- **`editorContentHeight?`**: `number`
  Specifies the height of the code editor document.
- **`getModalRoot?`**: `PortalProps['getContainer']`
  Use this property to specify a different dynamic modal root for the dialog.
  The function will be called when a user clicks on the trigger button.
- **`i18nStrings?`**: `CodeEditorProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
  The object should contain, among others:
  
  * `loadingState` - Specifies the text to display while the component is loading.
  * `errorState` - Specifies the text to display if there is an error loading Ace.
  * `errorStateRecovery`: Specifies the text for the recovery button that's displayed next to the error text.
     Use the `recoveryClick` event to do a recovery action (for example, retrying the request).
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`language`**: `CodeEditorProps.Language`
  Specifies the programming language. You can use any of the programming languages supported by the `ace` object that you provide.
  Alternatively, this can be used to set a language that is not supported by the default `language` list. Make sure you've added the highlighting support for this language to the Ace instance.
  For more info on custom languages, see the [Code editor API](/components/code-editor?tabId=api) page.
- **`languageLabel?`**: `string`
  Specifies a custom label language. If set, it overrides the default language label.
- **`loading?`**: `boolean`
  Renders the code editor in a loading state.
- **`preferences?`**: `Partial<CodeEditorProps.Preferences>`
  Specifies the component preferences.
  
  If set to `undefined`, the component uses the following default value:
  
  ```
  {
    wrapLines: true,
    theme: 'dawn'
  }
  ```
  
  You can use any theme provided by Ace.
- **`removeModalRoot?`**: `PortalProps['removeContainer']`
  Use this property when `getModalRoot` is used to clean up the modal root
  element after a user closes the dialog. The function receives the return value
  of the most recent getModalRoot call as an argument.
- **`themes?`**: `CodeEditorProps.AvailableThemes`
  List of Ace themes available for selection in preferences dialog. Make sure you include at least one light and at
  least one dark theme. If not set explicitly, it will render all Ace themes available for selection, except
  "cloud_editor" and "cloud_editor_dark".
- **`value`**: `string`
  Specifies the content that's displayed in the code editor.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<CodeEditorProps.ChangeDetail>`
  An event handler called when the value changes.
  The event `detail` contains the current value of the code editor content.
  **Deprecated** Replaced by `onDelayedChange`.
- **`onDelayedChange?`**: `NonCancelableEventHandler<CodeEditorProps.ChangeDetail>`
  An event handler called when the value changes.
  The event `detail` contains the current value of the code editor content.
  A user interaction can cause multiple change events to be emitted by the Ace editor. They are batched together into a single `onDelayedChange` event to avoid bugs when controlling the `value` field.
- **`onEditorContentResize?`**: `NonCancelableEventHandler<CodeEditorProps.ResizeDetail>`
  Called when the user resizes the editor by dragging the resize icon.
  The event `detail` contains the new height of the editor in pixels.
- **`onPreferencesChange`**: `NonCancelableEventHandler<CodeEditorProps.Preferences>`
  Called when any of the preferences change.
  The event `detail` contains the value of all the preferences as submitted by the user.
- **`onRecoveryClick?`**: `NonCancelableEventHandler<void>`
  Called when the user clicks the recovery button in the error state.
  Use this to retry loading the code editor or to provide another option for the user to recover from the error.
- **`onValidate?`**: `NonCancelableEventHandler<CodeEditorProps.ValidateDetail>`
  Annotations returned from Ace syntax checker after code validation.

## Types

Supporting types from `CodeEditorProps` (verbatim):

```ts
export declare namespace CodeEditorProps {
  type Language = LiteralUnion<BuiltInLanguage, string>;
  type Theme = (typeof LightThemes)[number]['value'] | (typeof DarkThemes)[number]['value'];
  interface AvailableThemes {
    light: ReadonlyArray<string>;
    dark: ReadonlyArray<string>;
  }
  interface Preferences {
    wrapLines: boolean;
    theme: Theme;
  }
  interface I18nStrings {
    loadingState?: string;
    errorState?: string;
    errorStateRecovery?: string;
    editorGroupAriaLabel?: string;
    statusBarGroupAriaLabel?: string;
    cursorPosition?: (row: number, column: number) => string;
    errorsTab?: string;
    warningsTab?: string;
    preferencesButtonAriaLabel?: string;
    paneCloseButtonAriaLabel?: string;
    preferencesModalHeader?: string;
    preferencesModalCancel?: string;
    preferencesModalConfirm?: string;
    preferencesModalCloseAriaLabel?: string;
    preferencesModalWrapLines?: string;
    preferencesModalTheme?: string;
    preferencesModalLightThemes?: string;
    preferencesModalDarkThemes?: string;
    preferencesModalThemeFilteringPlaceholder?: string;
    preferencesModalThemeFilteringAriaLabel?: string;
    preferencesModalThemeFilteringClearAriaLabel?: string;
    resizeHandleAriaLabel?: string;
    resizeHandleTooltipText?: string;
  }
  interface ResizeDetail {
    height: number;
  }
  interface ChangeDetail {
    value: string;
  }
  interface ValidateDetail {
    annotations: Ace.Annotation[];
  }
  interface Ref {
    /**
     * Sets input focus onto the code editor control.
     */
    focus(): void;
  }
}
```
