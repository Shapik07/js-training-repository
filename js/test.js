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

function countProps(object) {
  let propCount = 0;
  for (const key in object) {
    if (propCount.hasOwnProperty(key)) {
      
    }
  }
  console.log(propCount)
}

countProps({});
countProps({ name: "Mango", age: 2 });
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

Продолжаю 