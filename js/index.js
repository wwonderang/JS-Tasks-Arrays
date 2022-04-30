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
function randomInteger(min, max) {
  let num = min + Math.random() * (max + 1- min);
  return Math.trunc(num);
}
alert(randomInteger(1, 3));

//Task 6
