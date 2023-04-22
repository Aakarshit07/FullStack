const decremnetBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// For Decrement button click
decremnetBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value > 0) {
        displayValue.innerText = value - 1;
    } else {
        alert("Negative Value Not Allowed")
    }

});

// For Increment button click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if( value >= 15) {
        alert("15+ values are not allowed ")
    } else {
        displayValue.innerText = value + 1;
    }
});

//for reset button click
resetBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    displayValue.innerText = value - value;
    // there is one more simple logic 
    // displayValue.innerText = 0;
});