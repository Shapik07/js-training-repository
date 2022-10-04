"use strict";

const string = "Hello i am string";
const array = [1, 2, 3, 4, 5];
const object = {
  element1: 1,
  element2: 2,
  element3: 3,
};

const newString = [...string];
const newArray = [...array];
const newObject = { ...object };

console.log(newString);
console.log(newArray);
console.log(newObject);

function multiply(...args) {
  console.log(args); // массив всех аргументов
}

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

