// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.console.log('for loop for function logBetween');

// logbetween function for loop
function logBetween(lowNum, highNum){
    for (i = lowNum; i <= highNum; i++){
        console.log(i);
    }
}
logBetween(7, 8);

//logBetween function while loop 
console.log('while loop for function logBetween');
function logBetween1(lowNum, highNum){
    i = lowNum;
    while (i <= highNum){
        console.log(i);
        i += 1; 
    }
}
logBetween1(36, 40);

// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.

function logBetweenStepper(min, max, step){
    for (i = min; i <= max; i += step){
        console.log (i);

    }

}
logBetweenStepper (0, 30, 5);

//function logBetweenStepper while loop
function logBetweenStepper1(min, max, step){
    i = min;
    while (i <= max){
        console.log(i);
        i += step;
    }

}

logBetweenStepper1 (0, 30, 10);

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional

function printFives(max){
    for(i = 0; i < max; i++) {
    if(i % 5 === 0){
        console.log(i);
        }
    }

}

printFives(43);

function printfives1(max){
    i = 0;
    while(i < max){
        if (i % 5 === 0){
            console.log(i);
        }
        i++;
    }
}

printfives1(56);

function printFives2(max){
    for (i = 0; i < max; i += 5){
        console.log(i);
    }
}

printFives2 (23);

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
function printReverse(min, max){
    for (i = max - 1; i > min; i--){
        console.log(i);
    }
}

printReverse(50, 75);

function printReverse1(min, max){
    i = max - 1;
    while(i > min){
        console.log(i);
        i--;
    }
    
}

printReverse1(36, 40);

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.

function sumNums(max){
    let sum = 0;
    for(i = 1; i <= max; i++){
        sum += i; 
    }
    return sum;
}
console.log(sumNums(4));

