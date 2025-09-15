const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 10,

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

  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-120%", 0, -500],
      opacity: 0,
    },
    next: {
      translate: ["120%", 0, -500],
      opacity: 0,
    },
  },

});
