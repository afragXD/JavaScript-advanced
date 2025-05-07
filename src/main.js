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

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <p>JS Advanced</p>
  </div>
`;

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

const assassin = new ClassAssassin({
  health: 200,
  damage: 66,
});
console.log(assassin);

assassin.hide()
assassin.attack()

