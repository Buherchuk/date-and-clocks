setInterval(() => {
    let dd = new Date();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    let month = dd.getMonth() + 1;
    let day = dd.getDate();
    let year = dd.getFullYear();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;

    document.querySelector('.date').innerHTML = `${day} : ${month} : ${year}`;
    document.querySelector('.time').innerHTML = `${hh} : ${mm} : ${ss}`;
}, 500)

let time = 0;
let setMinutes = 0;
function setSeconds() {
    time++;
    let mins = Math.floor(time / 10 / 60);
    let secs = Math.floor(time / 10 % 60);
    let hours = Math.floor(time / 10 / 60 / 60);
    let tenths = time % 10;
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    document.querySelector(".seconds-description").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
}
function startInterval() {
    intervalID = setInterval(setSeconds, 100);
}
function stopInterval() {
    clearInterval(intervalID);
}
function createTimeList() {
    let p = document.createElement('p');
    let seconds = document.querySelector('.seconds-description').textContent;
    p.textContent = seconds;
    document.querySelector('.result-loop').appendChild(p);
}
function resetTimeList() {
    time = 0;
    clearInterval(intervalID);
    document.querySelector('.seconds-description').textContent = "0:00:00:00";
    document.querySelector('.result-loop').innerHTML = "";
}
function increaseMinute() {
    total = document.querySelector('.minutes').textContent;
    if (total < 59) {
        setMinutes++;
        if (total < 9) {
            setMinutes = "0" + setMinutes;
        }
    }
    document.querySelector('.minutes').textContent = setMinutes;
}
function decreaseMinutes() {
    total = document.querySelector('.minutes').textContent;
    if (total != "00" && total < 59 && total > 0) {
        setMinutes--;
        if (total < 9) {
            setMinutes = "0" + setMinutes;
            
        }
        document.querySelector('.minutes').textContent = setMinutes;
    }    
}

let myTimer;
function clock() {
    if(setMinutes > 0){
        myTimer = setInterval(myClock, 1000);
        let c = document.querySelector('.minutes').textContent * 60;
        function myClock() {
            --c
            let seconds = c % 60;
            let secondsInMinutes = (c - seconds) / 60;
            let minutes = secondsInMinutes % 60;
            document.querySelector(".counter-minutes").textContent = (minutes < 10 ? "0" : "") + String(minutes) + ":";
            document.querySelector(".counter-seconds").textContent = (seconds < 10 ? "0" : "") + String(seconds);
            if (c == 0) {
                clearInterval(myTimer);
            }
        }
    }
}
function clockPause() {
    clearInterval(myTimer);
}
function clockReset(){
    document.querySelector(".counter-minutes").textContent = "00 :";
    document.querySelector(".counter-seconds").textContent = "00";
    document.querySelector('.minutes').textContent = "00";
    clearInterval(myTimer);
    setMinutes = 0;
}
