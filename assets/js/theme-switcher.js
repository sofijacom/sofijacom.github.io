const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('my-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('my-theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('my-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
 // Check local storage every reload to know which theme to use.
 if (localStorage.getItem("my-theme")==="dark") {
   // Use dark theme.
   DarkReader.enable();
 }
 else {
   // Use default theme.
   DarkReader.disable();
 }
