// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  const arr = [...s];
  const result = [];
  for(const element of arr) {
    element !== '!' ? result.push(element) : null;
  }
  
return result.join('');
}