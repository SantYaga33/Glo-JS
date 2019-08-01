'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tab from './modules/tab';
import slider from './modules/slider';
import changeImg from './modules/changeImg';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// Таймер
countTimer('5 Aug 2019');
// Меню
toggleMenu();
// popup
togglePopUp();
// Табы 
tab();
//  слайдер 
slider();
// смена аватарок при наведении - меняем img на img из дата атрибута
changeImg();
// калькулятор
calc();
//ajax запросы и отправка формы на сервер 
sendForm();

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

//  поля ввода для калькулятора ( только цифры)
let calcBlockElem = document.querySelector('.calc-block'),
inputcalcBlockElem = calcBlockElem.querySelectorAll('input');
inputcalcBlockElem.forEach((elem) => {
  elem.value = elem.value.replace(/[^0-9]/g, '');
});

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

// allForms.forEach((form) => {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let target = e.target,
//       currentInput = target.querySelector('input[type="email"]');
//     allInput.forEach((elem) => {
//       let myRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//       if (myRegEx.test(currentInput.value) === false) {
//         target.appendChild(statusMessage);
//         statusMessage.textContent = 'Вы ввели не корректный адресс';
//         currentInput.focus();
//         setTimeout(() => {
//           statusMessage.textContent = '';
//         }, 3000);
//       } else {
//         return;
//       }
//     });
//   });
// });
