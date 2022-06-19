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


function getExtremeElements(array) {
  const newArray = []
  for (let i = 0; i < array.length; i += 1) {
    if (i = array[0]) {
      const firstElement = array[0]
      console.log(firstElement);
    }
    
  // console.log(firs);
  
}
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
