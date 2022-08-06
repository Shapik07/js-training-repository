"use strict";

function reverseWords(str) {
  const newStr = str.split(" ").map(function (a) {
    return a.split("").reverse().join('')
  }).join(' ')

  console.log(newStr);
}

reverseWords("The quick brown fox jumps over the lazy dog.");
