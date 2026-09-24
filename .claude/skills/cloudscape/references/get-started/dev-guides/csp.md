# Content security policy (CSP)

> Source: https://cloudscape.design/get-started/dev-guides/csp/ (fetched 2026-09-24)

Learn how to configure the CSP of your page with Cloudscape.

## What is CSP?

Content-Security-Policy (CSP) is a security mechanism that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. With CSP, you're able to declare which sources of content your web app trusts.

We recommend you enable CSP in your application.

## CSP configuration

Our components can be run with the following CSP configuration:

`Content-Security-Policy: default-src 'self'; style-src 'self'; font-src data:;` `img-src blob:;`

Where `self` refers to the location where the assets are loaded from. Replace `self` with your CDN URL when you serve assets from a different domain than your website content.

Note that the [code editor component](../../components/code-editor/guidelines.md) requires a special CSP configuration. See our [code editor development guidelines](../../components/code-editor/guidelines.md) for more details.

## Why is the font-src needed?

 [The global styles package](https://www.npmjs.com/package/@cloudscape-design/global-styles) includes the Open Sans font in your application. The font-src is needed to ensure that fonts are loaded along with the rest of the CSS files, to avoid [font display issues](https://css-tricks.com/font-display-masses/) . Note that Open Sans font files are available in our [global styles](../for-developers/global-styles.md).

Including `font-src data:;` does not harm security. Custom fonts can only be declared in CSS, which is already covered by the more strict `style-src 'self';` directive.
