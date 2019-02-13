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

const newProduct = class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
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

  renderProducts() {
    // Implement functionality here
    for (i = 0; i < availableProducts.length; i++) {
      const uList = document.querySelector("ul");
      const list = document.createElement("li");
      list.innerHTML = availableProducts[Math.floor(Math.random() * 12)];
      uList.appendChild("list");
    }
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
};

// const product1 = new Product("Bell", 56);
// const product2 = new Product("Speaker", 5);
// const product3 = new Product("Speaker2", 562);
// const product4 = new Product("Speaker3", 98);
// const product5 = new Product("Speaker4", 40);

const productsInCart = new ShoppingCart([]);

productsInCart.addProduct("Bell");
productsInCart.addProduct("Speaker");
productsInCart.addProduct("Speaker2");
console.log(productsInCart);

productsInCart.removeProduct("Speaker2");

productsInCart.getUser();
