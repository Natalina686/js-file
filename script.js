"use strict";

const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];

let initials = userNames.map((name) => {
  const words = name.split(" ");

  // console.log(words);

  const wordsFirstLetters = words.map((word) => word[0]);

  // console.log(wordsFirstLetters);
  const letters = wordsFirstLetters.join(".");
  return letters;
});

console.log(initials.sort()); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// 2 задача

const currentMaxValue = 4589;

let reverseMaxValue = +currentMaxValue.toString().split("").reverse().join("");

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// 3 задача

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(2);
// console.log(productOfArray);
// let productOfArray = resultsArray.flatMap((num) => num);
let result = productOfArray.reduce((acc, rec) => acc * rec);

console.log(productOfArray); // 24
console.log(result);
