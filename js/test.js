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

let arr = ["Ваня", "Иштван"];
arr.push("Коля");
arr.splice(1, 1, "Петя");
arr.splice(0, 1);
arr.splice(0, 0, "Маша", "Паша");
console.log(arr);
