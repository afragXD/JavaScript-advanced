# ES2020

## 1) `String.prototype.matchAll()`
`String.matchAll` — возвращает итератор, который в свою очередь возвращает все совпадающие группы одну за другой.

```js
const str = "abc";
const regexp = /[a-c]/g;
const iterator = str.matchAll(regexp);

for (result of iterator) {  
  console.log(result);
}
// ["a", index: 0, input: "abc", groups: undefined]
// ["b", index: 1, input: "abc", groups: undefined]
// ["c", index: 2, input: "abc", groups: undefined]
```

## 2) Динамический импорт

Динамический импорт — даёт возможность динамически импортировать файлы JS в виде модулей.
```js
let modulePath = prompt("Какой модуль загружать?");

import(modulePath)   
.then(obj => <объект модуля>)   
.catch(err => <ошибка загрузки, например если нет такого модуля>)
```

## 3) `BigInt`

`BigInt` — это специальный числовой тип, который предоставляет возможность работать с целыми числами произвольной длины.

Т.е. это способ представлять целые числа больше `pow(2, 53) - 1`, максимального числа, которое JavaScript может надежно представить с `Number` примитивом.

Чтобы создать значение типа `BigInt`, необходимо добавить `n` в конец числового литерала или вызвать функцию `BigInt`, которая создаст число типа `BigInt` из переданного аргумента. Аргументом может быть число, строка и др.
```js
const bigint = 1234567890123456789012345678901234567890n;  

const sameBigint = BigInt("1234567890123456789012345678901234567890");  

const bigintFromNumber = BigInt(10); // то же самое, что и 10n
```

## 4) `Promise.allSettled`

`Promise.allSettled` — возвращает промис, который исполняется когда все полученные промисы завершены (выполнены успешно или отклонены), содержащий массив результатов исполнения полученных промисов.

## 5) `globalThis`

В JavaScript всегда есть один большой объект контекста, который содержит всё. Традиционно в браузерах это `window`. Но если попытаться получить к нему доступ в Node, то будет ошибка. В Node нет глобального объекта `window` — вместо этого есть объект `global`. С другой стороны, в WebWorkers нет доступа к `window`, но вместо этого есть `self`.

`globalThis` всегда ссылается на глобальный объект, независимо от того, где мы выполняем свой код.

## 6) for-in mechanics — стандарт в каком порядке цикл `for (x in y)` должен выполняться.

## 7) Optional chaining — Оператор опциональной последовательности(`?.`)

Призван сделать код короче, при работе со вложенными объектами и проверкой на `undefined`.
```js
const car = {};
const color = car?.color;
const colorName = car?.color?.name;
```

## 8) Nullish coalescing — Оператор нулевого слияния (`??`)

Возвращает значение правого операнда когда значение левого операнда равно `null` или `undefined`, в противном случае будет возвращено значение левого операнда.
```js
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
```

## 9) Module namespace exports
```js
export * as utils from "./utils.mjs";

// эквивалентно следующему:
import * as utils from "./utils.mjs";
export { utils };
```

