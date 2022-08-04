"use strict";

// function nbYear(p0, percent, aug, p) {
//   let element = p0;
//   let total = 0;
//   let ourPercent = percent / 100;
//   let step = p0 * ourPercent + aug;
//   for (element = p0; element < p; element += step) {
//     total += 1;
//   }
//   console.log(total);
// }

// function nbYear(p0, percent, aug, p) {

//   let total = 0;
//   let ourPercent = percent / 100;
//   for (var p0; p0 <= p; p0 += p0 * ourPercent + aug) {
//     total += 1;
//   }
//   console.log(total);
// }

function nbYear(p0, percent, aug, p) {
  let element = p0;
  let ourPercent = percent / 100;

  let total = 0;
  let step = () => element * ourPercent + aug;
  for (/* no-op */; element < p; element += step()) {
    total += 1;
  }
  console.log("total", total);
  return total;
}




nbYear(1500, 5, 100, 5000); // 15
nbYear(1500000, 2.5, 10000, 2000000); // 10
nbYear(1500000, 0.25, 1000, 2000000); // 94
