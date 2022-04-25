# CodeceptJS

## Core concepts

### From [Architecture](https://codecept.io/basics/#architecture)

- The `I` is a proxy object for currently enabled **Helpers**.

- CodeceptJS bypasses execution commands to helpers.

- Cross-browser support, you need Selenium-based WebDriver [...]. If you're interesed in speed - you should use Chrome-based Puppeteer.

- All helpers share the same API [...]. However [...] they are not guaranteed to be compatible with each other.

- We can use different assertion libraries like `chai`, but it's recommeded to put then into a helper for further reuse.

### From [How it Works](https://codecept.io/basics/#waiting)

- Test are written in a syncrhonous way [...]. However, behind the scenes all actions are wrapped in promises, inside of the `I` object. [Global promise](https://github.com/codeceptjs/CodeceptJS/blob/master/lib/recorder.js) chain is initialized before each test and all `I.*` calls will be appended to it, as well as setup and teardown.

- Learn how [CodeceptJS](https://www.youtube.com/watch?v=MDLLpHAwy_s) works

### From [Configuration](https://codecept.io/basics/#configuration)

- Configuration is set in the `codecept.conf.js` file which was created during the `init` process.

- See complete [configuration reference](https://codecept.io/configuration)

- Use the `codeceptjs/configure` package with common configuration repices.

### From [Testing with Puppeteer](https://codecept.io/puppeteer/)
