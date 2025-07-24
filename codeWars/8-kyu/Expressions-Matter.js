// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.


function expressionMatter(a, b, c) {
  const results = [
    a + b + c,
    a * b * c,
    a + b * c,
    a * b + c,
    (a + b) * c,
    a * (b + c),
  ];

  return Math.max(...results);
}