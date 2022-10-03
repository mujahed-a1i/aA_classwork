console.log("hello world") // string data type
console.log(2) // number data type
console.log(2+2)
console.log(2*5)
console.log(10-3)
console.log(10/3)
console.log(10%3) // number data type
console.log(10%2) // if a number modulo returns a 0 then the number is even if not then it is odd

// || = or operator
console.log(true||true) // returns true
console.log(true||false) // returns true 
console.log(false||true) // returns true
console.log(false||false) // returns false
// && = and operator
console.log(true&&true) // returns true
console.log(true&&false) // returns false
console.log(false&&true) // returns false
console.log(false&&false) // returns false
// ! = bang (negate) operator
console.log(!true) // returns false
console.log(!!true) // returns true
console.log(!false) // returns true
console.log(10 > 10)
console.log(10 < 20)
console.log(25 >= 5)
console.log(25 <+ 25)
console.log(12 === 11) //always use triple =       triple = compares the data type and double = does not care about data type
console.log(12 !== 11)
console.log(12 == "12")

let str = "hello"
console.log(str[1]) //= 'e'
console.log("hello"[1]) // returns the index's character
console.log("hello".length) //length gives the number of characters
console.log("hello".indexOf('h')) //returns the index numnber
console.log("hello".indexOf('l'))
console.log("hello".indexOf('x'))
console.log("hello".indexOf("hello")) //shows what index the (hell) starts from

//String Concatenation
console.log("race".concat("car"))
console.log("race" + "car")
console.log("hello" + " " + "world")
console.log(4 + "hi") // a number that concats a string, the number coerce (changes) into a string 
console.log(4 * "hi") 
console.log(4 * '10')

console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase());
console.log("hello".slice()); // no argument for slice gives a copy of a string
console.log("hello".slice(2)); // .slice(2) deletes till  2 and then keeps the rest
console.log("hello".slice(1,3)); // slice (1 is inclusive, 3 is excluse)

/* Variable Declaration
old ES5 - var
new ES6 - let or const
*/

let name = "Mujahed";
console.log(name);
console.log(name==="Mujahed");
console.log(name = "Kevin");
console.log(name);

/* Good Naming Convention
do     let name = "Victor"
don't  let name = 25;
don't  let number = "amazing"
*/

let test;
console.log(test); //returns undefined

//Conditionals 

if(20===20){
    console.log("they are equal")
}else{ 
    console.log("not equal")
}

let num = 20;
if(num === 20){
    console.log("equals 20")
}else if(num>20){
    console.log("greater")
}else {
    console.log("less than")
}

/* Conditions
Falsey values
Undefined
Null
Nan
0
-0
""
false
*/

