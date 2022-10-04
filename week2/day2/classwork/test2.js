// Function Decomp & Objects
// - JS Datastructure
// - mutatable 
// - key has value pairs
// - key are ALWAYS A STRING
// - value can be anything
// - keys are unique
    // - keys can not be the same, if so you must reassign
// - Objects are undorrdwered, arrays are ordered; 

let dog = {}; //undefined 

// Bracket Notation
// We can create new key-value pairs using bracket notation [] and assignment =. 
// Notice that the key inside the brackets is represented with a string:

dog['name'] = 'Rover'     
dog['type'] = 'Husky'
dog['name']; 
dog['type']; 


// Dot Notation
// We can also use what's called dot notation . to set up our key-value pairs. 
// When we use dot notation, we don't need to use string quotes as the key:



let cat = {
    'name': 'whiskers',
    'color': 'black',
    'toys': {
        outside: ['ball', 'whistle'],
        inside: ['blanket']
    }

}
// cat['name'] = 'Jael';
// cat['age'] = 21;
// console.log(cat);
// console.log(cat['color']);

// cat.name;
// cat.age;
// cat.toys.outside[0];
// console.log(cat.test);
// let test = 'name';
// console.log(cat[test]);
// console.log(cat.test)

// loop through object
function printObject(obj){
    for (let key in obj){
        console.log(key);
        console.log(obj[key]);
    }
}

printObject(cat);