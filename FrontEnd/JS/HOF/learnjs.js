// Basic Higher Order Function (First-Class Function)

const powerTwo = (n) => {
    return n ** 2;
}

function powerCube(powerTwo, n) {
    return powerTwo(n) * n;
}
// console.log(powerCube(powerTwo, 3));

function sayHello() {
    return () => {
        console.log("Hello Aakarshir")
    }
}

let guessValue = sayHello()
console.log(guessValue);
// to actually print my function i have to call this function like it is written below 
guessValue();


// Complex part of HOF

const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return n + m + p;
        }
        return twoFun;
    }
    return oneFun;
}

// syntax for printing this type of nested HOF

console.log(higherOrder(2)(3)(4));



// - Example
const myNums = [2, 3, 4, 5];

const sumArray = arr => {
    let total = 0;
    arr.forEach(function(element) {
        total = total + element;
    });
    return total;
}

console.log(sumArray(myNums));



function oneMoreHello(){
    console.log("Hello Wolrd !", Math.random())
}
// setInterval in this it will execute after the give time again and again.... 
// setInterval(oneMoreHello,1000);

// setTimeout in this it will execute after the given time for once only.
// setTimeout(oneMoreHello, 2000)

