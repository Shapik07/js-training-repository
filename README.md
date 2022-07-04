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

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

===== ЗАДАЧА 9 =====

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName] : "henry.carter@aptmail.com",
  [passwordInputName] : "jqueryismyjam"
};

===== ЗАДАЧА 10 =====

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key)
  values.push(apartment[key])
}

===== ЗАДАЧА 11 =====

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {

if(apartment.hasOwnProperty(key)) {
keys.push(key);
values.push(apartment[key]);
}

}

===== ЗАДАЧА 12 =====

function countProps(object) {
  let propCount = 0;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1
    }
  }
  return propCount;
}

===== ЗАДАЧА 13 =====

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key])
}

===== ЗАДАЧА 14 =====

function countProps(object) {
  // Change code below this line
  let propCount = 0;
  let keys = Object.keys(object)

  for (const key of keys) {
    propCount += 1
  }

  return propCount;
  // Change code above this line
}

===== ЗАДАЧА 15 =====

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

===== ЗАДАЧА 16 =====

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const zp = Object.values(salaries)

for (const money of zp) {
  totalSalary += money
}

  return totalSalary;
}

===== ЗАДАЧА 17 =====

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
 for (const color of colors) {
   hexColors.push(color.hex)
   rgbColors.push(color.rgb)
 }

===== ЗАДАЧА 18 =====

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const key of products) {
    if (key.name === productName) {
      return key.price;
    }
    } return null
  }

===== ЗАДАЧА 19 =====

===== ЗАДАЧА 20 =====

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let total = 0;
  for (const product of products) {
    if (product.name === productName) {
     total = product.price * product.quantity
    }
}return total

===== ЗАДАЧА 21 =====

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

===== ЗАДАЧА 22 =====

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

===== ЗАДАЧА 23 =====

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

===== ЗАДАЧА 24 =====

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

===== ЗАДАЧА 25 =====

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" }, tomorrow: { low:lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast



===== ЗАДАЧА 26 =====

function calculateMeanTemperature(forecast) {
const {today:{low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

===== ЗАДАЧА 27 =====

const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

===== ЗАДАЧА 28 =====

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

===== ЗАДАЧА 29 =====

===== ЗАДАЧА 30 =====

===== ЗАДАЧА 31 =====

===== ЗАДАЧА 32 =====

===== ЗАДАЧА 33 =====

===== ЗАДАЧА 34 =====

===== ЗАДАЧА 35 =====

===== ЗАДАЧА 36 =====

===== ЗАДАЧА 37 =====

===== ЗАДАЧА 38 =====

===== ЗАДАЧА 39 =====

===== ЗАДАЧА 40 =====

===== ЗАДАЧА 41 =====