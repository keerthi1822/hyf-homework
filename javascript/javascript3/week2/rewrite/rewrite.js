
//reWritting timeout function using promise
// function rewriteTimeOutPromise(time){
//     return new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve("logged after"+time+"milliseconds");
//     }, time);
// })
// }
// rewriteTimeOutPromise(3000).then((variable)=>{
//     console.log(variable);
// })

//geolocation
console.log(navigator.geolocation.getCurrentPosition);

const positionPromise = new Promise((resolve,reject)=>{
    if(navigator.geolocation)
    resolve(getCurrentPosition());
    else{
    reject();
    }
})

function getCurrentPosition(){

}

positionPromise.then((getLocation)=>{
    console.log(getLocation.coords.lat);
    console.log(getLocation.coords.lat);
})

