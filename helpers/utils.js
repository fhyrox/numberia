function isFiniteNumber(n) {
  return typeof n === 'number' && Number.isFinite(n);
}

function toNumber(value) {
  if (typeof value === 'number') return value;
  if (value === null || value === undefined) return NaN;
  const s = String(value).trim();
  if (!s) return NaN;
  // strip common groupers and underscores
  const normalized = s.replace(/[,\s_]/g, '');
  const n = Number(normalized);
  return Number.isFinite(n) ? n : NaN;
}

function clamp(n, min, max) {
  if (min > max) [min, max] = [max, min];
  return Math.min(Math.max(n, min), max);
}

module.exports = {
  isFiniteNumber,
  toNumber,
  clamp,
};

