function insertThousands(intStr, sep) {
  return intStr.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

module.exports = function separate(input, sep = ",") {
  if (input === null || input === undefined) return "";

  const n =
    typeof input === "number"
      ? input
      : Number(String(input).replace(/[,\s]/g, ""));
  if (!Number.isFinite(n)) return String(input);

  const sign = n < 0 ? "-" : "";
  const [intPart, fracPart] = Math.abs(n).toString().split(".");
  const grouped = insertThousands(intPart, sep);
  return sign + (fracPart ? `${grouped}.${fracPart}` : grouped);
};
