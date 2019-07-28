  function numAnimate() {
        var number = 1;
        var result = 15;
        setInterval(function () {
          number++;
          if (number <= result) { console.log(number); }
        }, 10);
      }
      numAnimate();