// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

function everyOtherWord(sentence){
    let array = sentence.split(' ');
    let otherWordArray = [];
    for (let i = 0; i < array.length; i += 2) {
            otherWordArray.push(array[i]);
        }
    return otherWordArray;

}

console.log(everyOtherWord('hello how are you doing on this lovely day?'));
