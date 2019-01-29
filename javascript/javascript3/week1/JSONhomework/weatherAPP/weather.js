//Finding weather using City
let button = document.querySelector("#button");
let location = document.querySelector("#place");
let temperature = document.querySelector("#getTemp");
temperature.innerHTML="";

const myApi = "&appid=16c4afbda3818a3fcda999336b1f57e6";

//Adding Event to button 
button.addEventListener("click", () => {
    let url_part1 = " https://api.openweathermap.org/data/2.5/weather?q=";
    let city = document.querySelector("#place").value;
    //concating URL
    let url = url_part1 + city + myApi;

    console.log(url)
    console.log(city);
    
    fetch(url)
        .then(response => response.json())
        .then((weather) => {

            console.log(weather.name);
            console.log(weather.main.temp);
            temperature.innerHTML = weather.main.temp;

        });
});

//Find weather using Location

let button1 = document.querySelector('#buttonGeo');
let tempUsingLocation = document.querySelector('#getTempUsingGeo');
tempUsingLocation.innerHTML = "";
let pLoc =  document.querySelector("#currentLOC");
pLoc.innerHTML="";

//Adding event to Button and fetching JSON 

button1.addEventListener("click", () => {

   //coords to current location
    let coords = {
        "lon": 12.57,
        "lat": 55.69
    }
    let url_part1 = " https://api.openweathermap.org/data/2.5/weather?";
    let geoLocation = 'lat='+(coords.lat)+'&lon='+(coords.lon);
    

    //concating URL
    let url = url_part1 + geoLocation+ myApi;

    console.log(url)
    console.log(city);

    //fetching JSON 
    fetch(url)
        .then(response => response.json())
        .then((weatherUsingGeo) => {
            
            console.log(weatherUsingGeo.name);
            console.log(weatherUsingGeo.main.temp);
            //Display on browser
            pLoc.innerHTML = weatherUsingGeo.name;
            tempUsingLocation.innerHTML = weatherUsingGeo.main.temp;

        });
});



























                //https://www.youtube.com/watch?v=4UoUqnjUC2c
                //https://www.youtube.com/watch?v=ecT42O6I_WI
