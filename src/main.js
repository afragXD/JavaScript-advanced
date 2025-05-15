import "./style.css";
import javascriptLogo from "../public/javascript.svg";
import { Assassin, Hero } from "./oop/functional/function_inheritance";
import {
  Assassin as ProtoAssassin,
  Hero as ProtoHero,
} from "./oop/prototype/prototype_inheritance";
import {
  Assassin as ClassAssassin,
  Hero as ClassHero,
} from "./oop/class/class_inheritance";
import { runTasksDestructuring } from "./es/es6/destructuring";
import { runTasksGenerators } from "./es/es6/generators";
import { runTasksPolyfills } from "./common/polyfills";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <p>JS Advanced</p>
    <div id="test123" class="test">
      <div id="a1">1</div>
      <div id="a2">2</div>
      <div id="a3">3</div>
      <div id="a4">4</div>
      <div id="a5">5</div>
    </div>
  </div>
`;

// тут просто тестирование всякой всячины


// const hero = new Hero({
//   name: 'Ivan',
//   health: 100,
//   damage: 10,
// });
// console.log(hero);
// hero.health -= 20;
// hero.health -= 50;

// console.log(hero.health);

// hero.health -= 60;

// console.log(hero.health);
// hero.attack()

// const assassin = new Assassin({
//   health: 150,
//   damage: 66,
// });
// console.log(assassin);
// assassin.attack();
// assassin.hide();
// assassin.attack();

// const hero = new ProtoHero({
//   name: "Ivan",
//   health: 100,
//   damage: 10,
// });
// console.log(hero);

// const assassin = new ProtoAssassin({
//   name: 'Assassin',
//   health: 150,
//   damage: 66,
// });
// console.log(assassin);

// assassin.health -= 50;
// assassin.hide();
// assassin.attack();

// const assassin = new ClassAssassin({
//   health: 200,
//   damage: 66,
// });
// console.log(assassin);

// assassin.hide()
// assassin.attack()

// runTasksDestructuring();

// runTasksGenerators();

// function test(a, b, c) {
//   console.log(arguments);

//   for (let a in arguments) {
//     console.log(a);
//   }

//   for (let a of arguments) {
//     console.log(a);
//   }
// }

// test('a', 'b', 'c');

// function fn(a = 5) {
//   console.log(a);
// }

// fn(null);
// fn(undefined);

// function fn() {
//   console.log(this);
// }
// fn();

// const { a: b = 4 } = { b: 3 };
// // console.log(a);
// console.log(b);
// const key = '123'
// const i = '567'
// const obj = {[key] : [i, 5]}
// // вытащи деструктуризацией i
// const { [key] : [res] } = obj;
// console.log(res);

// const obj = {
// 	a: () => {
//     console.log(this);
//   },
// 	b: function () {
//     console.log(this);
//   },
// 	c(){
//     console.log(this);
//   },
// }
// console.log(obj.b.prototype);
// console.log(obj.c.prototype);

const map = new Map();
let obj = { a: 5 };
map.set(obj, 10);
obj = null;
console.log(map) //что будет в консоли

// const arr = [1, 2, 3];
// const iter = arr[Symbol.iterator]()
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function fn(a, b, c) {
//   const iter = arguments[Symbol.iterator]();
//   console.log(iter.next());
//   console.log(iter.next());
//   console.log(iter.next());
//   console.log(iter.next());
// }

// fn('a', 'b', 'c');


// runTasksPolyfills();

// const axaxa = ['a', 'b', 'c'];

// axaxa.myForEach((value, index, array) => {
//   console.log(value, index, array);
// });

// const test = axaxa.myMap((value, index, array) => {
//   return `${value} XD!`
// });

// console.log(test);

// const div = document.querySelector('.test');

// const newDiv = document.createElement('div');
// newDiv.textContent = 'Новый div';
// div.append(newDiv)

// console.log(div.hasChildNodes());

const main = document.getElementById('test123');

function logTar(event) {
  console.log(event.target, this);
};

const outerDiv = document.createElement('div'); // самый верхний контейнер
const innerDiv = document.createElement('div'); // контейнер внутри outerDiv
const button = document.createElement('button'); // кнопка внутри innerDiv
button.textContent = 'Click -_-';

// добавляем элементы
innerDiv.appendChild(button);
outerDiv.appendChild(innerDiv);
main.after(outerDiv);

// вешаем слушатели
outerDiv.addEventListener('click', logTar, true);
innerDiv.addEventListener('click', logTar);
button.addEventListener('click', logTar);

console.log(Object.getPrototypeOf(button));
