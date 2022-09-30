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
  const imt = weight / (height * height);
  let result = "";
  if ((imt <= 18, 5)) {
    result = "Underweight";
  } else if (imt <= 25.0) {
    result = "Normal";
  } else if (imt <= 30.0) {
    result = "Overweight";
  } else {
    result = "Obese";
  }
  console.log(result);
}

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
