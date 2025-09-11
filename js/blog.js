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


