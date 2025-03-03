const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === '/assets/style/_dark.scss') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', '/assets/style/_dark.scss');
        localStorage.setItem('theme', '/assets/style/dark.scss');
    }
    else {        document.documentElement.setAttribute('data-theme', '/assets/style/_light.scss');
          localStorage.setItem('theme', '/assets/style/light.scss');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
