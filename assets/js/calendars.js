var monthNamesRy = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfTheWeekRy = ["S", "M", "T", "W", "T", "F", "S"]

var d = new Date();
var year = d.getFullYear();// 2016
document.querySelector("#year").innerHTML = year;
var thisMonth = d.getMonth();// 0 - 11
var today = d.getDate();// 1 -31
//var nthday = d.getDay();// 0 - 7
var daysOfTheMonthDiv = document.querySelectorAll(".daysOfTheMonth");


for( var month = 0; month< 12; month++){
    createCalendar(month);
}



function createCalendar(month){
    var monthDiv = createMonthHeader(month);

    var firstDayOfTheMonth  = getFirstDayOfTheMonth(year,month);
    var daysinmonth  = daysInMonth(year,month)
    var counter = 0,order = 6;

    for( var i = 0; i < firstDayOfTheMonth +7; i++){
        order++;
        createDay(month, "&nbsp;",order, monthDiv);
    }
    for( var i = firstDayOfTheMonth; i < daysInMonth(year,month) + firstDayOfTheMonth; i++){
        counter ++;
        order++;
        createDay(month,counter,order,monthDiv);
    }

    for( var i = firstDayOfTheMonth + daysinmonth; i < 6*7; i++){
        order++;
        createDay(month, "&nbsp;",order, monthDiv);
    }


}

function createDay(month,counter,order,monthDiv){

    //if(order == 8){order = -1}
    var day = document.createElement("div");
    if(month == thisMonth && counter == today){day.setAttribute("class","to day");
    }else{
        day.setAttribute("class","day");}
        day.setAttribute("style","order:"+order);
        day.innerHTML = counter;
        monthDiv.appendChild(day);
        /*
         < d*iv class="monthDiv">
         <div class="day">5</div>
         */
}


function createMonthHeader(month){
    var calendar = document.querySelector(".calendar");



    var monthDiv = document.createElement("div");
    monthDiv.setAttribute("class","month");
    calendar.appendChild(monthDiv);

    var h4 = document.createElement("h4");
    h4.innerHTML = monthNamesRy[month];
    monthDiv.appendChild(h4);

    for( var i = 0; i < 7; i++){
        //var order = (i == 0) ? order = 7 : order = i;
        var hday = document.createElement("div");
        hday.setAttribute("class","day OfWeek");
        hday.setAttribute("style","order:"+i);
        hday.innerHTML = daysOfTheWeekRy[i].toUpperCase();
        monthDiv.appendChild(hday);
    }


    return monthDiv;

    /*
     < d*iv class="month">

     <div class="monthHeader">
     <div class="day OfWeek">Sun</div>
     <div class="day OfWeek">Mon</div>
     <div class="day OfWeek">Tue</div>
     <div class="day OfWeek">Wed</div>
     <div class="day OfWeek">Thu</div>
     <div class="day OfWeek">Fri</div>
     <div class="day OfWeek">Sat</div>
     </div>

     <div class="daysOfTheMonth">
     */
}


function daysInMonth(year,month) {
    return new Date(year, month+1, 0).getDate();//29/03/2016 (month + 1)
}

/*function leapYear(year){
 * return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
 } *

 function getNextMonth(month){
 if (month == 11) {
     var nextMonth = 0;
     } else {
         var nextMonth = month+1;
         }
         return nextMonth;
         }
         */
function getMonthName(month){
    return monthNamesRy[month];
}
function getDayName(day){
    return daysOfTheWeekRy[day];
}

function getFirstDayOfTheMonth(y,m){
    var firstDay = new Date(y, m, 1);
    return firstDay.getDay();
}
function getLastDayOfTheMonth(y,m){
    var lastDay = new Date(y, m + 1, 0);
    return lastDay.getDay();
}


// the popp up

var calendar = document.querySelector(".calendar");
var cloneCont = document.querySelector(".cloneCont");
var requestId = false;
calendar.addEventListener("click", function(e){
    if(this.querySelector(".cloneCont")){
        this.removeChild(this.querySelector(".cloneCont"));}

        else if(e.target.parentNode.className =='month' ){

            var monthClone = e.target.parentNode.cloneNode(true);
            monthClone.className += " cloneMonth";
            var cloneCont = document.createElement("div");
            cloneCont.className += " cloneCont";
            cloneCont.appendChild(monthClone);
            this.appendChild(cloneCont);

        }
},false);
