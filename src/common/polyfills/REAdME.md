# Полифилы

Полифил — это код, реализующий какую-то функциональность, которая не поддерживается в некоторых браузерах. Реализация собственного полифила обеспечивает единообразное поведение функциональности в разных браузерах. Добовляются через прототипы.

Полифил для `forEach`
```js
Array.prototype.myForEach = function (callback) {
  if (this === null || this === window) {
    throw new TypeError();
  }
  if (typeof callback !== "function") {
    throw new TypeError();
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const axaxa = ['a', 'b', 'c'];

axaxa.myForEach((value, index, array) => {
  console.log(value, index, array);
});
```

Полифил для `map`
```js
Array.prototype.myMap = function (callback) {
  if (this === null || this === window) {
    throw new TypeError();
  }
  if (typeof callback !== "function") {
    throw new TypeError();
  }
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res[i] = callback(this[i], i, this);
  }
  return res;
};

const axaxa = ['a', 'b', 'c'];

axaxa.myForEach((value, index, array) => {
  console.log(value, index, array);
});

const test = axaxa.myMap((value, index, array) => {
  return `${value} XD!`
});

console.log(test);
```
