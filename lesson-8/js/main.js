'use strict';

let startElement = document.querySelector('#start'),
  cancelElement = document.querySelector('#cancel'),
  incomePluseElement = document.querySelector('.income > button'),
  expensesPluseElement = document.querySelector('.expenses > button'),
  checkBoxElement = document.querySelector('#deposit-check'),
  additionalItemElement = document.querySelectorAll('.additional_income-item'),
  budgetDayElement = document.querySelector('.budget_day-value'),
  budgetMonthElement = document.querySelector('.budget_month-value'),
  expensesMonthElement = document.querySelector('.expenses_month-value'),
  accumulatedMonthElement = document.querySelector('.accumulated_month-value'),
  additionalIncomeElement = document.querySelector('.additional_income-value'),
  additionalExpensesElement = document.querySelector('.additional_expenses-value'),
  incomePeriodElement = document.querySelector('.income_period-value'),
  targetMonthElement = document.querySelector('.target_month-value'),
  salaryAmountElement = document.querySelector('.salary-amount'),
  incomeTitleElement = document.querySelector('.income-title'),
  incomeAmountElement = document.querySelector('.income-amount'),
  expensesTitleElement = document.querySelector('.expenses-title'),
  expensesAmountElement = document.querySelector('.expenses-amount'),
  additionalExpItemElement = document.querySelector('.additional_expenses-item'),
  targetAmountElement = document.querySelector('.target-amount'),
  periodSelectElement = document.querySelector('.period-select'),
  periodAmountElement = document.querySelector('.period-amount'),
  expensesItemsElement = document.querySelectorAll('.expenses-items'),
  incomeItemsElement = document.querySelectorAll('.income-items'),
  allInputTextElement = document.querySelectorAll('input[type=text]');

  startElement.disabled = true;
     
let appData = {
  income: {},
  incomeMonth: 0,
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
   
    appData.budget = +salaryAmountElement.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getIncomeMonth();
    appData.getBudget();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.calcSaveMoney();

    appData.showResult();
    // блок поведения инпутов и кнопок после нажатия кнопки рассчитать
    allInputTextElement = document.querySelectorAll('input[type=text]');
    allInputTextElement.forEach(function (item) {
      item.setAttribute('disabled', 'disabled');
      incomePluseElement.style.display = 'none';
      expensesPluseElement.style.display = 'none';
      startElement.style.display = 'none';
      cancelElement.style.display = 'block';
      startElement.disabled = true;

    });
  },

  showResult: function () {
    budgetMonthElement.value = appData.budgetMonth;
    budgetDayElement.value = appData.budgetDay;
    expensesMonthElement.value = appData.expensesMonth;
    additionalExpensesElement.value = appData.addExpenses.join(', ');
    additionalIncomeElement.value = appData.addIncome.join(', ');
    targetMonthElement.value = appData.getTargetMonth();
    incomePeriodElement.value = appData.calcSaveMoney();
    periodAmountElement.textContent = periodSelectElement.value;
  
  },

  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItemsElement[0].cloneNode(true);
    expensesItemsElement[0].parentNode.insertBefore(cloneExpensesItem, expensesPluseElement);
    expensesItemsElement = document.querySelectorAll('.expenses-items');
    if (expensesItemsElement.length === 3) {
      expensesPluseElement.style.display = 'none';
    }
  },

  removeExpensesBlock: function () {
    expensesItemsElement = document.querySelectorAll('.expenses-items');
    for (let i = 1; i < expensesItemsElement.length; i++) {
      expensesItemsElement[i].remove();
    }
  },

  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItemsElement[0].cloneNode(true);
    incomeItemsElement[0].parentNode.insertBefore(cloneIncomeItem, incomePluseElement);
    incomeItemsElement = document.querySelectorAll('.income-items');
    if (incomeItemsElement.length === 3) {
      incomePluseElement.style.display = 'none';
    }
  },

  removeIncomeBlock: function () {
  incomeItemsElement = document.querySelectorAll('.income-items');
  for (let i = 1; i < incomeItemsElement.length; i++) {
    incomeItemsElement[i].remove();
  }
  },

  getExpenses: function () {
    expensesItemsElement.forEach(function (item) {
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

  getIncome: function () {
    incomeItemsElement.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;

      if (!isNaN(itemIncome) || itemIncome == '' || itemIncome == null) {
        alert('Укажите возможные расходы прописью');
        return;
      }
      if (isNaN(cashIncome) || cashIncome == '' || cashIncome == null) {
        alert('Укажите сумму возможных расходов в цифрах');
        return;
      }
      appData.income[itemIncome] = cashIncome;
    });
  },

  getAddExpenses: function () {
    let addExpenses = additionalExpItemElement.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },

  getAddIncome: function () {
    additionalItemElement.forEach(function (item) {
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

  getIncomeMonth: function () {
    for (let item in appData.income) {
      appData.incomeMonth += +appData.income[item];
    }
    return appData.incomeMonth;
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    return appData.budgetMonth;
  },

  getTargetMonth: function () {
    return Math.ceil(targetAmountElement.value / appData.getBudget());
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

  getInfoDeposit: function () {
    do {
      appData.percentDeposit = prompt('Какой годовой процент?');
    } while (isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
    do {
      appData.moneyDeposit = prompt('Какая сумма вложена?');
    } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);
  },

  calcSaveMoney: function () {
    return appData.budgetMonth * periodSelectElement.value;
  },
  changeSelect: function () {
    periodAmountElement.textContent = periodSelectElement.value;
    appData.calcSaveMoney();
    appData.showResult();
  },

  getReset: function () {
    allInputTextElement = document.querySelectorAll('input[type=text]');
    appData.removeIncomeBlock();
    appData.removeExpensesBlock();
    allInputTextElement.forEach(function (item) {
      item.removeAttribute('disabled', 'disabled');
      item.value = item.defaultValue;
      periodAmountElement.textContent = periodSelectElement.value;
      periodSelectElement.value = '1';
      incomePluseElement.style.display = 'block';
      expensesPluseElement.style.display = 'block';
      startElement.style.display = 'block';
      cancelElement.style.display = 'none';
    });
  }
};
 salaryAmountElement.addEventListener('input', function () {
  if (salaryAmountElement.value !== '') {
    startElement.disabled = false;
  } else {
     startElement.disabled = true;
  }
 });
 
startElement.addEventListener('click', appData.start.bind(appData));
cancelElement.addEventListener('click', appData.getReset.bind(appData));
expensesPluseElement.addEventListener('click', appData.addExpensesBlock);
incomePluseElement.addEventListener('click', appData.addIncomeBlock);
periodSelectElement.addEventListener('change', appData.changeSelect);