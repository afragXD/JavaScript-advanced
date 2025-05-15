# Атрибуты и свойства элементов

## 1. Атрибуты и свойства: различия

- Атрибуты — это значения, заданные в HTML-разметке (например, `<div id="myId">` имеет атрибут `id="myId"`).
- Свойства — это значения объекта DOM, соответствующие элементу. Они доступны через JavaScript (например, `element.id`).
- Атрибуты и свойства часто синхронизированы, но не всегда. Например, изменение свойства `element.value` для `<input>` не всегда меняет атрибут `value` в HTML.

## 2) Работа с атрибутами

Для работы с атрибутами используются методы `getAttribute`, `setAttribute`, `hasAttribute`, `removeAttribute`.

```js
const elem = document.querySelector('#myElement');

// Получить атрибут
console.log(elem.getAttribute('id')); // "myElement"

// Установить атрибут
elem.setAttribute('title', 'Подсказка');

// Проверить наличие атрибута
console.log(elem.hasAttribute('title')); // true

// Удалить атрибут
elem.removeAttribute('title');
```
Особенности:
- Атрибуты всегда строки.
- Если атрибут не существует, `getAttribute` вернёт `null`.
- Работа с атрибутами полезна, когда нужно получить или изменить значения, не связанные напрямую со свойствами (например, пользовательские атрибуты).

## 3) Работа со свойствами

Свойства DOM-элементов доступны напрямую как поля объекта.

```js
const elem = document.querySelector('#myElement');

// Получить свойство
console.log(elem.id); // "myElement"

// Установить свойство
elem.title = 'Подсказка';

// Проверить свойство
console.log(elem.title); // "Подсказка"

// Удалить свойство (не всегда возможно, зависит от свойства)
elem.title = '';
```

Особенности:
- Свойства могут быть не только строками (например, `element.checked` — булево значение для `<input type="checkbox">`).
- Изменение свойства обычно быстрее, чем работа с атрибутами.
- Некоторые свойства (например, `value` для `<input>`) обновляются динамически, в отличие от атрибутов.

## 4) Особые атрибуты

### 4.1) Атрибут `class`

- Управляет CSS-классами элемента.
- Свойство: `className` (строка с классами) или `classList` (объект для работы с классами).

```js
const elem = document.querySelector('#myElement');

// Работа с className
elem.className = 'new-class'; // Заменяет все классы
console.log(elem.className); // "new-class"

// Работа с classList
elem.classList.add('active'); // Добавляет класс
elem.classList.remove('new-class'); // Удаляет класс
elem.classList.toggle('hidden'); // Переключает класс
console.log(elem.classList.contains('active')); // true
```

### 4.2) Атрибут `style`

- Управляет встроенными CSS-стилями.
- Свойство: `style` (объект, где ключи — CSS-свойства в camelCase).

```js
const elem = document.querySelector('#myElement');

// Установить стиль
elem.style.backgroundColor = 'blue';
elem.style.fontSize = '16px';

// Получить стиль
console.log(elem.style.backgroundColor); // "blue"

// Установить несколько стилей через CSS-текст
elem.setAttribute('style', 'color: white; padding: 10px;');
```
Особенности:
- Свойство `style` работает только с встроенными стилями. Для вычисленных стилей (из CSS-файлов) используйте `getComputedStyle`:
```js
const styles = getComputedStyle(elem);
console.log(styles.backgroundColor); // Например, "rgb(0, 0, 255)"
```

- Свойства в `style` записываются в camelCase (`backgroundColor` вместо `background-color`).

### 4.3. Атрибут `data`

- Пользовательские атрибуты для хранения данных, начинаются с `data-`.
- Свойство: `dataset` (объект, где ключи — имена data-атрибутов без префикса `data-`).

```html
<div id="myElement" data-info="user" data-user-id="123"></div>
```

```js
const elem = document.querySelector('#myElement');

// Получить data-атрибут
console.log(elem.dataset.info); // "user"
console.log(elem.dataset.userId); // "123" (user-id → userId)

// Установить data-атрибут
elem.dataset.role = 'admin';

// Удалить data-атрибут
delete elem.dataset.info;
```

Особенности:
- Имена data-атрибутов в `dataset` преобразуются в camelCase (например, `data-user-id` → `dataset.userId`).
- Удобно для хранения метаданных, используемых в JavaScript.
- Можно получить все data-атрибуты через `getAttribute` или `dataset`.

## 5) Синхронизация атрибутов и свойств

- Стандартные атрибуты (`id`, `class`, `title`) синхронизируются с соответствующими свойствами.
- Исключения:
  - `value` для `<input>`: свойство обновляется при вводе, атрибут — нет.
  - Пользовательские атрибуты не имеют соответствующих свойств.