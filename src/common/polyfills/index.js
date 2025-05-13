export const runTasksPolyfills = () => {
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
};
