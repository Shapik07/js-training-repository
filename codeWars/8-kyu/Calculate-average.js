// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
  let result = 0;

  if(array.length === 0) return 0;

  for(const number of array) {
result = result + number
} return result / array.length
}