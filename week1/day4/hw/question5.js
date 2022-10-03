// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

function wordPeriods(sentence){
    let array = sentence.split(' ')
    let periodArray = [];
    for(i = 0; i < array.length; i++){
        periodArray.push(array[i] + '.');
    }
    return periodArray.join(' ');
}

console.log(wordPeriods('what is the weather today'));