# ES2017

## 1) `Object.values()`
Метод `Object.values()` — это новая функция, которая похожа на `Object.keys()`, но возвращает все значения собственных свойств объекта, исключая любые значения в цепочке прототипов.

```js
const user = { name: 'We', role: 'admin' };

// До ES2017
console.log(Object.keys(user).map((key) => user[key]));

// После
console.log(Object.values(user));
```

## 2) `Object.entries()`
Метод `Object.entries()` похож на метод `Object.keys()`, но вместо того, чтобы возвращать лишь ключи, он возвращает, в виде массива, и ключи, и значения. Это упрощает выполнение операций, предусматривающих использование объектов в циклах, или операций преобразования обычных объектов в объекты типа `Map`.

```js
const user = { name: 'We', role: 'admin' };

console.log(Object.entries(user));
// [['name', 'We'], ['role', 'admin']]
```

## 3) Дополнение строк до заданной длины(`String.prototype.padStart()` и `String.prototype.padEnd()`)

У объектов типа `String` теперь есть два новых метода: `String.prototype.padStart()` и `String.prototype.padEnd()`. Они позволяют присоединять к строкам, в их начало или конец, некоторое количество символов для дополнения строк до заданной длины.
```js
'someString'.padStart(numberOfCharcters [,stringForPadding]); 
'5'.padStart(10) // '          5'
'5'.padStart(10, '=*') //'=*=*=*=*=5'
'5'.padEnd(10) // '5         '
'5'.padEnd(10, '=*') //'5=*=*=*=*='
```
Это оказывается удобным, если нужно выровнять текст, например, при выводе в консоль.

## 4) `Object.getOwnPropertyDescriptors()`
Этот метод возвращает все сведения (включая данные о геттерах и сеттерах) для всех свойств заданного объекта. Главная причина добавления этого метода заключается в том, чтобы позволить создавать мелкие копии объектов и клонировать объекты, создавая новые объекты, при этом копируя, помимо прочего, геттеры и сеттеры. Метод `Object.assign()` этого не умеет. Он позволяет выполнять мелкие копии объектов, но не работает с их геттерами и сеттерами.

Итак, до появления `Object.getOwnPropertyDescriptors()` копирование объектов выглядело так. Тут можно заметить, что при копировании объекта данные о геттерах и сеттерах теряются.

```js
const hero = {
  name: "We",
  _health: 100,
  get health() {
    return this._health;
  },
  set health(value) {
    this._health = value;
  }
};

console.log(Object.getOwnPropertyDescriptor(hero, 'health'));
const assassin = Object.assign({}, hero);
console.log(Object.getOwnPropertyDescriptor(assassin, 'health')); // нет get и set
```

Вот как выглядит выполнение той же операции, но уже с использованием `Object.getOwnPropertyDescriptors()`.

```js
const hero = {
  name: "We",
  _health: 100,
  get health() {
    return this._health;
  },
  set health(value) {
    this._health = value;
  }
};

console.log(Object.getOwnPropertyDescriptor(hero, 'health'));
const assassin = Object.assign({}, Object.getOwnPropertyDescriptors(hero));
console.log(Object.getOwnPropertyDescriptor(assassin, 'health'));
```

## 5) Завершающие запятые в параметрах функций
Это небольшое обновление, которое позволяет ставить запятую после последнего параметра функции. Зачем это нужно? Например, для того, чтобы помочь при работе с инструментами вроде `git blame`, избавляя разработчиков, вносящих изменения в код, от необходимости менять (без особой нужды в данном случае) строки, написанные тем, кто работал над этим кодом раньше.

## 6) Конструкция Async/Await
В ES2017 был добавлен специальный синтаксис для работы с промисами, который называется «`async`/`await`».

Ключевое слово `async` перед функцией гарантирует, что эта функция в любом случае вернёт промис.

Ключевое слово `await` заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится. Используется только внутри `async` функции.

Простой пример:

```js
//ES2015 Promise
function getAmount(userId) {
  getUser(userId)
  .then(get Bank Balance)
  .the(amount => {
    console.log(amount);
    });
}

//ES2017
async function getAmount 2(userId) {
  const user = await getUser(userId);
  const amount = await getBankBalance(user);
  console.log(amount);
}
```

## 7) Разделяемая память (shared memory) и атомарные операции (atomics) — это функционал, который является основным улучшением движков JS.

Основная идея состоит в том, чтобы привнести в JavaScript какую-то многопоточность, для того чтоб разработчики JS могли писать высокопроизводительные параллельные программы и управлять памятью самостоятельно, а не позволять это делать движку JS.

Для этого задействуется новый тип глобального объекта `SharedArrayBuffer`, который хранит данные в общем пространстве памяти. Эти данные могут быть разделены между основным потоком JS и потоками web-workers.

WebWorkers предлагают протокол обмена сообщениями через события. Начиная с ES2017, мы можем создавать массив разделяемой памяти между web-workers и их создателями, используя `SharedArrayBuffer`.

Поскольку неизвестно, сколько времени занимает запись в разделяемую часть памяти, мы используется **Atomics** — способ удостоверится, что при чтении значения, любой вид операции записи завершен.