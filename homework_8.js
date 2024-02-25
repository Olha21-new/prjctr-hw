//Task 1
// Вона буде знаходити суму усіх своїх аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math).
// Використайте оператор розширення

function addThemAll(...args) {
  let sum = [...args].reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
}

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20

// Task 2
// Напишіть функцію яка працює таким чином: multiply(a)(b)  // a * b

console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3)); // 12

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
