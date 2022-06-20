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

// // function calculateTotal(number) {
// //   let result = [];
// //   let i = 0;
// //   do {
// //     i += 1;
// //     result += i + "";
// //   } while (i < number);

// //   console.log(result)
// }

function findLongestWord(string) {
    let longWord = '';
    const words = string.split(" ");

    for (const element of words) {
      
    if (element.length > longWord.length) {
        longWord = element;
    }
  }console.log(longWord)
}


findLongestWord("The quick brown fox jumped over the lazy dog");
