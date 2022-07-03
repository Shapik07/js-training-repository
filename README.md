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

function getEvenNumbers(start, end) {
let result = [];
for (let i = start; i <= end; i += 1) {
if (i % 2 === 0) {
result.push(i);
}
}
return result;
}

===== ЗАДАЧА 30 =====

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
if (i % 5 === 0) {
number = i;
break;
}
}

===== ЗАДАЧА 31 =====

function findNumber(start, end, divisor) {
let number;

for (let i = start; i < end; i += 1) {
if (i % divisor === 0) {
number = i;
return number;
}
}
}

===== ЗАДАЧА 32 =====

function includes(array, value) {
for (let element of array) {
if (element === value) {
return true
}
} return false
}



------------------- МОДУЛЬ 3 (ЗАДАЧИ) -------------------

===== ЗАДАЧА 1 =====

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr:  "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"]
};


===== ЗАДАЧА 2 =====


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com"
  }
};


===== ЗАДАЧА 3 =====

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;


===== ЗАДАЧА 4 =====


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];

===== ЗАДАЧА 5 =====


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];

===== ЗАДАЧА 6 =====

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push ("trusted");


===== ЗАДАЧА 7 =====

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston"
};


===== ЗАДАЧА 8 =====

===== ЗАДАЧА 9 =====

===== ЗАДАЧА 10 =====

===== ЗАДАЧА 11 =====

===== ЗАДАЧА 12 =====

===== ЗАДАЧА 13 =====

===== ЗАДАЧА 14 =====

===== ЗАДАЧА 15 =====

===== ЗАДАЧА 16 =====

===== ЗАДАЧА 17 =====

===== ЗАДАЧА 18 =====

===== ЗАДАЧА 19 =====

===== ЗАДАЧА 20 =====

===== ЗАДАЧА 21 =====

===== ЗАДАЧА 22 =====

===== ЗАДАЧА 23 =====

===== ЗАДАЧА 24 =====

===== ЗАДАЧА 25 =====

===== ЗАДАЧА 26 =====
