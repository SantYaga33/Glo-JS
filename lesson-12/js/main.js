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
const anchors = document.querySelectorAll('a[href*="#"]');
  anchors.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const ourId = item.getAttribute('href');
    document.querySelector('' + ourId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


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
          sliderElem = document.querySelector('.portfolio-content'),
          ulElem = document.querySelector('.portfolio-dots');

// создаем точки для слайдера ( они закомм-ны в верстке)
    let currentSlide = 0, interval;
    for (let i = 0; i < slideElem.length; i++) {
      let newLiElem = document.createElement('li');
      newLiElem.classList.add('dot');
      ulElem.appendChild(newLiElem);
    }
    const dotElem = document.querySelectorAll('.dot');
    dotElem[0].classList.add('dot-active');
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
        console.log('стартанул сново!');
        startSlide();
      }
    });

    startSlide(2000);


  };
  slider();

  // смена аватарок при наведении - меняем img на img из дата атрибута
  const changeImg = () => {
    const imgCommandElem = document.querySelectorAll('.command__photo');
    let oldimage;
    imgCommandElem.forEach((elem) => {
      elem.addEventListener('mouseenter', (event) => {
      oldimage = event.target.src;
      event.target.src = event.target.dataset.img;
      });
    });
    imgCommandElem.forEach((elem) => {
      elem.addEventListener('mouseleave', (event) => {
        event.target.src = oldimage;
      });
    });

  };
  changeImg();

  //  поля ввода для калькулятора ( только цифры)
  let calcBlockElem = document.querySelector('.calc-block'),
  inputcalcBlockElem = calcBlockElem.querySelectorAll('input');
  inputcalcBlockElem.forEach((elem) => {
    elem.value = elem.value.replace(/[^0-9]/g, '');
  });

  // калькулятор
  const calc = (price = 100) => {
    let calcBlockElem = document.querySelector('.calc-block');
    const calcTypeElem = document.querySelector('.calc-type'),
          calcSquareElem = document.querySelector('.calc-square'),
          calcDayElem = document.querySelector('.calc-day'),
          calcCountElem = document.querySelector('.calc-count'),
          totalValueElem = document.getElementById('total');

    const countSum = () => {
      let total = 0, cauntValue = 1, dayvalue = 1;
      const typeValue   = calcTypeElem.options[calcTypeElem.selectedIndex].value,
            squareValue = calcSquareElem.value;

      if (calcCountElem .value > 1) {
        cauntValue += (calcCountElem.value - 1) / 10;
      }
      if (calcDayElem.value && calcDayElem.value < 5) {
        dayvalue *= 2;
      } else if (calcDayElem.value && calcDayElem.value < 10) {
        dayvalue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * cauntValue * dayvalue;
      }
     
     
      const numAnimate = () => {
        let number = 0;
        let interval = setInterval( () => {
          number += 10;
          if (number <= total) { 
            totalValueElem.textContent = number;
          } else {
            clearInterval(interval);
          }
        }, 1);
      };
      numAnimate();


    };
         
    calcBlockElem.addEventListener('change', (event) => {
      const target = event.target;
      if (target.matches('select') || target.matches('input')) {
        totalValueElem.textContent = 0;
        countSum();
      }
    });

  };
  calc();

  // валидация полей ввода в формах 
  const allInput = document.querySelectorAll('input');
  allInput.forEach((elem) => {
    if (elem.name === 'user_phone') {
      elem.addEventListener('input', () => {
        elem.value = elem.value.replace(/[^0-9+]/ig, '');
      });
    }
  });

  allInput.forEach((elem) => {
    if (elem.name === 'user_name' || elem.name === 'user_message') {
      elem.addEventListener('input', () => {
        elem.value = elem.value.replace(/[^ А-Яа-яЁё]/ig, '');
      });
    }
  });

  // проверка поля ввода емайл (ошибки накладываются с ошибками при отправки формы ) - код для себя
  const allForms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 20px; color: red;';

  
  allForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let target = e.target,
          currentInput = target.querySelector('input[type="email"]');
      allInput.forEach((elem) => {
        let myRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (myRegEx.test(currentInput.value) === false) {
            target.appendChild(statusMessage);
            statusMessage.textContent = 'Вы ввели не корректный адресс';
            currentInput.focus();
            setTimeout(() => {
              statusMessage.textContent = '';
            }, 3000);
          }else {
            return;
          }
      });
    });
  });


  //ajax запросы и отправка формы на сервер 
  const sendForm = () => {
    const errorMessage   = 'Что то пошло не так ...',
          loadMessage    = 'Загрузка ...',
          sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся.';

    const formElem         = document.getElementById('form1'),
          formQuestionElem = document.getElementById('form2'),
          formPopupElem    = document.getElementById('form3') ;

    const statusMessage    = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 20px; color: red;';

    formElem.addEventListener('submit', (e) => {
      e.preventDefault();
      formElem.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      let formData = new FormData(formElem);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
     
      let allInput = formElem.querySelectorAll('input');
      allInput.forEach((elem) => {
        elem.value ='';
      });
      postData(body)
      .then(() => {
          statusMessage.textContent = sucsessMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 5000);
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.log(error);
            setTimeout(() => {
              statusMessage.textContent = '';
            }, 5000);
        });

    });
    // обработчит отправки данных для popup формы
    formPopupElem.addEventListener('submit', (e) => {
      e.preventDefault();
      formPopupElem.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      let formData = new FormData(formPopupElem);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      let allInput = formPopupElem.querySelectorAll('input');
      allInput.forEach((elem) => {
        elem.value = '';
      });

      postData(body)
        .then(() => {
          statusMessage.textContent = sucsessMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 5000);
        })
         .catch( (error) => {
          statusMessage.textContent = errorMessage;
          console.log(error);
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 5000);
        });
    });
    // обработчик отправки данных для 2й формы (блок остались вопросы)
    formQuestionElem.addEventListener('submit', (e) => {
      e.preventDefault();
      formQuestionElem.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      let formData = new FormData(formQuestionElem);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      
      let allInput = formQuestionElem.querySelectorAll('input');
      allInput.forEach((elem) => {
        elem.value = '';
      });

      postData(body)
       .then(() => {
          statusMessage.textContent = sucsessMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 5000);
        })
        .catch( (error) => {
          statusMessage.textContent = errorMessage;
          console.log(error);
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 5000);
        });
  
    });
    
    
    const postData = (body) => {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
        request.addEventListener('readystatechange', () => {
          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
            resolve();
          } else {
            reject(request.status);
          }
        });
      });
    };

  };

  sendForm();



