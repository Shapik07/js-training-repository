"use strict";

console.log("Hello world!");
console.log("Я учу JS");

//Изменение значения const

// const exchenge = {
//   name: "Ivan",
//   lastName: "Shapovalov",
//   age: 26,
// };

// console.log(exchenge);

// exchenge.age = 27;

// function calcSum(numOne, numTwo) {
//   if (numTwo === 1) {
//     return numOne;
//   } else {
//     return numOne * calcSum(numOne, numTwo - 1);
//   }
// }

// console.log(calcSum(4, 3));





// Change code below this line
function findMatches(firstElement, ...args) {
  const matches = []; // Don't change this line
  const newArray = [...firstElement, ...args];
  // console.log(newArray)
  for (let i = 0; i <= newArray.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (newArray[j] === newArray[i]) {
        matches.push(newArray[j]);
      }
    }
  }
  console.log(matches);
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
findMatches([63, 11, 8, 29], 4, 7, 16);
