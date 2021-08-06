'use strict'

let money = prompt('Каков ваш месячный доход?');

let income = 'Доход от фриланса: 20000 рублей';

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц: ' + budgetMonth);

let mission = 2000000;
let period = Math.ceil(mission/budgetMonth);

console.log(`Цель будет достигнута за ${period} месяцев`);
console.log(`Цель: заработать ${mission} рублей`);

addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);

budgetDay = Math.floor(budgetMonth/30);
console.log('Бюджет на день: ' + budgetDay);

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
    console.log('К сожалению, у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}
