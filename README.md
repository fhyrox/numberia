Numberia — friendly number helpers for formatting and math.

Installation

```bash
npm install numberia
```

Usage

```js
const n = require('numberia');

n.separate(10000000);            // "10,000,000"
n.separate(10000000, '.');       // "10.000.000"
n.abbreviate(12500);             // "12.5K"
n.expand('12.5K');               // 12500

n.add(1, 2, 3);                  // 6
n.mul(2, 3, 4);                  // 24

n.roundTo(12.3456, 2);           // 12.35
n.clamp(15, 0, 10);              // 10

n.mean([1, 2, 3, 4]);            // 2.5
n.median([1, 3, 2]);             // 2

n.randomInt(1, 6);               // 1..6

n.gcd(24, 36);                   // 12
n.isPrime(29);                   // true
```

Functions

- Formatting: `separate`, `abbreviate`, `expand`
- Arithmetic: `add`, `sub`, `mul`, `div`, `mod`, `pow`, `abs`, `neg`
- Rounding: `round`, `floor`, `ceil`, `trunc`, `roundTo`, `clamp`, `toFixedSafe`
- Stats: `sum`, `mean`, `median`, `mode`, `min`, `max`, `range`, `variance`, `stdDev`
- Random: `randomInt`, `randomFloat`, `randomBool`, `choice`
- Number: `gcd`, `lcm`, `factorial`, `permutations`, `combinations`, `isPrime`, `nextPrime`, `primesUpTo`, `mapRange`, `percentOf`, `percentChange`, `between`, `isEven`, `isOdd`

Notes

- Backward compatible: existing functions are kept and improved.
- `separate(number, sep)` now handles negatives and decimals reliably.
- `abbreviate` trims trailing zeros (e.g., `1200` → `1.2K`).
