// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return n === 0 ? [0] : n.toString().split("").reverse().map(Number);
}
