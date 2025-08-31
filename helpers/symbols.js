const SYMBOL = ["", "K", "M", "B", "T"];

for (let i = 1; i <= 12; i++) {
    const power = Math.pow(10, i * 3);
    SYMBOL.push(
        power >= 1e24
            ? SYMBOL[i] + "D"
            : power >= 1e21
                ? SYMBOL[i] + "V"
                : power >= 1e18
                    ? SYMBOL[i] + "DT"
                    : power >= 1e15
                        ? SYMBOL[i] + "T"
                        : power >= 1e12
                            ? SYMBOL[i] + "Qa"
                            : power >= 1e9
                                ? SYMBOL[i] + "B"
                                : power >= 1e6
                                    ? SYMBOL[i] + "M"
                                    : power >= 1e3
                                        ? SYMBOL[i] + "K"
                                        : SYMBOL[i]
    );
}

module.exports = SYMBOL