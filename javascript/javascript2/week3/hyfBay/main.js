console.log("Script loaded");

//selecting element from index.html
let sectionProducts = document.querySelector(".products ul");
//console.log(sectionProducts);

//calling function getAvailableProducts
let productList = getAvailableProducts();
console.log(productList);
displayList(productList);

//function to display products on screen
function displayList(list) {
  let productDetails = list.map(product => {
    let list = document.createElement("li");

    let name = document.createElement("div");
    name.setAttribute("class", "name");
    name.innerHTML = product.name;
    list.appendChild(name);

    let price = document.createElement("div");
    price.setAttribute("class", "price");
    price.innerHTML = product.price;
    list.appendChild(price);

    let rating = document.createElement("div");
    rating.setAttribute("class", "rating");
    rating.innerHTML = product.rating;
    list.appendChild(rating);

    let shipsTo = document.createElement("div");
    shipsTo.setAttribute("class", "shipsTo");
    shipsTo.innerHTML = product.shipsTo;
    list.appendChild(shipsTo);

    let button = document.createElement("button");
    button.setAttribute("data-id", "Drone23787");
    button.innerHTML = "+";
    list.appendChild(button);

    sectionProducts.appendChild(list);
  });
}

//---------------------------------------------------------------

//price analysis

let prices = productList.map(product => {
  return product.price;
});
sendPricesToServer(prices, serverResponse => {
  console.log(serverResponse);
});

//---------------------------------------------------------------------

//filter using select
let selectTag = document.querySelector(".country select");
selectTag.addEventListener("change", () => {
 
  let sCity = selectTag.value;
  console.log(sCity);
  console.log(productList);
  let selectedWithCountry = productList.filter(product =>product.shipsTo.includes (sCity));
  console.log(selectedWithCountry);
    displayList(selectedWithCountry);
  });
 
 

