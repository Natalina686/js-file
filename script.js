"use strict";

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// let initials;

// // тут ваш код ...
// for (let i = 0; i > userNames.length; i += 1);
// console.table(userNames);
// userNames.splice(1, 4);
// console.log(userNames);

// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// 2 задача


// const currentMaxValue = 4589;
// let arr = ("" + currentMaxValue).split("");
// console.log(arr.map(Number));

// let reverseMaxValue = arr.slice().reverse().join("");
// // +reverseMaxValue.join(""); чому це не працює?



// // // тут ваш код...

// console.log(reverseMaxValue); // 9854
// console.log(typeof reverseMaxValue); // 'number'



// 3 задача


const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray([ ...3, ...4]);



// тут ваш код...

console.log(productOfArray); // 24