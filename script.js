"use strict";

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.map((name) => {
return name + ".";
});


// тут ваш код ...


console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
// s="text";
// x=s.split(''); //x=array("t","e","x","t");

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
