// By Sofiya 
// Выбираем кнопку
const themeToggle = document.getElementById("theme-toggle");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
themeToggle.addEventListener("click", function() {
    // Если текущий адрес содержит "light-theme.css"
    if (theme.getAttribute("href") == "/assets/css/light-theme.css") {
        // …то переключаемся на "dark-theme.css"
        theme.href = "/assets/css/dark-theme.css";
        theme.href = '/_include/giscus-component.html';
        // В противном случае…
             // Add the ff. line to write to memory.
     localStorage.setItem("my-theme","dark");
    } else {
        // …переключаемся на "light-theme.css"
        theme.href = "/assets/css/light-theme.css";
        theme.href = '/_include/giscus.html';
             // Add the ff. line to write to memory.
     localStorage.setItem("my-theme",null);
    }    
});

     // Check local storage every reload to know which theme to use.
 if (localStorage.getItem("my-theme")==="dark") {
   // Use dark theme.
   theme.href = "/assets/css/dark-theme.css";
     theme.href = '/_include/giscus-component.html';
 }
 else {
   // Use default theme.
   theme.href = "/assets/css/light-theme.css";
     theme.href = '/_include/giscus.html';
 }
