'use strict';

let listBooksElement   = document.querySelectorAll('.book'),
    listTitleElement   = document.querySelectorAll('.book > h2 a'),
    listUlElement      = document.querySelectorAll('.book > ul'),
    listLiTitleElement = document.querySelectorAll('.book ul > li'),
    asideElement       = document.querySelector('.books'),
    bannerElement      = document.querySelector('.adv'),
    bodyElement        = document.querySelector('body');

// listTitleElement - получил доступ таким образом, так как на странице могут быть другие заголовки или другие ссылки (а)   

asideElement.insertBefore(listBooksElement[1], listBooksElement[0]);
asideElement.insertBefore(listBooksElement[4], listBooksElement[3]);
asideElement.insertBefore(listBooksElement[2], null);

bodyElement.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');
listTitleElement[4].textContent = 'Новый заголовок';
bannerElement.setAttribute('style', 'display: none');
listUlElement[0].insertBefore(listLiTitleElement[6], listLiTitleElement[4]);
listUlElement[0].insertBefore(listLiTitleElement[8], listLiTitleElement[4]);

listUlElement[5].insertBefore(listLiTitleElement[55], listLiTitleElement[48]);
listUlElement[5].insertBefore(listLiTitleElement[48], listLiTitleElement[52]);

let newLiElement = document.createElement('li');

newLiElement.textContent = 'Глава 8: За пределами ES6';
listUlElement[2].insertBefore(newLiElement, listLiTitleElement[26]);



    