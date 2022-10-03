// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:
//
// myIndexOf([1,2,3,4],4) => 3
// myIndexOf([5,6,7,8],2) => -1

function myIndexOf(array, target) {

    for (let i = 0; i < array.length; i++) {
      let num = array[i];
  
      if (num === target) {
        return i;
      } else {
        return -1
      }
    }

  }

  console.log(myIndexOf([1,2,3,4],5));