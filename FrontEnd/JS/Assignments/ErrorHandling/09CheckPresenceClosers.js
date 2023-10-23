// 9. Check the presence using closures.


// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
// returned function should take another number as an argument and return true if the number is in the array, and
// false otherwise.

function numberChecker(array) {

    return function checkNum(num){

        return array.includes(num);

    }

}
const arr = [1, 62, 33, 84, 35,88, 65, 70, 18]
const checkNum = numberChecker(arr)

console.log(checkNum(33));