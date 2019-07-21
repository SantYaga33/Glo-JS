window.addEventListener('DOMContentLoaded', function() {
'use strict';

// Таймер
  const countTimer = (deadline) => {
  let timerHoursElem   = document.querySelector('#timer-hours'),
      timerMinutesElem = document.querySelector('#timer-minutes'),
      timerSecondsElem = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {    
      let dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor(timeRemaining / 60) % 60,
          hours   = Math.floor(timeRemaining / 60 / 60);

        return {timeRemaining, hours, minutes, seconds};
    };  

    const updateClock = ()=> {
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
    };
    updateClock();
  };
  countTimer('24 july 2019');

// Меню
  const toggleMenu = () => {
    const buttonMenuElem  = document.querySelector('.menu'),
          menuElem        = document.querySelector('menu'),
          closeButtonElem = document.querySelector('.close-btn'),
          menuItemsElem   = menuElem.querySelectorAll('ul > li');

    const handlerMenu = () => {
      menuElem.classList.toggle('active-menu');
    };
    buttonMenuElem.addEventListener('click', handlerMenu);   
    closeButtonElem.addEventListener('click', handlerMenu);
    menuItemsElem.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };
  toggleMenu();

// popup
  const togglePopUp = () => {
    const popUpElem   = document.querySelector('.popup'),
      popUpButtonElem = document.querySelectorAll('.popup-btn'),
      popUpCloseElem  = document.querySelector('.popup-close');

    popUpElem.style.transitionProperty = 'all';
    popUpElem.style.transitionDuration = 0.3 + 's';
    popUpElem.style.transitionTimingFunction = 'ease';
    popUpElem.style.transform = 'scale(0)';
   
    if (screen.width <= 480) {
      popUpButtonElem.forEach((elem) => {
        elem.addEventListener('click', () => {
          popUpElem.style.display = 'block';
        }); 
      });     
      popUpCloseElem.addEventListener('click', () => { 
        popUpElem.style.display = 'none';
      });  
      
    } else {
    popUpButtonElem.forEach( (elem) => {
      elem.addEventListener('click', () => {
        popUpElem.style.display = 'block';
        popUpElem.style.transform = 'scale(1)';
      });
    });    
    popUpCloseElem.addEventListener('click', () => {
      popUpElem.style.transitionProperty = 'all';
      popUpElem.style.transitionDuration = 0.3 + 's';
      popUpElem.style.transitionTimingFunction = 'ease';
      popUpElem.style.transform = 'scale(0)';
       setTimeout(() => {
         popUpElem.style.display = 'none';
        }, 400);
      });
    }
  };
  togglePopUp();

// Табы 
  const tab = () => {
    const tabHeaderElem  = document.querySelector('.service-header'),
          tabElem        = tabHeaderElem.querySelectorAll('.service-header-tab'),
          tabContentElem = document.querySelectorAll('.service-tab ');
   
    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContentElem.length; i++) {
        if (index === i) {
          tabElem[i].classList.add('activ');
          tabContentElem[i].classList.remove('d-none'); 
        } else {
          tabElem[i].classList.remove('activ');
          tabContentElem[i].classList.add('d-none'); 
        }
      }
    };

    tabHeaderElem.addEventListener('click', (event) => {
      let target = event.target;
  
      console.log('target: ', target);
      target = target.closest('.servise-header-tab');
      console.log('target: ', target);
      if (target) {
        tabElem.forEach( (item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });

  };
  tab();
});

