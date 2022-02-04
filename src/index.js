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

// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.

// let link = 'https://somesite.com/about';

// if (link[link.length - 1] !== '/' && link.includes('my-site') ) {
//     link = link + '/';
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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ==== ?? ====
// console.log(1 || 2); // 1
// console.log(1 ?? 2); // 1

// console.log(undefined || 2); // 2
// console.log(null || 2); // 2
// console.log(undefined ?? 4); // 4
// console.log(null ?? 4); // 4

// console.log(0 || 3); // 3
// console.log(0 ?? 3); // 0

// ==== slice бегущяя строка ====
// const text =
//   'Метод slice() возвращает новый массив, содержащий копию части исходного массива ';

// const title = document.querySelector('h3');

// for (let i = 0; i < text.length; i += 1) {
//   const str = text.slice(i);
//     // console.log(str);
//   setTimeout(() => {
//     title.textContent = str;
//   }, i * 100);
// }

// ==== includes ====
// const logins = ['admin', 'vasya', 'qwerty'];
// const userInput = prompt('enter login');

// if (logins.includes(userInput)) {
//   console.log('welcome!');
// } else {
//   console.log('try again');
// }
// // ----------------------------
// console.log('admin vasya qwerty'.includes('admin'));
// console.log('admin vasya qwerty'.includes('kjhgj'));

// === Number, String ====
// Напиши скрипт который переведёт значение totalMinutes (количество минут)
// в строку в формате часов и минут HH:MM.

// Скажите пожалуйста, как читается это выражение
// const doubleDigitHours = String(hours).padStart(2, 0);  именно  String()

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// console.log(Number('1234'));
// console.log(String(1234).padStart(8, '*'));

// ==== Array.from ====
// let obj = { 0: 1, 1: 2, 2: 3 };

// console.log([1, 2, 3]);
// console.log(obj);

// console.log(Array.from(obj));
// console.log(Object.values(obj));

// ==== debugging ====
// const logins = ['admin', 'vasya', 'qwerty'];
// const userInput = prompt('enter login');

// if (logins.includes(userInput.toLowerCase())) {
//   console.log('welcome!');
// } else {
//   console.log('try again');
// }

// =======
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://my-site.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }

// link += link.includes('my-site') && !link.endsWith('/') ? '/' : '';
// console.log(link);

// ======
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 17;

// if (hours < 17) {
//     message = 'Pending';
// }
// else if (hours >= 17 && hours <= 24) {
//     message = 'Expires';
// }
// else {
//     message = 'Overdue';
//     }
        
// console.log(message);

// // const hours = 200;

// if (hours < 17) {

//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// =====
// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"


// const daysUntilDeadline = 2;

// if (daysUntilDeadline === 0) {
//     message = 'Сегодня';
// }
// else if (daysUntilDeadline === 1) {
//     message = 'Завтра';
// }
// else if (daysUntilDeadline === 2) {
//     message = 'Послезавтра';
// }
// else  {
//     message = 'Дата в будущем';
// }
// console.log(message);
// const daysUntilDeadline = 0;
// // Пиши код ниже этой строки

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня ночью спать не придётся');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// ====
// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 3;

// switch (daysUntilDeadline) {
//     case 0:
//     message = 'Сегодня';
//     break;
    
//     case 1:
//     message = 'Завтра';
//     break;

//     case 2:
//     message = 'Послезавтра';
//     break;
    
//     default:
//     message = 'Дата в будущем';
// }
// console.log(message);

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня ночью спать не придётся');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Послезавтра');
//     break;
//   default:
//     console.log('Дата в будущем');
// }

// ======
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max,
// но только если число кратное 5.

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1){
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// =====
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"


// const login = prompt('enter login');

// if (login === 'Админ') {
//     const password = prompt('enter password');
//     if (password === 'Я админ') {
//         console.log('Здравствуйте!');
//     }
//     else {
//         console.log('Неверный пароль');
//     }
// }
// else {
//     if (login === null || login === '') {
//         console.log('Отменено');
//     }
//     else {
//         console.log('Я вас не знаю');
//     }
// }

// const login = prompt('enter login');

// if (login === 'Админ') {
//   const password = prompt('enter password');

//   if (password === 'Я админ') {
//     console.log('Здравствуйте');
//   } else {
//     console.log('Неверный пароль');
//   }
// } else {
//   if (login === null || login === '') {
//     console.log('Отменено');
//   } else {
//     console.log('Я вас не знаю');
//   }
// }

// ===== regular expressions =====
// https://devdocs.io/javascript/global_objects/regexp/exec
// const reg = /[aeiou]+/gi;
// const str = 'jdooohfg 097 sdfadseq 34 sduufs 345';

// console.log(reg.exec(str));

// ===== game ======
// 1 --> 100

// let count = 0;
// let userInput;
// const x = ~~(Math.random() * 100) + 1;
// // console.log(x);

// do {
//   count++;
//   userInput = Number(prompt('enter your number'));
//   console.log(userInput);

//   if (x > userInput) {
//     console.log('x >', userInput);
//   } else if (x < userInput) {
//     console.log('x <', userInput);
//   } else {
//     console.log('Hurray!!!');
//   }
// } while (x !== userInput);

// console.log('count:', count);

