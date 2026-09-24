# S3ResourceSelector

```ts
import S3ResourceSelector from '@cloudscape-design/components/s3-resource-selector'
import type { S3ResourceSelectorProps } from '@cloudscape-design/components/s3-resource-selector'
```

Generated from `@cloudscape-design/components@3.0.1382` `s3-resource-selector/interfaces.d.ts`. Descriptions are the library's own JSDoc (the same text as the API tab on cloudscape.design).

## Properties

- **`alert?`**: `React.ReactNode`
  Specifies additional information about component status.
- **`ariaDescribedby?`**: `string`
  Adds `aria-describedby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for each element that you want to use as a description
  and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
- **`ariaLabel?`**: `string`
  Adds `aria-label` to the component.
- **`ariaLabelledby?`**: `string`
  Adds `aria-labelledby` to the component. If you're using this component within a form field,
  don't set this property because the form field component automatically sets it.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`bucketsIsItemDisabled?`**: `(item: S3ResourceSelectorProps.Bucket) => boolean`
  Optionally overrides whether a bucket should be disabled for selection in the Buckets view or not.
  It has higher priority than `selectableItemsTypes`. Example: if `selectableItemsTypes` has `['buckets']` value and
  `bucketsIsItemDisabled` returns false for a bucket, then the bucket is disabled for selection.
- **`bucketsVisibleColumns?`**: `ReadonlyArray<string>`
  Optionally overrides the set of visible columns in the Buckets view. Available columns: 'Name', 'CreationDate',
  and 'Region'.
- **`className?`**: `string` _(@deprecated Custom CSS is not supported. For testing and other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).)_
  Adds the specified classes to the root element of the component.
- **`fetchBuckets`**: `() => Promise<ReadonlyArray<S3ResourceSelectorProps.Bucket>>`
  Specifies a function that returns all available buckets. The return type of the function should be a promise
  that resolves to a list of objects with the following properties:
  - `Name` (string) - Name of the bucket.
  - `CreationDate` (string) - (Optional) Creation date of the bucket.
  - `Region` (string) - (Optional) Region of the bucket.
- **`fetchObjects`**: `(bucketName: string, pathPrefix: string) => Promise<ReadonlyArray<S3ResourceSelectorProps.Object>>`
  Specifies a function that returns available objects and object prefixes for the given `bucketName` and `pathPrefix`.
  The return type of the function should be a promise that resolves to a list of objects with the following properties:
  - `Key` (string) - Name of the object or object prefix.
  - `LastModified` (string) - (Optional) Date when this object was last modified.
  - `Size` (number) - (Optional) Size of the object.
  - `IsFolder` (boolean) - (Optional)  Determines whether the entry is an object prefix (folder).
- **`fetchVersions`**: `(bucketName: string, pathPrefix: string) => Promise<ReadonlyArray<S3ResourceSelectorProps.Version>>`
  Specifies a function that returns available versions for the given `bucketName` and `pathPrefix`.
  The return type of the function should be a promise that resolves to a list of versions with the following properties:
  - `VersionId` (string) - Version ID of an object.
  - `LastModified` (string) - (Optional) Date when this object was last modified.
  - `Size` (number) - (Optional) Size of the object version.
- **`getModalRoot?`**: `PortalProps['getContainer']`
  Use this property to specify a different dynamic modal root for the dialog.
  The function will be called when a user clicks on the trigger button.
- **`i18nStrings?`**: `S3ResourceSelectorProps.I18nStrings` _(@i18n)_
  An object containing all the necessary localized strings required by the component.
- **`id?`**: `string` _(@deprecated The usage of the `id` attribute is reserved for internal use cases. For testing and other use cases,
use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). If you must
use the `id` attribute, consider setting it on a parent element instead.)_
  Adds the specified ID to the root element of the component.
- **`inputAriaDescribedby?`**: `string`
  Adds `aria-labelledby` to the S3 URI input. If you're using this component within a form field,
  you do not need to set this property, as the form field component will set it automatically.
  
  Use this property if the component isn't surrounded by a form field, or you want to override the value
  automatically set by the form field (for example, if you have two components within a single form field).
  
  To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
- **`inputPlaceholder?`**: `string`
  Adds a placeholder to the S3 URI input.
- **`invalid?`**: `boolean`
  Whether the S3 URI input field is in invalid state.
- **`objectsIsItemDisabled?`**: `(item: S3ResourceSelectorProps.Object) => boolean`
  Optionally overrides whether an object should be disabled for selection in the Objects view or not. Similar to
  `bucketsIsItemDisabled` this property takes precedence over the `selectableItemsTypes` property.
- **`objectsVisibleColumns?`**: `ReadonlyArray<string>`
  Optionally overrides the set of visible columns in the Objects view. Available columns: 'Key', 'LastModified',
  and 'Size'.
- **`removeModalRoot?`**: `PortalProps['removeContainer']`
  Use this property when `getModalRoot` is used to clean up the modal root
  element after a user closes the dialog. The function receives the return value
  of the most recent getModalRoot call as an argument.
- **`resource`**: `S3ResourceSelectorProps.Resource`
  The current selected resource. Resource has the following properties:
  - `uri` (string) - URI of the resource.
  - `versionId` (string) - (Optional) Version ID of the selected resource.
- **`selectableItemsTypes?`**: `ReadonlyArray<S3ResourceSelectorProps.SelectableItems>`
  An array of the item types that are selectable in the table view. The array may contain the following items:
  'buckets', 'objects', or 'versions'. Example: ['buckets', 'objects']. By default, no items are selectable.
  This property determines whether the component operates in Read mode or Write mode:
  * Read mode - When 'objects' and 'versions' values are provided (folder selection should be disabled by
  customizing `objectsIsItemDisabled` function).
  * Write mode - When 'buckets' and 'objects' values are provided (file selection should be disabled by
  customizing `objectsIsItemDisabled` function).
- **`versionsIsItemDisabled?`**: `(item: S3ResourceSelectorProps.Version) => boolean`
  Optionally overrides whether a version should be disabled for selection in the Versions view or not. Similar to
  `bucketsIsItemDisabled` this property takes precedence over the `selectableItemsTypes` property.
- **`versionsVisibleColumns?`**: `ReadonlyArray<string>`
  Optionally overrides the set of visible columns in the Versions view. Available columns: 'ID', 'CreationDate',
  and 'Size'.
- **`viewHref?`**: `string`
  Href of the selected object that is applied to the View button.

## Events

Handlers receive a `CustomEvent`; read the payload from `event.detail`. `Cancelable` handlers can call `event.preventDefault()`.

- **`onChange?`**: `NonCancelableEventHandler<S3ResourceSelectorProps.ChangeDetail>`
  Fired when the resource selection is changed. The event detail object contains resource that represents the full
  path of the selected resource and `errorText` that may contain a validation error.
- **`onInputBlur?`**: `NonCancelableEventHandler<null>`
  Called when input focus is removed from the S3 URI input.
- **`onInputFocus?`**: `NonCancelableEventHandler<null>`
  Called when input focus is moved to the S3 URI input.

## Types

Supporting types from `S3ResourceSelectorProps` (verbatim):

```ts
export declare namespace S3ResourceSelectorProps {
  interface Bucket {
    Name?: string;
    CreationDate?: string;
    Region?: string;
  }
  interface Object {
    Key?: string;
    LastModified?: string;
    Size?: number;
    IsFolder?: boolean;
  }
  interface Version {
    VersionId?: string;
    LastModified?: string;
    Size?: number;
  }
  interface Resource {
    uri: string;
    versionId?: string;
  }
  type SelectableItems = 'buckets' | 'objects' | 'versions';
  interface I18nStrings {
    /**
     * @deprecated Use `inputPlaceholder` on the component instead.
     */
    inContextInputPlaceholder?: string;
    inContextInputClearAriaLabel?: string;
    inContextSelectPlaceholder?: string;
    inContextBrowseButton?: string;
    inContextViewButton?: string;
    inContextViewButtonAriaLabel?: string;
    inContextLoadingText?: string;
    inContextUriLabel?: string;
    inContextVersionSelectLabel?: string;
    modalTitle?: string;
    modalCancelButton?: string;
    modalSubmitButton?: string;
    modalBreadcrumbRootItem?: string;
    modalLastUpdatedText?: string;
    selectionBuckets?: string;
    selectionObjects?: string;
    selectionVersions?: string;
    selectionBucketsSearchPlaceholder?: string;
    selectionObjectsSearchPlaceholder?: string;
    selectionVersionsSearchPlaceholder?: string;
    selectionBucketsLoading?: string;
    selectionBucketsNoItems?: string;
    selectionObjectsLoading?: string;
    selectionObjectsNoItems?: string;
    selectionVersionsLoading?: string;
    selectionVersionsNoItems?: string;
    filteringCounterText?: (count: number) => string;
    filteringNoMatches?: string;
    filteringCantFindMatch?: string;
    clearFilterButtonText?: string;
    columnBucketName?: string;
    columnBucketCreationDate?: string;
    columnBucketRegion?: string;
    columnObjectKey?: string;
    columnObjectLastModified?: string;
    columnObjectSize?: string;
    columnVersionID?: string;
    columnVersionLastModified?: string;
    columnVersionSize?: string;
    validationPathMustBegin?: string;
    validationBucketLowerCase?: string;
    validationBucketMustNotContain?: string;
    validationBucketLength?: string;
    validationBucketMustComplyDns?: string;
    labelSortedDescending?: SortingColumnContainingString;
    labelSortedAscending?: SortingColumnContainingString;
    labelNotSorted?: SortingColumnContainingString;
    labelsPagination?: PaginationProps.Labels;
    labelsBucketsSelection?: SelectionLabels<Bucket>;
    labelsObjectsSelection?: SelectionLabels<S3ResourceSelectorProps.Object>;
    labelsVersionsSelection?: SelectionLabels<Version>;
    labelFiltering?: (itemsType: string) => string;
    labelRefresh?: string;
    labelModalDismiss?: string;
    labelBreadcrumbs?: string;
    labelExpandBreadcrumbs?: string;
    labelClearFilter?: string;
    labelIconObject?: string;
    labelIconFolder?: string;
  }
  interface ChangeDetail {
    resource: Resource;
    errorText?: string;
  }
  interface Ref {
    /**
     * Focuses the S3 URI input field
     */
    focus(): void;
  }
}
```
