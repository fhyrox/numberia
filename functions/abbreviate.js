const SYMBOLS = require("../helpers/symbols");

module.exports = function abbreviate(input, decimals = 1) {
  if (input === null || input === undefined) return "";
  const n =
    typeof input === "number"
      ? input
      : Number(String(input).replace(/[,\s]/g, ""));
  if (!Number.isFinite(n)) return String(input);

  const abs = Math.abs(n);
  const tier = Math.floor(Math.log10(abs || 1) / 3);
  if (tier <= 0) return n;

  const suffix = SYMBOLS[tier] || SYMBOLS[SYMBOLS.length - 1];
  const scale = 10 ** (tier * 3);
  const scaled = n / scale;

  const str = scaled.toFixed(decimals);
  const pretty =
    decimals > 0
      ? str.replace(/\.0+$/, "").replace(/(\.[0-9]*[1-9])0+$/, "$1")
      : str;
  return pretty + suffix;
};
