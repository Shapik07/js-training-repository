"use strict";

// const animals = ['cow', 'cat', 'dog', 'elephant']

// console.log(animals.push('horse'))
// console.log(animals.pop())

// (() => {
//   let a = null;
//   if (true) {
//     a = 7;
//   }

//   function result1() {
//     console.log("result-1:", a);
//   }

//   function result2() {
//     let a = 10;
//     console.log("result-2:", a);

//     result1();
//   }

//   result2();
// })();

// [].map.call('Ivan', (item) => console.log(item))

// let a = {
//   b: 3,
//   getContext() {
//     [1, 2, 3, 4].forEach((item) => {
//       console.log(item);
//       console.log(this);
//     });
//   },
// };

// a.getContext();

let total = 0;
const multiply = (a, b) => {
  total = a * b;
  console.log(a * b);
};
const multiply5 = (result, number) => console.log(result * number);

multiply(10, 5);
multiply5(total, 5);
