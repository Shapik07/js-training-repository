"use strict";

function b(x, y, a) {
  arguments[2] = 10;
  alert(a);
}

b(1, 2, 3);

// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;
// console.log(y);

Number.prototype.plus = function (value) {
  return this + value;
};

Number.prototype.minus = function (value) {
  return this - value;
};