// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.



function isAnagram(test, original) {
  
  const normalize = (str) => [...str.toLowerCase()].sort().join('')
  
  if(normalize(test) === normalize(original)) {
    return true
  } else {
    return  false 
  }
  
}


// true +  `The word "${test}" is an anagram of "${original}"`
// false + `Characters do not match for test case "${test}", "${original}"`