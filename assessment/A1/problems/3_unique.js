/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  let newArray = []; 
  for(i = 0; i < array.length ; i++){
    if (newArray.indexOf(array[i]) === -1){
      newArray.push(array[i]);
    }
    
  }
  return newArray;
  
  
}

console.log(unique([1, 1, 2, 3, 3]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
