const symbol = require('../helpers/symbols')

module.exports = function abbreviate(number, decimal) {
    const tier = Math.floor(Math.log10(Math.abs(number || 1)) / 3);
    if (tier === 0) return number;
    const suffix = symbol[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    return scaled.toFixed(decimal) + suffix;
}