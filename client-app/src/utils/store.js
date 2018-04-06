const store = {
  getCart() {
    return JSON.parse(localStorage.getItem("cart"))
  },
  setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
  }
}

module.exports = store
