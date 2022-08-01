"use strict";

console.log("Hello world!");
console.log("Я учу JS");


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};


function makeList(arr) {
  const failureItems = [
    `<li class="text-warning">${arr}</li>`,
    `<li class="text-warning">${arr}</li>`,
    `<li class="text-warning">${arr}</li>`,
  ];

  return failureItems;
}

const failuresList = makeList(result.failure);