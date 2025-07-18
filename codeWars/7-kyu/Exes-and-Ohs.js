// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let o = [];
  let x = [];

  for (const el of str) {
    if (el === "x" || el === "X") {
      x.push(el);
    } else if (el === "o" || el === "O") {
      o.push(el);
    }
  }
  return o.length === x.length ? true : false;
}
