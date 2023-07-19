
let color1 = document.getElementById("color1").value
let color2 = document.getElementById("color2").value


let message = document.getElementById("message");

function myColor() {
    

    console.log(color1, color2);

    switch(color1){
        
        case "red":
            switch(color2) {
                case "blue" :
                    message.textContent = "purple"
                    
                    break;
                case "yellow" :
                    message.textContent = "orange"
                    
                    break
                     
            }
        case "blue":
            switch(color2) {
                case "red":
                    message.textContent = "purple"

                    break;
                case "yellow" :
                    message.textContent = "green"

                    break;
            }
        case "yellow" :
            switch(color2) {
                case "red" :
                    message.textContent = "orange"
                    
                    break
                case "blue" :
                    message.textContent = "green"
                    
                    break;    
            }
        default :
        message.textContent = "Invalid color";            

    }

}