"use strict";

const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];

let initials = userNames.map((name) => {
  // далі можно за допомогою split це розділити
  const words = name.split(" "); // отримаємо масив слів
  // ...
  console.log(words);

  const wordsFirstLetters = words.map((word) => word[0]);
  console.log(wordsFirstLetters);
  const letters = wordsFirstLetters.join(".");
  console.log(letters);
  console.log(typeof letters);
  let lettersArray = letters.split("-");
  console.log(lettersArray);
});

// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// console.log(lettersArray);

// 2 задача

// const currentMaxValue = 4589;
// let arr = ("" + currentMaxValue).split("");
// console.log(arr.map(Number));

// let reverseMaxValue = arr.slice().reverse().join("");
//

// // console.log(+reverseMaxValue.toString());
// reverseMaxValue = +reverseMaxValue.toString();
// // // тут ваш код...

// console.log(reverseMaxValue); // 9854
// console.log(typeof reverseMaxValue); // 'number'

// 3 задача

// const resultsArray = [1, 2, [3, [4]]];
// let productOfArray = resultsArray.flatMap(num => num);
// let result = productOfArray.reduce((acc, rec) => acc * rec);

// console.log(productOfArray); // 24
// console.log(result);
