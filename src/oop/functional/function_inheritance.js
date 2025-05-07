export function Hero(params) {
  let _health = Math.max(1, params.health);
  this.name = params.name;
  this.damage = params.damage;

  this.isAlive = () => _health > 0;

  Object.defineProperty(this, "health", {
    get: function () {
      return _health;
    },
    set: function (value) {
      if (value <= 0) {
        this.isAlive = false;
        console.log(`${this.name} убит!`);
      }
      _health = Math.max(0, value);
    },
  });
  this.attack = function () {
    if (this.isAlive) {
      console.log(`${this.name} атакует и наносит ${this.damage} урона!`);
    } else {
      console.log(`${this.name} мертв!`);
    }
  };
}

export function Assassin(params) {
  Hero.apply(this, arguments);

  this.name = "Assassin";
  this._isHidden = false;

  this.hide = function() {
    this._isHidden = true;
  };

  this.attack = function () {
    console.log(
      `${this.name} проводит ${this._isHidden ? 'скрытную ' : ''}атаку и наносит ${
        this._isHidden ? this.damage * 1.5 : this.damage
      } урона!`
    );
  };
}
