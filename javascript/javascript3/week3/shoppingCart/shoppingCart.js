class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getPrice(currency) {
    fetch(
      "https://free.currencyconverterapi.com/api/v6/convert?q=USD_PHP&compact=ultra&apiKey=b7be47292a77ada60a66"
    )
      .then(response => response.json())
      .then(convertionValue => {
        const priceUSD_PHP = this.price * convertionValue;
      });
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    // Implement functionality here

    this.products.push(product);

    console.log("product added");
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  removeProduct(product) {
    // Implement functionality here
    this.products = this.products.filter(eachProduct => {
      return product.name !== eachProduct.name;
    });
    console.log("product removed");
  }

  getTotal() {
    // Implement functionality here
    //console.log()
    const totalPrice = this.products.reduce(
      (accumulator, productPrice) => accumulator + productPrice.price,
      0
    );
    console.log(totalPrice);
    return totalPrice;
  }

  getUser() {
    // Implement functionality here
    const promise = fetch("https://jsonplaceholder.typicode.com/users/1").then(
      response => response.json()
    );
    return promise;
  }

  renderProducts(username) {
    //render user
    const user = document.querySelector("#user");
    user.innerHTML = username;

    // foreach to product each product
    this.products.forEach(product => {
      const ul = document.querySelector(".cart ul");

      //creating li list of shopping cart
      const li = document.createElement("li");
      li.innerHTML = product.name + " --- " + product.price + "USD";
      ul.appendChild(li);
    });

    //render total price
    const divForTotalPrice = document.querySelector("#totalPrice");

    const pTagForTotalPrice = document.createElement("p");
    pTagForTotalPrice.innerHTML = "Total Price:" + this.getTotal() + "USD";

    divForTotalPrice.appendChild(pTagForTotalPrice);
  }
}

const flatscreen = new Product("flat-screen", 500);
const speakers = new Product("speakers", 100);
const headphones = new Product("Head-Phones", 50);
const shoppingCart = new ShoppingCart([flatscreen, headphones]);

shoppingCart.addProduct(speakers);
console.log(shoppingCart);

//uncomment to remove product

/* shoppingCart.removeProduct(flatscreen);
console.log(shoppingCart); */

shoppingCart
  .getUser()
  .then(user => user.name)
  .then(username => {
    shoppingCart.renderProducts(username);
  });

  //convert currency when clicked button
/* const button = document.querySelector("button");
button.addEventListener("click", () => {
   const convertedPrice = new Product().getPrice('PHP');
   const p = document.querySelector('#convertedPrice');
   p.innerHTML = convertedPrice +'PHP'
});
 */