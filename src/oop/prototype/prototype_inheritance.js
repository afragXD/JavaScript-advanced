export function Hero(params) {
  this.name = params.name;
  this._health = params.health;
  this.damage = params.damage;
  Object.defineProperty(this, "health", {
    get: function () {
      return this._health;
    },
    set: function (value) {
      if (value <= 0) {
        console.log(`${this.name} убит!`);
      }
      this._health = Math.max(0, value);
    },
  });
}

Hero.prototype.isAlive = function () {
  return this.health > 0;
};

Hero.prototype.attack = function () {
  if (this.isAlive()) {
    console.log(`${this.name} атакует и наносит ${this.damage} урона!`);
  } else {
    console.log(`${this.name} мертв!`);
  }
};

export function Assassin(params) {  
  Hero.call(this, params);
  this._isHidden = false;
}

Assassin.prototype = Object.create(Hero.prototype);
Assassin.prototype.constructor = Assassin;

Assassin.prototype.hide = function () {
  this._isHidden = true;
};

Assassin.prototype.attack = function () {
  if (this.isAlive()) {
    console.log(
      `${this.name} проводит ${
        this._isHidden ? "скрытную " : ""
      }атаку и наносит ${
        this._isHidden ? this.damage * 1.5 : this.damage
      } урона!`
    );
  } else {
    console.log(`${this.name} мертв!`);
  }
};
