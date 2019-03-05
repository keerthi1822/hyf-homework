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
  productsInStockDisplay(){
    //selecting UL tag from HTML
  const uList = document.querySelector(".displayProducts > ul");
    //create li tag in ul
    const displayProducts = document.createElement("li");
    //create attribute class to LI element
    displayProducts.className = "display";
    //create div element for product
    const productDivElement = document.createElement("div");
    //render Product name
    productDivElement.innerHTML = this.name;
    //append product to list
    displayProducts.appendChild(productDivElement);
    //create div element for price
    const priceDivElement = document.createElement("div");
    //render Price
    priceDivElement.innerHTML = this.price;
    //append price div to li element
    displayProducts.appendChild(priceDivElement);
    //create button "ADD TO CART"
    const btn = document.createElement("button");
    //Name Button
    btn.innerHTML = "Add to cart";
    //Append button to ul element
    displayProducts.appendChild(btn);
    //append Li element to UL element
    uList.appendChild(displayProducts);
      
  }

}

 
class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
    console.log(product);
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
availableProducts.map((product)=>{
    let products = new Product(product,Math.floor(Math.random()*10000));
    products.productsInStockDisplay();
})

const shoppingCart = new ShoppingCart([]);

