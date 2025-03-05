 function changeTheme(){
   const theme_switch = document.getElementById("theme-switch");
   if (theme_switch.checked) {
     DarkReader.enable();
     // Add the ff. line to write to memory.
     localStorage.setItem("my-theme","macchiato");
   }
   else {
     DarkReader.disable();
     // Add the ff. line to write to memory.
     localStorage.setItem("my-theme",null);
   }
 }

 // Check local storage every reload to know which theme to use.
 if (localStorage.getItem("my-theme")==="macchiato") {
   // Use dark theme.
   DarkReader.enable();
 }
 else {
   // Use default theme.
   DarkReader.disable();
 }
