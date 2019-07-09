'use strict';

let listBooksElement   = document.querySelectorAll('.book'),
    listTitleElement   = document.querySelectorAll('.book > h2 a'),
    listUlElement      = document.querySelectorAll('.book > ul'),
    asideElement       = document.querySelector('.books'),
    bannerElement      = document.querySelector('.adv'),
    bodyElement        = document.querySelector('body');

// listTitleElement - получил доступ таким образом, так как на странице могут быть другие заголовки или другие ссылки (а)   

asideElement.insertBefore(listBooksElement[1], listBooksElement[0]);
asideElement.insertBefore(listBooksElement[4], listBooksElement[3]);
asideElement.insertBefore(listBooksElement[2], null);

bodyElement.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');
// старый и новый заголовок книги 3 совпадают
listTitleElement[4].textContent = 'Книга 3. this и Прототипы Объектов';
bannerElement.setAttribute('style', 'display: none');

let listUl0LiElement =  listUlElement[0].querySelectorAll('li');
listUlElement[0].insertBefore(listUl0LiElement[6], listUl0LiElement[4]);
listUlElement[0].insertBefore(listUl0LiElement[8], listUl0LiElement[4]);

let listUl5LiElement = listUlElement[5].querySelectorAll('li');

listUlElement[5].insertBefore(listUl5LiElement[9], listUl5LiElement[2]);
listUlElement[5].insertBefore(listUl5LiElement[2], listUl5LiElement[6]);

let listUl2LiElement = listUlElement[2].querySelectorAll('li'),
    newLiElement     = document.createElement('li');

newLiElement.textContent = 'Глава 8: За пределами ES6';
listUlElement[2].insertBefore(newLiElement, listUl2LiElement[9]);




    