/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine ") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
    let words = sentence.split(' ');
    let newArray = [];
    // console.log(array);
    // indexOf I, we, ours, me
    for (let i = 0; i < words.length; i++){
      let word = words[i]
      if (word === 'I'){
        newArray.push('we');
      } else if (word === 'mine'){
        newArray.push('ours')
      } else if (word === 'my') {
        newArray.push('our')
      } else if (word === 'me'){
        newArray.push('us');
      } else {
        newArray.push(word);
      }
      
    }
    return newArray.join(' ');
}
 

console.log(royalWe("I want to go to the store"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
