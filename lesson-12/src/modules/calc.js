  const calc = (price = 100) => {
    let calcBlockElem = document.querySelector('.calc-block');
    const calcTypeElem = document.querySelector('.calc-type'),
      calcSquareElem = document.querySelector('.calc-square'),
      calcDayElem = document.querySelector('.calc-day'),
      calcCountElem = document.querySelector('.calc-count'),
      totalValueElem = document.getElementById('total');

    const countSum = () => {
      let total = 0,
        cauntValue = 1,
        dayvalue = 1;
      const typeValue = calcTypeElem.options[calcTypeElem.selectedIndex].value,
        squareValue = calcSquareElem.value;

      if (calcCountElem.value > 1) {
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
        let interval = setInterval(() => {
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

  export default calc;