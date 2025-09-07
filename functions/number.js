const { toNumber } = require("../helpers/utils");

function gcd(a, b) {
  a = Math.abs(Math.trunc(toNumber(a)));
  b = Math.abs(Math.trunc(toNumber(b)));
  if (!a && !b) return 0;
  while (b) [a, b] = [b, a % b];
  return a;
}

function lcm(a, b) {
  a = Math.trunc(toNumber(a));
  b = Math.trunc(toNumber(b));
  if (!a || !b) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

function factorial(n) {
  n = Math.trunc(toNumber(n));
  if (n < 0) return NaN;
  if (n > 170) return Infinity;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function permutations(n, k) {
  n = Math.trunc(toNumber(n));
  k = Math.trunc(toNumber(k));
  if (k < 0 || n < 0 || k > n) return 0;
  let res = 1;
  for (let i = 0; i < k; i++) res *= n - i;
  return res;
}

function combinations(n, k) {
  n = Math.trunc(toNumber(n));
  k = Math.trunc(toNumber(k));
  if (k < 0 || n < 0 || k > n) return 0;
  k = Math.min(k, n - k);
  let num = 1,
    den = 1;
  for (let i = 1; i <= k; i++) {
    num *= n - (k - i);
    den *= i;
  }
  return num / den;
}

function isPrime(n) {
  n = Math.trunc(toNumber(n));
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function nextPrime(n) {
  n = Math.trunc(toNumber(n)) + 1;
  while (!isPrime(n)) n++;
  return n;
}

function primesUpTo(n) {
  n = Math.trunc(toNumber(n));
  if (n < 2) return [];
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let p = 2; p * p <= n; p++)
    if (sieve[p]) for (let i = p * p; i <= n; i += p) sieve[i] = false;
  const res = [];
  for (let i = 2; i <= n; i++) if (sieve[i]) res.push(i);
  return res;
}

function mapRange(x, inMin, inMax, outMin, outMax, clampOut = false) {
  x = toNumber(x);
  inMin = toNumber(inMin);
  inMax = toNumber(inMax);
  outMin = toNumber(outMin);
  outMax = toNumber(outMax);
  const ratio = (x - inMin) / (inMax - inMin);
  let y = outMin + ratio * (outMax - outMin);
  if (clampOut)
    y = Math.min(
      Math.max(y, Math.min(outMin, outMax)),
      Math.max(outMin, outMax)
    );
  return y;
}

function percentOf(part, total) {
  part = toNumber(part);
  total = toNumber(total);
  return total === 0 ? NaN : (part / total) * 100;
}

function percentChange(oldVal, newVal) {
  oldVal = toNumber(oldVal);
  newVal = toNumber(newVal);
  return oldVal === 0
    ? newVal === 0
      ? 0
      : Infinity
    : ((newVal - oldVal) / oldVal) * 100;
}

function between(n, min, max, inclusive = true) {
  n = toNumber(n);
  min = toNumber(min);
  max = toNumber(max);
  return inclusive
    ? n >= Math.min(min, max) && n <= Math.max(min, max)
    : n > Math.min(min, max) && n < Math.max(min, max);
}

function isEven(n) {
  return Math.trunc(toNumber(n)) % 2 === 0;
}
function isOdd(n) {
  return !isEven(n);
}

module.exports = {
  gcd,
  lcm,
  factorial,
  permutations,
  combinations,
  isPrime,
  nextPrime,
  primesUpTo,
  mapRange,
  percentOf,
  percentChange,
  between,
  isEven,
  isOdd,
};
