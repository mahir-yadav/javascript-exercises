const isPositiveInteger = function (a) {
    return typeof a == "number" && a >= 0 && Number.isInteger(a);
}
const sumAll = function (a, b) {
    if (isPositiveInteger(a) && isPositiveInteger(b)) {
        l = Math.min(a, b);
        r = Math.max(a, b);
        let sum = 0
        for (let i = l; i <= r; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
