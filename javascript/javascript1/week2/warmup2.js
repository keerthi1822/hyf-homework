
//Function that returns empty object-steps1
function emptyReturnFunction() {
    //step-3 Adding time key to timeObject
    let time12Object = {};
    time12Object.time = 12


    //returning empty object
    return time12Object;
}

//step-2 assigning empty function to time object
let timeObject = emptyReturnFunction();


//step-4 printing the data of empty and time objects
console.log(timeObject);



//part B -Array of Objects steps 1-6
function arrayof3emptyobjects() {
    return [{ color: "red" }, { color: "green" }, { color: "blue" }];
}
var colorObjects = arrayof3emptyobjects();

//log out array of objects
console.log(colorObjects);


//log the colors in Array of objects   step7
for (let i = 0; i < colorObjects.length; i++)
    console.log(colorObjects[i]["color"]);

//step-8 
function NumberToDays(num) {
    let day = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }

    let remainder = num % 7;
    console.log(remainder);
    console.log("today is Sunday");
    console.log("How many days to meet :" + num);
    console.log("We are meeting on : " + day[remainder]);
}

NumberToDays(9);



