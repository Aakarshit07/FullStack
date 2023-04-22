// - creating a function

function greet() {
    console.log("Hello !");
    console.log("How are you?");

}

function sqr(x) { // x -> parameter
    // console.log(x*x);
    
    return x*x;
    // if we only return; it give us undefined
}

greet();

let a = sqr(8)
console.log(a) // 8 -> arguement


// - Function Without a Parameters and return

function sayHello() {
    console.log("Hey World");
}

sayHello();
sayHello();
sayHello();

// - Function With returning Value

function yourName() {
    return "I am Aakarshit"
}

let myName = yourName();
console.log(myName);


// - Function With a Parameter ( single or multiple)

function add(x, y = 20) { // if i assign the default value of x and y or either of them, so when i will assign new value to the parameter it over write the default value, where as if i dont give another value to the parameter it will print the default value  
    return x + y;
}

let sum = add(20);
console.log(sum)


// - Dont Do this

// function add(x = 20, y) { 
//     return x + y;
// }

// let sum = add(20);  // - if i assign the value of x and then try to pass new arguement in the same parameter, that gonna create problem because when we assign arguements it asign palues from left to right.
// console.log(sum)


// - Multiple Parameters Function

function numberMultiply(num1, num2 = 10) {
    return num1 * num2;

}
let multiply = numberMultiply(20);
console.log(multiply);

function addThreeNumbers([numb1 = 10, numb2 = 10, numb3 = 10]) {
    return numb1 + numb2 + numb3;
}

let threeNumberArraySum = addThreeNumbers([20, 20]); 
console.log(threeNumberArraySum);


// - How to pass unlimited numbers of arguements in the function and how to handle this contition

function sumOfUnlimitedNumbers() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
let args = sumOfUnlimitedNumbers(10, 20, 30, 30, 20, 10);
console.log("The sum of given arguements: ", args);


// - Arrow Functions

// - 1. One parameter, and a single return statement
const square = (x) => x * x;

// - 2.  Multiple Parameters, and a single return Expression
const sumOfTwoNumbers = (x, y) => x + y;

// - 3. Multiple Statements in function expression
const addition = (x, y) => {
    console.log(x, y)
    return x + y;
};

// - 4. Returning an object
const sumAndDifference = (x, y) => ({sum: x + y, dfference: x - y});

// - calling of an function
let output1 = square(5);
let output2 = sumOfTwoNumbers(10, 20);
let output3 = addition(10, 5);
let output4 = sumAndDifference(20, 5);


// - Anonymous Functions 
// - we dont used complex function logic in anonymous functios because its hard to debug them
let x = function() {
    console.log("Hello There!")
}
x();


// - Imediately invoking function 
// - it means that function will call itself and only used when we dont need of that function to used in future in our program
// - Syntax - wrap the function in between the parantheses (function({}))(arguement/parameter if any);

(function yourPhoneBrand() { // - these type of function also called named function expression
    console.log("Samsung") 
})();

// - Anonymous function example of imediatly invoking function

(function (x) { // - these type of function also called anonymous function expression
    console.log(x * x);
})(5);


// - Self invoking function are also know as Immediate invoking function are same in JavaScript

