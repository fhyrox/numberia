```js
const numberia = require('numberia');

numberia.abbreviate('10k') // 10000000
numberia.expand(5000000) // 5m

numberia.separate('10000000') // 10,000,000
numberia.separate('10000000', '.') // 10.000.000
```