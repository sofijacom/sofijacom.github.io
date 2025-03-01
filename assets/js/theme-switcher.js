function changeTheme(){
   const theme_switch = document.getElementById("theme-switch");
   if (theme_switch.checked) {
     DarkReader.enable();
   }
   else {
     DarkReader.disable();
   }
 }
