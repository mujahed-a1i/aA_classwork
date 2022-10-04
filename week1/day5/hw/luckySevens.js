// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(max){
    let array = [];
    for (let i = 0; i <= max; i++){
        if (i % 7 === 0){
            array.push(i);
        }
    }
    return array;
}

console.log(luckySevens(25));

