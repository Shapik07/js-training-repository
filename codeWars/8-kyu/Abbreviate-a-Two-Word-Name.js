// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.


function abbrevName(name) {
  const arr = name.split(" ");
  const result = `${arr[0][0]}.${arr[1][0]}`;
  return result.toUpperCase();
}