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
    periodSelectElement       = document.querySelector('.period-select');



    // Я мог бы использовать  доступ через методы .getElementsByTagName .getElementsByClassName .getElementById,
    // но насколько я понимаю новымы методами .querySelector(All) манипуляция элементами проще 


    console.log(startElement, incomePluseElement, expensesPluseElement, checkBoxElement, additionalItemElement, budgetDayElement, budgetMonthElement, expensesMonthElement );
    console.log(accumulatedMonthElement, additionalIncomeElement, additionalExpensesElement, incomePeriodElement, targetMonthElement, salaryAmountElement);
    console.log(incomeTitleElement, incomeAmountElement, expensesTitleElement, expensesAmountElement, targetAmountElement, periodSelectElement, additionalExpItemElement);