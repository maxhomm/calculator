let money = 50000;
let income = 'Доход от фриланса: 20000 рублей';
let addExpenses = 'Интернет - 500, транспорт - 4000, коммунальные платежи - 6500, кредит - 2000';
let deposit = false;
let mission = 2000000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель: заработать ${mission} рублей`);

addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);

budgetDay = 1900;
console.log(budgetDay);