"use strict";

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// let initials = userNames.map(name => {
//   // далі можно за допомогою split це розділити
//   const words = name.split(" "); // отримаємо масив слів
//   // ...
// for (const word of words)
//    console.log(word[0]);


// }
// );

//   const wordsFirstLetters = words.map((word) => word[0]);

//   // console.log(wordsFirstLetters);
//   const letters = wordsFirstLetters.join(".");
//   return letters;
// });




// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]






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

function getDifferences(
  start = new Date(),
  end = new Date(),
  period = "hours"
) {
  const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;
  const MIN_IN_MILLISECONDS = 60 * 1000;
  const SEC_IN_MILLISECONDS = 1000;
  const startDate = Date.parse(start);
  const endDate = Date.parse(end);
  let resultMillisec = Math.abs(startDate - endDate);
  let result;
  switch (period) {
    case "seconds":
      result = resultMillisec / SEC_IN_MILLISECONDS;
      break;
    case "minuts":
      result = resultMillisec / MIN_IN_MILLISECONDS;
      break;
    case "hours":
      result = resultMillisec / HOUR_IN_MILLISECONDS;
      break;
    case "days":
      result = resultMillisec / DAY_IN_MILLISECONDS;
      break;
  }
  console.log(`${result} ${period}`);
  return `${result} ${period}`;
}
getDifferences("2002-03-01", "2023-03-13", "seconds");
getDifferences("2003-03-10", "2023-03-23", "hours");
getDifferences("2026-03-17", "2023-03-13", "days");



// second task

// const priceData = {
//   Apples: "23.4",
//   BANANAS: "48",
//   oRAngGEs: "48.7584",
// };
// // Чому не працює? Якщо без toFixed працює, як це правильно написати?

// const result = Object.entries(priceData).map(([key, value]) => [
//   (key = key.toLowerCase()),
  
//  (value = +value.toString().toFixed(2)),
 
// ]);
// console.log(result);

// const resultObject = Object.fromEntries(result);

// console.log(resultObject);

// console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}




// Задача про рекурсію та ітераціюНапишіть:
// - функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
// Приклад:
// function recursiveOddSumTo(number) { 
// // let total = 0;
// // if (number % 2 !== 0) return total += number;
  
// }
// console.log(recursiveOddSumTo(1)) // 1
// console.log(recursiveOddSumTo(10)) // 25



// - функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.
// Приклад:

// тут ваш код};



function iterativeOddSumTo(number) {
let result = 0;
for (let i = 0; i < number; i++) {
  result += number;
}
  return result;
  
  };

// сonsole.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25