

// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// Код
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }



// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды.Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// // Код
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// const values = Object.values(salaries)
// let total = 0;
// for (const value of values) {
//     total += value;

// }
// console.log(total);

// Example 3 - Массив объектов
// Напишите ф - цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// Код
// const stones = [
//     { name: 'Изумруд', price: 1300, quantity: 4 },
//     { name: 'Бриллиант', price: 2700, quantity: 3 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity
//         }
//     }
// }
// console.log(calcTotalPrice(stones, 'Изумруд'))
// console.log(calcTotalPrice(stones, 'Бриллиант'))
// console.log(calcTotalPrice(stones, 'Сапфир'))
// console.log(calcTotalPrice(stones, 'Щебень'))

// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка.Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// //  * Каждая транзакция это объект со свойствами: id, type и amount

// const account = {

//     // Текущий баланс счета
//     balance: 0,

//     // История транзакций
//     transactions: [],

//     // Метод создает и возвращает объект транзакции.
//     // Принимает сумму и тип транзакции.
//     createTransaction(amount, type) {
//         const transaction = {
//             id: this.transactions.length,
//             amount,
//             type,
//         }
//         return transaction;
//     },

//     //Метод отвечающий за добавление суммы к балансу.
//     //Принимает сумму танзакции.
//     //Вызывает createTransaction для создания объекта транзакции
//     //после чего добавляет его в историю транзакций
//     deposit(amount) {
//         this.balance += amount;
//         this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
//     },

//     //Метод отвечающий за снятие суммы с баланса.
//     //Принимает сумму танзакции.
//     //Вызывает createTransaction для создания объекта транзакции
//     //после чего добавляет его в историю транзакций.
//     //Если amount больше чем текущий баланс, выводи сообщение
//     //о том, что снятие такой суммы не возможно, недостаточно средств.
//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log('снятие такой суммы не возможно, недостаточно средств');
//             return;
//         }
//         this.balance -= amount;
//         this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
//     },

//     // Метод возвращает текущий баланс
//     getBalance() {
//         return this.balance;
//     },

//     //Метод ищет и возвращает объект транзации по id
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction;
//             }
//         }
//     },

//     //Метод возвращает количество средств
//     //определенного типа транзакции из всей истории транзакций
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount;
//             }
//         }
//         return sum;
//     },
// };
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// // console.log(account);

// account.withdraw(2000);
// account.withdraw(500);
// console.log(account);

// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));