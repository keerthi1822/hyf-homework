let inputText = document.querySelector("#searchText");

let searchButton = document.querySelector("#searchGif");
let noText = document.querySelector("#noText");

let img = document.createElement("img");
img.id = "gifImg";
document.body.appendChild(img);


searchButton.addEventListener("click",()=>{
    let searchWord = inputText.value;
    if(searchWord !== ""){
        console.log(searchWord)
    fetch("http://api.giphy.com/v1/gifs/search?q="+searchWord+"&api_key=HCRI89ixujLx2ZrfrZEmkrItQzVetl68&limit=5")
    .then(response => response.json())
    .then((gif) => {

        img.src = gif.data[0].images.original_still.url;
        
        });
    }

        else{
        noText.innerHTML= "please enter text";
        }
    
});