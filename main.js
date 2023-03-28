// cart functionalities

let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

// show cart
cartIcon.addEventListener('click', () => {
  cart.classList.add('active')
})

// close cart
closeCart.addEventListener('click', () => {
  cart.classList.remove('active')
})

// check if items added to cart
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

// remove item(s) from cart
function ready() {
  let removeCartButton = document.getElementsByClassName('cart-remove')
  for (let i = 0; i < removeCartButton.length; i++) {
    let button = removeCartButton[i]
    button.addEventListener('click', removeCartItem)
  }
}

// remove particular item from cart
function removeCartItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.remove()
}
