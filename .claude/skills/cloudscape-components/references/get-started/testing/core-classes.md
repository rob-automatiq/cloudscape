# Testing classes

> Source: https://cloudscape.design/get-started/testing/core-classes/ (fetched 2026-09-24)

API documentation for test utilities classes.

## Overview

This article contains the API documentation for Cloudscape test utilities classes. These utilities don't depend on the specific component you're testing. For information about how to use these core classes in your tests, see [introduction to testing](introduction.md).

Test utilities expose two classes:

- An element wrapper for unit tests, where you typically have direct access to the Document Object Model (DOM).
- An element wrapper for integration tests, where it's typical to rely on string selectors.

## Unit Testing

The entry point for unit tests is the default method exposed by the `@cloudscape-design/components/test-utils/dom` package. This method returns an instance of `ElementWrapper` . The following table describes the class interface.

For more information and examples for unit testing with Cloudscape, see [introduction to testing](introduction.md).

## Integration testing

The entry point for unit tests is the default method exposed by the `@cloudscape-design/components/test-utils/selectors` package. This method returns an instance of `ElementWrapper` . The following table describes the class interface.

For more information and examples for integration testing with Cloudscape see [introduction to testing](introduction.md).
