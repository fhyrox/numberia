const SYMBOLS = require('../helpers/symbols')

module.exports = function expand(input) {
  if (input === null || input === undefined) return NaN;
  if (typeof input === 'number') return input;

  const raw = String(input).trim();
  if (raw.length === 0) return NaN;

  let abbrIndex = 0;
  const lower = raw.toLowerCase();

  for (let i = SYMBOLS.length - 1; i >= 0; i--) {
    const sym = SYMBOLS[i].toLowerCase();
    if (sym && lower.endsWith(sym)) {
      abbrIndex = i;
      break;
    }
  }

  const suffix = SYMBOLS[abbrIndex];
  const baseStr = suffix ? raw.slice(0, -suffix.length) : raw;
  // Remove common grouping separators
  const normalized = baseStr.replace(/[,\s]/g, '');
  const num = parseFloat(normalized.replace(/_/g, ''));
  if (!Number.isFinite(num)) return NaN;

  const multiplier = abbrIndex ? 10 ** (abbrIndex * 3) : 1;
  return num * multiplier;
}
