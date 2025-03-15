const reverseString = function (s) {
    let rev = ""
    for (let i = s.length - 1; i >= 0; i--) {
        rev = rev + s[i];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
