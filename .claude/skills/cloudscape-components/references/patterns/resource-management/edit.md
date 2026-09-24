# Edit resource

> Source: https://cloudscape.design/patterns/resource-management/edit/ (fetched 2026-09-24)

With the edit resource pattern, users can edit properties and configurations of resources.

## Patterns

### Page edit

Use the page edit pattern when you want users to manage an item by editing its properties and configuration in bulk.

[View Documentation](edit/page-edit.md)

### Inline edit

Use inline edit on views where information needs to be updated often, or when you want a user to edit a resource property across multiple resources.

[View Documentation](edit/inline-edit.md)

## Criteria

|  | Page edit | Inline edit |
| --- | --- | --- |
| Use-case | Editing multiple properties of one resource | Editing one property across multiple resources |
| Dependency between the properties | Settings are interdependent | Settings are independent |
| Context | Editing in a dedicated page | Editing in context |

### Use-case

Depending on the use case, one interaction model can be more effective than the other. Page edit is preferred when editing multiple properties or configurations of one resource, while inline edit is preferred when editing one property or configuration across multiple resources.

### Dependency between the properties

Page edit provides a more effective way to explain the relationships between resources properties, for example, when editing happens within a [multi page creation flow](create/multi-page-create.md) , or when properties are related.

### Context

The context in which the editing is performed can set up your users for success. Editing multiple properties or configurations of one resource within a standalone page supports the the user mental model of being in an edit mode.

Performing inline edits to multiple resources within a set of resources, for example a [table view](view/table-view.md) , is preferred to keep users within the context of the parameters displayed.
