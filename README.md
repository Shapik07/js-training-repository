# js-training-repository

<!-- проверка на комменты (текст не важен) -->

------------------- МОДУЛЬ 2 (ЗАДАЧИ) -------------------

===== ЗАДАЧА 21 =====

function findLongestWord(string) {

const array = string.split(" ");
let longestWord = [0];

for (let i = 0; i <= array[i].length; i += 1) {
if (array[i].length > longestWord.length) {
longestWord = array[i]
}
} console.log(longestWord);
}

===== ЗАДАЧА 22 =====

function createArrayOfNumbers(min, max) {
const numbers = [];
for (let i = min; i <= max; i += 1)
numbers.push(i)
return numbers;
}

===== ЗАДАЧА 23 =====

function filterArray(numbers, value) {
const newArray = [];
for (let element of numbers) {
if (element > value) {
newArray.push(element);
}
}return newArray;
}

===== ЗАДАЧА 24 =====

function checkFruit(fruit) {
const fruits = ["apple", "plum", "pear", "orange"];
return fruits.includes(fruit) ? true : false;
}

===== ЗАДАЧА 25 =====

function getCommonElements(array1, array2) {
let newArray = [];
for (let i = 0; i < array1.length; i += 1) {
for (let j = 0; j < array2.length; j += 1) {
if (array1[i] === array2[j]){
array2[j].includes
newArray.push(array2[j])
}
}
}
return newArray;  
}

===== ЗАДАЧА 26 =====

function calculateTotalPrice(order) {
let total = 0;
for (let element of order) {
total += element;
}
return total;
}

===== ЗАДАЧА 27 =====

function filterArray(numbers, value) {
const filteredNumbers = [];
for (let number of numbers) {
if (number > value) {
filteredNumbers.push(number);
}
}
return filteredNumbers;
}

===== ЗАДАЧА 28 =====

const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

===== ЗАДАЧА 29 =====

