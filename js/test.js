"use strict";

function opposite(number) {
  if (number === 0) {
    console.log(0)
  } else if (number > 0) {
    console.log(-Math.abs(number));
  } else {
    console.log(Math.abs(number));
  }
}

opposite(1);
opposite(0);
opposite(4.25);
opposite(-5);


