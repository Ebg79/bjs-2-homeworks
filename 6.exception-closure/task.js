// Задание 1

function parseCount(value) {
  const parsedValue = Number.parseFloat(value);
  
  if (Number.isNaN(parsedValue)) {
    throw new Error('Невалидное значение');
  }
  
  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}
const userInput1 = '10';
const userInput2 = 'abc';

const count1 = validateCount(userInput1);
if (count1 instanceof Error) {
  console.log('Ошибка:', count1.message);
} else {
  console.log('Парсинг успешен:', count1);
}

const count2 = validateCount(userInput2);
if (count2 instanceof Error) {
  console.log('Ошибка:', count2.message);
} else {
  console.log('Парсинг успешен:', count2);
}

// Задача 2

class Triangle {
  constructor(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  
  get perimeter() {
    return this.side1 + this.side2 + this.side3;
  }
  
  get area() {
    const s = this.perimeter / 2;
    const area = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    return +area.toFixed(3); // Конвертируем в число
  }
}

function getTriangle(side1, side2, side3) {
  try {
    const triangle = new Triangle(side1, side2, side3);
    return triangle;
  } catch (error) {
    return new TriangleWithNoExistence();
  }
}

class TriangleWithNoExistence {
  get perimeter() {
    return "Ошибка! Треугольник не существует";
  }
  
  get area() {
    return "Ошибка! Треугольник не существует";
  }
}
const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter); // Вывод: 12
console.log(triangle1.area); // Вывод: 6.000

const triangle2 = getTriangle(1, 2, 10);
console.log(triangle2.perimeter); // Вывод: Ошибка! Треугольник не существует
console.log(triangle2.area); // Вывод: Ошибка! Треугольник не существует﻿
