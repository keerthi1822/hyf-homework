//setting reference to tags
const inputBG = document.querySelector("#numInpt");
const button = document.querySelector("#checknumber");
const buttonLocation = document.querySelector("#checklocation");
const para = document.querySelector(".result");

//function implementation that changes background color of input
function threeFive(number) {
    console.log(number);
    para.innerHTML ="";
    
    if (number % 3 === 0) {
        if (number % 5 === 0) {
            inputBG.style.backgroundColor = "purple";
            para.innerHTML = " multiple of both 3 or 5";
        }
        else{
            inputBG.style.backgroundColor = "blue";
        }
    elseif(number % 5 === 0)
        inputBG.style.backgroundColor = "yellow";
    }
    
    else {
        para.innerHTML = "not a multiple of 3 or 5";
    }

}

//call back function "threeFive" added to event listener
button.addEventListener("click", () => { threeFive(inputBG.value) })





