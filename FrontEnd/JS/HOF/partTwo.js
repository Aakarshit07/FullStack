let arr = [2, 3, 4]

arr.forEach(function(element, index, arr) {
    console.log(index, element, arr);
});

arr.forEach((element, index, arr) => {
    console.log("Arrow Function: ",index, element, arr);
});

const heros = ["naagraj", "doga", "heman", "maniraj"];

heros.forEach((el) => {console.log(el.toUpperCase())});

//Map 
console.log("Map Output: ")
arr.map(function(element, index, arr){
    console.log(element, index, arr);
})

heros.map((h) => (console.log(h.toUpperCase())));


//Filters it only returns the value that satisfied the condition 

const herosWithRaj = heros.filter((h) => {
    return h.endsWith('raj');
})

console.log(herosWithRaj);


// shopping cart

const cartBill = [20, 30, 50];
// syntax for --> reduce((previousValue, currentValue) => { previousValue + currentValue, 0 (--> this is a pervious value and it changes with this we can even set cart minium value)});
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfCartBill);


// check if all values are numbers
// - every 
// if i add any other datatype in this array it will give the output false;
const gameScore = [200, 310, 300, 250, 150];
console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
console.log("Check: ", gameScoreCheck);


// Find method 
// so in find method jo bhi first value iss condition ko satisfy kregi ye usko hi print krega 
const above200 = gameScore.find((score) => score > 200);

console.log(above200);


// Assignment -->
//  findIndex
const isHighScore = gameScore.findIndex((highScore) => highScore > 300);
console.log(isHighScore);

//  some
// is there is any empty array it always print false because this function only check the existing values ki vo yha per hai ki nhi
const isEven = [ 1, 3, 15, 7, 9, 16];
const isNumberEven =  isEven.some((even) => even % 2 == 0);
console.log(isNumberEven);

//  sort it is bit compleicated 
function compareNumbers(a, b){
    return a - b;
}
isEven.join()
isEven.sort()
console.log(isEven.sort(compareNumbers));

