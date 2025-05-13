# Advanced DOM & Events

### - Знать типы узлов. Уметь работать с узлами (поиск, создание, перемещение и т.д.)
### - Знать и уметь работать с атрибутами и свойствами элементов. Особые атрибуты (class, style, data).
### - Знать и уметь обрабатывать события в документе и на элементах(знать методы, опции и особенности)
### - Знать жизненный цикл события
### - Знать что такое event delegation и для чего
### - Знать как загружать скрипты (и различные особенности)

DOM (Document Object Model) — это программный интерфейс, представляющий HTML-документ как дерево объектов. Каждый элемент, атрибут и текст в документе становится узлом в этом дереве, с которым можно взаимодействовать через JavaScript. DOM позволяет динамически изменять содержимое, структуру и стили веб-страницы.

BOM (Browser Object Model) — это модель, которая предоставляет доступ к объектам браузера, не связанным напрямую с содержимым страницы. BOM включает такие объекты, как:

- `window` (глобальный объект, представляющий окно браузера),
- `navigator` (информация о браузере),
- `location` (управление URL),
- `history` (управление историей браузера),
- `screen` (информация об экране).

Основное различие: DOM работает с содержимым страницы, а BOM — с браузером и его окружением.

---

## 1) Типы узлов

Полный список типов узлов

1) `ELEMENT_NODE` (1)
Узел, представляющий HTML-элемент (например, `<div>`, `<p>`).
2) ~~`ATTRIBUTE_NODE` (2)
Узел атрибута элемента (например, id="myId").
Примечание: В современном JavaScript атрибуты обычно обрабатываются через методы `getAttribute`/`setAttribute`, а узлы атрибутов редко используются напрямую.~~
3) `TEXT_NODE` (3)
Текстовое содержимое элемента или атрибута (например, текст внутри `<p>Привет</p>`).
4) `CDATA_SECTION_NODE` (4)
Узел для секций CDATA в XML-документах (например, `<![CDATA[...]]>`).
Примечание: В HTML этот тип практически не используется, так как CDATA чаще встречается в XML.
5) ~~`ENTITY_REFERENCE_NODE` (5)
Узел, представляющий ссылку на сущность (например, `&amp;`).
Примечание: Этот тип устарел и не используется в современных браузерах для HTML.~~
6) ~~`ENTITY_NODE` (6)
Узел, представляющий определение сущности в DTD (например, `<!ENTITY ...>`).
Примечание: Также устарел и не используется в HTML.~~
7) `PROCESSING_INSTRUCTION_NODE` (7)
Узел для инструкций обработки, например, `<?xml-stylesheet ...?>`.
Примечание: Используется в XML, но редко в HTML.
8) `COMMENT_NODE` (8)
Узел для комментариев (например, `<!-- Комментарий -->`).
9) `DOCUMENT_NODE` (9)
Корневой узел документа (например, объект document).
10) `DOCUMENT_TYPE_NODE` (10)
Узел, представляющий декларацию `<!DOCTYPE>` (например, `<!DOCTYPE html>`).
11) `DOCUMENT_FRAGMENT_NODE` (11)
Узел для временного контейнера узлов (`DocumentFragment`), используемого для оптимизации операций с DOM.
12) ~~`NOTATION_NODE` (12)
Узел для нотаций, определённых в DTD (например, `<!NOTATION ...>`).
Примечание: Устарел и не используется в HTML.~~

![alt text](./assets/image.png)
https://dom.spec.whatwg.org/#node

---

## 2) Методы поиска в DOM и их поведение

- `querySelector(selector)`
Ищет первый элемент, соответствующий CSS-селектору, внутри указанного элемента.

```js
const parent = document.querySelector('.parent');
const child = parent.querySelector('.child');
```
Возвращает: Один элемент или `null`

- `querySelectorAll(selector)`

Ищет все элементы, соответствующие CSS-селектору, внутри указанного элемента.

```js
const parent = document.querySelector('.parent');
const children = parent.querySelectorAll('.child');
```

Возвращает: Статический `NodeList`.

- `getElementsByClassName(className)`

Ищет все элементы с указанным классом внутри элемента.

```js
const parent = document.querySelector('.parent');
const items = parent.getElementsByClassName('item');
```
Возвращает: Живую `HTMLCollection`

- `getElementsByTagName(tagName)`

Ищет все элементы с указанным тегом внутри элемента.

```js
const parent = document.querySelector('.parent');
const divs = parent.getElementsByTagName('div');
```
Возвращает: Живую `HTMLCollection`

- `getElementsByName(name)`

Ищет элементы с атрибутом `name` внутри элемента. Обычно используется для форм.

```js
const form = document.querySelector('form');
const inputs = form.getElementsByName('username');
```
Возвращает: Живую `HTMLCollection`

- `getElementById(id)`

Ищет элемент по `id`.

```js
const div = document.getElementById('123');
console.log(div.firstChild);
```
Возвращает: Один элемент или `null`.

---
## 3) Навигация по дом от узла

- `element.closest(selector)`
Метод `element.closest(selector)` в JavaScript используется для поиска ближайшего родительского элемента (включая сам элемент), который соответствует указанному CSS-селектору. Если подходящий элемент не найден, возвращается `null`.

Вернет себя:
```js
const div = document.getElementById('test123');
console.log(div.closest('#test123'));
```

- `firstChild` и `firstElementChild`

`firstChild` возвращает первый дочерний узел (любой тип: элемент, текст, комментарий), включая пробелы и переносы строк.

`firstElementChild` возвращает первый дочерний элемент (только HTML-элемент), игнорируя текстовые узлы и комментарии.

- `lastChild` и `lastElementChild`

Последний ребенок

- `childNodes` и `children`

Возвращает дочерние `NodeList` и `HTMLCollection`

- `parentNode`

Возвращает родительскую ноду

- `previousSibling` и `previousElementSibling`

Возвращает предыдущего брата или сестру(элементы одного родителя)

- `nextSibling` и `nextElementSibling`

Возвращает следующего брата или сестру