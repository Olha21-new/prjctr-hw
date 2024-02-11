"use strict";

// Task 1
const currentMaxValue = 4589;
let reverseMaxValue;

let stringValue = currentMaxValue.toString();
let charArray = stringValue.split("");
let reversedArray = charArray.reverse();
let reversedString = reversedArray.join("");
reverseMaxValue = parseInt(reversedString);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// Task 2
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = 1;

let flatArray = resultsArray.flat(Infinity);

console.log(flatArray);

function calculateArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      productOfArray *= arr[i];
    }
  }
}

calculateArray(flatArray);
console.log(productOfArray);
