'use strict';

let money = 12000,
  income = 'фриланс',
  addExpenses = 'аренда, поездки,  няня, садик',
  deposit = true,
  mission = 100000,
  period = 12;


// console.log('Тип данных money: ', typeof money); 
// console.log('Тип данных income: ', typeof income); 
// console.log('Тип данных deposit: ', typeof deposit);
// console.log(`Количество символов в слове ${income} = `, income.length); 
// console.log(`В течении ${period} месяцев - цель заработать ${mission} долларов`); 

addExpenses.toLowerCase();
// console.log( addExpenses.split(', ') );

let budgetDay = 12000 / 30;
// console.log(`budgetDay = ${budgetDay}`);
// console.log(`Остаток от деления = ${budgetDay % 30}`);

// == продолжение урока вводим новые данные == 
alert('Вводим новые данные');
money       = prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

// console.log('addExpenses: ', addExpenses.split(','));

deposit = confirm('Есть ли у вас депозит в банке?\nЕсли "ДА" - нажмите "OK"\nЕсли "НЕТ" - "Отмена"');

// console.log('Тип данных money: ', typeof money);
// console.log('Тип данных income: ', typeof income);
// console.log('Тип данных deposit: ', typeof deposit);

let numberRequests = 2, expenses = [], howMoney = [];
for (let i = 0; i < numberRequests; i++) {
  expenses.push(prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Напишите прописью'));
  howMoney.push(+prompt('Во сколько это обойдется?', 'Укажите сумму в цифрах'));
}
// console.log('Ежемесячные расходы : ', expenses);
// console.log('Ежемесячные расходы в цифрах: ', howMoney);

let budgetMonth, sumCharges;
sumCharges = howMoney.reduce(function (sum, current) {
  return sum + current;
});

budgetMonth = money - sumCharges;
// console.log('Доход за месяц: ', budgetMonth);

period = Math.ceil(mission / budgetMonth);
// console.log(`Мы достигнем цели ${mission}долл. через: ${period} месяцев`);

budgetDay = Math.floor(budgetMonth / 30);
// console.log(`Наш ежеднейный бюджет равен: ${budgetDay}`);



// == урок 4 ==
console.log('4-lesson - код выше не удален ( закоментирован )-может понадобиться');
let getStatusIncome  = function() { 
  if (budgetDay >= 800) {
    return ('Высокий уровень дохода');
  } else if (budgetDay > 300 && budgetDay < 800) {
    return ('Средний уровень дохода');
  } else if (budgetDay > 0 && budgetDay <= 300) {
    return ('Низкий уровень дохода');
  } else if (budgetDay <= 0 ) {
    return ('Что то пошло не так');
  }
};

console.log( 'Наш уровень дохода :', getStatusIncome() );

let showTypeof = function (param) {
  console.log(param, typeof param);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);



let getExpensesMonth = function () {
  sumCharges = howMoney.reduce(function (sum, current) {
    return sum + current;
  });
  return sumCharges;
};
getExpensesMonth();
// console.log( 'Сумма всех расходов в месяц: ', getExpensesMonth() );

let getAccumulatedMonth = function () {
  let resalt = money - sumCharges;
  return resalt;
};
let accumulatedMonth = getAccumulatedMonth();
console.log('Чистый доход за 12 месяцев составит: ', accumulatedMonth * 12 );
// console.log( 'Чистый доход в месяц: ', getAccumulatedMonth() );

let getTargetMonth = function () {
  period = Math.ceil(mission / accumulatedMonth);
  return period;
};

console.log(`Достигнем цели через ${getTargetMonth()} месяц(ев)`);

