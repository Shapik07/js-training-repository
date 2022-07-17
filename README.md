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

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let res = []
  for (const product of products) {
    product[propName] ? res.push(product[propName]) : null;
}
  return res
}

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

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
const finalSettings = {...defaultSettings, ...overrideSettings};

===== ЗАДАЧА 30 =====

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
return {...{completed, category, priority}, ...data}
}

===== ЗАДАЧА 31 =====

function add(...args) {
  let newArray = 0
  for (const arg of args) {
    newArray += arg
  }
  return newArray
}

===== ЗАДАЧА 32 =====

function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (firstNumber < arg) {
      total += arg
    }
  }
  return total;
}

===== ЗАДАЧА 33 =====

function findMatches(firstElement, ...args) {
  const matches = []; 
  const newArray = [...firstElement, ...args];
  for (let i = 0; i <= newArray.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (newArray[j] === newArray[i]) {
        matches.push(newArray[j]);
      }
    }
  }
  return matches;
}

===== ЗАДАЧА 34 =====

const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook() {
   return "Deleting book Red sunset"
  },
  updateBook(bookName) {
   return `Updating book ${bookName} to Dune`
  }
};


===== ЗАДАЧА 35 =====

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    this.books.splice(this.books.indexOf(oldName), 1, newName)
  },
};

===== ЗАДАЧА 36 =====

const atTheOldToad = {
  potions: []
};

===== ЗАДАЧА 37 =====

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
getPotions() {
  return this.potions
}
};

===== ЗАДАЧА 38 =====

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
   this.potions.push(potionName)
  },
};

===== ЗАДАЧА 39 =====

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
   this.potions.splice(this.potions.indexOf(potionName), 1)
  },
};

===== ЗАДАЧА 40 =====

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
   this.potions.splice(this.potions.indexOf(oldName), 1, newName)
  },
};

===== ЗАДАЧА 41 =====

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
addPotion(newPotion) {
    const { potions } = this;
    const { name: newName} = newPotion;

    for (const { name } of potions) {
      if (name === newName) {
      return `Error! Potion ${newName} is already in your inventory!`;
      }
  }
  potions.push(newPotion)
  },

  removePotion(potionName) {
    const { potions } = this;

for (let i = 0; i < potions.length; i += 1) {
 if (potionName === potions[i].name) {
   potions.splice(i, 1);
    }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for(const potion of this.potions) {
		       if (potion['name'] === oldName) {
			 potion['name'] = newName;
		       }
		    }
		  }
  // Change code above this line
};


------------------- МОДУЛЬ 4 (ЗАДАЧИ) -------------------

===== ЗАДАЧА 1 =====

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

===== ЗАДАЧА 2 =====

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
return callback(pizzaName)
}

===== ЗАДАЧА 3 =====

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
console.log(`Eating pizza ${pizzaName}`)
});

===== ЗАДАЧА 4 =====

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if(this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName)
    }
    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  },
};
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
  return `Error! ${error}`;
}

pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

===== ЗАДАЧА 5 =====

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function(number,index) {
    totalPrice += number;
  });

  return totalPrice;
}

===== ЗАДАЧА 6 =====

function filterArray(numbers, value) {
  const filteredNumbers = [];

numbers.forEach(function(number, index) {
  if(number > value) {
    filteredNumbers.push(number)
  }
})

  return filteredNumbers;
}

===== ЗАДАЧА 7 =====

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function(element) {
    if (secondArray.includes(element)) {
    commonElements.push(element)
  }
})

  return commonElements;
}

===== ЗАДАЧА 8 =====

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}

===== ЗАДАЧА 9 =====

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

===== ЗАДАЧА 10 =====

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

===== ЗАДАЧА 11 =====

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

===== ЗАДАЧА 12 =====

const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
}

===== ЗАДАЧА 13 =====

function changeEven(numbers, value) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
      continue
    } newArray.push(numbers[i])
  }
  return newArray;
}

===== ЗАДАЧА 14 =====

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map(planet => planet.length);

===== ЗАДАЧА 15=====

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map(book => book.title);

