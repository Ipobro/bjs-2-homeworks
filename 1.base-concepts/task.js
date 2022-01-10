"use strict";

function solveEquation(a, b, c) {
  if (a==0) return;
  let d = Math.pow(b,2) - 4*a*c;
  let x1,x2;
  if (d<0) {
    return [];
  } else if (d==0) {
    x1 = -b/(2*a);
    return [x1];
  } else if (d>0) {
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    return [x1,x2];
  }
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  
  let s = amount - contribution;
  let n = date =+ Math.trunc(((new Date(new Date().setFullYear(new Date().getFullYear() + 1)) - new Date(new Date().setFullYear(new Date().getFullYear())))) / 2592000000);
  let p = percent / 100 / 12;
  let annuityPayment = s * (p + (p / (Math.pow(1 + p, n) - 1)));
  let finishSumm = annuityPayment * n;

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  
  console.log(finishSumm.toFixed(2));
};


