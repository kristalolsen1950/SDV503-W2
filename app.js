console.log ("hello world")

var name = "Alice"; //function-scoped, hoisted-aviod using var in modern JavaScript
let age = 25; //block-scoped, can be reassigned 
const pi = 3.14159; //blocked-scoped, cannot be reassigned 
let score = 0;
score = 10; //ok-reassinment allowed for let
const max = 100;
//max = 200; //typeerror: assigment to constant variable
let homeAdress = "123 main road"
let userAge = 30;

console .log("userAge")
console .log (typeof userAge)


