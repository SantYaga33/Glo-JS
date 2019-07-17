'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
 
}

DomElement.prototype.creatElem = function (selector) {
  if (selector[0] === '.') {
    let newDiv = document.createElement('div');
    newDiv.classList.add(selector.slice(1));
    newDiv.style.cssText = `width: ${this.width}px; height:${this.height}px; background-color: ${this.bg}`;
    document.body.insertBefore(newDiv, null);
  } else if (selector[0] === '#') {
    let newP = document.createElement('p');
    newP.classList.add(selector.slice(1));
    newP.textContent = 'Какой то любой текст';
    newP.style.cssText = `fontSize: ${this.fontSize}px;`;
    document.body.insertBefore(newP, null);
  }
  
};

// для примера
let test = new DomElement ('.div', '300', '400', 'red','30');

test.creatElem('.newdiv');
test.creatElem('#ppp');




