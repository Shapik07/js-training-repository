// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
   const newArr = numbers.sort((a, b) => a - b)
   if(newArr[0] === newArr[1]){
     return newArr[newArr.length -1]
   } return newArr[0]
}