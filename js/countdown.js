/*
Countdown.js
*/

 function getUserDate() {
    let userDate = new Date();
    userDate = document.getElementById("userDate").value;
    userDate = userDate + document.getElementById("userTime").value;
    return userDate;
}

function getFutureDifference() {
    let eventDate = new Date(getUserDate());
    let today = new Date();
    let difference = eventDate - today;
    return difference
}

function getPastDifference() {
    let eventDate = new Date(getUserDate());
    let today = new Date();
    let difference = today - eventDate;
    return difference
}

function getTimes() {
    if(Date.parse(getUserDate())-Date.parse(new Date())<0) {
        timeDifference = getPastDifference();
    } else {
        timeDifference = getFutureDifference();
    }

    document.getElementById('secondTimer').innerText  = Math.floor(timeDifference / 1000) + " seconds";
    document.getElementById('minuteTimer').innerText = Math.floor(timeDifference/ 1000 / 60) + " minutes";
    document.getElementById('hourTimer').innerText = Math.floor(timeDifference / 1000 / 60 / 60) + " hours";
    let days = timeDifference / 1000 / 60 / 60 / 24;
    document.getElementById('dayTimer').innerText = Math.round(days * 10) /10 + " days";
    
    document.getElementById('eventNameOut').innerText = (document.getElementById('eventName').value + "!");

    setTimeout(getTimes,100);

}

function pastOrPresent() {
    if(Date.parse(getUserDate())-Date.parse(new Date())<0) {
        document.getElementById('pastPresent').innerText = "it has been";
        document.getElementById('untilSince').innerText = "since";
    }}


document.getElementById('submitButton').onclick = function() {
    if (document.getElementById('eventName').value == "") {
        alert('You have not entered an event name');
    } else {
    document.getElementById("outputSection").style.display="block";
    getTimes();
    pastOrPresent();
}}
