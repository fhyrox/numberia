const { toNumber } = require('../helpers/utils');

function toNumArray(values) {
  return values.map(toNumber).filter(Number.isFinite);
}

function sum(values) {
  return toNumArray(values).reduce((a, b) => a + b, 0);
}

function mean(values) {
  const arr = toNumArray(values);
  return arr.length ? sum(arr) / arr.length : NaN;
}

function median(values) {
  const arr = toNumArray(values).sort((a, b) => a - b);
  const n = arr.length;
  if (!n) return NaN;
  const mid = Math.floor(n / 2);
  return n % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

function mode(values) {
  const arr = toNumArray(values);
  if (!arr.length) return [];
  const freq = new Map();
  let max = 0;
  arr.forEach(v => { const c = (freq.get(v) || 0) + 1; freq.set(v, c); if (c > max) max = c; });
  return [...freq.entries()].filter(([, c]) => c === max).map(([v]) => v);
}

function min(values) { const arr = toNumArray(values); return arr.length ? Math.min(...arr) : NaN; }
function max(values) { const arr = toNumArray(values); return arr.length ? Math.max(...arr) : NaN; }
function range(values) { const lo = min(values), hi = max(values); return Number.isFinite(lo) && Number.isFinite(hi) ? hi - lo : NaN; }

function variance(values, sample = false) {
  const arr = toNumArray(values);
  const n = arr.length;
  if (n === 0 || (sample && n < 2)) return NaN;
  const m = mean(arr);
  const sumSq = arr.reduce((acc, v) => acc + (v - m) ** 2, 0);
  return sumSq / (sample ? (n - 1) : n);
}

function stdDev(values, sample = false) {
  const v = variance(values, sample);
  return Number.isFinite(v) ? Math.sqrt(v) : NaN;
}

module.exports = {
  sum,
  mean,
  median,
  mode,
  min,
  max,
  range,
  variance,
  stdDev,
};

