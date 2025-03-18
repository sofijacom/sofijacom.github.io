// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
    // Если текущий адрес содержит "light-theme.css"
    if (theme.getAttribute("href") == "/sass/basically-basic/variables.scss") {
        // …то переключаемся на "dark-theme.css"
        theme.href = "/assets/css/dark-theme.css";
        // В противном случае…
             // Add the ff. line to write to memory.
     localStorage.setItem("my-theme","dark");
    } else {
        // …переключаемся на "light-theme.css"
        theme.href = "/sass/basically-basic/variables.scss";
             // Add the ff. line to write to memory.
     localStorage.setItem("my-theme",null);
    }    
});

     // Check local storage every reload to know which theme to use.
 if (localStorage.getItem("my-theme")==="dark") {
   // Use dark theme.
   theme.href = "/assets/css/dark-theme.css";
 }
 else {
   // Use default theme.
   theme.href = "/sass/basically-basic/variables.scss";
 }