===== ЗАДАЧА 16 =====

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap(book => book.genres);

===== ЗАДАЧА 17 =====

const getUserNames = users => {
    const names = users.map(user => user.name)
    return names
  };

===== ЗАДАЧА 18 =====

const getUserEmails = users => {
    const emails = users.map(user => user.email)
    return emails
  };

===== ЗАДАЧА 19 =====

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(even => even % 2 === 0);
const oddNumbers = numbers.filter(odd => odd % 2 !== 0);

===== ЗАДАЧА 20 =====

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);

===== ЗАДАЧА 21 =====

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter (book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter (book => book.author === AUTHOR);

===== ЗАДАЧА 22 =====

const getUsersWithEyeColor = (users, color) => {
 const userEye = users.filter(user => user.eyeColor === color)
return userEye
};

===== ЗАДАЧА 23 =====

const getUsersWithAge = (users, minAge, maxAge) => {
 const userAge = users.filter(user => user.age >= minAge && user.age <= maxAge)
return userAge
};

===== ЗАДАЧА 24 =====

const getUsersWithFriend = (users, friendName) => {
   const friendNames = users.filter(user => user.friends.includes(friendName))
   return friendNames
};

===== ЗАДАЧА 25 =====

const getFriends = (users) => {
   const userFriends = users.flatMap(user => user.friends)
   const uniqueFriends = userFriends.filter((friend, index, array) => array.indexOf(friend) === index)
   return uniqueFriends
};

===== ЗАДАЧА 26 =====

const getActiveUsers = (users) => {
   const activeUsers = users.filter(user => user.isActive === true)
   return activeUsers
};

===== ЗАДАЧА 27 =====

const getInactiveUsers = (users) => {
   const notActiveUsers = users.filter(user => user.isActive !== true)
   return notActiveUsers
};

===== ЗАДАЧА 28 =====

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

===== ЗАДАЧА 29 =====

const getUserWithEmail = (users, email) => {
   const userEmail = users.find((user) => user.email === email)
   return userEmail
};

===== ЗАДАЧА 30 =====

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

===== ЗАДАЧА 31 =====

const isEveryUserActive = (users) => {
    const activeUsers = users.every(user => user.isActive)
    return activeUsers
};

===== ЗАДАЧА 32 =====

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

===== ЗАДАЧА 33 =====

const isAnyUserActive = users => {
   const activeUsers = users.some(user => user.isActive)
   return activeUsers
};

===== ЗАДАЧА 34 =====

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players);

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number
});

const averagePlayTime = totalPlayTime / playtimes.length;

===== ЗАДАЧА 35 =====

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
const totalAveragePlaytimePerGame = players.reduce(
  (total, player,) => {
    return total + (player.playtime / player.gamesPlayed);
  },
  0
);

===== ЗАДАЧА 36 =====

const calculateTotalBalance = users => {
   return users.reduce((total, user) => total + user.balance, 0)
};

===== ЗАДАЧА 37 =====

const getTotalFriendCount = users => {
   return users.reduce((total, user) => total + user.friends.length, 0)
};

===== ЗАДАЧА 38 =====

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

===== ЗАДАЧА 39 =====

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

===== ЗАДАЧА 40 =====

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

===== ЗАДАЧА 41 =====

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((firstElement, secondElement) => firstElement.author.localeCompare(secondElement.author));

const sortedByReversedAuthorName = [...books].sort((firstElement, secondElement) => secondElement.author.localeCompare(firstElement.author));

const sortedByAscendingRating = [...books].sort((miRaiting, maxRating) => miRaiting.rating - maxRating.rating);

const sortedByDescentingRating = [...books].sort((minRating, maxRating) => maxRating.rating - minRating.rating);

===== ЗАДАЧА 42 =====

const sortByAscendingBalance = users => {
   const balanceRating = [...users].sort((minBalance, maxBalance) => minBalance.balance - maxBalance.balance)
   return balanceRating
};

===== ЗАДАЧА 43 =====

const sortByDescendingFriendCount = users => {
   
   const friends = [...users].sort((minFriends, maxFriends) => maxFriends.friends.length - minFriends.friends.length);

   return friends
};

