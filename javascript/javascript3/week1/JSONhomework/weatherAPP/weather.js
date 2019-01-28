let button = document.querySelector("#button");
let location = document.querySelector("#place");
let temperature = document.querySelector("#getTemp")

button.addEventListener("click", () => {

    const myApi = "&appid=16c4afbda3818a3fcda999336b1f57e6";
    let city = document.querySelector("#place").value;
    let url_part1 = " https://api.openweathermap.org/data/2.5/weather?q=";

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

























                //https://www.youtube.com/watch?v=4UoUqnjUC2c
                //https://www.youtube.com/watch?v=ecT42O6I_WI
