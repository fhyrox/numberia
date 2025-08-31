module.exports = function separate(number, sep = ",") {
    let formatted = number.toLocaleString();
    formatted = formatted.replaceAll('.', sep)

    return formatted;
}