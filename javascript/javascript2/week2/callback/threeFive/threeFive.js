let arr=[];
let three=[];
let five=[];

//implementation of callback function to check the number is multiple of three 
function threeMultiple(multiple){

if( multiple % 3==0 )
three.push(multiple);
console.log(three);

}

//implementation of callback function to check the number is multiple of five
function fiveMultiple(multiple){

    if( multiple % 5==0 )
    five.push(multiple);
    console.log(five);
    
    }


//implementation of normal function that calls the callback functions(threeMultiple , fiveMultiple)
function multiples3And5(stValue,endValue,callbacks){
 
    for(let i=stValue ; i<=endValue ; i++){
        arr.push(i);
        console.log(arr);
        for( let callback of callbacks){
            callback(i);
        }
    }
}

//function calling
multiples3And5(1,10,[threeMultiple,fiveMultiple]);