// script.js

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button')
  const cartButton = document.getElementById('cart-button')
  const overlay = document.getElementById('overlay')
  const cartOverlay = document.getElementById('cart-overlay')
  const closeButton = document.getElementById('close-button')
  const cartCloseButton = document.getElementById('cart-close-button')
  const body = document.body

  menuButton.addEventListener('click', () => {
    overlay.classList.remove('hidden')
    body.classList.add('no-scroll')
  })

  closeButton.addEventListener('click', () => {
    overlay.classList.add('hidden')
    body.classList.remove('no-scroll')
  })

  cartButton.addEventListener('click', () => {
    cartOverlay.classList.remove('hidden')
    body.classList.add('no-scroll')
  })

  cartCloseButton.addEventListener('click', () => {
    cartOverlay.classList.add('hidden')
    body.classList.remove('no-scroll')
  })

  // Optional: Close the overlay when clicking outside of it
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.add('hidden')
      body.classList.remove('no-scroll')
    }
  })

  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
      cartOverlay.classList.add('hidden')
      body.classList.remove('no-scroll')
    }
  })
})
