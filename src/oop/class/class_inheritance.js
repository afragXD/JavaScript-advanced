export class Hero {
  #health = 50;
  constructor(params) {
    this.name = params.name;
    this.#health = params.health;
    this.damage = params.damage;
  }
  isAlive() {
    return this.#health > 0;
  }
  get health() {
    return this.#health;
  }
  set health(value) {
    if (value <= 0) {
      console.log(`${this.name} убит!`);
    }
    this._health = Math.max(0, value);
  }
  attack() {
    if (this.isAlive()) {
      console.log(`${this.name} атакует и наносит ${this.damage} урона!`);
    } else {
      console.log(`${this.name} мертв!`);
    }
  }
}

export class Assassin extends Hero {
  #isHidden = false;
  constructor(params) {
    super({ name: "Assassin", health: params.health, damage: params.damage });
  }
  hide() {
    this.#isHidden = true;
  }
  attack() {
    if (this.isAlive()) {
      console.log(
        `${this.name} проводит ${
          this.#isHidden ? "скрытную " : ""
        }атаку и наносит ${
          this.#isHidden ? this.damage * 1.5 : this.damage
        } урона!`
      );
    } else {
      console.log(`${this.name} мертв!`);
    }
  }
}
