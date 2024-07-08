document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('search-button')
  const mobileSearch = document.getElementById('mobile-search')

  const menuButton = document.getElementById('menu-button')
  const menuDrawer = document.getElementById('menu-drawer-id')

  const carousel = document.getElementById('carousel')
  const prevButton = document.getElementById('prev-button')
  const nextButton = document.getElementById('next-button')
  const totalSlides = document.querySelectorAll('#carousel > div').length
  let currentSlide = 0
  let autoSlideInterval

  searchButton.addEventListener('click', function (event) {
    event.stopPropagation()
    mobileSearch.classList.toggle('hidden')
    mobileSearch.classList.toggle('show')
  })

  menuButton.addEventListener('click', function (event) {
    event.stopPropagation()
    menuDrawer.classList.toggle('hidden')
    menuDrawer.classList.toggle('show')
  })

  document.addEventListener('click', function (event) {
    if (
      !mobileSearch.contains(event.target) &&
      !searchButton.contains(event.target)
    ) {
      mobileSearch.classList.add('hidden')
      mobileSearch.classList.remove('show')
    }

    if (
      !menuButton.contains(event.target) &&
      menuDrawer.contains(event.target)
    ) {
      menuDrawer.classList.toggle('hidden')
    }
  })

  function updateCarousel() {
    const translateXValue = -currentSlide * 100 // déplacer de 100vw par slide
    carousel.style.transform = `translateX(${translateXValue}vw)`
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    updateCarousel()
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    updateCarousel()
  }

  nextButton.addEventListener('click', function () {
    nextSlide()
    resetAutoSlide()
  })

  prevButton.addEventListener('click', function () {
    prevSlide()
    resetAutoSlide()
  })

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000)
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval)
    startAutoSlide()
  }

  // startAutoSlide()
})

function updateValue(value) {
  document.getElementById('rangeValue').innerText = value
}

var swiper = new Swiper('.mySwiper2', {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    '@0.00': {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
})

var slider = new Swiper('.productgalley-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 6,
})

var thumbs = new Swiper('.productgalley-thumbs', {
  slidesPerView: 'auto',
  direction: 'vertical',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
})

slider.controller.control = thumbs
thumbs.controller.control = slider
