// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
const arr = [...x]
let newArr = []

for(const element of arr){
const grade = Number(element)
if(grade < 5) {
newArr.push(0)
} else {
newArr.push(1)
}
}
  return newArr.join('')
}