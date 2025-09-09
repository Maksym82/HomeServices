// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//  // Default parameters
//   slidesPerView: 1,
//   spaceBetween: 10,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

// });

// const swiper = new Swiper(".swiper", {
//   direction: "horizontal",
//   loop: true,
//   speed: 600,
//   slidesPerView: 1,
//   spaceBetween: 30,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },

//   effect: "slide", // можно заменить на 'fade' или 'creative'
// });

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} custom-bullet"></span>`;
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

