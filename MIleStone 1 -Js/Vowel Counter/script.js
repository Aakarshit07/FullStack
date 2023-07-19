// Using RegX
let string = prompt("Please Enter a Name")
const reg = /[aeiou]/gi
let  letters =  string.match(reg);
document.write(letters.length, "String is: ", string)
console.log(letters.length, "myString is ", string);
