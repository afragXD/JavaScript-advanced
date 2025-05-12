# ES2019

## 1) `Array.prototype.flat()`

`Array.flat()` — возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно “подняты” на указанный уровень глубины (depth).

Вызов `flat()` без каких-либо аргументов сглаживает только первый уровень глубины. Можно указать необязательный аргумент глубины или вызвать функцию последовательно.

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2); // [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## 2) `Array.prototype.flatMap()`

`Array.flatMap()` — сначала применяет функцию к каждому элементу, а затем преобразует полученный результат в плоскую структуру и помещает в новый массив. Это идентично `map` функции, с последующим применением функции `flat` с параметром depth равным 1, но `flatMap` часто бывает полезным, так как работает немного более эффективно.

## 3) `String.prototype.trimEnd()` и `String.prototype.trimStart()`

`String.trimStart()` и `String.trimEnd()` — удаляют пробелы в начале и в конце строки соответственно.

## 4) Необязательная привязка `catch` — позволяет разработчикам использовать `try/catch` без параметра `error` внутри блока `catch`.

## 5) `Object.fromEntries()`

`Object.fromEntries()` — создает объект или преобразует пары ключ-значение в объект. Он принимает только итерируемый объект: `Object.fromEntries(iterable)`.
```js
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

## 6) `Symbol.prototype.description`

`Symbol.description` — read-only cвойство - строка, возвращающая необязательное описание объектов `Symbol`
```js
console.log(Symbol("desc").description);
// Expected output: "desc"

console.log(Symbol.iterator.description);
// Expected output: "Symbol.iterator"

console.log(Symbol.for("foo").description);
// Expected output: "foo"

console.log(`${Symbol("foo").description}bar`);
// Expected output: "foobar"
```

## 7) Изменения в `JSON.stringify()`
~~Тут мне лень писать~~