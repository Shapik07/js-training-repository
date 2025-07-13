// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// // If the string's length is even, return the middle 2 characters.

function getMiddle(s) {
  const shortLength = s.length === 1 || s.length === 2 ? s : null;
  const unpairedQuantityIndex = Math.floor(s.length / 2);
  
  if(shortLength) {
    return shortLength
  } else if(s.length > 2 && s.length % 2 === 0 ) {
  const result = s[unpairedQuantityIndex - 1] + s[unpairedQuantityIndex];
  return result 
} else {
  return s[unpairedQuantityIndex]
}
}