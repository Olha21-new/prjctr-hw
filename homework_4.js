"use strict";

// Task 1 updated
const currentMaxValue = 4589;
let reverseMaxValue;

let reverseMaxValue = currentMaxValue.toString().split("").reverse().join("");

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// Task 2 updated
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = 1;

let flatArray = resultsArray.flat(Infinity);

console.log(flatArray);

for (let value of flatArray) {
  productOfArray *= value;
}

console.log(productOfArray);
