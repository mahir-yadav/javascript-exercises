const fibonacci = function (num) {
    if (num < 0) return "OOPS";
    num = parseInt(num);
    if (num == 0) return 0;
    let cur = 1;
    let pre = 0;
    for (let i = 0; i < num - 1; i++) {
        let x = cur;
        cur = cur + pre;
        pre = x;
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;

// 0 1 1 2 3 5 8
