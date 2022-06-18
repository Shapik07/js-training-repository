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


const numbers = [56, 75, 80, 34, 30, 25, 56, 17, 80, 6, 17, 50];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log(smallestNumber)
