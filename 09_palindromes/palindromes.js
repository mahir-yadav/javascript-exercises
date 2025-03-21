const palindromes = function (s) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const t = s.toLowerCase().split('').filter((c) => alpha.includes(c)).join('');
    const rev = t.split('').reverse().join('');
    return t === rev;
};

// Do not edit below this line
module.exports = palindromes;
