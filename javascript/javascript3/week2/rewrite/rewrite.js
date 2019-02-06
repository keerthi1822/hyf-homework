
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
console.log(navigator.geolocation.getCurrentPosition(myPosition));

const positionPromise = new Promise((resolve,reject)=>{
    if(navigator.geolocation)
    resolve(getCurrentPosition(myPosition));
    else{
    reject();
    }
})


positionPromise.then((myPosition)=>{
    console.log(getLocation.coords.lat);
    console.log(getLocation.coords.lat);
})
const myPosition = function (){
    console.log(getLocation.coords.lat);
    console.log(getLocation.coords.lat);
}
