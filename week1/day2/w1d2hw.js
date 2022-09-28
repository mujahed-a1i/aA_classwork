// Odd Number Function
function isOdd(num){
    if (num % 2 !== 0){
        return ('The nummber is odd')
    } else {
        return ('The number is false')
    }
};

console.log(isOdd(5));

// Add 5 function 

function add5 (num1){
    return (num1 + 5);
}

console.log(add5(15));

// divisble by 3 or 7 function 

function threeOrSeven (num2){
    if(num2 % 3 === 0 && num2 % 7 === 0){
        return ('The number is divisible by both 3 or 7')
    }
    else if(num2 % 3 === 0) {
        return ('The number is divisible by 3');
    } else if (num2 % 7 === 0){
        return ('The number is divisble by 7');
    } else (num2) 
        return ('The number is not divisible by both 3 and 7');
    
}

console.log(threeOrSeven(55));