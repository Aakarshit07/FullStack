// - Arrays

// let a = [1, 2, 3, 4, "hello", 6.5]
// console.log(a)

// creating array uisng different way

// let b = new Array(5) // defines array length
// let c = new Array("abc", "def", "efg")
// console.log(b, ", ", c)

/* 
    given array - >      [10, 21, 32, 43, 54]
    indexes/position - >   [0, 1, 2, 3, 4]       // - Last element index = arr.length - 1 

*/

// console.log(a[4])
// a[4] = 5;
// console.log(a);




// - ArraysMethods

// - push method
let a = [1,2,3,4,5]
a.push(6, 7)
console.log(a)

// - pop methods
a.pop()
console.log(a)

// - shift method
a.shift()
let f = a.shift()
console.log(f)
console.log(a)

// - unshift method

a.unshift(9)
console.log(a)

// - concation medthod to merge two array

let a1 = [1,2,3,4]
let a2 = [5,6,]
let a3 = a1.concat(a2)
console.log(a3)

// -  to club or covert the arrayinto string we use join method

let s = a3.join(" @ ") // what ever the character we give to join it displays that character between two indexes of array 
console.log(s)


// - reverse of an array
a3.reverse();
console.log(a3)

// - indexof method
console.log(a3.indexOf(10));


// - search an contagious elements of an array 

let arr = [11, 22, 33, 44, 55, 66, 77]
console.log(arr.slice(2, 5));

// - splice method used to add elements in between of an array either by removing the existing element or by not removing.
// - syntax --> arr.splice(position,how many elements we want to delete, elements we want to add)

arr.splice(2, 0, 100) // 0 means no element removed from the position we gave
console.log(arr)

arr.splice(2, 1, 100, 200) // 1 means 1  element removed from the position we gave
console.log(arr)

arr.splice(2, 2, 300, 400) // 2 means 2 element removed from the position we gave 
console.log(arr)