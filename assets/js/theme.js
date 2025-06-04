// By Sofiya 
// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
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
});

     // Check local storage every reload to know which theme to use.
 if (localStorage.getItem("my-theme")==="dark") {
   // Use dark theme.
   theme.href = "/assets/css/dark-theme.css";
 }
 else {
   // Use default theme.
   theme.href = "/assets/css/light-theme.css";
 }

  function changeGiscusTheme () {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ?  'dark' : 'light'

    function sendMessage(message) {
      const iframe = document.querySelector('iframe.giscus-frame');
      if (!iframe) return;
      iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }

    sendMessage({
      setConfig: {
        theme: theme
      }
    });
  }
