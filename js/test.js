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
const lastElementIndex = clients.length -1;
console.log(lastElementIndex); 
console.log(clients[lastElementIndex]); 