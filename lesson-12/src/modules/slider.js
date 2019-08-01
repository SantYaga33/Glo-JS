const slider = () => {
  const slideElem = document.querySelectorAll('.portfolio-item'),
    buttonElem = document.querySelectorAll('.portfolio-btn'),
    sliderElem = document.querySelector('.portfolio-content'),
    ulElem = document.querySelector('.portfolio-dots');

  // создаем точки для слайдера ( они закомм-ны в верстке)
  let currentSlide = 0,
    interval;
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

export default slider;