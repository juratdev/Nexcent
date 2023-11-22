const hamburgerBtn = document.getElementById('hamburger-button')
const mobileMenu = document.getElementById('mobile-menu')

const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden')
  mobileMenu.classList.toggle('flex')
  hamburgerBtn.classList.toggle('toggle-btn')
}


hamburgerBtn.addEventListener('click', toggleMenu)
mobileMenu.addEventListener('click', toggleMenu)

// Hamburger Menu overflow-hidden
hamburgerBtn.addEventListener('click', () => {
  document.body.classList.toggle('overflow-hidden')
})
mobileMenu.addEventListener('click', () => {
  document.body.classList.toggle('overflow-hidden')

})