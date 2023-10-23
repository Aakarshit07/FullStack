// Q1. Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

let convertToNumber = (num) => {
    try {
        let res = Number(num);

        if(isNaN(res)) {
            throw new Error("Invalid Conversion");
        }
        
        return res;
    } catch (error) {
        return error.message
    }
}

console.log(convertToNumber("0"));
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));