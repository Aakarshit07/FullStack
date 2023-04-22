const container = document.getElementById("container");
const display = document.getElementById("display");

//Adding key down event listener to docuement
document.addEventListener("keydown", function(e) {
    display.style.color = "red";
    display.innerText = e.key + " is keyDown";
});

//Adding key up event listener to docuement
document.getElementById(keyup, function(e){
    display.style.color = "green";
    display.innerText = e.key + " is keyUp";
});