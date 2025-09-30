// const swiper = new Swiper(".swiper", {
//   loop: true,
//   speed: 600,
//   grabCursor: true,
//   slidesPerView: 1,
//   spaceBetween: 10,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return `<span class="${className} custom-bullet"></span>`;
//     },
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },

//   effect: "creative",
//   creativeEffect: {
//     prev: {
//       translate: ["-120%", 0, -500],
//       opacity: 0,
//     },
//     next: {
//       translate: ["120%", 0, -500],
//       opacity: 0,
//     },
//   },

// });

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 600,
  grabCursor: true,
  spaceBetween: 10,
  slidesPerView: 1,

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

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     translate: ["-120%", 0, -500],
  //     opacity: 0,
  //   },
  //   next: {
  //     translate: ["120%", 0, -500],
  //     opacity: 0,
  //   },
  // },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
