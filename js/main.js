'use strict';

let money;

let start = function () {
  do {
    money = prompt('Ваш месячный доход?', '55000');
  } while (isNaN(money) || money == '' || money == null);
};
start();

let appData = {
  income: {},
  addIncome: ['фриланс'],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  numberRequests: 2,
  asking: function () {
    if ( confirm('Есть ли у Вас дополнительный источник зароботка?')) {
       let itemIncome, cashIncome;
      do {
        itemIncome = prompt('Какой у Вас дополнительный доход?', 'Фриланс');
      } while (!isNaN(itemIncome) || itemIncome == '' || itemIncome == null);
      do {
        cashIncome = prompt('Сколько в месяц эта работа приносит дополнительного дохода?', 10000);
      } while (isNaN(cashIncome) || cashIncome == '' || cashIncome == null);
      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses;
      do {
        addExpenses = prompt('Перечислите возможные расходы через запятую');
      } while (!isNaN(addExpenses) || addExpenses == '' || addExpenses == null);
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Есть ли у Вас депозит в банке?');

    for (let i = 0; i < appData.numberRequests; i++) {
      let howMoneyAnsw, expensesAnsw;
      do {
        expensesAnsw = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Какой-то расход');
      } while (!isNaN(expensesAnsw) || expensesAnsw == '' || expensesAnsw == null);
      do {
        howMoneyAnsw = prompt('Во сколько это обойдется?', '5000');
      } while (isNaN(howMoneyAnsw) || howMoneyAnsw == '' || howMoneyAnsw == null);
      appData.expenses[expensesAnsw] = howMoneyAnsw;
    }
    return (' appData.expenses: ', appData.expenses);
  },

  getExpensesMonth: function () {
    for (let item in appData.expenses) {
      appData.expensesMonth += +appData.expenses[item];
    }
    return appData.expensesMonth;
  },

  getBudget: function () {
    appData.budgetMonth = money - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    return appData.budgetMonth;
  },

  getTargetMonth: function () {
    appData.period = Math.ceil(appData.mission / appData.getBudget());
    if (appData.period <= 0) {
      return ('Цель не будет достигнута');
    }
    return appData.period;
  },

  getStatusIncome: function () {
    if (appData.budgetDay >= 800) {
      return ('Высокий уровень дохода');
    } else if (appData.budgetDay > 300 && appData.budgetDay < 800) {
      return ('Средний уровень дохода');
    } else if (appData.budgetDay > 0 && appData.budgetDay <= 300) {
      return ('Низкий уровень дохода');
    } else if (appData.budgetDay <= 0) {
      return ('Что то пошло не так');
    }
  },

  getInfoDeposit: function() {
    do {
       appData.percentDeposit = prompt('Какой годовой процент?');
    } while (isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
    do {
      appData.moneyDeposit = prompt('Какая сумма вложена?');
    } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);
  },

  calcSaveMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};


appData.asking();
// console.log('appData.income: ', appData.income);
// console.log('appData.expenses: ', appData.expenses);
// console.log(`Расходы за месяц составят: ${appData.getExpensesMonth()}`);
// console.log(`Достигнем цели за ${appData.getTargetMonth()} месяцев(а)`);
// console.log(`Наш уровень дохода: ${appData.getStatusIncome()}`);

let getAllDate = function () {
  for (let item in appData) {
    console.log(`Наша программа включает в себя данные: ${item} =${appData[item]}`);
  }
};
// getAllDate();


let getUppercase = function() {
  let newIncome = [];
  for (let element in appData.income) {
      newIncome.push( element[0].toUpperCase() + element.slice(1) );
    }
    console.log(newIncome.join(", "));
  let newExpenses = appData.addExpenses.map(function(item) {
    return item[0].toUpperCase() + item.slice(1);
  });
  console.log(newExpenses.join(", "));
  };

getUppercase();


