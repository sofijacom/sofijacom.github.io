let icon = document.querySelector('label');
let bool = document.querySelector('#Checkbox');
let body = document.body;

function changeTheme() {
    if(bool.checked){
        icon.innerHTML = "🌛";
        body.style.setProperty('--bg', 'radial-gradient(circle, rgba(158,157,149,1) 0%, rgba(33,70,116,1) 100%)');
    }else{
        icon.innerHTML = "😎";
        body.style.setProperty('--bg', 'radial-gradient(circle, rgba(255,239,115,1) 0%, rgba(115,177,255,1) 100%)');
    }
}
