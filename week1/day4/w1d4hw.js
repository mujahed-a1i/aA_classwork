// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

let arr = [Anthony, John, Carson];
function logEach(array){
    for(let i = 0; i < array.length; i++){
        console.log(i + ": " + array[i]);
    }

}
logEach(arr);

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

function range(start, end){
    if (start > end) {
        return "Bad Range";
      }
    
      for (var i = start; i <= end; i += 1) {
        console.log(i);
      }
}

range (5, 10);
