let arr=[];
let three=[];
let five=[];

function threeMultiple(multiple){

if( multiple % 3==0 )
three.push(multiple);
console.log(three);

}

function fiveMultiple(multiple){

    if( multiple % 5==0 )
    five.push(multiple);
    console.log(five);
    
    }



function multiples3And5(stValue,endValue,threeMultiple,fiveMultiple){
   
    for(let i=stValue ; i<=endValue ; i++){
        arr.push(i);
        console.log(arr);
        threeMultiple(i);
        fiveMultiple(i);
    }
}

multiples3And5(1,10,threeMultiple,fiveMultiple);