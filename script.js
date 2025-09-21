const inputA = document.getElementById("inputA")
const inputB = document.getElementById("inputB")
const AName = document.getElementById("AName");
const BName = document.getElementById("BName");

const textSideA = document.getElementById("textSideA")
const textSideB = document.getElementById("textSideB")
const locationH3 = document.getElementById("locationH3");
const locationInput = document.getElementById('locationInput');

const mainScreen = document.getElementById("mainScreen");
const placeScreen = document.getElementById("placeScreen");

const uplaodBoxA = document.getElementById("uploadBoxA");
const uplaodBoxLoc = document.getElementById("uploadBoxLoc");
const uplaodBoxB = document.getElementById("uploadBoxB");

const fileInputA = document.getElementById("fileInputA");
const fileInputLoc = document.getElementById("fileInputLoc");
const fileInputB = document.getElementById("fileInputB");

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

locationInput.addEventListener('input', ()=>{
    if (locationInput.value === ""){
        locationH3.textContent = "LOCATION: ";
    }
    else{
        locationH3.textContent = `LOCATION: ${locationInput.value}`;
    }
})

/*
function fight(){
    if (inputA.value !== "" && inputB.value !== ""){
        setTimeout(()=>{
            mainScreen.style.display = "none";
            placeScreen.style.display = "flex";
            AName.innerHTML = inputA.value;
            BName.innerHTML = inputB.value;
        }, 300)}
    else if (inputA.value  === ""){
        inputA.focus()
    }
    else if (inputB.value === ""){
        inputB.focus()
    }
}
*/

function fight(){
    mainScreen.style.display = "none";
    placeScreen.style.display = 'flex';
}

uplaodBoxA.addEventListener('click', ()=>{
    fileInputA.click();
})
uplaodBoxLoc.addEventListener('click', ()=>{
    fileInputLoc.click();
})
uplaodBoxB.addEventListener('click', ()=>{
    fileInputB.click();
})

fileInputA.addEventListener('change', (event)=>{
    const fileA = event.target.files[0];
    if (fileA && fileA.type.startsWith("image/")){
        const readerA = new FileReader();
    readerA.onload =(e) =>{
        uplaodBoxA.style.backgroundImage = `url('${e.target.result}')`
        uplaodBoxA.textContent = "";
    };
    readerA.readAsDataURL(fileA);
}
})

fileInputLoc.addEventListener('change', (event)=>{
    const fileLoc = event.target.files[0];
    if (fileLoc && fileLoc.type.startsWith("image/")){
        const readerLoc = new FileReader();
    readerLoc.onload =(e) =>{
        uplaodBoxLoc.style.backgroundImage = `url('${e.target.result}')`
        uplaodBoxLoc.textContent = "";
    };
    readerLoc.readAsDataURL(fileLoc);
}
})

fileInputB.addEventListener('change', (event)=>{
    const fileB = event.target.files[0];
    if (fileB && fileB.type.startsWith("image/")){
        const readerB = new FileReader();
    readerB.onload =(e) =>{
        uplaodBoxB.style.backgroundImage = `url('${e.target.result}')`
        uplaodBoxB.textContent = "";
    };
    readerB.readAsDataURL(fileB);
}
})
    