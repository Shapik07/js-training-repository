"use strict";

// const string = "Hello i am string";
// const array = [1, 2, 3, 4, 5];
// const object = {
//   element1: 1,
//   element2: 2,
//   element3: 3,
// };

// const newString = [...string];
// const newArray = [...array];
// const newObject = { ...object };

// console.log(newString);
// console.log(newArray);
// console.log(newObject);

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

function polidrom(numberAsString) {
  const arrayNumber = numberAsString.split('')
  const reverseNumber = arrayNumber.reverse().join('')
  if (numberAsString === reverseNumber) {
    console.log(`${numberAsString}, this is polidrom`);
    return;
  }
  console.log(`${numberAsString}, this is not polidrom`);
} 

polidrom('123')
polidrom('1001')
polidrom('123321')
polidrom('1234567')

