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

console.log(arr1[0]);
console.log(arr1[6]);
console.log(arr1[6][0]);