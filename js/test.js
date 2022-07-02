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



// ✅ Логически и синтаксически сгруппированные сущности
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Это метод объекта
  getBooks() {
    console.log(this.books);
  },
  // Это метод объекта
  addBook(bookName) {
    console.log("Этот метод будет добавлять новую книгу в свойство books");
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook("Новая книга");







// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissful" },
//   { name: "Ajax", age: 3, mood: "tired" },
// ];

// function getAllPropValues(arr, prop) {
//   for (let i = 0; i < users.length; i += 1) {
//     let arr = Object.entries(users[i]);

//     users[i] = arr;

//     const index = users[i][0].indexOf(prop);
//     let newArr = [];

//     newArr.push(users[i][0][1]);

//     console.log(newArr);
//   }

//   return newArr;
// }
