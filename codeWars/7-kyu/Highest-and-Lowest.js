// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  
const arr = numbers.split(' ').map(Number)
const max = Math.max(...arr)
const min = Math.min(...arr)

return `${max} ${min}`
}