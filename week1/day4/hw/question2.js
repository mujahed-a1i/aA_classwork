// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

function range(start, end) {
    if (start > end){
        console.log('Change order of range');
    }
    let rangeArray = [];
    for(let i = start; i <= end ; i++){
        rangeArray.push(i);

    }
    return rangeArray;
}

console.log(range(1,4));