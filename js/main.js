let money        = 12000,
    income       = 'фриланс',
    addExpenses  = 'аренда, поездки,  няня, садик',
    deposit      = true,
    mission      = 100000,
    period       = 12;

    
// console.log('Тип данных money: ', typeof money); 
// console.log('Тип данных income: ', typeof income); 
// console.log('Тип данных deposit: ', typeof deposit);
// console.log(`Количество символов в слове ${income} = `, income.length); 
// console.log(`В течении ${period} месяцев - цель заработать ${mission} долларов`); 

// addExpenses.toLowerCase();
// console.log( addExpenses.split(', ') );

// let budgetDay = 12000 / 30;
// console.log(`budgetDay = ${budgetDay}`);
// console.log(`Остаток от деления = ${budgetDay % 30}`);

// == продолжение урока == 
// let money       = prompt('Ваш месячный доход?'),
//     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

// console.log('addExpenses: ', addExpenses.split(','));

// let deposit = confirm('Есть ли у вас депозит в банке?\n Если "ДА" - нажмите "OK"\n Если "НЕТ" - "Отмена"');

// console.log('Тип данных money: ', typeof money);
// console.log('Тип данных deposit: ', typeof deposit);

let numberRequests = 2, expenses = [], howMoney = [];
for (let i = 0; i < numberRequests; i++) {
  expenses.push(prompt('Какие обязательные ежемесячные расходы у вас есть?','Напишите прописью')); 
  howMoney.push(prompt('Во сколько это обойдется?','Укажите сумму в цифрах'));  
}
console.log('Ежемесячные расходы : ', expenses);
console.log('Ежемесячные расходы в цифрах: ', howMoney);

let budgetMonth, result;
result = howMoney.reduce(function (sum, current) {
  return sum + current;
});

budgetMonth = money - result;
console.log('budgetMonth: ', budgetMonth);
  


