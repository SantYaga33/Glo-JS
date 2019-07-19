window.addEventListener('DOMContentLoaded', function() {
'use strict';

// таймер
function countTimer(deadline) {
  let timerHoursElem   = document.querySelector('#timer-hours'),
      timerMinutesElem = document.querySelector('#timer-minutes'),
      timerSecondsElem = document.querySelector('#timer-seconds');

  function getTimeRemaining() {    
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor(timeRemaining / 60) % 60,
        hours   = Math.floor(timeRemaining / 60 / 60);

      return {timeRemaining, hours, minutes, seconds};
  }  

  function updateClock() {
    let timer = getTimeRemaining();

    timerHoursElem.textContent   = timer.hours   < 10 ? '0' + timer.hours   : timer.hours;
    timerMinutesElem.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
    timerSecondsElem.textContent = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;

    if (--timer.timeRemaining > 0) {
      setInterval(updateClock, 1000);
    } else {
       timerHoursElem.textContent   = '00';
       timerMinutesElem.textContent = '00';
       timerSecondsElem.textContent = '00';

    }
  }
  updateClock();
}

countTimer('22 july 2019');



});