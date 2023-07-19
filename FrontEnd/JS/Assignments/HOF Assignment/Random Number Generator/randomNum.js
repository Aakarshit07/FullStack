let DELAY = 3;
console.log(`Random Number Will appear In ${DELAY} sec`);
const interval = setInterval(()=>{
    console.log(DELAY--);
}, 1000);

setTimeout( ()=> {
    const random_number = Math.floor(Math.random() * 1000);
    clearInterval(interval);
    console.log(random_number);
}, DELAY * 1000);