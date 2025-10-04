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

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".blog__item");
  const viewMoreBtn = document.querySelector(".blog__view-more");
  const cardsPerClick = 3;
  let visibleCount = 0;

  // Скрываем все карточки, кроме первых трёх
  cards.forEach((card, index) => {
    card.style.display = index < cardsPerClick ? "block" : "none";
  });
  visibleCount = cardsPerClick;

  viewMoreBtn.addEventListener("click", () => {
    for (let i = visibleCount; i < visibleCount + cardsPerClick; i++) {
      if (cards[i]) {
        cards[i].style.display = "block";
      }
    }
    visibleCount += cardsPerClick;

    // Если все карточки показаны — скрываем кнопку
    if (visibleCount >= cards.length) {
      viewMoreBtn.style.display = "none";
    }
  });
});
