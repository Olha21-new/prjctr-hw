"use strict";

// task 1
// Напишіть функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(9)); // 25
console.log(iterativeOddSumTo(10)); // 25

// task 2
// Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function recursiveOddSumTo(number) {
  if (number <= 0) {
    return 0;
  }
  if (number % 2 === 0) {
    number--;
  }
  return number + recursiveOddSumTo(number - 2);
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(9)); // 25
console.log(recursiveOddSumTo(10)); // 25
