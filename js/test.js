"use strict";

function squareDigits(num) {
  let newSum = [];
  const string = String(num)
  const number = string.split('')
  for (const element of number) {
    newSum.push(Math.pow(element, 2));
  }
  const result = Number(newSum.join(""));
  return result
}


squareDigits(3212); // 9414
squareDigits(2112); // 4114