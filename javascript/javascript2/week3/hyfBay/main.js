console.log("Script loaded");

//selecting element from index.html
let sectionProducts = document.querySelector(".products > ul");
//console.log(sectionProducts);

//calling function getAvailableProducts
let products = getAvailableProducts();
console.log(products);


//function to display products on screen
function displayList(listArray) {
  sectionProducts.innerHTML= "";
 listArray.forEach(product => {
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

displayList(products);
//---------------------------------------------------------------

//price analysis

let prices = products.map(product => {
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
  //console.log(productList);
  let selectedWithCountry =  products.filter (product => 
    product.shipsTo.includes (sCity));;
    console.log(selectedWithCountry);
    displayList(selectedWithCountry);
  });
 
 

//-------------------------------------------------------------------
//filter on search
const searchTag = document.querySelector("#searchText");
const searchWord = searchTag.value;
console.log(searchWord);

  searchTag.addEventListener("input",()=>{

  const listFromSearch = products.filter((product)=>{
    product.name.toLowerCase().includes(searchWord.toLowerCase());
    displayList(listFromSearch);
  });
});

//-----------------------------------------------------------------------
//sort by  price
let selectTagSort = document.querySelector(".sort select");
const selectedRange = selectTagSort.value;
let productPrices = products.filter((product)=>products.price)
let sortedPrices = productPrices.sort((a,b)=>a-b);
console.log(productPrices);
console.log(sortedPrices);

selectTagSort.addEventListener("change",()=>{
  if(selectedRange ==="cheap"){
    displayList()
  }
  elseif()

  }
});




