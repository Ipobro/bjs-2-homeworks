"use strict";

function solveEquation(a, b, c) {
  if (a==0) return;
  let d = Math.pow(b,2) - 4*ac;
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
  };

  describe('Домашнее задание к занятию 1. «Основные понятия»', () => {
    describe('Задача №1', () => {
      it('должна возвращать 2 корня уравнения', () => {
        expect(solveEquation(1, 5, 4)).toEqual([-1, -4]);
      });
    
      it('должна возвращать 1 корень уравнения', () => {
        expect(solveEquation(1, 2, 1)).toEqual([-1]);
      });
  
      it('должна вернуть пустой массив', () => {
        expect(solveEquation(1, 2, 10)).toEqual([]);
      });
    });
  });
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
