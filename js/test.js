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

function getEvenNumbers(start, end) {
  let result = [];
  let array = [];

  for (let j = start; j = end; j += 2) {
    array.push([j])
  }
 console.log(array);
  // for (let i = start; (i = end); i += 1) {
  //   if (i % 2 === 0) {
  //     result.push(i);
  //   }
    
  // }
 
}


getEvenNumbers(2, 5);