"use strict";

function sumArray(array) {

  let total = 0;

  if (array == null) {
    return 0
  } else if (array.length < 2) {
    return 0
  } else { 
      const tallerNumber = Math.max(...array);
      const smallerNumber = Math.min(...array);

      for (const element of array) {
        total += element;
      }
    
     return total - tallerNumber - smallerNumber;
  }
}
console.log(sumArray([3]));
sumArray([6, 2, 1, 8, 10]) // 16
sumArray([0, 1, 6, 10, 10]); // 17
sumArray([-6, -20, -1, -10, -12]) // -28


