const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: "./src/*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "https://redux.facundogordillo.com",
      // show: true,
      waitForNavigation: "networkidle0",
    },
  },
  include: {
    I: "./src/steps/index.js",
  },
  bootstrap: null,
  mocha: {},
  name: "codecepts-concept",
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
  },
};
