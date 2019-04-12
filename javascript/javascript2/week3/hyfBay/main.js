console.log("Script loaded");

//selecting element from index.html
let sectionProducts = document.querySelector(".products > ul");
//console.log(sectionProducts);

//calling function getAvailableProducts
let products = getAvailableProducts();
//console.log(products);


//function to display products on screen
function displayList(listArray) {
  sectionProducts.innerHTML= "";
  //console.log(products);

 listArray.forEach((product) => {
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
    shipsTo.setAttribute("class", "ships-to");
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

//filter using country
const countryElement = document.querySelector ('.country select');


countryElement.addEventListener ('change', () => {
    let selectedCountry = countryElement.value;
    let selectedListByCountries = products.filter (product => 
        product.shipsTo.includes (selectedCountry));
    
    displayList (selectedListByCountries);
});
 

//-------------------------------------------------------------------
//filter on search
const searchTag = document.querySelector("#searchText");
  searchTag.addEventListener("input",()=>{
    let searchWord = searchTag.value;

  let listFromSearch = products.filter(product=>
    product.name.toLowerCase().includes(searchWord.toLowerCase()));
    displayList(listFromSearch);
 
});

//-----------------------------------------------------------------------

// sorting products (price - ascending/descending, name)
const sorting = document.querySelector ('.sort > select');



sorting.addEventListener ('change', () => {
    let sortValue = sorting.value;

    if (sortValue === 'cheap') {
        let sortLowHigh = products.sort ((product1, product2) => product1.price-product2.price);
        console.log(sortLowHigh);
        displayList(sortLowHigh);
    } else if (sortValue === 'expensive') {
        let sortHighLow = products.sort ((product1, product2) => product2.price-product1.price);
        console.log(sortHighLow);
        displayList(sortHighLow);
    } else {
        let sortName = products.sort ((product1, product2) => {
            let nameA = product1.name.toLowerCase ();
            let nameB = product2.name.toLowerCase ();

            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else {
                return 0;
            }
        });
        console.log(sortName);
        displayList(sortName);
    }
})






