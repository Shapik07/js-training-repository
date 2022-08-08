"use strict";

function grow(x) {
  const total = x.reduce((acc, element) => {
    return acc * element;
  });
  console.log(total);
}

grow([1, 2, 3]) // 6
grow([4, 1, 1, 1, 4]) // 16
grow([2, 2, 2, 2, 2, 2]) // 64


