// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
    // Если текущий адрес содержит "light-theme.css"
    if (theme.getAttribute("href") == "light-theme.css") {
        // …то переключаемся на "dark-theme.css"
        theme.href = "dark-theme.css";
        // В противном случае…
    } else {
        // …переключаемся на "light-theme.css"
        theme.href = "light-theme.css";
    }
});
