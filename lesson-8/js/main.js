'use strict';

let startElement = document.querySelector('#start'),
  cancelElement = document.querySelector('#cancel'),
  incomePluseElement = document.querySelector('.income > button'),
  expensesPluseElement = document.querySelector('.expenses > button'),
  checkBoxElement = document.querySelector('#deposit-check'),
  depositBankElement = document.querySelector('.deposit-bank'),
  depositAmountkElement = document.querySelector('.deposit-amount'),
  depositPercentElement = document.querySelector('.deposit-percent'),
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

const AppData = function (income = {}, addIncome = [], expenses = {}, addExpenses = [], incomeMonth = 0, deposit = false, percentDeposit = 0, moneyDeposit = 0, budget = 0, budgetDay = 0, budgetMonth = 0, expensesMonth = 0, numberRequests = 2) {
  this.income = income;
  this.addIncome = addIncome;
  this.expenses = expenses;
  this.addExpenses = addExpenses;
  this.incomeMonth = incomeMonth;
  this.deposit = deposit;
  this.percentDeposit = percentDeposit;
  this.moneyDeposit = moneyDeposit;
  this.budget = budget;
  this.budgetDay = budgetDay;
  this.budgetMonth = budgetMonth;
  this.expensesMonth = expensesMonth;
  this.numberRequests = numberRequests;
};

  AppData.prototype.start = function () {
   
    this.budget = +salaryAmountElement.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getInfoDeposit();
    this.getIncomeMonth();
    this.getBudget();
    this.getAddExpenses();
    this.getAddIncome();
    this.calcSaveMoney();

    // блок поведения инпутов и кнопок после нажатия кнопки рассчитать
  AppData.prototype.showResult = function() {
    allInputTextElement = document.querySelectorAll('input[type=text]');
    allInputTextElement.forEach( (item) => {
      item.setAttribute('disabled', 'disabled');
      incomePluseElement.style.display = 'none';
      expensesPluseElement.style.display = 'none';
      startElement.style.display = 'none';
      cancelElement.style.display = 'block';
      startElement.disabled = true;

    });
  },

   AppData.prototype.showResult = function () {
    budgetMonthElement.value = this.budgetMonth;
    budgetDayElement.value = this.budgetDay;
    expensesMonthElement.value = this.expensesMonth;
    additionalExpensesElement.value = this.addExpenses.join(', ');
    additionalIncomeElement.value = this.addIncome.join(', ');
    targetMonthElement.value = AppData.prototype.getTargetMonth();
    incomePeriodElement.value = AppData.prototype.calcSaveMoney();
    periodAmountElement.textContent = periodSelectElement.value;
  
  },

   AppData.prototype.getRestrictToIntegerExp = function () {
    expensesItemsElement = document.querySelectorAll('.expenses-items');
    expensesItemsElement.forEach( (item) => {
      let cashExpenses = item.querySelector('.expenses-amount');
      cashExpenses.addEventListener('input', restrictToInteger);
      function restrictToInteger() {
        cashExpenses.value = cashExpenses.value.replace(/[^\d.]/g, '');
      }
    });
  },

  AppData.prototype.getRestrictToStringExp = function () {
    expensesItemsElement = document.querySelectorAll('.expenses-items');
    expensesItemsElement.forEach( (item) => {
      let itemExpenses = item.querySelector('.expenses-title');
      itemExpenses.addEventListener('input', restrictToString);

      function restrictToString() {
        itemExpenses.value = itemExpenses.value.replace(/[^\А-Яа-я\s\.\,\:\;\!\?\...\-]/g, '');
      }
    });
  },

  AppData.prototype.getRestrictToIntegerInc = function () {
    incomeItemsElement = document.querySelectorAll('.income-items');
    incomeItemsElement.forEach( (item) => {
      let cashExpenses = item.querySelector('.income-amount');
      cashExpenses.addEventListener('input', restrictToInteger);
      function restrictToInteger() {
        cashExpenses.value = cashExpenses.value.replace(/[^\d.]/g, '');
      }
    });
  },

  AppData.prototype.getRestrictToStringInc = function () {
    incomeItemsElement = document.querySelectorAll('.income-items');
    incomeItemsElement.forEach( (item) => {
      let itemExpenses = item.querySelector('.income-title');
      itemExpenses.addEventListener('input', restrictToString);

      function restrictToString() {
        itemExpenses.value = itemExpenses.value.replace(/[^\А-Яа-я\s\.\,\:\;\!\?\...\-]/g, '');
      }
    });
  },

   AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItemsElement[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItemsElement[0].parentNode.insertBefore(cloneExpensesItem, expensesPluseElement);
    expensesItemsElement = document.querySelectorAll('.expenses-items');
    AppData.prototype.getRestrictToIntegerExp();
    AppData.prototype.getRestrictToStringExp();
    if (expensesItemsElement.length === 3) {
       expensesPluseElement.style.display = 'none';
    }

  },

   AppData.prototype.removeExpensesBlock = function () {
    expensesItemsElement = document.querySelectorAll('.expenses-items');
    for (let i = 1; i < expensesItemsElement.length; i++) {
      expensesItemsElement[i].remove();
    }
  },

   AppData.prototype.addIncomeBlock = function () {
    let cloneIncomeItem = incomeItemsElement[0].cloneNode(true);
    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
    incomeItemsElement[0].parentNode.insertBefore(cloneIncomeItem, incomePluseElement);
    incomeItemsElement = document.querySelectorAll('.income-items');
    AppData.prototype.getRestrictToIntegerInc();
    if (incomeItemsElement.length === 3) {
      incomePluseElement.style.display = 'none';
    }
  },

   AppData.prototype.removeIncomeBlock = function () {
  incomeItemsElement = document.querySelectorAll('.income-items');
  for (let i = 1; i < incomeItemsElement.length; i++) {
    incomeItemsElement[i].remove();
  }
  },

   AppData.prototype.getExpenses = function () {
    expensesItemsElement.forEach( (item) => {
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
      this.expenses[itemExpenses] = cashExpenses;
    });
  },

  AppData.prototype.getIncome = function () {
    incomeItemsElement.forEach( (item) => {
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
      this.income[itemIncome] = cashIncome;
    });
  },

   AppData.prototype.getAddExpenses = function () {
    let addExpenses = additionalExpItemElement.value.split(',');
    addExpenses.forEach( (item) => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  },

   AppData.prototype.getAddIncome = function () {
    additionalItemElement.forEach( (item) => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  },

   AppData.prototype.getCheckDeposit = function () {
    checkBoxElement.addEventListener('change', () => {
      if (checkBoxElement.checked) {
        depositBankElement.style.display = 'inline-block';
        depositAmountkElement.style.display = 'inline-block';
        this.deposit = true;
        depositBankElement.addEventListener('change', () => {
          let selectIndex = this.options[this.selectedIndex].value;
          if (selectIndex === 'other') {
            depositPercentElement.style.display = 'inline-block';
            depositPercentElement.removeAttribute('disabled', 'disabled');
            depositPercentElement.value = '';
          } else {
            depositPercentElement.style.display = 'none';
            depositPercentElement.value = selectIndex;
          }
        }); 
      } else {
        depositBankElement.style.display = 'none';
        depositAmountkElement.style.display = 'none';
        depositAmountkElement.value = '';
        this.deposit = false;
      }
    });
  },

   AppData.prototype.getExpensesMonth = function () {
    for (let item in this.expenses) {
      this.expensesMonth += +this.expenses[item];
    }
    return this.expensesMonth;
  },

   AppData.prototype.getIncomeMonth = function () {
    for (let item in this.income) {
      this.incomeMonth += +this.income[item];
    }
    return this.incomeMonth;
  },

   AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit / 12);
    this.budgetDay = Math.floor(this.budgetMonth / 30);
    return Math.floor(this.budgetMonth);
  },

   AppData.prototype.getTargetMonth = function () {
    return Math.ceil(targetAmountElement.value / AppData.prototype.getBudget());
  },

   AppData.prototype.getStatusIncome = function () {
    if (this.budgetDay >= 800) {
      return ('Высокий уровень дохода');
    } else if (this.budgetDay > 300 && this.budgetDay < 800) {
      return ('Средний уровень дохода');
    } else if (this.budgetDay > 0 && this.budgetDay <= 300) {
      return ('Низкий уровень дохода');
    } else if (this.budgetDay <= 0) {
      return ('Что то пошло не так');
    }
  },

   AppData.prototype.getInfoDeposit = function () {
    do {
      this.percentDeposit = depositPercentElement.value;
    } while (isNaN(this.percentDeposit) || this.percentDeposit == '' || this.percentDeposit == null);
    do {
      this.moneyDeposit = depositAmountkElement.value;
    } while (isNaN(this.moneyDeposit) || this.moneyDeposit == '' || this.moneyDeposit == null);
  },

   AppData.prototype.calcSaveMoney = function () {
    return this.budgetMonth * periodSelectElement.value;
  },
   AppData.prototype.changeSelect = function () {
    periodAmountElement.textContent = periodSelectElement.value;
    AppData.prototype.calcSaveMoney();
    if (salaryAmountElement.value) {
      AppData.prototype.showResult();
    }
  },

  AppData.prototype.getReset = function () {
    allInputTextElement = document.querySelectorAll('input[type=text]');
    AppData.prototype.removeIncomeBlock();
    AppData.prototype.removeExpensesBlock();
    allInputTextElement.forEach( (item) => {
      item.removeAttribute('disabled', 'disabled');
      item.value = item.defaultValue;
      periodAmountElement.textContent = periodSelectElement.value;
      periodSelectElement.value = '1';
      incomePluseElement.style.display = 'block';
      expensesPluseElement.style.display = 'block';
      startElement.style.display = 'block';
      cancelElement.style.display = 'none';
    });
  },


 salaryAmountElement.addEventListener('input', () => {
  if (salaryAmountElement.value !== '') {
    startElement.disabled = false;
  } else {
     startElement.disabled = true;
  }
 }),

const appData = new AppData();

appData.getRestrictToIntegerExp();
appData.getRestrictToIntegerInc();
appData.getRestrictToStringExp();
appData.getRestrictToStringInc();


appData.prototype.getCheckDeposit();

startElement.addEventListener('click', appData.prototype.start.bind(appData));
cancelElement.addEventListener('click', appData.prototype.getReset.bind(appData));
expensesPluseElement.addEventListener('click', appData.prototype.addExpensesBlock);
incomePluseElement.addEventListener('click', appData.prototype.addIncomeBlock);
periodSelectElement.addEventListener('change', appData.prototype.changeSelect);