
let money = prompt('Каков ваш месячный доход?');
console.log(money);

let income = 'Доход от фриланса: 20000 рублей';

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);


let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов');
console.log(expenses1);
let amount1 = prompt('Во сколько это обойдется?');
console.log(amount1);

let expenses2 = prompt('Введите обязательную статью расходов');
console.log(expenses2);
let amount2 = prompt('Во сколько это обойдется?');
console.log(amount2);

let budgetMonth = money - amount1 - amount2;
console.log(budgetMonth);

let mission = 2000000;
let period = Math.ceil(mission/budgetMonth);
console.log(period);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель: заработать ${mission} рублей`);

addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);

budgetDay = Math.floor(budgetMonth/30);
console.log(budgetDay);

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
    console.log('К сожалению, у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}
