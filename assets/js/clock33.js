// By Sofiya 

function getRandom(number) {
            return Math.round(number * Math.random());
        };

        function getRandomColor() {

            var red = getRandom(255);
            var green = getRandom(255);
            var blue = getRandom(255);

            var color = "rgb(" + red + "," + green + "," + blue + ")";

            return color;
        };

        function clock33() {

            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            var clockHours = document.getElementById("clockHours");
            var clockMinutes = document.getElementById("clockMinutes");
            var clockSeconds = document.getElementById("clockSeconds");

            if (hours < 10)
                hours = "0" + hours;
            if (minutes < 10)
                minutes = "0" + minutes;
            if (seconds < 10)
                seconds = "0" + seconds;

            clockHours.innerHTML = hours;
            clockMinutes.innerHTML = minutes;
            clockSeconds.innerHTML = seconds;

            clockHours.style.color = getRandomColor();
            clockMinutes.style.color = getRandomColor();
            clockSeconds.style.color = getRandomColor();

            setTimeout("clock33()", 1000);
        };
