const inputbox = document.getElementById("input-box");
const display = document.getElementById("display");

inputbox.addEventListener("keypress", function(e) {
    display.innerText = "You have Passed " + e.key
});
    