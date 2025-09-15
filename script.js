const inputA = document.getElementById("inputA")
const inputB = document.getElementById("inputB")

const textSideA = document.getElementById("textSideA")
const textSideB = document.getElementById("textSideB")

inputA.addEventListener("input", function() {
    if (inputA.value === ""){
        textSideA.textContent = "Enter Player one below:";
    }
    else{
        textSideA.textContent = inputA.value;
    }
});

inputB.addEventListener("input", function(){
    if (inputB.value === ""){
        textSideB.textContent = "Enter Player two below:";
    }
    else{
        textSideB.textContent = inputB.value;
    }
})

inputA.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        if (inputB.value === ""){
            inputB.focus()
        }
        else {
            inputA.blur()
        }
    }
})

inputB.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        if (inputA.value === ""){
            inputA.focus()
        }
        else {
            inputB.blur()
        }
    }
})

function swap(){
    if (inputA.value !== "" && inputB.value !== ""){
        let formerA = inputA.value;
        textSideA.textContent = inputB.value;
        inputA.value = inputB.value;
        inputB.value = formerA
        textSideB.textContent = formerA;
 
    }
}