# Board components

> Source: https://cloudscape.design/components/board-components/ (fetched 2026-09-24)

Made up of three components that work together to allow users to interact with, move, and configure a board layout.

 [Configurable dashboard demo](https://cloudscape.design/examples/react/configurable-dashboard.html)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/board-components/index.html.json)

## Related components

### Board

Provides the base for a configurable layout, including drag and drop, responsiveness and grid.

[View Documentation](../board/guidelines.md)

### Board item

A board item is a self-contained user interface (UI) element living within a board.

[View Documentation](../board-item/guidelines.md)

### Items palette

Provides the ability to add board items to a board layout when combined with discreet split panel.

[View Documentation](../items-palette/guidelines.md)

## Guidance on creating a configurable dashboard

For information about how to design and build a configurable dashboard experience using board components, see [Service dashboard](../../patterns/general/service-dashboard.md) , [Configurable dashboard](../../patterns/general/service-dashboard/configurable-dashboard.md) and [Dashboard items](../../patterns/general/service-dashboard/dashboard-items.md) patterns.

## How components work together

Configurable dashboard pattern consists of three components, [board](../board/guidelines.md) , [board item](../board-item/guidelines.md) and [items palette](../items-palette/guidelines.md).

Essentially, this pattern is a board component that contains board items within it. Individual board item components should be used for each content type you want to display on the board. These board item components are configurable (resizable and draggable).

The items palette component provides the ability to add new content types to the board via drag-and-drop. Items palette content should also be featured in the board item component. For the best experience, we recommend using the [split panel](../split-panel/guidelines.md) component, in [discreet mode](../split-panel/guidelines.md).

For an example of a configurable dashboard built using board items, see [this demo](https://cloudscape.design/examples/react/configurable-dashboard.html).

A B C D---
