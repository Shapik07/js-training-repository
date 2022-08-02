"use strict";

console.log("Hello world!");
console.log("Я учу JS");

function sumTwoSmallestNumbers(numbers) {
  const numOne = Math.min(...numbers);
  console.log(numOne);
  const indexNumOne = numbers.indexOf(numOne);
  console.log(indexNumOne);
  const newArray = numbers.splice(indexNumOne, 1);
  const numTwo = Math.min(...numbers);
  console.log(numOne + numTwo);
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);