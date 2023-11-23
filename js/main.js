let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


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