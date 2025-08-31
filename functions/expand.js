const symbol = require('../helpers/symbols')

module.exports = function expand(number) {

  let abbrIndex;

  for (let i = symbol.length - 1; i >= 0; i--) {
    const sym = symbol[i].toLowerCase();
    const str = number.toString()
    if (str.endsWith(sym.toLowerCase())) {
      abbrIndex = i;
      break;
    }
  }
  const abbr = symbol[abbrIndex];
  const numberi = abbrIndex ? number.slice(0, -abbr.length) : number;


  const num = parseFloat(numberi);
  const multiplier = abbrIndex ? 1e3 ** abbrIndex : 1;

   return num * multiplier;

}