//console.log numbers 1 - 10
console.log('1 \n2 \n3 \n4 \n5 \n6 \n7 \n8 \n9 \n10');

// for(intializor; conditional; increment) i is called iterator 
for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log('After the loop');

console.log('For Loop');
//Write a function printRang(start, end) that prints the range between start and end. 
// for loop
function printRange(start,end){
    for(let i = start; i <= end; i++){
        console.log(i);
    }
}
printRange(3,10);

console.log('While Loop');
// while loop, you don't need an iterator
function printRange1(start, end){
    let i = start;
    while(i <= end){
        console.log(i);
        i++;
    }
}
printRange1(7,21); 

/*
let i = 20;
while(i === 20){
    console.log(i);
}
*/

/*
let j = 20;
while(true){
    console.log(j);
}
*/

console.log('skip5');
function skipFive (num){
    for (let k = 1; k <= num; k++){
        if (k === 5){
            continue
        }
        console.log(k);
    }
}
skipFive(20); 