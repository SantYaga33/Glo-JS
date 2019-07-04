'use strict';
// let getExpensesMonth = function () {
//   for (let i = 0; i < numberRequests; i++) {
//     do {
//       expensesAnsw = prompt('Какие обязательные ежемесячные расходы у вас есть?');
//     } while (!isNaN(expensesAnsw) || expensesAnsw == '' || expensesAnsw == null); 
//     expenses.push(expensesAnsw);

//     do {
//       howMoneyAnsw = prompt('Во сколько это обойдется?', 'Укажите сумму в цифрах');
//     } while (isNaN(howMoneyAnsw) || howMoneyAnsw == '' || howMoneyAnsw == null); 
//     howMoney.push(+howMoneyAnsw);
//   }

//   sumCharges = howMoney.reduce(function (sum, current) {
//     return sum + current;
//   });
//   return sumCharges;
// };
// getExpensesMonth();

// == промежуточная проверка ==
// console.log('howMoney: ', howMoney);
// console.log('expenses: ', expenses);
// console.log('Сумма всех расходов в месяц: ', sumCharges);

// let getAccumulatedMonth = function () {
//   let resalt = money - sumCharges;
//   return resalt;
// };

// let accumulatedMonth = getAccumulatedMonth();
// console.log('accumulatedMonth: ', accumulatedMonth);


// let getTargetMonth = function () {
//   period = Math.ceil(mission / accumulatedMonth);
//   if (period <= 0) {
//     return console.log('Цель не будет достигнута');
//   }
//   return period;
// };

// budgetMonth = money - sumCharges;
// budgetDay = Math.floor(budgetMonth / 30);

// let getStatusIncome  = function() { 
//   if (budgetDay >= 800) {
//     return ('Высокий уровень дохода');
//   } else if (budgetDay > 300 && budgetDay < 800) {
//     return ('Средний уровень дохода');
//   } else if (budgetDay > 0 && budgetDay <= 300) {
//     return ('Низкий уровень дохода');
//   } else if (budgetDay <= 0 ) {
//     return ('Что то пошло не так');
//   }
// };

// console.log( 'Наш уровень дохода :', getStatusIncome() );




// == код выше временно закоментирован ( возможно понадобиться) ==
// == урок 6 ==
let money;

let start = function() {
  do  {
    money = prompt('Ваш месячный доход?', '55000');
  } while (isNaN(money) || money == '' || money == null); 
};
start();

let appData = {
    income: {},
    addIncome: ['фриланс'],
    expenses: {},
    addExpenses: ['няня', 'поездки', 'аренда'],
    deposit: false,
    mission: 100000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    numberRequests: 2,
    asking: function() {
      let howMoneyAnsw, expensesAnsw;
      for (let i = 0; i < appData.numberRequests; i++) {
        do {
          expensesAnsw = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Какой-то расход');
        } while (!isNaN(expensesAnsw) || expensesAnsw == '' || expensesAnsw == null);

        do {
          howMoneyAnsw = prompt('Во сколько это обойдется?', '5000');
        } while (isNaN(howMoneyAnsw) || howMoneyAnsw == '' || howMoneyAnsw == null);
       
        appData.expenses[expensesAnsw] = howMoneyAnsw;
      }
      return (' appData.expenses: ',  appData.expenses);
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
      } else if (appData.budgetDay  > 300 && appData.budgetDay  < 800) {
        return ('Средний уровень дохода');
      } else if (appData.budgetDay  > 0 && appData.budgetDay  <= 300) {
        return ('Низкий уровень дохода');
      } else if (appData.budgetDay  <= 0) {
        return ('Что то пошло не так');
      }
    }

};

appData.asking();

console.log(`Расходы за месяц составят: ${appData.getExpensesMonth()}`);
console.log(`Достигнем цели за ${appData.getTargetMonth()} месяцев(а)`);
console.log(`Наш уровень дохода: ${appData.getStatusIncome()}`);

let getAllDate = function () {
    for (let item in appData) {
      console.log( `Наша программа включает в себя данные: ${item} =${appData[item]}`);
    }
  };
getAllDate();