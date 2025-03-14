 // This function runs every time the switch is toggled.
 function changeTheme(){
   const theme_switch = document.getElementById("theme-switch");
   if (theme_switch.checked) {
     document.documentElement.setAttribute("data-theme","dark");
     // Add the ff. line to write to memory.
     localStorage.setItem("my-theme","dark");
   }
   else {
     document.documentElement.removeAttribute("data-theme")
     // Add the ff. line to write to memory.
     localStorage.setItem("my-theme",null);
   }
 }

 // Check local storage every time html is loaded to know which theme to use.
 if (localStorage.getItem("my-theme")==="dark") {
   // Use dark theme.
   document.documentElement.setAttribute("data-theme","dark");
 }
 else {
   // Use default theme.
   document.documentElement.removeAttribute("data-theme")
 }
