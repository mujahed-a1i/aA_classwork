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

function threeOr7(num3) {
    return (num3 % 3 === 0) || (num3 % 7 === 0)
}

console.log(threeOr7(49));

// hello function
function hello(name){
    return ('Hello ' + name + '.');
}

console.log(hello("Muja"));

// yell function
function yell(str1){
    return (str1.toUpperCase());

}
console.log(yell('hi there'));

function yell1(str2){
    yelledstr = str2.toUpperCase() + '!';
    return (str2.toUpperCase());

}
console.log(yell1('omg')); 

// whisper function
function whisper(str3){
    return (str3.toLowerCase());
}
console.log(whisper("MY NAME IS MUJAHED"))

function whisper1(str4){
    whisperstr = str4.toLowerCase();
    return (whisperstr);
}

console.log(whisper1('I AM TRYING TO WHISPER'))

// Even function
function isEven(even){
    return (even % 2 === 0);
}

console.log(isEven(26));

//Average of 4 function

function avgOf4(n1,n2,n3,n4) {
    return ((n1 + n2 + n3 + n4) / 4);
}

console.log(avgOf4(12, 15, 25, 20));

function sayHello(name1){
    let msg = ('Hello, ' + name1 + '. How are you?');
    return msg;
}

console.log(sayHello('Francis'))


function numcheck (num4){
    if(num4 > 0) {
        return console.log(num4 + " is a positive number.");
    } else if (num4 < 0){
        return console.log(num4 + " is a negative number.");
    } else (num4 = 0)
        return console.log(num4 + ' is both a postitive and negative number.');
    
}

console.log(numcheck(36));