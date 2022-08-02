"use strict";

console.log("Hello world!");
console.log("Я учу JS");

const str = "How can mirrors be real if our eyes aren't real";

function myStr() {
  this.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ');
}

