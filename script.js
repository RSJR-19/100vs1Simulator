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
const overlayBatlle = document.getElementById("overlayBattle");
const finalResult = document.getElementById('finalResult');

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

const resultH1 = document.getElementById('resultH1');

let isPlayerAReady = false;
let isPlayerBReady = false;
let isLocationGiven = false;

let isPictureLocGiven = false;
let isPictureAGiven = false;
let isPictureBGiven = false;

let randomizer = Math.floor(Math.random() * 100) + 1;

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
        locationH3.textContent = "LOCATION: PRESS ENTER AFTER TYPING";
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



function fight(){
    if (inputA.value !== "" && inputB.value !== ""){
        setTimeout(()=>{
            mainScreen.style.display = "none";
            placeScreen.style.display = "flex";
            AName.innerHTML = inputA.value;
            BName.innerHTML = inputB.value;
            setTimeout(()=>{
             placeScreen.classList.add('active');
    },200)
        }, 300)}
    else if (inputA.value  === ""){
        inputA.focus()
    }
    else if (inputB.value === ""){
        inputB.focus()
    }
}

/*
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
*/
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
        const imageUrl = e.target.result;
        uplaodBoxA.style.backgroundImage = `url('${e.target.result}')`
        uplaodBoxA.textContent = "";

        pictureA.style.backgroundImage = `url('${imageUrl}')`;
        pictureA.style.backgroundSize = "cover";
        pictureA.style.backgroundPosition = "center";

        isPictureAGiven = true
    };



    readerA.readAsDataURL(fileA);
}
})

fileInputLoc.addEventListener('change', (event)=>{
    const fileLoc = event.target.files[0];
    if (fileLoc && fileLoc.type.startsWith("image/")){
        const readerLoc = new FileReader();
    readerLoc.onload =(e) =>{
        const imageUrl = e.target.result;
        uplaodBoxLoc.style.backgroundImage = `url('${e.target.result}')`
        uplaodBoxLoc.textContent = "";

        pictureLocation.style.backgroundImage = `url('${imageUrl}')`;
        pictureLocation.style.backgroundSize = "cover";
        pictureLocation.style.backgroundPosition = "center";

        isPictureLocGiven = true

    };
    readerLoc.readAsDataURL(fileLoc);
}
})

fileInputB.addEventListener('change', (event)=>{
    const fileB = event.target.files[0];
    if (fileB && fileB.type.startsWith("image/")){
        const readerB = new FileReader();
    readerB.onload =(e) =>{
        const imageUrl = e.target.result;
        uplaodBoxB.style.backgroundImage = `url('${e.target.result}')`
        uplaodBoxB.textContent = "";

        pictureB.style.backgroundImage = `url('${imageUrl}')`;
        pictureB.style.backgroundSize = "cover";
        pictureB.style.backgroundPosition = "center";

        isPictureBGiven = true
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
    if (isPlayerAReady === true && isPlayerBReady === true && isLocationGiven === true){   /*if (isPlayerAReady === true && isPlayerBReady === true && isLocationGiven === true){*/
        if (isPictureAGiven === false){
            pictureA.style.backgroundColor = "white";
            pictureA.textContent = `${inputA.value}`
            
        }
        if (isPictureBGiven === false){
            pictureB.style.backgroundColor = "white";
            pictureB.textContent = `${inputB.value}`
        }
        if(isPictureLocGiven === false){
            pictureLocation.style.backgroundColor = "white";
            pictureLocation.textContent = `${locationInput.value}`;
        }
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
        playerAh2.innerHTML = `100 <br> ${inputA.value}`;
        playerBh2.innerHTML = `1 <br> ${inputB.value}`;
        setTimeout(()=>{
            pictureA.classList.add('fight');
            pictureB.classList.add('fight');
            setTimeout(()=>{
                    pictureA.classList.remove('fight')
                    pictureB.classList.remove('fight')

                let randomizer = Math.floor(Math.random() * 100) + 1;
                console.log(randomizer)

                if (randomizer >= 1 && randomizer <= 50){
                    console.log(randomizer)
    
                   pictureA.classList.add('win');
                   pictureB.classList.add('lose');
                }
                else{
        
                    pictureB.classList.add('win');
                   pictureA.classList.add('lose');
                }

                setTimeout(()=>{
                    overlayBatlle.classList.add("active");
                    setTimeout(()=>{
                        resultH1.innerHTML = `100 ${inputA.value}<br> vs <br> 1 ${inputB.value} <br> Location: ${locationInput.value} <br> <br> WINNER: `
                        resultH1.style.textAlign = "center";
                        finalResult.classList.add('active');
                    },1400)

                },1500)
                    


            },7500)
        },1200)
    },1100)
    },600)
}

function returnHome(){
    battleScreen.classList.remove("active");
    setTimeout(()=>{
        battleScreen.style.display = "none";
                    inputA.value = "";
            inputB.value = "";
            locationInput.value = "";
            textSideA.innerHTML = "Enter Player one below:";
            textSideB.innerHTML = "Enter Player two below:";
            locationH3.textContent = "LOCATION: PRESS ENTER AFTER TYPING";

            fileInputA.value = "";
            fileInputB.value = "";
            fileInputLoc.value = "";

            uplaodBoxA.style.backgroundImage = "";
            uplaodBoxA.textContent = "click to add photo";

            uplaodBoxB.style.backgroundImage = "";
            uplaodBoxB.textContent = "click to add photo";

            uplaodBoxLoc.style.backgroundImage = "";
            uplaodBoxLoc.textContent = "click to add photo";

            pictureA.style.backgroundImage = "";
            pictureA.textContent = "";
            pictureB.style.backgroundImage = "";
            pictureB.textContent = "";
            pictureLocation.style.backgroundImage = "";
            pictureLocation.textContent = "";
            resultH1.innerHTML = "";

            isPictureAGiven = false;
            isPictureBGiven = false;
            isPictureLocGiven = false;
            isPlayerAReady = false;
            isPlayerBReady = false;
            isLocationGiven = false;

            readyBtnA.classList.remove("active");
            readyBtnB.classList.remove("active");
            locationSide.classList.remove("active");

            pictureA.classList.remove("enter","fight","win","lose");
            pictureB.classList.remove("enter","fight","win","lose");
            pictureLocation.classList.remove("active");
            playerAh2.classList.remove("active");
            playerBh2.classList.remove("active");
            overlayBatlle.classList.remove("active");
            finalResult.classList.remove("active");
        mainScreen.style.display = "flex";
        setTimeout(()=>{
            mainScreen.classList.remove("active");

        },200)
    },500)
    


}