// временный запрос с промисами 
// const getData = (url) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.addEventListener('readystatechange', () => {
//       if (request.readyState !== 4) {
//         return;
//       }
//       if (request.status === 200) {
//         const response = JSON.parse(request.responseText);
//         resolve(response);
//       }else {
//         reject(request.statusText);
//       }
//     });
//     request.send();
//   });
// };
// const outputPhotos = (data) => {
//   //тело функции -= что делаем с полученными данными в data
// };
// const urlPhotos = 'тут ссылка ';
// getData(urlPhotos)
//   .then(outputPhotos)
//   .catch(errror => console.error(errror));
  




});



//копия раб вариант 
//ajax запросы и отправка формы на сервер 
// const sendForm = () => {
//   const errorMessage = 'Что то пошло не так ...',
//     loadMessage = 'Загрузка ...',
//     sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся.';

//   const formElem = document.getElementById('form1'),
//     formQuestionElem = document.getElementById('form2'),
//     formPopupElem = document.getElementById('form3');

//   const statusMessage = document.createElement('div');
//   statusMessage.style.cssText = 'font-size: 20px; color: red;';

//   formElem.addEventListener('submit', (e) => {
//     e.preventDefault();
//     formElem.appendChild(statusMessage);
//     statusMessage.textContent = loadMessage;

//     let formData = new FormData(formElem);
//     let body = {};
//     formData.forEach((val, key) => {
//       body[key] = val;
//     });

//     let allInput = formElem.querySelectorAll('input');
//     allInput.forEach((elem) => {
//       elem.value = '';
//     });
//     postData(body, () => {
//       statusMessage.textContent = sucsessMessage;
//       setTimeout(() => {
//         statusMessage.textContent = '';
//       }, 5000);
//     }, (error) => {
//       statusMessage.textContent = errorMessage;
//       console.log(error);
//       setTimeout(() => {
//         statusMessage.textContent = '';
//       }, 5000);
//     });
//   });
//   // обработчит отправки данных для popup формы
//   formPopupElem.addEventListener('submit', (e) => {
//     e.preventDefault();
//     formPopupElem.appendChild(statusMessage);
//     statusMessage.textContent = loadMessage;

//     let formData = new FormData(formPopupElem);
//     let body = {};
//     formData.forEach((val, key) => {
//       body[key] = val;
//     });

//     let allInput = formPopupElem.querySelectorAll('input');
//     allInput.forEach((elem) => {
//       elem.value = '';
//     });

//     postData(body, () => {
//       statusMessage.textContent = sucsessMessage;
//       setTimeout(() => {
//         statusMessage.textContent = '';
//       }, 5000);
//     }, (error) => {
//       statusMessage.textContent = errorMessage;
//       console.log(error);
//       setTimeout(() => {
//         statusMessage.textContent = '';
//       }, 5000);
//     });
//   });
//   // обработчик отправки данных для 2й формы (блок остались вопросы)
//   formQuestionElem.addEventListener('submit', (e) => {
//     e.preventDefault();
//     formQuestionElem.appendChild(statusMessage);
//     statusMessage.textContent = loadMessage;

//     let formData = new FormData(formQuestionElem);
//     let body = {};
//     formData.forEach((val, key) => {
//       body[key] = val;
//     });

//     let allInput = formQuestionElem.querySelectorAll('input');
//     allInput.forEach((elem) => {
//       elem.value = '';
//     });

//     postData(body, () => {
//       statusMessage.textContent = sucsessMessage;
//       setTimeout(() => {
//         statusMessage.textContent = '';
//       }, 5000);
//     }, (error) => {
//       statusMessage.textContent = errorMessage;
//       console.log(error);
//       setTimeout(() => {
//         statusMessage.textContent = '';
//       }, 5000);
//     });
//   });


//   const postData = (body, outputData, errorData) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//       if (request.readyState !== 4) {
//         return;
//       }
//       if (request.status === 200) {
//         outputData();
//       } else {
//         errorData(request.status);
//       }
//     });
//     request.open('POST', './server.php');
//     request.setRequestHeader('Content-Type', 'application/json');
//     request.send(JSON.stringify(body));
//   };
// };

// sendForm();
