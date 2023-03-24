"use strict";

// const userNames = [
//   "Петрик Ольга Іванівна",
//   "Гнатюк Петро Антонович",
//   "Рудко Андрій Опанасович",
// ];

// let initials = userNames.map((name) => {
//   const words = name.split(" ");

//   // console.log(words);

//   const wordsFirstLetters = words.map((word) => word[0]);

//   // console.log(wordsFirstLetters);
//   const letters = wordsFirstLetters.join(".");
//   return letters;
// });

// console.log(initials.sort()); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// 2 задача

// const currentMaxValue = 4589;

// let reverseMaxValue = +currentMaxValue.toString().split("").reverse().join("");

// console.log(reverseMaxValue); // 9854
// console.log(typeof reverseMaxValue); // 'number'

// 3 задача

// const resultsArray = [1, 2, [3, [4]]];
// let productOfArray = resultsArray.flat(2);
// console.log(productOfArray);
// let productOfArray = resultsArray.flatMap((num) => num);
// let result = productOfArray.reduce((acc, rec) => acc * rec);

// console.log(productOfArray); // 24
// console.log(result);

// продвинута робота з функціями

// перша задача
// function getDifferences(start, end) {
//   const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

//   const firstDate = Date.parse(start);
//   const secondDate = Date.parse(end);

//   console.log(firstDate);
//   console.log(secondDate);
//   const difference = secondDate - firstDate;
//   console.log("result", difference);
//   if (firstDate > secondDate) {
//     return Math.abs(difference);
//   }
//   return difference / DAY_IN_MILLISECONDS;
// }

// console.log(getDifferences("2003-03-10", "2023-03-23")); // 3
// console.log(getDifferences("2002-03-01", "2023-03-13")); // 12
// console.log(getDifferences("2026-03-17", "2023-03-13")); // 12

// second task

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};
// Чому не працює?
// const result = Object.entries(priceData).map(([key, value]) => [
//   (key = key.toLowerCase),
//   (value = value.toPrecision(2)),
// ]);
// const resultObject = Object.fromEntries(result);
// console.log(resultObject);

function optimizer(data) {
  const keys = Object.keys(data);
  for (const key of keys) {
    console.log(keys);
    if (typeof key === "string") {
      return key.toLowerCase();
    }
    return keys;
  }
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
