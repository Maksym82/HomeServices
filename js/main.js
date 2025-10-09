"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initTextToggle();
  initCardReveal();
  initAccordion();
  initSwiper();
  initMenuToggle();
});

// Переключение скрытого текста в карточке блога
function initTextToggle() {
  document.querySelectorAll(".blog__btn-more").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest("article");
      const hiddenText = card.querySelector(".hidden-text");
      const dots = card.querySelector(".dots");

      const isExpanded = hiddenText.style.display === "inline";

      hiddenText.style.display = isExpanded ? "none" : "inline";
      dots.style.display = isExpanded ? "inline" : "none";
      btn.textContent = isExpanded ? "Read more..." : "Hide";
    });
  });
}

// Постепенное раскрытие карточек блога
function initCardReveal() {
  const cards = document.querySelectorAll(".blog__item");
  const viewMoreBtn = document.querySelector(".blog__view-more");
  const cardsPerClick = 3;
  let visibleCount = cardsPerClick;

  cards.forEach((card, index) => {
    card.style.display = index < cardsPerClick ? "block" : "none";
  });

  viewMoreBtn.addEventListener("click", () => {
    for (let i = visibleCount; i < visibleCount + cardsPerClick; i++) {
      if (cards[i]) {
        cards[i].style.display = "block";
      }
    }
    visibleCount += cardsPerClick;

    if (visibleCount >= cards.length) {
      viewMoreBtn.style.display = "none";
    }
  });
}

// Аккордеон: раскрытие одного блока, закрытие остальных
function initAccordion() {
  const headers = document.querySelectorAll(".accordion__button");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const currentItem = header.parentElement;
      const currentContent = currentItem.querySelector(".accordion__content");
      const isActive = currentItem.classList.contains("active");

      document.querySelectorAll(".accordion__item").forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".accordion__content").style.maxHeight = "0";
      });

      if (!isActive) {
        currentItem.classList.add("active");
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      }
    });
  });
}

// Инициализация адаптивного Swiper-слайдера
function initSwiper() {
  new Swiper(".swiper", {
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
}

// Глобальный клик-хендлер для меню
function initMenuToggle() {
  document.addEventListener("click", (e) => {
    const targetItem = e.target;
    console.log(targetItem);
    if (targetItem.closest(".icon-menu") || targetItem.closest(".menu__link")) {
      document.documentElement.classList.toggle("menu-open");
    }
  });
}
