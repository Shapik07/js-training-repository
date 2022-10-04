// Sum Numbers
function sum(numbers) {
  let total = 0;
  if (numbers.length === 0) {
    return 0;
  }
  numbers.forEach((element) => {
    total += element;
  });
  return total;
}

sum([]);
sum([1, 5.2, 4, 0, -1]);

// ____________________________________________

var number = function (array) {
  const newArray = [];
  let number = 0;
  array.map((item) => {
    newArray.push(`${(number += 1)}: ${item}`);
  });
  return newArray;
};

const myArray = ["a", "b", "c"];

number(myArray);

// ____________________________________________

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.map((item) => {
    if (item === true) {
      count += 1;
    }
  });
  return count;
}

const arraySheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

countSheeps(arraySheep);

// ____________________________________________

function SeriesSum(n) {
  total = 1;
  if (n === 0) {
    (total = 0), 00;
  } else if (n === 1) {
    (total = 1), 00;
  } else {
    let count = 4;
    for (let i = 1; i < n; i += 1) {
      total = total + 1 / count;
      count += 3;
    }
  }
  return total.toFixed(2);
}

SeriesSum(3);

// ____________________________________________

function bmi(weight, height) {
  let bmi = weight / height ** 2;
  let result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (bmi < 25) {
    result = "Normal";
  } else if (bmi < 30) {
    result = "Overweight";
  } else {
    result = "Obese";
  }
  return result;
}
bmi(80, 1.8);

// ____________________________________________

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const result = distanceToPump / mpg === fuelLeft ? true : false;
  return result;
};

zeroFuel(50, 25, 2);

// ____________________________________________

function solution(str) {
  const string = str.split("").reverse().join("");
  return string;
}

solution("dlrow");

// ____________________________________________

function isPangram(string) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const array = string.toUpperCase().split("");
  for (let element of alphabet) {
    if (!array.includes(element)) {
      if (element === " ") {
        continue;
      }
      return false;
    }
  }
  return true;
}

isPangram("The quick brown fox jumps over the lazy dog");
isPangram("This is not a pangram");

// ____________________________________________

function duplicateEncode(word) {
  let newWord = {};
  const array = word.toLowerCase().split("");
  array.reduce((acc, letter) => {
    if (!newWord[letter]) {
      newWord[letter] = 0;
    }
    newWord[letter] += 1;
  }, newWord);

  const DATA = Object.entries(newWord);
}

duplicateEncode("din");
duplicateEncode("recede");
// duplicateEncode("Success");