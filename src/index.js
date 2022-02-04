// +++++++++++++++++++++++Часть 1+++++++++++++++++++++++
console.log ( 'Модуль 1.2' ) ;

// ====== isNaN против Number.isNaN ======
// === isNaN ===
// console.log(isNaN('a')); // истинный
// console.log(isNaN('b')); // истинный
// console.log(isNaN('bsdkfjgh')); // истинный
// console.log(isNaN(undefined)); // истинный
// console.log(isNaN(NaN)); // истинный

// console.log(isNaN(false)); // 0 - ложь
// console.log(isNaN(true)); // 1 - ложь
// console.log(isNaN('123')); // 123 - ложь
// console.log(isNaN(123)); // 123 - ложь

// === Число.isNaN ===
// console.log(Number.isNaN(NaN));

// console.log(Number.isNaN('a')); // ложный
// console.log(Number.isNaN('b')); // ложный
// console.log(Number.isNaN('bsdkfjgh')); // ложный
// console.log(Number.isNaN(undefined)); // ложный
// console.log(Number.isNaN(false)); // 0 - ложь
// console.log(Number.isNaN(true)); // 1 - ложь
// console.log(Number.isNaN('123')); // 123 - ложь
// console.log(Number.isNaN(123)); // 123 - ложь

// ========== break====================

// for (let i = 1; i <= 10; i += 1) {
//     if(i % 2 === 0){
//     continue;
// }
// console.log(i);
// }

// for (let i = 1; i <= 10; i += 1) {
//     if(i >= 6){
//     break;
// }
// console.log(i);
// }


// // === real life case ===

// const numbers = [1,2,3,4,56,78, 8, 90, 0, 89, 78, 67];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] === 8) {
//         console.log('hurray!');
//         break;
//     }
// }


// Пример 1 - Ввод пользователя и ветвления
// укажите случай if..else и подсказку, напишите код, который будет спрашивать: "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, то показывай алерт со строкой "Верно!", в случае - "Не знаете? ECMAScript!"

// const userInput = prompt("Какое официальное название JavaScript?")
// let answer;

// if (userInput !== null && userInput.toLowerCase() === 'ecmascript') {
//     answer = 'Верно!';
// }
// else {
// answer = 'Не знаете? ECMAScript!'
// }

// if (userInput && userInput.toLowerCase() === 'ecmascript') {
//     answer = 'Верно!';
// }
// else {
// answer = 'Не знаете? ECMAScript!'
// }

// if (userInput?.toLowerCase() === 'ecmascript') {
//     answer = 'Верно!';
// }
// else {
// answer = 'Не знаете? ECMAScript!'
// }

// const userInput = prompt("Какое официальное название JavaScript?")
// let answer = userInput?.toLowerCase() === 'ecmascript' ? 'Верно!' : 'Не знаете? ECMAScript!';
// console.log(answer)

// ===================================
// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера
// в виде строки формата "14 ч. 26 мин.".
// Если значение переменной minutes равно 0,
// то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 26;
// // let timestring;
// let timestring = minutes > 0 ? `${hours}ч. ${minutes}мин.` : `${hours}ч.`;

// // if (minutes > 0) {
// //   timestring = `${hours}ч. ${minutes}мин.`;
// // } else {
// //   timestring = `${hours}ч.`;
// // }
// console.log(timestring);

// ===================================
// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку
// "Это положительное число",
// если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
// Если передали отрицательное число,
// в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число');
// const userInputNumber = Number(userInput);

// if (Number.isNaN(userInputNumber) || !userInput) {
//   console.log('это не число!');
// } else if (userInput > 0) {
//   console.log('Это положительное число');
// } else if (userInput < 0) {
// } else {
//   console.log('Это ноль');
// }

// ===================================
// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.

// Если оба значения больше 100,
// то выведи в консоль максимальное из них.

// В противном случае в консоли должна быть
// сумма значения b и числа 512.

// const a = 180;
// const b = 180;


// if (a > 100 && b > 100) {
//   // if (a > b) {
//   //   console.log(a);
//   // } else {
//   //   console.log(b);
//   // }
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// ===================================
// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет
// заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ.
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about';

// // if (link[link.length - 1] !== '/') {
// if (!link.endsWith('/')) {
//   link += '/';
// }


// console.log(link);

// ===================== arguments ======
// function max() {
//   const numbers = Array.from(arguments);
//   let res = numbers[0];

//   for (let number of numbers) {
//     if (number > res) {
//       res = number;
//     }
//   }

//   return res;
// }

// console.log(max(2, 1, 5, 3, 8, 5, 4)); // 8
// console.log(max(-2, -1, -5, -3, -8, -5, -4)); // -1

// ======== home work question =======
// function findLongestWord(string) {
//   let words = string.split(' '); // ['jdfghds', 'iuy', 'sdfsfdafafasfa']
//   let biggest = '';

//   // for (let i = 0; i < words.length; i += 1) {
//   //   if (biggest.length < words[i].length) {
//   //     biggest = words[i];
//   //   }
//   // }

//   for (let word of words) {
//     if (word.length > biggest.length) {
//       biggest = word;
//     }
//   }

//   return biggest;
// }

// console.log(findLongestWord('jdfghds iuy sdfsfdafafasfa rtr'));


// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];


// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";


// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax", "Polpy",  "Yuriy"];
// const clientNameToFind = "Vasia";
// let message;

// for (const client of clients) {
//     if (client === clientNameToFind) {
       
//         message = `Клиент с именем ${clientNameToFind} есть в базе!`;
//         break;
//     }
//     message=`Клиента с именем ${clientNameToFind} в базе нет.`

// }
// console.log(message)

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// const name = "Mango";
// const nywname = name.split('');
// console.log(nywname); // ["M", "a", "n", "g", "o"]
// console.log(nywname.join('  '));
// // const message = "JavaScript это интересно";
// // console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "strawberry";
// Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }
// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]

