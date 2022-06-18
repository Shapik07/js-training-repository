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

const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const mac = 14;
for (let i = 0; i < number.length; i += 1) {
  if (number[i] < mac) {
    continue
  }
  console.log(`Число больше чем ${mac} : ${number[i]}`);
}
