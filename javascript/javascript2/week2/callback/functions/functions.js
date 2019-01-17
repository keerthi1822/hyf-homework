//step 2(5)
//Create an array with 3 items. All items should be functions. Go through the array and call them.

let funcArr = [func1, func2, func3];

//implementing 3 functions 
function func1() {
    console.log("in function1");
}
function func2() {
    console.log("in function2");
}
function func3() {
    console.log("in function3");
}

//calling array of functions
for (let fun of funcArr) {
    fun();
}

//--------------------------------------------------------------------
//Create a function as a const and try creating a function normally. Call both function.

const constantFunction = function () {
    console.log("inside constant function");
}

function normal() {
    console.log("inside normal function");
}

constantFunction();
normal();

//-------------------------------------------------------------------
//Create an object that has a key whose value is a function. Try calling this function.

const obj = {
    key1: valueFunction
};

function valueFunction() {
    console.log("function assigned to key of an object");
}

valueFunction();

//------------------------------------------------------------------

//Create two setTimeouts one uses a function that is defined as a const. The other uses an anonomous function that is defined inside the setTimeout.
const  timeoutFunc = function() {
    console.log("in timeout const function");
}
setTimeout(timeoutFunc,1000);

setTimeout(()=>{
    console.log("in settimeout");
},500)

//-------------------------------------------------------------------

//Create a function (outer) that returns a function (inner). Call the outer function and assign the return to a variable. Now call this variable (that is the inner function)
function inner(){
    console.log("innerfunction inside outer function");
}

function outer(){
    console.log("in outer");
    
    return inner();
    
}
let out = outer();
console.log(out+" hi");

