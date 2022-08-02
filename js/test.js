"use strict";

console.log("Hello world!");
console.log("Я учу JS");

function sumMix(x) {
  let total = 0;

  for (const num of x) {
    let number = Number(num)
    total += number
  }
   return total;
}


    sumMix([9, 3, "7", "3"]);
    sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]);
    sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]);
