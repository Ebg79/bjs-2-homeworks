//1 задание

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  
  const avg = (sum / arr.length).toFixed(2);
  
  return { min, max, avg: Number(avg) };
}

console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }


// 2 задание

// Функция для суммирования элементов массива
function summElementsWorker(...arr) {
  // Проверка наличия элементов
  if (arr.length === 0) {
    return 0;
  }
  // Суммирование элементов
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
// Функция для вычисления разницы максимального и минимального элементов массива
function differenceMaxMinWorker(...arr) {
  // Проверка наличия элементов
  if (arr.length === 0) {
    return 0;
  }
  // Нахождение максимального и минимального значения
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}
// Функция для вычисления разницы суммы четных и нечетных элементов массива
function differenceEvenOddWorker(...arr) {
  // Проверка наличия элементов
  if (arr.length === 0) {
    return 0;
  }
  // Вычисление суммы четных и нечетных элементов
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach((num) => {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  });

  return evenSum - oddSum;
}
// Функция для вычисления среднего арифметического четных элементов массива
function averageEvenElementsWorker(...arr) {
  // Проверка наличия элементов
  if (arr.length === 0) {
    return 0;
  }
  // Фильтрация четных элементов
  const evenValues = arr.filter((num) => num % 2 === 0);
  // Проверка наличия четных элементов
  if (evenValues.length === 0) {
    return 0;
  }
  // Вычисление среднего арифметического
  const sum = evenValues.reduce((acc, curr) => acc + curr, 0);
  const average = sum / evenValues.length;
  return average;
}
// Примеры использования функций
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

// 3 задание

// Функция, выполняющая заданную насадку на каждом подмассиве массива arr и возвращающая максимальное значение
function makeWork(arr, worker) {
  const results = arr.map(subArray => worker(...subArray)); // изменение
  return Math.max(...results);
}

// Пример использования
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // 61
console.log(makeWork(arr, differenceMaxMinWorker)); // 87
console.log(makeWork(arr, differenceEvenOddWorker)); // 66
console.log(makeWork(arr, averageEvenElementsWorker)); // 25
