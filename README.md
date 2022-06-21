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

===== ЗАДАЧА 26 =====

function calculateTotalPrice(order) {
let total = 0;
for (let element of order) {
total += element;
}
return total;
}
