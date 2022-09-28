//Expression Evaluation Round 1
console.log(4+4/2); // 6
console.log((2 + -7) * 3); // -15
console.log(101 % 10); // -1
console.log(12 - 4 % 3); // 11
console.log(true && false); // false
console.log(true && !(false || false)); // true
console.log(!true && !(false || false)); // false
console.log('cat' + 'dog'); // catdog
console.log(2 + 'pizza'); // 2pizza
console.log(2.5 * 'fish'); // NaN
console.log(5>=11); // false
console.log(5 === 5.0); // true
console.log(7 !== 7.1); // true 
console.log(5 + 5 > 8); // true 
console.log(6 + 6 !== 12); // false
console.log(2 > 1 || false); // true 
console.log('true' === true); // false
console.log(10 % 2 === 0); //true 
console.log(21 % 2 === 0); // false
console.log(21 % 2 !== 0); //true  
console.log(21 % 2 === 1); // true 
console.log(12 % 3 === 0); //true
console.log(9 % 3 === 0); //true 
console.log(14 % 3 === 0); //false
console.log('new york'[0]); // n 
console.log('new york'[1]); // e
console.log('san fransciso'[2 * 3]); // a
// indexOf is case sensitive
console.log('bootcamp'.indexOf('T')); // -1   -1 means no match found
console.log('bootcamp'.indexOf('camp')); // 4
console.log('bootcamp'.indexOf('o') > -1); // true 
console.log('science'.indexOf('x') === -1); //true 

//Expression Evaluation Round 2
// Problem 1
let idx = 'abcde'.indexOf('D'); 
idx = idx + 11 //
console.log(idx); // 10
idx * 2; // the value of * 2 is thrown away bc idx is not reassigned 
console.log(idx); 10

// Problem 2
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); // false 
console.log(!isEven); // true

// Problem 3 
let str1 = 'marker'
let num1 = 'whiteboard'.length - str1.length;
console.log(num1); // 4

// Problem 4 
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1]; // to get the last letter by indexing 
console.log(lastChar);
console.log(sentence.indexOf(lastChar)); // 18

//Conditionals 
//Problem 5
let age = 56
if (age > 30) {
    console.log('older than 30')
}else {
    console.log('younger than 30')
}
// older than 30

// Problem 6
let str = 'bread'
if (str.length > 10){
    console.log('long strong');
}else {
    console.log('short string')
}
// short string

// Problem 7
let num2 = 36;
if (num2 % 3 === 0){
    console.log('divisible by 3'); 
} else if (num2 % 5 === 0) {
    console.log('divisible by 5');
}
// divisble by 3

// Problem 8
let num3 = 47;
if (num3 % 3 === 0){ 
    console.log('divisble by 3');
} else {
    console.log('not divisible by 3')
}
if (num3 % 5 === 0) {
    console.log('divisble by 5');
}

// Problem 9
let str2 = 'App AcademY'
if (str2[0] === str2[0].toUpperCase()) {
    console.log('starts with a capital!')
}
if (str2[str.length - 1] === str2[str2.length -1]){
    console.log('ends with a capital!')
}



    

