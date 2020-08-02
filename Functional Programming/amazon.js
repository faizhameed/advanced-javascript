const user = {
  name: "faiz",
  active: true,
  cart: [],
  purchases: [],
};

// let pen = new purchaseItem("lexi", 10);
// let book = new purchaseItem("Note book", 25);

const compose = (f, g) => (...args) => f(g(...args));

let updatedUser = purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemsToCart
)(user, { name: "book", price: 25 });

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemsToCart(user, item) {
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  const { cart } = user;
  const updatedCart = cart.map((item) => ({
    name: item.name,
    price: Math.round(item.price * 1.1),
  }));
  return { ...user, cart: updatedCart };
}

function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart });
}
function emptyCart(user) {
  return Object.assign({}, user, { cart: [] });
}

console.log(updatedUser);
