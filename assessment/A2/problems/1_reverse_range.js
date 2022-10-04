/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  let array = [];
  for (let i = start + 1; i < end; i++){ 
    if (start > end){
        return array;
    } else if (start < end){
      array.unshift(i);
    } 
    
  }
  return array;

}
console.log(reverseRange(2,7));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
