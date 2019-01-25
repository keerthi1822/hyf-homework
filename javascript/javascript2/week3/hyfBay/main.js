console.log('Script loaded');

let sectionProducts = document.querySelector('.products ul');

//console.log(sectionProducts);

let productList= getAvailableProducts();
console.log(productList);

let productDetails = productList.map((product)=>{
    let list = document.createElement('li');

    let name = document.createElement('div');
    name.setAttribute("class","name");
    name.innerHTML = product.name;
    list.appendChild(name);

    let price = document.createElement('div');
    price.setAttribute("class","price");
    price.innerHTML = product.price;
    list.appendChild(price);

    let rating = document.createElement('div');
    rating.setAttribute("class","rating");
    rating.innerHTML = product.rating;
    list.appendChild(rating);

    let shipsTo = document.createElement('div');
    shipsTo.setAttribute("class","ships-to");
    shipsTo.innerHTML = product.shipsTo;
    list.appendChild(shipsTo);

    let button = document.createElement("button");
    button.setAttribute("data-id","Drone23787")
    button.innerHTML = "Add to the cart";
    list.appendChild(button);

    sectionProducts.appendChild(list);
    
});
//---------------------------------------------------------------

//price analysis

let prices = productList.map((product)=>{
    return product.price;
});
console.log(sendPricesToServer(prices,()=>{
    console.log("data received");
}));

//---------------------------------------------------------------------

//filter countries
let countries = productList.filter(filterCountry);

const filterCountry = function (){

}

//filter using search
let selectTag = document.createElement("select");

selectTag.addEventListener("change", () => {
    
    let index = selectTag.selectedIndex;
    let options = document.querySelectorAll("option");
    
    return options[index].value
})







