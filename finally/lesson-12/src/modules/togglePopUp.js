  const togglePopUp = () => {
    const popUpElem = document.querySelector('.popup'),
      popUpButtonElem = document.querySelectorAll('.popup-btn'),
      popUpCloseElem = document.querySelector('.popup-close'),
      bodyElem = document.querySelector('body');

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
      popUpButtonElem.forEach((elem) => {
        elem.addEventListener('click', () => {
          popUpElem.style.display = 'block';
          popUpElem.style.transform = 'scale(1)';
          bodyElem.style.overflow = 'hidden';

        });
      });
      popUpCloseElem.addEventListener('click', () => {
        popUpElem.style.transitionProperty = 'all';
        popUpElem.style.transitionDuration = 0.3 + 's';
        popUpElem.style.transitionTimingFunction = 'ease';
        popUpElem.style.transform = 'scale(0)';
        bodyElem.style.overflow = 'auto';
        setTimeout(() => {
          popUpElem.style.display = 'none';
        }, 400);
      });
    }
  };

  export default togglePopUp;