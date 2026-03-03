console.log ("hello world")

var name2 = "Alice"; //function-scoped, hoisted-aviod using var in modern JavaScript
let age2 = 25; //block-scoped, can be reassigned 
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

console.log("hello world")
const msg = "hello javascriptt!";
msg.length //18
msg.toUpperCase() //"HELLO, JAVASCRIPT!"
msg.toLowerCase() //"hello, javascript!"
msg.includes("Java") //true
msg.startsWith("He") // true
msg.indexOf("Java") // 7
msg.slice(7,17) // "JavaScript"
msg.replace("Hello", "Hi") //"Hi, JavaScript!
msg.split(",") // ["Hello", "JavaScript!"]
" hi ".trim() // "hi"

console.log(msg.toUpperCase())
console.log(msg.replace("Hello", "Hi"))

const name1 = "Ali";
const age = 25;
// Old way - concatenation (error-prone)
const msg1 = "Hello, " + name1 + "! You are " + age + " years old.";
// New way - template literals (cleaner and more readable)
const msg2 = `Hello, ${name1}! You are ${age} years old.`;
// Multi-line strings
const html = `
<div class="card">
    <h2>${name1}</h2>
    <p>Age: ${age}</p>
</div>
`;
// Any expression works inside ${}
const total = `Price: $${(12.99 * 3).toFixed(2)}`; // "Price: 38.97"
console.log(`The length of the message is: ${msg2.length}`)