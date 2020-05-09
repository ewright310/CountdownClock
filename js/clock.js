/*
main.js
*/

//Show to current time
function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    
    setTimeout(showTime, 1000);

    document.getElementById('currentTime').innerText = time;
}

//Show current date
function showDate() {
    let today = new Date();
    let day = getToday(today.getDate());
    let month = getThisMonth(today.getMonth());
    let year = today.getFullYear();
    date = day + " " + month + " " + year;
    document.getElementById("dateDisplay").innerText = date

    document.getElementById('currentDate').innerText = date;
}

function getToday(d) {
    if (d == 1 || d[1] == 1) {
        d = d + "st"
    } else if (d == 2 || d[2]) {
        d = d + "nd"
    } else if (d == 3 || d[3]) {
        d = d + "rd"
    } else {
        d = d + "th"
    }
    return d
}

function getThisMonth(m) {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[m];
    return currentMonth;
}



showTime();
showDate();


