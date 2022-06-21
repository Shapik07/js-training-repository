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
