//Javascipt is dynamically typed ,typescript is statically typed

//how data is stored and accessed datatype is divided into two types

//Primitive (call by value)
// 7 types : string, number, boolesn, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
//these two ids are different and not same

console.log(id === anotherId);

const bigNumber = 3456543576654356754n;

// Reference (Non Primitive)
// Arrays, Objects, Functions

const heros = ["spider man", "dare devil", "punisher"];

let myobj = {
  name: "krish",
  age: 22,
};

const myFunction = function(){
    console.log("hello");   
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

