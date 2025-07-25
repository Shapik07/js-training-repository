// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.


function getDivisorsCnt(n) {
  let counter = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === n / i) {
        counter += 1;
      } else {
        counter += 2;
      }
    }
  }

  return counter;
}
