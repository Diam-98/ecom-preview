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
