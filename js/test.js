"use strict";

console.log("Hello world!");
console.log("Я учу JS");

function validatePIN(pin) {
  const yes = true;
  const no = false;
  const a = /^[0-9]+$/.test(pin);
  if (a && (pin.length === 4 || pin.length === 6)) {
    console.log("true");
  } else {
    console.log("false");
  }
}

validatePIN("12345");
validatePIN("1111");
validatePIN("1234");
validatePIN("a234");


