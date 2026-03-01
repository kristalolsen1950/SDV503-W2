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
// Arithetic
5 + 3 //8 10-4//6 4*3 //12
9 / 2 //4.5 9%2 //1 2**3//8
//Comparison - always prefer === over ==
5=== //true 5 !==3 // true (stict: checks type + value)
5 == '5' //true 5 === "5"// false (loose vs strick)
10>3 //true 4<=4 //true
//Logical
true && false //false true || false //true !true //false
//Assigment shorthands
let x = 10; x+=5;//15 x-=2;//13 x*=2;//26git