const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

 // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
