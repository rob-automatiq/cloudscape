# Text content

> Source: https://cloudscape.design/components/text-content/ (fetched 2026-09-24)

Use to style chunks of HTML by applying default typographical styles to the content.

 [Get design library](../../get-started/for-designers/design-resources.md) [Browse code](https://github.com/cloudscape-design/components/tree/main/src/text-content)
The API properties for this component are found here: [API Properties](https://cloudscape.design/components/text-content/index.html.json)

## Development guidelines

In most cases, the text content component can be replaced with the [box component](../box/guidelines.md) . Here are the differences:

- The text content component allows to **style chunks of HTML**   that contain basic elements  ( `h1`   , `h2`   , `h3`   , `h4`   , `h5`   , `p`   , `strong`   , `small`   , `code`   , `pre`   , `samp`   , `ul`   , `ol`   , `a`   ). You can use it as an alternative to the box component when you cannot convert every single basic element to a component (for example, HTML coming from a content management system, or the output of Markdown file). Unlike the box component, it allows to style lists ( `ul`   , `ol`   ) and anchors ( `a`   ) contained in the text.
- The [box component](../box/guidelines.md)   lets you style **style a single HTML element**   ( `h1`   , `h2`   , `h3`   , `h4`   , `h5`   , `p`   , `strong`   , `small`   , `code`   , `pre`   , `samp`   ) by setting a variant that corresponds to the tag that you need. The component allows to override the default color, font size, line height and font weight to customize the basic HTML element.

If you are new to test utility classes, you can learn more in the [introduction article](../../get-started/testing/introduction.md).
## Unit testing APIs

TextContentWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| No methods availableThis wrapper does not provide any additional methods. |  |  |  |
## Integration testing APIs

TextContentWrapper 

| Name | Return type | Description | Parameters |
| --- | --- | --- | --- |
| No methods availableThis wrapper does not provide any additional methods. |  |  |  | For usage guidelines, see our [typography](../../foundation/visual-foundation/typography.md) guidelines.
