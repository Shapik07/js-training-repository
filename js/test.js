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









const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];


function getAllPropValues(propName) {
  let newArray = []
  let newArrayName = [];
  let newArrayPrice = [];
  let newArrayQuantity = [];
  for (const product of products) {
    if (product.name === propName) {
      newArrayName.push(product.name)
        return newArrayName
    } else if (product.price === propName) {
      newArrayPrice.push(product.price)
      return newArrayPrice
    } else if (product.quantity === propName) {
      newArrayQuantity.push(product.quantity)
      return newArrayQuantity
    } else {
      return newArray
    }
   }
  }


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }
