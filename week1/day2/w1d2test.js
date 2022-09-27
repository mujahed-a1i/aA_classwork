function foo(){
    return "bar"
} 

let foo2 = function (){
    return 'bar';
}

let foo3 = () => {
    return 'bar';
}

function name(p1, p2){
    return p1 + " " + p2;
}
console.log(name('Jon','Diaz'));

function average(num1, num2){
    let sum = num1 + num2;
    let avg = sum/2
    return avg;
}

function average2(num1, numb2){
    let sum = sumNums(num1, num2)
    let avg = sum/2
    return avg;
}

function sumNums(num1, num2){
    return (num1 + num2);
}

console.log(average(14,12));
