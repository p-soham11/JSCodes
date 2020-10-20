const daysEL = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minsEL = document.getElementById('mins')
const secsEL = document.getElementById('secs')

const newYear = "1 Jan 2021";

function ctd() {
    const newYearDate = new Date(newYear);
    const currDate = new Date();

    const totalsec = (newYearDate - currDate) / 1000;

    const days = Math.floor(totalsec/ 3600/ 24);
    const hours = Math.floor(totalsec/ 3600) % 24;
    const mins = Math.floor(totalsec/ 60) % 60;
    const secs = Math.floor(totalsec) % 60;

    
    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minsEL.innerHTML = mins;
    secsEL.innerHTML = secs;
    console.log("Hello")
}

ctd();

setInterval(ctd, 1000);