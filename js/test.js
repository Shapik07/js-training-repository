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


function createArrayOfNumbers(min, max) {
  const numbers = [];
    for (let i = min; i <= max; i += 1)
        numbers.push(i)
    console.log(numbers)
}

createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
createArrayOfNumbers(29, 34);
