const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minEl =document.getElementById('min');
const secondsEl =document.getElementById('seconds');


  const newYears = '5 Mar 2021';

 function countdown() {
const newYearsDate = new Date(newYears);
const currentDate = new Date();

const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 3600) % 24;
const min = Math.floor(totalSeconds / 60 ) % 60;
const seconds = Math.floor(totalSeconds) % 60;

daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minEl.innerHTML = formatTime(min);
secondsEl.innerHTML = formatTime(seconds);
 }

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}



countdown();

setInterval(countdown, 1000);