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

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};
