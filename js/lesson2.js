let num = 266219, result = 1; 

let numbers = num.toString().split(''); 
for (let i = 0; i <= numbers.length-1; i++) {
  result *= Number(numbers[i]);
}

console.log(`Произведение цифр числа ${num} равно :`, result);

let degreeNum = 3;
let degree = result ** 3;
console.log(`Возведение числа ${result} в степень ${degreeNum} равно :`, degree);

let degreeNumbers = degree.toString().split('');
alert(`Первые два символа числа ${degree} будут равны : ${degreeNumbers[0] + degreeNumbers[1]}`);