===== ЗАДАЧА 44 =====

const sortByName = users => {
   const userName = [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name))
   return userName
};

===== ЗАДАЧА 45 =====

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = [...books]
.filter(book => book.rating >= MIN_BOOK_RATING)
.map(names => names.author)
.sort((a, b) => a.localeCompare(b))

===== ЗАДАЧА 46 =====

const getNamesSortedByFriendCount = users => {
   const amountFriends = [...users].sort((minFriends, maxFriends) => minFriends.friends.length - maxFriends.friends.length)
   const userNames = amountFriends.map(name => name.name)
   return userNames
};

===== ЗАДАЧА 47 =====

const getSortedFriends = users => {
   const allFriends = [...users].flatMap(user => user.friends)

   const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index)

   const nameIsOrder =  uniqueFriends.sort()

   return nameIsOrder
};

===== ЗАДАЧА 48 =====

const getTotalBalanceByGender = (users, gender) => {

   const userGenred = [...users].filter(peopleGenred => peopleGenred.gender === gender)

   const userBalance = userGenred.flatMap(peopleMoney => peopleMoney.balance)

   const overallBalance = userBalance.reduce((previousValue, balance) => {
       return previousValue + balance
   }, 0)

   return overallBalance
};

------------------- МОДУЛЬ 5 (ЗАДАЧИ) -------------------

===== ЗАДАЧА 1 =====

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],

  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

===== ЗАДАЧА 2 =====

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

===== ЗАДАЧА 3 =====

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
};

===== ЗАДАЧА 4 =====

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent)

child.name = "Jason";
child.age = 27;

===== ЗАДАЧА 5 =====

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

===== ЗАДАЧА 6 =====

class Car {
    
}

===== ЗАДАЧА 7 =====

class Car {
  constructor(brand, model, price) {
    this.brand = brand,
    this.model = model,
    this.price = price
  }
}

===== ЗАДАЧА 8 =====

class Car {

  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

===== ЗАДАЧА 9 =====

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice(price) {
    return this.price
  }

  changePrice(price) {
    this.price = price
  }
}

===== ЗАДАЧА 10 =====

class Storage {

    constructor(items) {
        this.items = items
    }

    getItems() {
        return this.items
    }

    addItem(newItem) {
      return this.items.push(newItem)
    }

    removeItem(itemToRemove) {
        const remove = this.items.indexOf(itemToRemove)
       return this.items.splice(remove, 1)
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

===== ЗАДАЧА 11 =====

class StringBuilder {

    constructor(value) {
        this.value = value
    }

    getValue() {
        return this.value
    }

    padEnd(str) {
        this.value = this.value + str
    }

    padStart(str) {
        this.value = str + this.value
    }

    padBoth(str) {
        this.value = str + this.value + str
    }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

===== ЗАДАЧА 12 =====

class Car {

  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand
  }

  changeBrand(newBrand) {
    this.#brand = newBrand
  }
}

===== ЗАДАЧА 13 =====

class Storage {

  #items

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

===== ЗАДАЧА 14 =====

class StringBuilder {

  #value

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

===== ЗАДАЧА 15 =====

class Car {
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

===== ЗАДАЧА 16 =====

class Car {
  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice > Car.MAX_PRICE) {
      return this.#price
    }
    this.#price = newPrice;
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

===== ЗАДАЧА 17 =====

class Car {
  static #MAX_PRICE = 50000;
static checkPrice(price) {
  if(price > Car.#MAX_PRICE) {
    return "Error! Price exceeds the maximum"
  }
    return "Success! Price is within acceptable limits"
}
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

===== ЗАДАЧА 18 =====

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static AccessLevel = {
    BASIC: "basic", SUPERUSER: "superuser"
  }
}

===== ЗАДАЧА 19 =====

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  constructor({email, accessLevel}) {
    super(email, accessLevel)
  }
  
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

===== ЗАДАЧА 20 =====

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel, blacklistedEmails = [] }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = blacklistedEmails;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email)
  }

  isBlacklisted(email) {
   return this.blacklistedEmails.includes(email)
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true