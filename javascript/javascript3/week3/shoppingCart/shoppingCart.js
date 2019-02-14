// const availableProducts = [
//   "Washing Machine",
//   "Fridge",
//   "Vaccum cleaner",
//   "Television",
//   "Micro wave",
//   "Oven",
//   "Lamp",
//   "Bike",
//   "Vase",
//   "Blender",
//   "Kommode",
//   "Grill"
// ];

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
      
    this.products.push(product);
    console.log(product);
    // Implement functionality here
  }

  removeProduct(product) {
    this.productsAfterFilter = this.products.filter(function(productToRemove) {
      return product !== productToRemove;
    });
    console.log(this.productsAfterFilter);
    // Implement functionality here
  }

  getTotal() {
    // Implement functionality here
  }

  renderProducts(productName) {
    // Implement functionality here

    const uList = document.querySelector("section > ul");

    const list = document.createElement("li");
    const divElement = document.createElement("div");
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    const divProductName = document.createElement("div");
    // const divProductPrice = document.createElement("div");
    divProductName.innerHTML = productName;
    console.log( divProductName.innerHTML);
    //divProductPrice.innerHTML = price;
    inputElement.appendChild(divProductName);
    divElement.appendChild(inputElement);
    list.appendChild(divElement);
    uList.appendChild(list);
  }

  getUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => {
        console.log(user.username);
        console.log(user.name);
      });
    // Implement functionality here
  }
}


//creating instance of class shopping cart
const productsInCart = new ShoppingCart([]);
// productsInCart.renderProducts("toys");
// productsInCart.renderProducts("PC");
//adding event listener to checkbox
document.querySelector(".cart ul li  input > div").addEventListener("change", function() {
  const selectedProduct = document.querySelector(".inline input>div");
  productsInCart.renderProducts(selectedProduct.innerHTML);
  productsInCart.addProduct(selectedProduct.innerHTML);
});

//productsInCart.getUser();




//const product1 = new Product("Bell", 56);
// const product2 = new Product("Speaker", 5);
// const product3 = new Product("Speaker2", 562);
// const product4 = new Product("Speaker3", 98);
// const product5 = new Product("Speaker4", 40);