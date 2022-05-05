//Task 1
/*let a = +prompt('Введите первое число', 0);
let b = +prompt('Введите второе число', 0);
let sum = a + b;
alert(sum);*/

//Task 2
/*alert( 6.35.toFixed(1) );
alert((6.35 * 10).toFixed(20));
alert(Math.round(6.35*10)/10);*/

//Task 3
/*function readNumber() {
  let num;

  do {
    num = +prompt('Введите значение', 0);
  } while (!isFinite(num));
  if (num === null || num === '') {
    return null;

  } return num;
}

alert(`Число: ${readNumber()}`);*/

//Task 4
/*function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );*/

//Task 5
/*function randomInteger(min, max) {
  let num = min + Math.random() * (max + 1- min);
  return Math.trunc(num);
}
alert(randomInteger(1, 3));*/

//Task 6
/*let str = 'Ослик Иа-Иа посмотрел на виадук';
let target = 'Иа';
let pos = -1;

while((pos = str.indexOf(target, pos + 1)) != -1) {
  alert(pos);
}*/

//Task 7
/*function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst('вася'));*/

//Task 8
/*function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));*/

//Task 9
/*function truncate(str, maxlength) {
  if (str.length == maxlength) {
    return str;
  } else if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '...';
  }
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));*/

//Task 10
/*function extractCurrencyValue(str) {
  return str.slice(1);
}
alert( extractCurrencyValue('$120') );*/

//Task 11
/*let styles = ['Джаз', 'Блюз',];
styles.push('Рок-н-ролл');
styles[Math.floor(styles.length - 1) / 2] == 'Классика';
alert(styles.shift());
styles.unshift('Реп', 'Регги');
console.log(styles);*/

//Task 12
/*function sumInput() {
  let arr = [];
  while(true) {
    let value = prompt('Введите значение', 0);
    if (isNaN(value) || value === null || value === "") break;
  
     arr.push(+value);
  }
  let sum = 0;
  for (let nums of arr) {
    sum += nums;
  }
  return sum;
}

alert( sumInput() );*/

//Task 13
/*function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let startedNum = 0;
    for (let j = i; j < arr.length; j++) {
      startedNum = arr[j];
      maxSum = Math.max(maxSum, startedNum);
    }
  }
  return maxSum;
}
alert(getMaxSubSum([1, -2, 3, -9, 11]));*/

//Task 14
/*function camelize(str) {
  let arr = str.split('-');
  let arrTwo = arr.map(function(word, index) {
    if (index === 0) 
    { return word; 
    } else {
    
      return word[0].toUpperCase() + word.slice(1);
  }
  });
  
  return arrTwo.join('');
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));*/

//Task 15
/*function filterRange(arr, a, b) {
  return arr.filter(item => (item >= a && item <= b));
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered );

alert( arr );*/

//Task 16
/*function filterRangeInPlace(arr, a, b) {
  return arr.slice(a, b);
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]*/

//Task 17
/*let arr = [5, 2, 1, -10, 8];
  arr.sort(function(a, b) {
    return a - b;
  });
  alert(arr.reverse());*/

// Task 18
/*let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
  let arrTwo = arr.concat();
  return arrTwo.sort();
}
let sorted = copySorted(arr);

alert( sorted );
alert( arr );*/

//Task 19
/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
alert(names);*/

//Task 20
/*let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

alert( usersMapped[0].id );
alert( usersMapped[0].fullName );*/

//Task 21
/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name);*/

//Task 22
/*let arr = [1, 2, 3];

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);
alert(arr);*/

//Task 23
/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

alert( getAverageAge(arr) );*/

//Task 24
/*function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );*/
