const btn = document.getElementById("toggleBtn");
const hiddenText = document.querySelector(".hidden-text");
const dots = document.querySelector(".dots");

let expanded = false;

btn.addEventListener("click", () => {
  expanded = !expanded;
  hiddenText.style.display = expanded ? "inline" : "none";
  dots.style.display = expanded ? "none" : "inline";
  btn.textContent = expanded ? "Hide" : "Read more...";
});
