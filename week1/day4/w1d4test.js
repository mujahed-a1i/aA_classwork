//Arrays
let arr = ['c' , 'a' , 't'] 

let str = 'cat';
str[0] = 'x';

console.log(str);

// strings are inmutable, you can't change parts of a string
// arrays are mutable, you can change parts of an array
// the elements of arrays can be anything

arr[0] = 'x';
console.log(arr);

let arr1 = ['hi', 10, 9, true, undefined, null, [1,2]];
console.log(arr1);

console.log(arr1[0]);// hi
console.log(arr1[6]); // [1,2] 
console.log(arr1[6][0]); // [1,2] 1

let fruits = ['apple', 'orange', 'pear'];
console.log(fruits.length); // 3
console.log(fruits.indexOf('pear')); // 2
console.log(fruits.includes('watermelon')); // false
fruits.push('watermelon'); //.push adds an element to the end
console.log(fruits);

fruits.pop(); // .pop removes an element to the end
console.log(fruits);

fruits.unshift('grape'); // .unshift adds an element to the beginning 
console.log(fruits);

fruits.shift(); // .shift removes from the front 
console.log(fruits);

/* Mutating an array methods
.push adds an element to the end
.pop removes an element to the end
.unshift adds an element to the beginning 
.shift removes from the front 
*/ 

/* Non-mutating methods
.slice() copies the original
.slices(5) the previous the indexes and includes index 5 and after [ 6, 7, 8, 9, 10 ]
.slice(0,2) includes the 0 index and goes up the 1st index. excludes index 2 [1,2]
.split(' ') makes a string into an array [ 'hi', 'my', 'name', 'is', 'Xander' ]

*/

// Non-mutating methods
console.log('\nNon-mutating methods');
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(fruits.concat(numbers));
console.log(fruits);
console.log(numbers.slice()); // .slice() copies the original
console.log(numbers.slice(5)); // slices(5) the previous the indexes and includes index 5 and after [ 6, 7, 8, 9, 10 ]
console.log(numbers.slice(0,2)); // .slice(0,2) includes the 0 index and goes up the 1st index. excludes index 2 [1,2]

let string = 'hi my name is Xander';
console.log(string.split('')); // .split(' ') makes a string into an array [ 'hi', 'my', 'name', 'is', 'Xander' ]
console.log(string);

console.log(numbers.join(" ")); // .joins the array into a string


for(let i = 0; i < numbers.length; i++){
    let ele = numbers[i];
    console.log(ele);
}

for (let i = numbers.length - 1; i >= 0; i--){
    let ele = numbers[i];
    console.log(ele);
}

