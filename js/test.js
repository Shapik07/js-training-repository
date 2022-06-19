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


const calculatorTotalItem = function (items) {
  let total = 0;
  for (const item of items) {
    total += item;
  }

  return total;
}

console.log(calculatorTotalItem([1,3,5,7,9,2,4,6,8,12,10,11]));