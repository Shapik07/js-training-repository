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



function countTotalSalary(salaries) {
  let totalSalary = 0;
  const zp = Object.values(salaries);

  for (const money of zp) {
    totalSalary += money;
  }

  return totalSalary;
}

// totalSalary;

countTotalSalary({});
countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });