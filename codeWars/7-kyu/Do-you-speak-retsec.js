// Task
// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

function reverseByCenter(s){
  
  if(s.length%2 === 0) {
    const count = s.length/2;
    const firstPart = s.slice(count);
    const secondPart = s.slice(0, count);
    const reverse = [...firstPart, ...secondPart];
    return reverse.join('');
  } else {
    const count = Math.floor(s.length / 2)
    const left = s.slice(0, count);
    const right = s.slice(count +1);
    const middle = s[count];
    const reverse = [...right, middle, ...left];
    return reverse.join('');
}
} 