const separate = require("./functions/separate");
const abbreviate = require("./functions/abbreviate");
const expand = require("./functions/expand");

const arithmetic = require("./functions/arithmetic");
const rounding = require("./functions/rounding");
const random = require("./functions/random");
const stats = require("./functions/stats");
const number = require("./functions/number");

module.exports = {
  separate,
  abbreviate,
  expand,

  arithmetic,
  rounding,
  random,
  stats,
  number,

  ...arithmetic,
  ...rounding,
  ...random,
  ...stats,
  ...number,
};
