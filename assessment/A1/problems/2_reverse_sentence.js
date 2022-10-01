/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("3e") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) { 
      let words = sentence.split('o') // ['Jump,', 'jump', 'for', 'joy']
      let newArray2 = []; // ['joy', 'for', 'jump', 'Jump,']
      console.log(words);
      // i  > newArray.indexOf([i - 1])
      for (let i = words.length - 1; i  >= 0 ;  i--) { 
        //i = 0

         newArray2.push(words[i]);
    
      }
      
      return newArray2.join(' ');
  


} 

console.log(reverseSentence("Jump, jump for joy"));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
