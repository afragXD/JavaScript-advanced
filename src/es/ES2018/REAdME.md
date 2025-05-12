# ES2018

## 1) `for-await-of`
Асинхронная итерация `for-await-of` — позволяет вызывать асинхронные функции, которые возвращают промис (или массив с кучей промисов) в цикле:

```js
const promises = [  
  new Promise(resolve => resolve(1)),  
  new Promise(resolve => resolve(2)),  
  new Promise(resolve => resolve(3))];

async function testFunc() {  
  for await (const obj of promises) {    
    console.log(obj);  
  }
}

testFunc(); // 1, 2, 3
```

## 2) `Promise.prototype.finally()`
`Promise.prototype.finally()` — позволяет запускать код, независимо от успешного или неуспешного выполнения промиса:
```js
fetch(myRequest)  
  .then(res => res.json())  
  .catch(error => console.error(error))  
  .finally(() => console.log("finished"));
```

## 3) Spread/Rest операторы для свойств объекта:
- spread — позволяет создавать новый объект путем объединения свойств объекта, переданного после оператора `...`:

```js
const arr = { first, second, ...others };
arr; //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
```

- rest — cинтаксис для rest оператора выглядит таким же как и для spread оператора, однако он используется для деструктуризации массивов и объектов. Фактически, rest оператор противоположен spread оператору: последний раскладывает массив на элементы, тогда как первый собирает много элементов в один.

```js
rest — cинтаксис для rest оператора выглядит таким же как и для spread оператора, однако он используется для деструктуризации массивов и объектов. Фактически, rest оператор противоположен spread оператору: последний раскладывает массив на элементы, тогда как первый собирает много элементов в один.
```

## 4) Улучшения регулярных выражений:

~~Добавим потом~~