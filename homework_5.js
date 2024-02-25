"use strict";

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAnGEs: "48.7584",
};

let updatedPriceData = {};

for (let key in priceData) {
  let lowerCaseKey = key.toLowerCase();
  let price = parseFloat(priceData[key]).toFixed(2);
  updatedPriceData[lowerCaseKey] = price;
}

console.log(updatedPriceData);

