
const inputBG = document.querySelector("#numInpt");
const button = document.querySelector("#checknumber");

const para = document.querySelector(".result");


function threeFive(number){
   console.log(number);
    if(number % 3 === 0){
        inputBG.style.backgroundColor = "blue";
    }
    else if(number%5 === 0){
        inputBG.style.backgroundColor = "yellow";
    }
    else {
        para.innerHTML = "not a multiple of 3 or 5";
    }
}


button.addEventListener("click", ()=>{threeFive(inputBG.value)})

