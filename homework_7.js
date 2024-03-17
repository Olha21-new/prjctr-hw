"use strict";

// // task 1

const resultsArray = [1, 2, [3, [4]]];

const flattenedArray = resultsArray.flat(Infinity);

const productOfArray = flattenedArray.reduce((a, b) => a * b, 1);

console.log(productOfArray); // 24

// task 2

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};
const formattedData = {};

function optimizer(data) {
  Object.keys(data).forEach((key) => {
    const value = parseFloat(data[key]);
    const formattedValue = value.toFixed(2).padEnd(5, "0");
    formattedData[key.toLowerCase()] = formattedValue;
  });
  return formattedData;
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// task 3
const userNames = [
  "Петро",
  "Емма",
  "Юстин",
  "Ілля",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
];

// const filteredNames = userNames.filter((name) => {
//   const firstLetter = name.charAt(0);
//   return ["А", "Е", "Є", "И", "І", "Ї", "О", "У", "Ю", "Я"].includes(
//     firstLetter
//   );
// });

const filteredNames = userNames.filter((name) => {
  const firstLetter = name.charAt(0);
  return ["А", "Е", "Є", "И", "І", "Ї", "О", "У", "Ю", "Я"].some((vowel) =>
    name.startsWith(vowel)
  );
});

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// Task 4
const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];

let initials = userNames.map((fullName) => {
  const parts = fullName.split(" ");
  const initials = parts.map((part) => part[0]).join("");
  return initials;
});

initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
