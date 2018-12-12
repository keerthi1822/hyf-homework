 //empty object
 let emptyObject={};

//Function that returns empty object
function emptyReturnFunction(){
    
//returning empty object
return {} ;
}

//assigning empty function to time object
let timeObject= emptyReturnFunction() ;

//Adding time key to timeObject
timeObject.time=12;

//printing the data of empty and time objects
console.log(timeObject);
console.log(emptyObject);

//testing in different ways


//Addind key value name to empty object
emptyObject.name="keerthi";
timeObject.minutes=20;
timeObject.seconds=40;

//printing the data of empty and time objects
console.log(timeObject);

//not any more empty Object
console.log(emptyObject);


