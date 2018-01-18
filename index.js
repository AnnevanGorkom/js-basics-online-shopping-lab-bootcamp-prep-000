var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var boodschap = {[item]: parseInt(Math.floor((Math.random() * 100) + 1))};
  cart.push(boodschap);
  return console.log(`${item} has been added to your cart.`), cart;
}

function viewCart() {
  const l = cart.length;

  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  var totaal = 0;

  for (var i = 0; i < cart.length; i++) {
    for (let item in cart[i]) {
      totaal += cart[i][item];
    }
  }
  return totaal;
}

function removeFromCart(item) {
  itemInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      cart.length--;
    }
  }
  
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
