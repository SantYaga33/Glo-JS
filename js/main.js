let money        = 12000,
    income       = 'фриланс',
    addExpenses  = 'аренда, поездки,  няня, садик',
    deposit      = true,
    mission      = 100000,
    period       = 12;

    
console.log('Тип данных money: ', typeof money); 
console.log('Тип данных income: ', typeof income); 
console.log('Тип данных deposit: ', typeof deposit);
console.log(`Количество символов в слове ${income} = `, income.length); 
console.log(`В течении ${period} месяцев - цель заработать ${mission} долларов`); 

addExpenses.toLowerCase();
console.log( addExpenses.split(', ') );

let budgetDay = 12000 / 30;
console.log(`budgetDay = ${budgetDay}`);
console.log(`Остаток от деления = ${budgetDay % 30}`);

