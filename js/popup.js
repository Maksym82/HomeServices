document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const input = form.querySelector(".form__input");
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".popup__close");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Показываем попап
    popup.classList.remove("popup--hidden");
    popup.classList.add("popup--visible");

    // Блокируем скролл
    document.body.classList.add("body--no-scroll");

    // Очистка поля
    input.value = "";
    input.blur();

    // Автозакрытие через 5 секунд
    setTimeout(() => {
      popup.classList.remove("popup--visible");
      popup.classList.add("popup--hidden");

      // Возвращаем скролл
      document.body.classList.remove("body--no-scroll");
    }, 5000);
  });

  closeBtn.addEventListener("click", function () {
    popup.classList.remove("popup--visible");
    popup.classList.add("popup--hidden");

    // Возвращаем скролл
    document.body.classList.remove("body--no-scroll");
  });
});
