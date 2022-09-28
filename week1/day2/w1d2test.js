// defining a function #1
function foo(){
    return "bar"
} 

// defining a function #2
let foo2 = function (){
    return 'bar';
}

// defining a function #3
let foo3 = () => {
    return 'bar';
}


function name(p1, p2){
    return p1 + " " + p2;
}
//calling a function
console.log(name('Jon','Diaz'));

function average(num1, num2){
    let sum = num1 + num2;
    let avg = sum/2;
    return avg;
}

// calling a function
console.log(average(14,16));

function average2(num1, num2){
    let sum = sumNums(num1, num2)
    let avg = sum/2
    return avg;
}

console.log(average2(65,35));

function sumNums(num1, num2){
    return (num1 + num2);
}

console.log(average2)


