const { toNumber } = require('../helpers/utils');

function add(...values) {
  return values.reduce((acc, v) => acc + toNumber(v), 0);
}

function sub(a, b) {
  const x = toNumber(a), y = toNumber(b);
  return x - y;
}

function mul(...values) {
  return values.reduce((acc, v) => acc * toNumber(v), 1);
}

function div(a, b) {
  const x = toNumber(a), y = toNumber(b);
  return x / y;
}

function mod(a, b) {
  const x = toNumber(a), y = toNumber(b);
  return x % y;
}

function pow(a, b) {
  return Math.pow(toNumber(a), toNumber(b));
}

function abs(n) { return Math.abs(toNumber(n)); }
function neg(n) { return -toNumber(n); }

module.exports = {
  add,
  sub,
  mul,
  div,
  mod,
  pow,
  abs,
  neg,
};

