'use strict';

let arr = ['234234', '5456456', '5345345', '464565', '243234', '45566', '40000'];

arr.forEach( function(e) {
  if ( e.startsWith('2') || e.startsWith('4') ) {
    console.log(e);
  }
});


let isPrime = function(number) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
         return false;
      }
      return true;
    }
};

let getPrimeNumber = function(maxNumber) {
  for (let i = 2; i < maxNumber; i++) {
    if ( isPrime(i) ){
      console.log(`Делители числа ${i}: 1 и ${i}`);
    }
  }
};
getPrimeNumber(100);