# CodeceptJS

## Core concepts

### From [Architecture](https://codecept.io/basics/#architecture)

- The `I` is a proxy object for currently enabled **Helpers**.

- CodeceptJS bypasses execution commands to helpers.

- Cross-browser support, you need Selenium-based WebDriver [...]. If you're interesed in speed - you should use Chrome-based Puppeteer.

- All helpers share the same API [...]. However [...] they are not guaranteed to be compatible with each other.

- We can use different assertion libraries like `chai`, but it's recommeded to put then into a helper for further reuse.

### From [Testing with Puppeteer](https://codecept.io/puppeteer/)
