// Класс
class Animal1 {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`${this.name} гудит`);
  }
}

// Эквивалент без классов
function Animal2(name) {
  this.name = name;
}
Animal2.prototype.say = function () {
  console.log(`${this.name} издает звуки`);
};

const animal1 = new Animal1("Cat");
const animal2 = new Animal2("Dog");
console.log(animal1, animal2);

animal1.say();
animal2.say();

class Dog1 extends Animal1 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  say() {
    console.log(`${this.name} лает! Порода: ${this.breed}`);
  }
}

// Эквивалент без классов
function Dog2(name, breed) {
  Animal2.call(this, name);
  this.breed = breed;
}
Dog2.prototype = Object.create(Animal2.prototype);
Dog2.prototype.constructor = Dog2;
Dog2.prototype.say = function () {
  console.log(`${this.name} лает! Порода: ${this.breed}`);
};

const dog1 = new Dog1("Тузик", "тварь");
const dog2 = new Dog2("Бобик", "тварь");
console.log(dog1, dog2);
dog1.say();
dog2.say();

class Counter {
  static #instanceCount = 0;

  constructor() {
    Counter.#instanceCount++;
  }

  static getInstanceCount() {
    return Counter.#instanceCount;
  }
}

const c1 = new Counter();
const c2 = new Counter();
console.log(Counter.getInstanceCount()); // 2
