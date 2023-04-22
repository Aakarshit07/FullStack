// Hello worldwith node js

console.log('Aakarshit')

// Variables and data types

// - Primitive data types
// - number - 1, 2, 3.5, 4, 5
// - String - "aakarshit" or 'aakarshit'
// - Boonlean - true or false
// - null 
// - undefined


// - Non-primitive data types 

// - Array = [1, 2, 3.5, 'hello', true, 4, 5] 
// - objects = {}



// - Beginner challange code

let pwSkillCoursePrice = 200;
let gst = 36;
let totalCourseAmount = pwSkillCoursePrice + gst;
//console.log("Final Amount to be Paid: ",totalCourseAmount);

let pwDsaCourse = 500;
// console.log("Final Amount of DSA Course: ", pwDsaCourse + gst);

// console.log("Answer is : ", 5 % 2) // modulo
// console.log("Answer is : ", 5 / 2) // divide
// console.log("Answer is : ", 5 ** 2) // to the power


let myHighScore = 200;
let yourHighScore = 300;
let myNewHighScore =300;
let yourNewHighScore = "300";
console.log(myHighScore == yourHighScore);

console.log(myNewHighScore == yourHighScore);

console.log(myNewHighScore == yourNewHighScore); // Js tries to convers the string into number sincce it is able to convert it perfectly in our case so its true

console.log(myNewHighScore === yourNewHighScore); // here in conversion it aslo checks the type. 

console.log(myHighScore != yourHighScore); // true because we asking that its not equal to yourhighscore


let value1 = true;
let value2 = false;
let value3 = true;
let value4 = false;

console.log(value1 && value3)

// - Real World example of using and and or operatos 
let loginDetails = true
let cardDetails = false

console.log(loginDetails && cardDetails) // so here if both values are true then we cna buy stuff from website

// if my website allows user to login using different platforms so here what we use  && or ||?

let gmailLogin = true;
let emailLogin = false;

console.log(gmailLogin || emailLogin) //website will allow the user to login even if he login from one way either email or gmail.

