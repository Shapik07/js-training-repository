"use strict";

console.log("Hello world!");
console.log("Я учу JS");

//Изменение значения const

const exchenge = {
  name: "Ivan",
  lastName: "Shapovalov",
  age: 26,
};

console.log(exchenge);

exchenge.age = 27;

console.log(exchenge);


// проверка 

const clients = ["Таня", "Саша", "Ника", "Ваня"];
for (let i = 0; 0 < clients.length; i += 1) {
  console.log(i)
}