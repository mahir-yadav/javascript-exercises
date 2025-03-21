const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;

};

const sum = function (arr) {
  return arr.reduce((total, cur) => { return total + cur }, 0)


};

const multiply = function (arr) {
  return arr.reduce((total, cur) => { return total * cur }, 1)

};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let ans = 1;
  for (let i = 1; i <= a; i++) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
