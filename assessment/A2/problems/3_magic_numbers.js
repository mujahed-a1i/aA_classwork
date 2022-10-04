/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

magicNumbers(20) => [4, 6, 8, 16, 18]
*******************************************************************************/

function magicNumbers(max) {
  let array = [];
  for (i = 0; i < max; i++ ){
    if(i % 4 === 0 && i % 6 !== 0){
      array.push(i)
    } else if(i % 4 !== 0 && i % 6 === 0){
      array.push(i)
    }
  }
  return array;
}
console.log(magicNumbers(20) )

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
