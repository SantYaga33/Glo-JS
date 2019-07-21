window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // таймер
  function countTimer(newYear) {
    let tmornElem = document.querySelector('.morn'),
      tmornValueElem = document.querySelector('.morn__value'),
      toDayElem = document.querySelector('.today'),
      timeHoursElem = document.querySelector('.time-hours'),
      timeMinutesElem = document.querySelector('.time-minutes'),
      timeSecondsElem = document.querySelector('.time-seconds'),
      timePmElem = document.querySelector('.time-pm'),
      newYearElem = document.querySelector('.newyear__value');

    function getTimeRemaining() {
      let dateStop = new Date(newYear).getTime(),
        dateNow = new Date(),
        day = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],

        toDay = dateNow.getDay(),
        hours = dateNow.getHours(),
        minutes = dateNow.getMinutes(),
        seconds = dateNow.getSeconds(),
        milliseconds = dateNow.getTime(),
        timeRemaining = (dateStop - milliseconds) / 1000,
        days = Math.floor(timeRemaining / 60 / 60 / 24);

        if (8 <= hours && hours <= 11) {
          tmornElem.textContent = 'Доброе';
          tmornValueElem.textContent = 'утро';
        } else if (11 <= hours && hours <= 18) {
          tmornElem.textContent = 'Добрый';
          tmornValueElem.textContent = 'день';
        } else if (18 <= hours && hours <= 24) {
          tmornElem.textContent = 'Добрый';
          tmornValueElem.textContent = 'вечер';
        } else {
          tmornElem.textContent = 'Доброй';
          tmornValueElem.textContent = 'ночи';
        }

        toDayElem.textContent = day[toDay];
        newYearElem.textContent = days;
        // массив и условие для проверки количество дней до НГ  и соответственно смены окончания слова 'дня' не делал
        let dd = 'AM', currentHour = hours;
        if (currentHour >= 12) {
          currentHour = hours - 12;
          dd = 'PM';
        }
        if (currentHour == 0) {
          currentHour = 12;
        }
        return {
          timeRemaining,
          hours,
          days,
          minutes,
          seconds,
          currentHour
        };
      }

    function updateClock() {
      let timer = getTimeRemaining();
      let dd = 'AM',
        currentHour = timer.hours;
      if (currentHour >= 12) {
        currentHour = timer.hours - 12;
        dd = 'PM';
      }
      if (currentHour == 0) {
        currentHour = 12;
      }
      currentHour   = currentHour   < 10 ? '0' + currentHour : currentHour;
      timer.minutes = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
      timer.seconds = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;

      timeHoursElem.textContent   = `${currentHour}:`;
      timeMinutesElem.textContent = `${timer.minutes}:`;
      timeSecondsElem.textContent = `${timer.seconds}`;
      timePmElem.textContent      = `${dd}`;

      setInterval(updateClock, 1000);

    }
    updateClock();
  }
  countTimer('1 January  2020');
  
});