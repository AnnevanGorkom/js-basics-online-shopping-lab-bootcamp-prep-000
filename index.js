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
  var itemInCart = false;
  var lang = cart.length;

  for (var i = 0; i < lang; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      lang--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return console.log("Sorry, we don't have a credit card on file for you..");
  }
  else {
    var prijs = 0;
    var itemAndPrice = [];

    for (let i = 0; i < cart.length; i++) {
      let itemAndPrice = cart[i];
      let item = Object.keys(itemAndPrice)[0];
      let price = itemAndPrice[item];
      prijs + price;
    }
    return console.log(`Your total cost is \$${prijs}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}

//The placeOrder() function accepts one argument, a credit card number.

//If no argument is received, the function should print out
    //Sorry, we don't have a credit card on file for you..

//If a card number is received, the function should print out
    //Your total cost is $71, which will be charged to the card 83296759.
          //(where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder()).
    //Then, it should empty the cart array.
