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
  let newArray = [];
  for (const product of products) {
    if (product.name === propName) {
      newArray.push(product.name);
    }
  }
}





//  let newArray = [];
//  for (const product of products) {
//    newArray.push(product.name);
//  }



  // let newArray = [];
  // for (const product of products) {
  //   if (product.key === propName) {
  //     newArray.push(product[key]);
  //   }
  // }

  // console.log(newArray)

