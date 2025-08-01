// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


function longest(s1, s2) {
  
  let result = [];
  
  const concat = s1 + s2
  for(const el of concat) {
    !result.includes(el) ? result.push(el) : null;
  }
  
  return result.sort().join('')
}