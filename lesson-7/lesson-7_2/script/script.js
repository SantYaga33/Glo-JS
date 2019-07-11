'use strict';

let startElement              = document.querySelector('#start'),
    incomePluseElement        = document.querySelector('.income > button'),
    expensesPluseElement      = document.querySelector('.expenses > button'),
    checkBoxElement           = document.querySelector('#deposit-check'),
    additionalItemElement     = document.querySelectorAll('.additional_income-item'),
    budgetDayElement          = document.querySelector('.budget_day-value'),
    budgetMonthElement        = document.querySelector('.budget_month-value'),
    expensesMonthElement      = document.querySelector('.expenses_month-value'),
    accumulatedMonthElement   = document.querySelector('.accumulated_month-value'),
    additionalIncomeElement   = document.querySelector('.additional_income-value'),
    additionalExpensesElement = document.querySelector('.additional_expenses-value'),
    incomePeriodElement       = document.querySelector('.income_period-value'),
    targetMonthElement        = document.querySelector('.target_month-value'),
    salaryAmountElement       = document.querySelector('.salary-amount'),
    incomeTitleElement        = document.querySelector('.income-title'),
    incomeAmountElement       = document.querySelector('.income-amount'),
    expensesTitleElement      = document.querySelector('.expenses-title'),
    expensesAmountElement     = document.querySelector('.expenses-amount'),
    additionalExpItemElement  = document.querySelector('.additional_expenses-item'),
    targetAmountElement       = document.querySelector('.target-amount'),
    periodSelectElement       = document.querySelector('.period-select'),
    expensesItems             = document.querySelectorAll('.expenses-items');


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    numberRequests: 2,

  start: function () {
    if (isNaN(salaryAmountElement.value) || salaryAmountElement.value == '' || salaryAmountElement.value == null) {
      alert('Ошибка, поле "Месячный доход" обязательно к заполнению цифрами');
      return;
    }
   
    appData.budget = salaryAmountElement.value;
    appData.getExpenses();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.calcSaveMoney();

    appData.showResult();
  },
  showResult: function() {
    budgetMonthElement.value   = appData.budgetMonth;
    budgetDayElement.value     = appData.budgetDay;
    expensesMonthElement.value = appData.expensesMonth;
    additionalExpensesElement.value = appData.addExpenses.join(', ');
    additionalIncomeElement.value = appData.addIncome.join(', ');
    targetMonthElement.value = appData.getTargetMonth();
    incomePeriodElement.value = appData.calcSaveMoney();
    
  }, 

  addExpensesBlock: function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPluseElement);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesPluseElement.style.display = 'none';
    }
  },
  getExpenses: function() {
    expensesItems.forEach(function(item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
     
      if (!isNaN(itemExpenses) || itemExpenses == '' || itemExpenses == null) {
        alert('Укажите возможные расходы прописью');
        return;
      }
      if (isNaN(cashExpenses) || cashExpenses == '' || cashExpenses == null) {
        alert('Укажите сумму возможных расходов в цифрах');
        return;
      }
      appData.expenses[itemExpenses] = cashExpenses;
    });
  },
  getAddExpenses: function() {
    let addExpenses = additionalExpItemElement.value.split(',');
    addExpenses.forEach(function(item) {
      item = item.trim();
      if (item !=='') {
        appData.addExpenses.push(item);
      }  
    });
  },
  getAddIncome: function() {
    additionalItemElement.forEach(function(item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },

  // asking: function () {
  //   if ( confirm('Есть ли у Вас дополнительный источник зароботка?')) {
  //      let itemIncome, cashIncome;
  //     do {
  //       itemIncome = prompt('Какой у Вас дополнительный доход?', 'Фриланс');
  //     } while (!isNaN(itemIncome) || itemIncome == '' || itemIncome == null);
  //     do {
  //       cashIncome = prompt('Сколько в месяц эта работа приносит дополнительного дохода?', 10000);
  //     } while (isNaN(cashIncome) || cashIncome == '' || cashIncome == null);
  //     appData.income[itemIncome] = cashIncome;
  //   }
  //   let addExpenses;
  //     do {
  //       addExpenses = prompt('Перечислите возможные расходы через запятую');
  //     } while (!isNaN(addExpenses) || addExpenses == '' || addExpenses == null);
  //     appData.addExpenses = addExpenses.toLowerCase().split(',');
  //     appData.deposit = confirm('Есть ли у Вас депозит в банке?');

  // },

  getExpensesMonth: function () {
    for (let item in appData.expenses) {
      appData.expensesMonth += +appData.expenses[item];
    }
    return appData.expensesMonth;
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    return appData.budgetMonth;
  },

  getTargetMonth: function () {
    return Math.ceil(targetAmountElement.value / appData.getBudget());

    // if (appData.period <= 0) {
    //   return ('Цель не будет достигнута');
    // }
    // return appData.period;
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
    return appData.budgetMonth * periodSelectElement.value;
  }
};

startElement.addEventListener('click', appData.start);
expensesPluseElement.addEventListener('click', appData.addExpensesBlock);

// appData.asking();























































// console.log('appData.income: ', appData.income);
// console.log('appData.expenses: ', appData.expenses);
// console.log(`Расходы за месяц составят: ${appData.getExpensesMonth()}`);
// console.log(`Достигнем цели за ${appData.getTargetMonth()} месяцев(а)`);
// console.log(`Наш уровень дохода: ${appData.getStatusIncome()}`);

// let getAllDate = function () {
//   for (let item in appData) {
//     console.log(`Наша программа включает в себя данные: ${item} =${appData[item]}`);
//   }
// };
// getAllDate();


// let getUppercase = function() {
//   let newIncome = [];
//   for (let element in appData.income) {
//       newIncome.push( element[0].toUpperCase() + element.slice(1) );
//     }
//     console.log(newIncome.join(", "));
//   let newExpenses = appData.addExpenses.map(function(item) {
//     return item[0].toUpperCase() + item.slice(1);
//   });
//   console.log(newExpenses.join(", "));
//   };

// getUppercase();


