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
        document.getElementById('switcher-id').href = '_sass/basically-basic/themes/plum.scss';
    } else if (theme == 'dark') {
        document.getElementById('switcher-id').href = '_sass/basically-basic/themes/_macchiato.scss';
    }
    localStorage.setItem('style', theme);
}
