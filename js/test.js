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

function getCommonElements(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j += 1) {
      if (array1[i] === array2[j]) {
        array2[j].includes;
        newArray.push(array2[j]);
      }
    }
  }
  return newArray;
}


getCommonElements([1, 2, 3], [2, 4]);

