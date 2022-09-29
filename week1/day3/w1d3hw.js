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

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.

function isFactorOf(number, factor){
    if (number % factor === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isFactorOf(25,5));

// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.

function fizzbuzz(max){
    for (i = 0; i <= max; i++){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        }
        else if (i % 3 !== 0 && i % 5 === 0){
            console.log(i)
        }
    }
}
fizzbuzz(15);

function fizzbuzz1(max){
    i = 0;
    while(i <= max){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        }
        else if (i % 3 !== 0 && i % 5 === 0){
            console.log(i)
        }
        i++;
    }
}

fizzbuzz1(23);

// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.

function isPrime(number){
    if (number < 2){
        return false;
    }
    let i = 2;
    while (i < number){
        if(number % i === 0){
        return false;  
        } 
        i++
    }
    return true; 
}

console.log(isPrime(23));

function func1(num) {
    return num + 50;
  }

// Muscle memory
function printForwards(start, end) {
    for (let counter = start; counter <= end; counter++) {
      console.log(counter);
    }
  }
  
printForwards(4, 11); // feel free to change the numbers being passed



function printForwards1(start, end){
    for (let counter = start; counter <= end; counter++){
        console.log(counter);
    }
}
printForwards1(15,18);

function printForwards2(start, end) {
    for(let counter = start; counter <= end; counter++){
        console.log(i);
    }
}

printForwards2(23,27);

function printForwards3(start, end) {
    for (counter = start; counter < end; counter++){
        console.log(counter)
    }
}
printForwards3(99, 103);

function printForwards4(start, end){
    for(counter = start; counter < end; counter++){
        console.log(counter);
    }
}

printForwards4(14,18);

function printForwards5(start, end){
    for (counter = start; counter < end; counter++){
        console.log(counter)
    }
}

printForwards5(24,27);

function printBackwards(start, end) {
    var i = end;
    while (i >= start) {
      console.log(i);
      i--;
    }
  }
  
  printBackwards(-5, 6);

function printBackwards(start, end){
    let counter = end;
    while (counter >= start){
        console.log(counter);
        counter--;
    }
}

printBackwards(56, 59);

function printBackwards1(start, end){
    let counter = end;
    while(counter >= start){
        console.log(counter)
        counter--;
    }
}
printBackwards1(20,23)

function printBackwards2(start, end){
    let counter = end;
    while (counter >= start){
        console.log(counter);
        counter--;
    }
}
printBackwards2(97,100);

function printBackwards3(start, end){
    let counter = end;
    while(counter >= start){
        console.log(counter);
        counter--;
    }
}
printBackwards3(95,99);


function printBackwards4(start, end){
    let counter = end;
    while(counter >= start){
        console.log(counter);
        counter--;
    }
}


printBackwards4(77, 80);

function func1(num) {
    return num + 50;
  }
  
    function func2(num) {
    return num + " bottles of beer on the wall";
  }
  
  function func3(num) {
    var x = func1(num);
    return func2(x);
  }
  
  var result = func3(5);
  console.log(result);

  var foo = function(name) {
    return "Dance " + name + ", dance! "
  }
  
  var bar = function() {
    var str = "";
  
    for (var i = 0; i < 3; i += 1) {
      str += foo("Anthony");
      str += foo("Haseeb");
      str += foo("Winnie");
      str += " | ";
    }
  
    return str;
  }
  
  var result = bar();
  console.log(result);