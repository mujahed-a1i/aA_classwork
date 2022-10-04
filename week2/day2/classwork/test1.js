// Function Decomposition & Objects
// break down a problem into several functions. why?
        // cleaner code 
        // manage complexity


// Write a function laligatSum(n) that takes in a number and returns the laligatSum
// of that number. A number's laligat sum is the the sum of all the prime numbers less than or equal
// to that number.
    // ex: laligat sum of 10 is: 2 + 3 + 5 + 7 = 17
    // ex: laligat sum of 17 is: 2 + 3 + 5 + 7 + 11 + 13 + 17 = 58
    // ex: laligat sum of 11 is: 2 + 3 + 5 + 7 + 11 = 28

function isPrime(number) {
    if (number < 2){
        return false;
    } 
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}

function laligatSum(num){
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if(isPrime(i)){
            sum += i
        }
    }
    return sum;
}

console.log(laligatSum(10));
console.log(laligatSum(17));