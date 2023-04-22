const btn = document.getElementById("button");
const randomColor = () => {

    let val = "0123456789ABCDEF";
    let cons = "#";

    for( let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];  // here Math.random give a max value of 0.99 and we are multiplying it by 16 and using floor method it round off the value

    }
    return cons;
};




function changeRandomColor() {
   document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);