    document.getElementById("theme-toggle").addEventListener("click", () => {
        if (document.body.className.includes("dark")) {
            document.body.classList.remove('dark');
            localStorage.setItem("pref-theme", 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem("pref-theme", 'dark');
        }
    })

// Проверяйте локальное хранилище при каждой перезагрузке, чтобы знать, какую тему использовать.
 if (localStorage.getItem("my-theme")==="dark") {
   // Use dark theme.
   document.body.classList.add('dark');
 }
 else {
   // Use default theme.
   document.body.classList.add('light');
 }
