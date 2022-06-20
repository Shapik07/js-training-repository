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

function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray)

    if (newArray.length > maxLength) {
        console.log(newArray.slice(0, maxLength))
    }

    // console.log(newArray)
}

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);