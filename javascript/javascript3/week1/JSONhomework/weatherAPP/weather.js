let button = document.querySelector("#button");
let myLocation = document.querySelector("#place");
let weather = document.querySelector("#getTemp");
weather.innerHTML="";

const myApi = "&appid=16c4afbda3818a3fcda999336b1f57e6&units=metric";

//Adding Event to button 
button.addEventListener("click", () => {
    let url_part1 = " https://api.openweathermap.org/data/2.5/weather?q=";
    let city = document.querySelector("#place").value;
    //concating URL
    let url = url_part1 + city + myApi;

    //console.log(url)
    //console.log(city);
    if(city!==""){
    fetch(url)
        .then(response => response.json())
        .then((weather1) => {

            //console.log(weather1.name);
            //console.log(weather1.main.temp);
            weather.innerHTML = weather1.weather[0].description;

        });
    }
    else{
        weather.innerHTML = "Pls enter location"
    }
});

//-----------------------------------------------------------------------

//Find user Location

const button2 = document.querySelector("#geoLoc");
const pdata = document.querySelector("#yourLOC");

button2.addEventListener("click", ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(myPosition);
    }
    else{
        pdata.innerHTML = "browser doesn't support"
    }
});
function getplace(lat,long){
    let url_part1 = " https://api.openweathermap.org/data/2.5/weather?";
    url = url_part1+'lat=' + lat + '&lon=' + long + '&appid='+myApi;
    console.log(url);
    fetch (url)
    .then (response => response.json())
    .then ((name) => {
        pdata.innerHTML =  name[name];
    });
}

function myPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude ;
    getplace(lat,long);
}

    //storing value in local storage
    //localStorage.setItem("latitude",JSON.stringify(position.coords.latitude));
    //localStorage.setItem("longitude",JSON.stringify(position.coords.longitude));
    // //getting value from local storage
    // let lat = localStorage.getItem("latitude");
    // let long = localstorage.getItem("longitude");
    // console.log(lat);
    // console.log(long);



//----------------------------------------------------------------------
//let button1 = document.querySelector('#buttonGeo');
// let tempUsingLocation = document.querySelector('#getTempUsingGeo');
// tempUsingLocation.innerHTML = "";
// let pLoc =  document.querySelector("#currentLOC");
// pLoc.innerHTML="";

// //Adding event to Button and fetching JSON 

// button1.addEventListener("click", () => {

//    //coords to current location
//     let loc = {
//         "lon": 12.57,
//         "lat": 55.69
//     }
//     let url_part1 = " https://api.openweathermap.org/data/2.5/weather?";
//     let geoLocation = 'lat='+(loc.lat)+'&lon='+(loc.lon);


//     //concating URL
//     let url = url_part1 + geoLocation+ myApi;
//     //console.log(url)

//     //fetching JSON 
//     if(geoLocation !==""){
//     fetch(url)
//         .then(response => response.json())
//         .then((weatherUsingGeo) => {
            
//             //console.log(weatherUsingGeo.name);
//             //console.log(weatherUsingGeo.main.temp);
//             //Display on browser
//             pLoc.innerHTML = weatherUsingGeo.name;
//             tempUsingLocation.innerHTML = weatherUsingGeo.weather[0].description;

//         });
//     }
//     else{
//         pLoc.innerHTML = "pls provide geoLocation" ;
//     }
// });




























                //https://www.youtube.com/watch?v=4UoUqnjUC2c
                //https://www.youtube.com/watch?v=ecT42O6I_WI
