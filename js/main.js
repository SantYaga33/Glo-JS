'use strict';

// == урок 5 ==
let deposit = true,
    mission = 100000,
    money,
    period,
    budgetMonth,
    budgetDay,
    sumCharges;

let start = function() {
  do  {
    money = prompt('Ваш месячный доход?');
  } while (isNaN(money) || money == '' || money == null); 
};
start();

let numberRequests = 2,
    expenses = [],
    howMoney = [],
    howMoneyAnsw,
    expensesAnsw;

let getExpensesMonth = function () {
  for (let i = 0; i < numberRequests; i++) {
    do {
      expensesAnsw = prompt('Какие обязательные ежемесячные расходы у вас есть?');
    } while (!isNaN(expensesAnsw) || expensesAnsw == '' || expensesAnsw == null); 
    expenses.push(expensesAnsw);

    do {
      howMoneyAnsw = prompt('Во сколько это обойдется?', 'Укажите сумму в цифрах');
    } while (isNaN(howMoneyAnsw) || howMoneyAnsw == '' || howMoneyAnsw == null); 
    howMoney.push(+howMoneyAnsw);
  }

  sumCharges = howMoney.reduce(function (sum, current) {
    return sum + current;
  });
  return sumCharges;
};
getExpensesMonth();
 
// == промежуточная проверка ==
// console.log('howMoney: ', howMoney);
// console.log('expenses: ', expenses);
// console.log('Сумма всех расходов в месяц: ', sumCharges);

let getAccumulatedMonth = function () {
  let resalt = money - sumCharges;
  return resalt;
};

let accumulatedMonth = getAccumulatedMonth();
// console.log('accumulatedMonth: ', accumulatedMonth);


let getTargetMonth = function () {
  period = Math.ceil(mission / accumulatedMonth);
  if (period <= 0) {
    return console.log('Цель не будет достигнута');
  }
  return period;
};

budgetMonth = money - sumCharges;
budgetDay = Math.floor(budgetMonth / 30);

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

