const { setHeadlessWhen } = require("@codeceptjs/configure");

setHeadlessWhen(process.env.CI);

exports.config = {
  helpers: {},
  plugins: {},
  include: {},
};
