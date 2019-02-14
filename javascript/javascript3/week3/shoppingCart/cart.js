const availableProducts = [
  "Washing Machine",
  "Fridge",
  "Vaccum cleaner",
  "Television",
  "Micro wave",
  "Oven",
  "Lamp",
  "Bike",
  "Vase",
  "Blender",
  "Kommode",
  "Grill"
];

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
function productsInStockDisplay(){
    //selecting UL tag from HTML
    const uList = document.querySelector('.displayProducts > ul');
    //Mapping each product 
    const instancesOfAvailableProducts = availableProducts.map((product)=>{
        //create li tag in ul
        const displayProducts = document.createElement('li');
        //create attribute class to LI element
        displayProducts.className="display";
        //create div element for product
        const productDivElement = document.createElement('div');
        //render Product name
        productDivElement.innerHTML=product;
        //append product to list
        displayProducts.appendChild(productDivElement);
        //create div element for price
        const priceDivElement = document.createElement('div');
        //render Price 
        priceDivElement.innerHTML = Math.floor(Math.random()*10000);
        //append price div to li element
        displayProducts.appendChild(priceDivElement);
        //create button "ADD TO CART"
        const btn = document.createElement('button');
        //Name Button
        btn.innerHTML="Add to cart";
        //Append button to ul element
        displayProducts.appendChild(btn);
        //append Li element to UL element
        uList.appendChild(displayProducts);
        return new Product(productDivElement.innerHTML, priceDivElement.innerHTML);
    })
    console.log(instancesOfAvailableProducts);
}

productsInStockDisplay();


class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        // Implement functionality here

    }

    removeProduct(product) {
        // Implement functionality here
    }

    getTotal() {
        // Implement functionality here
    }

    renderProducts() {
        // Implement functionality here
    }

    getUser() {
        // Implement functionality here
    }
}

const flatscreen = new Product('flat-screen', 5000);
const shoppingCart = new ShoppingCart([flatscreen]);

document.querySelector('.display button').addEventListener('click',()=>{
    shoppingCart.addProduct()
})