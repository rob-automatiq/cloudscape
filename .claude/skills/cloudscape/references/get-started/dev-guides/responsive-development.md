# Responsive development

> Source: https://cloudscape.design/get-started/dev-guides/responsive-development/ (fetched 2026-09-24)

Responsive development requirements and best practices for building responsive interfaces.

## Responsiveness of Cloudscape components

The concept of responsiveness is often mapped to [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) , which allow you to specify CSS rules depending on the size of the viewport. However, the size of the viewport shouldn't be the only criterion taken into account when designing a layout for your interface. The available real estate depends also on the state of the application. For example, the available space for the content of a page depends on whether the navigation or tools drawers of your application layout are open or closed.

Cloudscape components change their layout based on the size of the root HTML element that contains them, rather than the size of the viewport. This concept is known as *element queries* . The element width is compared to a set of [predefined breakpoints](https://github.com/cloudscape-design/components/blob/main/src/internal/breakpoints.ts) to define its behavior.

## Custom components

When you create your own components, use the [grid](../../components/grid/guidelines.md) and [column layout](../../components/column-layout/guidelines.md) components to create a responsive behavior.

## Generic guidelines

- Configure the browser's viewport by adding this `meta`   tag into the `head`   of your page: `<meta name="viewport" content="width=device-width, initial-scale=1">`  

  - `width=device-width`     instructs the browser to match the device's resolution and pixel density.
  - `initial-scale=1`     establishes a 1:1 relationship between CSS pixels and device-independent pixels.
  - Avoid using `minimum-scale`     and `maximum-scale.`     These prevent the user from scaling the page properly.
- Don't make the user scroll horizontally, or zoom out. Avoid using large, fixed-width elements.
