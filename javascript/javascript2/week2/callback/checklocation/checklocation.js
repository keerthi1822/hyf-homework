//step 2(4)
const buttonLocation = document.querySelector("#checklocation");
const paraLatitude  = document.querySelector("#latitude");
const paraLongitude  = document.querySelector("#longitude");
let positionNow;
function gMapShow(){
    let gMap = document.querySelector("#mapDisplay");
    positionNow = {
        center:{
            lat:position.coords.latitude,
            long:position.coords.longitude
        },
        Zoom:6
    }
    let map = new  google.maps.Map( gMap ,  positionNow);
   
}
//implementing function that shows the location 
function checkLoc() {
    function getPosition(position){
        let pos = {
            lat:position.coords.latitude,
            long:position.coords.longitude
        }
        console.log(position);
        //console.log("latitude: "+position.coords.latitude);
        //console.log("longitude: "+position.coords.longitude);
        paraLatitude.innerHTML = "latitude: "+pos.lat ;paraLongitude.innerHTML ="longitude: "+pos.long;
        gMapShow();
    }
    function noLocation(positionError){
        console.log(positionError);
    }


    if(navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(getPosition,noLocation);
    
    //console.log("change location button clicked");
    }
    else{
        console.log("geolocation is not supported");
    }
}
//checkLoc();

//callback function "checkLoc" added to event listener
buttonLocation.addEventListener("click", checkLoc);