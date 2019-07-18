'use strict';

function DomElement(selector, height, width, bg, fontSize, position) {
  this.selector = selector;
  this.height   = height;
  this.width    = width;
  this.bg       = bg;
  this.fontSize = fontSize;
  this.position = position;
 
}

DomElement.prototype.creatElem = function (selector) {
  if (selector[0] === '.') {
    let newDiv = document.createElement('div');
    newDiv.classList.add(selector.slice(1));
    newDiv.style.cssText = `width: ${this.width}px; height:${this.height}px; background-color: ${this.bg}; position: ${this.position}; top: 50px; left: 50px;`;
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

let test = new DomElement ('.newDiv', '100', '100', 'red','30','absolute');
document.addEventListener('DOMContentLoaded', function () {
test.creatElem('.newDiv');
let newDiv = document.getElementsByClassName('newDiv');

document.addEventListener('keydown', function (e) {

  if (e.keyCode === 37) {
    newDiv.style.left += '-10px';
    console.log('left');
  } else if (e.keyCode === 38) {
    newDiv.style.top += '-10px';
    console.log('top');
  } else if (e.keyCode === 39) {
    newDiv.style.left += '+10px';
    console.log('right');
  } else if (e.keyCode === 40) {
    newDiv.style.top += '+10px';
    console.log('bottom');
   
  }
});






});

