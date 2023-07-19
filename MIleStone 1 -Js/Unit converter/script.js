const button = document.getElementById("unitConvert");
button.addEventListener("click", () => {
    const celsius = document.getElementById("inputFeild").value
    const fahrenheit = (celsius * 9/5) + 32;
    const creatinputField = document.createElement("input");
    creatinputField.setAttribute("id", "result");
    creatinputField.readOnly = true;

    creatinputField.placeholder=`Result in \u{2109}`;
    const addIn = document.getElementById("output");

    // Remove Previous result if exists
    const previousResult = document.getElementById("result");
    if(previousResult) {
        previousResult.remove();
    }

    addIn.appendChild(creatinputField);
    creatinputField.value = fahrenheit + "\u{2109}"

})
