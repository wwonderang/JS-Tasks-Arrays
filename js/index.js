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