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

    timerHoursElem.textContent = timer.hours;
    timerMinutesElem.textContent = timer.minutes;
    timerSecondsElem.textContent = timer.seconds;

    if (timer.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    }
  }
  updateClock();
}

countTimer('1 july 2020');



});