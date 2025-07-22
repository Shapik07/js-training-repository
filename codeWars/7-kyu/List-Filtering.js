// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  const result = [];

  for (const el of l) {
    typeof el === "number" ? result.push(el) : null;
  }

  return result;
}
