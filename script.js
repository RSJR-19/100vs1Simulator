const inputA = document.getElementById("inputA")
const inputB = document.getElementById("inputB")
const AName = document.getElementById("AName");
const BName = document.getElementById("BName");
const locationSide = document.getElementById("locationSide");

const textSideA = document.getElementById("textSideA")
const textSideB = document.getElementById("textSideB")
const locationH3 = document.getElementById("locationH3");
const locationInput = document.getElementById('locationInput');

const mainScreen = document.getElementById("mainScreen");
const placeScreen = document.getElementById("placeScreen");
const battleScreen = document.getElementById("battleScreen");

const uplaodBoxA = document.getElementById("uploadBoxA");
const uplaodBoxLoc = document.getElementById("uploadBoxLoc");
const uplaodBoxB = document.getElementById("uploadBoxB");
const pictureLocation = document.getElementById("pictureLocation");
const pictureA = document.getElementById("pictureA");
const pictureB = document.getElementById("pictureB");

const readyBtnA = document.getElementById("readyBtnA");
const readyBtnB = document.getElementById("readyBtnB");

const fileInputA = document.getElementById("fileInputA");
const fileInputLoc = document.getElementById("fileInputLoc");
const fileInputB = document.getElementById("fileInputB");

const playerAh2 = document.getElementById("playerAh2");
const playerBh2 = document.getElementById("playerBh2");

let isPlayerAReady = false;
let isPlayerBReady = false;
let isLocationGiven = false;

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
        locationSide.classList.remove("active");
        isLocationGiven = false;
        checkState()
        
    }
    else{
        locationH3.textContent = `LOCATION: ${locationInput.value}`;
        locationSide.classList.add("active");
        isLocationGiven = true;
        
    }
})

locationInput.addEventListener('keydown', (event)=>{
    if (event.key === "Enter"){
        if (locationInput.value !== ""){
            checkState()
        }}})


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
    mainScreen.classList.add('active');
    setTimeout(()=>{
    mainScreen.style.display = "none";
    placeScreen.style.display = 'flex';
    setTimeout(()=>{
        placeScreen.classList.add('active');
    },200)
    },600)
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



function readyA(){
    readyBtnA.classList.add("active");
    isPlayerAReady = true;
    checkState()
}

function readyB(){
    readyBtnB.classList.add("active");
    isPlayerBReady = true;
    checkState()
}

function checkState(){
    if (isPlayerAReady === true){   /*if (isPlayerAReady === true && isPlayerBReady === true && isLocationGiven === true){*/
       placeScreen.classList.remove('active');
       setTimeout(()=>{
        placeScreen.style.display = "none";
        battleScreen.style.display = "flex";
        setTimeout(()=>{
            battleScreen.classList.add("active");
            setTimeout(()=>{
                pictureLocation.classList.add("active");
                startAnimation()
            },600)
        },100)
       },500)
    
    }


}

function startAnimation(){
    setTimeout(()=>{
    pictureA.classList.add("enter");
    pictureB.classList.add("enter");
    setTimeout(()=>{
        playerAh2.classList.add('active');
        playerBh2.classList.add('active');
        playerAh2.innerHTML = `100 ${inputA.value}`;
        playerBh2.innerHTML = `1 ${inputB.value}`;
    },1100)
    },600)
}