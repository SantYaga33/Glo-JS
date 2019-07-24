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
  countTimer('28 july 2019');

// Меню
  const toggleMenu = () => {
    const bodyElem = document.querySelector(`body`),
          menuElem = document.querySelector(`menu`);

    const handlerMenu = () => {
      menuElem.classList.toggle('active-menu');
    };

    bodyElem.addEventListener('click', (e) => {
      if (e.target.matches(`.menu > img`) || e.target.matches(`.close-btn`) || e.target.matches(`ul > li > a`)) {
        handlerMenu();
      } else if (e.target.closest(`menu`) === null) {
        menuElem.classList.remove(`active-menu`);
      }
      return;
    });
  };
  toggleMenu();

// плавная прокрутка до якоря 
// const anchors = document.querySelectorAll('a[href*="#"], a[href*="#"]:not(.prev, .next)');
// for (let anchor of anchors) {
//   anchor.addEventListener('click', (event) => {
//     event.preventDefault();
//     const ourId = anchor.getAttribute('href');
//     document.querySelector('' + ourId).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   });
// };

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
      popUpElem.style.transform = 'scale(1)';
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
          tabElem[i].classList.add('active');
          tabContentElem[i].classList.remove('d-none'); 
        } else {
          tabElem[i].classList.remove('active');
          tabContentElem[i].classList.add('d-none'); 
        }
      }
    };

    tabHeaderElem.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
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

//  слайдер 
  const slider = () => {
    const slideElem = document.querySelectorAll('.portfolio-item'),
          buttonElem = document.querySelectorAll('.portfolio-btn'),
          dotElem = document.querySelectorAll('.dot'),
          sliderElem = document.querySelector('.portfolio-content');

    let currentSlide = 0, interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slideElem, currentSlide, 'portfolio-item-active');
      prevSlide(dotElem, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slideElem.length) {
        currentSlide = 0;
      }
       nextSlide(slideElem, currentSlide, 'portfolio-item-active');
       nextSlide(dotElem, currentSlide, 'dot-active');
    };

    const startSlide = (time = 2000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };  

    sliderElem.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      prevSlide(slideElem, currentSlide, 'portfolio-item-active');
      prevSlide(dotElem, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dotElem.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slideElem.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slideElem.length - 1;
      }
      nextSlide(slideElem, currentSlide, 'portfolio-item-active');
      nextSlide(dotElem, currentSlide, 'dot-active');
    });

    sliderElem.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') || 
          event.target.matches('.dot')) {
        stopSlide();
      }
    });

    sliderElem.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
        startSlide(2000);
      }
    });

    startSlide(2000);


  };
  slider();

});

