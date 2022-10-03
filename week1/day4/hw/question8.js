// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//
// Examples:
//
// factorArray([2,3,4,5,6],20) => [2,4,5]
// factorArray([2,3,4,5,6],35) => [5]
// factorArray([10,15,20,25],5) => []y

function factorArray(array, number) {
    let factorArray = [];
    for (let i = 0; i < array.length; i++){
        if (number % array[i] === 0){
            factorArray.push(array[i]);
        } 
    }
    return factorArray;

} 
console.log(factorArray([2,3,4,5,6],20));