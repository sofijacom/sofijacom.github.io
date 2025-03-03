let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
    setTheme('light');
} else {
    setTheme(style);
}

for (let i of switches) {
    i.addEventListener('click', function () {
        let theme = this.dataset.theme;
        setTheme(theme);
    });
}

function setTheme(theme) {
    if (theme == 'light') {
        document.getElementById('switcher-id').href = '/assets/style/_light.scss';
    } else if (theme == 'dark') {
        document.getElementById('switcher-id').href = '/assets/style/_dark.scss';
    }
    localStorage.setItem('style', theme);
}

