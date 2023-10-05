//Задача 1

"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  
  // Вычисляем дискриминант
  let discriminant = b * b - 4 * a * c;
  
  // Если дискриминант меньше 0, нет корней
  if (discriminant < 0) {
    return arr;
  }
  
  // Если дискриминант равен 0, есть один корень
  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  }
  
  // Если дискриминант больше 0, есть два корня
  let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  arr.push(root1, root2);
  
  return arr;
}
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 2, 1)); // [-1]
console.log(solveEquation(1, -5, 6)); // [3, 2]

//Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Проверяем аргументы на тип
  if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
    return false;
  }
  
  // Преобразуем процентную ставку в десятичную форму
  var monthlyPercent = percent / 100 / 12;
  
  // Рассчитываем тело кредита
  var creditBody = amount - contribution;
  
  // Рассчитываем ежемесячный платеж
  var monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
  
  // Рассчитываем общую сумму платежей
  var totalPayment = monthlyPayment * countMonths;
  
  // Округляем результат до двух знаков после запятой
  totalPayment = Math.round(totalPayment * 100) / 100;
  
  return totalPayment;
}
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52
