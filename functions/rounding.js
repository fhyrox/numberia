const { toNumber, clamp } = require('../helpers/utils');

function round(n) { return Math.round(toNumber(n)); }
function floor(n) { return Math.floor(toNumber(n)); }
function ceil(n) { return Math.ceil(toNumber(n)); }
function trunc(n) { return Math.trunc(toNumber(n)); }

function roundTo(n, decimals = 0) {
  n = toNumber(n);
  const factor = 10 ** decimals;
  return Math.round(n * factor) / factor;
}

function toFixedSafe(n, decimals = 0) {
  n = toNumber(n);
  const str = n.toFixed(decimals);
  return decimals > 0 ? str.replace(/\.0+$/, '').replace(/(\.[0-9]*[1-9])0+$/, '$1') : str;
}

module.exports = {
  round,
  floor,
  ceil,
  trunc,
  roundTo,
  clamp,
  toFixedSafe,
};

