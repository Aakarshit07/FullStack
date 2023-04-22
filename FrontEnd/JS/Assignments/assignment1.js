// Qustion 1 : - Data Types with example
/*
   There are following typs of data types
   1. Numbers: 
      integet:  1, 2, 3,
      infinity: Number.POSITIVE_INFINITY, Number.Negative_INFINITY
      floating value: 6.5
      Not a Number: NaN  

   2. String:  "Hello!, I'm learning fullstack web development from Pw skills"
   
   3. Null:    null

   4. Undefined: undefined
   
   5. Boolean: true or false

   6. Bigint: 1024n

   7. Object: 
    Array: [1, 2, "PW"]
    Objects: {name: "Arashi", course: "FSWD"}

   8. Symbole: Symbole('PW Skills') 

*/

// let number = 6;
// console.log(`${number} * 1 = ${number  * 1}`)
// console.log(`${number} * 2 = ${number  * 2}`)
// console.log(`${number} * 3 = ${number  * 3}`)
// console.log(`${number} * 4 = ${number  * 4}`)
// console.log(`${number} * 5 = ${number  * 5}`)
// console.log(`${number} * 6 = ${number  * 6}`)
// console.log(`${number} * 7 = ${number  * 7}`)
// console.log(`${number} * 8 = ${number  * 8}`)
// console.log(`${number} * 9 = ${number  * 9}`)
// console.log(`${number} * 10 = ${number * 10}`)

// let comp1 = 12
// let comp2 = 10;

// console.log(comp1 == comp2);

// let comp3 = 12
// let comp4 = 12;

// console.log(comp3 == comp4);

// let comp5 = 12
// let comp6 = 10;
// console.log(comp5 != comp6);

// let comp7 = 10;
// let comp8 = 12;
// console.log(comp7 === comp8);

// let comp9 = 10;
// let comp10 = 10;
// console.log(comp9 === comp10);

// let comp11 = 10;
// let comp12 = 12;
// console.log(comp11 !== comp12)

// let comp13 = 10;
// let comp14 = 20;
// console.log(comp13 < comp14)

// let comp15 = 100;
// let comp16 = 20;
// console.log(comp15 < comp16)

// let comp17 = 10;
// let comp18 = 10;
// console.log(comp17 <= comp18)

// let comp19 = 12;
// let comp20 = 10;
// console.log(comp19 > comp20)

// let comp21 = 12;
// let comp22 = 10;
// console.log(comp21 > comp22)

// let comp23 = 12;
// let comp24 = 100;
// console.log(comp23 > comp24)

// let comp25 = 100;
// let comp26 = 100;
// console.log(comp25 >= comp26)

// let isGreen = false;
// let yellow = false;
// let red = true;

// if(isGreen) {
//    console.log(" You can Pass")
// }

// else if(yellow)  {
//    console.log("Ready to Go")
// }

// else {
//    console.log("Vhicle must Stope")
// }

// Fizz Buzz

// let num = 5;

// if (num % 5 == 0 && num % 3 == 0 ) {
//    console.log("FizzBuzz");

// } else if(num % 3 == 0){
//    console.log("Fizz");

// } else if(num % 5 == 0) {
//    console.log("Buzz");

// } else {
//    console.log("Invalid Input");
// }

// const day = "Tuesday";
// let daysUntilWeekend;

// switch (day) {

//    case "Monday" :
//       console.log("5 Days left for weekend")
//    break

//    case "Tuesday":
//       console.log("4 Days left for weekend")
//    break

//    case "Wednesday" :
//       console.log("3 Days left for weekend")
//    break

//    case "Thrusday":
//       console.log("2 Days left for weekend")
//    break

//    case "Friday" :
//       console.log("1 Day left for weekend")
//    break

//    case "Saturday":
//    case "Sunday":
//       console.log("Its weekend")
//    break;

//    default :
//    daysUntilWeekend = "Invalid Input";
//    break
// }

// let monthNum = 6;

// switch (monthNum) {
//   case 1:
//     console.log("January");
//     break;

//   case 2:
//     console.log("Faburary");
//     break;

//   case 3:
//     console.log("March");
//     break;

//   case 4:
//     console.log("April");
//     break;

//   case 5:
//     console.log("May");
//     break;

//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;

//   case 8:
//     console.log("August");
//     break;

//   case 9:
//     console.log("September");
//     break;

//   case 10:
//     console.log("October");
//     break;

//   case 11:
//     console.log("November");
//     break;

//   case 12:
//     console.log("December");
//     break;

//    default:
//       console.log("Invalid Month Number"); 
// }



// let inputNum = 0;
// inputNum == 0 ? console.log("Number Is Zero") : (0 < inputNum) 
// ? console.log("Number is greater than zero") : console.log("Number Lesser than zero");

// let n1 = 12;
// let n2 = 3;

// n1 > n2 ? console.log("n1 is greater than n2") : console.log("n2 is greater than n1");


// let tableOf = 5;

// for(let i = 1; i <= 10; i++) {
//    console.log(`${tableOf} * ${i} = ${tableOf * i}`)
// }


// 2. Write a program that prints all the positive even numbers till the number specified.


let evenNum = 33;

for (let i = 1; i <= evenNum; i++){
      if(i % 2 == 0){
         console.log(`${i} is Positive Even Number`);
      }
}

