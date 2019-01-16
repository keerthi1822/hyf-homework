// let arr=[];
// let three=[];
// let five=[];

const inputNumber = document.querySelector("#checknumber").innerHTML;
const para = document.querySelector(".result");
const button = document.querySelector("#checknumber")
function threeMultiple(number){

if( number % 3==0 )
para.innerHTML = "multiple of 3"


}

function fiveMultiple(number){

    if( number % 5==0 )
    para.innerHTML = "multiple of 5"
   
    }

button.addEventListener("click",
(inputNumber,threeMultiple(inputNumber),fiveMultiple(inputNumber)) => {
   
        threeMultiple(inputNumber);
        fiveMultiple(inputNumber);
        if(threeMultiple && fiveMultiple == true)
        para.innerHTML = "multiple of 3 and 5";

    
});

//multiples3And5(inputNumber,threeMultiple,fiveMultiple);