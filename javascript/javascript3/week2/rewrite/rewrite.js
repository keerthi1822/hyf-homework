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
//console.log(navigator.geolocation.getCurrentPosition((myPosition));

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition((position)=>{
            resolve(position);
            
        },(errmsg)=>{
            reject(errmsg)
        })
    
    } else {
      reject();
    }
  });
}
getCurrentLocation().then((position)=>{
    console.log(position);
}).catch(()=>{
    console.log("some error in loading");
})


// positionPromise.then(myPosition => {
//   console.log(getLocation.coords.lat);
//   console.log(getLocation.coords.lat);
// });
// const myPosition = function() {
//   console.log(getLocation.coords.lat);
//   console.log(getLocation.coords.lat);
// };
