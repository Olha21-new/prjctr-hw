"use strict";

// task 1.1
let value = prompt();

if (isNaN(value)) {
  console.log("Помилка: введіть число");
} else {
  for (let i = 2; i < value; i += 2) {
    console.log(i);
  }
  let j = 0;
  while (j < value) {
    console.log(j);
    j += 2;
  }
}

// task 2
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// task 3
let string = "42559125";
let result = "";

for (let i = 0; i < string.length; i++) {
  let number = string[i];
  result += number < 5 ? "0" : "1";
}

console.log(result);
