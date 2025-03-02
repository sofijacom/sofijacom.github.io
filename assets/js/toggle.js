const switcher = document.getElementById("theme-switch");
if (localStorage.getItem("grape-color")==="dark") {
	switcher.checked = true;
}
else {
  	switcher.checked = false;
}