// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.



function isIsogram(str){
  let result = [];
  
  for(const el of str) {
    
    !result.includes(el.toLowerCase()) ? result.push(el.toLowerCase()) : null;
 
  }
  
  return result.length === str.length ? true : false;
}