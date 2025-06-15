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
        // В противном случае…
             // Add the ff. line to write to memory.
     localStorage.setItem("my-theme","dark");
    } else {
        // …переключаемся на "light-theme.css"
        theme.href = "/assets/css/light-theme.css";
             // Add the ff. line to write to memory.
     localStorage.setItem("my-theme",null);
    }

        if (document.body.className.includes("dark")) {
            document.body.classList.remove('dark');
            localStorage.setItem("pref-theme", 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem("pref-theme", 'dark');
        }
});

     // Проверяйте локальное хранилище при каждой перезагрузке, чтобы знать, какую тему использовать.
 if (localStorage.getItem("my-theme")==="dark") {
   // Use dark theme.
   theme.href = "/assets/css/dark-theme.css";
 }
 else {
   // Use default theme.
   theme.href = "/assets/css/light-theme.css";
 }



//document.getElementById("theme-toggle").addEventListener("click", () => {
//        if (document.body.className.includes("dark")) {
//            document.body.classList.remove('dark');
//            localStorage.setItem("pref-theme", 'light');
//        } else {
//            document.body.classList.add('dark');
//            localStorage.setItem("pref-theme", 'dark');
//        }
//    })

