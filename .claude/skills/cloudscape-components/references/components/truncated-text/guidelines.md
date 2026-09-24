# Truncated text

> Source: https://cloudscape.design/components/truncated-text/ (fetched 2026-09-24)

Displays truncated single-line text with a tooltip showing the full content.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/truncated-text) If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/truncated-text/index.html.json)

## Unit testing APIs

TruncatedTextWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findTooltip | [TooltipWrapper](../tooltip/guidelines.md) &#124; null | - | - |
## Integration testing APIs

TruncatedTextWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| findTooltip | [TooltipWrapper](../tooltip/guidelines.md) | - | - |
## General guidelines

### Do

- Use truncated text when the container can't be resized by the user and the text can't wrap to a new line.
- Use `tooltipText`   to supply a text-only version of the content when it includes interactive elements like links or buttons.

### Don't

- Don't provide supplemental information in the tooltip text.

## Features

- #### Tooltip

  A tooltip is shown on focus or hover when the component detects that the text in the content slot is truncated.
