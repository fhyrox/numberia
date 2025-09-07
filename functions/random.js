const { clamp } = require('../helpers/utils');

function randomFloat(min = 0, max = 1) {
  if (min > max) [min, max] = [max, min];
  return Math.random() * (max - min) + min;
}

function randomInt(min = 0, max = 1) {
  if (min > max) [min, max] = [max, min];
  return Math.floor(randomFloat(min, max + 1));
}

function randomBool(pTrue = 0.5) {
  pTrue = clamp(pTrue, 0, 1);
  return Math.random() < pTrue;
}

function choice(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr[randomInt(0, arr.length - 1)];
}

module.exports = {
  randomFloat,
  randomInt,
  randomBool,
  choice,
};

