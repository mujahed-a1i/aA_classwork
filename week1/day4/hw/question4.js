// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']

function capWords(words){
    let allWords = words.join(' ');
    let capitalWords = allWords.toUpperCase();
    let array = capitalWords.split(' ');
    return array; 
}

function capWords1(words){
    let capitalArray = [];
    for (let i = 0; i < words.length; i++){
        let word = words[i];
        let capitalWords = word.toUpperCase();
        capitalArray.push(capitalWords);
    }
    return capitalArray;
}

console.log(capWords(['hello', 'boOtCaMp', 'PREP!']));
console.log(capWords1(['hello', 'boOtCaMp', 'PREP!']));

