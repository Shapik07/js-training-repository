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

const authors = {
  Veronika: 7,
  Ivan: 8,
  Alexandr: 3,
  Kirill: 5,
  Tatiana: 12,
};

const keys = Object.keys(authors);
let biggestNumber = 0;

for (const key of keys) {
//   console.log(key)
//   console.log(authors[key])
  if (authors[key] > biggestNumber) {
    biggestNumber = authors[key];
  }
}
console.log(biggestNumber);


